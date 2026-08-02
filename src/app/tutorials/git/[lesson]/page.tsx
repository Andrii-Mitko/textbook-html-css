import { notFound } from "next/navigation";
import {
  getLessonById,
  getNextLesson,
  getPreviousLesson,
} from "@/lib/tutorials";
import LessonContent from "@/components/LessonContent/LessonContent";
import css from "./page.module.css";
import LessonNavigation from "@/components/LessonNavigation/LessonNavigation";

interface LessonPageProps {
  params: Promise<{
    lesson: string;
  }>;
}

export default async function LessonPage({ params }: LessonPageProps) {
  const { lesson } = await params;

  const currentLesson = getLessonById(lesson);

  const previousLesson = getPreviousLesson(lesson);

  const nextLesson = getNextLesson(lesson);

  if (!currentLesson) {
    notFound();
  }

  return (
    <article className={css.page}>
      <h1 className={css.title}>{currentLesson.title}</h1>

      <p className={css.description}>{currentLesson.description}</p>

      <div className={css.content}>
        <LessonContent content={currentLesson.content} />
      </div>

      <LessonNavigation previous={previousLesson} next={nextLesson} />
    </article>
  );
}
