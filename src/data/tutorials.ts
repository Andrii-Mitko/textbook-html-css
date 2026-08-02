export interface Tutorial {
  id: string;
  title: string;
  description: string;
  icon: string;
  href: string;
  sections: number;
  lessons: number;
  level: "Початковий" | "Середній" | "Просунутий";
}

export const tutorials: Tutorial[] = [
  {
    id: "git",
    title: "Навчальник Git",
    description:
      "Повний курс Git від основ до роботи з віддаленими репозиторіями.",
    icon: "🌿",
    href: "/tutorials/git",
    sections: 6,
    lessons: 66,
    level: "Початковий",
  },
  {
    id: "html",
    title: "Основний навчальник HTML",
    description: "Вивчення HTML від першого тега до семантичної розмітки.",
    icon: "📄",
    href: "/tutorials/html",
    sections: 0,
    lessons: 0,
    level: "Початковий",
  },
  {
    id: "css",
    title: "Основний навчальник CSS",
    description: "Стилізація вебсторінок, Flexbox, Grid та адаптивна верстка.",
    icon: "🎨",
    href: "/tutorials/css",
    sections: 0,
    lessons: 0,
    level: "Початковий",
  },
  {
    id: "advanced",
    title: "Поглиблений навчальник",
    description: "JavaScript, TypeScript, React, Next.js та Node.js.",
    icon: "🚀",
    href: "/tutorials/advanced",
    sections: 0,
    lessons: 0,
    level: "Просунутий",
  },
  {
    id: "less",
    title: "Навчальник LESS",
    description: "Робота з препроцесором LESS.",
    icon: "💙",
    href: "/tutorials/less",
    sections: 0,
    lessons: 0,
    level: "Середній",
  },
  {
    id: "sass",
    title: "Навчальник SASS",
    description: "Повний курс з препроцесора SASS/SCSS.",
    icon: "💗",
    href: "/tutorials/sass",
    sections: 0,
    lessons: 0,
    level: "Середній",
  },
  {
    id: "html-reference",
    title: "Довідник HTML",
    description: "Опис усіх HTML-тегів та атрибутів.",
    icon: "📚",
    href: "/reference/html",
    sections: 0,
    lessons: 0,
    level: "Початковий",
  },
  {
    id: "css-reference",
    title: "Довідник CSS",
    description: "Властивості CSS з прикладами використання.",
    icon: "📘",
    href: "/reference/css",
    sections: 0,
    lessons: 0,
    level: "Початковий",
  },
  {
    id: "tasks",
    title: "Задачник",
    description: "Практичні завдання різних рівнів складності.",
    icon: "📝",
    href: "/tasks",
    sections: 0,
    lessons: 0,
    level: "Початковий",
  },
];
