import { gitTutorial } from "@/data";
import { Lesson } from "@/data/git/git";

export function getAllLessons(): Lesson[] {
  return gitTutorial.flatMap((section) => section.lessons);
}

export function getLessonById(id: string): Lesson | undefined {
  return getAllLessons().find((lesson) => lesson.id === id);
}

export function getPreviousLesson(id: string): Lesson | undefined {
  const lessons = getAllLessons();

  const index = lessons.findIndex((lesson) => lesson.id === id);

  if (index <= 0) {
    return undefined;
  }

  return lessons[index - 1];
}

export function getNextLesson(id: string): Lesson | undefined {
  const lessons = getAllLessons();

  const index = lessons.findIndex((lesson) => lesson.id === id);

  if (index === -1 || index === lessons.length - 1) {
    return undefined;
  }

  return lessons[index + 1];
}
