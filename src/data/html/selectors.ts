import type { Lesson } from "../types";

export const selectors: Lesson[] = [
  {
    id: "html-tag-relations",

    title: "Споріднені зв’язки тегів в HTML",

    description:
      "Розбираємо поняття батьківських елементів, нащадків та безпосередніх зв’язків між HTML-тегами.",

    content: [
      {
        type: "heading",
        text: "Споріднені зв’язки тегів в HTML",
      },

      {
        type: "paragraph",
        text: "У цьому уроці ми розберемо термінологію споріднених зв’язків HTML-тегів. Кожен тег залежно від свого положення в HTML-коді може бути батьківським елементом, нащадком або одночасно і батьківським елементом, і нащадком.",
      },

      {
        type: "heading",
        text: "Батьківські елементи та нащадки",
      },

      {
        type: "paragraph",
        text: "Розглянемо приклад HTML-коду:",
      },

      {
        type: "code",
        language: "html",
        code: `<ul>
  <li>paragraph <i>italic</i></li>
  <li>paragraph <i>italic</i></li>
  <li>paragraph <i>italic</i></li>
  <li>paragraph <i>italic</i></li>
</ul>`,
      },

      {
        type: "paragraph",
        text: "У цьому коді тег i є нащадком тегів li, а також нащадком тега ul. Тег li є безпосереднім батьківським елементом для i, а тег ul є батьківським елементом вищого рівня.",
      },

      {
        type: "paragraph",
        text: "Теги li є нащадками тега ul і одночасно є батьківськими елементами для тегів i. Тег ul є батьківським елементом для тегів li та i.",
      },

      {
        type: "task",
        text: [
          "№1",
          "",
          "Дано наступний код:",
          "",
          "<ul>",
          '  <li>text <a href="">link</a></li>',
          '  <li>text <a href="">link</a></li>',
          '  <li>text <a href="">link</a></li>',
          '  <li>text <a href=""><b>bold link</b></a></li>',
          "</ul>",
          "",
          "Розкажіть, які батьківські зв’язки ви бачите.",
        ],
      },

      {
        type: "hint",
        text: "Пам’ятайте: тег, який знаходиться всередині іншого тега, є його нащадком. Тег, який містить інший тег всередині, є батьківським.",
      },

      {
        type: "answer",
        text: "ul є батьківським елементом для li. li є безпосереднім батьківським елементом для a. У останньому елементі b є нащадком a, а a є нащадком li.",
      },

      {
        type: "task",
        text: [
          "№2",
          "",
          "Дано наступний код:",
          "",
          "<table>",
          "  <tr>",
          "    <td>cell 1</td>",
          "    <td>cell 2</td>",
          "    <td>cell 3</td>",
          "  </tr>",
          "</table>",
          "",
          "Розкажіть, які батьківські зв’язки ви бачите.",
        ],
      },

      {
        type: "answer",
        text: "table є батьківським елементом для tr. tr є безпосереднім батьківським елементом для td. Теги td є нащадками tr та table.",
      },

      {
        type: "task",
        text: [
          "№3",
          "",
          "Дано наступний код:",
          "",
          "<p>",
          "  This is a paragraph with text",
          "  <i><b>bold italic</b></i>",
          '  <a href="">link <i>italic</i></a>.',
          "</p>",
          "",
          "Які нащадки є у абзацу?",
          "Які безпосередні нащадки є у абзацу?",
        ],
      },

      {
        type: "answer",
        text: "Нащадки p: i, b, a та другий i. Безпосередні нащадки p: i та a.",
      },

      {
        type: "task",
        text: [
          "№4",
          "",
          "Дано наступний код:",
          "",
          "<p>",
          '  <a href="">link <i><b>bold italic</b></i></a>',
          "</p>",
          "",
          "Які батьківські елементи є у тега b?",
          "Хто є його безпосереднім батьківським елементом?",
        ],
      },

      {
        type: "answer",
        text: "Для b батьківськими елементами є i, a та p. Безпосередній батьківський елемент тега b — це i.",
      },
    ],
  },
  {
    id: "css-inheritance",

    title: "Наслідування CSS властивостей",

    description:
      "Розбираємо, як CSS властивості передаються від батьківських елементів до дочірніх.",

    content: [
      {
        type: "heading",
        text: "Наслідування CSS властивостей",
      },

      {
        type: "paragraph",
        text: "У CSS деякі властивості можуть наслідуватися дочірніми елементами від батьківських. Це означає, що якщо у батьківського елемента задано певну властивість, вона автоматично може застосуватися до його нащадків.",
      },

      {
        type: "paragraph",
        text: "Розглянемо приклад. У нас є абзац, всередині якого знаходиться текст у тегу i:",
      },

      {
        type: "code",
        language: "html",
        code: `<p>
  This is some <i>text</i> in paragraph.
</p>`,
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
        text: "У результаті червоним кольором стане не тільки текст абзацу, а й текст усередині тега i. Це відбувається тому, що властивість color наслідується.",
      },

      {
        type: "note",
        text: "Не всі CSS властивості наслідуються, але багато властивостей, які відповідають за оформлення тексту, можуть передаватися від батьківських елементів до дочірніх.",
      },

      {
        type: "heading",
        text: "Перевизначення успадкованих властивостей",
      },

      {
        type: "paragraph",
        text: "За потреби можна змінити успадковану властивість для дочірнього елемента, задавши для нього окремий CSS-селектор.",
      },

      {
        type: "code",
        language: "html",
        code: `<p>
  This is some <i>text</i> in paragraph.
</p>`,
      },

      {
        type: "code",
        language: "css",
        code: `p {
  color: red;
}

i {
  color: blue;
}`,
      },

      {
        type: "paragraph",
        text: "У цьому випадку весь текст абзацу буде червоним, а текст у тегу i стане синім, тому що для нього задано власне значення кольору.",
      },

      {
        type: "paragraph",
        text: "Порядок розташування селекторів у CSS не має значення, якщо вони мають однакову специфічність.",
      },

      {
        type: "code",
        language: "css",
        code: `i {
  color: blue;
}

p {
  color: red;
}`,
      },

      {
        type: "paragraph",
        text: "Результат буде таким самим: текст абзацу червоний, а текст у тегу i синій.",
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
          "Який колір матиме текст у тегу b?",
          "",
          "<p>",
          "  This is some <b>text</b> in paragraph.",
          "</p>",
          "",
          "p {",
          "  color: blue;",
          "}",
        ],
      },

      {
        type: "answer",
        text: "Текст у тегу b буде синього кольору. Властивість color успадкується від батьківського елемента p.",
      },

      {
        type: "task",
        text: [
          "№2",
          "",
          "Який колір матиме текст у тегу b?",
          "",
          "<p>",
          "  This is some <b>text</b> in paragraph.",
          "</p>",
          "",
          "p {",
          "  color: blue;",
          "}",
          "",
          "b {",
          "  color: red;",
          "}",
        ],
      },

      {
        type: "answer",
        text: "Текст у тегу b буде червоним, тому що для b задано власну властивість color, яка перевизначає успадковане значення.",
      },

      {
        type: "task",
        text: [
          "№3",
          "",
          "Який колір матиме текст у тегу b?",
          "",
          "b {",
          "  color: red;",
          "}",
          "",
          "p {",
          "  color: blue;",
          "}",
        ],
      },

      {
        type: "answer",
        text: "Текст у тегу b буде червоним. Власний стиль b має пріоритет над успадкованим стилем від p.",
      },

      {
        type: "task",
        text: [
          "№4",
          "",
          "Який колір матиме текст у тегу li?",
          "",
          "ul {",
          "  color: blue;",
          "}",
        ],
      },

      {
        type: "answer",
        text: "Текст у тегах li буде синім, оскільки li успадковує властивість color від ul.",
      },

      {
        type: "task",
        text: [
          "№5",
          "",
          "Який колір матиме текст у тегу li?",
          "",
          "ul {",
          "  color: blue;",
          "}",
          "",
          "li {",
          "  color: red;",
          "}",
        ],
      },

      {
        type: "answer",
        text: "Текст у li буде червоним, тому що власний стиль li замінює успадкований стиль від ul.",
      },

      {
        type: "task",
        text: [
          "№6",
          "",
          "Який колір матиме текст у тегу i?",
          "",
          "ul {",
          "  color: blue;",
          "}",
          "",
          "li {",
          "  color: red;",
          "}",
          "",
          "i {",
          "  color: green;",
          "}",
        ],
      },

      {
        type: "answer",
        text: "Текст у тегу i буде зеленим, тому що для нього задано власний колір.",
      },

      {
        type: "task",
        text: [
          "№7",
          "",
          "Який розмір матиме текст у тегу i?",
          "",
          "i {",
          "  font-size: 30px;",
          "}",
          "",
          "ul {",
          "  font-size: 20px;",
          "}",
          "",
          "li {",
          "  color: red;",
          "  font-weight: bold;",
          "}",
        ],
      },

      {
        type: "answer",
        text: "Текст у тегу i буде мати розмір 30px, тому що для нього задано власну властивість font-size. Значення 20px від ul не використовується.",
      },
    ],
  },
  {
    id: "css-selector-grouping",

    title: "Групування селекторів у CSS",

    description: "Вивчаємо, як об’єднувати CSS-селектори для скорочення коду.",

    content: [
      {
        type: "heading",
        text: "Групування селекторів у CSS",
      },

      {
        type: "paragraph",
        text: "Іноді виникає ситуація, коли потрібно зробити однакові стилі для декількох HTML-елементів. Наприклад, змінити колір одразу для заголовків h2, h3 та абзаців.",
      },

      {
        type: "paragraph",
        text: "Без групування селекторів довелося б писати окремий CSS-код для кожного елемента:",
      },

      {
        type: "code",
        language: "css",
        code: `h2 {
  color: red;
}

h3 {
  color: red;
}

p {
  color: red;
}`,
      },

      {
        type: "paragraph",
        text: "Щоб зробити код коротшим, CSS дозволяє об'єднувати декілька селекторів через кому. Стилі застосуються до всіх зазначених елементів одночасно.",
      },

      {
        type: "code",
        language: "css",
        code: `h2, h3, p {
  color: red;
}`,
      },

      {
        type: "note",
        text: "Групування селекторів допомагає уникати повторення коду та робить CSS-файл більш зрозумілим.",
      },

      {
        type: "heading",
        text: "Практичне завдання",
      },

      {
        type: "task",
        text: [
          "№1",
          "",
          "Спростіть код, використовуючи групування селекторів:",
          "",
          "h1 {",
          "  text-align: center;",
          "}",
          "",
          "h2 {",
          "  text-align: center;",
          "}",
          "",
          "h3 {",
          "  text-align: center;",
          "}",
        ],
      },

      {
        type: "hint",
        text: "Якщо декілька селекторів мають однакові CSS-властивості, їх можна записати через кому в одному правилі.",
      },

      {
        type: "answer",
        text: `h1, h2, h3 {
  text-align: center;
}`,
      },
    ],
  },
  {
    id: "css-grouping-common-properties",

    title: "Спільні властивості при групуванні селекторів у CSS",

    description:
      "Навчаємося групувати однакові CSS-властивості та окремо записувати унікальні стилі.",

    content: [
      {
        type: "heading",
        text: "Спільні властивості при групуванні селекторів у CSS",
      },

      {
        type: "paragraph",
        text: "Часто декілька селекторів мають однакові CSS-властивості, але деякі з них також містять власні унікальні стилі. У такому випадку повторювані властивості можна винести в одну групу, а специфічні залишити окремо.",
      },

      {
        type: "paragraph",
        text: "Наприклад, усі елементи мають однаковий колір тексту, але абзац додатково має вирівнювання та розмір шрифту.",
      },

      {
        type: "code",
        language: "css",
        code: `h2 {
  color: red;
}

h3 {
  color: red;
}

p {
  color: red;
  text-align: justify;
  font-size: 16px;
}`,
      },

      {
        type: "paragraph",
        text: "Повторювану властивість color можна винести в окреме правило, а специфічні стилі залишити лише для абзацу.",
      },

      {
        type: "code",
        language: "css",
        code: `h2, h3, p {
  color: red;
}

p {
  text-align: justify;
  font-size: 16px;
}`,
      },

      {
        type: "note",
        text: "Такий підхід робить CSS-код коротшим, читабельнішим і простішим у підтримці.",
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
          "Спростіть код, використовуючи групування селекторів:",
          "",
          "h1 {",
          "  text-align: center;",
          "}",
          "",
          "h2 {",
          "  text-align: center;",
          "  color: blue;",
          "}",
          "",
          "h3 {",
          "  text-align: center;",
          "  font-size: 16px;",
          "  color: red;",
          "}",
        ],
      },

      {
        type: "hint",
        text: "Знайдіть властивість, яка повторюється у всіх трьох селекторах. Винесіть її в одну групу, а унікальні властивості залиште окремо.",
      },

      {
        type: "answer",
        text: `h1, h2, h3 {
  text-align: center;
}

h2 {
  color: blue;
}

h3 {
  font-size: 16px;
  color: red;
}`,
      },

      {
        type: "task",
        text: [
          "№2",
          "",
          "Спростіть код, використовуючи групування селекторів:",
          "",
          "h1 {",
          "  text-align: center;",
          "  color: red;",
          "}",
          "",
          "h2 {",
          "  text-align: center;",
          "  color: red;",
          "}",
          "",
          "h3 {",
          "  text-align: center;",
          "  font-size: 16px;",
          "  color: red;",
          "}",
        ],
      },

      {
        type: "hint",
        text: "Властивості text-align і color повторюються у всіх селекторах. Їх можна об'єднати, а font-size залишити тільки для h3.",
      },

      {
        type: "answer",
        text: `h1, h2, h3 {
  text-align: center;
  color: red;
}

h3 {
  font-size: 16px;
}`,
      },
    ],
  },
  {
    id: "css-descendant-selector",

    title: "Селектор нащадків у CSS",

    description:
      "Дізнаємося, як вибирати елементи за їхніми батьківськими елементами за допомогою селектора нащадків.",

    content: [
      {
        type: "heading",
        text: "Селектор нащадків у CSS",
      },

      {
        type: "paragraph",
        text: "Селектор нащадків дозволяє застосовувати стилі лише до елементів, які знаходяться всередині певного батьківського елемента. Для цього селектори записуються через пробіл.",
      },

      {
        type: "paragraph",
        text: "Нехай у нас є невпорядкований список ul та впорядкований список ol:",
      },

      {
        type: "code",
        language: "html",
        code: `<ul>
  <li>text</li>
  <li>text</li>
  <li>text</li>
  <li>text</li>
  <li>text</li>
</ul>

<ol>
  <li>text</li>
  <li>text</li>
  <li>text</li>
  <li>text</li>
  <li>text</li>
</ol>`,
      },

      {
        type: "paragraph",
        text: "Якщо написати такий CSS, то всі елементи li стануть червоними незалежно від того, у якому списку вони знаходяться.",
      },

      {
        type: "code",
        language: "css",
        code: `li {
  color: red;
}`,
      },

      {
        type: "paragraph",
        text: "Але якщо потрібно пофарбувати елементи li списку ul у червоний колір, а елементи li списку ol — у зелений, слід використати селектор нащадків.",
      },

      {
        type: "code",
        language: "css",
        code: `ul li {
  color: red;
}

ol li {
  color: green;
}`,
      },

      {
        type: "paragraph",
        text: "Селектор нащадків може складатися не лише з двох селекторів. Їх може бути будь-яка кількість.",
      },

      {
        type: "code",
        language: "css",
        code: `ul li i {
  color: red;
}`,
      },

      {
        type: "paragraph",
        text: "У цьому прикладі будуть вибрані всі теги i, які знаходяться всередині тегів li, а ті, у свою чергу, знаходяться всередині списку ul.",
      },

      {
        type: "note",
        text: "Селектор нащадків записується через пробіл. Кожен наступний селектор має знаходитися всередині попереднього.",
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
          "Дано HTML-код:",
          "",
          "<ul>",
          "  <li>text <i>italic</i></li>",
          "  <li>text <i>italic</i></li>",
          "  <li>text <i>italic</i></li>",
          "  <li>text <i>italic</i></li>",
          "</ul>",
          "",
          "<p>",
          "  paragraph text <i>italic</i>",
          "</p>",
          "<p>",
          "  paragraph text <i>italic</i>",
          "</p>",
          "",
          "Пофарбуйте курсив усередині тегів ul у червоний колір, а курсив усередині тегів p — у зелений.",
        ],
      },

      {
        type: "hint",
        text: "Використайте два селектори нащадків: один для ul, інший для p.",
      },

      {
        type: "answer",
        text: `ul i {
  color: red;
}

p i {
  color: green;
}`,
      },

      {
        type: "task",
        text: [
          "№2",
          "",
          "Дано HTML-код:",
          "",
          "<p>",
          "  paragraph text <b><i>bold italic</i></b>",
          "</p>",
          "<p>",
          "  paragraph text <i>italic</i>",
          "</p>",
          "",
          "Пофарбуйте у червоний колір лише курсив, який знаходиться всередині тега b, а тег b — усередині тега p.",
        ],
      },

      {
        type: "hint",
        text: "Складіть селектор із трьох елементів, записавши їх через пробіл.",
      },

      {
        type: "answer",
        text: `p b i {
  color: red;
}`,
      },
    ],
  },
  {
    id: "css-child-selector",

    title: "Дочірній селектор у CSS",

    description:
      "Вивчаємо дочірній селектор (>) та дізнаємося, чим він відрізняється від селектора нащадків.",

    content: [
      {
        type: "heading",
        text: "Дочірній селектор у CSS",
      },

      {
        type: "paragraph",
        text: "Дочірній селектор дозволяє вибирати лише безпосередніх дочірніх елементів. На відміну від селектора нащадків, він не вибирає елементи, які знаходяться глибше в ієрархії.",
      },

      {
        type: "paragraph",
        text: "Розглянемо наступний HTML-код:",
      },

      {
        type: "code",
        language: "html",
        code: `<p>
  text <b><i>bold italic</i></b>
</p>

<p>
  text <i>just italic</i>
</p>`,
      },

      {
        type: "paragraph",
        text: "Якщо використати селектор нащадків, будуть вибрані всі теги i, що знаходяться всередині тегів p, незалежно від рівня вкладеності.",
      },

      {
        type: "code",
        language: "css",
        code: `p i {
  color: red;
}`,
      },

      {
        type: "paragraph",
        text: "У цьому випадку червоними стануть обидва теги i.",
      },

      {
        type: "paragraph",
        text: "Щоб вибрати лише ті теги i, які є безпосередніми дочірніми елементами тегів p, використовується дочірній селектор >.",
      },

      {
        type: "code",
        language: "css",
        code: `p > i {
  color: red;
}`,
      },

      {
        type: "paragraph",
        text: "Тепер буде вибраний лише другий тег i, оскільки він є прямою дитиною елемента p. Перший тег i знаходиться всередині тега b, тому під цей селектор не підходить.",
      },

      {
        type: "note",
        text: "Селектор 'A > B' вибирає лише ті елементи B, які є безпосередніми дочірніми елементами A.",
      },

      {
        type: "heading",
        text: "Практичне завдання",
      },

      {
        type: "task",
        text: [
          "№1",
          "",
          "Дано HTML-код:",
          "",
          "<ul>",
          "  <li>",
          "    <i>italic</i>",
          "    <b>bold</b>",
          "    <b><i>bold italic</i></b>",
          "  </li>",
          "  <li>",
          "    <i>italic</i>",
          "    <b>bold</b>",
          "    <b><i>bold italic</i></b>",
          "  </li>",
          "</ul>",
          "",
          "Пофарбуйте у червоний колір лише ті теги b, які є безпосередніми дочірніми елементами тегів li.",
        ],
      },

      {
        type: "hint",
        text: "Використайте дочірній селектор > між тегами li та b.",
      },

      {
        type: "answer",
        text: `li > b {
  color: red;
}`,
      },
    ],
  },
  {
    id: "html-span-tag",

    title: "Тег span для фрагментів тексту в HTML",

    description:
      "Дізнаємося, навіщо потрібен тег span і як за допомогою CSS оформлювати окремі слова або частини тексту.",

    content: [
      {
        type: "heading",
        text: "Тег span для фрагментів тексту в HTML",
      },

      {
        type: "paragraph",
        text: "Ви вже знаєте, що для виділення тексту жирним використовується тег b. Але що робити, якщо потрібно змінити колір, розмір або інше оформлення лише одного слова чи невеликої частини тексту?",
      },

      {
        type: "paragraph",
        text: "Для цього використовується тег span. Сам по собі він нічого не змінює, але до нього можна застосувати CSS-стилі.",
      },

      {
        type: "paragraph",
        text: "Наприклад, маємо такий HTML-код:",
      },

      {
        type: "code",
        language: "html",
        code: `<p>
  This is a paragraph with text.
</p>`,
      },

      {
        type: "paragraph",
        text: "Припустимо, потрібно зробити слово text червоним. Для цього обгорнемо його в тег span і призначимо клас.",
      },

      {
        type: "code",
        language: "html",
        code: `<p>
  This is a paragraph with <span class="red">text</span>.
</p>`,
      },

      {
        type: "paragraph",
        text: "Тепер залишилося оформити цей клас у CSS.",
      },

      {
        type: "code",
        language: "css",
        code: `.red {
  color: red;
}`,
      },

      {
        type: "note",
        text: "Тег span використовується для оформлення невеликих фрагментів тексту. Якщо потрібно оформити цілий блок, зазвичай використовують тег div.",
      },

      {
        type: "heading",
        text: "Практичне завдання",
      },

      {
        type: "task",
        text: [
          "№1",
          "",
          "Дано HTML-код:",
          "",
          "<p>",
          '  Lorem ipsum <span class="xxx">dolor sit</span> amet.',
          "</p>",
          "",
          "<p>",
          '  <span class="xxx">Lorem ipsum</span> dolor sit amet.',
          "</p>",
          "",
          "Зробіть елементи з класом xxx розміром 30px.",
        ],
      },

      {
        type: "hint",
        text: "Зверніться до класу xxx за допомогою селектора класу та використайте властивість font-size.",
      },

      {
        type: "answer",
        text: `.xxx {
  font-size: 30px;
}`,
      },
    ],
  },
  {
    id: "html-div-tag",

    title: "Тег div для групування елементів у HTML",

    description:
      "Дізнаємося, як за допомогою тега div об'єднувати кілька елементів і застосовувати до них спільні CSS-стилі.",

    content: [
      {
        type: "heading",
        text: "Тег div для групування елементів у HTML",
      },

      {
        type: "paragraph",
        text: "У попередньому уроці ми розглянули тег span, який використовується для оформлення невеликих фрагментів тексту. Якщо ж потрібно об'єднати кілька HTML-елементів в одну групу, використовується тег div.",
      },

      {
        type: "paragraph",
        text: "Тег div сам по собі нічого не змінює. Його основне призначення — групувати елементи, щоб потім застосувати до всієї групи однакові CSS-стилі.",
      },

      {
        type: "paragraph",
        text: "Наприклад, згрупуємо кілька абзаців у два блоки:",
      },

      {
        type: "code",
        language: "html",
        code: `<div class="block1">
  <p>
    text
  </p>
  <p>
    text
  </p>
</div>

<div class="block2">
  <p>
    text
  </p>
  <p>
    text
  </p>
</div>`,
      },

      {
        type: "paragraph",
        text: "Тепер можна застосувати різні стилі до кожної групи:",
      },

      {
        type: "code",
        language: "css",
        code: `.block1 {
  color: red;
}

.block2 {
  color: green;
}`,
      },

      {
        type: "note",
        text: "Усі елементи всередині div успадкують властивості, які успадковуються (наприклад color), якщо не перевизначити їх окремо.",
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
          "Дано HTML-код:",
          "",
          "<div>",
          "  <h2>Title</h2>",
          "  <p>text</p>",
          "  <p>text</p>",
          "</div>",
          "",
          "<div>",
          "  <h2>Title</h2>",
          "  <p>text</p>",
          "  <p>text</p>",
          "  <p>text</p>",
          "</div>",
          "",
          "<div>",
          "  <h2>Title</h2>",
          "  <p>text</p>",
          "  <p>text</p>",
          "  <p>text</p>",
          "  <p>text</p>",
          "</div>",
          "",
          "Пофарбуйте вміст першого div у червоний колір, другого — у зелений, а третього — у синій. Для цього призначте кожному div власний клас.",
        ],
      },

      {
        type: "hint",
        text: "Створіть три різні класи, призначте їх тегам div і задайте кожному класу свій колір.",
      },

      {
        type: "answer",
        text: `HTML:

<div class="red">
  ...
</div>

<div class="green">
  ...
</div>

<div class="blue">
  ...
</div>

CSS:

.red {
  color: red;
}

.green {
  color: green;
}

.blue {
  color: blue;
}`,
      },

      {
        type: "task",
        text: [
          "№2",
          "",
          "Дано HTML-код:",
          "",
          "<div>",
          "  <h2>Title</h2>",
          "  <p>text</p>",
          "  <p>text</p>",
          "</div>",
          "",
          "<div>",
          "  <h2>Title</h2>",
          "  <p>text</p>",
          "  <p>text</p>",
          "</div>",
          "",
          "<div>",
          "  <h2>Title</h2>",
          "  <p>text</p>",
          "  <p>text</p>",
          "</div>",
          "",
          "<div>",
          "  <h2>Title</h2>",
          "  <p>text</p>",
          "  <p>text</p>",
          "</div>",
          "",
          "Пофарбуйте вміст першого і третього div у червоний колір, а другого і четвертого — у зелений. Для цього використайте лише два класи.",
        ],
      },

      {
        type: "hint",
        text: "Однаковий клас можна призначати будь-якій кількості елементів.",
      },

      {
        type: "answer",
        text: `HTML:

<div class="red">
  ...
</div>

<div class="green">
  ...
</div>

<div class="red">
  ...
</div>

<div class="green">
  ...
</div>

CSS:

.red {
  color: red;
}

.green {
  color: green;
}`,
      },
    ],
  },
  {
    id: "css-grouping-classes",

    title: "Групування класів у CSS",

    description:
      "Навчимося групувати CSS-класи, щоб не дублювати однакові властивості у різних правилах.",

    content: [
      {
        type: "heading",
        text: "Групування класів у CSS",
      },

      {
        type: "paragraph",
        text: "Часто різні класи мають кілька однакових CSS-властивостей. Щоб не повторювати однаковий код, класи можна об'єднати за допомогою групування селекторів.",
      },

      {
        type: "paragraph",
        text: "Наприклад, нехай є два класи, які задають різні кольори:",
      },

      {
        type: "code",
        language: "css",
        code: `.xxx {
  color: green;
}

.yyy {
  color: red;
}`,
      },

      {
        type: "paragraph",
        text: "Припустимо, потрібно, щоб обидва класи також встановлювали однаковий розмір шрифту.",
      },

      {
        type: "code",
        language: "css",
        code: `.xxx {
  color: green;
  font-size: 30px;
}

.yyy {
  color: red;
  font-size: 30px;
}`,
      },

      {
        type: "paragraph",
        text: "Оскільки властивість font-size однакова, її краще винести в окреме правило, згрупувавши селектори.",
      },

      {
        type: "code",
        language: "css",
        code: `.xxx {
  color: green;
}

.yyy {
  color: red;
}

.xxx,
.yyy {
  font-size: 30px;
}`,
      },

      {
        type: "note",
        text: "Групування селекторів дозволяє зробити CSS-код коротшим, читабельнішим і простішим у підтримці.",
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
          "Спростіть код, використовуючи групування селекторів:",
          "",
          ".eee {",
          "  font-size: 20px;",
          "  line-height: 1.5;",
          "  font-family: Arial;",
          "}",
          "",
          ".zzz {",
          "  font-size: 30px;",
          "  line-height: 1.5;",
          "  font-family: Arial;",
          "}",
        ],
      },

      {
        type: "hint",
        text: "Винесіть однакові властивості line-height і font-family в окреме згруповане правило.",
      },

      {
        type: "answer",
        text: `.eee {
  font-size: 20px;
}

.zzz {
  font-size: 30px;
}

.eee,
.zzz {
  line-height: 1.5;
  font-family: Arial;
}`,
      },

      {
        type: "task",
        text: [
          "№2",
          "",
          "Спростіть код, використовуючи групування селекторів:",
          "",
          ".eee {",
          "  font-size: 20px;",
          "  text-align: center;",
          "  font-family: Arial;",
          "}",
          "",
          ".zzz {",
          "  font-size: 30px;",
          "  text-align: center;",
          "  font-family: Arial;",
          "}",
          "",
          ".ggg {",
          "  font-size: 35px;",
          "  text-align: center;",
          "  font-family: Arial;",
          "}",
        ],
      },

      {
        type: "hint",
        text: "Згрупуйте всі три класи та винесіть однакові властивості text-align і font-family.",
      },

      {
        type: "answer",
        text: `.eee {
  font-size: 20px;
}

.zzz {
  font-size: 30px;
}

.ggg {
  font-size: 35px;
}

.eee,
.zzz,
.ggg {
  text-align: center;
  font-family: Arial;
}`,
      },
    ],
  },
  {
    id: "css-tag-with-class-selector",

    title: "Тег із заданим класом у CSS",

    description:
      "Навчимося вибирати не всі елементи певного класу, а лише конкретний HTML-тег із цим класом.",

    content: [
      {
        type: "heading",
        text: "Тег із заданим класом у CSS",
      },

      {
        type: "paragraph",
        text: "Один і той самий клас можна призначити різним HTML-елементам. Наприклад, клас може одночасно використовуватися для заголовків і абзаців.",
      },

      {
        type: "paragraph",
        text: "Нехай заголовки h2 та абзаци p мають однаковий клас eee:",
      },

      {
        type: "code",
        language: "html",
        code: `<h2 class="eee">Title</h2>
<p class="eee">
  text
</p>

<h2 class="eee">Title</h2>
<p class="eee">
  text
</p>`,
      },

      {
        type: "paragraph",
        text: "Якщо звернутися лише до класу, то стилі отримають усі елементи з цим класом:",
      },

      {
        type: "code",
        language: "css",
        code: `.eee {
  color: red;
}`,
      },

      {
        type: "paragraph",
        text: "Але можна вибрати лише певний тег із цим класом. Для цього спочатку записується назва тега, а відразу після неї — клас без пробілу.",
      },

      {
        type: "code",
        language: "css",
        code: `h2.eee {
  color: red;
}

p.eee {
  color: green;
}`,
      },

      {
        type: "note",
        text: "Селектор h2.eee вибирає лише елементи <h2> з класом eee. Інші елементи з таким самим класом він не зачіпає.",
      },

      {
        type: "heading",
        text: "Практичне завдання",
      },

      {
        type: "task",
        text: [
          "№1",
          "",
          "Дано HTML-код:",
          "",
          `<h2 class="header">text</h2>
<h2 class="header">text</h2>
<h3 class="header">text</h3>
<h3 class="header">text</h3>`,
          "",
          "Та CSS:",
          "",
          `.header {
  color: red;
}`,
          "",
          "Зробіть усі h2 з класом header розміром 40px, а всі h3 з цим класом — розміром 30px.",
        ],
      },

      {
        type: "hint",
        text: "Використайте селектори h2.header і h3.header.",
      },

      {
        type: "answer",
        text: `.header {
  color: red;
}

h2.header {
  font-size: 40px;
}

h3.header {
  font-size: 30px;
}`,
      },
    ],
  },
  {
    id: "css-descendant-selector-with-classes",

    title: "Селектор нащадків і класи в CSS",

    description:
      "Навчимося використовувати селектор нащадків разом із CSS-класами для вибору елементів усередині певного блоку.",

    content: [
      {
        type: "heading",
        text: "Селектор нащадків і класи в CSS",
      },

      {
        type: "paragraph",
        text: "Селектор нащадків можна використовувати не лише з назвами HTML-тегів, а й із класами. Це дозволяє вибирати елементи, які знаходяться всередині елементів певного класу.",
      },

      {
        type: "paragraph",
        text: "Наприклад, нехай є два блоки з класом block:",
      },

      {
        type: "code",
        language: "html",
        code: `<div class="block">
  <h2>Title</h2>
  <p>
    text
  </p>
</div>

<div class="block">
  <h2>Title</h2>
  <p>
    text
  </p>
</div>`,
      },

      {
        type: "paragraph",
        text: "Виберемо всі заголовки h2 та всі абзаци p, які знаходяться всередині елементів із класом block.",
      },

      {
        type: "code",
        language: "css",
        code: `.block h2 {
  color: red;
}

.block p {
  color: green;
}`,
      },

      {
        type: "note",
        text: "Селектор .block h2 вибирає всі заголовки <h2>, які знаходяться всередині будь-якого елемента з класом block. Аналогічно працює і селектор .block p.",
      },

      {
        type: "heading",
        text: "Практичне завдання",
      },

      {
        type: "task",
        text: [
          "№1",
          "",
          "Дано HTML-код:",
          "",
          `<p class="eee">
  text <i>italic</i>
</p>

<p class="eee">
  text <i>italic</i>
</p>

<div class="eee">
  text <i>italic</i>
</div>

<div class="eee">
  text <i>italic</i>
</div>`,
          "",
          "Пофарбуйте в червоний колір усі теги i, що знаходяться всередині елементів із класом eee.",
        ],
      },

      {
        type: "hint",
        text: "Спочатку вкажіть клас, потім через пробіл тег i.",
      },

      {
        type: "answer",
        text: `.eee i {
  color: red;
}`,
      },
    ],
  },
  {
    id: "css-complex-descendant-selectors-with-classes",

    title: "Складні комбінації селектора нащадків і класів у CSS",

    description:
      "Навчимося поєднувати селектори класів, тегів і селектор нащадків для точного вибору елементів.",

    content: [
      {
        type: "heading",
        text: "Складні комбінації селектора нащадків і класів у CSS",
      },

      {
        type: "paragraph",
        text: "Селектор нащадків можна комбінувати з класами та назвами тегів. Це дозволяє дуже точно вибирати потрібні елементи.",
      },

      {
        type: "paragraph",
        text: "Нехай маємо такий HTML-код:",
      },

      {
        type: "code",
        language: "html",
        code: `<div class="block">
  <h2 class="header">Title h2</h2>
  <p>text</p>

  <h3 class="header">Title h3</h3>
  <p>text</p>
  <p>text</p>
</div>

<div class="block">
  <h2 class="header">Title h2</h2>
  <p>text</p>

  <h3 class="header">Title h3</h3>
  <p>text</p>
  <p>text</p>
</div>`,
      },

      {
        type: "paragraph",
        text: "Виберемо всі елементи з класом header, які знаходяться всередині елементів із класом block, і змінимо для них шрифт.",
      },

      {
        type: "code",
        language: "css",
        code: `.block .header {
  font-family: Arial;
}`,
      },

      {
        type: "paragraph",
        text: "Усередині елемента з класом block клас header можуть мати різні теги. Наприклад, окремо можна вибрати заголовки h2 та h3.",
      },

      {
        type: "code",
        language: "css",
        code: `.block h2.header {
  font-size: 30px;
  color: red;
}

.block h3.header {
  font-size: 20px;
  color: green;
}`,
      },

      {
        type: "paragraph",
        text: "Повний CSS-код буде виглядати так:",
      },

      {
        type: "code",
        language: "css",
        code: `.block .header {
  font-family: Arial;
}

.block h2.header {
  font-size: 30px;
  color: red;
}

.block h3.header {
  font-size: 20px;
  color: green;
}`,
      },

      {
        type: "note",
        text: "Чим більше селекторів поєднано разом, тим точніше CSS визначає, до яких елементів застосовувати стилі.",
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
          "Поясніть, що вибирає селектор:",
          "",
          `.eee .bbb {
  color: red;
}`,
          "",
          "Потім напишіть HTML-код, який підходить під цей селектор.",
          "",
          "№2",
          "",
          "Поясніть, що вибирає селектор:",
          "",
          `.eee h2 {
  color: red;
}`,
          "",
          "Потім напишіть HTML-код, який підходить під цей селектор.",
          "",
          "№3",
          "",
          "Поясніть, що вибирає селектор:",
          "",
          `.eee h2.bbb {
  color: red;
}`,
          "",
          "Потім напишіть HTML-код, який підходить під цей селектор.",
          "",
          "№4",
          "",
          "Поясніть, що вибирає селектор:",
          "",
          `.eee h3.bbb {
  color: red;
}`,
          "",
          "Потім напишіть HTML-код, який підходить під цей селектор.",
          "",
          "№5",
          "",
          "Поясніть, що вибирає селектор:",
          "",
          `.eee p.bbb {
  color: red;
}`,
          "",
          "Потім напишіть HTML-код, який підходить під цей селектор.",
          "",
          "№6",
          "",
          "Поясніть, що вибирає селектор:",
          "",
          `.eee .bbb .kkk {
  color: red;
}`,
          "",
          "Потім напишіть HTML-код, який підходить під цей селектор.",
        ],
      },

      {
        type: "hint",
        text: "Читайте селектор зліва направо. Спочатку знайдіть батьківський елемент, а потім визначте, який саме елемент усередині нього потрібно вибрати.",
      },

      {
        type: "answer",
        text: `№1
Селектор вибирає всі елементи з класом .bbb, які знаходяться всередині елемента з класом .eee.

<div class="eee">
  <p class="bbb">Text</p>
</div>

№2
Вибирає всі теги <h2>, що знаходяться всередині елемента з класом .eee.

<div class="eee">
  <h2>Title</h2>
</div>

№3
Вибирає всі теги <h2> з класом .bbb, що знаходяться всередині елемента з класом .eee.

<div class="eee">
  <h2 class="bbb">Title</h2>
</div>

№4
Вибирає всі теги <h3> з класом .bbb, що знаходяться всередині елемента з класом .eee.

<div class="eee">
  <h3 class="bbb">Title</h3>
</div>

№5
Вибирає всі теги <p> з класом .bbb, що знаходяться всередині елемента з класом .eee.

<div class="eee">
  <p class="bbb">Text</p>
</div>

№6
Вибирає всі елементи з класом .kkk, які знаходяться всередині елемента з класом .bbb, що, у свою чергу, знаходиться всередині елемента з класом .eee.

<div class="eee">
  <div class="bbb">
    <span class="kkk">Text</span>
  </div>
</div>`,
      },
    ],
  },
  {
    id: "css-common-mistake-descendant-selector",

    title: "Типова помилка новачків у селекторі нащадків",

    description:
      "Розберемо різницю між селектором тега з класом і селектором нащадків. Навчимося правильно читати селектори з пробілом.",

    content: [
      {
        type: "heading",
        text: "Типова помилка новачків у селекторі нащадків",
      },

      {
        type: "paragraph",
        text: "Однією з найпоширеніших помилок початківців є неправильне використання пробілу між селекторами. Один зайвий пробіл повністю змінює зміст селектора.",
      },

      {
        type: "paragraph",
        text: "Розглянемо спочатку такий селектор:",
      },

      {
        type: "code",
        language: "css",
        code: `p.eee {
  color: red;
}`,
      },

      {
        type: "paragraph",
        text: "Цей селектор вибирає всі теги <p>, які мають клас eee.",
      },

      {
        type: "code",
        language: "html",
        code: `<p class="eee">
  lorem ipsum
</p>

<p class="eee">
  lorem ipsum
</p>`,
      },

      {
        type: "paragraph",
        text: "Тепер подивіться на дуже схожий селектор:",
      },

      {
        type: "code",
        language: "css",
        code: `p .eee {
  color: green;
}`,
      },

      {
        type: "paragraph",
        text: "Тут між p і .eee є пробіл. Це вже селектор нащадків. Він вибирає не абзаци, а будь-які елементи з класом eee, які знаходяться всередині тегів <p>.",
      },

      {
        type: "code",
        language: "html",
        code: `<p>
  lorem <span class="eee">ipsum</span>
</p>

<p>
  lorem <span class="eee">ipsum</span>
</p>`,
      },

      {
        type: "warning",
        text: "Запам'ятайте: p.eee і p .eee — це абсолютно різні селектори. Один пробіл повністю змінює те, що буде вибрано.",
      },

      {
        type: "table",
        headers: ["Селектор", "Що вибирає"],
        rows: [
          ["p.eee", "Теги <p> з класом eee"],
          ["p .eee", "Будь-які елементи з класом eee всередині <p>"],
        ],
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
          "Поясніть, що вибирає селектор:",
          "",
          `p.bbb {
  color: red;
}`,
          "",
          "Потім напишіть HTML-код, який підходить під цей селектор.",
          "",
          "№2",
          "",
          "Поясніть, що вибирає селектор:",
          "",
          `p .bbb {
  color: red;
}`,
          "",
          "Потім напишіть HTML-код, який підходить під цей селектор.",
          "",
          "№3",
          "",
          "Поясніть, що вибирає селектор:",
          "",
          `.eee p.bbb {
  color: red;
}`,
          "",
          "Потім напишіть HTML-код, який підходить під цей селектор.",
          "",
          "№4",
          "",
          "Поясніть, що вибирає селектор:",
          "",
          `.eee p .bbb {
  color: red;
}`,
          "",
          "Потім напишіть HTML-код, який підходить під цей селектор.",
        ],
      },

      {
        type: "hint",
        text: "Якщо між селекторами немає пробілу — описуються властивості одного елемента. Якщо є пробіл — це вже селектор нащадків.",
      },

      {
        type: "answer",
        text: `№1

Селектор вибирає всі теги <p>, які мають клас bbb.

HTML:

<p class="bbb">
  Текст
</p>

№2

Селектор вибирає всі елементи з класом bbb, що знаходяться всередині тегів <p>.

HTML:

<p>
  Текст <span class="bbb">виділений</span>
</p>

№3

Селектор вибирає всі теги <p> з класом bbb, які знаходяться всередині елемента з класом eee.

HTML:

<div class="eee">
  <p class="bbb">
    Текст
  </p>
</div>

№4

Селектор вибирає всі елементи з класом bbb, що знаходяться всередині тегів <p>, які, у свою чергу, знаходяться всередині елемента з класом eee.

HTML:

<div class="eee">
  <p>
    Текст <span class="bbb">виділений</span>
  </p>
</div>`,
      },
    ],
  },
  {
    id: "css-element-with-multiple-classes",

    title: "Елемент із кількома CSS-класами",

    description:
      "Навчимося призначати одному HTML-елементу одразу декілька CSS-класів і комбінувати їхні стилі.",

    content: [
      {
        type: "heading",
        text: "Елемент із кількома CSS-класами",
      },

      {
        type: "paragraph",
        text: "Одному HTML-елементу можна призначити відразу кілька CSS-класів. Для цього в атрибуті class потрібно перелічити назви класів через пробіл.",
      },

      {
        type: "paragraph",
        text: "Наприклад, нехай існують два класи:",
      },

      {
        type: "code",
        language: "css",
        code: `.error {
  color: red;
}

.large {
  font-size: 30px;
  font-family: Arial;
}`,
      },

      {
        type: "paragraph",
        text: "Тепер призначимо абзацу одразу обидва класи:",
      },

      {
        type: "code",
        language: "html",
        code: `<p class="error large">
  lorem ipsum
</p>`,
      },

      {
        type: "paragraph",
        text: "У результаті до абзацу будуть застосовані стилі з класу error і одночасно стилі з класу large.",
      },

      {
        type: "note",
        text: "Один клас може відповідати за колір тексту, інший — за розмір шрифту, третій — за рамку або відступи. Це дозволяє легко комбінувати стилі та уникати дублювання CSS-коду.",
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
          "Нехай задані такі CSS-класи:",
          "",
          `.success {
  color: green;
}

.error {
  color: red;
}

.large {
  font-size: 30px;
}

.small {
  font-size: 20px;
}`,
          "",
          "Створіть 4 абзаци.",
          "",
          "• Перший — зелений і з великим шрифтом.",
          "• Другий — червоний і з маленьким шрифтом.",
          "• Третій — червоний і з великим шрифтом.",
          "• Четвертий — зелений і з маленьким шрифтом.",
          "",
          "№2",
          "",
          "Створіть три власні CSS-класи.",
          "",
          "Потім призначте одному HTML-елементу всі три класи одночасно.",
        ],
      },

      {
        type: "hint",
        text: "Щоб застосувати кілька класів до одного елемента, запишіть їх в атрибуті class через пробіл.",
      },

      {
        type: "answer",
        text: `№1

HTML:

<p class="success large">
  Перший абзац
</p>

<p class="error small">
  Другий абзац
</p>

<p class="error large">
  Третій абзац
</p>

<p class="success small">
  Четвертий абзац
</p>

№2

CSS:

.blue {
  color: blue;
}

.bold {
  font-weight: bold;
}

.center {
  text-align: center;
}

HTML:

<p class="blue bold center">
  Текст
</p>`,
      },
    ],
  },
  {
    id: "css-select-element-by-id",

    title: "Вибір елемента за унікальним id у CSS",

    description:
      "Дізнаємося, що таке атрибут id, чим він відрізняється від class і як вибирати елементи за допомогою селектора #.",

    content: [
      {
        type: "heading",
        text: "Вибір елемента за унікальним id у CSS",
      },

      {
        type: "paragraph",
        text: "Окрім класів, елементи можна вибирати за допомогою атрибута id. На відміну від class, значення id має бути унікальним на всій HTML-сторінці.",
      },

      {
        type: "paragraph",
        text: "Це означає, що якщо один елемент уже має певний id, то жоден інший елемент не повинен використовувати таке саме значення.",
      },

      {
        type: "paragraph",
        text: "Унікальний ідентифікатор задається за допомогою атрибута id:",
      },

      {
        type: "code",
        language: "html",
        code: `<div id="block1">
  <p>text</p>
  <p>text</p>
</div>

<div id="block2">
  <p>text</p>
  <p>text</p>
</div>`,
      },

      {
        type: "paragraph",
        text: "Щоб звернутися до елемента за його id у CSS, використовується символ # перед назвою ідентифікатора:",
      },

      {
        type: "code",
        language: "css",
        code: `#block1 {
  color: red;
}

#block2 {
  color: green;
}`,
      },

      {
        type: "note",
        text: "Використовуйте id для унікальних елементів сторінки (наприклад, header, footer або main). Якщо однаковий стиль потрібно застосувати до кількох елементів — використовуйте class.",
      },

      {
        type: "warning",
        text: "Не використовуйте однаковий id для кількох елементів. Це порушує правила HTML і може призвести до некоректної роботи CSS та JavaScript.",
      },

      {
        type: "heading",
        text: "Практичне завдання",
      },

      {
        type: "task",
        text: [
          "№1",
          "",
          "Дано наступний HTML-код:",
          "",
          `<div id="elem1">
  <h2>Title</h2>
  <p>
    text
  </p>
  <p>
    text
  </p>
</div>

<div id="elem2">
  <h2>Title</h2>
  <p>
    text
  </p>
  <p>
    text
  </p>
</div>

<div id="elem3">
  <h2>Title</h2>
  <p>
    text
  </p>
  <p>
    text
  </p>
</div>`,
          "",
          "Зафарбуйте:",
          "• вміст блоку elem1 — у червоний колір;",
          "• вміст блоку elem2 — у зелений колір;",
          "• вміст блоку elem3 — у блакитний колір.",
        ],
      },

      {
        type: "hint",
        text: "Для вибору елемента за id використовуйте символ #. Наприклад: #elem1.",
      },

      {
        type: "answer",
        text: `#elem1 {
  color: red;
}

#elem2 {
  color: green;
}

#elem3 {
  color: deepskyblue;
}`,
      },
    ],
  },
  {
    id: "css-id-and-class-selector",

    title: "Селектор за id і CSS-класи",

    description:
      "Дізнаємося, як одночасно використовувати id і class для одного HTML-елемента та поєднувати їхні стилі.",

    content: [
      {
        type: "heading",
        text: "Селектор за id і CSS-класи",
      },

      {
        type: "paragraph",
        text: "Одному HTML-елементу можна одночасно задати і атрибут id, і атрибут class. Це дозволяє комбінувати стилі: частину оформлення задавати через id, а частину — через клас.",
      },

      {
        type: "paragraph",
        text: "Наприклад, елемент може мати унікальний id і водночас належати до певного класу:",
      },

      {
        type: "code",
        language: "html",
        code: `<div id="block" class="large">
  <p>text</p>
  <p>text</p>
</div>`,
      },

      {
        type: "paragraph",
        text: "Тепер можна окремо описати стилі для id і для класу:",
      },

      {
        type: "code",
        language: "css",
        code: `#block {
  color: red;
  font-family: Arial;
}

.large {
  font-size: 30px;
}`,
      },

      {
        type: "note",
        text: "Стилі з id і class застосовуються одночасно. Це дозволяє зробити оформлення більш гнучким.",
      },

      {
        type: "heading",
        text: "Практичне завдання",
      },

      {
        type: "task",
        text: [
          "№1",
          "",
          "Стилизуйте блоки за допомогою id і класу.",
          "",
          "HTML:",
          "",
          `<div id="block" class="text">
  <p>text</p>
  <p>text</p>
  <p>text</p>
</div>

<div class="text">
  <p>text</p>
  <p>text</p>
  <p>text</p>
</div>`,
          "",
          "Зробіть так, щоб:",
          "• обидва блоки з класом text мали розмір шрифту 20px;",
          "• лише блок з id block мав червоний колір тексту.",
        ],
      },

      {
        type: "hint",
        text: "Створіть окремий селектор для класу .text і окремий селектор для #block.",
      },

      {
        type: "answer",
        text: `.text {
  font-size: 20px;
}

#block {
  color: red;
}`,
      },
    ],
  },
  {
    id: "css-using-id-selectors",

    title: "Використання id у CSS",

    description:
      "Навчимося поєднувати селектори id із селекторами тегів, класів і селекторами нащадків.",

    content: [
      {
        type: "heading",
        text: "Використання id у CSS",
      },

      {
        type: "paragraph",
        text: "До селектора id можна застосовувати всі комбінації селекторів, які ви вже вивчили: селектори тегів, класів, нащадків та їх поєднання.",
      },

      {
        type: "heading",
        text: "Приклад 1",
      },

      {
        type: "paragraph",
        text: "Нехай маємо наступний HTML-код:",
      },

      {
        type: "code",
        language: "html",
        code: `<div id="block">
  <h2>Title</h2>
  <p>text</p>
  <p>text</p>
</div>`,
      },

      {
        type: "paragraph",
        text: 'Виберемо всі заголовки h2, які знаходяться всередині елемента з id="block":',
      },

      {
        type: "code",
        language: "css",
        code: `#block h2 {
  color: red;
}`,
      },

      {
        type: "paragraph",
        text: "Тепер виберемо всі абзаци p усередині цього ж елемента:",
      },

      {
        type: "code",
        language: "css",
        code: `#block p {
  color: green;
}`,
      },

      {
        type: "heading",
        text: "Приклад 2",
      },

      {
        type: "paragraph",
        text: "Тепер нехай HTML виглядає так:",
      },

      {
        type: "code",
        language: "html",
        code: `<div id="block">
  <h2 class="header">Title</h2>
  <p>text</p>
  <p>text</p>

  <h3 class="header">Title</h3>
  <p>text</p>
  <p>text</p>
</div>`,
      },

      {
        type: "paragraph",
        text: 'Виберемо всі елементи з класом header, що знаходяться всередині елемента з id="block":',
      },

      {
        type: "code",
        language: "css",
        code: `#block .header {
  color: red;
}`,
      },

      {
        type: "paragraph",
        text: "А тепер виберемо тільки заголовки h2 з класом header усередині цього елемента:",
      },

      {
        type: "code",
        language: "css",
        code: `#block h2.header {
  color: red;
}`,
      },

      {
        type: "note",
        text: "Селектор id можна комбінувати з будь-якими іншими селекторами: тегів, класів, нащадків і дочірніх елементів.",
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
          'Напишіть селектор, який вибере всі h2, що знаходяться всередині елемента з id="elem".',
          "",
          `<div id="elem">
  <h2>Choose</h2>
  <p>---</p>

  <h2>Choose</h2>
  <p>---</p>
</div>

<h2>Do not +++</h2>
<p>---</p>`,
          "",
          "№2",
          "",
          'Напишіть селектор, який вибере всі елементи з класом text, що знаходяться всередині елемента з id="elem".',
          "",
          `<div id="elem">
  <p class="text">+++</p>
  <p class="text">+++</p>

  <ul>
    <li class="text">+++</li>
    <li class="text">+++</li>
    <li class="text">+++</li>
    <li>---</li>
    <li>---</li>
  </ul>
</div>

<p class="text">---</p>`,
          "",
          "№3",
          "",
          'Напишіть селектор, який вибере всі абзаци p з класом text, що знаходяться всередині елемента з id="elem".',
          "",
          `<div id="elem">
  <p class="text">+++</p>
  <p class="text">+++</p>

  <ul>
    <li class="text">---</li>
    <li class="text">---</li>
    <li class="text">---</li>
    <li>---</li>
    <li>---</li>
  </ul>
</div>

<p class="text">---</p>`,
          "",
          "№4",
          "",
          'Напишіть селектор, який вибере всі li з класом text, що знаходяться всередині елемента з id="elem".',
          "",
          `<div id="elem">
  <p class="text">---</p>
  <p class="text">---</p>

  <ul>
    <li class="text">+++</li>
    <li class="text">+++</li>
    <li class="text">+++</li>
    <li>---</li>
    <li>---</li>
  </ul>
</div>

<p class="text">---</p>`,
        ],
      },

      {
        type: "hint",
        text: "Спочатку вкажіть селектор id (#elem), а після нього через пробіл — тег або клас, який потрібно знайти всередині цього елемента.",
      },

      {
        type: "answer",
        text: `№1

#elem h2

№2

#elem .text

№3

#elem p.text

№4

#elem li.text`,
      },
    ],
  },
  {
    id: "css-selector-multiple-classes",

    title: "Вибір елемента за кількома класами в CSS",

    description:
      "Навчимося вибирати лише ті елементи, які одночасно мають декілька CSS-класів.",

    content: [
      {
        type: "heading",
        text: "Вибір елемента за кількома класами в CSS",
      },

      {
        type: "paragraph",
        text: "У CSS можна вибирати елементи, які одночасно мають кілька класів. При цьому будуть вибрані лише ті елементи, у яких присутні всі зазначені класи.",
      },

      {
        type: "paragraph",
        text: "Розглянемо приклад:",
      },

      {
        type: "code",
        language: "html",
        code: `<p class="eee">
  This is a paragraph with text.
</p>

<p class="zzz">
  This is a paragraph with text.
</p>

<p class="eee zzz">
  This is a paragraph with text.
</p>`,
      },

      {
        type: "paragraph",
        text: "Перший абзац має клас eee, другий — клас zzz, а третій — одночасно обидва класи.",
      },

      {
        type: "paragraph",
        text: "Щоб вибрати лише третій абзац, потрібно записати класи разом, без пробілів:",
      },

      {
        type: "code",
        language: "css",
        code: `.eee.zzz {
  color: red;
}`,
      },

      {
        type: "note",
        text: "Між назвами класів не ставиться пробіл. Якщо написати `.eee .zzz`, це вже буде селектор нащадків, а не елемент із двома класами.",
      },

      {
        type: "warning",
        text: "Селектор `.eee.zzz` вибирає один елемент, який має обидва класи. Селектор `.eee .zzz` вибирає елементи з класом zzz, що знаходяться всередині елемента з класом eee.",
      },

      {
        type: "heading",
        text: "Практичне завдання",
      },

      {
        type: "task",
        text: [
          "№1",
          "",
          "Виберіть елемент, який одночасно має класи eee, zzz і ccc.",
          "",
          "HTML:",
          "",
          `<p class="eee">
  This is a paragraph with text.
</p>

<p class="zzz">
  This is a paragraph with text.
</p>

<p class="ccc">
  This is a paragraph with text.
</p>

<p class="eee zzz ccc">
  This is a paragraph with text.
</p>`,
        ],
      },

      {
        type: "hint",
        text: "Перерахуйте всі класи підряд через крапку без пробілів.",
      },

      {
        type: "answer",
        text: `.eee.zzz.ccc {
  color: red;
}`,
      },
    ],
  },
  {
    id: "multiple-selectors-css",
    title: "Кілька селекторів разом у CSS",
    description:
      "Як вибирати елементи, які одночасно мають декілька класів або id.",
    content: [
      {
        type: "heading",
        text: "Кілька селекторів разом у CSS",
      },
      {
        type: "paragraph",
        text: "Щоб вибрати елемент, який одночасно відповідає кільком селекторам, потрібно записати ці селектори разом без пробілів.",
      },
      {
        type: "example",
        title: "Приклад: два класи одночасно",
        text: "Селектор .bbb.zzz вибирає тільки ті елементи, які мають обидва класи.",
      },
      {
        type: "code",
        language: "css",
        code: `.bbb.zzz {
  color: red;
}`,
      },
      {
        type: "code",
        language: "html",
        code: `<p class="bbb zzz">
  Текст
</p>`,
      },
      {
        type: "note",
        text: "💡 Якщо між селекторами поставити пробіл, це буде вже селектор потомків.",
      },
      {
        type: "example",
        title: "Тег + кілька класів",
        text: "Можна вибрати конкретний тег з декількома класами.",
      },
      {
        type: "code",
        language: "css",
        code: `h2.bbb.zzz {
  color: red;
}`,
      },
      {
        type: "task",
        text: [
          "Що вибирає селектор .bbb.zzz?",
          "Що вибирає селектор h2.bbb.zzz?",
          "Що вибирає селектор #elem.bbb?",
          "Створіть HTML для селектора #elem.bbb.zzz",
          "Створіть HTML для селектора h2#elem.bbb",
        ],
      },
      {
        type: "hint",
        text: "Селектори без пробілів означають, що всі умови повинні виконуватися одночасно.",
      },
      {
        type: "answer",
        text: `1. .bbb.zzz вибирає елемент з двома класами bbb і zzz.

2. h2.bbb.zzz вибирає тільки заголовки h2 з двома класами.

3. #elem.bbb вибирає елемент з id elem і класом bbb.

4. #elem.bbb.zzz вибирає елемент з id elem і двома класами.

5. h2#elem.bbb вибирає заголовок h2 з id elem і класом bbb.`,
      },
    ],
  },
  {
    id: "css-selector-mistakes-multiple",
    title: "Помилка при використанні кількох CSS селекторів",
    description:
      "Розбираємо різницю між селекторами без пробілу та селекторами з пробілом у CSS.",
    content: [
      {
        type: "heading",
        text: "Помилка при використанні кількох CSS селекторів",
      },
      {
        type: "paragraph",
        text: "Пам'ятайте про типову помилку новачків: селектор .bbb.zzz і селектор .bbb .zzz виконують різні дії.",
      },
      {
        type: "paragraph",
        text: "Селектор .bbb.zzz вибирає один елемент, який одночасно має два класи: bbb і zzz.",
      },
      {
        type: "paragraph",
        text: "Селектор .bbb .zzz вибирає елемент з класом zzz, який знаходиться всередині елемента з класом bbb.",
      },

      {
        type: "example",
        title: "Без пробілу",
        text: "Елемент повинен мати всі зазначені класи одночасно.",
      },
      {
        type: "code",
        language: "css",
        code: `.bbb.zzz {
  color: red;
}`,
      },
      {
        type: "code",
        language: "html",
        code: `<p class="bbb zzz">
  Текст
</p>`,
      },

      {
        type: "example",
        title: "З пробілом",
        text: "Вибирається елемент, який знаходиться всередині іншого елемента.",
      },
      {
        type: "code",
        language: "css",
        code: `.bbb .zzz {
  color: red;
}`,
      },
      {
        type: "code",
        language: "html",
        code: `<div class="bbb">
  <p class="zzz">
    Текст
  </p>
</div>`,
      },

      {
        type: "task",
        text: [
          "1. Що вибирає селектор h2.zzz?",
          "2. Що вибирає селектор h2 .zzz?",
          "3. Що вибирає селектор .bbb.zzz?",
          "4. Що вибирає селектор .bbb .zzz?",
          "5. Що вибирає селектор .bbb.zzz.xxx?",
          "6. Що вибирає селектор .bbb .zzz.xxx?",
          "7. Що вибирає селектор .bbb.zzz .xxx?",
          "8. Що вибирає селектор .bbb .zzz .xxx?",
          "9. Що вибирає селектор #elem.bbb?",
          "10. Що вибирає селектор #elem .bbb?",
        ],
      },

      {
        type: "hint",
        text: "💡 Підказка: якщо між селекторами немає пробілу — всі умови повинні бути у одного елемента. Якщо є пробіл — шукаємо вкладений елемент.",
      },

      {
        type: "answer",
        text: `1. h2.zzz — вибирає тільки заголовки h2, які мають клас zzz.

Приклад:
<h2 class="zzz">Заголовок</h2>


2. h2 .zzz — вибирає елементи з класом zzz всередині h2.

Приклад:
<h2>
  <span class="zzz">Текст</span>
</h2>


3. .bbb.zzz — вибирає елемент, який одночасно має класи bbb і zzz.

Приклад:
<div class="bbb zzz">Блок</div>


4. .bbb .zzz — вибирає елементи zzz всередині елемента bbb.

Приклад:
<div class="bbb">
  <p class="zzz">Текст</p>
</div>


5. .bbb.zzz.xxx — вибирає елемент з трьома класами одночасно.

Приклад:
<div class="bbb zzz xxx">Текст</div>


6. .bbb .zzz.xxx — вибирає елемент з класами zzz і xxx всередині bbb.

Приклад:
<div class="bbb">
  <p class="zzz xxx">Текст</p>
</div>


7. .bbb.zzz .xxx — вибирає елемент xxx всередині елемента, який має класи bbb і zzz.

Приклад:
<div class="bbb zzz">
  <span class="xxx">Текст</span>
</div>


8. .bbb .zzz .xxx — вибирає xxx всередині zzz, яке знаходиться всередині bbb.

Приклад:
<div class="bbb">
  <div class="zzz">
    <span class="xxx">Текст</span>
  </div>
</div>


9. #elem.bbb — вибирає елемент з id elem і класом bbb.

Приклад:
<div id="elem" class="bbb">Текст</div>


10. #elem .bbb — вибирає елемент з класом bbb всередині елемента з id elem.

Приклад:
<div id="elem">
  <p class="bbb">Текст</p>
</div>`,
      },
    ],
  },
  {
    id: "css-grouping-complex-selectors",
    title: "Групування складних селекторів у CSS",
    description:
      "Навчимося скорочувати CSS-код за допомогою групування складних селекторів.",
    content: [
      {
        type: "heading",
        text: "Групування складних селекторів у CSS",
      },

      {
        type: "paragraph",
        text: "Іноді декілька селекторів виконують однакову дію. У такому випадку їх можна об'єднати через кому, щоб не дублювати CSS-код.",
      },

      {
        type: "example",
        title: "Приклад",
        text: "Два селектори задають однаковий колір заголовкам h2 та h3.",
      },

      {
        type: "code",
        language: "css",
        code: `.block h2 {
  color: red;
}

.block h3 {
  color: red;
}`,
      },

      {
        type: "paragraph",
        text: "Цей код можна скоротити за допомогою групування селекторів:",
      },

      {
        type: "code",
        language: "css",
        code: `.block h2,
.block h3 {
  color: red;
}`,
      },

      {
        type: "paragraph",
        text: "Кома означає: застосувати ці самі стилі до всіх перелічених селекторів.",
      },

      {
        type: "example",
        title: "Що відбувається",
        text: "Якщо селектори мають однакові властивості — їх можна об'єднати. Якщо властивості різні, спільні залишають у групі, а відмінні записують окремо.",
      },

      {
        type: "task",
        text: [
          "№1 ⊗mkPmSlCSG",
          "Спростіть код, використовуючи групування селекторів:",
          "",
          "#block h1 {",
          "  text-align: center;",
          "}",
          "",
          "#block h2 {",
          "  text-align: center;",
          "}",
          "",
          "№2 ⊗mkPmSlCSG",
          "Спростіть код, використовуючи групування селекторів:",
          "",
          "#block h1 {",
          "  text-align: center;",
          "  font-size: 30px;",
          "}",
          "",
          "#block h2 {",
          "  text-align: center;",
          "  font-size: 20px;",
          "}",
        ],
      },

      {
        type: "hint",
        text: "💡 Підказка: знайдіть однакові CSS-властивості. Їх можна винести в один спільний селектор через кому.",
      },

      {
        type: "answer",
        text: `✅ Відповідь №1:

Було:

#block h1 {
  text-align: center;
}

#block h2 {
  text-align: center;
}


Стало:

#block h1,
#block h2 {
  text-align: center;
}



✅ Відповідь №2:

Спочатку об'єднуємо спільну властивість text-align:

#block h1,
#block h2 {
  text-align: center;
}

#block h1 {
  font-size: 30px;
}

#block h2 {
  font-size: 20px;
}

`,
      },
    ],
  },
  {
    id: "css-grouping-complex-selectors-error",
    title: "Помилка при групуванні складних CSS селекторів",
    description:
      "Розберемо типову помилку під час групування складних селекторів та навчимося правильно об'єднувати CSS правила.",
    content: [
      {
        type: "heading",
        text: "Помилка при групуванні складних CSS селекторів",
      },

      {
        type: "paragraph",
        text: "Під час групування селекторів через кому кожна частина повинна бути повноцінним селектором.",
      },

      {
        type: "paragraph",
        text: "Часто новачки помилково думають, що селектор перед комою продовжується після неї. Але кожен селектор після коми починається окремо.",
      },

      {
        type: "example",
        title: "Правильне групування",
        text: "Кожен селектор повинен повністю містити шлях до елемента.",
      },

      {
        type: "code",
        language: "css",
        code: `#block h2,
#block h3 {
  color: red;
}`,
      },

      {
        type: "example",
        title: "Неправильне групування",
        text: "У цьому випадку #block застосовується тільки до h2.",
      },

      {
        type: "code",
        language: "css",
        code: `#block h2,
h3 {
  color: red;
}`,
      },

      {
        type: "paragraph",
        text: "Такий код фактично означає:",
      },

      {
        type: "code",
        language: "css",
        code: `#block h2 {
  color: red;
}

h3 {
  color: red;
}`,
      },

      {
        type: "note",
        text: "💡 Після коми CSS починає читати новий незалежний селектор.",
      },

      {
        type: "task",
        text: [
          "№1 ⊗mkPmSlCSGM",
          "Спростіть код, використовуючи групування селекторів:",
          "",
          "#block h1 {",
          "  text-align: center;",
          "}",
          "#block h2 {",
          "  text-align: center;",
          "  color: blue;",
          "}",
          "#block h3 {",
          "  text-align: center;",
          "  font-size: 16px;",
          "  color: red;",
          "}",
          "",
          "№2 ⊗mkPmSlCSGM",
          "Спростіть код:",
          "",
          "#block h1.eee {",
          "  text-align: center;",
          "  font-size: 30px;",
          "}",
          "#block h2.zzz {",
          "  text-align: center;",
          "  font-size: 20px;",
          "}",
          "",
          "№3 ⊗mkPmSlCSGM",
          "Спростіть код:",
          "",
          ".xxx .kkk {",
          "  text-align: center;",
          "}",
          ".eee h2.zzz {",
          "  text-align: center;",
          "}",
          "#eee h2 {",
          "  text-align: center;",
          "}",
          "",
          "№4 ⊗mkPmSlCSGM",
          "Спростіть код:",
          "",
          ".eee h2.zzz {",
          "  text-align: center;",
          "}",
          ".xxx {",
          "  text-align: center;",
          "}",
        ],
      },

      {
        type: "hint",
        text: "💡 Підказка: шукайте однакові властивості. Селектори можна об'єднати через кому тільки повністю.",
      },

      {
        type: "answer",
        text: `✅ Відповідь №1:

#block h1,
#block h2,
#block h3 {
  text-align: center;
}

#block h2 {
  color: blue;
}

#block h3 {
  font-size: 16px;
  color: red;
}



✅ Відповідь №2:

#block h1.eee,
#block h2.zzz {
  text-align: center;
}

#block h1.eee {
  font-size: 30px;
}

#block h2.zzz {
  font-size: 20px;
}



✅ Відповідь №3:

.xxx .kkk,
.eee h2.zzz,
#eee h2 {
  text-align: center;
}



✅ Відповідь №4:

.eee h2.zzz,
.xxx {
  text-align: center;
}`,
      },
    ],
  },
  {
    id: "css-selector-combinations-practice",
    title: "Практика на комбінації CSS селекторів",
    description:
      "Практичні завдання для закріплення роботи із селекторами тегів, класів, id та групуванням селекторів.",
    content: [
      {
        type: "heading",
        text: "Практика на комбінації CSS селекторів",
      },

      {
        type: "paragraph",
        text: "У цих завданнях потрібно самостійно написати CSS селектори, які вибирають потрібні HTML елементи.",
      },

      {
        type: "task",
        text: [
          "№1 ⊗mkPmSlSCP",
          "Напишіть селектор, який вибере абзаци p, розташовані всередині div.",
          "",
          "№2 ⊗mkPmSlSCP",
          "Напишіть селектор, який вибере всі h2, розташовані всередині div.",
          "",
          "№3 ⊗mkPmSlSCP",
          "Напишіть селектор, який вибере всі p з елемента з id block.",
          "",
          "№4 ⊗mkPmSlSCP",
          "Напишіть селектор, який вибере всі h2 з елемента з id block.",
          "",
          "№5 ⊗mkPmSlSCP",
          "Напишіть селектор, який вибере всі елементи з класом bbb.",
          "",
          "№6 ⊗mkPmSlSCP",
          "Напишіть селектор, який вибере всі елементи з класом bbb всередині id block.",
          "",
          "№7 ⊗mkPmSlSCP",
          "Напишіть селектор, який вибере всі абзаци p з класом bbb.",
          "",
          "№8 ⊗mkPmSlSCP",
          "Напишіть селектор, який вибере всі h2 з класом bbb.",
          "",
          "№9 ⊗mkPmSlSCP",
          "Напишіть селектор, який вибере всі p.bbb всередині #block.",
          "",
          "№10 ⊗mkPmSlSCP",
          "Згрупуйте селектори та виберіть всі елементи з класами bbb і xxx.",
          "",
          "№11 ⊗mkPmSlSCP",
          "Виберіть всі p.bbb і всі h2.xxx одночасно.",
          "",
          "№12 ⊗mkPmSlSCP",
          "Виберіть p.bbb та p.xxx всередині #block.",
          "",
          "№13 ⊗mkPmSlSCP",
          "Напишіть селектор, який вибере всі елементи з класом fff.",
          "",
          "№14 ⊗mkPmSlSCP",
          "Напишіть селектор, який вибере всі p всередині елемента з класом fff.",
          "",
          "№15 ⊗mkPmSlSCP",
          "Напишіть селектор, який вибере всі p з класом fff.",
          "",
          "№16 ⊗mkPmSlSCP",
          "Напишіть селектор, який вибере всі елементи з класом bbb всередині класу fff.",
          "",
          "№17 ⊗mkPmSlSCP",
          "Напишіть селектор, який вибере всі h2.bbb всередині .fff.",
        ],
      },

      {
        type: "hint",
        text: "💡 Підказка:\n\nСелектор потомків:\n.block p — вибирає p всередині .block.\n\nID:\n#block p — вибирає p всередині елемента з id block.\n\nКлас:\n.bbb — всі елементи з класом bbb.\n\nТег + клас:\np.bbb — тільки абзаци з класом bbb.\n\nГрупування:\np.bbb, h2.xxx — вибирає обидва типи елементів.",
      },

      {
        type: "answer",
        text: `✅ Відповіді:

1.
div p


2.
div h2


3.
#block p


4.
#block h2


5.
.bbb


6.
#block .bbb


7.
p.bbb


8.
h2.bbb


9.
#block p.bbb


10.
.bbb, .xxx


11.
p.bbb, h2.xxx


12.
#block p.bbb,
#block p.xxx


13.
.fff


14.
.fff p


15.
p.fff


16.
.fff .bbb


17.
.fff h2.bbb`,
      },
    ],
  },
  {
    id: "css-selector-priority",
    title: "Приоритет селекторов CSS",
    description:
      "Разберем порядок применения CSS правил и узнаем, какое свойство имеет больший приоритет.",
    content: [
      {
        type: "heading",
        text: "Приоритет CSS правил",
      },

      {
        type: "paragraph",
        text: "Если один и тот же элемент получает несколько одинаковых CSS свойств, браузер применяет правило, которое находится ниже в CSS коде.",
      },

      {
        type: "code",
        language: "css",
        code: `p {
  color: red;
}

p {
  color: green;
}`,
      },

      {
        type: "paragraph",
        text: "В данном примере первый стиль задает абзацам красный цвет, но второй стиль находится ниже и переопределяет первый. Поэтому текст будет зеленым.",
      },

      {
        type: "example",
        title: "Пример результата",
        text: "Последнее CSS правило с таким же приоритетом заменяет предыдущее.",
      },

      {
        type: "heading",
        text: "Практическое задание",
      },

      {
        type: "task",
        text: [
          "Расскажите, какого размера будут заголовки после выполнения следующего кода:",
          `
<h2>text</h2>

h2 {
  font-size: 20px;
}

h2 {
  font-size: 30px;
}
        `,
        ],
      },

      {
        type: "hint",
        text: "Если селекторы имеют одинаковый приоритет, побеждает правило, которое написано ниже.",
      },

      {
        type: "answer",
        text: "Размер заголовка будет 30px, потому что второе правило h2 находится ниже и переопределяет первое.",
      },
    ],
  },
  {
    id: "css-property-conflict-note",

    title: "Зауваження до конфлікту властивостей CSS",

    description:
      "Розберемо випадок, коли CSS-селектори мають різні властивості та як браузер застосовує ці стилі.",

    content: [
      {
        type: "paragraph",
        text: "У попередньому уроці ми розглядали конфлікт CSS-властивостей. Він виникає тоді, коли два селектори задають однакову властивість для одного елемента.",
      },

      {
        type: "heading",
        text: "Якщо властивості різні",
      },

      {
        type: "paragraph",
        text: "Якщо селектори задають різні CSS-властивості, конфлікту немає. Браузер застосує всі властивості з обох правил.",
      },

      {
        type: "code",
        language: "html",
        code: `<h2>text</h2>`,
      },

      {
        type: "code",
        language: "css",
        code: `h2 {
  font-size: 20px;
  color: blue;
}

h2 {
  font-style: italic;
  color: red;
}`,
      },

      {
        type: "example",
        title: "Що відбудеться?",
        text: "До заголовка застосуються всі різні властивості. Розмір шрифту буде 20px, текст стане курсивним, а колір буде red, тому що друга властивість color перезаписала першу.",
      },

      {
        type: "note",
        text: "Якщо два CSS-правила мають однакову властивість, перемагає правило, яке знаходиться нижче в коді.",
      },

      {
        type: "task",
        text: [
          "Розкажіть, які властивості застосуються до заголовка:",
          "",
          "<h2>text</h2>",
          "",
          "h2 {",
          "  font-size: 20px;",
          "  color: blue;",
          "}",
          "",
          "h2 {",
          "  font-style: italic;",
          "  color: red;",
          "}",
        ],
      },

      {
        type: "hint",
        text: "Порівняйте властивості у двох селекторах. Однакові властивості можуть бути перезаписані, а різні — додаються.",
      },

      {
        type: "answer",
        text: "Застосуються такі властивості: font-size: 20px, font-style: italic, color: red. Колір буде червоним, тому що другий селектор перезаписав попередній color.",
      },
    ],
  },
  {
    id: "css-specificity-rules",

    title: "Правила специфічності в CSS",

    description:
      "Розберемо правила специфічності CSS-селекторів та дізнаємося, який стиль переможе при конфлікті.",

    content: [
      {
        type: "heading",
        text: "Що таке специфічність CSS",
      },

      {
        type: "paragraph",
        text: "Якщо одному елементу відповідає декілька CSS-селекторів, а властивості конфліктують, браузер вибирає більш специфічний (точніший) селектор.",
      },

      {
        type: "paragraph",
        text: "Чим точніше ми описали елемент, тим більший пріоритет має цей селектор.",
      },

      {
        type: "heading",
        text: "Правило №1. Клас перемагає селектор тега",
      },

      {
        type: "code",
        language: "html",
        code: `<p class="text">
  text
</p>`,
      },

      {
        type: "code",
        language: "css",
        code: `p {
  color: red;
}

.text {
  color: green;
}`,
      },

      {
        type: "example",
        title: "Що отримаємо",
        text: "Текст буде зеленим, тому що селектор класу має більшу специфічність, ніж селектор тега.",
      },

      {
        type: "hint",
        text: "Клас .text завжди має більший пріоритет, ніж звичайний селектор p, div, h1 тощо.",
      },

      {
        type: "heading",
        text: "Правило №2. ID перемагає клас",
      },

      {
        type: "code",
        language: "html",
        code: `<p id="elem" class="text">
  text
</p>`,
      },

      {
        type: "code",
        language: "css",
        code: `.text {
  color: red;
}

#elem {
  color: green;
}`,
      },

      {
        type: "example",
        title: "Що отримаємо",
        text: "Текст буде зеленим, тому що селектор з id має більший пріоритет, ніж селектор класу.",
      },

      {
        type: "hint",
        text: "ID використовується для унікального елемента і має більшу специфічність, ніж клас.",
      },

      {
        type: "heading",
        text: "Правило №3. При однакових умовах перемагає точніший селектор",
      },

      {
        type: "code",
        language: "html",
        code: `<div>
  <p>
    text
  </p>
</div>`,
      },

      {
        type: "code",
        language: "css",
        code: `p {
  color: red;
}

div p {
  color: green;
}`,
      },

      {
        type: "example",
        title: "Що отримаємо",
        text: "Текст буде зеленим, тому що div p точніше описує елемент, ніж просто p.",
      },

      {
        type: "heading",
        text: "Специфічність селекторів з класами",
      },

      {
        type: "code",
        language: "html",
        code: `<div class="block">
  <p class="text">
    text
  </p>
</div>`,
      },

      {
        type: "code",
        language: "css",
        code: `.text {
  color: red;
}

.block .text {
  color: green;
}`,
      },

      {
        type: "example",
        title: "Що отримаємо",
        text: "Текст буде зеленим, тому що .block .text має більше частин у селекторі.",
      },

      {
        type: "note",
        text: "При підрахунку специфічності селектори тегів мають найменший пріоритет. Класи сильніші за теги, а id сильніший за класи.",
      },

      {
        type: "heading",
        text: "Практичні завдання",
      },

      {
        type: "task",
        text: [
          "1. Визначте, який колір буде у тексту:",
          "",
          '<p class="text">text</p>',
          "",
          "p {",
          "  color: red;",
          "}",
          "",
          ".text {",
          "  color: green;",
          "}",
        ],
      },

      {
        type: "task",
        text: [
          "2. Визначте, який колір буде у тексту:",
          "",
          '<p id="elem" class="text">text</p>',
          "",
          ".text {",
          "  color: red;",
          "}",
          "",
          "#elem {",
          "  color: green;",
          "}",
        ],
      },

      {
        type: "task",
        text: [
          "3. Визначте, який колір буде у тексту:",
          "",
          "<div>",
          "  <p>text</p>",
          "</div>",
          "",
          "p {",
          "  color: red;",
          "}",
          "",
          "div p {",
          "  color: green;",
          "}",
        ],
      },

      {
        type: "hint",
        text: "Порівнюйте селектори за силою: тег → клас → id. Якщо сила однакова — перемагає той, що написаний нижче.",
      },

      {
        type: "answer",
        text: "1) green, тому що клас сильніший за тег. 2) green, тому що id сильніший за клас. 3) green, тому що div p точніший за p.",
      },
    ],
  },
  {
    id: "css-descendant-selector-priority",

    title: "Пріоритет селекторів потомків у CSS",

    description:
      "Розберемо, чому стиль елемента може мати більший пріоритет, ніж стиль його батьківського елемента.",

    content: [
      {
        type: "heading",
        text: "Як працює пріоритет селекторів потомків",
      },

      {
        type: "paragraph",
        text: "У попередніх уроках ми розглядали випадки, коли декілька селекторів вибирали один і той самий елемент.",
      },

      {
        type: "paragraph",
        text: "Але може бути ситуація, коли один селектор задає стиль батьківському елементу, а інший — самому потомку.",
      },

      {
        type: "paragraph",
        text: "Якщо потомку задана власна властивість, вона має більший пріоритет, ніж успадкована властивість від батька.",
      },

      {
        type: "heading",
        text: "Приклад №1. Селектор потомка перемагає клас батька",
      },

      {
        type: "code",
        language: "html",
        code: `<div class="block">
  <p>
    text
  </p>
</div>`,
      },

      {
        type: "code",
        language: "css",
        code: `.block {
  color: red;
}

p {
  color: green;
}`,
      },

      {
        type: "example",
        title: "Що отримаємо",
        text: "Текст у абзаці буде зеленим, тому що для самого p заданий власний колір. Власна властивість потомка має більший пріоритет, ніж успадкована властивість батька.",
      },

      {
        type: "hint",
        text: "Якщо батько передає властивість через спадкування, але потомок має свою властивість — використовується стиль потомка.",
      },

      {
        type: "heading",
        text: "Приклад №2. Селектор потомка перемагає ID батька",
      },

      {
        type: "code",
        language: "html",
        code: `<div id="block">
  <p class="text">
    text
  </p>
</div>`,
      },

      {
        type: "code",
        language: "css",
        code: `#block {
  color: red;
}

.text {
  color: green;
}`,
      },

      {
        type: "example",
        title: "Що отримаємо",
        text: "Текст буде зеленим, тому що клас .text задає колір безпосередньо самому елементу p, а колір від #block лише успадковується.",
      },

      {
        type: "note",
        text: "Спадкування CSS працює тільки тоді, коли у самого елемента немає власного значення властивості.",
      },

      {
        type: "heading",
        text: "Важливе правило",
      },

      {
        type: "list",
        items: [
          "Власний стиль елемента сильніший за успадкований стиль батька.",
          "Селектор потомка може перемогти стиль батьківського елемента.",
          "Навіть ID батька не впливає, якщо потомок має власне значення властивості.",
        ],
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
          "Визначте колір тексту:",
          "",
          '<div class="block">',
          "  <p>text</p>",
          "</div>",
          "",
          ".block {",
          "  color: red;",
          "}",
          "",
          "p {",
          "  color: green;",
          "}",
        ],
      },

      {
        type: "task",
        text: [
          "№2",
          "",
          "Визначте колір тексту:",
          "",
          '<div id="block">',
          '  <p class="text">text</p>',
          "</div>",
          "",
          "#block {",
          "  color: red;",
          "}",
          "",
          ".text {",
          "  color: green;",
          "}",
        ],
      },

      {
        type: "hint",
        text: "Не плутайте специфічність селектора зі спадкуванням. Якщо властивість прийшла від батька — її можна легко замінити власним стилем потомка.",
      },

      {
        type: "answer",
        text: "№1: текст буде зеленим, тому що p має власний color. №2: текст буде зеленим, тому що .text задає колір самому елементу, а #block лише передає колір через спадкування.",
      },
    ],
  },
  {
    id: "css-adjacent-selector",

    title: "Сусідній селектор у CSS",

    description:
      "Розберемо сусідній селектор +, який дозволяє вибирати елементи, що знаходяться безпосередньо після іншого елемента.",

    content: [
      {
        type: "heading",
        text: "Що таке сусідній селектор +",
      },

      {
        type: "paragraph",
        text: "Сусідній селектор + дозволяє вибрати елемент тільки тоді, коли він знаходиться одразу після вказаного елемента.",
      },

      {
        type: "paragraph",
        text: "Вибирається тільки один безпосередній сусід знизу. Інші елементи після нього не вибираються.",
      },

      {
        type: "heading",
        text: "Приклад №1. Сусідній тег",
      },

      {
        type: "code",
        language: "html",
        code: `<h2>
  text
</h2>

<p>
  +
</p>

<p>
  -
</p>

<p>
  -
</p>`,
      },

      {
        type: "code",
        language: "css",
        code: `h2 + p {
  color: red;
}`,
      },

      {
        type: "example",
        title: "Що отримаємо",
        text: "Червоним стане тільки перший p, тому що він знаходиться безпосередньо після h2.",
      },

      {
        type: "hint",
        text: "Символ + читається як: вибрати наступний сусідній елемент.",
      },

      {
        type: "heading",
        text: "Приклад №2. Сусід після класу",
      },

      {
        type: "code",
        language: "html",
        code: `<p class="test">
  text
</p>

<p>
  +
</p>

<p>
  -
</p>`,
      },

      {
        type: "code",
        language: "css",
        code: `.test + p {
  color: red;
}`,
      },

      {
        type: "example",
        title: "Що отримаємо",
        text: "Другий абзац стане червоним, тому що він є першим елементом p після елемента з класом test.",
      },

      {
        type: "heading",
        text: "Приклад №3. Сусідній селектор з класами",
      },

      {
        type: "code",
        language: "html",
        code: `<p class="test">
  text
</p>

<p class="elem">
  +
</p>

<p>
  -
</p>`,
      },

      {
        type: "code",
        language: "css",
        code: `.test + .elem {
  color: red;
}`,
      },

      {
        type: "example",
        title: "Що отримаємо",
        text: "Червоним стане тільки елемент з класом elem, який знаходиться одразу після елемента з класом test.",
      },

      {
        type: "note",
        text: "Сусідній селектор працює тільки з одним наступним елементом. Якщо між елементами є інший тег — вибір не відбудеться.",
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
          "Дано код:",
          "",
          "<ul>",
          "  <li>1</li>",
          "  <li>2</li>",
          '  <li id="elem">5</li>',
          "  <li>6</li>",
          "</ul>",
          "",
          "Напишіть селектор, який вибере елемент, що знаходиться одразу після #elem.",
        ],
      },

      {
        type: "task",
        text: [
          "№2",
          "",
          "Дано код:",
          "",
          "<ul>",
          "  <li>1</li>",
          '  <li class="elem">2</li>',
          "  <li>3</li>",
          '  <li class="elem">5</li>',
          "  <li>6</li>",
          "</ul>",
          "",
          "Напишіть селектор, який вибере елементи одразу після .elem.",
        ],
      },

      {
        type: "hint",
        text: "Для пошуку елемента після id використовуйте #id + тег. Для пошуку після класу використовуйте .class + тег.",
      },

      {
        type: "answer",
        text: "№1: #elem + li. №2: .elem + li.",
      },
    ],
  },
  {
    id: "css-general-sibling-selector",

    title: "Родинний селектор у CSS",

    description:
      "Розберемо родинний селектор ~, який дозволяє вибирати всі елементи, що знаходяться після певного елемента всередині одного батьківського елемента.",

    content: [
      {
        type: "heading",
        text: "Що таке родинний селектор ~",
      },

      {
        type: "paragraph",
        text: "Родинний селектор ~ вибирає всі елементи, які знаходяться після вказаного елемента та мають спільного батька.",
      },

      {
        type: "paragraph",
        text: "На відміну від сусіднього селектора +, який вибирає тільки один наступний елемент, селектор ~ вибирає всі наступні елементи.",
      },

      {
        type: "heading",
        text: "Приклад №1. Вибір усіх p після h2",
      },

      {
        type: "code",
        language: "html",
        code: `<div>
  <h2>
    text
  </h2>

  <p>
    +++
  </p>

  <p>
    +++
  </p>

  <p>
    +++
  </p>
</div>

<p>
  -
</p>`,
      },

      {
        type: "code",
        language: "css",
        code: `h2 ~ p {
  color: red;
}`,
      },

      {
        type: "example",
        title: "Що отримаємо",
        text: "Червоним стануть всі теги p, які знаходяться після h2 всередині одного div. Абзац за межами div не буде вибраний.",
      },

      {
        type: "hint",
        text: "Символ ~ читається як: вибрати всі наступні елементи такого типу.",
      },

      {
        type: "heading",
        text: "Приклад №2. Родинний селектор з класом",
      },

      {
        type: "code",
        language: "html",
        code: `<div>
  <p class="test">
    text
  </p>

  <p>
    +++
  </p>

  <p>
    +++
  </p>
</div>

<p>
  ---
</p>`,
      },

      {
        type: "code",
        language: "css",
        code: `.test ~ p {
  color: red;
}`,
      },

      {
        type: "example",
        title: "Що отримаємо",
        text: "Виберуться всі p після елемента з класом test, але тільки серед його сусідів з таким самим батьком.",
      },

      {
        type: "heading",
        text: "Приклад №3. Вибір елементів з класом",
      },

      {
        type: "code",
        language: "html",
        code: `<div>
  <p class="test">
    text
  </p>

  <p class="elem">
    +++
  </p>

  <p>
    ---
  </p>

  <p class="elem">
    +++
  </p>
</div>

<p>
  ---
</p>`,
      },

      {
        type: "code",
        language: "css",
        code: `.test ~ .elem {
  color: red;
}`,
      },

      {
        type: "example",
        title: "Що отримаємо",
        text: "Будуть вибрані всі елементи з класом elem, які знаходяться після елемента з класом test.",
      },

      {
        type: "note",
        text: "Селектор ~ працює тільки між елементами з одним спільним батьком. Елементи в інших блоках не вибираються.",
      },

      {
        type: "heading",
        text: "Різниця між + та ~",
      },

      {
        type: "table",
        headers: ["Селектор", "Що вибирає"],
        rows: [
          ["+", "Тільки один безпосередній наступний елемент"],
          ["~", "Всі наступні елементи після заданого"],
        ],
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
          "Дано код:",
          "",
          "<ul>",
          "  <li>1</li>",
          "  <li>2</li>",
          "  <li>3</li>",
          '  <li id="elem">5</li>',
          "  <li>6</li>",
          "  <li>7</li>",
          "</ul>",
          "",
          "Напишіть селектор, який вибере всі елементи, що знаходяться після #elem.",
        ],
      },

      {
        type: "hint",
        text: "Для вибору всіх елементів після id використовуйте конструкцію: #id ~ тег.",
      },

      {
        type: "answer",
        text: "Відповідь: #elem ~ li",
      },
    ],
  },
  {
    id: "css-universal-selector",

    title: "Універсальний селектор у CSS",

    description:
      "Розберемо універсальний селектор *, який дозволяє вибирати всі HTML елементи або всі елементи всередині певного батьківського елемента.",

    content: [
      {
        type: "heading",
        text: "Що таке універсальний селектор *",
      },

      {
        type: "paragraph",
        text: "Універсальний селектор * вибирає абсолютно всі елементи на сторінці.",
      },

      {
        type: "paragraph",
        text: "Його часто використовують для скидання стандартних стилів браузера або для застосування загальних правил.",
      },

      {
        type: "heading",
        text: "Приклад №1. Вибір усіх елементів",
      },

      {
        type: "code",
        language: "css",
        code: `* {
  color: red;
}`,
      },

      {
        type: "example",
        title: "Що отримаємо",
        text: "Всі елементи на сторінці отримають червоний колір тексту.",
      },

      {
        type: "hint",
        text: "Символ * означає: вибрати будь-який HTML елемент.",
      },

      {
        type: "heading",
        text: "Приклад №2. Вибір усіх елементів всередині div",
      },

      {
        type: "code",
        language: "html",
        code: `<div>
  <h2>Title</h2>
  <p>
    Text
  </p>
  <span>
    Span text
  </span>
</div>`,
      },

      {
        type: "code",
        language: "css",
        code: `div * {
  color: red;
}`,
      },

      {
        type: "example",
        title: "Що отримаємо",
        text: "Червоними стануть всі елементи, які знаходяться всередині div.",
      },

      {
        type: "heading",
        text: "Приклад №3. Безпосередні дочірні елементи",
      },

      {
        type: "code",
        language: "css",
        code: `div > * {
  color: red;
}`,
      },

      {
        type: "example",
        title: "Що отримаємо",
        text: "Будуть вибрані тільки прямі дочірні елементи div. Вкладені глибше елементи не вибираються.",
      },

      {
        type: "heading",
        text: "Приклад №4. Комбінація селекторів",
      },

      {
        type: "code",
        language: "html",
        code: `<div>
  <p>
    <span>
      text
    </span>
  </p>

  <section>
    <span>
      text
    </span>
  </section>
</div>`,
      },

      {
        type: "code",
        language: "css",
        code: `div * span {
  color: red;
}`,
      },

      {
        type: "example",
        title: "Що отримаємо",
        text: "Виберуться всі span, які знаходяться всередині будь-якого елемента, який знаходиться всередині div.",
      },

      {
        type: "note",
        text: "Різниця між div * і div > *: перший вибирає всі вкладені елементи будь-якої глибини, другий — тільки безпосередніх дітей.",
      },

      {
        type: "heading",
        text: "Практичне завдання",
      },

      {
        type: "task",
        text: [
          "№1",
          "",
          "Дано код:",
          "",
          "<main>",
          "  <p>---</p>",
          "  <p>---</p>",
          "",
          "  <div>",
          "    <p>+++</p>",
          "    <p>+++</p>",
          "  </div>",
          "",
          "  <section>",
          "    <p>+++</p>",
          "    <p>+++</p>",
          "  </section>",
          "</main>",
          "",
          "Напишіть селектор, який вибере всі абзаци, що знаходяться всередині будь-якого батьківського елемента всередині main.",
        ],
      },

      {
        type: "hint",
        text: "Потрібно вибрати p, які знаходяться не напряму в main, а всередині інших елементів. Використовуйте main * p.",
      },

      {
        type: "answer",
        text: "Відповідь: main * p",
      },
    ],
  },
  {
    id: "css-attribute-selectors",

    title: "Селектори атрибутів у CSS",

    description:
      "У цьому уроці розберемо селектори атрибутів CSS, які дозволяють вибирати HTML елементи за наявністю атрибутів та значеннями цих атрибутів.",

    content: [
      {
        type: "heading",
        text: "Що таке селектори атрибутів",
      },

      {
        type: "paragraph",
        text: "Селектори атрибутів дозволяють звертатися до елементів не тільки за тегом або класом, а й за їх HTML атрибутами.",
      },

      {
        type: "paragraph",
        text: "Наприклад, можна вибрати всі елементи, які мають атрибут title, або тільки посилання, у яких href починається з певного значення.",
      },

      {
        type: "heading",
        text: "Вибір елемента за наявністю атрибута",
      },

      {
        type: "code",
        language: "css",
        code: `[title] {
  color: red;
}`,
      },

      {
        type: "example",
        title: "HTML",
        text: '<p title="text">Цей абзац буде вибраний</p>',
      },

      {
        type: "heading",
        text: "Вибір атрибута у конкретного тега",
      },

      {
        type: "code",
        language: "css",
        code: `p[title] {
  color: blue;
}`,
      },

      {
        type: "example",
        title: "Що вибирає",
        text: "Тільки абзаци p, які мають атрибут title.",
      },

      {
        type: "heading",
        text: "Вибір атрибута з конкретним значенням",
      },

      {
        type: "code",
        language: "css",
        code: `p[title="hello"] {
  color: green;
}`,
      },

      {
        type: "example",
        title: "HTML",
        text: '<p title="hello">Цей текст стане зеленим</p>',
      },

      {
        type: "heading",
        text: "Початок значення атрибута ^=",
      },

      {
        type: "code",
        language: "css",
        code: `a[href^="http://"] {
  color: red;
}`,
      },

      {
        type: "example",
        title: "Що вибирає",
        text: "Посилання, у яких href починається з http://",
      },

      {
        type: "heading",
        text: "Кінець значення атрибута $=",
      },

      {
        type: "code",
        language: "css",
        code: `a[href$=".html"] {
  color: green;
}`,
      },

      {
        type: "example",
        title: "Що вибирає",
        text: "Посилання, у яких адреса закінчується на .html.",
      },

      {
        type: "heading",
        text: "Наявність слова у значенні атрибута *=",
      },

      {
        type: "code",
        language: "css",
        code: `p[title*="hello"] {
  color: orange;
}`,
      },

      {
        type: "example",
        title: "Що вибирає",
        text: "Абзаци, у яких значення title містить слово hello.",
      },

      {
        type: "heading",
        text: "Початок значення класу ^=",
      },

      {
        type: "code",
        language: "css",
        code: `p[class^="top-"] {
  color: purple;
}`,
      },

      {
        type: "example",
        title: "HTML",
        text: '<p class="top-text">Текст</p>',
      },

      {
        type: "note",
        text: "Селектори атрибутів корисні для стилізації форм, посилань, кнопок та інших елементів без створення зайвих класів.",
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
          "Напишіть селектор, який вибере всі елементи з атрибутом title.",
        ],
      },

      {
        type: "task",
        text: [
          "№2",
          "",
          "Напишіть селектор, який вибере всі абзаци з атрибутом title.",
        ],
      },

      {
        type: "task",
        text: [
          "№3",
          "",
          'Напишіть селектор, який вибере всі абзаци з атрибутом title="hello".',
        ],
      },

      {
        type: "task",
        text: [
          "№4",
          "",
          "Напишіть селектор, який вибере всі посилання href яких починаються з http://.",
        ],
      },

      {
        type: "task",
        text: [
          "№5",
          "",
          "Напишіть селектор, який вибере всі посилання href яких закінчуються на .html.",
        ],
      },

      {
        type: "task",
        text: [
          "№6",
          "",
          "Напишіть селектор, який вибере всі абзаци, у яких title містить слово hello.",
        ],
      },

      {
        type: "task",
        text: [
          "№7",
          "",
          "Напишіть селектор, який вибере всі абзаци з класом, що починається з top-.",
        ],
      },

      {
        type: "hint",
        text: 'Основні символи: [attr] — є атрибут, [attr="value"] — точне значення, ^= — починається з, $= — закінчується на, *= — містить.',
      },

      {
        type: "answer",
        text: '1) [title]\n2) p[title]\n3) p[title="hello"]\n4) a[href^="http://"]\n5) a[href$=".html"]\n6) p[title*="hello"]\n7) p[class^="top-"]',
      },
    ],
  },
  {
    id: "css-link-states",

    title: "Стани посилань у CSS",

    description:
      "У цьому уроці розберемо псевдокласи CSS для роботи зі станами посилань: :link, :visited, :hover та :active.",

    content: [
      {
        type: "heading",
        text: "Що таке стани посилань",
      },

      {
        type: "paragraph",
        text: "Посилання можуть мати різний вигляд залежно від того, що робить користувач. Наприклад, посилання може бути ще не відвіданим, вже відкритим, на нього можна навести курсор або натиснути.",
      },

      {
        type: "paragraph",
        text: "Для вибору різних станів використовуються псевдокласи. Вони записуються після селектора через двокрапку.",
      },

      {
        type: "heading",
        text: "Псевдоклас :link",
      },

      {
        type: "paragraph",
        text: ":link вибирає посилання, які користувач ще не відвідував.",
      },

      {
        type: "code",
        language: "css",
        code: `a:link {
  color: red;
}`,
      },

      {
        type: "heading",
        text: "Псевдоклас :visited",
      },

      {
        type: "paragraph",
        text: ":visited вибирає посилання, які користувач вже відкривав.",
      },

      {
        type: "code",
        language: "css",
        code: `a:visited {
  color: green;
}`,
      },

      {
        type: "heading",
        text: "Псевдоклас :hover",
      },

      {
        type: "paragraph",
        text: ":hover спрацьовує, коли користувач наводить курсор мишки на елемент.",
      },

      {
        type: "code",
        language: "css",
        code: `a:hover {
  text-decoration: none;
}`,
      },

      {
        type: "example",
        title: "Що відбудеться",
        text: "Після наведення курсору підкреслення посилання зникне.",
      },

      {
        type: "heading",
        text: "Псевдоклас :active",
      },

      {
        type: "paragraph",
        text: ":active спрацьовує в момент натискання на посилання, коли кнопка мишки ще утримується.",
      },

      {
        type: "code",
        language: "css",
        code: `a:active {
  color: blue;
}`,
      },

      {
        type: "heading",
        text: "Повний приклад",
      },

      {
        type: "code",
        language: "html",
        code: `<a href="#">
  link
</a>`,
      },

      {
        type: "code",
        language: "css",
        code: `a:link {
  color: red;
}

a:visited {
  color: green;
}

a:hover {
  text-decoration: none;
}

a:active {
  color: blue;
}`,
      },

      {
        type: "example",
        title: "Результат",
        text: "Спочатку посилання буде червоним. Після відвідування стане зеленим. При наведенні зникне підкреслення. Під час натискання стане синім.",
      },

      {
        type: "note",
        text: "Порядок написання псевдокласів для посилань має значення. Зазвичай використовують порядок LVHA: :link → :visited → :hover → :active.",
      },

      {
        type: "heading",
        text: "Практичні завдання",
      },

      {
        type: "task",
        text: ["№1", "", "Зробіть всі невідвідані посилання червоними."],
      },

      {
        type: "task",
        text: ["№2", "", "Зробіть відвідані посилання зеленими."],
      },

      {
        type: "task",
        text: ["№3", "", "При наведенні на посилання приберіть підкреслення."],
      },

      {
        type: "task",
        text: ["№4", "", "При натисканні на посилання зробіть його синім."],
      },

      {
        type: "hint",
        text: "Стан посилання записується після селектора: a:hover, a:visited, a:active.",
      },

      {
        type: "answer",
        text: "1) a:link { color: red; }\n\n2) a:visited { color: green; }\n\n3) a:hover { text-decoration: none; }\n\n4) a:active { color: blue; }",
      },
    ],
  },
  {
    id: "css-link-states-order",

    title: "Нюанси послідовності станів посилань у CSS",

    description:
      "Розберемо порядок запису псевдокласів посилань у CSS та правило LoVe HAte.",

    content: [
      {
        type: "heading",
        text: "Порядок псевдокласів посилань",
      },

      {
        type: "paragraph",
        text: "Псевдокласи посилань успадковують стилі один від одного. Через це порядок їх написання у CSS має значення.",
      },

      {
        type: "paragraph",
        text: "Наприклад, якщо для стану :link прибрати підкреслення, воно також може зникнути в інших станах посилання.",
      },

      {
        type: "heading",
        text: "Правильний порядок",
      },

      {
        type: "code",
        language: "css",
        code: `a:link {
}

a:visited {
}

a:hover {
}

a:active {
}`,
      },

      {
        type: "note",
        text: "Запам'ятати порядок допомагає правило LoVe HAte: Link → Visited → Hover → Active.",
      },

      {
        type: "heading",
        text: "Приклад",
      },

      {
        type: "code",
        language: "html",
        code: `<a href="#">
  Посилання
</a>`,
      },

      {
        type: "code",
        language: "css",
        code: `a:link {
  color: skyblue;
}

a:visited {
  color: green;
}

a:hover {
  color: red;
  text-decoration: none;
}

a:active {
  color: black;
}`,
      },

      {
        type: "example",
        title: "Результат",
        text: "Нове посилання буде голубим. Після відвідування стане зеленим. При наведенні курсора стане червоним і без підкреслення. Під час натискання стане чорним.",
      },

      {
        type: "heading",
        text: "Практичне завдання",
      },

      {
        type: "task",
        text: [
          "№1",
          "",
          "Зробіть:",
          "",
          "• стан :hover — червоний колір і без підкреслення;",
          "• стан :link — голубий колір;",
          "• стан :visited — зелений колір;",
          "• стан :active — чорний колір.",
        ],
      },

      {
        type: "hint",
        text: "Не змінюйте порядок псевдокласів. Використовуйте послідовність :link → :visited → :hover → :active.",
      },

      {
        type: "answer",
        text: `a:link {
  color: skyblue;
}

a:visited {
  color: green;
}

a:hover {
  color: red;
  text-decoration: none;
}

a:active {
  color: black;
}`,
      },
    ],
  },
  {
    id: "css-link-visited",

    title: "Стани посилань :link і :visited у CSS",

    description:
      "Розберемо об'єднання станів :link і :visited та спрощення CSS для стилізації посилань.",

    content: [
      {
        type: "heading",
        text: "Об'єднання :link і :visited",
      },

      {
        type: "paragraph",
        text: "Стани :link і :visited часто мають однакові стилі. Наприклад, нам потрібно зробити всі посилання червоними незалежно від того, чи відвідував їх користувач.",
      },

      {
        type: "code",
        language: "css",
        code: `a:link, a:visited {
  color: red;
}

a:hover {
  text-decoration: none;
}

a:active {
  color: blue;
}`,
      },

      {
        type: "code",
        language: "html",
        code: `<a href="#">
  link
</a>`,
      },

      {
        type: "example",
        title: "Результат",
        text: "Посилання буде червоним у звичайному стані та після відвідування. При наведенні зникне підкреслення, а під час натискання стане синім.",
      },

      {
        type: "heading",
        text: "Спрощення коду",
      },

      {
        type: "paragraph",
        text: "Оскільки звичайний селектор a застосовується до всіх посилань, можна не писати окремо :link і :visited.",
      },

      {
        type: "code",
        language: "css",
        code: `a {
  color: red;
}

a:hover {
  text-decoration: none;
}

a:active {
  color: blue;
}`,
      },

      {
        type: "note",
        text: "Селектор a охоплює всі посилання: нові, відвідані та інші стани. Окремі псевдокласи потрібні, коли потрібно задати особливу поведінку для конкретного стану.",
      },

      {
        type: "heading",
        text: "Практичне завдання",
      },

      {
        type: "task",
        text: [
          "№1",
          "",
          "Зробіть всі посилання червоними у станах :link і :visited.",
          "",
          "При наведенні курсора приберіть підкреслення.",
          "",
          "При натисканні зробіть колір посилання синім.",
        ],
      },

      {
        type: "hint",
        text: "Якщо стилі :link і :visited однакові, їх можна об'єднати через кому або замінити простим селектором a.",
      },

      {
        type: "answer",
        text: `Варіант 1:

a:link, a:visited {
  color: red;
}

a:hover {
  text-decoration: none;
}

a:active {
  color: blue;
}


Варіант 2:

a {
  color: red;
}

a:hover {
  text-decoration: none;
}

a:active {
  color: blue;
}`,
      },
    ],
  },
  {
    id: "css-link-common-usage",

    title: "Звичайне використання станів посилань у CSS",

    description:
      "Навчимося задавати загальні стилі для всіх посилань та змінювати їх поведінку при наведенні курсора.",

    content: [
      {
        type: "heading",
        text: "Загальний стиль посилань",
      },

      {
        type: "paragraph",
        text: "У більшості випадків не потрібно окремо описувати :link і :visited. Достатньо використати звичайний селектор a, який застосує стиль до всіх посилань.",
      },

      {
        type: "code",
        language: "css",
        code: `a {
  color: red;
}

a:hover {
  text-decoration: none;
}`,
      },

      {
        type: "code",
        language: "html",
        code: `<a href="#">
  link
</a>`,
      },

      {
        type: "example",
        title: "Результат",
        text: "Посилання буде червоним. При наведенні курсора підкреслення зникне.",
      },

      {
        type: "heading",
        text: "Практичне завдання",
      },

      {
        type: "task",
        text: [
          "№1",
          "",
          "Зробіть всі посилання:",
          "",
          "• у всіх станах — голубими;",
          "• без підкреслення;",
          "• у стані :hover — червоними;",
          "• у стані :hover — з підкресленням.",
        ],
      },

      {
        type: "hint",
        text: "Загальні стилі задайте через селектор a, а поведінку при наведенні — через a:hover.",
      },

      {
        type: "answer",
        text: `a {
  color: skyblue;
  text-decoration: none;
}

a:hover {
  color: red;
  text-decoration: underline;
}`,
      },
    ],
  },
  {
    id: "css-link-complex-selectors",

    title: "Складні селектори зі станами посилань у CSS",

    description:
      "Навчимося застосовувати складні селектори разом із псевдокласами посилань :hover, :link і :visited.",

    content: [
      {
        type: "heading",
        text: "Стан посилань у складних селекторах",
      },

      {
        type: "paragraph",
        text: "Псевдокласи посилань можна використовувати не тільки з простим селектором a, а й зі складними селекторами.",
      },

      {
        type: "code",
        language: "html",
        code: `<div id="block">
  <a href="#">link</a>
  <a href="#">link</a>
  <a href="#">link</a>
</div>`,
      },

      {
        type: "code",
        language: "css",
        code: `#block a:link,
#block a:visited {
  color: red;
}

#block a:hover {
  text-decoration: none;
}`,
      },

      {
        type: "example",
        title: "Результат",
        text: "Всі посилання всередині блоку з id block будуть червоними. При наведенні курсора підкреслення зникне.",
      },

      {
        type: "heading",
        text: "Спрощення коду",
      },

      {
        type: "paragraph",
        text: "Оскільки :link і :visited зазвичай мають однакові стилі, їх можна замінити звичайним селектором посилання.",
      },

      {
        type: "code",
        language: "css",
        code: `#block a {
  color: red;
}

#block a:hover {
  text-decoration: none;
}`,
      },

      {
        type: "heading",
        text: "Практичне завдання",
      },

      {
        type: "task",
        text: [
          "№1",
          "",
          "Поясніть, що вибирає селектор:",
          "",
          "#test a {",
          "  color: red;",
          "}",
          "",
          "#test a:hover {",
          "  text-decoration: none;",
          "}",
          "",
          "Потім напишіть HTML код, який підходить під цей селектор.",
        ],
      },

      {
        type: "hint",
        text: "Селектор #test a вибирає всі теги a, які знаходяться всередині елемента з id=test. #test a:hover працює тільки при наведенні курсора на ці посилання.",
      },

      {
        type: "answer",
        text: `HTML:

<div id="test">
  <a href="#">
    link
  </a>

  <a href="#">
    link
  </a>
</div>


CSS:

#test a {
  color: red;
}

#test a:hover {
  text-decoration: none;
}`,
      },
    ],
  },
  {
    id: "css-link-class",

    title: "Посилання з класом у CSS",

    description:
      "Навчимося застосовувати стилі до посилань, які мають CSS клас, використовуючи псевдокласи станів.",

    content: [
      {
        type: "heading",
        text: "Клас у посиланнях",
      },

      {
        type: "paragraph",
        text: "Посилання можуть мати власні CSS класи. Це дозволяє стилізувати тільки певні посилання, а не всі посилання на сторінці.",
      },

      {
        type: "code",
        language: "html",
        code: `<a href="#" class="eee">
  link
</a>

<a href="#" class="eee">
  link
</a>

<a href="#" class="eee">
  link
</a>`,
      },

      {
        type: "code",
        language: "css",
        code: `a:link.eee,
a:visited.eee {
  color: red;
}

a:hover.eee {
  text-decoration: none;
}`,
      },

      {
        type: "example",
        title: "Результат",
        text: "Всі посилання з класом eee будуть червоними. При наведенні курсора підкреслення зникне.",
      },

      {
        type: "heading",
        text: "Порядок запису селекторів",
      },

      {
        type: "paragraph",
        text: "Порядок класу і псевдокласу не має значення. Обидва варіанти працюють однаково.",
      },

      {
        type: "code",
        language: "css",
        code: `a:link.eee,
a:visited.eee {
  color: red;
}

a:hover.eee {
  text-decoration: none;
}


/* Те саме */

a.eee:link,
a.eee:visited {
  color: red;
}

a.eee:hover {
  text-decoration: none;
}`,
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
          "Поясніть, що вибирає селектор:",
          "",
          "a.zzz {",
          "  color: red;",
          "}",
          "",
          "a.zzz:hover {",
          "  text-decoration: none;",
          "}",
          "",
          "Напишіть HTML код під цей селектор.",
        ],
      },

      {
        type: "hint",
        text: "a.zzz вибирає тільки посилання <a> з класом zzz. a.zzz:hover працює при наведенні курсора на ці посилання.",
      },

      {
        type: "answer",
        text: `HTML:

<a href="#" class="zzz">
  link
</a>


CSS:

a.zzz {
  color: red;
}

a.zzz:hover {
  text-decoration: none;
}


--------------------------------


№2

#block a.zzz вибирає посилання з класом zzz всередині елемента з id="block".


HTML:

<div id="block">
  <a href="#" class="zzz">
    link
  </a>
</div>


CSS:

#block a.zzz {
  color: red;
}

#block a.zzz:hover {
  text-decoration: none;
}


--------------------------------


№3

.block a.zzz вибирає посилання з класом zzz всередині елемента з класом block.


HTML:

<div class="block">
  <a href="#" class="zzz">
    link
  </a>
</div>


CSS:

.block a.zzz {
  color: red;
}

.block a.zzz:hover {
  text-decoration: none;
}`,
      },
    ],
  },
  {
    id: "css-first-last-child",

    title: "Вибірка кінцевих елементів у CSS",

    description:
      "Навчимося вибирати перший і останній дочірній елемент за допомогою псевдокласів :first-child та :last-child.",

    content: [
      {
        type: "heading",
        text: "Псевдоклас :first-child",
      },

      {
        type: "paragraph",
        text: "Псевдоклас :first-child вибирає елемент, який є першим дочірнім елементом свого батька.",
      },

      {
        type: "code",
        language: "html",
        code: `<ul>
  <li>Перший елемент</li>
  <li>Другий елемент</li>
  <li>Третій елемент</li>
</ul>`,
      },

      {
        type: "code",
        language: "css",
        code: `li:first-child {
  color: red;
}`,
      },

      {
        type: "example",
        title: "Результат",
        text: "Червоним стане тільки перший елемент списку.",
      },

      {
        type: "heading",
        text: "Псевдоклас :last-child",
      },

      {
        type: "paragraph",
        text: "Псевдоклас :last-child вибирає елемент, який є останнім дочірнім елементом свого батька.",
      },

      {
        type: "code",
        language: "html",
        code: `<ul>
  <li>Перший елемент</li>
  <li>Другий елемент</li>
  <li>Останній елемент</li>
</ul>`,
      },

      {
        type: "code",
        language: "css",
        code: `li:last-child {
  color: green;
}`,
      },

      {
        type: "example",
        title: "Результат",
        text: "Зеленим стане тільки останній елемент списку.",
      },

      {
        type: "heading",
        text: "Комбінація із селекторами",
      },

      {
        type: "paragraph",
        text: "Можна використовувати :first-child і :last-child разом із класами, тегами та складними селекторами.",
      },

      {
        type: "code",
        language: "css",
        code: `.menu li:first-child {
  color: blue;
}

.menu li:last-child {
  color: orange;
}`,
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
          "Зробіть перший елемент списку червоним.",
          "",
          "HTML:",
          "",
          "<ul>",
          "  <li>text</li>",
          "  <li>text</li>",
          "  <li>text</li>",
          "</ul>",
        ],
      },

      {
        type: "task",
        text: [
          "№2",
          "",
          "Зробіть останній елемент списку зеленим.",
          "",
          "HTML:",
          "",
          "<ul>",
          "  <li>text</li>",
          "  <li>text</li>",
          "  <li>text</li>",
          "</ul>",
        ],
      },

      {
        type: "task",
        text: ["№3", "", "Зробіть перший і останній абзаци синіми."],
      },

      {
        type: "hint",
        text: ":first-child працює тільки з першим дочірнім елементом, а :last-child — тільки з останнім. Вони не вибирають просто перший або останній елемент на сторінці.",
      },

      {
        type: "answer",
        text: `№1

li:first-child {
  color: red;
}


№2

li:last-child {
  color: green;
}


№3

p:first-child,
p:last-child {
  color: blue;
}`,
      },
    ],
  },
  {
    id: "css-nth-child",

    title: "Вибір елементів за позицією в CSS",

    description:
      "Вивчаємо псевдокласи :nth-child() та :nth-last-child() для вибору елементів за їх порядковим номером.",

    content: [
      {
        type: "heading",
        text: "Вибір елементів за позицією в CSS",
      },

      {
        type: "paragraph",
        text: "Псевдоклас :nth-child() дозволяє вибирати елементи за їх порядковим номером серед дочірніх елементів одного батька.",
      },

      {
        type: "paragraph",
        text: "Наприклад, якщо потрібно вибрати третій елемент списку, використовується селектор :nth-child(3).",
      },

      {
        type: "code",
        language: "html",
        code: `<ul>
  <li>Елемент 1</li>
  <li>Елемент 2</li>
  <li>Елемент 3</li>
  <li>Елемент 4</li>
</ul>`,
      },

      {
        type: "code",
        language: "css",
        code: `li:nth-child(3) {
  color: red;
}`,
      },

      {
        type: "paragraph",
        text: "У результаті третій елемент списку буде вибраний і стане червоним.",
      },

      {
        type: "heading",
        text: "Вибір парних і непарних елементів",
      },

      {
        type: "paragraph",
        text: "За допомогою значень even та odd можна вибрати парні або непарні елементи.",
      },

      {
        type: "code",
        language: "css",
        code: `li:nth-child(even) {
  color: blue;
}

li:nth-child(odd) {
  color: green;
}`,
      },

      {
        type: "note",
        text: "even вибирає парні елементи (2, 4, 6...), а odd — непарні (1, 3, 5...).",
      },

      {
        type: "heading",
        text: "Вибір кожного третього елемента",
      },

      {
        type: "paragraph",
        text: "За допомогою формули 3n можна вибрати кожен третій елемент.",
      },

      {
        type: "code",
        language: "css",
        code: `li:nth-child(3n) {
  font-weight: bold;
}`,
      },

      {
        type: "paragraph",
        text: "Такий селектор вибере елементи з номерами 3, 6, 9 і так далі.",
      },

      {
        type: "heading",
        text: "Вибір елемента з кінця",
      },

      {
        type: "paragraph",
        text: "Псевдоклас :nth-last-child() працює так само, але рахує елементи від кінця списку.",
      },

      {
        type: "code",
        language: "css",
        code: `li:nth-last-child(2) {
  color: red;
}`,
      },

      {
        type: "paragraph",
        text: "Цей селектор вибере другий елемент з кінця.",
      },

      {
        type: "heading",
        text: "HTML/CSS приклад",
      },

      {
        type: "code",
        language: "html",
        code: `<ul class="list">
  <li>Перший</li>
  <li>Другий</li>
  <li>Третій</li>
  <li>Четвертий</li>
  <li>П'ятий</li>
</ul>`,
      },

      {
        type: "code",
        language: "css",
        code: `.list li:nth-child(3) {
  color: red;
}

.list li:nth-child(even) {
  background-color: #ddd;
}

.list li:nth-child(odd) {
  background-color: #eee;
}

.list li:nth-last-child(2) {
  color: blue;
}`,
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
          "Виберіть треті елементи з початку:",
          "",
          "li:nth-child(3) {",
          "",
          "}",
        ],
      },

      {
        type: "hint",
        text: "Використовуйте :nth-child() і вкажіть номер елемента в дужках.",
      },

      {
        type: "answer",
        text: `li:nth-child(3) {
  color: red;
}`,
      },

      {
        type: "task",
        text: [
          "№2",
          "",
          "Виберіть парні та непарні елементи:",
          "",
          "li:nth-child(even) {",
          "",
          "}",
          "",
          "li:nth-child(odd) {",
          "",
          "}",
        ],
      },

      {
        type: "hint",
        text: "Для парних використовуйте even, для непарних — odd.",
      },

      {
        type: "answer",
        text: `li:nth-child(even) {
  color: blue;
}

li:nth-child(odd) {
  color: green;
}`,
      },

      {
        type: "task",
        text: [
          "№3",
          "",
          "Виберіть кожен третій елемент:",
          "",
          "li:nth-child(3n) {",
          "",
          "}",
        ],
      },

      {
        type: "hint",
        text: "Формула 3n вибирає кожен третій елемент.",
      },

      {
        type: "answer",
        text: `li:nth-child(3n) {
  font-weight: bold;
}`,
      },

      {
        type: "task",
        text: [
          "№4",
          "",
          "Виберіть другий елемент з кінця:",
          "",
          "li:nth-last-child(2) {",
          "",
          "}",
        ],
      },

      {
        type: "hint",
        text: "Для рахування з кінця використовуйте :nth-last-child().",
      },

      {
        type: "answer",
        text: `li:nth-last-child(2) {
  color: red;
}`,
      },
    ],
  },
  {
    id: "css-only-child",

    title: "Вибірка єдиного нащадка в CSS",

    description:
      "Вивчаємо псевдоклас :only-child, який дозволяє вибирати елементи, що є єдиним дочірнім елементом свого батька.",

    content: [
      {
        type: "heading",
        text: "Вибірка єдиного нащадка в CSS",
      },

      {
        type: "paragraph",
        text: "Псевдоклас :only-child вибирає елемент тільки у тому випадку, якщо він є єдиним дочірнім елементом свого батьківського елемента.",
      },

      {
        type: "paragraph",
        text: "Якщо всередині батьківського елемента знаходиться декілька дочірніх елементів, :only-child не спрацює.",
      },

      {
        type: "heading",
        text: "HTML/CSS приклад",
      },

      {
        type: "code",
        language: "html",
        code: `<div>
  <p>Єдиний абзац</p>
</div>

<div>
  <p>Перший абзац</p>
  <p>Другий абзац</p>
</div>`,
      },

      {
        type: "code",
        language: "css",
        code: `p:only-child {
  color: red;
}`,
      },

      {
        type: "paragraph",
        text: "У результаті червоним стане тільки перший абзац, тому що він є єдиним дочірнім елементом свого div.",
      },

      {
        type: "heading",
        text: "Що вибирає :only-child",
      },

      {
        type: "code",
        language: "css",
        code: `.block p:only-child {
  font-size: 30px;
}`,
      },

      {
        type: "paragraph",
        text: "Такий селектор вибере тільки ті абзаци всередині .block, які є єдиними дочірніми елементами.",
      },

      {
        type: "note",
        text: ":only-child працює тільки для елементів без сусідів. Якщо у батька є хоча б два дочірні елементи — вибір не відбудеться.",
      },

      {
        type: "heading",
        text: "Практичні завдання",
      },

      {
        type: "task",
        text: [
          "№1⊗mkPmSlOCS",
          "",
          "Виберіть елемент, який є єдиним потомком батьківського елемента:",
          "",
          "<div>",
          "  <p>+++</p>",
          "</div>",
          "",
          "<div>",
          "  <p>---</p>",
          "  <p>---</p>",
          "</div>",
        ],
      },

      {
        type: "hint",
        text: "Використовуйте псевдоклас :only-child. Він вибирає елементи без братів і сестер.",
      },

      {
        type: "answer",
        text: `p:only-child {
  color: red;
}`,
      },
    ],
  },
  {
    id: "css-empty",

    title: "Вибірка порожніх елементів у CSS",

    description:
      "Вивчаємо псевдоклас :empty, який дозволяє вибирати елементи без будь-якого вмісту.",

    content: [
      {
        type: "heading",
        text: "Вибірка порожніх елементів у CSS",
      },

      {
        type: "paragraph",
        text: "Псевдоклас :empty вибирає елементи, які не мають жодного дочірнього елемента або текстового вмісту.",
      },

      {
        type: "paragraph",
        text: "Порожнім вважається тег, у якого всередині немає нічого: ні тексту, ні інших HTML-елементів.",
      },

      {
        type: "heading",
        text: "HTML/CSS приклад",
      },

      {
        type: "code",
        language: "html",
        code: `<div>
</div>

<p>
  Text
</p>

<span></span>`,
      },

      {
        type: "code",
        language: "css",
        code: `div:empty,
span:empty {
  width: 100px;
  height: 100px;
  background-color: red;
}`,
      },

      {
        type: "paragraph",
        text: "У результаті червоний фон отримають тільки порожні div і span. Абзац із текстом не буде вибраний.",
      },

      {
        type: "heading",
        text: "Важливий момент",
      },

      {
        type: "paragraph",
        text: "Навіть пробіл або перенос рядка всередині елемента робить його не порожнім.",
      },

      {
        type: "code",
        language: "html",
        code: `<div></div>

<div>
</div>

<div> </div>`,
      },

      {
        type: "paragraph",
        text: "Перший div є порожнім. Другий також може бути порожнім залежно від форматування HTML. Третій містить пробіл, тому :empty його не вибере.",
      },

      {
        type: "heading",
        text: "Практичні завдання",
      },

      {
        type: "task",
        text: [
          "№1⊗mkPmSlEES",
          "",
          "Стилизуйте порожні теги:",
          "",
          "<div></div>",
          "",
          "<p>text</p>",
          "",
          "<span></span>",
          "",
          "<section></section>",
        ],
      },

      {
        type: "hint",
        text: "Використовуйте псевдоклас :empty. Він вибирає тільки елементи без вмісту.",
      },

      {
        type: "answer",
        text: `div:empty,
span:empty,
section:empty {
  background-color: red;
  width: 100px;
  height: 100px;
}`,
      },
    ],
  },
  {
    id: "css-position-type-pseudo",

    title: "Вибірка по позиції і типу елементів у CSS",

    description:
      "Вивчаємо псевдокласи для вибору елементів за їх позицією та типом: :first-of-type, :last-of-type, :nth-of-type, :nth-last-of-type.",

    content: [
      {
        type: "heading",
        text: "Вибірка по позиції і типу елементів у CSS",
      },

      {
        type: "paragraph",
        text: "CSS має спеціальні псевдокласи, які дозволяють вибирати елементи не тільки за класами або id, а й за їх положенням серед однотипних елементів.",
      },

      {
        type: "heading",
        text: "Основні псевдокласи",
      },

      {
        type: "paragraph",
        text: ":first-of-type — вибирає перший елемент певного типу серед сусідів.",
      },

      {
        type: "paragraph",
        text: ":last-of-type — вибирає останній елемент певного типу серед сусідів.",
      },

      {
        type: "paragraph",
        text: ":nth-of-type(n) — вибирає елемент за номером серед елементів такого ж типу.",
      },

      {
        type: "paragraph",
        text: ":nth-last-of-type(n) — вибирає елемент за номером з кінця.",
      },

      {
        type: "heading",
        text: "HTML/CSS приклад",
      },

      {
        type: "code",
        language: "html",
        code: `<div class="block">
  <p>Перший абзац</p>
  <p>Другий абзац</p>
  <h2>Заголовок</h2>
  <p>Третій абзац</p>
  <p>Четвертий абзац</p>
</div>`,
      },

      {
        type: "code",
        language: "css",
        code: `.block p:first-of-type {
  color: green;
}

.block p:last-of-type {
  color: red;
}

.block p:nth-of-type(2) {
  font-size: 30px;
}

.block p:nth-last-of-type(2) {
  text-decoration: underline;
}`,
      },

      {
        type: "heading",

        text: "Що вийде",
      },

      {
        type: "paragraph",
        text: "Перший абзац стане зеленим, останній абзац стане червоним, другий абзац збільшиться, а передостанній отримає підкреслення.",
      },

      {
        type: "heading",
        text: "Різниця між :nth-child і :nth-of-type",
      },

      {
        type: "paragraph",
        text: ":nth-child рахує всі дочірні елементи незалежно від їх типу. :nth-of-type рахує тільки елементи такого ж типу.",
      },

      {
        type: "code",
        language: "html",
        code: `<div>
  <h2>Title</h2>
  <p>1</p>
  <p>2</p>
  <p>3</p>
</div>`,
      },

      {
        type: "code",
        language: "css",
        code: `p:nth-of-type(2) {
  color: blue;
}`,
      },

      {
        type: "note",
        text: ":nth-of-type(2) вибере другий тег p, навіть якщо перед ним знаходяться інші типи елементів.",
      },

      {
        type: "heading",
        text: "Практичне завдання",
      },

      {
        type: "task",
        text: [
          "№1",
          "",
          "Напишіть CSS, який:",
          "",
          "1. Перший p зробить зеленим.",
          "2. Останній p зробить червоним.",
          "3. Третій p збільшить до 25px.",
          "4. Другий елемент p з кінця підкреслить.",
          "",
          "<div>",
          "  <p>text</p>",
          "  <p>text</p>",
          "  <p>text</p>",
          "  <p>text</p>",
          "</div>",
        ],
      },

      {
        type: "hint",
        text: "Використовуйте :first-of-type, :last-of-type, :nth-of-type() і :nth-last-of-type().",
      },

      {
        type: "answer",
        text: `.block p:first-of-type {
  color: green;
}

.block p:last-of-type {
  color: red;
}

.block p:nth-of-type(3) {
  font-size: 25px;
}

.block p:nth-last-of-type(2) {
  text-decoration: underline;
}`,
      },
    ],
  },
  {
    id: "css-not-selector",

    title: "Селектор заперечення в CSS",

    description:
      "Вивчаємо псевдоклас :not(), який дозволяє вибирати всі елементи, крім тих, що відповідають заданому селектору.",

    content: [
      {
        type: "heading",
        text: "Селектор заперечення в CSS",
      },

      {
        type: "paragraph",
        text: "Псевдоклас :not() використовується для виключення елементів із вибірки. Він вибирає всі елементи, які НЕ відповідають вказаному селектору.",
      },

      {
        type: "heading",
        text: "HTML/CSS приклад",
      },

      {
        type: "code",
        language: "html",
        code: `<ul>
  <li>1</li>
  <li class="elem">2</li>
  <li>3</li>
  <li class="elem">4</li>
</ul>`,
      },

      {
        type: "code",
        language: "css",
        code: `li:not(.elem) {
  color: green;
}`,
      },

      {
        type: "paragraph",
        text: "У результаті зеленим стануть тільки li без класу elem.",
      },

      {
        type: "heading",
        text: "Синтаксис :not()",
      },

      {
        type: "code",
        language: "css",
        code: `selector:not(селектор) {
  властивість: значення;
}`,
      },

      {
        type: "paragraph",
        text: "Наприклад, p:not(.text) вибере всі абзаци, крім тих, які мають клас text.",
      },

      {
        type: "heading",
        text: "Практичні завдання",
      },

      {
        type: "task",
        text: [
          "№1⊗mkPmSlNS",
          "",
          "Дано код:",
          "",
          "<ul>",
          "  <li>1</li>",
          '  <li class="elem">2</li>',
          "  <li>3</li>",
          "  <li>4</li>",
          '  <li class="elem">5</li>',
          "  <li>6</li>",
          "</ul>",
          "",
          "Напишіть селектор, який вибере всі li, крім li з класом elem.",
        ],
      },

      {
        type: "hint",
        text: "Використовуйте :not(.elem).",
      },

      {
        type: "answer",
        text: `li:not(.elem) {
  color: green;
}`,
      },

      {
        type: "task",
        text: [
          "№2⊗mkPmSlNS",
          "",
          "Дано список:",
          "",
          "<ul>",
          "  <li>1</li>",
          "  <li>2</li>",
          "  <li>3</li>",
          "  <li>4</li>",
          "</ul>",
          "",
          "Напишіть селектор, який вибере всі li, крім першої.",
        ],
      },

      {
        type: "hint",
        text: "Перша позиція визначається через :first-child. Її потрібно виключити.",
      },

      {
        type: "answer",
        text: `li:not(:first-child) {
  color: blue;
}`,
      },

      {
        type: "task",
        text: [
          "№3⊗mkPmSlNS",
          "",
          "Дано список:",
          "",
          "<ul>",
          "  <li>1</li>",
          "  <li>2</li>",
          "  <li>3</li>",
          "  <li>4</li>",
          "  <li>5</li>",
          "</ul>",
          "",
          "Напишіть селектор, який вибере всі li, крім першої і останньої.",
        ],
      },

      {
        type: "hint",
        text: "У :not() можна використовувати складні псевдокласи. Виключіть :first-child і :last-child.",
      },

      {
        type: "answer",
        text: `li:not(:first-child):not(:last-child) {
  color: red;
}`,
      },

      {
        type: "note",
        text: ":not() дуже корисний для створення винятків. Наприклад, можна стилізувати всі кнопки, крім кнопки 'Видалити'.",
      },
    ],
  },
];
