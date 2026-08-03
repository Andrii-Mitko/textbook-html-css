import type { Lesson } from "../types";

export const design: Lesson[] = [
  {
    id: "css-background-color",

    title: "Встановлення фонового кольору в CSS",

    description:
      "Вивчаємо властивість background-color, яка дозволяє задавати колір фону HTML-елементів.",

    content: [
      {
        type: "heading",
        text: "Встановлення фонового кольору в CSS",
      },

      {
        type: "paragraph",
        text: "Властивість background-color використовується для зміни кольору фону елементів. Вона працює з тими самими значеннями кольорів, що і властивість color.",
      },

      {
        type: "heading",
        text: "HTML/CSS приклад",
      },

      {
        type: "code",
        language: "html",
        code: `<div id="elem">
  Lorem ipsum dolor sit amet.
</div>`,
      },

      {
        type: "code",
        language: "css",
        code: `#elem {
  width: 300px;
  height: 100px;
  color: white;
  background-color: orange;
}`,
      },

      {
        type: "heading",
        text: "Що вийде",
      },

      {
        type: "paragraph",
        text: "Блок матиме ширину 300px, висоту 100px, білий текст і помаранчевий фон.",
      },

      {
        type: "heading",
        text: "Основні значення background-color",
      },

      {
        type: "code",
        language: "css",
        code: `.red {
  background-color: red;
}

.blue {
  background-color: blue;
}

.hex {
  background-color: #2563eb;
}

.rgb {
  background-color: rgb(34, 197, 94);
}`,
      },

      {
        type: "paragraph",
        text: "Колір можна задавати назвою, HEX-кодом, RGB або іншими форматами кольорів.",
      },
      {
        type: "note",
        text: "Для простих однотонних фонів використовуйте background-color. Властивість background краще залишати для складних випадків: градієнти, картинки та кілька фонів.",
      },
      {
        type: "heading",
        text: "Практичні завдання",
      },

      {
        type: "task",
        text: [
          "№1",
          "",
          "Повторіть сторінку за зразком:",
          "",
          "Створіть блок:",
          "- ширина 300px;",
          "- висота 150px;",
          "- білий текст;",
          "- зелений фон;",
          "- текст всередині: Welcome!",
        ],
      },

      {
        type: "hint",
        text: "Використовуйте властивість background-color для фону та color для тексту.",
      },

      {
        type: "answer",
        text: `<div class="box">
  Welcome!
</div>

.box {
  width: 300px;
  height: 150px;
  color: white;
  background-color: green;
}`,
      },

      {
        type: "task",
        text: [
          "№2",
          "",
          "Повторіть сторінку за зразком:",
          "",
          "Створіть три блоки:",
          "- перший з червоним фоном;",
          "- другий з синім фоном;",
          "- третій з жовтим фоном.",
        ],
      },

      {
        type: "hint",
        text: "Створіть окремі CSS-класи для кожного кольору.",
      },

      {
        type: "answer",
        text: `.red {
  background-color: red;
}

.blue {
  background-color: blue;
}

.yellow {
  background-color: yellow;
}

<div class="red">
  Red block
</div>

<div class="blue">
  Blue block
</div>

<div class="yellow">
  Yellow block
</div>`,
      },
    ],
  },
];
