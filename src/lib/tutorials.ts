import { tutorialsData } from '@/data/tutorialsData';
import { Lesson } from '@/data/types';

type TutorialId = keyof typeof tutorialsData;

// Type guard: відсікає ключі з прототипу (constructor, toString тощо)
const isTutorialId = (id: string): id is TutorialId => Object.hasOwn(tutorialsData, id);

function getTutorial(tutorialId: string) {
  return isTutorialId(tutorialId) ? tutorialsData[tutorialId] : undefined;
}

export function getAllLessons(tutorialId: string): Lesson[] {
  const tutorial = getTutorial(tutorialId);

  if (!tutorial) {
    return [];
  }

  return tutorial.sections.flatMap(section => section.lessons);
}

export function getAllLessonParams(): { id: string; lesson: string }[] {
  return Object.keys(tutorialsData).flatMap(id =>
    getAllLessons(id).map(lesson => ({ id, lesson: lesson.id }))
  );
}

export function getLessonById(tutorialId: string, lessonId: string): Lesson | undefined {
  return getAllLessons(tutorialId).find(lesson => lesson.id === lessonId);
}

export function getLessonIndex(tutorialId: string, lessonId: string): number {
  return getAllLessons(tutorialId).findIndex(lesson => lesson.id === lessonId);
}

export function getPreviousLesson(tutorialId: string, lessonId: string): Lesson | undefined {
  const lessons = getAllLessons(tutorialId);
  const index = lessons.findIndex(lesson => lesson.id === lessonId);

  return index > 0 ? lessons[index - 1] : undefined;
}

export function getNextLesson(tutorialId: string, lessonId: string): Lesson | undefined {
  const lessons = getAllLessons(tutorialId);
  const index = lessons.findIndex(lesson => lesson.id === lessonId);

  return index !== -1 ? lessons[index + 1] : undefined;
}

export function getLessonsCount(tutorialId: string): number {
  return getAllLessons(tutorialId).length;
}

export function getTutorialTitle(tutorialId: string): string {
  return getTutorial(tutorialId)?.title ?? '';
}
