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
    id: string;
    lesson: string;
  }>;
}

export default async function LessonPage({ params }: LessonPageProps) {
  const { id, lesson } = await params;

  const currentLesson = getLessonById(id, lesson);

  const previousLesson = getPreviousLesson(id, lesson);

  const nextLesson = getNextLesson(id, lesson);

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

      <LessonNavigation
        tutorialId={id}
        previous={previousLesson}
        next={nextLesson}
      />
    </article>
  );
}
