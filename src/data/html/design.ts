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
  {
    id: "css-border-basics",

    title: "Основи роботи з межами в CSS",

    description:
      "Вивчаємо, як створювати межі елементів за допомогою властивостей border-width, border-style і border-color.",

    content: [
      {
        type: "heading",
        text: "Основи роботи з межами в CSS",
      },

      {
        type: "paragraph",
        text: "Межа (border) дозволяє виділити елемент на сторінці. Для створення межі потрібно задати її товщину, стиль і колір.",
      },

      {
        type: "paragraph",
        text: "Для цього використовуються три основні властивості:",
      },

      {
        type: "list",
        items: [
          "border-width — задає товщину межі.",
          "border-style — задає тип межі.",
          "border-color — задає колір межі.",
        ],
      },

      {
        type: "paragraph",
        text: "Без властивості border-style межа не відобразиться, навіть якщо задано товщину та колір.",
      },

      {
        type: "heading",
        text: "Приклад",
      },

      {
        type: "code",
        language: "html",
        code: `<div id="elem"></div>`,
      },

      {
        type: "code",
        language: "css",
        code: `#elem {
  width: 300px;
  height: 100px;

  border-width: 3px;
  border-style: solid;
  border-color: red;
}`,
      },

      {
        type: "paragraph",
        text: "У результаті елемент отримає суцільну червону межу товщиною 3 пікселі.",
      },

      {
        type: "note",
        text: "Властивість border-style є обов'язковою. Якщо її не вказати, межа не буде показана.",
      },

      {
        type: "heading",
        text: "Найпоширеніші значення border-style",
      },

      {
        type: "list",
        items: [
          "solid — суцільна лінія.",
          "dashed — пунктир.",
          "dotted — крапкова лінія.",
          "double — подвійна лінія.",
          "none — межа відсутня.",
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
          "Створіть блок розміром 300×100 пікселів.",
          "",
          "Задайте йому:",
          "- товщину межі 2px;",
          "- суцільний стиль;",
          "- синій колір межі.",
        ],
      },

      {
        type: "hint",
        text: "Використайте властивості border-width, border-style та border-color.",
      },

      {
        type: "answer",
        text: `#elem {
  width: 300px;
  height: 100px;

  border-width: 2px;
  border-style: solid;
  border-color: blue;
}`,
      },

      {
        type: "task",
        text: [
          "№2",
          "",
          "Створіть блок розміром 250×120 пікселів.",
          "",
          "Задайте йому:",
          "- товщину межі 5px;",
          "- пунктирний стиль;",
          "- зелений колір межі.",
        ],
      },

      {
        type: "hint",
        text: "Для пунктирної межі використовуйте значення dashed.",
      },

      {
        type: "answer",
        text: `#elem {
  width: 250px;
  height: 120px;

  border-width: 5px;
  border-style: dashed;
  border-color: green;
}`,
      },
    ],
  },
  {
    id: "css-solid-border",

    title: "Суцільна рамка в CSS",

    description:
      "Вивчаємо значення solid для властивості border-style та створюємо просту суцільну рамку навколо елемента.",

    content: [
      {
        type: "heading",
        text: "Суцільна рамка в CSS",
      },

      {
        type: "paragraph",
        text: "Властивість border-style визначає тип рамки. Одним із найпоширеніших значень є solid — суцільна лінія.",
      },

      {
        type: "paragraph",
        text: "Щоб рамка відобразилася, необхідно задати три властивості: товщину (border-width), стиль (border-style) і колір (border-color).",
      },

      {
        type: "code",
        language: "html",
        code: `<div id="elem"></div>`,
      },

      {
        type: "code",
        language: "css",
        code: `#elem {
  width: 300px;
  height: 100px;

  border-width: 1px;
  border-style: solid;
  border-color: black;
}`,
      },

      {
        type: "paragraph",
        text: "У результаті елемент отримає чорну суцільну рамку товщиною 1 піксель.",
      },

      {
        type: "note",
        text: "Якщо не вказати border-style, рамка не відобразиться, навіть якщо задано товщину та колір.",
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
          "Повторіть приклад нижче.",
          "",
          "Створіть блок розміром 300×100 пікселів.",
          "Додайте йому чорну суцільну рамку товщиною 1px.",
        ],
      },

      {
        type: "hint",
        text: "Використайте властивості border-width, border-style та border-color.",
      },

      {
        type: "answer",
        text: `#elem {
  width: 300px;
  height: 100px;

  border-width: 1px;
  border-style: solid;
  border-color: black;
}`,
      },
    ],
  },
  {
    id: "css-dotted-border",

    title: "Пунктирна рамка в CSS",

    description:
      "Вивчаємо значення dotted для властивості border-style та створюємо рамку у вигляді точок.",

    content: [
      {
        type: "heading",
        text: "Пунктирна рамка в CSS",
      },

      {
        type: "paragraph",
        text: "Значення dotted властивості border-style створює рамку у вигляді маленьких точок. Такий стиль часто використовується для виділення блоків або позначення місць, куди можна перетягнути файли.",
      },

      {
        type: "paragraph",
        text: "Щоб рамка відобразилася, потрібно задати її товщину, стиль і колір.",
      },

      {
        type: "code",
        language: "html",
        code: `<div id="elem"></div>`,
      },

      {
        type: "code",
        language: "css",
        code: `#elem {
  width: 300px;
  height: 100px;

  border-width: 1px;
  border-style: dotted;
  border-color: black;
}`,
      },

      {
        type: "paragraph",
        text: "У результаті блок отримає чорну рамку, що складається з окремих точок.",
      },

      {
        type: "note",
        text: "Стиль dotted працює лише тоді, коли задано border-style. Якщо вказати тільки товщину та колір рамки, вона не з'явиться.",
      },

      {
        type: "heading",
        text: "Практичне завдання",
      },

      {
        type: "task",
        text: [
          "№1",

          "Створіть блок розміром 300×100 пікселів.",
          "Додайте йому чорну рамку у вигляді точок товщиною 1px.",
        ],
      },

      {
        type: "hint",
        text: "Використайте border-width, border-style зі значенням dotted та border-color.",
      },

      {
        type: "answer",
        text: `#elem {
  width: 300px;
  height: 100px;

  border-width: 1px;
  border-style: dotted;
  border-color: black;
}`,
      },
    ],
  },
  {
    id: "css-dashed-border",

    title: "Пунктирна рамка у вигляді тире в CSS",

    description:
      "Вивчаємо значення dashed для властивості border-style та створюємо рамку у вигляді тире.",

    content: [
      {
        type: "heading",
        text: "Пунктирна рамка у вигляді тире в CSS",
      },

      {
        type: "paragraph",
        text: "Значення dashed властивості border-style створює рамку у вигляді коротких тире. Такий стиль часто використовується для виділення блоків, секцій або областей, які потребують уваги.",
      },

      {
        type: "paragraph",
        text: "Щоб рамка відобразилася, потрібно задати її товщину, стиль і колір.",
      },

      {
        type: "code",
        language: "html",
        code: `<div id="elem"></div>`,
      },

      {
        type: "code",
        language: "css",
        code: `#elem {
  width: 300px;
  height: 100px;

  border-width: 1px;
  border-style: dashed;
  border-color: black;
}`,
      },

      {
        type: "paragraph",
        text: "У результаті блок отримає чорну рамку, що складається з коротких тире.",
      },

      {
        type: "note",
        text: "Стилі dashed і dotted схожі між собою, але dashed створює тире, а dotted — окремі точки.",
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

          "",
          "Створіть блок розміром 300×100 пікселів.",
          "Додайте йому чорну рамку у вигляді тире товщиною 1px.",
        ],
      },

      {
        type: "hint",
        text: "Використайте border-width, border-style зі значенням dashed та border-color.",
      },

      {
        type: "answer",
        text: `#elem {
  width: 300px;
  height: 100px;

  border-width: 1px;
  border-style: dashed;
  border-color: black;
}`,
      },
    ],
  },
  {
    id: "css-ridge-border",

    title: "Опукла рамка в CSS",

    description:
      "Вивчаємо значення ridge для властивості border-style та створюємо об'ємну опуклу рамку.",

    content: [
      {
        type: "heading",
        text: "Опукла рамка в CSS",
      },

      {
        type: "paragraph",
        text: "Значення ridge властивості border-style створює об'ємну рамку з ефектом опуклості. Браузер автоматично використовує світліші та темніші відтінки кольору, щоб створити тривимірний вигляд.",
      },

      {
        type: "paragraph",
        text: "Для ефекту ridge рекомендується використовувати товщину рамки не менше 2–3 пікселів.",
      },

      {
        type: "code",
        language: "html",
        code: `<div id="elem"></div>`,
      },

      {
        type: "code",
        language: "css",
        code: `#elem {
  width: 300px;
  height: 100px;

  border-width: 3px;
  border-style: ridge;
  border-color: black;
}`,
      },

      {
        type: "paragraph",
        text: "У результаті блок отримає об'ємну опуклу рамку чорного кольору.",
      },

      {
        type: "note",
        text: "Ефект ridge добре помітний лише при товстій рамці. Якщо встановити border-width: 1px, об'ємність майже не буде видно.",
      },

      {
        type: "heading",
        text: "Практичне завдання",
      },

      {
        type: "task",
        text: [
          "№1",

          "Створіть блок розміром 300×100 пікселів.",
          "Додайте йому чорну опуклу рамку товщиною 3px.",
        ],
      },

      {
        type: "hint",
        text: "Використайте border-width, border-style зі значенням ridge та border-color.",
      },

      {
        type: "answer",
        text: `#elem {
  width: 300px;
  height: 100px;

  border-width: 3px;
  border-style: ridge;
  border-color: black;
}`,
      },
    ],
  },
  {
    id: "border-style-double",
    title: "Подвійна межа в CSS",
    description:
      "Вивчаємо значення double властивості border-style, яке створює подвійну лінію навколо елемента.",
    content: [
      {
        type: "heading",
        text: "Подвійна межа в CSS",
      },
      {
        type: "paragraph",
        text: "Значення double властивості border-style створює подвійну межу навколо елемента.",
      },
      {
        type: "code",
        language: "html",
        code: `<div id="elem"></div>`,
      },
      {
        type: "code",
        language: "css",
        code: `#elem {
  border-width: 5px;
  border-style: double;
  border-color: black;
  width: 300px;
  height: 100px;
}`,
      },
      {
        type: "note",
        text: "Товщина подвійної межі залежить від значення властивості border-width. Чим більше значення, тим помітнішою буде відстань між лініями.",
      },
      {
        type: "example",
        title: "Результат виконання коду",
        text: "Елемент розміром 300px на 100px отримає подвійну чорну межу.",
      },
      {
        type: "task",
        text: [
          "Змініть значення border-width та подивіться, як змінюється подвійна межа.",
        ],
      },
      {
        type: "hint",
        text: "Спробуйте значення 3px, 5px та 10px для властивості border-width.",
      },
      {
        type: "answer",
        text: `#elem {
  border-width: 5px;
  border-style: double;
  border-color: black;
  width: 300px;
  height: 100px;
}`,
      },
    ],
  },
  {
    id: "border-shorthand",
    title: "Скорочений запис межі в CSS",
    description:
      "Вивчаємо скорочену властивість border для задання товщини, стилю та кольору межі одним рядком.",
    content: [
      {
        type: "heading",
        text: "Скорочений запис межі в CSS",
      },
      {
        type: "paragraph",
        text: "Для меж, як і для шрифтів, існує скорочена властивість border. Вона дозволяє замінити декілька окремих властивостей одним записом.",
      },
      {
        type: "paragraph",
        text: "Замість трьох властивостей border-width, border-style та border-color можна використовувати одну властивість border.",
      },
      {
        type: "code",
        language: "css",
        code: `#elem {
  border-width: 1px;
  border-style: solid;
  border-color: black;
  width: 300px;
  height: 100px;
}`,
      },
      {
        type: "paragraph",
        text: "Цю саму межу можна записати коротше:",
      },
      {
        type: "code",
        language: "css",
        code: `#elem {
  border: 1px solid black;
  width: 300px;
  height: 100px;
}`,
      },
      {
        type: "note",
        text: "У властивості border значення можна вказувати у будь-якому порядку: товщина, стиль та колір межі.",
      },
      {
        type: "example",
        title: "Структура властивості border",
        text: "border: товщина стиль колір;",
      },
      {
        type: "list",
        items: [
          "1px — товщина межі (border-width)",
          "solid — стиль лінії (border-style)",
          "black — колір межі (border-color)",
        ],
      },
      {
        type: "heading",
        text: "Завдання",
      },
      {
        type: "task",
        text: [
          "№1. Створіть блок розміром 300px на 100px та додайте йому межу через властивість border.",
          "№2. Змініть товщину межі.",
          "№3. Використайте різні стилі межі: dashed, dotted, double.",
          "№4. Змініть колір межі.",
        ],
      },
      {
        type: "hint",
        text: "Спробуйте змінювати лише одне значення у властивості border та спостерігайте за результатом.",
      },
    ],
  },
  {
    id: "border-sides",
    title: "Межі окремих сторін в CSS",
    description:
      "Вивчаємо властивості border-left, border-right, border-top та border-bottom для створення меж окремих сторін елемента.",
    content: [
      {
        type: "heading",
        text: "Межі окремих сторін в CSS",
      },
      {
        type: "paragraph",
        text: "У CSS існують скорочені властивості для окремих сторін елемента: border-left (ліва межа), border-right (права межа), border-top (верхня межа) та border-bottom (нижня межа).",
      },
      {
        type: "paragraph",
        text: "За допомогою цих властивостей можна додавати межу тільки з потрібної сторони, не змінюючи інші сторони елемента.",
      },
      {
        type: "code",
        language: "html",
        code: `<div id="elem"></div>`,
      },
      {
        type: "code",
        language: "css",
        code: `#elem {
  width: 300px;
  height: 100px;
  border-left: 1px solid red;
}`,
      },
      {
        type: "example",
        title: "Результат виконання коду",
        text: "Елемент отримає тільки ліву червону межу товщиною 1px.",
      },
      {
        type: "paragraph",
        text: "Можна одночасно додати межі з декількох сторін елемента.",
      },
      {
        type: "code",
        language: "css",
        code: `#elem {
  width: 300px;
  height: 100px;
  border-left: 1px solid red;
  border-right: 1px solid red;
}`,
      },
      {
        type: "note",
        text: "Властивості border-left, border-right, border-top та border-bottom мають такий самий формат, як і border: товщина, стиль та колір.",
      },
      {
        type: "list",
        items: [
          "border-left — ліва межа",
          "border-right — права межа",
          "border-top — верхня межа",
          "border-bottom — нижня межа",
        ],
      },
      {
        type: "task",
        text: [
          "№1. Створіть блок та додайте йому тільки верхню межу.",
          "№2. Додайте нижню межу іншого кольору.",
          "№3. Створіть елемент з лівою та правою межами одночасно.",
        ],
      },
      {
        type: "hint",
        text: "Спробуйте змінити стиль межі з solid на dashed або double.",
      },
    ],
  },
  {
    id: "border-radius",
    title: "Заокруглення кутів блоку в CSS",
    description:
      "Вивчаємо властивість border-radius для створення заокруглених кутів у елементів.",
    content: [
      {
        type: "heading",
        text: "Заокруглення кутів блоку в CSS",
      },
      {
        type: "paragraph",
        text: "За допомогою властивості border-radius можна заокруглювати кути блоків. Значення властивості задається у пікселях.",
      },
      {
        type: "paragraph",
        text: "Наприклад, значення border-radius: 10px створює заокруглення кутів із радіусом 10 пікселів.",
      },
      {
        type: "paragraph",
        text: "Чим більше значення border-radius, тим сильніше будуть заокруглені кути елемента. На практиці значення часто підбирають візуально, залежно від потрібного дизайну.",
      },
      {
        type: "code",
        language: "html",
        code: `<div id="elem"></div>`,
      },
      {
        type: "code",
        language: "css",
        code: `#elem {
  width: 300px;
  height: 100px;
  border: 1px solid red;
  border-radius: 10px;
}`,
      },
      {
        type: "example",
        title: "Результат виконання коду",
        text: "Блок розміром 300px на 100px отримає червону межу із заокругленими кутами.",
      },
      {
        type: "note",
        text: "Властивість border-radius працює не тільки для блоків із межею. Її також можна використовувати для створення заокруглених зображень та кнопок.",
      },
      {
        type: "list",
        items: [
          "0px — без заокруглення",
          "10px — невелике заокруглення",
          "50% — створення круглого елемента, якщо ширина та висота однакові",
        ],
      },
      {
        type: "task",
        text: [
          "№1. Створіть блок розміром 300px на 100px та додайте йому заокруглення 10px.",
          "№2. Змініть значення border-radius на 20px та порівняйте результат.",
          "№3. Спробуйте створити круглий елемент за допомогою border-radius: 50%.",
        ],
      },
      {
        type: "hint",
        text: "Експериментуйте зі значеннями border-radius: 5px, 15px, 30px та 50%.",
      },
      {
        type: "answer",
        text: `#elem {
  width: 300px;
  height: 100px;
  border: 1px solid red;
  border-radius: 10px;
}`,
      },
    ],
  },
  {
    id: "border-radius-background",
    title: "Заокруглення фону в CSS",
    description:
      "Вивчаємо використання властивості border-radius для заокруглення не тільки межі, а й фону елемента.",
    content: [
      {
        type: "heading",
        text: "Заокруглення фону в CSS",
      },
      {
        type: "paragraph",
        text: "Властивість border-radius заокруглює не тільки кути межі елемента, а й сам фон блоку.",
      },
      {
        type: "paragraph",
        text: "Якщо елемент має background-color, то заокруглення буде застосоване і до області фону.",
      },
      {
        type: "code",
        language: "html",
        code: `<div id="elem"></div>`,
      },
      {
        type: "code",
        language: "css",
        code: `#elem {
  border-radius: 20px;
  width: 300px;
  height: 100px;
  background-color: #e4f1ed;
}`,
      },
      {
        type: "example",
        title: "Результат виконання коду",
        text: "Блок розміром 300px на 100px отримає світлий фон із заокругленими кутами.",
      },
      {
        type: "note",
        text: "Для заокруглення кольорового блоку не обов'язково додавати border. Властивість border-radius працює без межі.",
      },
      {
        type: "list",
        items: [
          "border-radius: 0 — кути прямі",
          "border-radius: 20px — заокруглені кути",
          "border-radius: 50% — кругла форма для квадратного елемента",
        ],
      },
      {
        type: "task",
        text: [
          "№1. Створіть блок із фоном та додайте йому заокруглення 20px.",
          "№2. Змініть колір фону та розмір заокруглення.",
          "№3. Створіть круглий елемент за допомогою border-radius: 50%.",
        ],
      },
      {
        type: "hint",
        text: "Спробуйте різні значення border-radius та подивіться, як змінюється форма блоку.",
      },
      {
        type: "answer",
        text: `#elem {
  border-radius: 20px;
  width: 300px;
  height: 100px;
  background-color: #e4f1ed;
}`,
      },
    ],
  },
  {
    id: "create-circle-css",
    title: "Створення кола в CSS",
    description:
      "Вивчаємо, як створити круглий елемент за допомогою властивості border-radius.",
    content: [
      {
        type: "heading",
        text: "Створення кола в CSS",
      },
      {
        type: "paragraph",
        text: "Якщо значення border-radius дорівнює половині ширини та висоти елемента, можна створити круг.",
      },
      {
        type: "paragraph",
        text: "Для створення ідеального кола ширина та висота елемента повинні бути однаковими.",
      },
      {
        type: "code",
        language: "html",
        code: `<div id="elem"></div>`,
      },
      {
        type: "code",
        language: "css",
        code: `#elem {
  width: 100px;
  height: 100px;
  border-radius: 50px;
  border: 1px solid red;
}`,
      },
      {
        type: "example",
        title: "Результат виконання коду",
        text: "Елемент розміром 100px на 100px стане круглим із червоною межею.",
      },
      {
        type: "note",
        text: "Замість border-radius: 50px можна використовувати border-radius: 50%. Це зручніше, якщо розмір елемента може змінюватися.",
      },
      {
        type: "code",
        language: "css",
        code: `#elem {
  width: 100px;
  height: 100px;
  border-radius: 50%;
  border: 1px solid red;
}`,
      },
      {
        type: "list",
        items: [
          "Однакова ширина та висота створюють квадрат.",
          "border-radius: 50% перетворює квадрат на коло.",
          "Якщо ширина та висота різні, вийде овал.",
        ],
      },
      {
        type: "task",
        text: [
          "№1. Створіть квадратний блок та перетворіть його на коло.",
          "№2. Змініть розмір кола з 100px на 200px.",
          "№3. Створіть овал, змінивши тільки висоту або ширину елемента.",
        ],
      },
      {
        type: "hint",
        text: "Для створення кола найчастіше використовують border-radius: 50%.",
      },
      {
        type: "answer",
        text: `#elem {
  width: 100px;
  height: 100px;
  border-radius: 50%;
  border: 1px solid red;
}`,
      },
    ],
  },
  {
    id: "border-radius-corners",
    title: "Різне заокруглення для різних кутів CSS",
    description:
      "Вивчаємо, як задавати різні значення border-radius для окремих кутів елемента.",
    content: [
      {
        type: "heading",
        text: "Різне заокруглення для різних кутів CSS",
      },
      {
        type: "paragraph",
        text: "Властивість border-radius може приймати не тільки одне значення, а й два, три або чотири значення.",
      },
      {
        type: "paragraph",
        text: "Кожне значення відповідає за заокруглення певного кута елемента.",
      },
      {
        type: "code",
        language: "css",
        code: `#elem {
  border-radius: 10px 20px 30px 40px;
}`,
      },
      {
        type: "list",
        items: [
          "1 значення — всі кути мають однакове заокруглення.",
          "2 значення — перше для верхнього лівого та нижнього правого кутів, друге для верхнього правого та нижнього лівого.",
          "3 значення — задають заокруглення для верхнього лівого, верхнього правого/нижнього лівого та нижнього правого кутів.",
          "4 значення — задають окреме значення для кожного кута.",
        ],
      },
      {
        type: "example",
        title: "Порядок значень",
        text: "Значення записуються за годинниковою стрілкою: верхній лівий → верхній правий → нижній правий → нижній лівий.",
      },
      {
        type: "note",
        text: "Чим більше значення border-radius, тим сильніше заокруглюється відповідний кут.",
      },
      {
        type: "task",
        text: [
          "№1. Створіть блок та задайте кожному куту різне заокруглення.",
          "№2. Використайте два значення border-radius та перевірте результат.",
          "№3. Спробуйте створити незвичайну форму блоку за допомогою різних значень.",
        ],
      },
      {
        type: "hint",
        text: "Пам'ятайте порядок: верхній лівий → верхній правий → нижній правий → нижній лівий.",
      },
    ],
  },
  {
    id: "border-radius-two-values",
    title: "Два значення заокруглення для різних кутів CSS",
    description:
      "Вивчаємо, як задавати різне заокруглення кутів за допомогою двох значень властивості border-radius.",
    content: [
      {
        type: "heading",
        text: "Два значення заокруглення для різних кутів CSS",
      },
      {
        type: "paragraph",
        text: "Властивість border-radius може приймати два значення. У цьому випадку кожне значення буде застосоване одразу до двох кутів.",
      },
      {
        type: "paragraph",
        text: "Перше значення задає заокруглення для верхнього лівого та нижнього правого кутів, а друге — для верхнього правого та нижнього лівого кутів.",
      },
      {
        type: "code",
        language: "html",
        code: `<div id="elem"></div>`,
      },
      {
        type: "code",
        language: "css",
        code: `#elem {
  width: 300px;
  height: 100px;
  border: 1px solid red;
  border-radius: 10px 40px;
}`,
      },
      {
        type: "example",
        title: "Результат виконання коду",
        text: "Верхній лівий та нижній правий кути будуть заокруглені на 10px, а верхній правий та нижній лівий — на 40px.",
      },
      {
        type: "list",
        items: [
          "Перше значення — верхній лівий + нижній правий кути.",
          "Друге значення — верхній правий + нижній лівий кути.",
        ],
      },
      {
        type: "note",
        text: "Якщо вказати одне значення, всі кути отримають однакове заокруглення.",
      },
      {
        type: "task",
        text: [
          "№1. Створіть блок та задайте йому два різні значення border-radius.",
          "№2. Змініть значення 10px 40px на інші та порівняйте результат.",
          "№3. Спробуйте створити власну форму елемента за допомогою двох значень.",
        ],
      },
      {
        type: "hint",
        text: "Запам'ятайте правило: при двох значеннях вони застосовуються по діагоналі.",
      },
      {
        type: "answer",
        text: `#elem {
  width: 300px;
  height: 100px;
  border: 1px solid red;
  border-radius: 10px 40px;
}`,
      },
    ],
  },
  {
    id: "border-radius-three-values",
    title: "Три значення заокруглення для різних кутів CSS",
    description:
      "Вивчаємо, як задавати різне заокруглення кутів за допомогою трьох значень властивості border-radius.",
    content: [
      {
        type: "heading",
        text: "Три значення заокруглення для різних кутів CSS",
      },
      {
        type: "paragraph",
        text: "Властивість border-radius може приймати три значення. У такому випадку кожне значення задає заокруглення для певних кутів елемента.",
      },
      {
        type: "paragraph",
        text: "Перше значення задає заокруглення для верхнього лівого кута, друге — одночасно для верхнього правого та нижнього лівого кутів, третє — для нижнього правого кута.",
      },
      {
        type: "code",
        language: "html",
        code: `<div id="elem"></div>`,
      },
      {
        type: "code",
        language: "css",
        code: `#elem {
  width: 300px;
  height: 100px;
  border: 1px solid red;
  border-radius: 10px 20px 30px;
}`,
      },
      {
        type: "example",
        title: "Результат виконання коду",
        text: "Верхній лівий кут буде мати заокруглення 10px, верхній правий та нижній лівий — 20px, нижній правий — 30px.",
      },
      {
        type: "list",
        items: [
          "1 значення — всі кути мають однакове заокруглення.",
          "2 значення — кути заокруглюються по діагоналі.",
          "3 значення — окремо задається верхній лівий, пара кутів та нижній правий.",
        ],
      },
      {
        type: "note",
        text: "При трьох значеннях друге значення використовується одразу для двох кутів.",
      },
      {
        type: "task",
        text: [
          "№1. Створіть блок із трьома різними значеннями border-radius.",
          "№2. Змініть значення 10px 20px 30px та подивіться, як змінюється форма.",
          "№3. Створіть власну комбінацію заокруглень для блоку.",
        ],
      },
      {
        type: "hint",
        text: "Порядок значень: верхній лівий → верхній правий і нижній лівий → нижній правий.",
      },
      {
        type: "answer",
        text: `#elem {
  width: 300px;
  height: 100px;
  border: 1px solid red;
  border-radius: 10px 20px 30px;
}`,
      },
    ],
  },
  {
    id: "border-radius-percent",
    title: "Заокруглені кути у відсотках в CSS",
    description:
      "Вивчаємо використання відсоткових значень для властивості border-radius.",
    content: [
      {
        type: "heading",
        text: "Заокруглені кути у відсотках в CSS",
      },
      {
        type: "paragraph",
        text: "Для властивості border-radius можна використовувати не тільки пікселі, а й відсотки.",
      },
      {
        type: "paragraph",
        text: "Відсоткове значення обчислюється відносно розміру елемента. Чим більше значення, тим сильніше заокруглюються кути.",
      },
      {
        type: "code",
        language: "html",
        code: `<div id="elem"></div>`,
      },
      {
        type: "code",
        language: "css",
        code: `#elem {
  width: 200px;
  height: 200px;
  border: 1px solid red;
  border-radius: 10%;
}`,
      },
      {
        type: "example",
        title: "Результат виконання коду",
        text: "Квадратний блок розміром 200px на 200px отримає заокруглені кути на 10%.",
      },
      {
        type: "note",
        text: "Якщо ширина та висота елемента однакові, значення border-radius: 50% створить ідеальне коло.",
      },
      {
        type: "code",
        language: "css",
        code: `#elem {
  width: 200px;
  height: 200px;
  border-radius: 50%;
}`,
      },
      {
        type: "list",
        items: [
          "10% — невелике заокруглення кутів.",
          "50% — створення кола для квадратного елемента.",
          "100% — також може використовуватися для створення круглих форм.",
        ],
      },
      {
        type: "task",
        text: [
          "№1. Створіть квадратний блок із border-radius: 10%.",
          "№2. Змініть значення на 25% та порівняйте результат.",
          "№3. Створіть круглий елемент за допомогою border-radius: 50%.",
        ],
      },
      {
        type: "hint",
        text: "Для створення аватарок та круглих іконок часто використовують border-radius: 50%.",
      },
      {
        type: "answer",
        text: `#elem {
  width: 200px;
  height: 200px;
  border: 1px solid red;
  border-radius: 10%;
}`,
      },
    ],
  },
  {
    id: "border-radius-circle-percent",
    title: "Створення кола при заокругленні у відсотках в CSS",
    description:
      "Вивчаємо, як створити круглий елемент за допомогою значення border-radius: 50%.",
    content: [
      {
        type: "heading",
        text: "Створення кола при заокругленні у відсотках в CSS",
      },
      {
        type: "paragraph",
        text: "Щоб створити ідеальне коло, можна задати властивості border-radius значення 50%.",
      },
      {
        type: "paragraph",
        text: "Круг утворюється тоді, коли ширина та висота елемента однакові. У такому випадку заокруглення на 50% перетворює квадрат на коло.",
      },
      {
        type: "code",
        language: "html",
        code: `<div id="elem"></div>`,
      },
      {
        type: "code",
        language: "css",
        code: `#elem {
  width: 200px;
  height: 200px;
  border: 1px solid red;
  border-radius: 50%;
}`,
      },
      {
        type: "example",
        title: "Результат виконання коду",
        text: "Квадратний блок розміром 200px на 200px перетвориться на круг із червоною межею.",
      },
      {
        type: "note",
        text: "Якщо ширина та висота елемента різні, border-radius: 50% створить овал, а не круг.",
      },
      {
        type: "list",
        items: [
          "Однакова ширина і висота + border-radius: 50% = круг.",
          "Різна ширина і висота + border-radius: 50% = овал.",
          "border-radius: 50% часто використовують для аватарок та круглих іконок.",
        ],
      },
      {
        type: "task",
        text: [
          "№1. Створіть квадратний блок розміром 200px на 200px.",
          "№2. Додайте border-radius: 50% та отримайте круг.",
          "№3. Змініть ширину елемента та подивіться, як зміниться форма.",
        ],
      },
      {
        type: "hint",
        text: "Для створення кола завжди перевіряйте, щоб ширина та висота елемента були однаковими.",
      },
      {
        type: "answer",
        text: `#elem {
  width: 200px;
  height: 200px;
  border: 1px solid red;
  border-radius: 50%;
}`,
      },
    ],
  },
  {
    id: "background-image-css",
    title: "Зображення для фону в CSS",
    description:
      "Вивчаємо, як встановити зображення як фон елемента за допомогою властивості background-image.",
    content: [
      {
        type: "heading",
        text: "Зображення для фону в CSS",
      },
      {
        type: "paragraph",
        text: "У CSS можна використовувати зображення як фон для будь-якого елемента. Для цього застосовується властивість background-image.",
      },
      {
        type: "paragraph",
        text: "Якщо встановити зображення фоном для body, воно буде відображатися на всій сторінці.",
      },

      {
        type: "example",
        title: "Результат виконання коду",
        text: "Зображення стане фоном сторінки та буде повторюватися, заповнюючи все вікно браузера.",
      },
      {
        type: "note",
        text: "За замовчуванням фонове зображення повторюється по горизонталі та вертикалі.",
      },
      {
        type: "list",
        items: [
          "background-image — встановлює зображення як фон.",
          "url() — вказує шлях до файлу зображення.",
          "За замовчуванням зображення замощується (повторюється).",
        ],
      },
      {
        type: "task",
        text: [
          "№1. Додайте зображення",
          "№2. Встановіть це зображення фоном для body.",
          "№3. Перевірте, як зображення повторюється у вікні браузера.",
        ],
      },
      {
        type: "answer",
        text: `body {
  background-image: url("/img/img.png");
}`,
      },
    ],
  },
  {
    id: "background-repeat",
    title: "Повторення фонового зображення в CSS",
    description:
      "Вивчаємо, як керувати повторенням фонового зображення за допомогою властивості background-repeat.",
    content: [
      {
        type: "heading",
        text: "Повторення фонового зображення в CSS",
      },
      {
        type: "paragraph",
        text: "За замовчуванням фонове зображення в CSS повторюється по горизонталі та вертикалі, заповнюючи весь доступний простір.",
      },
      {
        type: "paragraph",
        text: "Таке повторення називається замощенням фону. Воно дозволяє невеликим зображенням створювати великий фон сторінки.",
      },

      {
        type: "example",
        title: "Результат виконання коду",
        text: "Зображення bg.png буде повторюватися та заповнювати все вікно браузера.",
      },
      {
        type: "note",
        text: "За замовчуванням використовується значення background-repeat: repeat.",
      },

      {
        type: "list",
        items: [
          "repeat — повторення по горизонталі та вертикалі (значення за замовчуванням).",
          "repeat-x — повторення тільки по горизонталі.",
          "repeat-y — повторення тільки по вертикалі.",
          "no-repeat — без повторення зображення.",
        ],
      },
      {
        type: "task",
        text: [
          "№1. Встановіть зображення як фон для body.",
          "№2. Додайте background-repeat: repeat та перевірте результат.",
          "№3. Спробуйте значення repeat-x, repeat-y та no-repeat.",
        ],
      },
      {
        type: "hint",
        text: "Якщо потрібно розмістити одне велике фонове зображення без повторення, використовуйте background-repeat: no-repeat.",
      },
      {
        type: "answer",
        text: `body {
  background-image: url("/img/bg.png");
  background-repeat: repeat;
}`,
      },
    ],
  },
  {
    id: "background-other-properties",
    title: "Інші властивості фону в CSS",
    description:
      "Вивчаємо додаткові властивості для керування фоном елемента: background-position, background-size, background-attachment, background-clip, background-origin та background.",
    content: [
      {
        type: "heading",
        text: "Інші властивості фону в CSS",
      },
      {
        type: "paragraph",
        text: "CSS має багато властивостей для керування фоновими зображеннями та кольорами. Вони дозволяють змінювати положення, розмір, область відображення та поведінку фону.",
      },
      {
        type: "list",
        items: [
          "background-position — задає положення фонового зображення.",
          "background-size — змінює розмір фонового зображення.",
          "background-attachment — визначає, чи буде фон прокручуватися разом зі сторінкою.",
          "background-clip — визначає область, у якій буде відображатися фон.",
          "background-origin — задає початкову область позиціонування фонового зображення.",
          "background — скорочений запис для налаштування всіх властивостей фону.",
        ],
      },
      {
        type: "example",
        title: "Приклад використання background-position",
        text: "Встановлює положення фонового зображення по центру.",
      },
      {
        type: "code",
        language: "css",
        code: `body {
  background-image: url("/html/bg.png");
  background-position: center;
}`,
      },
      {
        type: "example",
        title: "Приклад використання background-size",
        text: "Змінює розмір фонового зображення.",
      },
      {
        type: "code",
        language: "css",
        code: `body {
  background-size: cover;
}`,
      },
      {
        type: "example",
        title: "Приклад використання background-attachment",
        text: "Закріплює фонове зображення під час прокручування сторінки.",
      },
      {
        type: "code",
        language: "css",
        code: `body {
  background-attachment: fixed;
}`,
      },
      {
        type: "note",
        text: "Властивість background є скороченим записом і дозволяє задати кілька параметрів фону одним рядком.",
      },
      {
        type: "code",
        language: "css",
        code: `body {
  background: url("/html/bg.png") center / cover no-repeat;
}`,
      },
      {
        type: "task",
        text: [
          "№1. Вивчіть властивості background-position, background-size та background-attachment.",
          "№2. Потренуйтеся змінювати положення та розмір фонового зображення.",
          "№3. Перевірте роботу background-clip та background-origin.",
          "№4. Спробуйте замінити окремі властивості скороченим записом background.",
        ],
      },
      {
        type: "hint",
        text: "Змінюйте значення властивостей по одному, щоб зрозуміти, як кожна з них впливає на фон.",
      },
    ],
  },
  {
    id: "list-style-type-ul",
    title: "Робота з маркерами списків ul в CSS",
    description:
      "Вивчаємо властивість list-style-type для зміни вигляду або приховування маркерів ненумерованих списків.",
    content: [
      {
        type: "heading",
        text: "Робота з маркерами списків ul в CSS",
      },
      {
        type: "paragraph",
        text: "Раніше ми розглядали списки ul і знаємо, що за замовчуванням вони мають маркери у вигляді крапок.",
      },
      {
        type: "paragraph",
        text: "За допомогою CSS можна змінити вигляд цих маркерів або повністю прибрати їх.",
      },
      {
        type: "paragraph",
        text: "Для цього використовується властивість list-style-type.",
      },
      {
        type: "code",
        language: "html",
        code: `<ul>
  <li>Перший пункт</li>
  <li>Другий пункт</li>
  <li>Третій пункт</li>
</ul>`,
      },
      {
        type: "code",
        language: "css",
        code: `ul {
  list-style-type: square;
}`,
      },
      {
        type: "example",
        title: "Результат виконання коду",
        text: "Маркери списку зміняться зі стандартних круглих крапок на квадратні.",
      },
      {
        type: "note",
        text: "Властивість list-style-type дозволяє керувати тільки виглядом маркера, а не самим текстом списку.",
      },
      {
        type: "list",
        items: [
          "disc — круглий маркер (значення за замовчуванням).",
          "circle — порожній круг.",
          "square — квадрат.",
          "none — прибрати маркери списку.",
        ],
      },
      {
        type: "task",
        text: [
          "№1. Створіть список ul із декількох пунктів.",
          "№2. Змініть маркери списку за допомогою list-style-type.",
          "№3. Приберіть маркери зі списку.",
        ],
      },
      {
        type: "hint",
        text: "Для меню на сайтах часто використовують list-style-type: none, щоб прибрати стандартні маркери.",
      },
      {
        type: "answer",
        text: `ul {
  list-style-type: none;
}`,
      },
    ],
  },
  {
    id: "list-style-type-square",
    title: "Квадратні маркери списків ul в CSS",
    description:
      "Вивчаємо значення square властивості list-style-type для створення квадратних маркерів у ненумерованих списках.",
    content: [
      {
        type: "heading",
        text: "Квадратні маркери списків ul в CSS",
      },
      {
        type: "paragraph",
        text: "За замовчуванням список ul має круглі маркери. За допомогою властивості list-style-type можна змінити їх вигляд.",
      },
      {
        type: "paragraph",
        text: "Якщо встановити значення square, маркери списку будуть відображатися у вигляді квадратиків.",
      },
      {
        type: "code",
        language: "html",
        code: `<ul>
  <li>list item</li>
  <li>list item</li>
  <li>list item</li>
  <li>list item</li>
  <li>list item</li>
</ul>`,
      },
      {
        type: "code",
        language: "css",
        code: `ul {
  list-style-type: square;
}`,
      },
      {
        type: "example",
        title: "Результат виконання коду",
        text: "Маркери списку зміняться на квадратні.",
      },
      {
        type: "note",
        text: "Значення square змінює тільки вигляд маркера, а текст пунктів списку залишається без змін.",
      },
      {
        type: "example",
        title: "Приклад списку",
        text: "watermelon\napple\norange\npear\ntangerine\npeach",
      },
      {
        type: "task",
        text: [
          "№1. Створіть список ul з назвами фруктів.",
          "№2. Змініть стандартні маркери на квадратні за допомогою list-style-type: square.",
          "№3. Додайте власні елементи до списку.",
        ],
      },
      {
        type: "hint",
        text: "Спробуйте також значення disc, circle та none, щоб порівняти різні види маркерів.",
      },
      {
        type: "answer",
        text: `ul {
  list-style-type: square;
}`,
      },
    ],
  },
  {
    id: "list-style-type-circle",
    title: "Маркери списків ul у вигляді кружків в CSS",
    description:
      "Вивчаємо значення circle властивості list-style-type для створення порожніх круглих маркерів у списках ul.",
    content: [
      {
        type: "heading",
        text: "Маркери списків ul у вигляді кружків в CSS",
      },
      {
        type: "paragraph",
        text: "За допомогою властивості list-style-type можна змінювати вигляд маркерів ненумерованого списку ul.",
      },
      {
        type: "paragraph",
        text: "Значення circle створює маркери у вигляді порожніх кружків.",
      },
      {
        type: "code",
        language: "html",
        code: `<ul>
  <li>list item</li>
  <li>list item</li>
  <li>list item</li>
  <li>list item</li>
  <li>list item</li>
</ul>`,
      },
      {
        type: "code",
        language: "css",
        code: `ul {
  list-style-type: circle;
}`,
      },
      {
        type: "example",
        title: "Результат виконання коду",
        text: "Маркери списку будуть відображатися у вигляді порожніх кружків.",
      },
      {
        type: "note",
        text: "Значення circle відрізняється від disc тим, що маркер не заповнений кольором всередині.",
      },
      {
        type: "example",
        title: "Приклад списку",
        text: "watermelon\napple\norange\npear\ntangerine\npeach",
      },
      {
        type: "list",
        items: [
          "disc — заповнений круглий маркер.",
          "circle — порожній круглий маркер.",
          "square — квадратний маркер.",
        ],
      },
      {
        type: "task",
        text: [
          "№1. Створіть список ul із назвами фруктів.",
          "№2. Встановіть для списку list-style-type: circle.",
          "№3. Порівняйте результат зі значеннями disc та square.",
        ],
      },
      {
        type: "hint",
        text: "Спробуйте змінювати значення list-style-type та спостерігайте, як змінюються маркери списку.",
      },
      {
        type: "answer",
        text: `ul {
  list-style-type: circle;
}`,
      },
    ],
  },
  {
    id: "list-style-type-disc",
    title: "Робота з маркерами списків ul в CSS",
    description:
      "Вивчаємо значення disc властивості list-style-type для створення стандартних заповнених круглих маркерів у списках ul.",
    content: [
      {
        type: "heading",
        text: "Робота з маркерами списків ul в CSS",
      },
      {
        type: "paragraph",
        text: "За допомогою властивості list-style-type можна керувати виглядом маркерів ненумерованого списку ul.",
      },
      {
        type: "paragraph",
        text: "Якщо встановити значення disc, маркери списку будуть відображатися у вигляді заповнених кружків.",
      },
      {
        type: "paragraph",
        text: "Значення disc використовується у списках ul за замовчуванням.",
      },
      {
        type: "code",
        language: "html",
        code: `<ul>
  <li>list item</li>
  <li>list item</li>
  <li>list item</li>
  <li>list item</li>
  <li>list item</li>
</ul>`,
      },
      {
        type: "code",
        language: "css",
        code: `ul {
  list-style-type: disc;
}`,
      },
      {
        type: "example",
        title: "Результат виконання коду",
        text: "Маркери списку будуть відображатися у вигляді заповнених кругів.",
      },
      {
        type: "note",
        text: "Якщо не вказувати властивість list-style-type, браузер автоматично використовує значення disc для списків ul.",
      },
      {
        type: "list",
        items: [
          "disc — заповнений круглий маркер (за замовчуванням).",
          "circle — порожній круглий маркер.",
          "square — квадратний маркер.",
          "none — маркери відсутні.",
        ],
      },
      {
        type: "task",
        text: [
          "№1. Створіть список ul із п'яти елементів.",
          "№2. Встановіть для списку list-style-type: disc.",
          "№3. Порівняйте результат зі значеннями circle та square.",
        ],
      },
      {
        type: "hint",
        text: "Спробуйте видалити властивість list-style-type та перевірте, чи зміниться вигляд списку.",
      },
      {
        type: "answer",
        text: `ul {
  list-style-type: disc;
}`,
      },
    ],
  },
  {
    id: "list-style-type-none",
    title: "Відсутність маркерів списків ul в CSS",
    description:
      "Вивчаємо значення none властивості list-style-type для видалення маркерів у ненумерованих списках.",
    content: [
      {
        type: "heading",
        text: "Відсутність маркерів списків ul в CSS",
      },
      {
        type: "paragraph",
        text: "Іноді у списках потрібно прибрати стандартні маркери. Для цього використовується властивість list-style-type зі значенням none.",
      },
      {
        type: "paragraph",
        text: "Так часто роблять при створенні навігаційних меню на сайтах, коли маркери списку не потрібні.",
      },
      {
        type: "code",
        language: "html",
        code: `<ul>
  <li>list item</li>
  <li>list item</li>
  <li>list item</li>
  <li>list item</li>
  <li>list item</li>
</ul>`,
      },
      {
        type: "code",
        language: "css",
        code: `ul {
  list-style-type: none;
}`,
      },
      {
        type: "example",
        title: "Результат виконання коду",
        text: "Маркери списку будуть повністю приховані, а залишиться тільки текст елементів.",
      },
      {
        type: "note",
        text: "Значення none прибирає маркери, але сам список та його елементи залишаються.",
      },
      {
        type: "example",
        title: "Приклад списку без маркерів",
        text: "watermelon\napple\norange\npear\ntangerine\npeach",
      },
      {
        type: "task",
        text: [
          "№1. Створіть список ul із назвами фруктів.",
          "№2. Приберіть маркери за допомогою list-style-type: none.",
          "№3. Спробуйте використати такий список як основу для меню сайту.",
        ],
      },
      {
        type: "hint",
        text: "Для списків навігації часто використовують ul { list-style-type: none; }.",
      },
      {
        type: "answer",
        text: `ul {
  list-style-type: none;
}`,
      },
    ],
  },
  {
    id: "list-style-type-ol",
    title: "Робота з маркерами списків ol в CSS",
    description:
      "Вивчаємо, як змінювати вигляд маркерів нумерованих списків ol за допомогою властивості list-style-type.",
    content: [
      {
        type: "heading",
        text: "Робота з маркерами списків ol в CSS",
      },
      {
        type: "paragraph",
        text: "Маркерів нумерованого списку ol також можна змінювати за допомогою властивості list-style-type.",
      },
      {
        type: "paragraph",
        text: "На відміну від списку ul, де використовуються графічні маркери, список ol зазвичай має числову нумерацію.",
      },
      {
        type: "paragraph",
        text: "Властивість list-style-type дозволяє вибрати інший тип нумерації для елементів списку.",
      },
      {
        type: "code",
        language: "html",
        code: `<ol>
  <li>list item</li>
  <li>list item</li>
  <li>list item</li>
  <li>list item</li>
  <li>list item</li>
</ol>`,
      },
      {
        type: "code",
        language: "css",
        code: `ol {
  list-style-type: decimal;
}`,
      },
      {
        type: "example",
        title: "Результат виконання коду",
        text: "Елементи списку будуть мати стандартну числову нумерацію.",
      },
      {
        type: "note",
        text: "Для списків ol властивість list-style-type може змінювати цифри, літери та римські числа.",
      },
      {
        type: "list",
        items: [
          "decimal — звичайні числа (1, 2, 3).",
          "decimal-leading-zero — числа з нулем попереду (01, 02, 03).",
          "lower-alpha — маленькі латинські літери (a, b, c).",
          "upper-alpha — великі латинські літери (A, B, C).",
          "lower-roman — маленькі римські числа (i, ii, iii).",
          "upper-roman — великі римські числа (I, II, III).",
        ],
      },
      {
        type: "task",
        text: [
          "№1. Створіть список ol із п'яти елементів.",
          "№2. Змініть тип нумерації за допомогою list-style-type.",
          "№3. Спробуйте різні варіанти нумерації списку.",
        ],
      },
      {
        type: "hint",
        text: "У наступних уроках розглянемо окремо кожне значення list-style-type для списків ol.",
      },
    ],
  },
  {
    id: "list-style-type-lower-roman",
    title: "Малі римські цифри для списків ol в CSS",
    description:
      "Вивчаємо значення lower-roman властивості list-style-type для створення нумерації списку ol маленькими римськими цифрами.",
    content: [
      {
        type: "heading",
        text: "Малі римські цифри для списків ol в CSS",
      },
      {
        type: "paragraph",
        text: "За допомогою властивості list-style-type можна змінювати вигляд нумерації у списках ol.",
      },
      {
        type: "paragraph",
        text: "Якщо встановити значення lower-roman, маркерами списку стануть маленькі римські цифри.",
      },
      {
        type: "code",
        language: "html",
        code: `<ol>
  <li>list item</li>
  <li>list item</li>
  <li>list item</li>
  <li>list item</li>
  <li>list item</li>
</ol>`,
      },
      {
        type: "code",
        language: "css",
        code: `ol {
  list-style-type: lower-roman;
}`,
      },
      {
        type: "example",
        title: "Результат виконання коду",
        text: "Елементи списку будуть нумеруватися маленькими римськими цифрами: i, ii, iii, iv, v.",
      },
      {
        type: "note",
        text: "Значення lower-roman часто використовують у документах, змістах та навчальних матеріалах.",
      },
      {
        type: "list",
        items: [
          "lower-roman — маленькі римські цифри (i, ii, iii).",
          "upper-roman — великі римські цифри (I, II, III).",
          "decimal — звичайні числа (1, 2, 3).",
        ],
      },
      {
        type: "task",
        text: [
          "№1. Створіть нумерований список ol із п'яти пунктів.",
          "№2. Змініть стандартну нумерацію на маленькі римські цифри.",
          "№3. Порівняйте результат зі значенням upper-roman.",
        ],
      },
      {
        type: "hint",
        text: "Для списків ol використовуйте ті самі властивості, що й для ul, але значення list-style-type змінює саме спосіб нумерації.",
      },
      {
        type: "answer",
        text: `ol {
  list-style-type: lower-roman;
}`,
      },
    ],
  },
  {
    id: "list-style-type-upper-roman",
    title: "Великі римські цифри для списків ol в CSS",
    description:
      "Вивчаємо значення upper-roman властивості list-style-type для створення нумерації списку ol великими римськими цифрами.",
    content: [
      {
        type: "heading",
        text: "Великі римські цифри для списків ol в CSS",
      },
      {
        type: "paragraph",
        text: "Для зміни стандартної нумерації списку ol можна використовувати властивість list-style-type.",
      },
      {
        type: "paragraph",
        text: "Якщо встановити значення upper-roman, маркерами списку стануть великі римські цифри.",
      },
      {
        type: "code",
        language: "html",
        code: `<ol>
  <li>list item</li>
  <li>list item</li>
  <li>list item</li>
  <li>list item</li>
  <li>list item</li>
</ol>`,
      },
      {
        type: "code",
        language: "css",
        code: `ol {
  list-style-type: upper-roman;
}`,
      },
      {
        type: "example",
        title: "Результат виконання коду",
        text: "Елементи списку будуть нумеруватися великими римськими цифрами: I, II, III, IV, V.",
      },
      {
        type: "note",
        text: "Великі римські цифри часто використовують для оформлення розділів, глав та великих структурованих списків.",
      },
      {
        type: "list",
        items: [
          "upper-roman — великі римські цифри (I, II, III).",
          "lower-roman — маленькі римські цифри (i, ii, iii).",
          "decimal — звичайні числа (1, 2, 3).",
        ],
      },
      {
        type: "task",
        text: [
          "№1. Створіть список ol із п'яти пунктів.",
          "№2. Встановіть для списку list-style-type: upper-roman.",
          "№3. Порівняйте вигляд нумерації з lower-roman.",
        ],
      },
      {
        type: "hint",
        text: "Різниця між upper-roman та lower-roman тільки у регістрі римських цифр.",
      },
      {
        type: "answer",
        text: `ol {
  list-style-type: upper-roman;
}`,
      },
    ],
  },
  {
    id: "list-style-type-lower-alpha",
    title: "Малі латинські літери для списків ol в CSS",
    description:
      "Вивчаємо значення lower-alpha властивості list-style-type для створення нумерації списку ol маленькими латинськими літерами.",
    content: [
      {
        type: "heading",
        text: "Малі латинські літери для списків ol в CSS",
      },
      {
        type: "paragraph",
        text: "Властивість list-style-type дозволяє змінювати вигляд нумерації у списках ol.",
      },
      {
        type: "paragraph",
        text: "Значення lower-alpha створює нумерацію елементів списку маленькими латинськими літерами.",
      },
      {
        type: "code",
        language: "html",
        code: `<ol>
  <li>list item</li>
  <li>list item</li>
  <li>list item</li>
  <li>list item</li>
  <li>list item</li>
</ol>`,
      },
      {
        type: "code",
        language: "css",
        code: `ol {
  list-style-type: lower-alpha;
}`,
      },
      {
        type: "example",
        title: "Результат виконання коду",
        text: "Елементи списку будуть нумеруватися маленькими латинськими літерами: a, b, c, d, e.",
      },
      {
        type: "note",
        text: "Нумерація lower-alpha часто використовується для підпунктів у документах та навчальних матеріалах.",
      },
      {
        type: "list",
        items: [
          "lower-alpha — маленькі латинські літери (a, b, c).",
          "upper-alpha — великі латинські літери (A, B, C).",
          "decimal — звичайні числа (1, 2, 3).",
          "roman — римські цифри (I, II, III).",
        ],
      },
      {
        type: "task",
        text: [
          "№1. Створіть список ol із п'яти елементів.",
          "№2. Змініть стандартну нумерацію на маленькі латинські літери.",
          "№3. Порівняйте результат із upper-alpha.",
        ],
      },
      {
        type: "hint",
        text: "Для зміни типу нумерації достатньо змінити тільки значення властивості list-style-type.",
      },
      {
        type: "answer",
        text: `ol {
  list-style-type: lower-alpha;
}`,
      },
    ],
  },
  {
    id: "list-style-type-upper-alpha",
    title: "Великі латинські літери для списків ol в CSS",
    description:
      "Вивчаємо значення upper-alpha властивості list-style-type для створення нумерації списку ol великими латинськими літерами.",
    content: [
      {
        type: "heading",
        text: "Великі латинські літери для списків ol в CSS",
      },
      {
        type: "paragraph",
        text: "За допомогою властивості list-style-type можна змінити стандартну нумерацію списку ol.",
      },
      {
        type: "paragraph",
        text: "Якщо встановити значення upper-alpha, нумерація списку буде виконуватися великими латинськими літерами.",
      },
      {
        type: "code",
        language: "html",
        code: `<ol>
  <li>list item</li>
  <li>list item</li>
  <li>list item</li>
  <li>list item</li>
  <li>list item</li>
</ol>`,
      },
      {
        type: "code",
        language: "css",
        code: `ol {
  list-style-type: upper-alpha;
}`,
      },
      {
        type: "example",
        title: "Результат виконання коду",
        text: "Елементи списку будуть нумеруватися великими латинськими літерами: A, B, C, D, E.",
      },
      {
        type: "note",
        text: "upper-alpha відрізняється від lower-alpha тільки регістром літер.",
      },
      {
        type: "list",
        items: [
          "upper-alpha — великі латинські літери (A, B, C).",
          "lower-alpha — маленькі латинські літери (a, b, c).",
          "upper-roman — великі римські цифри (I, II, III).",
          "lower-roman — маленькі римські цифри (i, ii, iii).",
        ],
      },
      {
        type: "task",
        text: [
          "№1. Створіть список ol із п'яти пунктів.",
          "№2. Змініть нумерацію списку на великі латинські літери.",
          "№3. Порівняйте результат з lower-alpha.",
        ],
      },
      {
        type: "hint",
        text: "Для зміни вигляду нумерації достатньо змінити значення list-style-type.",
      },
      {
        type: "answer",
        text: `ol {
  list-style-type: upper-alpha;
}`,
      },
    ],
  },
  {
    id: "list-style-type-lower-greek",
    title: "Малі грецькі літери для списків ol в CSS",
    description:
      "Вивчаємо значення lower-greek властивості list-style-type для створення нумерації списку ol маленькими грецькими літерами.",
    content: [
      {
        type: "heading",
        text: "Малі грецькі літери для списків ol в CSS",
      },
      {
        type: "paragraph",
        text: "Властивість list-style-type дозволяє змінювати вигляд нумерації елементів списку ol.",
      },
      {
        type: "paragraph",
        text: "Значення lower-greek задає нумерацію списку маленькими грецькими літерами.",
      },
      {
        type: "code",
        language: "html",
        code: `<ol>
  <li>list item</li>
  <li>list item</li>
  <li>list item</li>
  <li>list item</li>
  <li>list item</li>
</ol>`,
      },
      {
        type: "code",
        language: "css",
        code: `ol {
  list-style-type: lower-greek;
}`,
      },
      {
        type: "example",
        title: "Результат виконання коду",
        text: "Елементи списку будуть нумеруватися маленькими грецькими літерами: α, β, γ, δ, ε.",
      },
      {
        type: "note",
        text: "Значення lower-greek використовується рідше, але може бути корисним для математичних, наукових та технічних списків.",
      },
      {
        type: "list",
        items: [
          "lower-greek — маленькі грецькі літери (α, β, γ).",
          "lower-alpha — маленькі латинські літери (a, b, c).",
          "upper-alpha — великі латинські літери (A, B, C).",
          "upper-roman — великі римські цифри (I, II, III).",
        ],
      },
      {
        type: "task",
        text: [
          "№1. Створіть список ol із п'яти елементів.",
          "№2. Встановіть для списку list-style-type: lower-greek.",
          "№3. Порівняйте грецьку нумерацію з латинськими літерами.",
        ],
      },
      {
        type: "hint",
        text: "Не всі браузери можуть однаково відображати рідкісні типи нумерації, тому перевіряйте результат у різних браузерах.",
      },
      {
        type: "answer",
        text: `ol {
  list-style-type: lower-greek;
}`,
      },
    ],
  },
  {
    id: "list-style-type-decimal-leading-zero",
    title: "Числа з нулем попереду для списків ol в CSS",
    description:
      "Вивчаємо значення decimal-leading-zero властивості list-style-type для створення нумерації списку ol з нулем перед однозначними числами.",
    content: [
      {
        type: "heading",
        text: "Числа з нулем попереду для списків ol в CSS",
      },
      {
        type: "paragraph",
        text: "Властивість list-style-type дозволяє змінювати формат нумерації у списках ol.",
      },
      {
        type: "paragraph",
        text: "Значення decimal-leading-zero створює нумерацію у вигляді чисел із нулем попереду для значень менше десяти.",
      },
      {
        type: "paragraph",
        text: "Наприклад, замість 1, 2, 3 список буде показувати 01, 02, 03.",
      },
      {
        type: "code",
        language: "html",
        code: `<ol>
  <li>list item</li>
  <li>list item</li>
  <li>list item</li>
  <li>list item</li>
  <li>list item</li>
</ol>`,
      },
      {
        type: "code",
        language: "css",
        code: `ol {
  list-style-type: decimal-leading-zero;
}`,
      },
      {
        type: "example",
        title: "Результат виконання коду",
        text: "Елементи списку будуть мати нумерацію: 01, 02, 03, 04, 05.",
      },
      {
        type: "note",
        text: "Такий формат нумерації часто використовують у змістах, каталогах, списках завдань та документах.",
      },
      {
        type: "list",
        items: [
          "decimal — звичайні числа (1, 2, 3).",
          "decimal-leading-zero — числа з нулем попереду (01, 02, 03).",
          "lower-alpha — маленькі латинські літери (a, b, c).",
          "upper-roman — великі римські цифри (I, II, III).",
        ],
      },
      {
        type: "task",
        text: [
          "№1. Створіть список ol із десяти пунктів.",
          "№2. Застосуйте list-style-type: decimal-leading-zero.",
          "№3. Порівняйте результат із нумерацією decimal.",
        ],
      },
      {
        type: "hint",
        text: "Нуль додається тільки перед однозначними числами. Числа 10, 11, 12 і далі залишаються без змін.",
      },
      {
        type: "answer",
        text: `ol {
  list-style-type: decimal-leading-zero;
}`,
      },
    ],
  },
];
