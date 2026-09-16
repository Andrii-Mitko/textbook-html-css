export interface Tutorial {
  id: string;
  title: string;
  description: string;
  icon: string;
  href: string;
  sections: number;
  lessons: number;
  level: "Початковий" | "Середній" | "Просунутий";

  category: "Навчання" | "Довідники" | "Практика" | "Інструменти";
}
export const tutorials: Tutorial[] = [
  {
    id: "git",
    title: "Git",
    description:
      "Повний курс Git від основ до роботи з віддаленими репозиторіями.",
    icon: "🌿",
    href: "/tutorials/git",
    sections: 6,
    lessons: 65,
    level: "Початковий",
    category: "Інструменти",
  },
  {
    id: "html",
    title: "Основи HTML+CSS",
    description: "Вивчення HTML від першого тега до семантичної розмітки.",
    icon: "📄",
    href: "/tutorials/html",
    sections: 10,
    lessons: 239,
    level: "Початковий",
    category: "Навчання",
  },
  {
    id: "highest",
    title: "Поглиблений HTML+CSS",
    description: "Поглиблене HTML, CSS, архітектура стилів та сучасна верстка.",
    icon: "🚀",
    href: "/tutorials/highest",
    sections: 9,
    lessons: 128,
    level: "Просунутий",
    category: "Навчання",
  },
  // {
  //   id: "less",
  //   title: "Навчальник LESS",
  //   description: "Робота з препроцесором LESS.",
  //   icon: "💙",
  //   href: "/tutorials/less",
  //   sections: 0,
  //   lessons: 0,
  //   level: "Середній",
  //   category: "Навчання",
  // },
  // {
  //   id: "sass",
  //   title: "Навчальник SASS",
  //   description: "Повний курс з препроцесора SASS/SCSS.",
  //   icon: "💗",
  //   href: "/tutorials/sass",
  //   sections: 0,
  //   lessons: 0,
  //   level: "Середній",
  //   category: "Навчання",
  // },
  // {
  //   id: "html-reference",
  //   title: "Довідник HTML",
  //   description: "Опис усіх HTML-тегів та атрибутів.",
  //   icon: "📚",
  //   href: "/reference/html",
  //   sections: 0,
  //   lessons: 0,
  //   level: "Початковий",
  //   category: "Довідники",
  // },
  // {
  //   id: "css-reference",
  //   title: "Довідник CSS",
  //   description: "Властивості CSS з прикладами використання.",
  //   icon: "📘",
  //   href: "/reference/css",
  //   sections: 0,
  //   lessons: 0,
  //   level: "Початковий",
  //   category: "Довідники",
  // },
  // {
  //   id: "tasks",
  //   title: "Задачник по рівнях",
  //   description: "Практичні завдання різних рівнів складності.",
  //   icon: "📝",
  //   href: "/tasks",
  //   sections: 0,
  //   lessons: 0,
  //   level: "Початковий",
  //   category: "Практика",
  // },
];
