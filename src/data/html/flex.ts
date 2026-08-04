import type { Lesson } from "../types";

export const flex: Lesson[] = [
  {
    id: "flex-direction-css",
    title: "Розміщення flex-елементів у ряд або колонку в CSS",
    description:
      "Вивчаємо властивість flex-direction, яка керує напрямком розташування flex-елементів у контейнері.",
    content: [
      {
        type: "heading",
        text: "Розміщення flex-елементів у ряд або колонку в CSS",
      },
      {
        type: "paragraph",
        text: "Властивість flex-direction визначає напрямок, у якому будуть розташовані flex-елементи всередині батьківського контейнера.",
      },
      {
        type: "paragraph",
        text: "За замовчуванням flex-контейнер використовує значення row, тому дочірні елементи розташовуються в один ряд зліва направо.",
      },
      {
        type: "example",
        title: "Створення flex-контейнера",
        text: "Для того щоб елементи стали flex-елементами, батьківському блоку потрібно задати display: flex.",
      },
      {
        type: "code",
        language: "html",
        code: `<div class="parent">
  <div class="child">1</div>
  <div class="child">2</div>
  <div class="child">3</div>
</div>`,
      },
      {
        type: "code",
        language: "css",
        code: `.parent {
  display: flex;
  border: 1px solid red;
}

.child {
  width: 50px;
  height: 50px;
  border: 1px solid green;
}`,
      },
      {
        type: "example",
        title: "Значення flex-direction: row",
        text: "Значення row є стандартним. Flex-елементи розташовуються горизонтально в один ряд.",
      },
      {
        type: "code",
        language: "css",
        code: `.parent {
  display: flex;
  flex-direction: row;
}`,
      },
      {
        type: "note",
        text: "Якщо flex-direction не вказати, браузер автоматично використовує значення row.",
      },
      {
        type: "list",
        items: [
          "row — елементи розташовуються в ряд зліва направо.",
          "column — елементи розташовуються зверху вниз.",
          "row-reverse — елементи розташовуються в ряд у зворотному порядку.",
          "column-reverse — елементи розташовуються знизу вверх у зворотному порядку.",
        ],
      },
      {
        type: "example",
        title: "Розміщення елементів вертикально",
        text: "Щоб розташувати flex-елементи один під одним, використовується значення column.",
      },
      {
        type: "code",
        language: "css",
        code: `.parent {
  display: flex;
  flex-direction: column;
}`,
      },
      {
        type: "task",
        text: [
          "№1. Створіть flex-контейнер із трьома блоками.",
          "№2. Перевірте стандартне значення flex-direction.",
          "№3. Змініть напрямок елементів за допомогою column.",
          "№4. Спробуйте значення row-reverse та column-reverse.",
        ],
      },
      {
        type: "hint",
        text: "Використовуйте flex-direction, коли потрібно змінити напрямок розташування елементів без зміни HTML-коду.",
      },
      {
        type: "answer",
        text: `.parent {
  display: flex;
  flex-direction: column;
}`,
      },
    ],
  },
  {
    id: "flex-direction-row-reverse-css",
    title: "Розміщення flex-елементів у перевернутому ряду в CSS",
    description:
      "Вивчаємо значення row-reverse властивості flex-direction, яке змінює напрямок розташування flex-елементів та перевертає їх порядок.",
    content: [
      {
        type: "heading",
        text: "Розміщення flex-елементів у перевернутому ряду в CSS",
      },
      {
        type: "paragraph",
        text: "Властивість flex-direction визначає напрямок, у якому будуть розташовані flex-елементи всередині контейнера.",
      },
      {
        type: "paragraph",
        text: "За замовчуванням flex-direction має значення row, тому елементи розташовуються у звичайний ряд зліва направо.",
      },
      {
        type: "paragraph",
        text: "Значення row-reverse змінює напрямок розташування елементів. Вони залишаються в одному рядку, але порядок елементів стає зворотним.",
      },
      {
        type: "example",
        title: "Використання flex-direction: row-reverse",
        text: "Перший елемент у HTML-коді стане останнім у рядку та буде розташований праворуч.",
      },
      {
        type: "code",
        language: "html",
        code: `<div class="parent">
  <div class="child">1</div>
  <div class="child">2</div>
  <div class="child">3</div>
</div>`,
      },
      {
        type: "code",
        language: "css",
        code: `.parent {
  display: flex;
  flex-direction: row-reverse;
  width: 300px;
  height: 200px;
  border: 1px solid red;
}

.child {
  width: 50px;
  height: 50px;
  border: 1px solid green;
}`,
      },
      {
        type: "example",
        title: "Результат виконання коду",
        text: "Елементи будуть розташовані справа наліво: блок 3 буде ліворуч, а блок 1 — праворуч.",
      },
      {
        type: "note",
        text: "row-reverse не змінює HTML-порядок елементів. Він тільки змінює їх візуальне розташування через flex-контейнер.",
      },
      {
        type: "list",
        items: [
          "flex-direction: row — стандартний напрямок зліва направо.",
          "flex-direction: row-reverse — напрямок справа наліво.",
          "Перший елемент HTML стає крайнім праворуч.",
          "Часто використовується для зміни порядку блоків без зміни HTML.",
        ],
      },
      {
        type: "example",
        title: "Порівняння row та row-reverse",
        text: `row:
1 → 2 → 3

row-reverse:
3 → 2 → 1`,
      },
      {
        type: "task",
        text: [
          "№1. Створіть flex-контейнер із трьома дочірніми блоками.",
          "№2. Додайте властивість flex-direction: row-reverse.",
          "№3. Перевірте, як змінився порядок елементів.",
        ],
      },
      {
        type: "hint",
        text: "Значення row-reverse змінює тільки напрямок відображення flex-елементів, але не змінює їх порядок у HTML.",
      },
      {
        type: "answer",
        text: `.parent {
  display: flex;
  flex-direction: row-reverse;
}`,
      },
    ],
  },
  {
    id: "flex-direction-column-css",
    title: "Розміщення flex-елементів у колонку в CSS",
    description:
      "Вивчаємо значення column властивості flex-direction для розміщення flex-елементів вертикально.",
    content: [
      {
        type: "heading",
        text: "Розміщення flex-елементів у колонку в CSS",
      },
      {
        type: "paragraph",
        text: "Властивість flex-direction керує напрямком розташування flex-елементів усередині контейнера.",
      },
      {
        type: "paragraph",
        text: "За замовчуванням flex-елементи розташовуються в ряд завдяки значенню row.",
      },
      {
        type: "paragraph",
        text: "Якщо встановити значення column, елементи будуть розташовані вертикально один під одним.",
      },
      {
        type: "example",
        title: "Використання flex-direction: column",
        text: "Flex-контейнер розміщує дочірні елементи зверху вниз у вигляді колонки.",
      },
      {
        type: "code",
        language: "html",
        code: `<div class="parent">
  <div class="child">1</div>
  <div class="child">2</div>
  <div class="child">3</div>
</div>`,
      },
      {
        type: "code",
        language: "css",
        code: `.parent {
  display: flex;
  flex-direction: column;
  width: 300px;
  height: 200px;
  border: 1px solid red;
}

.child {
  width: 50px;
  height: 50px;
  border: 1px solid green;
}`,
      },
      {
        type: "example",
        title: "Результат виконання коду",
        text: "Три flex-елементи будуть розташовані вертикально один під одним.",
      },
      {
        type: "note",
        text: "Значення column змінює головну вісь flex-контейнера з горизонтальної на вертикальну.",
      },
      {
        type: "list",
        items: [
          "row — елементи розташовані горизонтально зліва направо.",
          "row-reverse — елементи розташовані горизонтально справа наліво.",
          "column — елементи розташовані вертикально зверху вниз.",
          "column-reverse — елементи розташовані вертикально знизу вверх.",
        ],
      },
      {
        type: "task",
        text: [
          "№1. Створіть flex-контейнер із трьома блоками.",
          "№2. Додайте властивість flex-direction зі значенням column.",
          "№3. Змініть значення на row та порівняйте результат.",
        ],
      },
      {
        type: "hint",
        text: "Для вертикального розташування flex-елементів використовуйте flex-direction: column.",
      },
      {
        type: "answer",
        text: `.parent {
  display: flex;
  flex-direction: column;
}`,
      },
    ],
  },
  {
    id: "flex-direction-column-reverse-css",
    title: "Перевертання колонки з flex-елементами в CSS",
    description:
      "Вивчаємо значення column-reverse властивості flex-direction для створення перевернутої колонки flex-елементів.",
    content: [
      {
        type: "heading",
        text: "Перевертання колонки з flex-елементами в CSS",
      },
      {
        type: "paragraph",
        text: "Властивість flex-direction керує напрямком розташування flex-елементів у контейнері.",
      },
      {
        type: "paragraph",
        text: "Якщо використати значення column, елементи розташовуються зверху вниз у вигляді колонки.",
      },
      {
        type: "paragraph",
        text: "Значення column-reverse працює навпаки: елементи розташовуються в колонку знизу вгору.",
      },
      {
        type: "example",
        title: "Використання flex-direction: column-reverse",
        text: "Flex-елементи будуть притиснуті до нижнього краю контейнера, а порядок елементів буде перевернутий.",
      },
      {
        type: "code",
        language: "html",
        code: `<div class="parent">
  <div class="child">1</div>
  <div class="child">2</div>
  <div class="child">3</div>
</div>`,
      },
      {
        type: "code",
        language: "css",
        code: `.parent {
  display: flex;
  flex-direction: column-reverse;
  width: 300px;
  height: 200px;
  border: 1px solid red;
}

.child {
  width: 50px;
  height: 50px;
  border: 1px solid green;
}`,
      },
      {
        type: "example",
        title: "Результат виконання коду",
        text: "Блоки будуть розташовані вертикально, але порядок буде змінений: перший елемент стане нижнім, а третій — верхнім.",
      },
      {
        type: "note",
        text: "column-reverse не змінює HTML-код. Він лише змінює візуальний порядок відображення flex-елементів.",
      },
      {
        type: "list",
        items: [
          "flex-direction: column створює колонку зверху вниз.",
          "flex-direction: column-reverse створює колонку знизу вверх.",
          "Перший елемент у HTML при column-reverse буде останнім на екрані.",
          "Це корисно для створення перевернутих списків, чатів та панелей.",
        ],
      },
      {
        type: "example",
        title: "Порівняння напрямків flex-direction",
        text: `row:
елементи розташовані зліва направо.

row-reverse:
елементи розташовані справа наліво.

column:
елементи розташовані зверху вниз.

column-reverse:
елементи розташовані знизу вверх.`,
      },
      {
        type: "code",
        language: "css",
        code: `.parent {
  display: flex;
  flex-direction: column-reverse;
}`,
      },
      {
        type: "task",
        text: [
          "№1. Створіть flex-контейнер із трьома дочірніми блоками.",
          "№2. Додайте властивість flex-direction зі значенням column-reverse.",
          "№3. Перевірте, як змінився порядок елементів.",
        ],
      },
      {
        type: "hint",
        text: "Використовуйте column-reverse, якщо потрібно розташувати flex-елементи у колонку, але почати відображення знизу.",
      },
      {
        type: "answer",
        text: `.parent {
  display: flex;
  flex-direction: column-reverse;
}`,
      },
    ],
  },
  {
    id: "flex-main-cross-axis-css",
    title: "Головна та поперечна осі у flex-блоках у CSS",
    description:
      "Вивчаємо головну та поперечну осі у Flexbox, напрямки осей та залежність від властивості flex-direction.",
    content: [
      {
        type: "heading",
        text: "Головна та поперечна осі у flex-блоках у CSS",
      },
      {
        type: "paragraph",
        text: "Під час роботи з Flexbox використовуються два важливі поняття: головна вісь (main axis) та поперечна вісь (cross axis). Розуміння цих осей необхідне для правильного вирівнювання flex-елементів.",
      },
      {
        type: "paragraph",
        text: "Головна вісь визначає основний напрямок розташування flex-елементів. Вона залежить від властивості flex-direction.",
      },
      {
        type: "paragraph",
        text: "Поперечна вісь завжди розташована перпендикулярно до головної осі.",
      },
      {
        type: "example",
        title: "Напрямок головної осі",
        text: "Властивість flex-direction визначає напрямок головної осі.",
      },
      {
        type: "list",
        items: [
          "row — головна вісь направлена зліва направо.",
          "row-reverse — головна вісь направлена справа наліво.",
          "column — головна вісь направлена зверху вниз.",
          "column-reverse — головна вісь направлена знизу вверх.",
        ],
      },
      {
        type: "code",
        language: "css",
        code: `.parent {
  display: flex;
  flex-direction: row;
}`,
      },
      {
        type: "paragraph",
        text: "При значенні row елементи розташовуються в ряд. Головна вісь йде горизонтально зліва направо, а поперечна — вертикально зверху вниз.",
      },
      {
        type: "code",
        language: "css",
        code: `.parent {
  display: flex;
  flex-direction: column;
}`,
      },
      {
        type: "paragraph",
        text: "При значенні column головна вісь стає вертикальною. Елементи розташовуються зверху вниз, а поперечна вісь направлена зліва направо.",
      },
      {
        type: "note",
        text: "Поперечна вісь не може бути направлена справа наліво або знизу вверх. Її напрямок залежить від головної осі.",
      },
      {
        type: "example",
        title: "Залежність осей від flex-direction",
        text: `flex-direction: row
Головна вісь: зліва направо.
Поперечна вісь: зверху вниз.

flex-direction: row-reverse
Головна вісь: справа наліво.
Поперечна вісь: зверху вниз.

flex-direction: column
Головна вісь: зверху вниз.
Поперечна вісь: зліва направо.

flex-direction: column-reverse
Головна вісь: знизу вверх.
Поперечна вісь: зліва направо.`,
      },
      {
        type: "task",
        text: [
          "№1. Якщо головна вісь горизонтальна, куди направлена поперечна вісь?",
          "№2. Якщо головна вісь вертикальна, куди направлена поперечна вісь?",
          "№3. Куди може бути направлена головна вісь, якщо поперечна направлена вправо?",
          "№4. Чи може поперечна вісь бути направлена справа наліво?",
          "№5. Чи може поперечна вісь бути направлена знизу вверх?",
          "№6. Визначте напрямки осей для flex-direction: row.",
          "№7. Визначте напрямки осей для flex-direction: column.",
          "№8. Визначте напрямки осей для flex-direction: row-reverse.",
          "№9. Визначте напрямки осей для flex-direction: column-reverse.",
        ],
      },
      {
        type: "hint",
        text: "Запам'ятайте правило: flex-direction задає головну вісь, а поперечна вісь завжди перпендикулярна до неї.",
      },
      {
        type: "answer",
        text: `1. Горизонтальна головна вісь → поперечна зверху вниз.

2. Вертикальна головна вісь → поперечна зліва направо.

3. Якщо поперечна направлена вправо, головна може бути зверху вниз або знизу вверх.

4. Ні, поперечна вісь не може бути справа наліво.

5. Ні, поперечна вісь не може бути знизу вверх.

6. row:
Головна вісь — зліва направо.
Поперечна — зверху вниз.

7. column:
Головна вісь — зверху вниз.
Поперечна — зліва направо.

8. row-reverse:
Головна вісь — справа наліво.
Поперечна — зверху вниз.

9. column-reverse:
Головна вісь — знизу вверх.
Поперечна — зліва направо.`,
      },
    ],
  },
  {
    id: "flex-justify-content-flex-start-end-css",
    title: "Вирівнювання flex-елементів по головній осі в CSS",
    description:
      "Вивчаємо властивість justify-content та значення flex-start і flex-end для вирівнювання flex-елементів по головній осі.",
    content: [
      {
        type: "heading",
        text: "Вирівнювання flex-елементів по головній осі в CSS",
      },
      {
        type: "paragraph",
        text: "Властивість justify-content використовується для вирівнювання flex-елементів по головній осі.",
      },
      {
        type: "paragraph",
        text: "Напрямок головної осі залежить від властивості flex-direction. Значення row направляє вісь зліва направо, row-reverse — справа наліво, column — зверху вниз, а column-reverse — знизу вверх.",
      },
      {
        type: "paragraph",
        text: "Значення flex-start притискає елементи до початку головної осі, а flex-end — до кінця головної осі.",
      },
      {
        type: "example",
        title: "Вирівнювання на початок осі",
        text: "При flex-direction: row головна вісь направлена зліва направо. Значення flex-start розміщує елементи біля лівого краю контейнера.",
      },
      {
        type: "code",
        language: "css",
        code: `.parent {
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
}`,
      },
      {
        type: "example",
        title: "Вирівнювання в кінець осі",
        text: "Значення flex-end переміщує елементи до кінця головної осі.",
      },
      {
        type: "code",
        language: "css",
        code: `.parent {
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
}`,
      },
      {
        type: "example",
        title: "Головна вісь справа наліво",
        text: "При використанні row-reverse початок головної осі знаходиться справа. Тому flex-start притискає елементи до правого краю.",
      },
      {
        type: "code",
        language: "css",
        code: `.parent {
  display: flex;
  flex-direction: row-reverse;
  justify-content: flex-start;
}`,
      },
      {
        type: "example",
        title: "Кінець осі при row-reverse",
        text: "При flex-direction: row-reverse значення flex-end розташовує елементи зліва.",
      },
      {
        type: "code",
        language: "css",
        code: `.parent {
  display: flex;
  flex-direction: row-reverse;
  justify-content: flex-end;
}`,
      },
      {
        type: "example",
        title: "Вертикальна головна вісь",
        text: "При flex-direction: column головна вісь направлена зверху вниз. Значення flex-start притискає елементи до верхнього краю.",
      },
      {
        type: "code",
        language: "css",
        code: `.parent {
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
}`,
      },
      {
        type: "code",
        language: "css",
        code: `.parent {
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
}`,
      },
      {
        type: "paragraph",
        text: "При flex-direction: column значення flex-end розташовує елементи біля нижнього краю контейнера.",
      },
      {
        type: "example",
        title: "Перевернута колонка",
        text: "При column-reverse головна вісь направлена знизу вверх. Елементи змінюють порядок, тому перший елемент буде внизу.",
      },
      {
        type: "code",
        language: "css",
        code: `.parent {
  display: flex;
  flex-direction: column-reverse;
  justify-content: flex-start;
}`,
      },
      {
        type: "paragraph",
        text: "У цьому випадку flex-start притискає елементи до початку головної осі — нижнього краю.",
      },
      {
        type: "code",
        language: "css",
        code: `.parent {
  display: flex;
  flex-direction: column-reverse;
  justify-content: flex-end;
}`,
      },
      {
        type: "note",
        text: "Запам'ятайте: justify-content працює не просто зліва або справа. Він працює відносно напрямку головної осі.",
      },
      {
        type: "list",
        items: [
          "flex-start — елементи на початку головної осі.",
          "flex-end — елементи в кінці головної осі.",
          "row — початок зліва, кінець справа.",
          "row-reverse — початок справа, кінець зліва.",
          "column — початок зверху, кінець знизу.",
          "column-reverse — початок знизу, кінець зверху.",
        ],
      },
      {
        type: "task",
        text: [
          "№1. Створіть flex-контейнер з трьома блоками.",
          "№2. Перевірте роботу justify-content: flex-start.",
          "№3. Перевірте роботу justify-content: flex-end.",
          "№4. Змініть flex-direction на row-reverse і порівняйте результат.",
          "№5. Змініть flex-direction на column та column-reverse.",
        ],
      },
      {
        type: "hint",
        text: "Спочатку визначте напрямок головної осі через flex-direction, а потім використовуйте justify-content для вирівнювання по цій осі.",
      },
      {
        type: "answer",
        text: `.parent {
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
}

.parent {
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
}`,
      },
    ],
  },
  {
    id: "flex-align-items-cross-axis-css",
    title: "Вирівнювання flex-блоків по поперечній осі в CSS",
    description:
      "Вивчаємо властивість align-items для вирівнювання flex-елементів по поперечній осі.",
    content: [
      {
        type: "heading",
        text: "Вирівнювання flex-блоків по поперечній осі в CSS",
      },
      {
        type: "paragraph",
        text: "Властивість align-items використовується для вирівнювання flex-елементів по поперечній осі.",
      },
      {
        type: "paragraph",
        text: "На відміну від justify-content, який працює з головною віссю, align-items працює з поперечною віссю.",
      },
      {
        type: "paragraph",
        text: "Значення flex-start притискає елементи до початку поперечної осі, а flex-end — до кінця поперечної осі.",
      },
      {
        type: "example",
        title: "Горизонтальна головна вісь",
        text: "При flex-direction: row головна вісь направлена зліва направо, а поперечна — зверху вниз.",
      },
      {
        type: "code",
        language: "css",
        code: `.parent {
  display: flex;
  flex-direction: row;

  justify-content: flex-start;
  align-items: flex-start;
}`,
      },
      {
        type: "paragraph",
        text: "У цьому випадку елементи знаходяться на початку обох осей: зліва та зверху.",
      },
      {
        type: "example",
        title: "Кінець поперечної осі",
        text: "Змінимо align-items на flex-end. Елементи перемістяться вниз контейнера.",
      },
      {
        type: "code",
        language: "css",
        code: `.parent {
  display: flex;
  flex-direction: row;

  justify-content: flex-start;
  align-items: flex-end;
}`,
      },
      {
        type: "example",
        title: "Вертикальна головна вісь",
        text: "При flex-direction: column головна вісь направлена зверху вниз, а поперечна — зліва направо.",
      },
      {
        type: "code",
        language: "css",
        code: `.parent {
  display: flex;
  flex-direction: column;

  justify-content: flex-start;
  align-items: flex-start;
}`,
      },
      {
        type: "paragraph",
        text: "При column значення align-items: flex-start притискає елементи до початку поперечної осі — лівого краю.",
      },
      {
        type: "example",
        title: "Кінець поперечної осі при column",
        text: "Значення align-items: flex-end переміщує елементи до правого краю контейнера.",
      },
      {
        type: "code",
        language: "css",
        code: `.parent {
  display: flex;
  flex-direction: column;

  justify-content: flex-start;
  align-items: flex-end;
}`,
      },
      {
        type: "example",
        title: "Кінець обох осей",
        text: "Можна одночасно вирівнювати елементи по головній та поперечній осі.",
      },
      {
        type: "code",
        language: "css",
        code: `.parent {
  display: flex;
  flex-direction: column;

  justify-content: flex-end;
  align-items: flex-end;
}`,
      },
      {
        type: "example",
        title: "Перевернута колонка",
        text: "При flex-direction: column-reverse головна вісь направлена знизу вверх. Поперечна вісь при цьому не змінює напрямок.",
      },
      {
        type: "code",
        language: "css",
        code: `.parent {
  display: flex;
  flex-direction: column-reverse;

  justify-content: flex-start;
  align-items: flex-start;
}`,
      },
      {
        type: "note",
        text: "Важливо: напрямок поперечної осі залежить від того, горизонтальна чи вертикальна головна вісь. При row вона йде зверху вниз, а при column — зліва направо.",
      },
      {
        type: "list",
        items: [
          "justify-content — вирівнювання по головній осі.",
          "align-items — вирівнювання по поперечній осі.",
          "flex-start — початок осі.",
          "flex-end — кінець осі.",
          "row → головна вісь горизонтальна, поперечна вертикальна.",
          "column → головна вісь вертикальна, поперечна горизонтальна.",
        ],
      },
      {
        type: "task",
        text: [
          "№1. Створіть flex-контейнер із трьома блоками.",
          "№2. Перевірте align-items: flex-start.",
          "№3. Перевірте align-items: flex-end.",
          "№4. Змініть flex-direction з row на column.",
          "№5. Спробуйте одночасно змінювати justify-content та align-items.",
        ],
      },
      {
        type: "hint",
        text: "Спочатку визначте напрямок головної осі через flex-direction. Після цього стане зрозуміло, куди працює align-items.",
      },
      {
        type: "answer",
        text: `.parent {
  display: flex;
  flex-direction: row;

  justify-content: flex-start;
  align-items: flex-end;
}`,
      },
    ],
  },
  {
    id: "flex-align-items-center-css",
    title: "Значення center властивості align-items у CSS",
    description:
      "Вивчаємо вирівнювання flex-елементів по центру поперечної осі за допомогою значення center властивості align-items.",
    content: [
      {
        type: "heading",
        text: "Значення center властивості align-items у CSS",
      },
      {
        type: "paragraph",
        text: "Значення center властивості align-items дозволяє розмістити flex-елементи по центру поперечної осі.",
      },
      {
        type: "paragraph",
        text: "Напрямок поперечної осі залежить від властивості flex-direction. Тому результат буде різним для row і column.",
      },
      {
        type: "example",
        title: "Центрування елементів по вертикалі",
        text: "При flex-direction: row головна вісь йде зліва направо, а поперечна — зверху вниз. Значення center розміщує елементи посередині по висоті контейнера.",
      },
      {
        type: "code",
        language: "css",
        code: `.parent {
  display: flex;
  flex-direction: row;
  align-items: center;
}`,
      },
      {
        type: "paragraph",
        text: "У цьому випадку flex-елементи залишаються в рядку, але переміщуються до центру поперечної осі.",
      },
      {
        type: "example",
        title: "Центрування при вертикальному напрямку",
        text: "Якщо головна вісь вертикальна, то поперечна вісь буде горизонтальною. Значення center вирівняє елементи по центру ширини контейнера.",
      },
      {
        type: "code",
        language: "css",
        code: `.parent {
  display: flex;
  flex-direction: column;
  align-items: center;
}`,
      },
      {
        type: "note",
        text: "align-items: center не центрує елементи по головній осі. Для головної осі використовується justify-content: center.",
      },
      {
        type: "example",
        title: "Центрування по двох осях",
        text: "Щоб розмістити елементи точно по центру контейнера, потрібно використовувати justify-content та align-items разом.",
      },
      {
        type: "code",
        language: "css",
        code: `.parent {
  display: flex;

  justify-content: center;
  align-items: center;
}`,
      },
      {
        type: "paragraph",
        text: "У такому випадку елементи будуть знаходитися в центрі контейнера незалежно від розміру вільного простору.",
      },
      {
        type: "list",
        items: [
          "align-items: center вирівнює елементи по центру поперечної осі.",
          "При flex-direction: row центр буде по вертикалі.",
          "При flex-direction: column центр буде по горизонталі.",
          "Для центрування по головній осі використовуйте justify-content.",
          "Для повного центрування використовуйте justify-content: center та align-items: center.",
        ],
      },
      {
        type: "task",
        text: [
          "№1. Створіть flex-контейнер із трьома блоками.",
          "№2. Додайте align-items: center.",
          "№3. Змініть flex-direction з row на column.",
          "№4. Додайте justify-content: center і отримайте повне центрування.",
        ],
      },
      {
        type: "hint",
        text: "Пам'ятайте: align-items працює тільки з поперечною віссю, а justify-content — з головною.",
      },
      {
        type: "answer",
        text: `.parent {
  display: flex;
  justify-content: center;
  align-items: center;
}`,
      },
    ],
  },
  {
    id: "flex-align-items-center-no-height-css",
    title: "Центрування без висоти блоків у CSS",
    description:
      "Розглядаємо роботу align-items: center без заданої висоти flex-елементів.",
    content: [
      {
        type: "heading",
        text: "Центрування без висоти блоків у CSS",
      },
      {
        type: "paragraph",
        text: "Властивість align-items: center працює навіть тоді, коли flex-елементам не задана фіксована висота.",
      },
      {
        type: "paragraph",
        text: "У цьому випадку висота кожного блоку формується його вмістом, але самі елементи все одно вирівнюються по центру поперечної осі.",
      },
      {
        type: "example",
        title: "Центрування блоків без height",
        text: "Створимо flex-контейнер без заданої висоти для дочірніх елементів.",
      },
      {
        type: "code",
        language: "html",
        code: `<div class="parent">
  <div class="child">
    Текст першого блоку
  </div>

  <div class="child">
    Текст другого блоку
  </div>
</div>`,
      },
      {
        type: "code",
        language: "css",
        code: `.parent {
  display: flex;
  align-items: center;

  height: 200px;
  border: 1px solid red;
}

.child {
  border: 1px solid green;
}`,
      },
      {
        type: "paragraph",
        text: "Дочірні блоки не мають властивості height, тому їхня висота залежить від кількості тексту всередині.",
      },
      {
        type: "paragraph",
        text: "Незважаючи на це, align-items: center розміщує їх по центру контейнера.",
      },
      {
        type: "note",
        text: "Для роботи align-items контейнер повинен мати вільний простір по поперечній осі. Якщо висота контейнера дорівнює висоті елементів, помітного переміщення не буде.",
      },
      {
        type: "example",
        title: "Висота формується автоматично",
        text: "Flex-елементи можуть мати різну кількість тексту, але будуть вирівняні відносно центру.",
      },
      {
        type: "code",
        language: "css",
        code: `.child:first-child {
  padding: 20px;
}

.child:last-child {
  padding: 40px;
}`,
      },
      {
        type: "list",
        items: [
          "align-items: center працює без заданої висоти дочірніх блоків.",
          "Висота flex-елемента визначається його вмістом.",
          "Центрування відбувається відносно поперечної осі.",
          "Для центрування по головній осі використовується justify-content.",
        ],
      },
      {
        type: "task",
        text: [
          "№1. Створіть flex-контейнер висотою 300px.",
          "№2. Додайте декілька блоків без height.",
          "№3. Використайте align-items: center.",
          "№4. Змініть кількість тексту всередині блоків і перевірте результат.",
        ],
      },
      {
        type: "hint",
        text: "Не обов'язково задавати height для flex-елементів. Вона може формуватися автоматично від контенту.",
      },
      {
        type: "answer",
        text: `.parent {
  display: flex;
  align-items: center;
}`,
      },
    ],
  },

  {
    id: "flex-align-items-stretch-css",
    title: "Значення stretch властивості align-items у CSS",
    description:
      "Вивчаємо значення stretch властивості align-items та особливості розтягування flex-елементів по поперечній осі.",
    content: [
      {
        type: "heading",
        text: "Значення stretch властивості align-items у CSS",
      },
      {
        type: "paragraph",
        text: "Властивість align-items за замовчуванням має значення stretch. Воно розтягує flex-елементи вздовж поперечної осі контейнера.",
      },
      {
        type: "paragraph",
        text: "Значення stretch працює тільки тоді, коли для елементів не заданий розмір у напрямку поперечної осі.",
      },
      {
        type: "paragraph",
        text: "Наприклад, якщо головна вісь направлена зліва направо, то поперечна вісь буде направлена зверху вниз. У такому випадку stretch буде розтягувати елементи по висоті.",
      },
      {
        type: "example",
        title: "Розтягування по висоті",
        text: "Flex-контейнер має висоту, а дочірні елементи не мають заданої height.",
      },
      {
        type: "code",
        language: "html",
        code: `<div class="parent">
  <div class="child">1</div>
  <div class="child">2</div>
  <div class="child">3</div>
</div>`,
      },
      {
        type: "code",
        language: "css",
        code: `.parent {
  display: flex;

  height: 200px;
  border: 1px solid red;
}

.child {
  width: 50px;
  border: 1px solid green;
}`,
      },
      {
        type: "paragraph",
        text: "Оскільки у блоків немає height, браузер автоматично розтягує їх на всю висоту контейнера.",
      },
      {
        type: "example",
        title: "Розтягування по ширині",
        text: "Якщо головна вісь вертикальна, то поперечна вісь буде направлена зліва направо.",
      },
      {
        type: "code",
        language: "css",
        code: `.parent {
  display: flex;
  flex-direction: column;

  width: 300px;
  height: 300px;

  border: 1px solid red;
}

.child {
  height: 50px;
  border: 1px solid green;
}`,
      },
      {
        type: "paragraph",
        text: "У цьому випадку елементи не мають заданої ширини, тому stretch розтягує їх на всю ширину контейнера.",
      },
      {
        type: "note",
        text: "Якщо задати елементам width або height у напрямку поперечної осі, значення stretch перестане працювати.",
      },
      {
        type: "example",
        title: "Коли stretch не працює",
        text: "Якщо задати висоту елементам при горизонтальному flex-напрямку, вони залишаться заданого розміру.",
      },
      {
        type: "code",
        language: "css",
        code: `.child {
  height: 50px;
  width: 50px;
}`,
      },
      {
        type: "list",
        items: [
          "align-items: stretch є значенням за замовчуванням.",
          "Елементи розтягуються по поперечній осі.",
          "Stretch працює тільки без заданого розміру по цій осі.",
          "Для відключення розтягування можна використовувати align-items: flex-start або center.",
        ],
      },
      {
        type: "task",
        text: [
          "№1. Створіть flex-контейнер висотою 300px.",
          "№2. Додайте декілька дочірніх блоків без height.",
          "№3. Перевірте роботу align-items: stretch.",
          "№4. Додайте height блокам і порівняйте результат.",
        ],
      },
      {
        type: "hint",
        text: "Якщо flex-елементи несподівано розтягуються — перевірте значення align-items. За замовчуванням воно дорівнює stretch.",
      },
      {
        type: "answer",
        text: `.parent {
  display: flex;
  align-items: stretch;
}`,
      },
    ],
  },
  {
    id: "flex-align-axes-practice-css",
    title: "Практика на вирівнювання по осях у CSS",
    description:
      "Практикуємо вирівнювання flex-елементів по головній та поперечній осях за допомогою justify-content та align-items.",
    content: [
      {
        type: "heading",
        text: "Практика на вирівнювання по осях у CSS",
      },

      {
        type: "paragraph",
        text: "У flex-контейнерах є дві осі: головна та поперечна. Властивість justify-content відповідає за вирівнювання по головній осі, а align-items — по поперечній.",
      },

      {
        type: "example",
        title: "Базовий flex-контейнер",
        text: "Створимо контейнер із трьома елементами та будемо змінювати напрямок осей.",
      },

      {
        type: "code",
        language: "html",
        code: `<div class="parent">
  <div class="child">1</div>
  <div class="child">2</div>
  <div class="child">3</div>
</div>`,
      },

      {
        type: "code",
        language: "css",
        code: `.parent {
  display: flex;
  width: 400px;
  height: 300px;
  border: 2px solid red;
}

.child {
  width: 60px;
  height: 60px;
  border: 2px solid green;
}`,
      },

      {
        type: "heading",
        text: "Вирівнювання по головній осі",
      },

      {
        type: "paragraph",
        text: "За горизонтального напрямку row головна вісь іде зліва направо. За неї відповідає justify-content.",
      },

      {
        type: "code",
        language: "css",
        code: `.parent {
  display: flex;
  justify-content: center;
}`,
      },

      {
        type: "list",
        items: [
          "flex-start — елементи на початку осі.",
          "flex-end — елементи в кінці осі.",
          "center — елементи по центру.",
          "space-between — однакові проміжки між елементами.",
          "space-evenly — однакові проміжки між елементами та краями.",
        ],
      },

      {
        type: "heading",
        text: "Вирівнювання по поперечній осі",
      },

      {
        type: "paragraph",
        text: "Для вирівнювання по другій осі використовується властивість align-items.",
      },

      {
        type: "code",
        language: "css",
        code: `.parent {
  display: flex;
  align-items: center;
}`,
      },

      {
        type: "example",
        title: "Центрування елементів по двох осях",
        text: "Найчастіше для повного центрування використовують одночасно justify-content та align-items.",
      },

      {
        type: "code",
        language: "css",
        code: `.parent {
  display: flex;
  justify-content: center;
  align-items: center;
}`,
      },

      {
        type: "note",
        text: "Пам'ятайте: justify-content працює по головній осі, а align-items — по поперечній. Напрямок осей змінює властивість flex-direction.",
      },

      {
        type: "heading",
        text: "Практичні завдання",
      },

      {
        type: "task",
        text: [
          "№1. Створіть flex-контейнер із трьома блоками.",
          "№2. Вирівняйте блоки по центру за допомогою justify-content.",
          "№3. Вирівняйте блоки по вертикалі за допомогою align-items.",
          "№4. Змініть flex-direction на column та перевірте, як зміняться осі.",
        ],
      },

      {
        type: "hint",
        text: "Якщо елементи не стають у потрібне місце — спочатку визначте напрямок головної осі через flex-direction.",
      },

      {
        type: "answer",
        text: `.parent {
  display: flex;
  justify-content: center;
  align-items: center;
}`,
      },
    ],
  },
  {
    id: "flex-align-self-css",
    title: "Вирівнювання окремого flex-елемента в CSS",
    description:
      "Вивчаємо властивість align-self, яка дозволяє змінювати вирівнювання окремого flex-елемента незалежно від інших елементів.",

    content: [
      {
        type: "heading",
        text: "Вирівнювання окремого flex-елемента в CSS",
      },

      {
        type: "paragraph",
        text: "Раніше ми використовували властивість align-items для вирівнювання всіх flex-елементів у контейнері. Властивість align-self працює інакше — вона дозволяє налаштувати вирівнювання тільки одного конкретного елемента.",
      },

      {
        type: "paragraph",
        text: "align-self працює по поперечній осі та перевизначає значення align-items для вибраного елемента.",
      },

      {
        type: "example",
        title: "Базовий flex-контейнер",
        text: "Створимо п'ять блоків. Всі елементи будуть вирівняні по центру, але другий елемент отримає власне вирівнювання.",
      },

      {
        type: "code",
        language: "html",
        code: `<div class="parent">
  <div class="child">1</div>
  <div class="child elem">2</div>
  <div class="child">3</div>
  <div class="child">4</div>
  <div class="child">5</div>
</div>`,
      },

      {
        type: "code",
        language: "css",
        code: `.parent {
  display: flex;
  align-items: center;
  width: 300px;
  height: 200px;
  border: 1px solid red;
}

.child {
  width: 50px;
  height: 50px;
  border: 1px solid green;
}

.elem {
  align-self: flex-start;
}`,
      },

      {
        type: "example",
        title: "Як працює align-self",
        text: "Батьківський контейнер вирівнює всі елементи по центру через align-items: center. Але другий елемент має власне правило align-self: flex-start, тому він притискається до верхнього краю.",
      },

      {
        type: "list",
        items: [
          "auto — використовує значення align-items батьківського контейнера.",
          "flex-start — притискає елемент до початку поперечної осі.",
          "flex-end — притискає елемент до кінця поперечної осі.",
          "center — розташовує елемент по центру.",
          "stretch — розтягує елемент по поперечній осі.",
        ],
      },

      {
        type: "note",
        text: "align-self має сенс тільки для flex-елементів. Якщо елемент не знаходиться всередині flex-контейнера, властивість не працюватиме.",
      },

      {
        type: "heading",
        text: "Практичні завдання",
      },

      {
        type: "task",
        text: [
          "№1. Створіть flex-контейнер із п'ятьма блоками.",
          "№2. Вирівняйте всі блоки по центру через align-items.",
          "№3. Для третього блоку задайте align-self: flex-end.",
          "№4. Перевірте роботу значень center, flex-start та flex-end.",
        ],
      },

      {
        type: "hint",
        text: "Якщо потрібно змінити положення тільки одного елемента — використовуйте align-self замість зміни align-items.",
      },

      {
        type: "answer",
        text: `.elem {
  align-self: flex-end;
}`,
      },
    ],
  },
  {
    id: "flex-order-css",
    title: "Порядок flex-блоків у CSS",
    description:
      "Вивчаємо властивість order, яка дозволяє змінювати порядок відображення flex-елементів без зміни HTML-коду.",

    content: [
      {
        type: "heading",
        text: "Порядок flex-блоків у CSS",
      },

      {
        type: "paragraph",
        text: "За замовчуванням flex-елементи відображаються у тому порядку, у якому вони записані в HTML-коді.",
      },

      {
        type: "paragraph",
        text: "Властивість order дозволяє змінити порядок відображення елементів без переміщення їх у HTML.",
      },

      {
        type: "example",
        title: "Початковий порядок елементів",
        text: "Створимо flex-контейнер із п'ятьма блоками, які відображаються у звичайному порядку.",
      },

      {
        type: "code",
        language: "html",
        code: `<div class="parent">
  <div class="child">1</div>
  <div class="child elem">2</div>
  <div class="child">3</div>
  <div class="child">4</div>
  <div class="child">5</div>
</div>`,
      },

      {
        type: "code",
        language: "css",
        code: `.parent {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;

  width: 300px;
  height: 200px;
  border: 1px solid red;
}

.child {
  width: 50px;
  height: 50px;
  border: 1px solid green;
}`,
      },

      {
        type: "heading",
        text: "Властивість order",
      },

      {
        type: "paragraph",
        text: "За замовчуванням всі flex-елементи мають order: 0. Елемент із більшим значенням order буде ближче до кінця головної осі.",
      },

      {
        type: "example",
        title: "Переміщення елемента в кінець",
        text: "Другому блоку задаємо order: 1. Інші елементи мають значення 0, тому другий блок переміститься після них.",
      },

      {
        type: "code",
        language: "css",
        code: `.elem {
  order: 1;
}`,
      },

      {
        type: "example",
        title: "Переміщення елемента на початок",
        text: "Від'ємне значення order переміщує елемент ближче до початку головної осі.",
      },

      {
        type: "code",
        language: "css",
        code: `.elem {
  order: -1;
}`,
      },

      {
        type: "list",
        items: [
          "order: 0 — значення за замовчуванням.",
          "Більше значення order переміщує елемент ближче до кінця.",
          "Менше значення order переміщує елемент ближче до початку.",
          "order може мати як позитивні, так і негативні числа.",
          "HTML-код при цьому залишається без змін.",
        ],
      },

      {
        type: "note",
        text: "Не варто використовувати order для зміни логічної послідовності важливого контенту. Наприклад, пошукові системи та скрінрідери все одно орієнтуються на порядок HTML.",
      },

      {
        type: "heading",
        text: "Практичні завдання",
      },

      {
        type: "task",
        text: [
          "№1. Створіть flex-контейнер із п'ятьма блоками.",
          "№2. Для третього елемента задайте order: 1.",
          "№3. Для п'ятого елемента задайте order: -1.",
          "№4. Перевірте, як змінився порядок відображення.",
        ],
      },

      {
        type: "hint",
        text: "Якщо потрібно лише змінити візуальний порядок flex-елементів — використовуйте order.",
      },

      {
        type: "answer",
        text: `.elem {
  order: 1;
}`,
      },
    ],
  },
];
