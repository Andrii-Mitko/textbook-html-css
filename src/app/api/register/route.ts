import { NextResponse } from 'next/server';
import bcrypt from 'bcryptjs';
import { connectDB } from '@/lib/db';
import { User } from '@/models/User';
import { registerSchema } from '@/lib/validations/auth';

export async function POST(request: Request) {
  const body: unknown = await request.json().catch(() => null);
  const parsed = registerSchema.safeParse(body);

  if (!parsed.success) {
    return NextResponse.json(
      { error: parsed.error.issues[0]?.message ?? 'Невірні дані' },
      { status: 400 }
    );
  }

  const { name, email, password } = parsed.data;

  await connectDB();

  const existingUser = await User.exists({ email });
  if (existingUser) {
    return NextResponse.json({ error: 'Email вже зареєстровано' }, { status: 409 });
  }

  // 12 раундів - баланс між безпекою та швидкістю
  const hashedPassword = await bcrypt.hash(password, 12);
  await User.create({ name, email, password: hashedPassword });

  return NextResponse.json({ success: true }, { status: 201 });
}
