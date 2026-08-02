import { start } from "./git/start";
import { basics } from "./git/basics";
import { operations } from "./git/operations";
import { branches } from "./git/branches";
import { remotes } from "./git/remotes";
import { remoteOperations } from "./git/remoteOperations";

export const gitTutorial = [
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
