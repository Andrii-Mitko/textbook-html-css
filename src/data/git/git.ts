import { start } from "./start";
import { basics } from "./basics";
import { operations } from "./operations";
import { branches } from "./branches";
import { remotes } from "./remotes";
import { remoteOperations } from "./remoteOperations";

export interface LessonContent {
  type:
    | "heading"
    | "paragraph"
    | "code"
    | "list"
    | "note"
    | "hint"
    | "answer"
    | "task";
  value: string | string[];
  language?: string;
}

export interface Lesson {
  id: string;
  title: string;
  description: string;
  content: LessonContent[];
}

export interface Section {
  id: string;
  title: string;
  lessons: Lesson[];
}

export const gitTutorial: Section[] = [
  {
    id: "start",
    title: "Початок",
    lessons: start,
  },
  {
    id: "basics",
    title: "Основи",
    lessons: basics,
  },
  {
    id: "operations",
    title: "Операції",
    lessons: operations,
  },
  {
    id: "branches",
    title: "Гілки",
    lessons: branches,
  },
  {
    id: "remotes",
    title: "Віддалені репозиторії",
    lessons: remotes,
  },
  {
    id: "remote-operations",
    title: "Робота з віддаленими репозиторіями",
    lessons: remoteOperations,
  },
];
