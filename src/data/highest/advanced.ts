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
        code: `p {
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
        code: `/* Збільшити відстань */
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
        code: `p {
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
        text: `/* №1 */
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
        code: `/* Усі літери великі */
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
        code: `p {
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
        text: `/* №1 */
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
        code: `p {
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
        text: `p {
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
        code: `p::first-letter {
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
        code: `<p>
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
        text: `p::first-letter {
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
        code: `p::first-line {
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
        code: `<p>
  Це довгий текст, який займає кілька рядків.
  Перший рядок буде виділений іншим стилем,
  а решта тексту залишиться без змін.
</p>`,
      },

      {
        type: "code",
        language: "css",
        code: `p {
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
        text: `p::first-line {
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
        code: `<pre>
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
        code: `<div class="box">
Дуже довгий текст, який не поміщається всередині блоку і продовжується вправо.
</div>`,
      },

      {
        type: "code",
        language: "css",
        code: `.box {
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
        code: `.pre {
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
        text: `/* №1 */
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
        code: `pre {
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
        code: `<pre>
function hello() {
\tconsole.log("Hello");
\tconsole.log("World");
}
</pre>`,
      },

      {
        type: "code",
        language: "css",
        code: `pre {
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
        code: `pre.tab2 {
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
        text: `/* №1 */

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
        code: `<div class="box">
Дуже довгий текст, який не поміщається всередині блоку та виходить за його межі.
</div>`,
      },

      {
        type: "code",
        language: "css",
        code: `.box {
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
        code: `.box {
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
        code: `.box {
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
        code: `.box {
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
        code: `.image-box {
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
        text: `/* №1 */
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
];
