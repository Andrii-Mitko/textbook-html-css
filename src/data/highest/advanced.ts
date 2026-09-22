import { Lesson } from "../types";

export const advanced: Lesson[] = [
  {
    id: "css-letter-word-spacing",
    title: "Відстань між літерами та словами в CSS",
    description:
      "Вивчаємо властивості letter-spacing і word-spacing для керування відстанню між літерами та словами.",

    content: [
      {
        type: "heading",
        text: "Відстань між літерами та словами в CSS",
      },

      {
        type: "paragraph",
        text: "CSS дозволяє змінювати відстань між літерами та словами. Для цього використовуються властивості letter-spacing і word-spacing.",
      },

      {
        type: "list",
        items: [
          "letter-spacing — задає відстань між літерами.",
          "word-spacing — задає відстань між словами.",
          "Можна використовувати додатні, від'ємні та нульові значення.",
        ],
      },

      {
        type: "heading",
        text: "Властивість letter-spacing",
      },

      {
        type: "paragraph",
        text: "Властивість letter-spacing змінює відстань між усіма літерами тексту.",
      },

      {
        type: "code",
        language: "css",
        code: `
p {
  letter-spacing: 2px;
 }`,
      },

      {
        type: "example",
        title: "Приклади значень",
        text: "Додатні значення збільшують відстань між літерами, від'ємні — зменшують її.",
      },

      {
        type: "code",
        language: "css",
        code: `
/* Збільшити відстань */
letter-spacing: 3px;

/* Без змін */
letter-spacing: 0;

/* Зменшити відстань */
letter-spacing: -1px;`,
      },

      {
        type: "heading",
        text: "Властивість word-spacing",
      },

      {
        type: "paragraph",
        text: "Властивість word-spacing змінює відстань між словами тексту.",
      },

      {
        type: "code",
        language: "css",
        code: `
p {
  word-spacing: 5px;
 }`,
      },

      {
        type: "note",
        text: "Властивості letter-spacing і word-spacing можна використовувати одночасно.",
      },

      {
        type: "heading",
        text: "Практичні завдання",
      },

      {
        type: "task",
        text: [
          "№1. Встановіть відстань між літерами 1px.",
          "№2. Встановіть відстань між літерами 3px.",
          "№3. Встановіть відстань між літерами -1px.",
          "№4. Встановіть відстань між словами 3px.",
          "№5. Встановіть відстань між словами 0px.",
        ],
      },

      {
        type: "hint",
        text: "Для зміни відстані між літерами використовуйте letter-spacing, а між словами — word-spacing.",
      },

      {
        type: "answer",
        text: `
/* №1 */
letter-spacing: 1px;

/* №2 */
letter-spacing: 3px;

/* №3 */
letter-spacing: -1px;

/* №4 */
word-spacing: 3px;

/* №5 */
word-spacing: 0;`,
      },
    ],
  },
  {
    id: "css-text-transform-font-variant",
    title: "Регістр тексту в CSS",
    description:
      "Вивчаємо властивості text-transform і font-variant для зміни регістру символів та відображення малих великих літер.",

    content: [
      {
        type: "heading",
        text: "Регістр тексту в CSS",
      },

      {
        type: "paragraph",
        text: "CSS дозволяє змінювати регістр символів без редагування HTML. Для цього використовується властивість text-transform. Також існує властивість font-variant, яка дозволяє відображати малі літери як зменшені великі.",
      },

      {
        type: "list",
        items: [
          "text-transform: uppercase — усі літери стають великими.",
          "text-transform: lowercase — усі літери стають малими.",
          "text-transform: capitalize — кожне слово починається з великої літери.",
          "text-transform: none — без змін.",
          "font-variant: small-caps — малі літери відображаються як зменшені великі.",
        ],
      },

      {
        type: "heading",
        text: "Властивість text-transform",
      },

      {
        type: "paragraph",
        text: "Найчастіше використовується для зміни регістру тексту без зміни самого вмісту HTML.",
      },

      {
        type: "code",
        language: "css",
        code: `
/* Усі літери великі */
p {
  text-transform: uppercase;
 }

/* Усі літери малі */
p {
  text-transform: lowercase;
 }

/* Перша літера кожного слова велика */
p {
  text-transform: capitalize;
 }`,
      },

      {
        type: "heading",
        text: "Властивість font-variant",
      },

      {
        type: "paragraph",
        text: "Властивість font-variant: small-caps відображає малі літери як зменшені великі. Якщо шрифт підтримує Small Caps, результат буде виглядати професійніше.",
      },

      {
        type: "code",
        language: "css",
        code: `
p {
  font-variant: small-caps;
 }`,
      },

      {
        type: "example",
        title: "Коли використовувати",
        text: "uppercase часто застосовують для заголовків, capitalize — для назв або ПІБ, а small-caps — для декоративного оформлення тексту.",
      },

      {
        type: "note",
        text: "Властивість text-transform змінює лише відображення тексту. Сам текст у HTML залишається без змін.",
      },

      {
        type: "heading",
        text: "Практичні завдання",
      },

      {
        type: "task",
        text: [
          "№1. Перетворіть увесь текст у верхній регістр.",
          "№2. Помістіть кілька слів у тег span і зробіть лише їх великими літерами.",
          "№3. Зробіть так, щоб кожне слово у ПІБ починалося з великої літери.",
        ],
      },

      {
        type: "hint",
        text: "Для всього тексту використовуйте uppercase, для окремих слів — застосуйте стиль до span, а для ПІБ — capitalize.",
      },

      {
        type: "answer",
        text: `
/* №1 */
p {
  text-transform: uppercase;
}

/* №2 */
span {
  text-transform: uppercase;
}

/* №3 */
p {
  text-transform: capitalize;
}`,
      },
    ],
  },
  {
    id: "css-text-align-last",
    title: "Останній рядок тексту в CSS",
    description:
      "Вивчаємо властивість text-align-last, яка дозволяє окремо вирівнювати останній рядок багаторядкового тексту.",

    content: [
      {
        type: "heading",
        text: "Останній рядок тексту в CSS",
      },

      {
        type: "paragraph",
        text: "За замовчуванням останній рядок абзацу вирівнюється так само, як і весь текст. За допомогою властивості text-align-last можна задати для нього окреме вирівнювання.",
      },

      {
        type: "heading",
        text: "Властивість text-align-last",
      },

      {
        type: "paragraph",
        text: "Властивість працює для багаторядкового тексту та дозволяє вирівняти лише останній рядок.",
      },

      {
        type: "code",
        language: "css",
        code: `
p {
  text-align: justify;
  text-align-last: right;
}`,
      },

      {
        type: "list",
        items: [
          "left — вирівнювання по лівому краю.",
          "center — вирівнювання по центру.",
          "right — вирівнювання по правому краю.",
          "justify — вирівнювання по ширині (якщо підтримується браузером).",
          "auto — стандартна поведінка браузера.",
        ],
      },

      {
        type: "example",
        title: "Коли використовувати",
        text: "Властивість text-align-last найчастіше застосовують разом із text-align: justify, щоб останній рядок виглядав акуратніше.",
      },

      {
        type: "note",
        text: "Властивість працює лише тоді, коли текст займає декілька рядків.",
      },

      {
        type: "heading",
        text: "Практичне завдання",
      },

      {
        type: "task",
        text: [
          "№1. Є довгий текст.",
          "№2. Вирівняйте останній рядок цього тексту по правому краю.",
        ],
      },

      {
        type: "hint",
        text: "Спочатку зробіть текст вирівняним по ширині за допомогою text-align: justify, а потім використайте text-align-last.",
      },

      {
        type: "answer",
        text: `
p {
  text-align: justify;
  text-align-last: right;
}`,
      },
    ],
  },
  {
    id: "css-first-letter",
    title: "Перша літера в CSS",
    description:
      "Вивчаємо псевдоелемент ::first-letter, який дозволяє оформити першу літеру тексту окремо від решти абзацу.",

    content: [
      {
        type: "heading",
        text: "Перша літера в CSS",
      },

      {
        type: "paragraph",
        text: "Псевдоелемент ::first-letter використовується для стилізації лише першої літери тексту. Його часто застосовують для створення декоративних великих літер на початку статей або книг.",
      },

      {
        type: "heading",
        text: "Псевдоелемент ::first-letter",
      },

      {
        type: "paragraph",
        text: "Після селектора додається ::first-letter, а всередині фігурних дужок записуються стилі, які будуть застосовані лише до першої літери.",
      },

      {
        type: "code",
        language: "css",
        code: `
p::first-letter {
  font-size: 40px;
  font-weight: bold;
  color: red;
}`,
      },

      {
        type: "example",
        title: "Декоративна перша літера",
        text: "Найчастіше першу літеру роблять більшою за решту тексту, виділяють кольором або жирним шрифтом.",
      },

      {
        type: "code",
        language: "html",
        code: `
<p>
  Це приклад абзацу, у якому перша літера буде оформлена окремо.
</p>`,
      },

      {
        type: "note",
        text: "Псевдоелемент ::first-letter працює лише з першою літерою текстового вмісту елемента. До неї можна застосовувати більшість текстових властивостей CSS.",
      },

      {
        type: "heading",
        text: "Практичне завдання",
      },

      {
        type: "task",
        text: [
          "№1. Відкрийте приклад.",
          "№2. Оформіть першу літеру тексту за допомогою псевдоелемента ::first-letter.",
        ],
      },

      {
        type: "hint",
        text: "Використайте селектор p::first-letter і змініть, наприклад, розмір шрифту, колір або жирність першої літери.",
      },

      {
        type: "answer",
        text: `
p::first-letter {
  font-size: 40px;
  font-weight: bold;
  color: red;
}`,
      },
    ],
  },
  {
    id: "css-first-line",
    title: "Перший рядок у CSS",
    description:
      "Вивчаємо псевдоелемент ::first-line, який дозволяє стилізувати лише перший рядок тексту.",

    content: [
      {
        type: "heading",
        text: "Перший рядок у CSS",
      },

      {
        type: "paragraph",
        text: "Псевдоелемент ::first-line дозволяє застосувати стилі тільки до першого рядка тексту всередині елемента. Якщо ширина елемента зміниться, браузер автоматично визначить новий перший рядок.",
      },

      {
        type: "heading",
        text: "Синтаксис",
      },

      {
        type: "code",
        language: "css",
        code: `
p::first-line {
  color: red;
  font-weight: bold;
}`,
      },

      {
        type: "heading",
        text: "Приклад",
      },

      {
        type: "paragraph",
        text: "У цьому прикладі перший рядок абзацу стане червоним і жирним.",
      },

      {
        type: "code",
        language: "html",
        code: `
<p>
  Це довгий текст, який займає кілька рядків.
  Перший рядок буде виділений іншим стилем,
  а решта тексту залишиться без змін.
</p>`,
      },

      {
        type: "code",
        language: "css",
        code: `
p {
  width: 350px;
  font-size: 18px;
  line-height: 1.5;
}

p::first-line {
  color: red;
  font-weight: bold;
}`,
      },

      {
        type: "example",
        title: "Як працює ::first-line",
        text: "Стилізується не весь абзац, а лише текст, який потрапив у перший рядок. Якщо змінити ширину елемента, перший рядок також зміниться.",
      },

      {
        type: "note",
        text: "Псевдоелемент ::first-line можна використовувати лише з блоковими елементами (наприклад, p або div). Не всі CSS-властивості підтримуються для цього псевдоелемента.",
      },

      {
        type: "heading",
        text: "Практичне завдання",
      },

      {
        type: "task",
        text: [
          "№1. Даний абзац із довгим текстом.",
          "№2. За допомогою ::first-line зробіть перший рядок синім.",
          "№3. Збільште розмір шрифту першого рядка до 24px.",
        ],
      },

      {
        type: "hint",
        text: "Створіть правило для псевдоелемента p::first-line та застосуйте до нього потрібні CSS-властивості.",
      },

      {
        type: "answer",
        text: `
p::first-line {
  color: blue;
  font-size: 24px;
}`,
      },
    ],
  },
  {
    id: "css-white-space",
    title: "Режими відображення тексту в CSS",
    description:
      "Вивчаємо властивість white-space та тег pre. Дізнаємося, як браузер обробляє пробіли, переноси рядків і довгий текст.",

    content: [
      {
        type: "heading",
        text: "Режими відображення тексту в CSS",
      },

      {
        type: "paragraph",
        text: "За замовчуванням браузер об'єднує кілька пробілів в один і автоматично переносить довгі рядки. Властивість white-space дозволяє змінити цю поведінку.",
      },

      {
        type: "heading",
        text: "Тег pre",
      },

      {
        type: "paragraph",
        text: "Тег pre зберігає всі пробіли та переноси рядків саме в тому вигляді, у якому вони записані в HTML-коді.",
      },

      {
        type: "code",
        language: "html",
        code: `
<pre>
Перший рядок
    Другий рядок із відступом
        Третій рядок
</pre>`,
      },

      {
        type: "note",
        text: "Тег pre автоматично використовує режим white-space: pre.",
      },

      {
        type: "heading",
        text: "Властивість white-space",
      },

      {
        type: "paragraph",
        text: "Властивість white-space визначає, як браузер повинен поводитися з пробілами та переносами рядків.",
      },

      {
        type: "list",
        items: [
          "normal — стандартна поведінка браузера.",
          "nowrap — текст не переноситься на новий рядок.",
          "pre — зберігаються всі пробіли та переноси.",
          "pre-wrap — зберігаються пробіли й переноси, але довгі рядки можуть переноситися.",
          "pre-line — зберігаються лише переноси рядків, зайві пробіли прибираються.",
        ],
      },

      {
        type: "heading",
        text: "Приклад nowrap",
      },

      {
        type: "paragraph",
        text: "Текст не переноситься навіть тоді, коли не поміщається всередині блоку.",
      },

      {
        type: "code",
        language: "html",
        code: `
<div class="box">
Дуже довгий текст, який не поміщається всередині блоку і продовжується вправо.
</div>`,
      },

      {
        type: "code",
        language: "css",
        code: `
.box {
  width: 200px;
  border: 1px solid black;
  white-space: nowrap;
}`,
      },

      {
        type: "heading",
        text: "Порівняння pre, pre-wrap і pre-line",
      },

      {
        type: "paragraph",
        text: "Ці значення схожі, але по-різному поводяться з пробілами та переносами рядків.",
      },

      {
        type: "code",
        language: "css",
        code: `
.pre {
  white-space: pre;
}

.pre-wrap {
  white-space: pre-wrap;
}

.pre-line {
  white-space: pre-line;
}`,
      },

      {
        type: "example",
        title: "Коли що використовувати",
        text: "pre — для виведення коду або віршів. pre-wrap — коли потрібно зберегти форматування, але дозволити перенесення довгих рядків. pre-line — коли потрібно залишити лише переноси рядків.",
      },

      {
        type: "heading",
        text: "Практичні завдання",
      },

      {
        type: "task",
        text: [
          "№1. Виведіть текст так, щоб усі пробіли та переноси збереглися.",
          "№2. Створіть блок шириною 200px і зробіть так, щоб текст не переносився на новий рядок.",
          "№3. Продемонструйте різницю між значеннями pre, pre-wrap і pre-line.",
        ],
      },

      {
        type: "hint",
        text: "Для першого завдання можна використати тег pre або властивість white-space: pre.",
      },

      {
        type: "answer",
        text: `
/* №1 */
pre {
}

/* або */

.text {
  white-space: pre;
}

/* №2 */

.box {
  width: 200px;
  white-space: nowrap;
  border: 1px solid black;
}

/* №3 */

.pre {
  white-space: pre;
}

.pre-wrap {
  white-space: pre-wrap;
}

.pre-line {
  white-space: pre-line;
}`,
      },
    ],
  },
  {
    id: "css-tab-size",
    title: "Розмір табуляції в CSS",
    description:
      "Вивчаємо властивість tab-size, яка дозволяє змінювати ширину символу табуляції під час відображення тексту.",

    content: [
      {
        type: "heading",
        text: "Розмір табуляції в CSS",
      },

      {
        type: "paragraph",
        text: "Властивість tab-size визначає, скільки пробілів буде займати символ табуляції (Tab) під час відображення тексту. Вона працює лише там, де символи табуляції не замінюються браузером, наприклад у тегу pre або при використанні white-space: pre.",
      },

      {
        type: "heading",
        text: "Синтаксис",
      },

      {
        type: "code",
        language: "css",
        code: `
pre {
  tab-size: 4;
}`,
      },

      {
        type: "paragraph",
        text: "Число означає кількість пробілів, яку займає один символ табуляції.",
      },

      {
        type: "heading",
        text: "Приклад",
      },

      {
        type: "paragraph",
        text: "У цьому прикладі код відображається зі збереженням переносів і табуляції.",
      },

      {
        type: "code",
        language: "html",
        code: `
<pre>
function hello() {
\tconsole.log("Hello");
\tconsole.log("World");
}
</pre>`,
      },

      {
        type: "code",
        language: "css",
        code: `
pre {
  white-space: pre;
  tab-size: 4;
}`,
      },

      {
        type: "example",
        title: "Різні значення",
        text: "Якщо встановити tab-size: 2, відступ стане меншим. Якщо tab-size: 8 — більшим. Це впливає лише на відображення, а не змінює сам текст.",
      },

      {
        type: "code",
        language: "css",
        code: `
pre.tab2 {
  tab-size: 2;
}

pre.tab4 {
  tab-size: 4;
}

pre.tab8 {
  tab-size: 8;
}`,
      },

      {
        type: "note",
        text: "Властивість tab-size працює тільки із символами табуляції. Якщо у тексті використані звичайні пробіли, вона не матиме жодного ефекту.",
      },

      {
        type: "heading",
        text: "Практичні завдання",
      },

      {
        type: "task",
        text: [
          "№1. Виведіть на екран програмний код зі збереженням переносів і табуляції.",
          "№2. Зробіть так, щоб один символ табуляції дорівнював чотирьом пробілам.",
          "№3. Змініть попередній приклад так, щоб табуляція дорівнювала двом пробілам.",
        ],
      },

      {
        type: "hint",
        text: "Для роботи tab-size використовуйте тег pre або властивість white-space: pre.",
      },

      {
        type: "answer",
        text: `
/* №1 */

pre {
  white-space: pre;
}

/* №2 */

pre {
  white-space: pre;
  tab-size: 4;
}

/* №3 */

pre {
  white-space: pre;
  tab-size: 2;
}`,
      },
    ],
  },
  {
    id: "css-overflow",
    title: "Переповнення блоку в CSS",
    description:
      "Вивчаємо властивості overflow, overflow-x та overflow-y. Дізнаємося, як керувати відображенням вмісту, що виходить за межі елемента.",

    content: [
      {
        type: "heading",
        text: "Переповнення блоку в CSS",
      },

      {
        type: "paragraph",
        text: "Якщо вміст елемента не поміщається всередині його ширини або висоти, виникає переповнення. За допомогою властивостей overflow можна визначити, що браузер повинен робити в такій ситуації.",
      },

      {
        type: "heading",
        text: "Властивість overflow",
      },

      {
        type: "paragraph",
        text: "Властивість overflow керує переповненням одночасно по горизонталі та вертикалі.",
      },

      {
        type: "list",
        items: [
          "visible — вміст виходить за межі елемента (значення за замовчуванням).",
          "hidden — зайвий вміст обрізається.",
          "scroll — завжди показуються смуги прокручування.",
          "auto — смуги прокручування з'являються лише за потреби.",
        ],
      },

      {
        type: "heading",
        text: "Приклад переповнення текстом",
      },

      {
        type: "code",
        language: "html",
        code: `
<div class="box">
Дуже довгий текст, який не поміщається всередині блоку та виходить за його межі.
</div>`,
      },

      {
        type: "code",
        language: "css",
        code: `
.box {
  width: 200px;
  height: 200px;
  border: 1px solid black;
}`,
      },

      {
        type: "heading",
        text: "Вертикальна смуга прокручування",
      },

      {
        type: "code",
        language: "css",
        code: `
.box {
  width: 200px;
  height: 200px;
  overflow-y: auto;
}`,
      },

      {
        type: "heading",
        text: "Обрізання вмісту",
      },

      {
        type: "code",
        language: "css",
        code: `
.box {
  width: 200px;
  height: 200px;
  overflow: hidden;
}`,
      },

      {
        type: "heading",
        text: "Керування по окремих осях",
      },

      {
        type: "paragraph",
        text: "Для горизонтального та вертикального напрямків можна використовувати окремі властивості.",
      },

      {
        type: "code",
        language: "css",
        code: `
.box {
  overflow-x: hidden;
  overflow-y: auto;
}`,
      },

      {
        type: "example",
        title: "Приклад із зображенням",
        text: "Якщо картинка більша за контейнер, можна обрізати її або додати смуги прокручування.",
      },

      {
        type: "code",
        language: "css",
        code: `
.image-box {
  width: 300px;
  height: 300px;
  overflow: auto;
}`,
      },

      {
        type: "note",
        text: "Найчастіше використовують overflow: auto, оскільки смуги прокручування з'являються лише тоді, коли вони дійсно потрібні.",
      },

      {
        type: "heading",
        text: "Практичні завдання",
      },

      {
        type: "task",
        text: [
          "№1. Створіть блок 200×200px і додайте довгий текст, щоб він виходив за межі блоку.",
          "№2. Додайте вертикальну смугу прокручування при переповненні.",
          "№3. Обріжте текст, що виходить за межі блоку.",
          "№4. При наведенні збільшуйте висоту блоку так, щоб увесь текст став видимим.",
          "№5. Створіть блок 300×300px із великою картинкою, яка виходить за його межі.",
          "№6. Додайте смуги прокручування для великої картинки.",
          "№7. Обріжте частини картинки, що виходять за межі блоку.",
          "№8. Обріжте картинку по горизонталі, але залиште вертикальну смугу прокручування.",
          "№9. Створіть блок 150×150px, у якому вертикальна смуга прокручування буде показуватися завжди.",
        ],
      },

      {
        type: "hint",
        text: "Використовуйте overflow, overflow-x та overflow-y залежно від того, якою віссю потрібно керувати.",
      },

      {
        type: "answer",
        text: `
/* №1 */
.box {
  width: 200px;
  height: 200px;
}

/* №2 */
.box {
  overflow-y: auto;
}

/* №3 */
.box {
  overflow: hidden;
}

/* №4 */
.box:hover {
  height: auto;
}

/* №5 */
.image-box {
  width: 300px;
  height: 300px;
}

/* №6 */
.image-box {
  overflow: auto;
}

/* №7 */
.image-box {
  overflow: hidden;
}

/* №8 */
.image-box {
  overflow-x: hidden;
  overflow-y: auto;
}

/* №9 */
.box {
  width: 150px;
  height: 150px;
  overflow-y: scroll;
}`,
      },
    ],
  },
  {
    id: "css-text-overflow",
    title: "Обрізання тексту в CSS",
    description:
      "Вивчаємо властивість text-overflow. Дізнаємося, як обрізати довгий текст, додавати трикрапку та керувати його відображенням.",

    content: [
      {
        type: "heading",
        text: "Обрізання тексту в CSS",
      },

      {
        type: "paragraph",
        text: "Якщо текст не поміщається всередині елемента, його можна обрізати або додати в кінці трикрапку. Для цього використовується властивість text-overflow.",
      },

      {
        type: "note",
        text: "Властивість text-overflow працює лише разом із white-space: nowrap і overflow: hidden або overflow: auto.",
      },

      {
        type: "heading",
        text: "Основний приклад",
      },

      {
        type: "code",
        language: "html",
        code: `
<div class="box">
Дуже довгий текст, який не поміщається всередині блоку.
</div>`,
      },

      {
        type: "code",
        language: "css",
        code: `
.box {
  width: 200px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  border: 1px solid black;
}`,
      },

      {
        type: "heading",
        text: "Значення text-overflow",
      },

      {
        type: "list",
        items: [
          "clip — текст просто обрізається.",
          "ellipsis — наприкінці додається трикрапка (...).",
        ],
      },

      {
        type: "example",
        title: "Як це працює",
        text: "Якщо текст не поміщається в один рядок, браузер обрізає його та, за потреби, додає трикрапку.",
      },

      {
        type: "heading",
        text: "Практичні завдання",
      },

      {
        type: "task",
        text: [
          "№1. Створіть блок шириною 200px. Забороніть перенесення рядків і переконайтеся, що довгий текст виходить за межі блоку.",
          "№2. Додайте горизонтальну смугу прокручування при переповненні тексту.",
          "№3. Обріжте текст, що виходить за межі блоку.",
          "№4. Додайте трикрапку в кінці обрізаного тексту.",
          "№5. При наведенні миші дозвольте переносити текст на нові рядки та автоматично збільшуйте висоту блоку.",
        ],
      },

      {
        type: "hint",
        text: "Для появи трикрапки потрібно одночасно використати white-space: nowrap, overflow: hidden і text-overflow: ellipsis.",
      },

      {
        type: "answer",
        text: `/* №1 */
.box {
  width: 200px;
  white-space: nowrap;
}

/* №2 */
.box {
  width: 200px;
  white-space: nowrap;
  overflow-x: auto;
}

/* №3 */
.box {
  width: 200px;
  white-space: nowrap;
  overflow: hidden;
}

/* №4 */
.box {
  width: 200px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

/* №5 */
.box:hover {
  white-space: normal;
  height: auto;
  overflow: visible;
}`,
      },
    ],
  },
  {
    id: "css-long-words",
    title: "Довгі слова в CSS",
    description:
      "Вивчаємо властивості word-break та overflow-wrap. Дізнаємося, як переносити дуже довгі слова та чим відрізняються ці властивості.",

    content: [
      {
        type: "heading",
        text: "Довгі слова в CSS",
      },

      {
        type: "paragraph",
        text: "Іноді слово настільки довге, що не поміщається в контейнер і виходить за його межі. Для керування такими ситуаціями використовуються властивості word-break та overflow-wrap.",
      },

      {
        type: "heading",
        text: "Властивість overflow-wrap",
      },

      {
        type: "paragraph",
        text: "overflow-wrap дозволяє браузеру переносити дуже довгі слова лише тоді, коли вони не поміщаються в рядок.",
      },

      {
        type: "code",
        language: "css",
        code: `
.box {
  width: 220px;
  overflow-wrap: break-word;
}`,
      },

      {
        type: "heading",
        text: "Властивість word-break",
      },

      {
        type: "paragraph",
        text: "word-break визначає, як саме можна розривати слова. Значення break-all дозволяє переносити слово практично в будь-якому місці.",
      },

      {
        type: "code",
        language: "css",
        code: `
.box {
  width: 220px;
  word-break: break-all;
}`,
      },

      {
        type: "heading",
        text: "Порівняння",
      },

      {
        type: "list",
        items: [
          "overflow-wrap: break-word — переносить слово лише тоді, коли це необхідно.",
          "word-break: break-all — може переносити слово між будь-якими символами.",
          "Для звичайного тексту найчастіше використовують overflow-wrap: break-word.",
        ],
      },

      {
        type: "example",
        title: "Демонстрація відмінностей",
        text: "В обох прикладах використовується одне й те саме дуже довге слово.",
      },

      {
        type: "code",
        language: "html",
        code: `
<div class="wrap">
superhypermegagigalongwordwithoutspacesandbreakpoints
</div>

<div class="break">
superhypermegagigalongwordwithoutspacesandbreakpoints
</div>`,
      },

      {
        type: "code",
        language: "css",
        code: `
.wrap {
  width: 220px;
  border: 1px solid black;
  overflow-wrap: break-word;
}

.break {
  width: 220px;
  border: 1px solid black;
  word-break: break-all;
}`,
      },

      {
        type: "note",
        text: "Для більшості сайтів рекомендується використовувати overflow-wrap: break-word, оскільки він переносить слова лише за необхідності та робить текст читабельнішим.",
      },

      {
        type: "heading",
        text: "Практичне завдання",
      },

      {
        type: "task",
        text: [
          "№1. Напишіть код, який демонструє роботу властивостей word-break та overflow-wrap.",
          "№2. Покажіть різницю між цими двома властивостями на прикладі дуже довгого слова.",
        ],
      },

      {
        type: "hint",
        text: "Створіть два блоки однакової ширини та застосуйте до кожного різну властивість.",
      },

      {
        type: "answer",
        text: `
/* HTML */

<div class="wrap">
superhypermegagigalongwordwithoutspacesandbreakpoints
</div>

<div class="break">
superhypermegagigalongwordwithoutspacesandbreakpoints
</div>

/* CSS */

.wrap {
  width: 220px;
  border: 1px solid black;
  overflow-wrap: break-word;
}

.break {
  width: 220px;
  border: 1px solid black;
  word-break: break-all;
}`,
      },
    ],
  },
  {
    id: "css-hyphens-wbr",
    title: "Переноси в тексті в CSS",
    description:
      "Вивчаємо властивість hyphens та тег wbr. Дізнаємося, як автоматично або вручну переносити довгі слова.",

    content: [
      {
        type: "heading",
        text: "Переноси в тексті в CSS",
      },

      {
        type: "paragraph",
        text: "Якщо довгі слова не поміщаються в рядок, браузер може автоматично переносити їх по складах. Для цього використовується властивість hyphens. Також можна вручну вказувати можливі місця переносу за допомогою HTML-тега wbr.",
      },

      {
        type: "heading",
        text: "Властивість hyphens",
      },

      {
        type: "paragraph",
        text: "Властивість hyphens керує автоматичним перенесенням слів.",
      },

      {
        type: "list",
        items: [
          "none — автоматичні переноси вимкнені.",
          "manual — використовуються лише переноси, задані вручну.",
          "auto — браузер автоматично переносить слова за правилами мови.",
        ],
      },

      {
        type: "heading",
        text: "Приклад",
      },

      {
        type: "code",
        language: "html",
        code: `
<div class="text" lang="uk">
Дуже довгий текст із словами, які можуть автоматично переноситися браузером.
</div>`,
      },

      {
        type: "code",
        language: "css",
        code: `
.text {
  width: 300px;
  hyphens: auto;
}`,
      },

      {
        type: "note",
        text: "Для коректної роботи hyphens: auto бажано вказати атрибут lang у HTML. Саме він повідомляє браузеру правила переносу для конкретної мови.",
      },

      {
        type: "heading",
        text: "Тег wbr",
      },

      {
        type: "paragraph",
        text: "Тег wbr (Word Break Opportunity) вказує браузеру можливе місце переносу слова. Якщо перенесення не потрібне, тег не впливає на відображення.",
      },

      {
        type: "code",
        language: "html",
        code: `super<wbr>long<wbr>word<wbr>example`,
      },

      {
        type: "example",
        title: "Коли використовувати",
        text: "hyphens підходить для звичайних текстів, а wbr — для довгих URL, назв файлів, ідентифікаторів або інших рядків без пробілів.",
      },

      {
        type: "heading",
        text: "Практичне завдання",
      },

      {
        type: "task",
        text: [
          "№1. Створіть блок шириною 300px.",
          "№2. Додайте в нього довгий текст.",
          "№3. Зробіть так, щоб браузер автоматично розставляв переноси слів.",
        ],
      },

      {
        type: "hint",
        text: "Використайте hyphens: auto та додайте атрибут lang до HTML-елемента з текстом.",
      },

      {
        type: "answer",
        text: `
<!-- HTML -->

<div class="text" lang="uk">
Дуже довгий текст, який містить слова, що можуть автоматично переноситися браузером.
</div>

/* CSS */

.text {
  width: 300px;
  hyphens: auto;
}`,
      },
    ],
  },
  {
    id: "css-text-decoration",
    title: "Оформлення тексту в CSS",
    description:
      "Вивчаємо властивості text-decoration-line, text-decoration-style та text-decoration-color для оформлення тексту.",

    content: [
      {
        type: "heading",
        text: "Оформлення тексту в CSS",
      },

      {
        type: "paragraph",
        text: "Властивості сімейства text-decoration дозволяють додавати підкреслення, перекреслення, надкреслення, а також змінювати стиль і колір декоративної лінії.",
      },

      {
        type: "heading",
        text: "Основні властивості",
      },

      {
        type: "list",
        items: [
          "text-decoration-line — визначає тип декоративної лінії.",
          "text-decoration-style — задає стиль лінії.",
          "text-decoration-color — задає колір лінії.",
        ],
      },

      {
        type: "heading",
        text: "text-decoration-line",
      },

      {
        type: "paragraph",
        text: "За допомогою цієї властивості можна додати різні типи декоративних ліній.",
      },

      {
        type: "code",
        language: "css",
        code: `
p {
  text-decoration-line: underline;
}`,
      },

      {
        type: "paragraph",
        text: "Можливі значення:",
      },

      {
        type: "list",
        items: [
          "none — без оформлення.",
          "underline — підкреслення.",
          "overline — лінія над текстом.",
          "line-through — перекреслення.",
          "underline overline — кілька ліній одночасно.",
        ],
      },

      {
        type: "heading",
        text: "text-decoration-style",
      },

      {
        type: "paragraph",
        text: "Дозволяє змінити стиль декоративної лінії.",
      },

      {
        type: "code",
        language: "css",
        code: `
p {
  text-decoration-line: underline;
  text-decoration-style: wavy;
}`,
      },

      {
        type: "paragraph",
        text: "Основні значення:",
      },

      {
        type: "list",
        items: [
          "solid — суцільна лінія.",
          "double — подвійна.",
          "dotted — крапки.",
          "dashed — штрихова.",
          "wavy — хвиляста.",
        ],
      },

      {
        type: "heading",
        text: "text-decoration-color",
      },

      {
        type: "paragraph",
        text: "Дозволяє встановити власний колір декоративної лінії незалежно від кольору тексту.",
      },

      {
        type: "code",
        language: "css",
        code: `
p {
  color: black;

  text-decoration-line: underline;
  text-decoration-style: solid;
  text-decoration-color: red;
}`,
      },

      {
        type: "heading",
        text: "Приклад використання всіх властивостей",
      },

      {
        type: "code",
        language: "html",
        code: `
<p class="example">
  CSS Text Decoration
</p>`,
      },

      {
        type: "code",
        language: "css",
        code: `
.example {
  font-size: 28px;

  text-decoration-line: underline;
  text-decoration-style: wavy;
  text-decoration-color: crimson;
}`,
      },

      {
        type: "example",
        title: "Коли використовується",
        text: "Таке оформлення часто застосовується для посилань, попереджень, позначення помилок, виділення важливих фрагментів тексту або декоративного оформлення заголовків.",
      },

      {
        type: "note",
        text: "Якщо потрібно лише прибрати стандартне підкреслення посилання, достатньо використати text-decoration-line: none або короткий запис text-decoration: none.",
      },

      {
        type: "heading",
        text: "Практичне завдання",
      },

      {
        type: "task",
        text: [
          "№1. Створіть абзац із підкресленням.",
          "№2. Зробіть підкреслення хвилястим.",
          "№3. Задайте підкресленню червоний колір.",
        ],
      },

      {
        type: "hint",
        text: "Спочатку задайте text-decoration-line, потім змініть стиль через text-decoration-style і лише після цього встановіть колір за допомогою text-decoration-color.",
      },

      {
        type: "answer",
        text: `
<!-- HTML -->

<p class="text">
  CSS Text Decoration
</p>

<!-- CSS -->

.text {
  text-decoration-line: underline;
  text-decoration-style: wavy;
  text-decoration-color: red;
}`,
      },
    ],
  },
  {
    id: "css-text-columns",
    title: "Розміщення тексту в колонках у CSS",
    description:
      "Вивчаємо властивості column-count, column-width, columns, column-gap, column-rule та column-span для створення багатоколонкового тексту.",

    content: [
      {
        type: "heading",
        text: "Розміщення тексту в колонках у CSS",
      },

      {
        type: "paragraph",
        text: "CSS дозволяє автоматично розбивати текст на кілька колонок, подібно до газет або журналів. Для цього використовується набір властивостей Multi-column Layout.",
      },

      {
        type: "heading",
        text: "Основні властивості",
      },

      {
        type: "list",
        items: [
          "column-count — кількість колонок.",
          "column-width — бажана ширина колонки.",
          "columns — скорочений запис column-width і column-count.",
          "column-gap — відстань між колонками.",
          "column-rule — лінія між колонками.",
          "column-span — дозволяє елементу займати всі колонки.",
        ],
      },

      {
        type: "heading",
        text: "column-width",
      },

      {
        type: "paragraph",
        text: "Властивість задає бажану ширину колонки. Браузер сам визначає, скільки колонок поміститься.",
      },

      {
        type: "code",
        language: "css",
        code: `
.text {
  width: 80%;
  column-width: 300px;
}`,
      },

      {
        type: "heading",
        text: "column-count",
      },

      {
        type: "paragraph",
        text: "Встановлює точну кількість колонок незалежно від їх ширини.",
      },

      {
        type: "code",
        language: "css",
        code: `
.text {
  width: 1000px;
  column-count: 4;
}`,
      },

      {
        type: "heading",
        text: "columns",
      },

      {
        type: "paragraph",
        text: "Скорочений запис для одночасного задання кількості та ширини колонок.",
      },

      {
        type: "code",
        language: "css",
        code: `
.text {
  columns: 250px 3;
}`,
      },

      {
        type: "heading",
        text: "column-gap",
      },

      {
        type: "paragraph",
        text: "Задає відстань між сусідніми колонками.",
      },

      {
        type: "code",
        language: "css",
        code: `
.text {
  column-count: 4;
  column-gap: 30px;
}`,
      },

      {
        type: "heading",
        text: "column-rule",
      },

      {
        type: "paragraph",
        text: "Додає вертикальну лінію між колонками.",
      },

      {
        type: "code",
        language: "css",
        code: `
.text {
  column-count: 4;
  column-gap: 30px;
  column-rule: 2px dashed gray;
}`,
      },

      {
        type: "heading",
        text: "column-span",
      },

      {
        type: "paragraph",
        text: "Дозволяє окремому елементу займати всю ширину колонок. Зазвичай використовується для заголовків.",
      },

      {
        type: "code",
        language: "html",
        code: `
<div class="text">
  <h2>Заголовок</h2>

  <p>...</p>
  <p>...</p>
</div>`,
      },

      {
        type: "code",
        language: "css",
        code: `
.text {
  column-count: 3;
}

.text h2 {
  column-span: all;
}`,
      },

      {
        type: "example",
        title: "Приклад",
        text: "Найчастіше багатоколонковий текст використовується для статей, журналів, газет та довідників.",
      },

      {
        type: "code",
        language: "css",
        code: `
.article {
  width: 1000px;

  column-count: 3;
  column-gap: 25px;
  column-rule: 1px solid lightgray;
}`,
      },

      {
        type: "note",
        text: "Не рекомендується використовувати багато колонок на вузьких екранах. Для мобільних пристроїв зазвичай залишають одну колонку.",
      },

      {
        type: "heading",
        text: "Практичні завдання",
      },

      {
        type: "task",
        text: [
          "№1. Є div шириною 80%. Розбийте текст на колонки шириною 300px.",
          "№2. Є div шириною 1000px. Розбийте текст на 4 колонки.",
          "№3. Додайте між колонками відстань 30px.",
          "№4. Додайте між колонками сіру пунктирну лінію.",
        ],
      },

      {
        type: "hint",
        text: "Спочатку використайте column-count або column-width, потім додайте column-gap, а після цього оформіть межу за допомогою column-rule.",
      },

      {
        type: "answer",
        text: `
<!-- HTML -->

<div class="text">
  Довгий текст...
</div>

<!-- CSS -->

.text {
  width: 1000px;

  column-count: 4;
  column-gap: 30px;
  column-rule: 2px dashed gray;
}`,
      },
    ],
  },
  {
    id: "css-user-select",
    title: "Скасування виділення тексту в CSS",
    description:
      "Вивчаємо властивість user-select, яка дозволяє керувати можливістю виділення та копіювання тексту.",

    content: [
      {
        type: "heading",
        text: "Властивість user-select",
      },

      {
        type: "paragraph",
        text: "За замовчуванням текст на сторінці можна виділяти та копіювати. Властивість user-select дозволяє змінити цю поведінку.",
      },

      {
        type: "list",
        items: [
          "user-select: auto — стандартна поведінка браузера.",
          "user-select: none — текст не можна виділити.",
          "user-select: text — примусово дозволяє виділення.",
          "user-select: all — при кліку виділяється весь вміст елемента.",
        ],
      },

      {
        type: "heading",
        text: "Приклад заборони виділення",
      },

      {
        type: "paragraph",
        text: "Найчастіше user-select: none використовують для кнопок, іконок, декоративних написів або елементів інтерфейсу, які не потрібно копіювати.",
      },

      {
        type: "code",
        language: "html",
        code: `
<p class="text">
  Цей текст не можна виділити.
</p>`,
      },

      {
        type: "code",
        language: "css",
        code: `
.text {
  user-select: none;
}`,
      },

      {
        type: "example",
        title: "Де використовується",
        text: "Властивість часто застосовують для кнопок, меню, декоративних написів, логотипів або елементів керування, щоб уникнути випадкового виділення тексту.",
      },

      {
        type: "heading",
        text: "Практичні завдання",
      },

      {
        type: "task",
        text: [
          "№1. Є текст. Забороніть його виділення та копіювання.",
          "№2. Є декілька абзаців із номерами. Зробіть так, щоб номери не копіювалися, а текст абзаців залишався доступним для виділення.",
        ],
      },

      {
        type: "heading",
        text: "Завдання №1",
      },

      {
        type: "code",
        language: "html",
        code: `
<p class="text">
  Цей текст не можна копіювати.
</p>`,
      },

      {
        type: "hint",
        text: "Для заборони виділення використайте властивість user-select зі значенням none.",
      },

      {
        type: "answer",
        text: `
/* HTML */

<p class="text">
  Цей текст не можна копіювати.
</p>

/* CSS */

.text {
  user-select: none;
}`,
      },

      {
        type: "heading",
        text: "Завдання №2",
      },

      {
        type: "code",
        language: "html",
        code: `
<p>
 <span class="number">1.</span>
  Перший абзац тексту.
</p>

<p>
  <span class="number">2.</span>
  Другий абзац тексту.
</p>

<p>
  <span class="number">3.</span>
  Третій абзац тексту.
</p>`,
      },

      {
        type: "hint",
        text: "Забороніть виділення лише елементам із номерами, а сам текст залиште доступним для копіювання.",
      },

      {
        type: "answer",
        text: `
/* HTML */

<p>
  <span class="number">1.</span>
  Перший абзац тексту.
</p>

<p>
  <span class="number">2.</span>
  Другий абзац тексту.
</p>

<p>
  <span class="number">3.</span>
  Третій абзац тексту.
</p>

/* CSS */

.number {
  user-select: none;
}`,
      },

      {
        type: "note",
        text: "Властивість user-select забороняє лише виділення тексту в браузері. Вона не є засобом захисту інформації, оскільки текст усе одно можна отримати через вихідний код сторінки.",
      },
    ],
  },
  {
    id: "css-pointer-events",
    title: "Відключення реакції елементів у CSS",
    description:
      "Вивчаємо властивість pointer-events, яка дозволяє вимкнути реакцію елементів на кліки, наведення та інші дії миші.",

    content: [
      {
        type: "heading",
        text: "Властивість pointer-events",
      },

      {
        type: "paragraph",
        text: "Властивість pointer-events визначає, чи буде HTML-елемент реагувати на дії вказівника миші: кліки, наведення, натискання та інші події.",
      },

      {
        type: "list",
        items: [
          "pointer-events: auto — стандартна поведінка, елемент реагує на всі події.",
          "pointer-events: none — елемент повністю ігнорує всі події миші.",
        ],
      },

      {
        type: "heading",
        text: "Приклад вимкнення натискання",
      },

      {
        type: "paragraph",
        text: "Нижче кнопка виглядає звичайною, але натиснути її неможливо.",
      },

      {
        type: "code",
        language: "html",
        code: `
<button class="btn">
  Натиснути
</button>`,
      },

      {
        type: "code",
        language: "css",
        code: `
.btn {
  padding: 10px 20px;
  font-size: 16px;

  pointer-events: none;
}`,
      },

      {
        type: "example",
        title: "Що відбудеться",
        text: "Кнопка залишиться видимою, але не реагуватиме на кліки та наведення курсора.",
      },

      {
        type: "heading",
        text: "Коли це використовується",
      },

      {
        type: "list",
        items: [
          "тимчасове блокування кнопок;",
          "відключення посилань;",
          "створення декоративних елементів поверх інших блоків;",
          "блокування взаємодії під час завантаження даних.",
        ],
      },

      {
        type: "note",
        text: "pointer-events вимикає лише взаємодію мишею. Сам елемент залишається на сторінці та продовжує відображатися.",
      },

      {
        type: "heading",
        text: "Практичне завдання",
      },

      {
        type: "task",
        text: [
          "№1. Створіть кнопку.",
          "№2. Зробіть так, щоб вона не реагувала на натискання.",
        ],
      },

      {
        type: "hint",
        text: "Використайте властивість pointer-events зі значенням none.",
      },

      {
        type: "answer",
        text: `
button {
  pointer-events: none;
}`,
      },
    ],
  },
  {
    id: "css-cursor",
    title: "Вигляд курсора в CSS",
    description:
      "Вивчаємо властивість cursor, яка дозволяє змінювати вигляд курсора миші при наведенні на елементи.",

    content: [
      {
        type: "heading",
        text: "Властивість cursor",
      },

      {
        type: "paragraph",
        text: "Властивість cursor визначає, який вигляд матиме курсор миші під час наведення на елемент.",
      },

      {
        type: "list",
        items: [
          "pointer — курсор у вигляді руки (для посилань і кнопок).",
          "default — звичайний курсор.",
          "text — курсор для виділення тексту.",
          "wait — очікування.",
          "move — переміщення.",
          "not-allowed — дія заборонена.",
          "help — довідка.",
          "crosshair — хрестик.",
        ],
      },

      {
        type: "heading",
        text: "Приклад використання",
      },

      {
        type: "paragraph",
        text: "Нижче курсор змінюється на знак заборони.",
      },

      {
        type: "code",
        language: "html",
        code: `
  <a href="#">
  Посилання
  </a>`,
      },

      {
        type: "code",
        language: "css",
        code: `
a {
  cursor: not-allowed;
}`,
      },

      {
        type: "example",
        title: "Що відбудеться",
        text: "Під час наведення курсор зміниться на перекреслене коло, але саме посилання залишиться активним.",
      },

      {
        type: "heading",
        text: "Поєднання з pointer-events",
      },

      {
        type: "paragraph",
        text: "Якщо потрібно повністю вимкнути взаємодію з елементом, cursor часто використовують разом із pointer-events.",
      },

      {
        type: "code",
        language: "css",
        code: `
a.disabled {
  pointer-events: none;
  cursor: not-allowed;
  color: gray;
}`,
      },

      {
        type: "note",
        text: "Якщо встановити pointer-events: none, курсор може не змінитися, оскільки елемент перестає отримувати події миші. Часто для відображення курсора not-allowed використовують обгортку або батьківський елемент.",
      },

      {
        type: "heading",
        text: "Практичні завдання",
      },

      {
        type: "task",
        text: [
          "№1. Створіть посилання, яке не реагуватиме на наведення та натискання.",
          "№2. Змініть попереднє завдання так, щоб під час наведення курсор мав вигляд забороненої дії.",
        ],
      },

      {
        type: "hint",
        text: "Для вимкнення взаємодії використайте pointer-events: none, а для зміни вигляду курсора — cursor: not-allowed.",
      },

      {
        type: "answer",
        text: `
<!-- HTML -->
<span class="disabled">
  <a href="#">Недоступне посилання</a>
</span>

/* CSS */
.disabled {
  cursor: not-allowed;
}

.disabled a {
  pointer-events: none;
  color: gray;
  text-decoration: none;
}`,
      },
    ],
  },
  {
    id: "css-selection",
    title: "Колір виділення тексту в CSS",
    description:
      "Вивчаємо псевдоелемент ::selection, який дозволяє змінювати колір тексту та фону під час його виділення.",

    content: [
      {
        type: "heading",
        text: "Псевдоелемент ::selection",
      },

      {
        type: "paragraph",
        text: "Псевдоелемент ::selection використовується для зміни оформлення тексту під час його виділення користувачем.",
      },

      {
        type: "paragraph",
        text: "Найчастіше за допомогою нього змінюють колір фону та колір самого тексту.",
      },

      {
        type: "heading",
        text: "Синтаксис",
      },

      {
        type: "code",
        language: "css",
        code: `
::selection {
  background-color: royalblue;
  color: white;
}`,
      },

      {
        type: "example",
        title: "Як це працює",
        text: "Після виділення будь-якого тексту на сторінці фон стане синім, а текст — білим.",
      },

      {
        type: "heading",
        text: "Оформлення окремого елемента",
      },

      {
        type: "paragraph",
        text: "Псевдоелемент можна застосовувати не тільки до всієї сторінки, а й до конкретного елемента.",
      },

      {
        type: "code",
        language: "html",
        code: `
<p class="text">
  Виділіть цей текст.
</p>`,
      },

      {
        type: "code",
        language: "css",
        code: `
.text::selection {
  background-color: orange;
  color: black;
}`,
      },

      {
        type: "note",
        text: "Псевдоелемент ::selection підтримує лише обмежений набір CSS-властивостей. Найчастіше використовують color, background-color та text-shadow.",
      },

      {
        type: "heading",
        text: "Практичне завдання",
      },

      {
        type: "task",
        text: [
          "№1. Змініть колір фону виділеного тексту.",
          "№2. Змініть колір тексту під час виділення.",
          "№3. Перевірте результат, виділивши текст на сторінці.",
        ],
      },

      {
        type: "hint",
        text: "Використайте псевдоелемент ::selection і властивості background-color та color.",
      },

      {
        type: "answer",
        text: `
::selection {
  background-color: royalblue;
  color: white;
}`,
      },
    ],
  },
  {
    id: "css-border-collapse",
    title: "Схлопування меж таблиці в CSS",
    description:
      "Вивчаємо властивість border-collapse, яка визначає, чи будуть межі комірок таблиці об'єднуватись в одну.",

    content: [
      {
        type: "heading",
        text: "Властивість border-collapse",
      },

      {
        type: "paragraph",
        text: "За замовчуванням кожна комірка таблиці має власні межі. Через це між сусідніми комірками можуть відображатися подвійні лінії.",
      },

      {
        type: "paragraph",
        text: "Властивість border-collapse дозволяє об'єднати сусідні межі в одну суцільну лінію.",
      },

      {
        type: "heading",
        text: "Значення властивості",
      },

      {
        type: "list",
        items: [
          "separate — стандартний режим, межі комірок не об'єднуються.",
          "collapse — межі сусідніх комірок об'єднуються в одну.",
        ],
      },

      {
        type: "heading",
        text: "Приклад без схлопування меж",
      },

      {
        type: "code",
        language: "html",
        code: `
<table>
  <tr>
    <td>1</td>
    <td>2</td>
  </tr>
  <tr>
    <td>3</td>
    <td>4</td>
  </tr>
</table>`,
      },

      {
        type: "code",
        language: "css",
        code: `
table {
  border: 2px solid black;
}

td {
  border: 2px solid black;
  padding: 10px;
}`,
      },

      {
        type: "example",
        title: "Результат",
        text: "Між сусідніми комірками буде видно подвійні межі.",
      },

      {
        type: "heading",
        text: "Приклад зі схлопуванням меж",
      },

      {
        type: "code",
        language: "css",
        code: `
table {
  border-collapse: collapse;
  border: 2px solid black;
}

td {
  border: 2px solid black;
  padding: 10px;
}`,
      },

      {
        type: "example",
        title: "Результат",
        text: "Межі комірок об'єднаються, і між ними буде лише одна лінія.",
      },

      {
        type: "note",
        text: "У більшості сучасних таблиць використовують border-collapse: collapse, оскільки таблиця виглядає акуратніше та не має подвійних меж.",
      },

      {
        type: "heading",
        text: "Практичне завдання",
      },

      {
        type: "task",
        text: [
          "№1. Створіть таблицю 3×3.",
          "№2. Додайте рамки таблиці та всім коміркам.",
          "№3. Зробіть так, щоб межі комірок схлопувалися в одну лінію.",
        ],
      },

      {
        type: "hint",
        text: "Властивість border-collapse задається для елемента table.",
      },

      {
        type: "answer",
        text: `
table {
  border-collapse: collapse;
  border: 2px solid black;
}

td {
  border: 2px solid black;
  padding: 10px;
}`,
      },
    ],
  },
  {
    id: "css-border-spacing",
    title: "Відстань між комірками таблиці в CSS",
    description:
      "Вивчаємо властивість border-spacing, яка дозволяє задавати проміжок між комірками HTML-таблиці.",

    content: [
      {
        type: "heading",
        text: "Властивість border-spacing",
      },

      {
        type: "paragraph",
        text: "Властивість border-spacing використовується для встановлення відстані між межами сусідніх комірок таблиці.",
      },

      {
        type: "paragraph",
        text: "Вона працює тільки тоді, коли таблиця використовує стандартний режим відображення меж (border-collapse: separate).",
      },

      {
        type: "heading",
        text: "Синтаксис",
      },

      {
        type: "code",
        language: "css",
        code: `
table {
  border-spacing: 20px;
}`,
      },

      {
        type: "list",
        items: [
          "Одне значення — задає однакову відстань між рядками і стовпцями.",
          "Два значення — перше задає відстань між стовпцями, друге між рядками.",
        ],
      },

      {
        type: "heading",
        text: "Приклад таблиці",
      },

      {
        type: "code",
        language: "html",
        code: `
<table>
  <tr>
    <td>1</td>
    <td>2</td>
    <td>3</td>
  </tr>

  <tr>
    <td>4</td>
    <td>5</td>
    <td>6</td>
  </tr>
</table>`,
      },

      {
        type: "code",
        language: "css",
        code: `
table {
  border-spacing: 15px;
}

td {
  border: 1px solid black;
  padding: 10px;
}`,
      },

      {
        type: "example",
        title: "Результат",
        text: "Між комірками таблиці з'явиться проміжок 15px.",
      },

      {
        type: "heading",
        text: "Різні відступи по горизонталі та вертикалі",
      },

      {
        type: "code",
        language: "css",
        code: `
table {
  border-spacing: 30px 10px;
}`,
      },

      {
        type: "paragraph",
        text: "У цьому прикладі між стовпцями буде 30px, а між рядками — 10px.",
      },

      {
        type: "heading",
        text: "border-spacing та border-collapse",
      },

      {
        type: "paragraph",
        text: "Якщо встановити border-collapse: collapse, властивість border-spacing перестане працювати, оскільки межі комірок будуть об'єднані.",
      },

      {
        type: "note",
        text: "Для таблиць із проміжками між комірками використовуйте border-collapse: separate. Для таблиць із суцільними межами — border-collapse: collapse.",
      },

      {
        type: "heading",
        text: "Практичне завдання",
      },

      {
        type: "task",
        text: [
          "№1. Створіть таблицю 3×3.",
          "№2. Додайте межі всім коміркам.",
          "№3. Встановіть відстань між комірками за допомогою border-spacing.",
        ],
      },

      {
        type: "hint",
        text: "Властивість border-spacing задається для таблиці, а не для окремих td.",
      },

      {
        type: "answer",
        text: `
table {
  border-spacing: 20px;
}

td {
  border: 1px solid black;
  padding: 10px;
}`,
      },
    ],
  },
  {
    id: "css-empty-cells",
    title: "Вигляд порожніх комірок таблиці в CSS",
    description:
      "Вивчаємо властивість empty-cells, яка керує відображенням порожніх комірок у HTML-таблицях.",

    content: [
      {
        type: "heading",
        text: "Властивість empty-cells",
      },

      {
        type: "paragraph",
        text: "Властивість empty-cells використовується для керування відображенням меж та фону порожніх комірок таблиці.",
      },

      {
        type: "paragraph",
        text: "Вона застосовується до таблиць і визначає, чи потрібно показувати порожні комірки.",
      },

      {
        type: "heading",
        text: "Значення властивості",
      },

      {
        type: "list",
        items: [
          "show — порожні комірки відображаються (значення за замовчуванням).",
          "hide — порожні комірки приховуються.",
        ],
      },

      {
        type: "heading",
        text: "Приклад таблиці з порожньою коміркою",
      },

      {
        type: "code",
        language: "html",
        code: `
<table>
  <tr>
    <td>1</td>
    <td></td>
    <td>3</td>
  </tr>

  <tr>
    <td>4</td>
    <td>5</td>
    <td>6</td>
  </tr>
</table>`,
      },

      {
        type: "heading",
        text: "Стандартна поведінка",
      },

      {
        type: "code",
        language: "css",
        code: `
table {
  empty-cells: show;
}

td {
  border: 1px solid black;
  padding: 15px;
}`,
      },

      {
        type: "example",
        title: "Результат",
        text: "Порожня комірка залишиться видимою та матиме межу.",
      },

      {
        type: "heading",
        text: "Приховування порожніх комірок",
      },

      {
        type: "code",
        language: "css",
        code: `
        
table {
  empty-cells: hide;
}

td {
  border: 1px solid black;
  padding: 15px;
}`,
      },

      {
        type: "example",
        title: "Результат",
        text: "Порожні комірки без вмісту будуть приховані.",
      },

      {
        type: "heading",
        text: "Взаємодія з border-collapse",
      },

      {
        type: "paragraph",
        text: "Властивість empty-cells працює тільки при режимі border-collapse: separate. При collapse межі комірок об'єднуються, тому empty-cells не впливає на результат.",
      },

      {
        type: "note",
        text: "У сучасній верстці ця властивість використовується рідко, але вона може бути корисною при створенні складних таблиць.",
      },

      {
        type: "heading",
        text: "Практичне завдання",
      },

      {
        type: "task",
        text: [
          "№1. Створіть таблицю 3×3.",
          "№2. Залиште одну комірку порожньою.",
          "№3. Додайте межі коміркам.",
          "№4. Перевірте роботу empty-cells зі значеннями show та hide.",
        ],
      },

      {
        type: "hint",
        text: "Властивість empty-cells задається для елемента table, а не для td.",
      },

      {
        type: "answer",
        text: `
table {
  empty-cells: hide;
  border-collapse: separate;
}

td {
  border: 1px solid black;
  padding: 15px;
}`,
      },
    ],
  },
  {
    id: "css-table-vertical-align",
    title: "Вирівнювання тексту по вертикалі в комірках CSS",
    description:
      "Вивчаємо властивість vertical-align для вертикального вирівнювання тексту всередині комірок таблиці.",

    content: [
      {
        type: "heading",
        text: "Властивість vertical-align",
      },

      {
        type: "paragraph",
        text: "Властивість vertical-align використовується для зміни вертикального положення тексту або інших елементів всередині комірок таблиці.",
      },

      {
        type: "paragraph",
        text: "Найчастіше вона використовується для елементів td та th у таблицях.",
      },

      {
        type: "heading",
        text: "Основні значення",
      },

      {
        type: "list",
        items: [
          "top — вирівнювання по верхньому краю комірки.",
          "middle — вирівнювання по центру комірки.",
          "bottom — вирівнювання по нижньому краю комірки.",
          "baseline — вирівнювання по базовій лінії тексту (значення за замовчуванням).",
        ],
      },

      {
        type: "heading",
        text: "Приклад таблиці",
      },

      {
        type: "code",
        language: "html",
        code: `
<table>
  <tr>
    <td>Текст 1</td>
    <td>Текст 2</td>
    <td>Текст 3</td>
  </tr>
</table>`,
      },

      {
        type: "heading",
        text: "Вирівнювання по верхньому краю",
      },

      {
        type: "code",
        language: "css",
        code: `
table {
  width: 400px;
  height: 200px;
}

td {
  border: 1px solid black;
  vertical-align: top;
}`,
      },

      {
        type: "example",
        title: "Результат",
        text: "Текст у всіх комірках буде розташований зверху.",
      },

      {
        type: "heading",
        text: "Вирівнювання по центру",
      },

      {
        type: "code",
        language: "css",
        code: `
td {
  border: 1px solid black;
  vertical-align: middle;
}`,
      },

      {
        type: "example",
        title: "Результат",
        text: "Текст буде знаходитися посередині комірки по вертикалі.",
      },

      {
        type: "heading",
        text: "Вирівнювання по нижньому краю",
      },

      {
        type: "code",
        language: "css",
        code: `
td {
  border: 1px solid black;
  vertical-align: bottom;
}`,
      },

      {
        type: "example",
        title: "Результат",
        text: "Текст буде притиснутий до нижньої частини комірки.",
      },
      {
        type: "note",
        text: "У flex-контейнерах для вертикального вирівнювання частіше використовують align-items, а vertical-align переважно застосовується для таблиць та inline-елементів.",
      },
      {
        type: "heading",
        text: "Практичне завдання",
      },

      {
        type: "task",
        text: [
          "№1. Створіть таблицю з кількома рядками.",
          "№2. Задайте коміркам висоту.",
          "№3. Перевірте роботу vertical-align зі значеннями top, middle та bottom.",
        ],
      },

      {
        type: "hint",
        text: "Щоб побачити результат vertical-align, комірки повинні мати висоту більшу за висоту тексту.",
      },

      {
        type: "answer",
        text: `
table {
  width: 400px;
  height: 200px;
}

td {
  border: 1px solid black;
  vertical-align: middle;
}`,
      },
    ],
  },
  {
    id: "css-table-layout",
    title: "Зміна розмірів комірок таблиці браузером у CSS",
    description:
      "Вивчаємо властивість table-layout, яка визначає спосіб розрахунку ширини комірок HTML-таблиці браузером.",

    content: [
      {
        type: "heading",
        text: "Властивість table-layout",
      },

      {
        type: "paragraph",
        text: "Властивість table-layout керує тим, як браузер визначає ширину стовпців таблиці.",
      },

      {
        type: "paragraph",
        text: "Вона застосовується до елемента table.",
      },

      {
        type: "heading",
        text: "Основні значення",
      },

      {
        type: "list",
        items: [
          "auto — стандартний режим. Браузер сам змінює ширину комірок залежно від вмісту.",
          "fixed — ширина комірок визначається за заданою шириною таблиці та першими рядками.",
        ],
      },

      {
        type: "heading",
        text: "Режим auto",
      },

      {
        type: "code",
        language: "html",
        code: `
<table>
  <tr>
    <td>Короткий текст</td>
    <td>
      Дуже довгий текст, який може змінити ширину колонки
    </td>
  </tr>

  <tr>
    <td>Комірка 3</td>
    <td>Комірка 4</td>
  </tr>
</table>`,
      },

      {
        type: "code",
        language: "css",
        code: `
table {
  width: 500px;
  table-layout: auto;
  border-collapse: collapse;
}

td {
  border: 1px solid black;
  padding: 10px;
}`,
      },

      {
        type: "example",
        title: "Результат",
        text: "Браузер буде змінювати ширину стовпців відповідно до вмісту.",
      },

      {
        type: "heading",
        text: "Режим fixed",
      },

      {
        type: "code",
        language: "css",
        code: `
table {
  width: 500px;
  table-layout: fixed;
  border-collapse: collapse;
}

td {
  border: 1px solid black;
  padding: 10px;
}`,
      },

      {
        type: "example",
        title: "Результат",
        text: "Ширина стовпців залишиться стабільною, навіть якщо текст у комірці дуже довгий.",
      },

      {
        type: "heading",
        text: "Порівняння auto і fixed",
      },

      {
        type: "list",
        items: [
          "auto — зручний для таблиць із різним за довжиною вмістом.",
          "fixed — швидший та передбачуваніший для великих таблиць.",
          "fixed часто використовують у професійній верстці, коли важливий контроль розміру.",
        ],
      },
      {
        type: "note",
        text: "table-layout: fixed допомагає зробити таблиці стабільними та покращує швидкість їх відображення браузером.",
      },
      {
        type: "heading",
        text: "Практичне завдання",
      },

      {
        type: "task",
        text: [
          "№1. Створіть таблицю з двома стовпцями.",
          "№2. Додайте довгий текст у одну з комірок.",
          "№3. Перевірте різницю між table-layout: auto та table-layout: fixed.",
        ],
      },

      {
        type: "hint",
        text: "Щоб побачити різницю, задайте таблиці конкретну ширину через width.",
      },

      {
        type: "answer",
        text: `
table {
  width: 500px;
  table-layout: fixed;
  border-collapse: collapse;
}

td {
  border: 1px solid black;
  padding: 10px;
}`,
      },
    ],
  },
  {
    id: "css-pseudo-elements-before-after",
    title: "Вставка псевдоэлементів у CSS",
    description:
      "Вивчаємо псевдоелементи ::before і ::after, властивість content та створення додаткових елементів через CSS.",

    content: [
      {
        type: "heading",
        text: "Вставка псевдоелементів у CSS",
      },

      {
        type: "paragraph",
        text: "Псевдоелементи ::before і ::after дозволяють додавати додатковий контент до HTML-елементів без зміни структури документа.",
      },

      {
        type: "list",
        items: [
          "::before — додає елемент перед вмістом.",
          "::after — додає елемент після вмісту.",
          "content — визначає текст або значення, яке буде вставлено.",
        ],
      },

      {
        type: "heading",
        text: "Псевдоелемент ::after",
      },

      {
        type: "paragraph",
        text: "За допомогою ::after можна додавати символи або текст після існуючого вмісту елемента.",
      },

      {
        type: "code",
        language: "html",
        code: `
<ul>
  <li>HTML</li>
  <li>CSS</li>
  <li>JavaScript</li>
</ul>`,
      },

      {
        type: "code",
        language: "css",
        code: `
li::after {
  content: ".";
}`,
      },

      {
        type: "example",
        title: "Результат",
        text: "Після кожного елемента списку CSS автоматично додасть крапку.",
      },

      {
        type: "heading",
        text: "Створення декоративних елементів",
      },

      {
        type: "paragraph",
        text: "Псевдоелементи часто використовують для створення декоративних блоків, іконок та інших елементів дизайну.",
      },

      {
        type: "code",
        language: "html",
        code: `
<p>
  <span>Текст</span>
  <span>Другий текст</span>
</p>`,
      },

      {
        type: "code",
        language: "css",
        code: `
span {
  position: relative;
}

span::after {
  content: "";
  position: absolute;
  width: 10px;
  height: 10px;
  background-color: red;
  right: 0;
  top: -10px;
}`,
      },

      {
        type: "note",
        text: "Псевдоелементи не існують у HTML-коді. Вони створюються тільки браузером під час відображення сторінки.",
      },

      {
        type: "heading",
        text: "Практичні завдання",
      },

      {
        type: "task",
        text: [
          "№1. Дан список ul. Додайте крапку в кінці кожного li через ::after.",
          "№2. Створіть псевдоелемент у span у вигляді червоного квадратика.",
          "№3. Розташуйте квадратик над текстом справа через position: absolute.",
        ],
      },

      {
        type: "code",
        language: "css",
        code: `
/* Завдання 1 */

li::after {
  content: ".";
}


/* Завдання 2 */

span {
  position: relative;
}

span::after {
  content: "";
  position: absolute;
  width: 10px;
  height: 10px;
  background-color: red;
  right: 0;
  top: -10px;
}`,
      },

      {
        type: "hint",
        text: "Для абсолютного позиціонування псевдоелемента батьківський елемент повинен мати position: relative.",
      },

      {
        type: "answer",
        text: `
<ul>
  <li>HTML</li>
  <li>CSS</li>
  <li>JavaScript</li>
</ul>

<style>
li::after {
  content: ".";
}

span {
  position: relative;
}

span::after {
  content: "";
  position: absolute;
  width: 10px;
  height: 10px;
  background-color: red;
  right: 0;
  top: -10px;
}
</style>`,
      },
    ],
  },
  {
    id: "css-counters-auto-numbering",
    title: "Автоматична нумерація елементів у CSS",
    description:
      "Вивчаємо CSS-лічильники counter-reset та counter-increment для автоматичної нумерації елементів сторінки.",

    content: [
      {
        type: "heading",
        text: "Автоматична нумерація елементів у CSS",
      },

      {
        type: "paragraph",
        text: "CSS дозволяє автоматично нумерувати елементи без використання JavaScript. Для цього використовуються лічильники CSS (counters).",
      },

      {
        type: "list",
        items: [
          "counter-reset — створює або скидає лічильник.",
          "counter-increment — збільшує значення лічильника.",
          "counter() — виводить поточне значення лічильника.",
        ],
      },

      {
        type: "heading",
        text: "Створення простого лічильника",
      },

      {
        type: "paragraph",
        text: "Спочатку створюємо лічильник за допомогою counter-reset. Потім збільшуємо його для кожного елемента через counter-increment.",
      },

      {
        type: "code",
        language: "css",
        code: `
.list {
  counter-reset: item;
}

.list li {
  counter-increment: item;
}

.list li::before {
  content: counter(item) ". ";
}`,
      },

      {
        type: "code",
        language: "html",
        code: `
<ul class="list">
  <li>HTML</li>
  <li>CSS</li>
  <li>JavaScript</li>
</ul>`,
      },

      {
        type: "example",
        title: "Результат",
        text: "Браузер автоматично додасть номери перед кожним елементом списку.",
      },

      {
        type: "code",
        language: "text",
        code: `
1. HTML
2. CSS
3. JavaScript`,
      },

      {
        type: "heading",
        text: "Нумерація заголовків",
      },

      {
        type: "paragraph",
        text: "CSS-лічильники часто використовують для нумерації розділів документа або заголовків.",
      },

      {
        type: "code",
        language: "css",
        code: `
body {
  counter-reset: section;
}

h2 {
  counter-increment: section;
}

h2::before {
  content: counter(section) ". ";
}`,
      },

      {
        type: "code",
        language: "html",
        code: `
<h2>Встановлення HTML</h2>
<h2>Основи CSS</h2>
<h2>Робота з JavaScript</h2>`,
      },

      {
        type: "heading",
        text: "Додавання символу № перед номером",
      },

      {
        type: "paragraph",
        text: "У властивості content можна додати будь-який текст перед значенням лічильника.",
      },

      {
        type: "code",
        language: "css",
        code: `
h2::before {
  content: "№" counter(section) " ";
}`,
      },

      {
        type: "example",
        title: "Результат",
        text: "Перед кожним заголовком з'явиться символ номера.",
      },

      {
        type: "code",
        language: "text",
        code: `
№1 Встановлення HTML
№2 Основи CSS
№3 Робота з JavaScript`,
      },

      {
        type: "note",
        text: "CSS-лічильники зручні для створення змісту, нумерації списків, розділів документа та інших елементів без додаткового коду.",
      },

      {
        type: "heading",
        text: "Практичні завдання",
      },

      {
        type: "task",
        text: [
          "№1. Дані заголовки. Зробіть так, щоб перед кожним заголовком стояв його номер.",
          "№2. Додайте перед кожним номером знак №.",
        ],
      },

      {
        type: "code",
        language: "html",
        code: `
<!-- Початковий код -->

<h2>Перший розділ</h2>
<h2>Другий розділ</h2>
<h2>Третій розділ</h2>`,
      },

      {
        type: "hint",
        text: "Створіть лічильник через counter-reset для батьківського елемента. Для заголовків використайте counter-increment.",
      },

      {
        type: "answer",
        text: `
body {
  counter-reset: title;
}

h2 {
  counter-increment: title;
}

h2::before {
  content: "№" counter(title) ". ";
}`,
      },
    ],
  },
  {
    id: "css-attr",
    title: "Атрибути елементів CSS",
    description:
      "Вивчаємо CSS-функцію attr(), яка дозволяє отримувати значення атрибутів HTML-елементів і використовувати їх у стилях.",

    content: [
      {
        type: "heading",
        text: "Атрибути елементів CSS",
      },

      {
        type: "paragraph",
        text: "CSS-функція attr() дозволяє отримати значення HTML-атрибуту елемента та вставити його у властивість CSS через content.",
      },

      {
        type: "heading",
        text: "Синтаксис attr()",
      },

      {
        type: "code",
        language: "css",
        code: `
.element::after {
  content: attr(data-text);
}`,
      },

      {
        type: "paragraph",
        text: "У цьому прикладі CSS бере значення атрибуту data-text і додає його після елемента.",
      },

      {
        type: "heading",
        text: "Приклад використання",
      },

      {
        type: "code",
        language: "html",
        code: `
<p data-info="Додатковий текст">
  Основний текст
</p>`,
      },

      {
        type: "code",
        language: "css",
        code: `
p::after {
  content: attr(data-info);
  color: gray;
}`,
      },

      {
        type: "example",
        title: "Виведення адреси посилання",
        text: "За допомогою attr() можна показувати адресу посилання при наведенні курсора.",
      },

      {
        type: "code",
        language: "html",
        code: `
<p>
  Перейти на
  <a href="https://example.com">
    сайт
  </a>
</p>`,
      },

      {
        type: "code",
        language: "css",
        code: `
a:hover::after {
  content: attr(href);
  margin-left: 10px;
  color: gray;
}`,
      },

      {
        type: "paragraph",
        text: "При наведенні на посилання CSS бере значення атрибуту href і показує його поруч із текстом посилання.",
      },

      {
        type: "note",
        text: "Функція attr() найчастіше використовується разом із псевдоелементами ::before та ::after.",
      },

      {
        type: "heading",
        text: "Практичне завдання",
      },

      {
        type: "task",
        text: [
          "№1. Є текст із посиланнями.",
          "№2. Додайте CSS, щоб при наведенні над посиланням з'являлася його адреса.",
          "№3. Використайте attr(href) та псевдоелемент ::after.",
        ],
      },

      {
        type: "code",
        language: "html",
        code: `
<!-- Початковий код -->

<p>
  Документація:
  <a href="https://developer.mozilla.org">
    MDN
  </a>
</p>

<p>
  Пошук:
  <a href="https://google.com">
    Google
  </a>
</p>`,
      },

      {
        type: "hint",
        text: "Для отримання адреси посилання використовуйте attr(href). Додавати текст потрібно через content у псевдоелементі.",
      },

      {
        type: "answer",
        text: `
a:hover::after {
  content: " (" attr(href) ")";
  margin-left: 5px;
  color: gray;
}`,
      },
    ],
  },
  {
    id: "css-calc-function",
    title: "Функція для обчислення в CSS",
    description:
      "Вивчаємо функцію calc() у CSS для виконання математичних обчислень при створенні розмірів блоків.",

    content: [
      {
        type: "heading",
        text: "Функція calc() у CSS",
      },

      {
        type: "paragraph",
        text: "Функція calc() дозволяє виконувати математичні обчислення прямо у CSS-властивостях. Вона часто використовується для створення адаптивних макетів, коли розмір елемента залежить від декількох значень.",
      },

      {
        type: "heading",
        text: "Синтаксис calc()",
      },

      {
        type: "code",
        language: "css",
        code: `
.block {
  width: calc(100% - 100px);
}`,
      },

      {
        type: "paragraph",
        text: "Усередині calc() можна використовувати додавання (+), віднімання (-), множення (*) та ділення (/). Між оператором і числами обов'язково повинні бути пробіли.",
      },

      {
        type: "example",
        title: "Приклад використання calc()",
        text: "Створимо блок, ширина якого буде на 100px меншою за ширину батьківського елемента.",
      },

      {
        type: "code",
        language: "html",
        code: `
  <div class="block">
  Блок
</div>`,
      },

      {
        type: "code",
        language: "css",
        code: `
.block {
  width: calc(100% - 100px);
  height: 100px;
  background-color: lightblue;
}`,
      },

      {
        type: "heading",
        text: "Використання різних одиниць вимірювання",
      },

      {
        type: "paragraph",
        text: "Одна з головних переваг calc() — можливість поєднувати різні одиниці вимірювання. Наприклад, відсотки та пікселі.",
      },

      {
        type: "code",
        language: "css",
        code: `
.container {
  width: calc(50% + 200px);
}`,
      },

      {
        type: "paragraph",
        text: "У цьому прикладі ширина елемента буде дорівнювати половині ширини батьківського блоку плюс 200px.",
      },
      {
        type: "note",
        text: "calc() особливо корисний у адаптивній верстці. Наприклад, можна зробити блок шириною calc(100% - ширина меню), не використовуючи JavaScript.",
      },
      {
        type: "heading",
        text: "Практичні завдання",
      },

      {
        type: "task",
        text: [
          "№1. Дан блок.",
          "Зробіть його ширину на 100px меншою за 100%.",
          "Використайте функцію calc().",
        ],
      },

      {
        type: "code",
        language: "html",
        code: `
<div class="block">
  Block
</div>`,
      },

      {
        type: "hint",
        text: "Потрібно відняти 100px від ширини батьківського елемента за допомогою calc().",
      },

      {
        type: "answer",
        text: `
.block {
  width: calc(100% - 100px);
}`,
      },

      {
        type: "task",
        text: [
          "№2. Дан блок.",
          "Зробіть його ширину на 200px більшою за 50%.",
          "Використайте функцію calc().",
        ],
      },

      {
        type: "code",
        language: "html",
        code: `
<div class="block">
  Block
</div>`,
      },

      {
        type: "hint",
        text: "Необхідно додати 200px до половини ширини батьківського елемента.",
      },

      {
        type: "answer",
        text: `
.block {
  width: calc(50% + 200px);
}`,
      },
    ],
  },
  {
    id: "css-max-min-functions",
    title: "Функції вибору одного зі значень у CSS",
    description:
      "Вивчаємо CSS-функції max() та min(), які дозволяють вибирати більше або менше значення під час розрахунку розмірів елементів.",

    content: [
      {
        type: "heading",
        text: "Функції max() і min() у CSS",
      },

      {
        type: "paragraph",
        text: "CSS має спеціальні функції max() і min(), які дозволяють вибрати одне значення з декількох залежно від їхнього розміру.",
      },

      {
        type: "list",
        items: [
          "max() — повертає найбільше значення.",
          "min() — повертає найменше значення.",
        ],
      },

      {
        type: "heading",
        text: "Функція max()",
      },

      {
        type: "paragraph",
        text: "Функція max() вибирає найбільше значення з переданих параметрів. Вона корисна, коли потрібно гарантувати мінімальний розмір елемента.",
      },

      {
        type: "code",
        language: "css",
        code: `
  .block {
  width: max(300px, 50%);
}`,
      },

      {
        type: "paragraph",
        text: "У цьому прикладі ширина блоку буде 300px або 50% — залежно від того, яке значення більше.",
      },

      {
        type: "example",
        title: "Приклад max()",
        text: "Створимо блок, який завжди буде не меншим за 300px.",
      },

      {
        type: "code",
        language: "html",
        code: `
<div class="block">
  Block
</div>`,
      },

      {
        type: "code",
        language: "css",
        code: `
.block {
  width: max(300px, 50%);
  height: 100px;
  background-color: lightblue;
}`,
      },

      {
        type: "heading",
        text: "Функція min()",
      },

      {
        type: "paragraph",
        text: "Функція min() вибирає найменше значення з переданих параметрів. Її часто використовують, щоб обмежити максимальний розмір елемента.",
      },

      {
        type: "code",
        language: "css",
        code: `.block {
  width: min(400px, 30%);
}`,
      },

      {
        type: "paragraph",
        text: "У цьому прикладі ширина блоку буде 400px або 30% — залежно від того, яке значення менше.",
      },
      {
        type: "note",
        text: "max() і min() часто використовують у адаптивній верстці разом із %, px, rem та іншими одиницями вимірювання.",
      },
      {
        type: "heading",
        text: "Практичні завдання",
      },

      {
        type: "task",
        text: [
          "№1. Дан блок.",
          "Зробіть його ширину 300px або 50% — залежно від того, яка величина більша.",
          "Використайте функцію max().",
        ],
      },

      {
        type: "code",
        language: "html",
        code: `
<div class="block">
  Block
</div>`,
      },

      {
        type: "hint",
        text: "Функція max() повертає найбільше значення з переданих варіантів.",
      },

      {
        type: "answer",
        text: `
.block {
  width: max(300px, 50%);
}`,
      },

      {
        type: "task",
        text: [
          "№2. Дан блок.",
          "Зробіть його ширину 400px або 30% — залежно від того, яка величина менша.",
          "Використайте функцію min().",
        ],
      },

      {
        type: "code",
        language: "html",
        code: `
<div class="block">
  Block
</div>`,
      },

      {
        type: "hint",
        text: "Функція min() повертає найменше значення з переданих варіантів.",
      },

      {
        type: "answer",
        text: `
.block {
  width: min(400px, 30%);
}`,
      },
    ],
  },
];
