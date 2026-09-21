import { Lesson } from "../types";

export const unitsMeasurement: Lesson[] = [
  {
    id: "css-em-units-introduction",
    title: "Введення в одиниці em у CSS",
    description:
      "Вивчаємо одиницю em у CSS та визначаємо розмір шрифту відносно розміру шрифту батьківського елемента.",
    content: [
      { type: "heading", text: "Що таке em" },
      {
        type: "paragraph",
        text: "Одиниця em використовується для задання розміру шрифту відносно розміру шрифту батьківського елемента.",
      },
      {
        type: "paragraph",
        text: "Наприклад, якщо батьківський елемент має розмір шрифту 20px, то значення 1em для дочірнього елемента дорівнює 20px.",
      },
      {
        type: "code",
        language: "html",
        code: `<div><p>text</p></div>`,
      },
      {
        type: "code",
        language: "css",
        code: `div { font-size: 20px; } p { font-size: 2em; }`,
      },
      {
        type: "example",
        title: "Результат",
        text: "Розмір шрифту абзацу буде 40px, тому що 2em означає два розміри шрифту батьківського елемента: 20px × 2 = 40px.",
      },
      {
        type: "heading",
        text: "Значення 0.5em",
      },
      {
        type: "paragraph",
        text: "Якщо для дочірнього елемента вказати 0.5em, його розмір шрифту буде вдвічі меншим за розмір шрифту батьківського елемента.",
      },
      {
        type: "code",
        language: "css",
        code: `div { font-size: 20px; } p { font-size: 0.5em; }`,
      },
      {
        type: "example",
        title: "Результат",
        text: "Розмір шрифту абзацу буде 10px, тому що 20px × 0.5 = 10px.",
      },
      {
        type: "heading",
        text: "Значення 1em",
      },
      {
        type: "paragraph",
        text: "Значення 1em дорівнює поточному розміру шрифту батьківського елемента.",
      },
      {
        type: "code",
        language: "css",
        code: `div { font-size: 20px; } p { font-size: 1em; }`,
      },
      {
        type: "example",
        title: "Результат",
        text: "Розмір шрифту абзацу буде 20px, тому що 20px × 1 = 20px.",
      },
      {
        type: "heading",
        text: "Як визначити розмір у px",
      },
      {
        type: "paragraph",
        text: "Щоб перевести em у пікселі, потрібно розмір шрифту батьківського елемента помножити на значення em.",
      },
      {
        type: "code",
        language: "css",
        code: `розмір у px = розмір шрифту батьківського елемента × значення em`,
      },
      {
        type: "list",
        items: [
          "1em — такий самий розмір, як у батьківського елемента.",
          "2em — удвічі більший розмір.",
          "0.5em — удвічі менший розмір.",
          "1.5em — у півтора раза більший розмір.",
        ],
      },
      { type: "heading", text: "Практичне завдання 1" },
      {
        type: "task",
        text: [
          "Визначте, який розмір шрифту в px матимуть теги li.",
          "Батьківський елемент ul має розмір шрифту 10px.",
          "Для li задано розмір шрифту 2em.",
        ],
      },
      {
        type: "code",
        language: "html",
        code: `<ul><li>text</li><li>text</li><li>text</li></ul>`,
      },
      {
        type: "code",
        language: "css",
        code: `ul { font-size: 10px; } li { font-size: 2em; }`,
      },
      {
        type: "hint",
        text: "Помножте розмір шрифту ul на значення em: 10px × 2.",
      },
      {
        type: "answer",
        text: `10px × 2em = 20px;`,
      },
      { type: "heading", text: "Практичне завдання 2" },
      {
        type: "task",
        text: [
          "Визначте, який розмір шрифту в px матимуть теги li.",
          "Батьківський елемент ul має розмір шрифту 20px.",
          "Для li задано розмір шрифту 1.5em.",
        ],
      },
      {
        type: "code",
        language: "html",
        code: `<ul><li>text</li><li>text</li><li>text</li></ul>`,
      },
      {
        type: "code",
        language: "css",
        code: `ul { font-size: 20px; } li { font-size: 1.5em; }`,
      },
      {
        type: "hint",
        text: "Помножте розмір шрифту ul на значення em: 20px × 1.5.",
      },
      {
        type: "answer",
        text: `20px × 1.5em = 30px;`,
      },
      { type: "heading", text: "Практичне завдання 3" },
      {
        type: "task",
        text: [
          "Визначте, який розмір шрифту в px матимуть теги li.",
          "Батьківський елемент ul має розмір шрифту 30px.",
          "Для li задано розмір шрифту 0.5em.",
        ],
      },
      {
        type: "code",
        language: "html",
        code: `<ul><li>text</li><li>text</li><li>text</li></ul>`,
      },
      {
        type: "code",
        language: "css",
        code: `ul { font-size: 30px; } li { font-size: 0.5em; }`,
      },
      {
        type: "hint",
        text: "Помножте розмір шрифту ul на значення em: 30px × 0.5.",
      },
      {
        type: "answer",
        text: `30px × 0.5em = 15px;`,
      },
      {
        type: "note",
        text: "Значення em для font-size залежить від розміру шрифту батьківського елемента. Щоб визначити результат у px, помножте розмір шрифту батьківського елемента на значення em.",
      },
    ],
  },
  {
    id: "css-em-inheritance",
    title: "Наслідування та одиниці em у CSS",
    description:
      "Вивчаємо наслідування розміру шрифту та визначаємо значення em для вкладених елементів, коли кожен наступний елемент обчислює свій розмір від уже обчисленого розміру батьківського елемента.",
    content: [
      { type: "heading", text: "Наслідування та em" },
      {
        type: "paragraph",
        text: "Якщо елементи вкладені один в один, значення em для кожного дочірнього елемента обчислюється від уже обчисленого розміру шрифту його безпосереднього батьківського елемента.",
      },
      {
        type: "code",
        language: "html",
        code: `<main><div><p>text</p></div></main>`,
      },
      {
        type: "paragraph",
        text: "Нехай елемент main має розмір шрифту 10px. Для div задано 2em. Отже, його розмір шрифту буде 20px.",
      },
      {
        type: "code",
        language: "css",
        code: `main { font-size: 10px; } div { font-size: 2em; }`,
      },
      {
        type: "example",
        title: "Результат",
        text: "Розмір шрифту div буде 20px, тому що 10px × 2 = 20px.",
      },
      {
        type: "paragraph",
        text: "Якщо для p також задати 2em, він буде рахувати свій розмір уже від розміру шрифту div, тобто від 20px, а не безпосередньо від 10px у main.",
      },
      {
        type: "code",
        language: "css",
        code: `main { font-size: 10px; } div { font-size: 2em; } p { font-size: 2em; }`,
      },
      {
        type: "example",
        title: "Результат",
        text: "Розмір шрифту p буде 40px, тому що спочатку div отримує 20px, а потім 20px × 2 = 40px.",
      },
      {
        type: "heading",
        text: "Послідовне обчислення em",
      },
      {
        type: "paragraph",
        text: "Для вкладених елементів потрібно послідовно визначати розмір шрифту кожного батьківського елемента, починаючи з елемента, для якого задано розмір у px.",
      },
      {
        type: "list",
        items: [
          "Спочатку визначаємо розмір шрифту батьківського елемента.",
          "Обчислюємо розмір шрифту дочірнього елемента за його значенням em.",
          "Отриманий результат стає базовим розміром для наступного вкладеного елемента.",
        ],
      },
      {
        type: "code",
        language: "css",
        code: `section { font-size: 10px; } div { font-size: 2em; } p { font-size: 1.5em; }`,
      },
      {
        type: "example",
        title: "Приклад обчислення",
        text: "section має 10px. div отримує 10px × 2 = 20px. p отримує 20px × 1.5 = 30px.",
      },
      { type: "heading", text: "Практичне завдання 1" },
      {
        type: "task",
        text: [
          "Визначте, який розмір шрифту в px матимуть теги div.",
          "Розмір шрифту section дорівнює 10px.",
          "Для div задано розмір шрифту 2em.",
        ],
      },
      {
        type: "code",
        language: "html",
        code: `<section><div><p>text</p></div></section>`,
      },
      {
        type: "code",
        language: "css",
        code: `section { font-size: 10px; } div { font-size: 2em; }`,
      },
      {
        type: "hint",
        text: "Розмір div обчислюється від розміру шрифту section: 10px × 2.",
      },
      {
        type: "answer",
        text: `10px × 2em = 20px;`,
      },
      { type: "heading", text: "Практичне завдання 2" },
      {
        type: "task",
        text: [
          "Визначте, який розмір шрифту в px матимуть теги p.",
          "Розмір шрифту section дорівнює 10px.",
          "Для div задано розмір шрифту 2em.",
          "Для p задано розмір шрифту 1.5em.",
        ],
      },
      {
        type: "code",
        language: "html",
        code: `<section><div><p>text</p></div></section>`,
      },
      {
        type: "code",
        language: "css",
        code: `section { font-size: 10px; } div { font-size: 2em; } p { font-size: 1.5em; }`,
      },
      {
        type: "hint",
        text: "Спочатку визначте розмір div: 10px × 2 = 20px. Потім використайте отримані 20px для обчислення розміру p.",
      },
      {
        type: "answer",
        text: `10px × 2 = 20px; 20px × 1.5 = 30px;`,
      },
      { type: "heading", text: "Практичне завдання 3" },
      {
        type: "task",
        text: [
          "Визначте, який розмір шрифту в px матимуть теги p.",
          "Розмір шрифту section дорівнює 40px.",
          "Для div задано розмір шрифту 0.5em.",
          "Для p задано розмір шрифту 0.5em.",
        ],
      },
      {
        type: "code",
        language: "html",
        code: `<section><div><p>text</p></div></section>`,
      },
      {
        type: "code",
        language: "css",
        code: `section { font-size: 40px; } div { font-size: 0.5em; } p { font-size: 0.5em; }`,
      },
      {
        type: "hint",
        text: "Спочатку визначте розмір div: 40px × 0.5 = 20px. Потім від отриманих 20px обчисліть розмір p.",
      },
      {
        type: "answer",
        text: `40px × 0.5 = 20px; 20px × 0.5 = 10px;`,
      },
      {
        type: "note",
        text: "Для вкладених елементів em може послідовно змінювати розмір шрифту. Значення em дочірнього елемента обчислюється від уже обчисленого font-size його батьківського елемента.",
      },
    ],
  },
  {
    id: "css-em-margins",
    title: "Відступи та одиниці em у CSS",
    description:
      "Вивчаємо використання одиниці em для відступів та визначаємо розмір шрифту й margin у пікселях для вкладених елементів.",
    content: [
      { type: "heading", text: "Одиниця em у margin" },
      {
        type: "paragraph",
        text: "Одиниця em може використовуватися не тільки для font-size, а й для відступів, зокрема margin та padding.",
      },
      {
        type: "paragraph",
        text: "Для margin значення em обчислюється від поточного розміру шрифту самого елемента, для якого задано цей відступ.",
      },
      {
        type: "code",
        language: "html",
        code: `<div><p>text</p></div>`,
      },
      {
        type: "code",
        language: "css",
        code: `p { font-size: 20px; margin: 2em; }`,
      },
      {
        type: "example",
        title: "Результат",
        text: "Розмір шрифту p буде 20px, а margin — 40px, тому що 20px × 2 = 40px.",
      },
      { type: "heading", text: "em у font-size та margin" },
      {
        type: "paragraph",
        text: "Якщо font-size самого елемента також задано в em, спочатку потрібно обчислити його фактичний розмір шрифту відносно батьківського елемента. Після цього margin у em обчислюється вже від отриманого розміру шрифту самого елемента.",
      },
      {
        type: "code",
        language: "css",
        code: `div { font-size: 20px; } p { font-size: 2em; margin: 2em; }`,
      },
      {
        type: "example",
        title: "Результат",
        text: "Розмір шрифту p буде 40px, тому що 20px × 2 = 40px. Margin p буде 80px, тому що 40px × 2 = 80px.",
      },
      {
        type: "heading",
        text: "Послідовність обчислення",
      },
      {
        type: "list",
        items: [
          "Спочатку визначаємо фактичний font-size елемента.",
          "Якщо font-size задано в em, обчислюємо його від font-size батьківського елемента.",
          "Після цього значення em у margin обчислюємо від фактичного font-size самого елемента.",
        ],
      },
      {
        type: "code",
        language: "css",
        code: `section { font-size: 10px; } div { font-size: 2em; margin: 3em; }`,
      },
      {
        type: "example",
        title: "Приклад обчислення",
        text: "font-size div: 10px × 2 = 20px. Margin div: 20px × 3 = 60px.",
      },
      { type: "heading", text: "Практичне завдання 1" },
      {
        type: "task",
        text: [
          "Визначте, який розмір шрифту та відступу в px матиме тег div.",
          "Розмір шрифту section дорівнює 10px.",
          "Для div задано font-size: 2em та margin: 2em.",
        ],
      },
      {
        type: "code",
        language: "html",
        code: `<section><div><p>text</p></div></section>`,
      },
      {
        type: "code",
        language: "css",
        code: `section { font-size: 10px; } div { font-size: 2em; margin: 2em; }`,
      },
      {
        type: "hint",
        text: "Спочатку визначте font-size div: 10px × 2 = 20px. Потім визначте margin від отриманих 20px.",
      },
      {
        type: "answer",
        text: `font-size: 10px × 2 = 20px; margin: 20px × 2 = 40px;`,
      },
      { type: "heading", text: "Практичне завдання 2" },
      {
        type: "task",
        text: [
          "Визначте, який розмір шрифту та відступу в px матиме тег div.",
          "Розмір шрифту section дорівнює 10px.",
          "Для div задано font-size: 2em та margin: 3em.",
        ],
      },
      {
        type: "code",
        language: "html",
        code: `<section><div><p>text</p></div></section>`,
      },
      {
        type: "code",
        language: "css",
        code: `section { font-size: 10px; } div { font-size: 2em; margin: 3em; }`,
      },
      {
        type: "hint",
        text: "Спочатку визначте font-size div: 10px × 2 = 20px. Потім помножте 20px на 3.",
      },
      {
        type: "answer",
        text: `font-size: 10px × 2 = 20px; margin: 20px × 3 = 60px;`,
      },
      { type: "heading", text: "Практичне завдання 3" },
      {
        type: "task",
        text: [
          "Визначте, який розмір шрифту та відступу в px матиме тег div.",
          "Розмір шрифту section дорівнює 10px.",
          "Для div задано font-size: 2em та margin: 0.5em.",
        ],
      },
      {
        type: "code",
        language: "html",
        code: `<section><div><p>text</p></div></section>`,
      },
      {
        type: "code",
        language: "css",
        code: `section { font-size: 10px; } div { font-size: 2em; margin: 0.5em; }`,
      },
      {
        type: "hint",
        text: "Спочатку визначте font-size div: 10px × 2 = 20px. Потім помножте 20px на 0.5.",
      },
      {
        type: "answer",
        text: `font-size: 10px × 2 = 20px; margin: 20px × 0.5 = 10px;`,
      },
      { type: "heading", text: "Практичне завдання 4" },
      {
        type: "task",
        text: [
          "Визначте, який розмір шрифту та відступу в px матиме тег p.",
          "Розмір шрифту section дорівнює 10px.",
          "Для div задано font-size: 2em.",
          "Для p задано font-size: 2em та margin: 2em.",
        ],
      },
      {
        type: "code",
        language: "html",
        code: `<section><div><p>text</p></div></section>`,
      },
      {
        type: "code",
        language: "css",
        code: `section { font-size: 10px; } div { font-size: 2em; } p { font-size: 2em; margin: 2em; }`,
      },
      {
        type: "hint",
        text: "Спочатку визначте font-size div: 10px × 2 = 20px. Потім font-size p: 20px × 2 = 40px. Margin p обчислюється від його власного font-size.",
      },
      {
        type: "answer",
        text: `font-size div: 10px × 2 = 20px; font-size p: 20px × 2 = 40px; margin p: 40px × 2 = 80px;`,
      },
      { type: "heading", text: "Практичне завдання 5" },
      {
        type: "task",
        text: [
          "Визначте, який розмір шрифту та відступу в px матиме тег p.",
          "Розмір шрифту section дорівнює 10px.",
          "Для div задано font-size: 1.5em.",
          "Для p задано font-size: 1em та margin: 1.5em.",
        ],
      },
      {
        type: "code",
        language: "html",
        code: `<section><div><p>text</p></div></section>`,
      },
      {
        type: "code",
        language: "css",
        code: `section { font-size: 10px; } div { font-size: 1.5em; } p { font-size: 1em; margin: 1.5em; }`,
      },
      {
        type: "hint",
        text: "Спочатку визначте font-size div: 10px × 1.5 = 15px. Потім font-size p: 15px × 1 = 15px. Margin p обчисліть від 15px.",
      },
      {
        type: "answer",
        text: `font-size div: 10px × 1.5 = 15px; font-size p: 15px × 1 = 15px; margin p: 15px × 1.5 = 22.5px;`,
      },
      {
        type: "note",
        text: "Для margin та padding значення em обчислюється від font-size самого елемента. Якщо font-size також задано в em, спочатку потрібно визначити його фактичне значення, а вже потім обчислювати відступ.",
      },
    ],
  },
  {
    id: "css-em-practice",
    title: "Практики використання em у CSS",
    description:
      "Практичне застосування одиниці em у вкладених елементах та переведення значень з px в em.",
    content: [
      {
        type: "heading",
        text: "Одиниця em у вкладених елементах",
      },
      {
        type: "paragraph",
        text: "Одиниця em дозволяє задавати розміри відносно розміру шрифту батьківського елемента. Якщо елементи вкладені один в один, значення em можуть послідовно змінюватися.",
      },
      {
        type: "code",
        language: "html",
        code: `<html><head><title></title></head><body><main><div><p>text</p></div></main></body></html>`,
      },
      {
        type: "paragraph",
        text: "За замовчуванням браузер задає елементу html розмір шрифту 16px. Тому цей розмір можна використовувати як початковий для розрахунків у em.",
      },
      {
        type: "code",
        language: "css",
        code: `html { font-size: 16px; }`,
      },
      {
        type: "paragraph",
        text: "Наприклад, якщо для main задати font-size: 1.5em, його розмір шрифту буде 24px, оскільки 16px × 1.5 = 24px.",
      },
      {
        type: "code",
        language: "css",
        code: `main { font-size: 1.5em; }`,
      },
      {
        type: "paragraph",
        text: "Якщо для вкладеного div задати font-size: 2em, розмір буде розрахований від розміру шрифту main: 24px × 2 = 48px.",
      },
      {
        type: "code",
        language: "css",
        code: `div { font-size: 2em; }`,
      },
      {
        type: "example",
        title: "Результат розрахунку",
        text: "html: 16px → main: 1.5em = 24px → div: 2em = 48px.",
      },
      {
        type: "heading",
        text: "Переведення px у em",
      },
      {
        type: "paragraph",
        text: "Щоб перевести значення font-size з px у em, потрібно поділити потрібний розмір на розмір шрифту батьківського елемента.",
      },
      {
        type: "code",
        language: "css",
        code: `font-size: потрібний_розмір / font-size_батьківського_елемента;`,
      },
      {
        type: "paragraph",
        text: "Наприклад, якщо батьківський елемент має шрифт 16px, то 32px дорівнює 2em, оскільки 32 / 16 = 2.",
      },
      {
        type: "heading",
        text: "Практичне завдання",
      },
      {
        type: "paragraph",
        text: "Для всіх завдань використовуйте такий HTML-код:",
      },
      {
        type: "code",
        language: "html",
        code: `<main><h1>header</h1><div><p>text</p><p>text</p></div><div><p>text</p><p>text</p></div></main>`,
      },
      {
        type: "heading",
        text: "Практичне завдання 1",
      },
      {
        type: "task",
        text: [
          "Перепишіть у em усі значення, задані в px.",
          "Вважайте, що стандартний font-size елемента html дорівнює 16px.",
        ],
      },
      {
        type: "code",
        language: "css",
        code: `main { margin: 16px auto; } h1 { font-size: 32px; } p { font-size: 32px; }`,
      },
      {
        type: "hint",
        text: "Для main батьківським елементом є html з font-size 16px. Для h1 і p батьківським елементом є main, якщо для main не задано інший font-size, тому він успадковує 16px.",
      },
      {
        type: "answer",
        text: `main { margin: 1em auto; } h1 { font-size: 2em; } p { font-size: 2em; }`,
      },
      {
        type: "example",
        title: "Розрахунок",
        text: "16px / 16px = 1em; 32px / 16px = 2em.",
      },
      {
        type: "heading",
        text: "Практичне завдання 2",
      },
      {
        type: "task",
        text: [
          "Перепишіть у em усі значення, задані в px.",
          "Врахуйте, що font-size div впливає на розрахунок font-size його дочірніх p.",
        ],
      },
      {
        type: "code",
        language: "css",
        code: `main { margin: 32px auto; } h1 { font-size: 32px; } div { font-size: 16px; margin-bottom: 32px; } p { font-size: 20px; }`,
      },
      {
        type: "hint",
        text: "Для main і h1 базовий розмір становить 16px. Для div font-size: 16px — це 1em від main. Для p батьківський div має 16px, тому 20px потрібно поділити на 16px.",
      },
      {
        type: "answer",
        text: `main { margin: 2em auto; } h1 { font-size: 2em; } div { font-size: 1em; margin-bottom: 2em; } p { font-size: 1.25em; }`,
      },
      {
        type: "example",
        title: "Розрахунок",
        text: "main margin: 32 / 16 = 2em; h1: 32 / 16 = 2em; div: 16 / 16 = 1em; margin-bottom div: 32 / 16 = 2em; p: 20 / 16 = 1.25em.",
      },
      {
        type: "note",
        text: "Пам'ятайте: для font-size значення em рахується від font-size батьківського елемента. Тому в кожному вкладеному рівні потрібно враховувати фактичний розмір шрифту його батька.",
      },
    ],
  },
  {
    id: "css-rem-units",
    title: "Одиниці rem у CSS",
    description:
      "Одиниця rem дозволяє задавати розміри відносно розміру шрифту елемента html, незалежно від вкладеності елементів.",
    content: [
      {
        type: "heading",
        text: "Проблема одиниці em",
      },
      {
        type: "paragraph",
        text: "Одиниця em розраховується відносно розміру шрифту батьківського елемента. Через це зміна font-size одного елемента може вплинути на розміри його дочірніх елементів, які використовують em.",
      },
      {
        type: "paragraph",
        text: "Щоб уникнути такої залежності від вкладеності, у CSS існує одиниця rem.",
      },
      {
        type: "heading",
        text: "Одиниця rem",
      },
      {
        type: "paragraph",
        text: "Одиниця rem означає root em. Її значення завжди розраховується відносно font-size кореневого елемента html, незалежно від того, наскільки глибоко вкладений елемент.",
      },
      {
        type: "code",
        language: "css",
        code: `html { font-size: 16px; }`,
      },
      {
        type: "paragraph",
        text: "Якщо для html задано font-size: 16px, то 1rem дорівнює 16px, 2rem — 32px, 1.5rem — 24px, а 0.75rem — 12px.",
      },
      {
        type: "example",
        title: "Приклад",
        text: "div і p можуть бути вкладені один в одного, але якщо для обох задано 2rem, їхній font-size буде однаковим — 32px. Вкладеність елементів не впливає на розрахунок rem.",
      },
      {
        type: "code",
        language: "html",
        code: `<div><p>text</p></div>`,
      },
      {
        type: "code",
        language: "css",
        code: `div { font-size: 2rem; } p { font-size: 2rem; margin: 2rem; }`,
      },
      {
        type: "heading",
        text: "Розрахунок rem",
      },
      {
        type: "paragraph",
        text: "Щоб перевести значення з px у rem, потрібно поділити потрібний розмір на font-size елемента html.",
      },
      {
        type: "code",
        language: "css",
        code: `rem = потрібний_розмір / font-size_html;`,
      },
      {
        type: "paragraph",
        text: "Наприклад, якщо html має font-size: 16px, то 32px = 2rem, 24px = 1.5rem, 20px = 1.25rem, а 12px = 0.75rem.",
      },
      {
        type: "heading",
        text: "Практичне завдання",
      },
      {
        type: "paragraph",
        text: "Використовуйте такий HTML-код для виконання завдання:",
      },
      {
        type: "code",
        language: "html",
        code: `<main><h1>header</h1><section><h2>header</h2><p>text</p><p>text</p></section><section><h2>header</h2><p>text</p><p>text</p></section></main>`,
      },
      {
        type: "task",
        text: [
          "Перепишіть у rem усі значення, задані в px.",
          "Вважайте, що стандартний font-size елемента html дорівнює 16px.",
        ],
      },
      {
        type: "code",
        language: "css",
        code: `main { margin: 64px auto 32px; } h1 { font-size: 32px; } section { font-size: 16px; margin-bottom: 32px; } h2 { font-size: 24px; margin-bottom: 32px; } p { font-size: 20px; margin-bottom: 12px; }`,
      },
      {
        type: "hint",
        text: "Усі значення rem рахуються від html з font-size: 16px. Вкладеність main, section, h2 та p не впливає на розрахунок rem.",
      },
      {
        type: "answer",
        text: `main { margin: 4rem auto 2rem; } h1 { font-size: 2rem; } section { font-size: 1rem; margin-bottom: 2rem; } h2 { font-size: 1.5rem; margin-bottom: 2rem; } p { font-size: 1.25rem; margin-bottom: 0.75rem; }`,
      },
      {
        type: "example",
        title: "Розрахунок",
        text: "64 / 16 = 4rem; 32 / 16 = 2rem; 16 / 16 = 1rem; 24 / 16 = 1.5rem; 20 / 16 = 1.25rem; 12 / 16 = 0.75rem.",
      },
      {
        type: "note",
        text: "Головна перевага rem у тому, що всі значення залежать тільки від font-size елемента html. Тому зміна розміру шрифту батьківського елемента не змінює значення rem у дочірніх елементів.",
      },
    ],
  },
  {
    id: "css-vw-vh-units",
    title: "Одиниці vw і vh у CSS",
    description:
      "Одиниці vw і vh дозволяють задавати розміри елементів відносно ширини та висоти області перегляду браузера.",
    content: [
      {
        type: "heading",
        text: "Що таке viewport",
      },
      {
        type: "paragraph",
        text: "Viewport — це видима область вебсторінки у вікні браузера. Її розмір залежить від ширини та висоти вікна браузера або екрана пристрою.",
      },
      {
        type: "heading",
        text: "Одиниця vw",
      },
      {
        type: "paragraph",
        text: "Одиниця vw означає 1% ширини області перегляду. Наприклад, 50vw дорівнює половині ширини viewport.",
      },
      {
        type: "code",
        language: "css",
        code: `div { width: 50vw; }`,
      },
      {
        type: "example",
        title: "Приклад",
        text: "Якщо ширина viewport дорівнює 1000px, то 1vw = 10px, а 50vw = 500px.",
      },
      {
        type: "heading",
        text: "Одиниця vh",
      },
      {
        type: "paragraph",
        text: "Одиниця vh означає 1% висоти області перегляду. Наприклад, 50vh дорівнює половині висоти viewport.",
      },
      {
        type: "code",
        language: "css",
        code: `div { height: 50vh; }`,
      },
      {
        type: "example",
        title: "Приклад",
        text: "Якщо висота viewport дорівнює 800px, то 1vh = 8px, а 50vh = 400px.",
      },
      {
        type: "heading",
        text: "Використання vw і vh разом",
      },
      {
        type: "paragraph",
        text: "Одиниці vw і vh можна використовувати одночасно. Наприклад, можна задати елементу ширину, яка залежить від ширини viewport, і висоту, яка залежить від його висоти.",
      },
      {
        type: "code",
        language: "css",
        code: `div { width: 50vw; height: 50vh; margin: 30px auto; border: 1px solid red; }`,
      },
      {
        type: "example",
        title: "Результат",
        text: "Елемент матиме ширину, що дорівнює 50% ширини viewport, і висоту, що дорівнює 50% його висоти.",
      },
      {
        type: "heading",
        text: "Практичне завдання",
      },
      {
        type: "heading",
        text: "Практичне завдання 1",
      },
      {
        type: "task",
        text: [
          "Дано div.",
          "Задайте йому верхній відступ, який дорівнює 30% висоти області перегляду.",
        ],
      },
      {
        type: "code",
        language: "html",
        code: `<div>text</div>`,
      },
      {
        type: "hint",
        text: "Для відступу зверху використовується властивість margin-top. Оскільки значення потрібно взяти від висоти viewport, використовуйте vh.",
      },
      {
        type: "answer",
        text: `div { margin-top: 30vh; }`,
      },
      {
        type: "example",
        title: "Результат",
        text: "margin-top: 30vh означає верхній відступ, що дорівнює 30% висоти області перегляду.",
      },
      {
        type: "heading",
        text: "Практичне завдання 2",
      },
      {
        type: "task",
        text: [
          "Дано div.",
          "Задайте йому ширину та висоту, які дорівнюють 70% ширини області перегляду.",
        ],
      },
      {
        type: "code",
        language: "html",
        code: `<div>text</div>`,
      },
      {
        type: "hint",
        text: "В умові обидва значення потрібно розраховувати від ширини viewport, тому для обох властивостей використовуйте vw.",
      },
      {
        type: "answer",
        text: `div { width: 70vw; height: 70vw; }`,
      },
      {
        type: "example",
        title: "Результат",
        text: "width: 70vw і height: 70vw означають, що і ширина, і висота div дорівнюють 70% ширини області перегляду.",
      },
      {
        type: "note",
        text: "Запам'ятайте: vw залежить від ширини viewport, а vh — від його висоти. 1vw — це 1% ширини, а 1vh — 1% висоти області перегляду.",
      },
    ],
  },
];
