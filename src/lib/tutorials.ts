import { tutorialsData } from "@/data/tutorialsData";
import { Lesson } from "@/data/types";

export function getAllLessons(tutorialId: string): Lesson[] {
  const tutorial = tutorialsData[tutorialId as keyof typeof tutorialsData];

  if (!tutorial) {
    return [];
  }

  return tutorial.sections.flatMap((section) => section.lessons);
}

export function getLessonById(
  tutorialId: string,
  lessonId: string,
): Lesson | undefined {
  return getAllLessons(tutorialId).find((lesson) => lesson.id === lessonId);
}

export function getPreviousLesson(
  tutorialId: string,
  lessonId: string,
): Lesson | undefined {
  const lessons = getAllLessons(tutorialId);

  const index = lessons.findIndex((lesson) => lesson.id === lessonId);

  if (index <= 0) {
    return undefined;
  }

  return lessons[index - 1];
}

export function getNextLesson(
  tutorialId: string,
  lessonId: string,
): Lesson | undefined {
  const lessons = getAllLessons(tutorialId);

  const index = lessons.findIndex((lesson) => lesson.id === lessonId);

  if (index === -1 || index === lessons.length - 1) {
    return undefined;
  }

  return lessons[index + 1];
}

export function getLessonIndex(tutorialId: string, lessonId: string): number {
  return getAllLessons(tutorialId).findIndex(
    (lesson) => lesson.id === lessonId,
  );
}
export function getLessonsCount(tutorialId: string): number {
  return getAllLessons(tutorialId).length;
}

export function getTutorialTitle(tutorialId: string): string {
  return tutorialsData[tutorialId as keyof typeof tutorialsData]?.title ?? "";
}
