import { start } from "./start";
import { basics } from "./basics";
import { operations } from "./operations";
import { branches } from "./branches";
import { remotes } from "./remotes";
import { remoteOperations } from "./remoteOperations";

export type LessonContent =
  | {
      type:
        | "heading"
        | "paragraph"
        | "code"
        | "note"
        | "hint"
        | "answer"
        | "diagram";
      value: string;
      language?: string;
    }
  | {
      type: "list" | "task";
      value: string[];
    }
  | {
      type: "table";
      value: [string, ...string[]][];
    };

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
