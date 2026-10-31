import { NextResponse } from 'next/server';
import { auth } from '@/auth';
import { connectDB } from '@/lib/db';
import { Progress } from '@/models/Progress';
import { progressSchema } from '@/lib/validations/progress';
import { getLessonById } from '@/lib/tutorials';

// Список пройдених уроків поточного користувача
export async function GET() {
  const session = await auth();
  if (!session?.user?.id) {
    return NextResponse.json({ error: 'Не авторизовано' }, { status: 401 });
  }

  await connectDB();

  const completed = await Progress.find({ userId: session.user.id })
    .select('tutorialId lessonId -_id')
    .lean();

  return NextResponse.json({ completed });
}

// Позначити урок пройденим
export async function POST(request: Request) {
  const session = await auth();
  if (!session?.user?.id) {
    return NextResponse.json({ error: 'Не авторизовано' }, { status: 401 });
  }

  const body: unknown = await request.json().catch(() => null);
  const parsed = progressSchema.safeParse(body);

  if (!parsed.success) {
    return NextResponse.json({ error: 'Невірні дані' }, { status: 400 });
  }

  const { tutorialId, lessonId } = parsed.data;

  // Не дозволяємо записувати неіснуючі уроки
  if (!getLessonById(tutorialId, lessonId)) {
    return NextResponse.json({ error: 'Урок не знайдено' }, { status: 404 });
  }

  await connectDB();

  // upsert робить запит ідемпотентним: повторний клік не створює дублів
  await Progress.updateOne(
    { userId: session.user.id, tutorialId, lessonId },
    { $setOnInsert: { completedAt: new Date() } },
    { upsert: true }
  );

  return NextResponse.json({ success: true });
}
