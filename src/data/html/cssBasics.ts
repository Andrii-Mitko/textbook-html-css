import type { Lesson } from "../types";

export const cssBasics: Lesson[] = [
  {
    id: "css-intro",
    title: "Основи роботи з мовою CSS",
    description:
      "Познайомтеся з CSS, його призначенням та підключенням стилів до HTML-сторінки.",

    content: [
      {
        type: "heading",
        text: "Основи роботи з мовою CSS",
      },

      {
        type: "paragraph",
        text: "HTML дозволяє створити структуру сторінки: заголовки, абзаци, списки, таблиці та інші елементи. Але без стилів сторінка буде виглядати простою.",
      },

      {
        type: "paragraph",
        text: "За допомогою CSS можна змінювати колір тексту, розмір шрифту, фон, відступи, розташування елементів та багато іншого.",
      },

      {
        type: "heading",
        text: "Що таке CSS",
      },

      {
        type: "paragraph",
        text: "CSS (Cascading Style Sheets) — це мова стилів, яка використовується для оформлення HTML-документів.",
      },

      {
        type: "table",
        headers: ["Мова", "Відповідає за"],
        rows: [
          ["HTML", "Структуру сторінки"],
          ["CSS", "Зовнішній вигляд сторінки"],
          ["JavaScript", "Інтерактивність сторінки"],
        ],
      },

      {
        type: "heading",
        text: "Окремий CSS файл",
      },

      {
        type: "paragraph",
        text: "Зазвичай стилі зберігають у окремому файлі з розширенням .css. Такий файл можна підключити до багатьох HTML-сторінок.",
      },

      {
        type: "paragraph",
        text: "Перевага такого підходу в тому, що нам не потрібно змінювати кожну HTML-сторінку окремо. Достатньо змінити один CSS-файл, і стилі оновляться всюди.",
      },

      {
        type: "heading",
        text: "Підключення CSS до HTML",
      },

      {
        type: "code",
        language: "html",
        code: `<link 
  rel="stylesheet"
  href="styles.css"
>`,
      },

      {
        type: "paragraph",
        text: "Тег link зазвичай розміщується всередині тегу head, тому браузер завантажує стилі перед відображенням сторінки.",
      },

      {
        type: "heading",
        text: "Приклад HTML з підключеним CSS",
      },

      {
        type: "code",
        language: "html",
        code: `<!DOCTYPE html>
<html>

<head>
  <meta charset="utf-8">

  <title>
    My page
  </title>

  <link
    rel="stylesheet"
    href="styles.css"
  >
</head>

<body>

  <p>
    This is a paragraph.
  </p>

</body>

</html>`,
      },

      {
        type: "heading",
        text: "Файл styles.css",
      },

      {
        type: "code",
        language: "css",
        code: `p {
  color: red;
}`,
      },

      {
        type: "paragraph",
        text: "Після підключення цього файлу всі абзаци на сторінці отримають червоний колір.",
      },

      {
        type: "note",
        text: "CSS-файл може бути один для всього сайту. Це дозволяє швидко змінювати дизайн великої кількості сторінок.",
      },

      {
        type: "task",
        text: [
          "Створіть файл styles.css.",
          "Підключіть його до своїх HTML-сторінок через тег link.",
          "Додайте CSS-правило для тегу p.",
          "Змініть колір тексту абзаців.",
        ],
      },

      {
        type: "hint",
        text: "CSS файл потрібно підключати всередині тегу head за допомогою link.",
      },

      {
        type: "answer",
        text: `HTML:

<head>
  <link 
    rel="stylesheet"
    href="styles.css"
  >
</head>


styles.css:

p {
  color: red;
}`,
      },
    ],
  },
  {
    id: "css-selectors-basics",
    title: "Як працювати з CSS",
    description:
      "Навчіться створювати CSS-правила за допомогою селекторів, властивостей і значень.",

    content: [
      {
        type: "heading",
        text: "Як працювати з CSS",
      },

      {
        type: "paragraph",
        text: "Кожному HTML-тегу відповідає CSS-селектор. За допомогою селекторів ми можемо звертатися до елементів сторінки та змінювати їхній вигляд.",
      },

      {
        type: "paragraph",
        text: "Наприклад, якщо у HTML є абзаци p, то CSS-селектор p дозволяє змінити стиль усіх абзаців одразу.",
      },

      {
        type: "heading",
        text: "Структура CSS-правила",
      },

      {
        type: "code",
        language: "css",
        code: `селектор {
  властивість: значення;
}`,
      },

      {
        type: "paragraph",
        text: "CSS-правило складається із селектора та блоку стилів у фігурних дужках. Всередині записуються властивості та їх значення.",
      },

      {
        type: "table",
        headers: ["Частина", "Приклад"],
        rows: [
          ["Селектор", "p"],
          ["Властивість", "color"],
          ["Значення", "red"],
        ],
      },

      {
        type: "heading",
        text: "Приклад CSS",
      },

      {
        type: "code",
        language: "css",
        code: `p {
  color: red;
}`,
      },

      {
        type: "paragraph",
        text: "Це правило знайде всі абзаци p на сторінці та змінить колір їхнього тексту на червоний.",
      },

      {
        type: "heading",
        text: "Декілька властивостей одночасно",
      },

      {
        type: "code",
        language: "css",
        code: `p {
  color: red;
  font-size: 20px;
}`,
      },

      {
        type: "paragraph",
        text: "Один селектор може містити багато CSS-властивостей. Кожне правило завершується крапкою з комою.",
      },

      {
        type: "list",
        items: [
          "Селектор визначає, до яких HTML-елементів застосувати стиль.",
          "Властивість визначає, що саме змінюємо.",
          "Значення визначає результат зміни.",
          "Кожен CSS-рядок закінчується крапкою з комою.",
        ],
      },

      {
        type: "note",
        text: "Один CSS-селектор може змінити сотні однакових елементів на сторінці. У цьому і полягає головна сила CSS.",
      },

      {
        type: "task",
        text: [
          "Відкрийте файл styles.css.",
          "Додайте правило для всіх тегів p.",
          "Змініть колір абзаців на червоний.",
          "Перевірте результат у браузері.",
        ],
      },

      {
        type: "hint",
        text: "Використайте селектор p і властивість color зі значенням red.",
      },

      {
        type: "answer",
        text: `styles.css:

p {
  color: red;
}`,
      },
    ],
  },
  {
    id: "css-color-keywords",
    title: "Ключові слова для кольору в CSS",
    description:
      "Навчіться змінювати колір HTML-елементів за допомогою стандартних назв кольорів CSS.",

    content: [
      {
        type: "heading",
        text: "Ключові слова для кольору в CSS",
      },

      {
        type: "paragraph",
        text: "У CSS можна задавати кольори не тільки за допомогою складних значень, а й використовуючи готові ключові слова.",
      },

      {
        type: "paragraph",
        text: "Ключове слово — це англійська назва кольору, яку браузер розуміє та автоматично перетворює у відповідний колір.",
      },

      {
        type: "heading",
        text: "Приклади кольорів CSS",
      },

      {
        type: "table",
        headers: ["CSS значення", "Колір"],
        rows: [
          ["red", "червоний"],
          ["green", "зелений"],
          ["blue", "блакитний"],
          ["yellow", "жовтий"],
          ["orange", "оранжевий"],
          ["black", "чорний"],
          ["white", "білий"],
        ],
      },

      {
        type: "heading",
        text: "Приклад використання",
      },

      {
        type: "code",
        language: "css",
        code: `h1 {
  color: green;
}

h2 {
  color: blue;
}

p {
  color: orange;
}`,
      },

      {
        type: "paragraph",
        text: "У цьому прикладі кожен HTML-елемент отримує власний колір через CSS-селектор.",
      },

      {
        type: "list",
        items: [
          "h1 буде зеленого кольору.",
          "h2 буде блакитного кольору.",
          "h3 буде червоного кольору.",
          "Абзаци p будуть оранжевого кольору.",
        ],
      },

      {
        type: "note",
        text: "Ключові слова кольорів зручні для навчання та простих проектів. У реальних проектах частіше використовують HEX, RGB або HSL кольори.",
      },

      {
        type: "task",
        text: [
          "Створіть CSS-селектори для h1, h2, h3 та p.",
          "Задайте h1 зелений колір.",
          "Задайте h2 блакитний колір.",
          "Задайте h3 червоний колір.",
          "Задайте абзацам p оранжевий колір.",
        ],
      },

      {
        type: "hint",
        text: "Для зміни кольору тексту використовуйте властивість color.",
      },

      {
        type: "answer",
        text: `styles.css:

h1 {
  color: green;
}

h2 {
  color: blue;
}

h3 {
  color: red;
}

p {
  color: orange;
}`,
      },
    ],
  },
  {
    id: "css-colors-rgb-hex",
    title: "Будь-які кольори в CSS",
    description:
      "Навчіться задавати кольори в CSS за допомогою RGB та HEX форматів.",

    content: [
      {
        type: "heading",
        text: "Будь-які кольори в CSS",
      },

      {
        type: "paragraph",
        text: "У CSS можна задавати кольори не тільки за допомогою ключових слів, таких як red або blue.",
      },

      {
        type: "paragraph",
        text: "Ключових слів кольорів небагато, тому для створення будь-яких відтінків використовують спеціальні формати: RGB та HEX.",
      },

      {
        type: "heading",
        text: "RGB формат",
      },

      {
        type: "paragraph",
        text: "RGB — це спосіб опису кольору через три значення: червоний (Red), зелений (Green) і синій (Blue).",
      },

      {
        type: "paragraph",
        text: "Кожне значення може бути від 0 до 255. Змінюючи ці числа, можна отримати мільйони різних кольорів.",
      },

      {
        type: "code",
        language: "css",
        code: `p {
  color: rgb(255, 236, 114);
}`,
      },

      {
        type: "table",
        headers: ["Колір", "Значення"],
        rows: [
          ["Червоний", "rgb(255, 0, 0)"],
          ["Зелений", "rgb(0, 255, 0)"],
          ["Синій", "rgb(0, 0, 255)"],
          ["Білий", "rgb(255, 255, 255)"],
          ["Чорний", "rgb(0, 0, 0)"],
        ],
      },

      {
        type: "heading",
        text: "HEX формат",
      },

      {
        type: "paragraph",
        text: "HEX — це запис кольору за допомогою шістнадцяткового коду. Він починається із символу # і містить шість символів.",
      },

      {
        type: "code",
        language: "css",
        code: `p {
  color: #ff0000;
}`,
      },

      {
        type: "paragraph",
        text: "Перші два символи відповідають за червоний колір, наступні два — за зелений, останні два — за синій.",
      },

      {
        type: "table",
        headers: ["HEX", "Колір"],
        rows: [
          ["#ff0000", "червоний"],
          ["#00ff00", "зелений"],
          ["#0000ff", "синій"],
          ["#ffffff", "білий"],
          ["#000000", "чорний"],
        ],
      },

      {
        type: "heading",
        text: "Генератори кольорів",
      },

      {
        type: "paragraph",
        text: "Щоб знайти потрібний відтінок, розробники використовують спеціальні генератори кольорів або графічні програми.",
      },

      {
        type: "list",
        items: [
          "Генератори кольорів допомагають підібрати HEX та RGB значення.",
          "Графічні редактори дозволяють визначити колір із зображення.",
          "У професійній розробці часто використовують готові палітри проекту.",
        ],
      },

      {
        type: "code",
        language: "css",
        code: `/* RGB */

.title {
  color: rgb(37, 99, 235);
}


/* HEX */

.button {
  color: #2563eb;
}`,
      },

      {
        type: "note",
        text: "У сучасній веброзробці HEX-коди використовуються дуже часто, тому що їх зручно зберігати в дизайн-системах і CSS-змінних.",
      },

      {
        type: "task",
        text: [
          "Створіть два CSS-правила для будь-яких HTML-тегів.",
          "Для першого використайте RGB формат.",
          "Для другого використайте HEX формат.",
          "Підберіть власні кольори та перевірте результат у браузері.",
        ],
      },

      {
        type: "hint",
        text: "Для кольору тексту використовуйте властивість color. Наприклад: color: #2563eb;",
      },

      {
        type: "answer",
        text: `Приклад:

h1 {
  color: rgb(37, 99, 235);
}

p {
  color: #2563eb;
}`,
      },
    ],
  },
  {
    id: "css-width-height",
    title: "Ширина і висота елементів у CSS",
    description:
      "Навчіться керувати розмірами HTML-елементів за допомогою властивостей width та height.",

    content: [
      {
        type: "heading",
        text: "Ширина і висота елементів у CSS",
      },

      {
        type: "paragraph",
        text: "CSS дозволяє керувати розмірами HTML-елементів. Для цього використовуються властивості width (ширина) та height (висота).",
      },

      {
        type: "paragraph",
        text: "Найчастіше розміри задають у пікселях. Пікселі позначаються скороченням px після числа.",
      },

      {
        type: "code",
        language: "css",
        code: `element {
  width: 200px;
  height: 100px;
}`,
      },

      {
        type: "heading",
        text: "Властивість width",
      },

      {
        type: "paragraph",
        text: "Властивість width задає ширину елемента. Наприклад, можна зробити абзаци шириною 300px.",
      },

      {
        type: "code",
        language: "css",
        code: `p {
  width: 300px;
}`,
      },

      {
        type: "heading",
        text: "Властивість height",
      },

      {
        type: "paragraph",
        text: "Властивість height задає висоту елемента.",
      },

      {
        type: "code",
        language: "css",
        code: `td {
  width: 200px;
  height: 100px;
}`,
      },

      {
        type: "table",
        headers: ["Властивість", "Призначення"],
        rows: [
          ["width", "Встановлює ширину елемента"],
          ["height", "Встановлює висоту елемента"],
          ["px", "Одиниця вимірювання пікселів"],
        ],
      },

      {
        type: "list",
        items: [
          "width відповідає за ширину елемента.",
          "height відповідає за висоту елемента.",
          "px використовується для задання розміру в пікселях.",
          "Розміри можна задавати для більшості HTML-елементів.",
        ],
      },

      {
        type: "note",
        text: "Не завжди потрібно задавати висоту елементам. Часто браузер автоматично розраховує її залежно від вмісту.",
      },

      {
        type: "task",
        text: [
          "Створіть декілька абзаців із довгим текстом.",
          "За допомогою CSS встановіть усім абзацам ширину 300px.",
          "Створіть таблицю з декількома рядками.",
          "Встановіть коміркам таблиці ширину 400px та висоту 300px.",
        ],
      },

      {
        type: "hint",
        text: "Для зміни розміру використовуйте властивості width і height.",
      },

      {
        type: "answer",
        text: `Приклад:

p {
  width: 300px;
}


td {
  width: 400px;
  height: 300px;
}`,
      },
    ],
  },
  {
    id: "css-text-align",
    title: "Вирівнювання тексту в CSS",
    description:
      "Навчіться вирівнювати текст на сторінці за допомогою властивості text-align.",

    content: [
      {
        type: "heading",
        text: "Вирівнювання тексту в CSS",
      },

      {
        type: "paragraph",
        text: "За допомогою CSS можна змінювати положення тексту всередині елемента. Для цього використовується властивість text-align.",
      },

      {
        type: "paragraph",
        text: "Властивість text-align дозволяє вирівняти текст по лівому краю, правому краю, центру або одночасно по двох краях.",
      },

      {
        type: "code",
        language: "css",
        code: `p {
  text-align: center;
}`,
      },

      {
        type: "heading",
        text: "Значення властивості text-align",
      },

      {
        type: "table",
        headers: ["Значення", "Опис"],
        rows: [
          ["left", "Вирівнювання тексту по лівому краю"],
          ["right", "Вирівнювання тексту по правому краю"],
          ["center", "Текст розташовується по центру"],
          ["justify", "Текст вирівнюється одночасно по лівому і правому краях"],
        ],
      },

      {
        type: "heading",
        text: "Приклади використання",
      },

      {
        type: "code",
        language: "css",
        code: `h1 {
  text-align: center;
}

p {
  text-align: justify;
}

.menu {
  text-align: right;
}`,
      },

      {
        type: "list",
        items: [
          "left — стандартне вирівнювання тексту.",
          "center часто використовується для заголовків.",
          "justify зручно використовувати для великих текстових блоків.",
          "right використовується рідше, наприклад для спеціального оформлення.",
        ],
      },

      {
        type: "note",
        text: "Властивість text-align впливає на текст всередині елемента, але не переміщує сам HTML-елемент.",
      },

      {
        type: "task",
        text: [
          "Створіть заголовок h1 та вирівняйте його по центру.",
          "Створіть декілька абзаців та перевірте різні значення text-align.",
          "Спробуйте значення left, right, center та justify.",
        ],
      },

      {
        type: "hint",
        text: "Для вирівнювання тексту використовуйте CSS-властивість text-align.",
      },

      {
        type: "answer",
        text: `h1 {
  text-align: center;
}

p {
  text-align: justify;
}`,
      },
    ],
  },
  {
    id: "css-text-align-right",
    title: "Вирівнювання тексту вправо в CSS",
    description:
      "Навчіться вирівнювати текст по правому краю за допомогою властивості text-align.",

    content: [
      {
        type: "heading",
        text: "Вирівнювання тексту вправо в CSS",
      },

      {
        type: "paragraph",
        text: "Щоб вирівняти текст усередині елемента по правому краю, використовується властивість text-align зі значенням right.",
      },

      {
        type: "code",
        language: "html",
        code: `<p>
  This is a paragraph with text.
</p>`,
      },

      {
        type: "code",
        language: "css",
        code: `p {
  text-align: right;
}`,
      },

      {
        type: "paragraph",
        text: "Після застосування цього стилю весь текст у тегах p буде розташований біля правого краю елемента.",
      },

      {
        type: "list",
        items: [
          "text-align: right вирівнює текст праворуч.",
          "Властивість застосовується до батьківського елемента.",
          "Сам HTML-елемент при цьому не переміщується.",
        ],
      },

      {
        type: "note",
        text: "Вирівнювання тексту вправо часто використовується для дат, підписів, меню або спеціальних блоків оформлення.",
      },

      {
        type: "task",
        text: [
          "Створіть абзац з будь-яким текстом.",
          "Додайте CSS-стиль text-align: right.",
          "Перевірте результат у браузері.",
        ],
      },

      {
        type: "hint",
        text: "Змініть значення text-align з left на right і подивіться, як зміниться положення тексту.",
      },

      {
        type: "answer",
        text: `p {
  text-align: right;
}`,
      },
    ],
  },
  {
    id: "css-text-align-center",
    title: "Вирівнювання тексту по центру в CSS",
    description:
      "Навчіться вирівнювати текст по центру за допомогою властивості text-align.",

    content: [
      {
        type: "heading",
        text: "Вирівнювання тексту по центру в CSS",
      },

      {
        type: "paragraph",
        text: "Для розташування тексту по центру всередині HTML-елемента використовується властивість text-align зі значенням center.",
      },

      {
        type: "code",
        language: "html",
        code: `<p>
  This is a paragraph with text.
</p>`,
      },

      {
        type: "code",
        language: "css",
        code: `p {
  text-align: center;
}`,
      },

      {
        type: "paragraph",
        text: "Після застосування цього стилю текст у всіх абзацах p буде розташований по центру.",
      },

      {
        type: "list",
        items: [
          "text-align: center вирівнює текст по центру.",
          "Найчастіше використовується для заголовків та важливих написів.",
          "Властивість працює з текстом усередині елемента.",
        ],
      },

      {
        type: "note",
        text: "Не плутайте вирівнювання тексту з переміщенням самого блоку. text-align змінює тільки положення тексту всередині елемента.",
      },

      {
        type: "task",
        text: [
          "Створіть абзац з будь-яким текстом.",
          "Застосуйте до нього CSS-властивість text-align: center.",
          "Перевірте, як змінилося положення тексту у браузері.",
        ],
      },

      {
        type: "hint",
        text: "Для центрування тексту потрібно використовувати значення center у властивості text-align.",
      },

      {
        type: "answer",
        text: `p {
  text-align: center;
}`,
      },
    ],
  },
  {
    id: "css-text-align-left",
    title: "Вирівнювання тексту вліво в CSS",
    description:
      "Навчіться вирівнювати текст по лівому краю за допомогою властивості text-align.",

    content: [
      {
        type: "heading",
        text: "Вирівнювання тексту вліво в CSS",
      },

      {
        type: "paragraph",
        text: "Значення left у властивості text-align використовується для вирівнювання тексту по лівому краю.",
      },

      {
        type: "paragraph",
        text: "Для звичайних абзаців p це значення не потрібно задавати, оскільки текст за замовчуванням вже вирівняний ліворуч.",
      },

      {
        type: "paragraph",
        text: "Але деякі HTML-елементи мають інше стандартне вирівнювання. Наприклад, заголовки таблиць th за замовчуванням вирівнюються по центру.",
      },

      {
        type: "code",
        language: "html",
        code: `<table border="1">
  <tr>
    <th>Name</th>
    <th>Surname</th>
    <th>Salary</th>
  </tr>

  <tr>
    <td>John</td>
    <td>Smith</td>
    <td>200$</td>
  </tr>

  <tr>
    <td>Nick</td>
    <td>Mayers</td>
    <td>300$</td>
  </tr>
</table>`,
      },

      {
        type: "code",
        language: "css",
        code: `th {
  text-align: left;
}

table {
  width: 400px;
}`,
      },

      {
        type: "table",
        headers: ["Значення", "Результат"],
        rows: [
          ["left", "Текст вирівняний по лівому краю"],
          ["center", "Текст знаходиться по центру"],
          ["right", "Текст вирівняний по правому краю"],
          ["justify", "Текст вирівнюється по двох краях"],
        ],
      },

      {
        type: "list",
        items: [
          "Абзаци p за замовчуванням мають text-align: left.",
          "Для таблиць th іноді потрібно вручну змінювати вирівнювання.",
          "text-align: left часто використовується для повернення стандартного вигляду тексту.",
        ],
      },

      {
        type: "note",
        text: "Значення left не змінює положення самого елемента, воно лише визначає розташування тексту всередині нього.",
      },

      {
        type: "task",
        text: [
          "Створіть таблицю з використанням тегів th та td.",
          "За замовчуванням перевірте вирівнювання заголовків таблиці.",
          "Додайте CSS text-align: left для тегів th.",
          "Встановіть ширину таблиці 400px.",
        ],
      },

      {
        type: "hint",
        text: "Для зміни вирівнювання заголовків таблиці використовуйте селектор th.",
      },

      {
        type: "answer",
        text: `th {
  text-align: left;
}

table {
  width: 400px;
}`,
      },
    ],
  },
  {
    id: "css-text-align-justify",
    title: "Вирівнювання тексту одночасно вправо і вліво в CSS",
    description:
      "Навчіться вирівнювати великий текстовий блок по обох краях за допомогою text-align: justify.",

    content: [
      {
        type: "heading",
        text: "Вирівнювання тексту одночасно вправо і вліво в CSS",
      },

      {
        type: "paragraph",
        text: "Для вирівнювання тексту одночасно по лівому і правому краю використовується значення justify властивості text-align.",
      },

      {
        type: "paragraph",
        text: "Такий ефект добре помітний тільки у довгих текстових блоках, оскільки браузер збільшує проміжки між словами, щоб вирівняти текст по ширині.",
      },

      {
        type: "code",
        language: "html",
        code: `<p>
  Some long text that will be aligned on both sides.
</p>`,
      },

      {
        type: "code",
        language: "css",
        code: `p {
  text-align: justify;
  width: 300px;
}`,
      },

      {
        type: "paragraph",
        text: "Властивість width задає ширину абзацу. Завдяки обмеженій ширині ефект вирівнювання justify стає помітнішим.",
      },

      {
        type: "table",
        headers: ["Властивість", "Значення", "Результат"],
        rows: [
          ["text-align", "justify", "Текст вирівнюється по двох краях"],
          ["width", "300px", "Обмежує ширину текстового блоку"],
        ],
      },

      {
        type: "list",
        items: [
          "justify часто використовується для великих статей та описів.",
          "Текст стає схожим на газетну колонку.",
          "Для коротких рядків ефект майже непомітний.",
        ],
      },

      {
        type: "note",
        text: "Не використовуйте justify для коротких текстів, меню або кнопок — там він часто виглядає гірше.",
      },

      {
        type: "task",
        text: [
          "Створіть абзац із довгим текстом.",
          "Встановіть ширину абзацу 300px.",
          "Додайте text-align: justify.",
          "Порівняйте результат з вирівнюванням left.",
        ],
      },

      {
        type: "hint",
        text: "Для вирівнювання тексту по обох краях використовуйте значення justify.",
      },

      {
        type: "answer",
        text: `p {
  text-align: justify;
  width: 300px;
}`,
      },
    ],
  },
  {
    id: "css-text-align-practice",
    title: "Практика на вирівнювання тексту в CSS",
    description:
      "Закріпіть роботу з властивістю text-align, шириною елементів та вирівнюванням тексту в CSS.",

    content: [
      {
        type: "heading",
        text: "Практика на вирівнювання тексту в CSS",
      },

      {
        type: "paragraph",
        text: "Скопіюйте HTML-код та виконайте завдання, використовуючи CSS-властивості text-align та width.",
      },

      {
        type: "code",
        language: "html",
        code: `<h1>Main page title</h1>

<table border="1">
  <tr>
    <th>Product</th>
    <th>Price</th>
    <th>Quantity</th>
  </tr>

  <tr>
    <td>Apples</td>
    <td>100</td>
    <td>5kg</td>
  </tr>

  <tr>
    <td>Oranges</td>
    <td>200</td>
    <td>6kg</td>
  </tr>

  <tr>
    <td>Bananas</td>
    <td>300</td>
    <td>7kg</td>
  </tr>
</table>

<h2>Secondary heading 1</h2>

<p>
  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
</p>

<h2>Secondary heading 2</h2>

<p>
  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
</p>

<h2>Secondary heading 3</h2>

<table border="1">
  <tr>
    <td>cell 1</td>
    <td>cell 2</td>
    <td>cell 3</td>
  </tr>
</table>`,
      },

      {
        type: "note",
        text: "Властивість text-align змінює розташування тексту всередині елемента. Властивість width задає ширину самого елемента.",
      },

      {
        type: "task",
        text: [
          "Поставте всі заголовки h1 по правому краю.",
          "Поставте всі заголовки h2 по центру.",
          "Встановіть усім таблицям ширину 500px.",
          "Поставте текст у комірках th по лівому краю.",
          "Поставте текст у комірках td по центру.",
          "Встановіть усім абзацам ширину 300px.",
          "Вирівняйте текст усіх абзаців одночасно по правому і лівому краю.",
          "Встановіть заголовкам h2 ширину 300px та вирівняйте текст по центру всередині цього блоку.",
        ],
      },

      {
        type: "hint",
        text: "Для вирівнювання тексту використовуйте text-align. Для зміни ширини елементів використовуйте width.",
      },

      {
        type: "answer",
        text: `h1 {
  text-align: right;
}

h2 {
  width: 300px;
  text-align: center;
}

table {
  width: 500px;
}

th {
  text-align: left;
}

td {
  text-align: center;
}

p {
  width: 300px;
  text-align: justify;
}`,
      },
    ],
  },
  {
    id: "css-font-weight",
    title: "Жирність тексту в CSS",
    description:
      "Навчіться керувати жирністю тексту за допомогою властивості font-weight.",

    content: [
      {
        type: "heading",
        text: "Жирність тексту в CSS",
      },

      {
        type: "paragraph",
        text: "Для зміни жирності тексту в CSS використовується властивість font-weight.",
      },

      {
        type: "paragraph",
        text: "Щоб зробити текст жирним, використовується значення bold. Щоб прибрати жирність — значення normal.",
      },

      {
        type: "paragraph",
        text: "Властивість font-weight працює схоже на HTML-тег b, але через CSS керувати стилями набагато зручніше. Наприклад, можна одним правилом зробити всі абзаци жирними або всі заголовки звичайними.",
      },

      {
        type: "code",
        language: "html",
        code: `<h2>Title</h2>

<p>
  This is a paragraph with text.
</p>`,
      },

      {
        type: "code",
        language: "css",
        code: `h2 {
  font-weight: normal;
}

p {
  font-weight: bold;
}`,
      },

      {
        type: "table",
        headers: ["Значення", "Результат"],
        rows: [
          ["bold", "Робить текст жирним"],
          ["normal", "Прибирає жирність тексту"],
        ],
      },

      {
        type: "list",
        items: [
          "font-weight: bold робить текст товстішим.",
          "font-weight: normal повертає стандартну товщину.",
          "CSS дозволяє змінювати стиль багатьох елементів одразу.",
        ],
      },

      {
        type: "note",
        text: "Використання CSS для жирності тексту краще, ніж додавання великої кількості тегів b у HTML.",
      },

      {
        type: "task",
        text: [
          "Скопіюйте HTML-код таблиці на свою сторінку.",
          "Встановіть таблиці ширину 500px.",
          "Встановіть таблиці висоту 300px.",
          "Зробіть комірки td жирними.",
          "Вирівняйте текст у td по центру.",
          "Зробіть комірки th нежирними.",
        ],
      },

      {
        type: "hint",
        text: "Для товщини тексту використовуйте font-weight. Для вирівнювання тексту використовуйте text-align.",
      },

      {
        type: "answer",
        text: `table {
  width: 500px;
  height: 300px;
}

td {
  font-weight: bold;
  text-align: center;
}

th {
  font-weight: normal;
}`,
      },
    ],
  },
  {
    id: "css-font-style",
    title: "Курсив у CSS",
    description:
      "Навчіться робити текст курсивним за допомогою властивості font-style.",

    content: [
      {
        type: "heading",
        text: "Курсив у CSS",
      },

      {
        type: "paragraph",
        text: "Для створення курсивного тексту в CSS використовується властивість font-style.",
      },

      {
        type: "paragraph",
        text: "Щоб зробити текст курсивним, використовується значення italic. Щоб прибрати курсив — значення normal.",
      },

      {
        type: "paragraph",
        text: "За допомогою CSS можна керувати стилем тексту для будь-яких HTML-елементів без зміни самої структури сторінки.",
      },

      {
        type: "code",
        language: "html",
        code: `<p>
  This is a paragraph with text.
</p>`,
      },

      {
        type: "code",
        language: "css",
        code: `p {
  font-style: italic;
}`,
      },

      {
        type: "table",
        headers: ["Значення", "Результат"],
        rows: [
          ["italic", "Робить текст курсивним"],
          ["normal", "Прибирає курсив"],
        ],
      },

      {
        type: "note",
        text: "Властивість font-style працює для різних HTML-елементів: абзаців, заголовків, списків та інших блоків.",
      },

      {
        type: "task",
        text: ["Зробіть усі заголовки h2 на вашій сторінці курсивними."],
      },

      {
        type: "hint",
        text: "Використовуйте CSS-селектор h2 та властивість font-style зі значенням italic.",
      },

      {
        type: "answer",
        text: `h2 {
  font-style: italic;
}`,
      },
    ],
  },
  {
    id: "css-font-size",
    title: "Розмір шрифту в CSS",
    description:
      "Навчіться змінювати розмір тексту за допомогою властивості font-size.",

    content: [
      {
        type: "heading",
        text: "Розмір шрифту в CSS",
      },

      {
        type: "paragraph",
        text: "Для зміни розміру тексту в CSS використовується властивість font-size.",
      },

      {
        type: "paragraph",
        text: "Значення font-size зазвичай задається у пікселях. Пікселі позначаються як px.",
      },

      {
        type: "paragraph",
        text: "Наприклад, щоб зробити текст абзацу розміром 30 пікселів, потрібно використати властивість font-size зі значенням 30px.",
      },

      {
        type: "code",
        language: "html",
        code: `<p>
  This is a paragraph with text.
</p>`,
      },

      {
        type: "code",
        language: "css",
        code: `p {
  font-size: 30px;
}`,
      },

      {
        type: "table",
        headers: ["Властивість", "Призначення"],
        rows: [
          ["font-size", "Змінює розмір тексту"],
          ["px", "Одиниця вимірювання розміру"],
        ],
      },

      {
        type: "note",
        text: "Збільшення розміру шрифту робить текст легшим для читання, але надто великі значення можуть зламати дизайн сторінки.",
      },

      {
        type: "task",
        text: [
          "Скопіюйте HTML-код заголовків та абзаців на свою сторінку.",
          "Встановіть h1 розмір шрифту 50px.",
          "Вирівняйте h1 по центру.",
          "Встановіть h2 розмір шрифту 40px.",
          "Приберіть жирність у h2.",
          "Встановіть абзацам розмір шрифту 30px.",
        ],
      },

      {
        type: "hint",
        text: "Для розміру використовуйте font-size. Для вирівнювання — text-align. Щоб прибрати жирність — font-weight: normal.",
      },

      {
        type: "answer",
        text: `h1 {
  font-size: 50px;
  text-align: center;
}

h2 {
  font-size: 40px;
  font-weight: normal;
}

p {
  font-size: 30px;
}`,
      },
    ],
  },
  {
    id: "css-font-family",
    title: "Тип шрифту в CSS",
    description:
      "Навчіться змінювати сімейство шрифту за допомогою властивості font-family.",

    content: [
      {
        type: "heading",
        text: "Тип шрифту в CSS",
      },

      {
        type: "paragraph",
        text: "За допомогою властивості font-family у CSS можна задати сімейство шрифту для тексту.",
      },

      {
        type: "paragraph",
        text: "За замовчуванням браузер використовує стандартний шрифт, але ми можемо змінити його на інший, наприклад Arial, Georgia або Verdana.",
      },

      {
        type: "paragraph",
        text: "Якщо назва шрифту складається з декількох слів, її потрібно записувати в лапках.",
      },

      {
        type: "code",
        language: "html",
        code: `<p>
  This is a paragraph with text.
</p>`,
      },

      {
        type: "code",
        language: "css",
        code: `p {
  font-family: Arial;
}`,
      },

      {
        type: "code",
        language: "css",
        code: `p {
  font-family: "Comic Sans MS";
}`,
      },

      {
        type: "table",
        headers: ["Шрифт", "Приклад запису CSS"],
        rows: [
          ["Times New Roman", "font-family: Times New Roman;"],
          ["Arial", "font-family: Arial;"],
          ["Georgia", "font-family: Georgia;"],
          ["Verdana", "font-family: Verdana;"],
          ["Trebuchet MS", 'font-family: "Trebuchet MS";'],
          ["Impact", "font-family: Impact;"],
          ["Arial Black", 'font-family: "Arial Black";'],
          ["Comic Sans MS", 'font-family: "Comic Sans MS";'],
          ["Courier New", 'font-family: "Courier New";'],
        ],
      },

      {
        type: "list",
        items: [
          "font-family змінює вигляд тексту.",
          "Назви шрифтів з пробілами потрібно брати в лапки.",
          "Не всі шрифти можуть бути встановлені на комп'ютері користувача.",
        ],
      },

      {
        type: "note",
        text: "У сучасних сайтах часто використовують веб-шрифти, наприклад Google Fonts, щоб однаково відображати дизайн у всіх браузерах.",
      },

      {
        type: "task",
        text: [
          "Перевірте роботу всіх шрифтів зі списку.",
          "Застосуйте кожен шрифт до абзацу на своїй сторінці.",
        ],
      },

      {
        type: "hint",
        text: "Створіть декілька CSS-правил або змінюйте значення font-family у одному правилі та перевіряйте результат у браузері.",
      },

      {
        type: "answer",
        text: `p {
  font-family: Arial;
}

p {
  font-family: Georgia;
}

p {
  font-family: "Comic Sans MS";
}`,
      },
    ],
  },
  {
    id: "css-line-height",
    title: "Міжрядковий інтервал у CSS",
    description:
      "Навчіться керувати висотою рядків тексту за допомогою властивості line-height.",

    content: [
      {
        type: "heading",
        text: "Міжрядковий інтервал у CSS",
      },

      {
        type: "paragraph",
        text: "Для зміни відстані між рядками тексту в CSS використовується властивість line-height.",
      },

      {
        type: "paragraph",
        text: "Важливо розуміти, що line-height задає не тільки проміжок між рядками, а всю висоту рядка тексту.",
      },

      {
        type: "paragraph",
        text: "Видимий проміжок між рядками обчислюється за формулою: line-height - font-size.",
      },

      {
        type: "code",
        language: "html",
        code: `<p>
  some long text
</p>`,
      },

      {
        type: "code",
        language: "css",
        code: `p {
  font-size: 20px;
  line-height: 50px;
  text-align: justify;
  width: 400px;
}`,
      },

      {
        type: "table",
        headers: ["Властивість", "Призначення"],
        rows: [
          ["font-size", "Розмір тексту"],
          ["line-height", "Висота рядка тексту"],
          ["text-align", "Вирівнювання тексту"],
        ],
      },

      {
        type: "list",
        items: [
          "line-height не задає тільки відстань між рядками.",
          "Для читабельного тексту зазвичай використовують line-height більше за font-size.",
          "Великий міжрядковий інтервал робить текст легшим для читання.",
        ],
      },

      {
        type: "note",
        text: "Якщо font-size дорівнює 30px, а потрібний видимий проміжок між рядками 15px, то line-height повинен бути 45px.",
      },

      {
        type: "task",
        text: [
          "Встановіть розмір шрифту для абзаців 30px.",
          "Налаштуйте line-height так, щоб видимий проміжок між рядками був 15px.",
        ],
      },

      {
        type: "hint",
        text: "Пам'ятайте формулу: line-height - font-size = видимий проміжок. Додайте потрібний проміжок до розміру шрифту.",
      },

      {
        type: "answer",
        text: `p {
  font-size: 30px;
  line-height: 45px;
}`,
      },
    ],
  },
  {
    id: "css-line-height-unitless",
    title: "Значення line-height без одиниць у CSS",
    description:
      "Навчіться задавати міжрядковий інтервал за допомогою line-height без використання px.",

    content: [
      {
        type: "heading",
        text: "Значення line-height без одиниць у CSS",
      },

      {
        type: "paragraph",
        text: "Властивість line-height можна задавати не тільки в пікселях, а й простим числом або дробом без одиниць вимірювання.",
      },

      {
        type: "paragraph",
        text: "У цьому випадку браузер автоматично обчислює висоту рядка, множачи значення line-height на розмір шрифту font-size.",
      },

      {
        type: "paragraph",
        text: "Наприклад, якщо font-size дорівнює 20px, а line-height дорівнює 1.5, то реальна висота рядка буде 20px × 1.5 = 30px.",
      },

      {
        type: "paragraph",
        text: "Перевага такого способу в тому, що при зміні розміру шрифту міжрядковий інтервал змінюється автоматично.",
      },

      {
        type: "code",
        language: "html",
        code: `<p>
  some long text
</p>`,
      },

      {
        type: "code",
        language: "css",
        code: `p {
  font-size: 20px;
  line-height: 1.5;
  text-align: justify;
  width: 400px;
}`,
      },

      {
        type: "table",
        headers: ["Запис", "Результат"],
        rows: [
          ["line-height: 30px", "Фіксована висота рядка"],
          ["line-height: 1.5", "Висота залежить від font-size"],
        ],
      },

      {
        type: "list",
        items: [
          "Числове значення line-height не має одиниць вимірювання.",
          "Браузер множить line-height на font-size.",
          "Такий спосіб зручний для адаптивного дизайну.",
        ],
      },

      {
        type: "note",
        text: "Для font-size 30px і видимого проміжку 15px потрібно отримати висоту рядка 45px. Значення line-height без одиниць: 45 ÷ 30 = 1.5.",
      },

      {
        type: "task",
        text: [
          "Встановіть абзацам розмір шрифту 30px.",
          "Використайте line-height без одиниць.",
          "Зробіть видимий проміжок між рядками 15px.",
        ],
      },

      {
        type: "hint",
        text: "Формула: line-height = (font-size + потрібний проміжок) ÷ font-size.",
      },

      {
        type: "answer",
        text: `p {
  font-size: 30px;
  line-height: 1.5;
}`,
      },
    ],
  },
  {
    id: "css-font-shorthand",
    title: "Властивість-скорочення font у CSS",
    description:
      "Навчіться використовувати скорочений запис font для одночасного налаштування текстових властивостей.",

    content: [
      {
        type: "heading",
        text: "Властивість-скорочення font у CSS",
      },

      {
        type: "paragraph",
        text: "У CSS є спеціальна властивість font, яка дозволяє одночасно задати декілька параметрів тексту.",
      },

      {
        type: "paragraph",
        text: "За допомогою font можна встановити стиль, жирність, розмір, міжрядковий інтервал та сімейство шрифту.",
      },

      {
        type: "paragraph",
        text: "Синтаксис властивості font має такий порядок: font-style font-weight font-size / line-height font-family.",
      },

      {
        type: "paragraph",
        text: "Обов'язковими є тільки font-size та font-family. Інші властивості можна не вказувати.",
      },

      {
        type: "code",
        language: "css",
        code: `font-style font-weight font-size / line-height font-family`,
      },

      {
        type: "heading",
        text: "Приклади використання font",
      },

      {
        type: "code",
        language: "css",
        code: `/* Окремі властивості */

p {
  font-size: 16px;
  font-family: Arial;
}

/* Скорочений запис */

p {
  font: 16px Arial;
}`,
      },

      {
        type: "code",
        language: "css",
        code: `/* З line-height */

p {
  font-size: 16px;
  font-family: Arial;
  line-height: 50px;
}

/* Скорочений запис */

p {
  font: 16px/50px Arial;
}`,
      },

      {
        type: "code",
        language: "css",
        code: `/* З жирністю */

p {
  font-size: 16px;
  font-family: Arial;
  font-weight: bold;
}

/* Скорочений запис */

p {
  font: bold 16px Arial;
}`,
      },

      {
        type: "code",
        language: "css",
        code: `/* Всі властивості разом */

p {
  font-size: 16px;
  font-family: Arial;
  font-weight: bold;
  line-height: 50px;
  font-style: italic;
}

/* Скорочений запис */

p {
  font: bold italic 16px/50px Arial;
}`,
      },

      {
        type: "table",
        headers: ["Властивість", "Призначення"],
        rows: [
          ["font-style", "Курсивний або звичайний текст"],
          ["font-weight", "Жирність тексту"],
          ["font-size", "Розмір шрифту"],
          ["line-height", "Висота рядка"],
          ["font-family", "Сімейство шрифту"],
        ],
      },

      {
        type: "note",
        text: "Властивість font не включає всі текстові властивості CSS. Наприклад, color, width або text-indent потрібно задавати окремо.",
      },

      {
        type: "task",
        text: [
          "Скоротіть код за допомогою властивості font.",
          "Замініть окремі властивості font-family, font-size та line-height.",
          "Виконайте всі три практичні завдання з уроку.",
        ],
      },

      {
        type: "hint",
        text: "Пам'ятайте порядок: font-style → font-weight → font-size/line-height → font-family.",
      },

      {
        type: "answer",
        text: `/* №1 */

p {
  font: 13px/20px "Times New Roman";
}


/* №2 */

p {
  width: 300px;
  color: red;
  font: bold 40px Arial;
}


/* №3 */

p {
  text-indent: 50px;
  font: bold italic 40px/60px Arial;
}`,
      },
    ],
  },
  {
    id: "css-text-indent",
    title: "Красная строка текста в CSS",
    description:
      "Научитесь создавать отступ первой строки текста с помощью свойства text-indent.",

    content: [
      {
        type: "heading",
        text: "Красная строка текста в CSS",
      },

      {
        type: "paragraph",
        text: "В книгах первая строка абзаца часто имеет небольшой отступ вправо. Такой отступ называется красной строкой.",
      },

      {
        type: "paragraph",
        text: "В CSS для создания красной строки используется свойство text-indent. Оно задаёт отступ только для первой строки текста.",
      },

      {
        type: "paragraph",
        text: "Остальные строки абзаца остаются без изменений.",
      },

      {
        type: "code",
        language: "html",
        code: `<p>
  some long text
</p>

<p>
  some long text
</p>

<p>
  some long text
</p>`,
      },

      {
        type: "code",
        language: "css",
        code: `p {
  text-indent: 50px;
  text-align: justify;
  width: 400px;
}`,
      },

      {
        type: "table",
        headers: ["Свойство", "Назначение"],
        rows: [
          ["text-indent", "Создаёт отступ первой строки"],
          ["text-align", "Выравнивает текст"],
          ["width", "Задаёт ширину блока текста"],
        ],
      },

      {
        type: "list",
        items: [
          "text-indent применяется только к первой строке.",
          "Значение обычно задаётся в px или em.",
          "Красная строка часто используется в больших текстовых блоках.",
        ],
      },

      {
        type: "note",
        text: "text-indent не делает отступ всего абзаца. Если нужно сдвинуть весь блок, используются margin или padding.",
      },

      {
        type: "task",
        text: [
          "Создайте несколько абзацев с длинным текстом.",
          "Добавьте каждому абзацу красную строку.",
          "Проверьте работу свойства text-indent в браузере.",
        ],
      },

      {
        type: "hint",
        text: "Используйте свойство text-indent и задайте ему значение, например 50px.",
      },

      {
        type: "answer",
        text: `p {
  text-indent: 50px;
  text-align: justify;
  width: 400px;
}`,
      },
    ],
  },
  {
    id: "css-text-decoration",
    title: "Эффекты текста в CSS",
    description:
      "Изучите свойство text-decoration, которое позволяет добавлять и убирать эффекты оформления текста.",

    content: [
      {
        type: "heading",
        text: "Эффекты текста в CSS",
      },

      {
        type: "paragraph",
        text: "Свойство text-decoration позволяет добавлять различные эффекты для текста: подчеркивание, перечеркивание, линию сверху, а также отменять уже существующие эффекты.",
      },

      {
        type: "paragraph",
        text: "Чаще всего это свойство используется для удаления подчеркивания у ссылок, так как браузер автоматически подчеркивает ссылки по умолчанию.",
      },

      {
        type: "code",
        language: "css",
        code: `p {
  text-decoration: underline;
}`,
      },

      {
        type: "table",
        headers: ["Значение", "Описание"],
        rows: [
          ["underline", "Добавляет подчеркивание текста"],
          ["line-through", "Перечеркивает текст"],
          ["overline", "Добавляет линию сверху текста"],
          ["none", "Убирает оформление текста"],
        ],
      },

      {
        type: "code",
        language: "css",
        code: `a {
  text-decoration: none;
}`,
      },

      {
        type: "paragraph",
        text: "В этом примере у ссылки будет убрано стандартное подчеркивание браузера.",
      },

      {
        type: "note",
        text: "Свойство text-decoration изменяет только внешний вид текста и не влияет на его размер или расположение.",
      },

      {
        type: "warning",
        text: "Не стоит использовать text-decoration вместо border или других CSS свойств для сложного оформления элементов.",
      },

      {
        type: "task",
        text: [
          "Создайте несколько элементов с текстом.",
          "Добавьте одному тексту подчеркивание.",
          "Другому тексту добавьте перечеркивание.",
          "Попробуйте убрать подчеркивание у ссылки.",
        ],
      },

      {
        type: "hint",
        text: "Используйте свойство text-decoration и значения underline, line-through и none.",
      },

      {
        type: "answer",
        text: `p {
  text-decoration: underline;
}

del-text {
  text-decoration: line-through;
}

a {
  text-decoration: none;
}`,
      },
    ],
  },
  {
    id: "css-text-decoration-underline",
    title: "Нижнее подчеркивание текста в CSS",
    description:
      "Изучите значение underline свойства text-decoration для добавления нижнего подчеркивания текста.",

    content: [
      {
        type: "heading",
        text: "Нижнее подчеркивание текста в CSS",
      },

      {
        type: "paragraph",
        text: "Для добавления нижнего подчеркивания тексту используется значение underline свойства text-decoration.",
      },

      {
        type: "paragraph",
        text: "Это позволяет выделить текст линией снизу без использования дополнительных HTML тегов.",
      },

      {
        type: "code",
        language: "html",
        code: `<p>
  Lorem ipsum dolor sit amet.
</p>`,
      },

      {
        type: "code",
        language: "css",
        code: `p {
  text-decoration: underline;
}`,
      },

      {
        type: "paragraph",
        text: "После применения стиля текст внутри абзаца будет отображаться с нижним подчеркиванием.",
      },

      {
        type: "table",
        headers: ["Значение", "Результат"],
        rows: [
          ["underline", "Добавляет линию под текстом"],
          ["none", "Убирает подчеркивание"],
        ],
      },

      {
        type: "note",
        text: "Значение underline часто используется для выделения важных элементов текста или оформления ссылок.",
      },

      {
        type: "task",
        text: [
          "Создайте абзац с любым текстом.",
          "Добавьте ему нижнее подчеркивание используя CSS.",
          "Проверьте результат в браузере.",
        ],
      },

      {
        type: "hint",
        text: "Используйте свойство text-decoration со значением underline.",
      },

      {
        type: "answer",
        text: `p {
  text-decoration: underline;
}`,
      },
    ],
  },
  {
    id: "css-text-decoration-overline",
    title: "Верхнее подчеркивание текста в CSS",
    description:
      "Изучите значение overline свойства text-decoration для добавления линии над текстом.",

    content: [
      {
        type: "heading",
        text: "Верхнее подчеркивание текста в CSS",
      },

      {
        type: "paragraph",
        text: "Свойство text-decoration позволяет добавлять различные эффекты оформления текста.",
      },

      {
        type: "paragraph",
        text: "Значение overline добавляет линию над текстом.",
      },

      {
        type: "code",
        language: "html",
        code: `<p>
  Lorem ipsum dolor sit amet.
</p>`,
      },

      {
        type: "code",
        language: "css",
        code: `p {
  text-decoration: overline;
}`,
      },

      {
        type: "paragraph",
        text: "После применения стиля над текстом появится горизонтальная линия.",
      },

      {
        type: "table",
        headers: ["Значение", "Описание"],
        rows: [
          ["underline", "Линия под текстом"],
          ["overline", "Линия над текстом"],
          ["line-through", "Перечеркивание текста"],
          ["none", "Убирает оформление"],
        ],
      },

      {
        type: "note",
        text: "Значение overline используется редко, но может пригодиться для специальных эффектов оформления текста.",
      },

      {
        type: "task",
        text: [
          "Создайте абзац с любым текстом.",
          "Добавьте тексту линию сверху с помощью CSS.",
          "Проверьте результат в браузере.",
        ],
      },

      {
        type: "hint",
        text: "Используйте свойство text-decoration со значением overline.",
      },

      {
        type: "answer",
        text: `p {
  text-decoration: overline;
}`,
      },
    ],
  },

  {
    id: "css-text-decoration-line-through",
    title: "Перечеркивание текста в CSS",
    description:
      "Изучите значение line-through свойства text-decoration для добавления линии через текст.",

    content: [
      {
        type: "heading",
        text: "Перечеркивание текста в CSS",
      },

      {
        type: "paragraph",
        text: "Значение line-through свойства text-decoration добавляет линию, которая проходит через середину текста.",
      },

      {
        type: "paragraph",
        text: "Такой эффект часто используется для обозначения удаленного текста, старой цены товара или исправлений.",
      },

      {
        type: "code",
        language: "html",
        code: `<p>
  Lorem ipsum dolor sit amet.
</p>`,
      },

      {
        type: "code",
        language: "css",
        code: `p {
  text-decoration: line-through;
}`,
      },

      {
        type: "paragraph",
        text: "После применения стиля текст внутри абзаца будет отображаться перечеркнутым.",
      },

      {
        type: "table",
        headers: ["Значение", "Описание"],
        rows: [
          ["underline", "Линия под текстом"],
          ["overline", "Линия над текстом"],
          ["line-through", "Линия через текст"],
          ["none", "Удаляет оформление"],
        ],
      },

      {
        type: "example",
        title: "Пример использования",
        text: "Старая цена может быть перечеркнута, а новая цена показана рядом.",
      },

      {
        type: "note",
        text: "Для удаления товара или старой информации line-through подходит лучше, чем ручное добавление символов.",
      },

      {
        type: "task",
        text: [
          "Создайте абзац с любым текстом.",
          "Добавьте тексту перечеркивание через CSS.",
          "Проверьте результат в браузере.",
        ],
      },

      {
        type: "hint",
        text: "Используйте свойство text-decoration со значением line-through.",
      },

      {
        type: "answer",
        text: `p {
  text-decoration: line-through;
}`,
      },
    ],
  },
  {
    id: "css-text-decoration-none",
    title: "Отмена эффектов для текста в CSS",
    description:
      "Изучите значение none свойства text-decoration для удаления оформления текста.",

    content: [
      {
        type: "heading",
        text: "Отмена эффектов для текста в CSS",
      },

      {
        type: "paragraph",
        text: "Значение none свойства text-decoration отменяет все эффекты оформления текста.",
      },

      {
        type: "paragraph",
        text: "Чаще всего это значение используется для удаления стандартного подчеркивания у ссылок.",
      },

      {
        type: "paragraph",
        text: "Браузеры автоматически подчеркивают ссылки, но с помощью CSS можно изменить это поведение.",
      },

      {
        type: "code",
        language: "html",
        code: `<a href="">
  link
</a>`,
      },

      {
        type: "code",
        language: "css",
        code: `a {
  text-decoration: none;
}`,
      },

      {
        type: "paragraph",
        text: "После применения стиля ссылка перестанет иметь подчеркивание.",
      },

      {
        type: "table",
        headers: ["Значение", "Описание"],
        rows: [
          ["underline", "Добавляет линию снизу текста"],
          ["overline", "Добавляет линию сверху текста"],
          ["line-through", "Перечеркивает текст"],
          ["none", "Убирает все эффекты"],
        ],
      },

      {
        type: "note",
        text: "Использование text-decoration: none часто встречается при создании современных кнопок и меню сайта.",
      },

      {
        type: "warning",
        text: "После удаления подчеркивания ссылка может стать менее заметной для пользователя. Используйте другие стили, чтобы сохранить понятность интерфейса.",
      },

      {
        type: "task",
        text: [
          "Создайте ссылку на странице.",
          "Уберите стандартное подчеркивание ссылки.",
          "Проверьте результат в браузере.",
        ],
      },

      {
        type: "hint",
        text: "Используйте селектор ссылки a и свойство text-decoration со значением none.",
      },

      {
        type: "answer",
        text: `a {
  text-decoration: none;
}`,
      },
    ],
  },
  {
    id: "css-basic-properties-practice",
    title: "Практика на основные CSS свойства",
    description:
      "Закрепите основные CSS свойства: цвет, размер текста, шрифт, выравнивание и оформление элементов.",

    content: [
      {
        type: "heading",
        text: "Практика на основные CSS свойства",
      },

      {
        type: "paragraph",
        text: "В этой практике необходимо применить изученные CSS свойства к готовой HTML структуре.",
      },

      {
        type: "code",
        language: "html",
        code: `<h1>Языки для сайтов</h1>

<h2>PHP и JavaScript</h2>

<p>
  Языки программирования <b>PHP</b>
  и <b>JavaScript</b> позволяют
  сделать сайт динамичным.
</p>

<h2>Виды скриптов</h2>

<p>
  Для этого пишутся скрипты.
</p>

<ul>
  <li>Скрипты PHP выполняются на сервере.</li>
  <li>Скрипты JavaScript выполняются в браузере.</li>
</ul>`,
      },

      {
        type: "paragraph",
        text: "Добавьте CSS стили, чтобы оформить страницу согласно заданию.",
      },

      {
        type: "list",
        items: [
          "Измените цвет заголовков.",
          "Настройте размеры шрифтов.",
          "Добавьте оформление текста.",
          "Настройте внешний вид списка.",
        ],
      },

      {
        type: "table",
        headers: ["CSS свойство", "Назначение"],
        rows: [
          ["color", "Изменяет цвет текста"],
          ["font-size", "Изменяет размер шрифта"],
          ["font-family", "Меняет тип шрифта"],
          ["text-align", "Выравнивает текст"],
          ["text-decoration", "Добавляет эффекты текста"],
        ],
      },

      {
        type: "note",
        text: "Используйте отдельный CSS файл и подключайте его к HTML странице через тег link.",
      },

      {
        type: "task",
        text: [
          "Скопируйте HTML код на страницу.",
          "Создайте CSS стили для оформления.",
          "Измените внешний вид заголовков h1 и h2.",
          "Настройте оформление абзацев.",
          "Добавьте стили для списка.",
        ],
      },

      {
        type: "hint",
        text: "Используйте селекторы h1, h2, p, ul и li. Примените свойства color, font-size, font-family и text-decoration.",
      },

      {
        type: "answer",
        text: `h1 {
  color: blue;
  text-align: center;
  font-size: 40px;
}

h2 {
  color: green;
  font-size: 30px;
}

p {
  width: 500px;
  font-size: 18px;
  line-height: 1.5;
}

b {
  color: red;
}

i {
  text-decoration: underline;
}

ul {
  font-size: 18px;
}

li {
  margin-bottom: 10px;
}`,
      },
    ],
  },
];
