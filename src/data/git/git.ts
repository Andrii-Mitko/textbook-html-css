import type { Section } from "../types";

import { start } from "./start";
import { basics } from "./basics";
import { operations } from "./operations";
import { branches } from "./branches";
import { remotes } from "./remotes";
import { remoteOperations } from "./remoteOperations";

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
