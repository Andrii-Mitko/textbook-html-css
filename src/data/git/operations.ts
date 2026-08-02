import type { Lesson } from "./git";

export const operations: Lesson[] = [
  {
    id: "introduction",
    title: "Вступ",
    description: "Огляд основних команд Git.",
    content: [],
  },
  {
    id: "status-short",
    title: "Короткий статус репозиторію",
    description: "Команда git status --short.",
    content: [],
  },
  {
    id: "gitignore",
    title: "Ігнорування файлів",
    description: "Робота з файлом .gitignore.",
    content: [],
  },
  {
    id: "diff",
    title: "Перегляд змін",
    description: "Команда git diff.",
    content: [],
  },
  {
    id: "skip-worktree",
    title: "Пропуск індексації",
    description: "Тимчасове ігнорування локальних змін.",
    content: [],
  },
  {
    id: "remove-file",
    title: "Видалення файлів",
    description: "Команда git rm.",
    content: [],
  },
  {
    id: "rename-file",
    title: "Перейменування файлів",
    description: "Команда git mv.",
    content: [],
  },
  {
    id: "move-file",
    title: "Переміщення файлів",
    description: "Переміщення файлів між папками.",
    content: [],
  },
  {
    id: "history",
    title: "Перегляд історії комітів",
    description: "Команда git log.",
    content: [],
  },
  {
    id: "history-flags",
    title: "Параметри git log",
    description: "Корисні параметри команди git log.",
    content: [],
  },
  {
    id: "history-filter",
    title: "Обмеження історії",
    description: "Фільтрація історії комітів.",
    content: [],
  },
  {
    id: "amend",
    title: "Редагування останнього коміту",
    description: "Команда git commit --amend.",
    content: [],
  },
  {
    id: "unstage",
    title: "Скасування індексації файлу",
    description: "Команда git restore --staged.",
    content: [],
  },
  {
    id: "restore",
    title: "Скасування змін у файлі",
    description: "Команда git restore.",
    content: [],
  },
  {
    id: "aliases",
    title: "Псевдоніми команд",
    description: "Створення власних скорочень Git.",
    content: [],
  },
];
