import { Lesson } from "../types";

export const graphics: Lesson[] = [
  {
    id: "css-color-rgb",
    title: "Задання кольору через rgb у CSS",
    description:
      "Вивчаємо RGB-модель кольорів у CSS та створюємо різні відтінки за допомогою red, green і blue.",

    content: [
      {
        type: "heading",
        text: "RGB-модель кольорів",
      },

      {
        type: "paragraph",
        text: "У CSS колір можна задавати назвою, через HEX або за допомогою функції rgb(). RGB означає red, green, blue — червоний, зелений і синій. Комбінуючи ці три базові кольори в різних пропорціях, можна отримати велику кількість відтінків.",
      },

      {
        type: "paragraph",
        text: "Кожне значення в rgb() може бути від 0 до 255. Значення 0 означає повну відсутність відповідного кольору, а 255 — його максимальну інтенсивність.",
      },

      {
        type: "list",
        items: [
          "Перше значення — red (червоний).",
          "Друге значення — green (зелений).",
          "Третє значення — blue (синій).",
          "Кожне значення може бути від 0 до 255.",
          "rgb(0, 0, 0) — чорний колір.",
          "rgb(255, 255, 255) — білий колір.",
        ],
      },

      {
        type: "heading",
        text: "Чистий червоний колір",
      },

      {
        type: "code",
        language: "css",
        code: `p {

color: rgb(255, 0, 0);
}`,
      },

      {
        type: "example",
        title: "Результат",
        text: "Перше значення дорівнює 255, а зелений і синій кольори відсутні. У результаті отримуємо чистий червоний колір.",
      },

      {
        type: "heading",
        text: "Чистий зелений колір",
      },

      {
        type: "code",
        language: "css",
        code: `p {

color: rgb(0, 255, 0);
}`,
      },

      {
        type: "example",
        title: "Результат",
        text: "Червоного і синього немає, а зелений має максимальне значення 255. Отримуємо чистий зелений колір.",
      },

      {
        type: "heading",
        text: "Чистий синій колір",
      },

      {
        type: "code",
        language: "css",
        code: `p {

color: rgb(0, 0, 255);
}`,
      },

      {
        type: "example",
        title: "Результат",
        text: "Тільки синій має максимальну інтенсивність, тому отримуємо чистий синій колір.",
      },

      {
        type: "heading",
        text: "Змішування кольорів",
      },

      {
        type: "paragraph",
        text: "Якщо змінювати значення від 0 до 255, можна отримувати різні відтінки. Наприклад, rgb(0, 100, 0) дає темніший зелений, оскільки інтенсивність зеленого становить лише 100.",
      },

      {
        type: "code",
        language: "css",
        code: `p {

color: rgb(0, 100, 0);
}`,
      },

      {
        type: "heading",
        text: "Змішування червоного та синього",
      },

      {
        type: "code",
        language: "css",
        code: `p {

color: rgb(255, 0, 255);
}`,
      },

      {
        type: "example",
        title: "Результат",
        text: "Максимальна кількість червоного та синього без зеленого дає фіолетовий колір.",
      },

      {
        type: "heading",
        text: "Власний відтінок",
      },

      {
        type: "code",
        language: "css",
        code: `p {

color: rgb(200, 100, 125);
}`,
      },

      {
        type: "example",
        title: "Результат",
        text: "Усі три базові кольори мають різну інтенсивність, тому отримуємо змішаний відтінок.",
      },

      {
        type: "heading",
        text: "Білий і чорний кольори",
      },

      {
        type: "code",
        language: "css",
        code: `/* Білий */

p {
color: rgb(255, 255, 255);
}

/* Чорний */
h2 {
color: rgb(0, 0, 0);
}`,
      },

      {
        type: "note",
        text: "Запам'ятайте просте правило: 0 — кольору немає, 255 — максимальна інтенсивність. Порядок завжди однаковий: red, green, blue.",
      },

      {
        type: "heading",
        text: "Практичне завдання",
      },

      {
        type: "task",
        text: [
          "№1. Задайте через rgb() червоний колір для всіх абзаців.",
          "№2. Задайте через rgb() зелений колір для всіх h2.",
          "№3. Задайте через rgb() синій колір для всіх h3.",
          "№4. Змішайте чистий червоний і чистий зелений кольори. Який колір отримаєте?",
        ],
      },

      {
        type: "code",
        language: "html",
        code: `<!-- Початковий код -->

<p>Абзац</p> <h2>Заголовок h2</h2> <h3>Заголовок h3</h3>`,
      },

      {
        type: "hint",
        text: "Для червоного використайте rgb(255, 0, 0), для зеленого — rgb(0, 255, 0), для синього — rgb(0, 0, 255).",
      },

      {
        type: "answer",
        text: `p {

color: rgb(255, 0, 0);
}

h2 {
color: rgb(0, 255, 0);
}

h3 {
color: rgb(0, 0, 255);
}

/* Червоний + зелений */
color: rgb(255, 255, 0);`,
      },
    ],
  },
  {
    id: "css-color-hex",
    title: "Задання кольору через # у CSS",
    description:
      "Вивчаємо HEX-формат кольорів у CSS та розбираємо, як шістнадцяткові значення визначають червоний, зелений і синій компоненти.",

    content: [
      {
        type: "heading",
        text: "HEX-формат кольорів",
      },

      {
        type: "paragraph",
        text: "Колір у CSS можна задавати за допомогою rgb(), але такий запис може бути досить громіздким. Зручним альтернативним способом є HEX-формат — шістнадцяткове значення кольору.",
      },

      {
        type: "paragraph",
        text: "HEX означає hexadecimal — шістнадцяткова система числення. На відміну від десяткової системи, у ній використовуються 16 символів: цифри від 0 до 9 та літери A, B, C, D, E, F.",
      },

      {
        type: "list",
        items: [
          "0–9 — звичайні цифри.",
          "A — 10.",
          "B — 11.",
          "C — 12.",
          "D — 13.",
          "E — 14.",
          "F — 15.",
        ],
      },

      {
        type: "heading",
        text: "Будова HEX-кольору",
      },

      {
        type: "paragraph",
        text: "HEX-колір починається зі знака # і містить шість символів. Перші два символи визначають кількість червоного, наступні два — зеленого, а останні два — синього.",
      },

      {
        type: "code",
        language: "text",
        code: `#RRGGBB

RR — red (червоний)
GG — green (зелений)
BB — blue (синій)`,
      },

      {
        type: "paragraph",
        text: "Кожен компонент може мати значення від 00 до FF. Значення 00 означає повну відсутність кольору, а FF — його максимальну інтенсивність.",
      },

      {
        type: "heading",
        text: "Чистий червоний колір",
      },

      {
        type: "code",
        language: "css",
        code: `p {

color: #FF0000;
}`,
      },

      {
        type: "example",
        title: "Результат",
        text: "FF — максимальна кількість червоного, а 00 для зеленого та синього означає їх відсутність. Отримуємо чистий червоний колір.",
      },

      {
        type: "heading",
        text: "Чистий зелений колір",
      },

      {
        type: "code",
        language: "css",
        code: `p {

color: #00FF00;
}`,
      },

      {
        type: "example",
        title: "Результат",
        text: "Червоного та синього немає, а зелений має максимальне значення FF. Отримуємо чистий зелений колір.",
      },

      {
        type: "heading",
        text: "Чистий синій колір",
      },

      {
        type: "code",
        language: "css",
        code: `p {

color: #0000FF;
}`,
      },

      {
        type: "example",
        title: "Результат",
        text: "Тільки синій компонент має максимальне значення FF, тому отримуємо чистий синій колір.",
      },

      {
        type: "heading",
        text: "Білий та чорний кольори",
      },

      {
        type: "code",
        language: "css",
        code: `/* Білий */

p {
color: #FFFFFF;
}

/* Чорний */
h2 {
color: #000000;
}`,
      },

      {
        type: "paragraph",
        text: "Якщо всі три компоненти мають значення FF, отримуємо білий колір. Якщо всі три компоненти дорівнюють 00 — чорний.",
      },

      {
        type: "heading",
        text: "Приклад змішаного кольору",
      },

      {
        type: "code",
        language: "css",
        code: `p {

color: #FFC8FF;
}`,
      },

      {
        type: "paragraph",
        text: "У цьому кольорі FF відповідає червоному компоненту, C8 — зеленому, а FF — синьому. У десятковій системі це rgb(255, 200, 255).",
      },

      {
        type: "note",
        text: "Запам'ятайте порядок: #RRGGBB — червоний, зелений, синій. 00 — мінімальна інтенсивність, FF — максимальна.",
      },

      {
        type: "heading",
        text: "Практичне завдання",
      },

      {
        type: "task",
        text: [
          "№1. Встановіть усім абзацам колір #FFEEAA.",
          "№2. Встановіть усім абзацам чорний фон #000000 та білий колір тексту #FFFFFF. Визначте, які це кольори.",
          "№3. Перетворіть rgb(255, 200, 255) у HEX-формат.",
          "№4. Спробуйте самостійно створити HEX-код для жовтого кольору.",
        ],
      },

      {
        type: "code",
        language: "html",
        code: `<!-- Початковий код -->

<p>Перший абзац</p> <p>Другий абзац</p>`,
      },

      {
        type: "hint",
        text: "Для завдання №1 використайте #FFEEAA. Для чорного — #000000, для білого — #FFFFFF. Щоб перетворити rgb(255, 200, 255), замініть кожне десяткове значення його HEX-аналогом.",
      },

      {
        type: "answer",
        text: `/* №1 */

p {
color: #FFEEAA;
}

/* №2 */
p {
background-color: #000000;
color: #FFFFFF;
}

/* #000000 — чорний /
/ #FFFFFF — білий */

/* №3 */
rgb(255, 200, 255) → #FFC8FF

/* №4 */
p {
color: #FFFF00;
}

/* #FFFF00 — жовтий */`,
      },
    ],
  },
  {
    id: "css-color-rgba",
    title: "Задання кольору через rgba у CSS",
    description:
      "Вивчаємо функцію rgba() у CSS та використовуємо альфа-канал для створення прозорих і напівпрозорих кольорів.",

    content: [
      {
        type: "heading",
        text: "Функція rgba()",
      },

      {
        type: "paragraph",
        text: "Функція rgba() працює подібно до rgb(), але дозволяє додатково задавати прозорість кольору. Назва rgba складається з red, green, blue та alpha — червоного, зеленого, синього та альфа-каналу.",
      },

      {
        type: "code",
        language: "css",
        code: `rgba(red, green, blue, alpha)`,
      },

      {
        type: "paragraph",
        text: "Перші три значення визначають колір: red, green та blue. Четверте значення alpha визначає прозорість і може бути від 0 до 1.",
      },

      {
        type: "list",
        items: [
          "0 — повністю прозорий колір.",
          "0.5 — напівпрозорий колір.",
          "1 — повністю непрозорий колір.",
          "Чим менше значення alpha, тим прозорішим буде колір.",
        ],
      },

      {
        type: "heading",
        text: "Непрозорий колір",
      },

      {
        type: "code",
        language: "css",
        code: `p {

color: rgba(255, 0, 0, 1);
}`,
      },

      {
        type: "example",
        title: "Результат",
        text: "Значення alpha дорівнює 1, тому колір повністю непрозорий. У цьому випадку отримуємо чистий червоний колір.",
      },

      {
        type: "heading",
        text: "Напівпрозорий текст",
      },

      {
        type: "code",
        language: "css",
        code: `p {

color: rgba(255, 0, 0, 0.5);
}`,
      },

      {
        type: "example",
        title: "Результат",
        text: "Червоний колір має прозорість 50%. Якщо під текстом є інший фон, він буде частково просвічувати крізь текст.",
      },

      {
        type: "heading",
        text: "Прозора межа",
      },

      {
        type: "code",
        language: "css",
        code: `div {

border: 5px solid rgba(255, 0, 0, 0.5);
}`,
      },

      {
        type: "example",
        title: "Результат",
        text: "Межа має червоний колір із прозорістю 50%, тому фон під нею буде частково просвічувати.",
      },

      {
        type: "heading",
        text: "Напівпрозорий фон",
      },

      {
        type: "code",
        language: "css",
        code: `div {

background-color: rgba(0, 0, 0, 0.4);
}`,
      },

      {
        type: "example",
        title: "Результат",
        text: "Чорний фон має alpha 0.4, тому він напівпрозорий. Вміст або фон, розташований позаду елемента, частково буде видно.",
      },

      {
        type: "heading",
        text: "Різні значення alpha",
      },

      {
        type: "code",
        language: "css",
        code: `/* Повністю прозорий */

color: rgba(255, 0, 0, 0);

/* Напівпрозорий */
color: rgba(255, 0, 0, 0.5);

/* Майже непрозорий */
color: rgba(255, 0, 0, 0.8);

/* Повністю непрозорий */
color: rgba(255, 0, 0, 1);`,
      },

      {
        type: "note",
        text: "Alpha впливає саме на прозорість кольору. Значення 0 робить його повністю прозорим, а 1 — повністю непрозорим.",
      },

      {
        type: "heading",
        text: "Практичне завдання",
      },

      {
        type: "task",
        text: [
          "№1. Задайте абзацам червоний напівпрозорий колір.",
          "№2. Задайте фону зелений напівпрозорий колір.",
          "№3. Задайте межі блакитний напівпрозорий колір.",
        ],
      },

      {
        type: "code",
        language: "html",
        code: `<!-- Початковий код -->

<p>Текст абзацу</p>

<div> Блок </div>`,
      },

      {
        type: "hint",
        text: "Для червоного використайте rgba(255, 0, 0, 0.5), для зеленого — rgba(0, 255, 0, 0.5), для блакитного — rgba(0, 255, 255, 0.5).",
      },

      {
        type: "answer",
        text: `/* №1 */

p {
color: rgba(255, 0, 0, 0.5);
}

/* №2 */
div {
background-color: rgba(0, 255, 0, 0.5);
}

/* №3 */
div {
border: 5px solid rgba(0, 255, 255, 0.5);
}`,
      },
    ],
  },
  {
    id: "css-opacity",
    title: "Напівпрозорість через властивість opacity у CSS",
    description:
      "Вивчаємо властивість opacity та порівнюємо її з rgba() для створення прозорих і напівпрозорих елементів.",

    content: [
      {
        type: "heading",
        text: "Властивість opacity",
      },

      {
        type: "paragraph",
        text: "Властивість opacity дозволяє задати прозорість елемента. Вона приймає значення від 0 до 1, де 0 — повністю прозорий елемент, а 1 — повністю непрозорий.",
      },

      {
        type: "list",
        items: [
          "opacity: 0 — елемент повністю прозорий.",
          "opacity: 0.5 — елемент має прозорість 50%.",
          "opacity: 0.7 — елемент має прозорість 30%.",
          "opacity: 1 — елемент повністю непрозорий.",
        ],
      },

      {
        type: "heading",
        text: "Приклад використання opacity",
      },

      {
        type: "code",
        language: "css",
        code: `div {

border: 10px solid red;
background-color: black;
color: red;
opacity: 0.7;
}`,
      },

      {
        type: "example",
        title: "Результат",
        text: "Прозорість 0.7 застосовується до всього div: його фону, тексту та межі. Усе стає напівпрозорим одночасно.",
      },

      {
        type: "heading",
        text: "opacity та rgba() — у чому різниця?",
      },

      {
        type: "paragraph",
        text: "Головна відмінність полягає в тому, на що саме поширюється прозорість. Властивість opacity впливає на весь елемент разом із його дочірніми елементами. rgba() дозволяє задати прозорість конкретному кольору.",
      },

      {
        type: "heading",
        text: "Прозорість через opacity",
      },

      {
        type: "code",
        language: "css",
        code: `.box {

background-color: black;
color: white;
border: 5px solid red;
opacity: 0.5;
}`,
      },

      {
        type: "example",
        title: "Результат",
        text: "Фон, текст і межа стають напівпрозорими, тому весь елемент просвічується.",
      },

      {
        type: "heading",
        text: "Прозорість через rgba()",
      },

      {
        type: "code",
        language: "css",
        code: `.box {

background-color: rgba(0, 0, 0, 0.5);
color: white;
border: 5px solid red;
}`,
      },

      {
        type: "example",
        title: "Результат",
        text: "У цьому випадку напівпрозорим є тільки чорний фон. Текст і червона межа залишаються повністю непрозорими.",
      },

      {
        type: "heading",
        text: "Порівняння на практиці",
      },

      {
        type: "code",
        language: "html",
        code: `<div class="opacity-box">

opacity

</div>

<div class="rgba-box"> rgba </div>`,
      },

      {
        type: "code",
        language: "css",
        code: `.opacity-box {

background-color: black;
color: white;
border: 5px solid red;
opacity: 0.5;
}

.rgba-box {
background-color: rgba(0, 0, 0, 0.5);
color: white;
border: 5px solid red;
}`,
      },

      {
        type: "paragraph",
        text: "У першому блоці opacity: 0.5 робить прозорими фон, текст і межу. У другому блоці rgba() робить напівпрозорим тільки фон, тому текст і межа залишаються непрозорими.",
      },

      {
        type: "note",
        text: "Якщо потрібно зробити напівпрозорим увесь елемент — використовуйте opacity. Якщо потрібно зробити прозорим лише фон, текст або межу — зручніше використовувати rgba().",
      },

      {
        type: "heading",
        text: "Практичне завдання",
      },

      {
        type: "task",
        text: [
          "№1. Створіть фонову картинку та розмістіть поверх неї два блоки з текстом, фоном і межею.",
          "№2. Для першого блоку використайте opacity: 0.5.",
          "№3. Для другого блоку зробіть напівпрозорим тільки фон за допомогою rgba().",
          "№4. Порівняйте результат і визначте, які частини кожного блоку стали прозорими.",
        ],
      },

      {
        type: "code",
        language: "html",
        code: `<!-- Початковий код -->

<div class="container"> <div class="box opacity-box"> opacity </div>

<div class="box rgba-box"> rgba </div> </div>`,
      },

      {
        type: "hint",
        text: "Для першого блоку використайте opacity: 0.5. Для другого встановіть background-color: rgba(0, 0, 0, 0.5), але не додавайте opacity.",
      },

      {
        type: "answer",
        text: `.container {

background-image: url("bg.png");
background-repeat: no-repeat;
background-size: cover;
padding: 30px;
}

.box {
width: 300px;
padding: 30px;
margin-bottom: 20px;
border: 5px solid red;
background-color: black;
color: white;
font-size: 30px;
font-weight: bold;
}

.opacity-box {
opacity: 0.5;
}

.rgba-box {
background-color: rgba(0, 0, 0, 0.5);
}`,
      },
    ],
  },
  {
    id: "css-text-shadow",
    title: "Тінь тексту в CSS",
    description:
      "Вивчаємо властивість text-shadow та створюємо тіні тексту з різними кольорами, зміщеннями й рівнем розмиття.",

    content: [
      {
        type: "heading",
        text: "Властивість text-shadow",
      },

      {
        type: "paragraph",
        text: "Властивість text-shadow дозволяє додати тінь до тексту. За допомогою неї можна визначити колір тіні, її зміщення по горизонталі та вертикалі, а також ступінь розмиття.",
      },

      {
        type: "code",
        language: "css",
        code: `text-shadow: горизонтальне-зміщення вертикальне-зміщення розмиття колір;`,
      },

      {
        type: "list",
        items: [
          "Перше значення — горизонтальне зміщення тіні.",
          "Друге значення — вертикальне зміщення тіні.",
          "Третє значення — радіус розмиття.",
          "Четверте значення — колір тіні.",
        ],
      },

      {
        type: "heading",
        text: "Напрямок зміщення тіні",
      },

      {
        type: "paragraph",
        text: "Додатне значення по горизонталі зміщує тінь вправо, від'ємне — вліво. Додатне значення по вертикалі зміщує тінь вниз, від'ємне — вгору.",
      },

      {
        type: "code",
        language: "css",
        code: `/* Вправо */

text-shadow: 10px 0 0 red;

/* Вліво */
text-shadow: -10px 0 0 red;

/* Вниз */
text-shadow: 0 5px 0 red;

/* Вгору */
text-shadow: 0 -5px 0 red;`,
      },

      {
        type: "heading",
        text: "Тінь із розмиттям",
      },

      {
        type: "code",
        language: "css",
        code: `h1 {

text-shadow: 10px 5px 3px red;
}`,
      },

      {
        type: "example",
        title: "Результат",
        text: "Тінь зміщена на 10px вправо та на 5px вниз і має розмиття 3px.",
      },

      {
        type: "heading",
        text: "Тінь без розмиття",
      },

      {
        type: "code",
        language: "css",
        code: `h1 {

text-shadow: 10px 5px 0 green;
}`,
      },

      {
        type: "paragraph",
        text: "Якщо розмиття дорівнює 0px, тінь має чіткі краї. Значення 0 можна записати явно або не вказувати, якщо використовується відповідний скорочений запис.",
      },

      {
        type: "heading",
        text: "Декілька тіней",
      },

      {
        type: "paragraph",
        text: "До одного тексту можна застосувати декілька тіней. Їх записують через кому.",
      },

      {
        type: "code",
        language: "css",
        code: `h1 {

text-shadow:
0 -5px 0 red,
0 5px 0 green;
}`,
      },

      {
        type: "example",
        title: "Результат",
        text: "Текст отримує дві тіні: червону зверху та зелену знизу.",
      },

      {
        type: "heading",
        text: "Практичне завдання",
      },

      {
        type: "task",
        text: [
          "№1. Додайте тексту червону тінь, зміщену на 10px вправо, на 5px вниз і з розмиттям 3px.",
          "№2. Додайте тексту зелену тінь, зміщену на 10px вліво, на 5px вгору та без розмиття.",
          "№3. Додайте тексту тінь такого самого кольору, зміщену на 15px вправо та на 10px вгору, без розмиття.",
          "№4. Додайте тексту зелену тінь без зміщення, але з розмиттям 5px.",
          "№5. Додайте тексту дві тіні — червону зверху та зелену знизу.",
        ],
      },

      {
        type: "code",
        language: "html",
        code: `<!-- Початковий код -->

<h1>Текст із тінню</h1>`,
      },

      {
        type: "hint",
        text: "Пам'ятайте порядок значень: горизонтальне зміщення, вертикальне зміщення, розмиття, колір. Від'ємне значення по горизонталі — вліво, від'ємне по вертикалі — вгору.",
      },

      {
        type: "answer",
        text: `/* №1 */

h1 {
text-shadow: 10px 5px 3px red;
}

/* №2 */
h1 {
text-shadow: -10px -5px 0 green;
}

/* №3 */
h1 {
text-shadow: 15px -10px 0 currentColor;
}

/* №4 */
h1 {
text-shadow: 0 0 5px green;
}

/* №5 */
h1 {
text-shadow:
0 -5px 0 red,
0 5px 0 green;
}`,
      },
    ],
  },
  {
    id: "css-box-shadow",
    title: "Тінь блоку в CSS",
    description:
      "Вивчаємо властивість box-shadow та створюємо зовнішні й внутрішні тіні блоків із різними зміщеннями, розмиттям і напрямками.",

    content: [
      {
        type: "heading",
        text: "Властивість box-shadow",
      },

      {
        type: "paragraph",
        text: "Властивість box-shadow дозволяє додати тінь до блоку. На відміну від text-shadow, вона створює тінь навколо самого елемента.",
      },

      {
        type: "code",
        language: "css",
        code: `box-shadow: зміщення-по-горизонталі зміщення-по-вертикалі розмиття колір;`,
      },

      {
        type: "list",
        items: [
          "Перше значення — горизонтальне зміщення тіні.",
          "Друге значення — вертикальне зміщення тіні.",
          "Третє значення — розмиття тіні.",
          "Четверте значення — колір тіні.",
        ],
      },

      {
        type: "heading",
        text: "Зовнішня тінь",
      },

      {
        type: "code",
        language: "css",
        code: `.box {

width: 200px;
height: 200px;
background-color: lightgray;
box-shadow: 20px 15px 5px red;
}`,
      },

      {
        type: "example",
        title: "Результат",
        text: "Тінь зміщена на 20px вправо та на 15px вниз і має розмиття 5px.",
      },

      {
        type: "heading",
        text: "Внутрішня тінь",
      },

      {
        type: "paragraph",
        text: "Щоб зробити тінь внутрішньою, перед значеннями зміщення додають ключове слово inset.",
      },

      {
        type: "code",
        language: "css",
        code: `.box {

box-shadow: inset 0 0 5px black;
}`,
      },

      {
        type: "example",
        title: "Результат",
        text: "Тінь розташовується всередині блоку, без зміщення, з розмиттям 5px.",
      },

      {
        type: "heading",
        text: "Зміщення тіні",
      },

      {
        type: "code",
        language: "css",
        code: `/* Вправо */

box-shadow: 20px 0 0 red;

/* Вліво */
box-shadow: -20px 0 0 red;

/* Вниз */
box-shadow: 0 15px 0 red;

/* Вгору */
box-shadow: 0 -15px 0 red;`,
      },

      {
        type: "heading",
        text: "Декілька тіней",
      },

      {
        type: "paragraph",
        text: "До одного блоку можна застосувати декілька тіней. Їх потрібно записати через кому.",
      },

      {
        type: "code",
        language: "css",
        code: `.box {

box-shadow:
0 -15px 5px red,
0 15px 5px blue;
}`,
      },

      {
        type: "example",
        title: "Результат",
        text: "Блок отримує дві тіні: одну зверху та одну знизу.",
      },

      {
        type: "heading",
        text: "Тіні з чотирьох сторін",
      },

      {
        type: "code",
        language: "css",
        code: `.box {

box-shadow:
0 -30px 0 red,
30px 0 0 green,
0 30px 0 blue,
-30px 0 0 orange;
}`,
      },

      {
        type: "paragraph",
        text: "У цьому прикладі кожна тінь зміщена на 30px тільки в одному напрямку. Відсутність розмиття дозволяє отримати чіткі смуги з чотирьох сторін блоку.",
      },

      {
        type: "note",
        text: "Для внутрішньої тіні використовуйте inset. Від'ємне горизонтальне значення зміщує тінь вліво, від'ємне вертикальне — вгору.",
      },

      {
        type: "heading",
        text: "Практичне завдання",
      },

      {
        type: "task",
        text: [
          "№1. Створіть блок 200×200px і додайте йому червону тінь: 20px вправо, 15px вниз, розмиття 5px.",
          "№2. Додайте зелену тінь: 20px вправо, 15px вгору, без розмиття.",
          "№3. Додайте внутрішню чорну тінь без зміщення та з розмиттям 5px.",
          "№4. Додайте внутрішню чорну тінь: 4px вправо, 3px вниз, розмиття 3px.",
          "№5. Додайте блоку дві тіні: одну зверху, іншу знизу.",
          "№6. Додайте чотири тіні так, щоб кожна була з окремого боку блоку, зі зміщенням 30px і без розмиття.",
        ],
      },

      {
        type: "code",
        language: "html",
        code: `<!-- Початковий код -->

<div class="box"></div>`,
      },

      {
        type: "hint",
        text: "Для внутрішньої тіні використовуйте inset. Для зміщення вгору або вліво використовуйте від'ємні значення. Декілька тіней розділяються комою.",
      },

      {
        type: "answer",
        text: `/* Базові параметри */

.box {
width: 200px;
height: 200px;
background-color: lightgray;
}

/* №1 */
.box {
box-shadow: 20px 15px 5px red;
}

/* №2 */
.box {
box-shadow: 20px -15px 0 green;
}

/* №3 */
.box {
box-shadow: inset 0 0 5px black;
}

/* №4 */
.box {
box-shadow: inset 4px 3px 3px black;
}

/* №5 */
.box {
box-shadow:
0 -15px 5px red,
0 15px 5px green;
}

/* №6 */
.box {
box-shadow:
0 -30px 0 red,
30px 0 0 green,
0 30px 0 blue,
-30px 0 0 orange;
}`,
      },
    ],
  },
  {
    id: "css-linear-gradient",
    title: "Лінійний градієнт у CSS",
    description:
      "Вивчаємо функцію linear-gradient() та створюємо плавні переходи між кольорами в різних напрямках.",

    content: [
      {
        type: "heading",
        text: "Функція linear-gradient()",
      },

      {
        type: "paragraph",
        text: "Лінійний градієнт дозволяє створити плавний перехід від одного кольору до іншого. У CSS він задається за допомогою функції linear-gradient(), яку найчастіше використовують для властивості background або background-image.",
      },

      {
        type: "code",
        language: "css",
        code: `.box {

background-image: linear-gradient(red, blue);
}`,
      },

      {
        type: "example",
        title: "Результат",
        text: "Колір плавно переходить від червоного зверху до синього знизу.",
      },

      {
        type: "heading",
        text: "Напрямок градієнта",
      },

      {
        type: "paragraph",
        text: "За замовчуванням градієнт переходить зверху вниз. За допомогою напрямку можна змінити його орієнтацію.",
      },

      {
        type: "code",
        language: "css",
        code: `/* Зверху вниз */

.box {
background-image: linear-gradient(to bottom, red, blue);
}

/* Зліва направо */
.box {
background-image: linear-gradient(to right, red, blue);
}

/* Справа наліво */
.box {
background-image: linear-gradient(to left, red, blue);
}

/* Знизу вгору */
.box {
background-image: linear-gradient(to top, red, blue);
}`,
      },

      {
        type: "heading",
        text: "Градієнт під кутом",
      },

      {
        type: "paragraph",
        text: "Замість ключового слова напрямку можна вказати кут у градусах. Наприклад, 45deg створює діагональний напрямок градієнта.",
      },

      {
        type: "code",
        language: "css",
        code: `.box {

background-image: linear-gradient(
45deg,
red,
blue
);
}`,
      },

      {
        type: "example",
        title: "Результат",
        text: "Градієнт проходить по діагоналі під кутом 45 градусів.",
      },

      {
        type: "heading",
        text: "Градієнт із трьома кольорами",
      },

      {
        type: "code",
        language: "css",
        code: `.box {

background-image: linear-gradient(
to right,
red,
yellow,
green
);
}`,
      },

      {
        type: "paragraph",
        text: "У градієнті можна використовувати не тільки два, а й більше кольорів. CSS автоматично створює плавні переходи між ними.",
      },

      {
        type: "heading",
        text: "Контроль позиції кольорів",
      },

      {
        type: "code",
        language: "css",
        code: `.box {

background-image: linear-gradient(
to right,
red 0%,
yellow 50%,
blue 100%
);
}`,
      },

      {
        type: "paragraph",
        text: "Відсотки дозволяють визначити, у якій частині градієнта має знаходитися певний колір. Це дає більше контролю над переходом.",
      },

      {
        type: "heading",
        text: "Градієнт як фон блока",
      },

      {
        type: "code",
        language: "css",
        code: `.box {

width: 300px;
height: 200px;

background-image: linear-gradient(
135deg,
#2563eb,
#9333ea
);
}`,
      },

      {
        type: "example",
        title: "Результат",
        text: "Блок отримує плавний діагональний перехід від синього до фіолетового.",
      },

      {
        type: "note",
        text: "linear-gradient() створює зображення, тому його зазвичай використовують через background-image або background. Для суцільного кольору достатньо background-color.",
      },

      {
        type: "heading",
        text: "Практичне завдання",
      },

      {
        type: "task",
        text: [
          "№1. Створіть блок із градієнтом від червоного до синього зверху вниз.",
          "№2. Створіть градієнт від зеленого до жовтого зліва направо.",
          "№3. Створіть градієнт від чорного до білого справа наліво.",
          "№4. Створіть діагональний градієнт під кутом 45deg від синього до фіолетового.",
          "№5. Створіть градієнт із трьох кольорів: червоного, жовтого та зеленого.",
          "№6. Створіть градієнт зліва направо та задайте позиції кольорів: синій — 0%, білий — 50%, червоний — 100%.",
        ],
      },

      {
        type: "code",
        language: "html",
        code: `<!-- Початковий код -->

<div class="box"></div>`,
      },

      {
        type: "hint",
        text: "Використовуйте linear-gradient(). Напрямок можна задати словами to right, to left, to top, to bottom або кутом у градусах.",
      },

      {
        type: "answer",
        text: `/* №1 */

.box {
background-image: linear-gradient(red, blue);
}

/* №2 */
.box {
background-image: linear-gradient(
to right,
green,
yellow
);
}

/* №3 */
.box {
background-image: linear-gradient(
to left,
black,
white
);
}

/* №4 */
.box {
background-image: linear-gradient(
45deg,
blue,
purple
);
}

/* №5 */
.box {
background-image: linear-gradient(
to right,
red,
yellow,
green
);
}

/* №6 */
.box {
background-image: linear-gradient(
to right,
blue 0%,
white 50%,
red 100%
);
}`,
      },
    ],
  },
  {
    id: "css-radial-gradient",
    title: "Радіальний градієнт у CSS",
    description:
      "Вивчаємо функцію radial-gradient() та створюємо плавні переходи кольорів, що розходяться від центральної точки.",
    content: [
      {
        type: "heading",
        text: "Що таке radial-gradient()",
      },
      {
        type: "paragraph",
        text: "Функція radial-gradient() створює радіальний градієнт — плавний перехід між кольорами, який розходиться від певної точки назовні. На відміну від linear-gradient(), кольори поширюються не вздовж прямої лінії, а по колу або еліпсу.",
      },
      {
        type: "paragraph",
        text: "Радіальний градієнт можна використовувати як фон для блоків, кнопок, карток та інших елементів.",
      },
      {
        type: "heading",
        text: "Базовий синтаксис",
      },
      {
        type: "code",
        language: "css",
        code: `.element { background-image: radial-gradient(red, blue); },`,
      },
      {
        type: "paragraph",
        text: "У найпростішому варіанті вказуються два або більше кольорів. Перший колір починається в центрі градієнта, а наступні поступово змінюють його в напрямку до країв.",
      },
      {
        type: "example",
        title: "Результат",
        text: "У центрі елемента буде червоний колір, який плавно переходить у синій ближче до країв.",
      },
      {
        type: "heading",
        text: "Кілька кольорів",
      },
      {
        type: "paragraph",
        text: "У radial-gradient() можна використовувати три і більше кольорів. Вони будуть поступово переходити один в один.",
      },
      {
        type: "code",
        language: "css",
        code: ` .element { background-image: radial-gradient( red, yellow, blue ); },`,
      },
      {
        type: "example",
        title: "Результат",
        text: "У центрі буде червоний колір, далі він перейде в жовтий, а ближче до країв — у синій.",
      },
      {
        type: "heading",
        text: "Вказання форми градієнта",
      },
      {
        type: "paragraph",
        text: "За замовчуванням форма радіального градієнта залежить від розмірів елемента. За допомогою ключових слів circle та ellipse можна явно вказати форму.",
      },
      {
        type: "code",
        language: "css",
        code: ` .circle {
background-image: radial-gradient(
circle,
red,
blue
);
}

.ellipse {
background-image: radial-gradient(
ellipse,
red,
blue
);
},`,
      },
      {
        type: "heading",
        text: "Розмір градієнта",
      },
      {
        type: "paragraph",
        text: "Можна керувати розміром градієнта за допомогою ключових слів closest-side, farthest-side, closest-corner та farthest-corner.",
      },
      {
        type: "code",
        language: "css",
        code: `.element {
background-image: radial-gradient(
circle closest-side,
red,
blue
);
},`,
      },
      {
        type: "list",
        items: [
          "closest-side — градієнт доходить до найближчої сторони елемента.",
          "farthest-side — градієнт доходить до найдальшої сторони.",
          "closest-corner — градієнт доходить до найближчого кута.",
          "farthest-corner — градієнт доходить до найдальшого кута.",
        ],
      },
      { type: "heading", text: "Позиція градієнта" },
      {
        type: "paragraph",
        text: "За замовчуванням центр радіального градієнта знаходиться в центрі елемента. За допомогою ключового слова at можна змінити його положення.",
      },
      {
        type: "code",
        language: "css",
        code: `.element {
background-image: radial-gradient(
circle at top left,
red,
blue
);
},`,
      },
      {
        type: "example",
        title: "Результат",
        text: "Центр градієнта буде розташований у верхньому лівому куті елемента, а кольори поширюватимуться від цієї точки.",
      },
      { type: "heading", text: "Точне положення центру" },
      {
        type: "paragraph",
        text: "Позицію можна задавати не тільки словами, а й координатами у відсотках або інших одиницях CSS.",
      },
      {
        type: "code",
        language: "css",
        code: `.element {
background-image: radial-gradient(
circle at 30% 40%,
red,
blue
);
},`,
      },
      { type: "heading", text: "Позиції кольорів" },
      {
        type: "paragraph",
        text: "Для кожного кольору можна задати позицію, на якій він повинен починатися або завершуватися. Це дозволяє контролювати ширину кольорових зон.",
      },
      {
        type: "code",
        language: "css",
        code: `.element {
background-image: radial-gradient(
red 10%,
yellow 40%,
blue 80%
);
},`,
      },
      { type: "heading", text: "Практичне завдання" },
      {
        type: "task",
        text: [
          "Створіть блок шириною 300px і висотою 200px.",
          "Задайте йому радіальний градієнт від червоного до синього.",
          "Створіть градієнт із трьох кольорів: red, yellow, blue.",
          "Створіть круглий градієнт за допомогою circle.",
          "Перемістіть центр градієнта у верхній лівий кут.",
          "Задайте власні позиції для кольорів за допомогою відсотків.",
          "Створіть градієнт, центр якого знаходиться приблизно на 30% по горизонталі та 40% по вертикалі.",
          "Спробуйте різні значення closest-side, farthest-side, closest-corner та farthest-corner.",
        ],
      },
      {
        type: "code",
        language: "html",
        code: `<!--Початковий код -- >

    <div class="box" > </div>`,
      },
      {
        type: "hint",
        text: "Для створення градієнта використовуйте background-image: radial-gradient(...). Починайте з двох кольорів, а потім поступово додавайте форму, позицію, розмір та позиції кольорових зупинок.",
      },
      {
        type: "answer",
        text: `.box { width: 300px; height: 200px; background-image: radial-gradient( circle at 30% 40%, red 10%, yellow 40%, blue 80% ); }`,
      },
    ],
  },
  {
    id: "css-repeating-linear-gradient",
    title: "Повторюваний лінійний градієнт у CSS",
    description:
      "Вивчаємо функцію repeating-linear-gradient() та створюємо повторювані градієнти й кольорові смуги в CSS.",
    content: [
      {
        type: "heading",
        text: "Що таке repeating-linear-gradient()",
      },
      {
        type: "paragraph",
        text: "Функція repeating-linear-gradient() створює лінійний градієнт, який повторюється по всій області елемента. На відміну від звичайного linear-gradient(), його кольоровий шаблон продовжується після завершення першого повторення.",
      },
      {
        type: "paragraph",
        text: "За допомогою repeating-linear-gradient() можна створювати повторювані смуги, лінії та різні декоративні фонові візерунки без використання зображень.",
      },
      {
        type: "heading",
        text: "Базовий синтаксис",
      },
      {
        type: "code",
        language: "css",
        code: `.element { background-image: repeating-linear-gradient( red, blue 50px ); },`,
      },
      {
        type: "paragraph",
        text: "Перший колір починається з початку градієнта, а другий займає положення до 50px. Після завершення цього відрізка градієнт повторюється.",
      },
      {
        type: "example",
        title: "Результат",
        text: "Створиться повторюваний плавний перехід від червоного до синього.",
      },
      {
        type: "heading",
        text: "Повторювані смуги",
      },
      {
        type: "paragraph",
        text: "Якщо сусіднім кольорам задати однакові точки переходу, можна отримати чіткі кольорові смуги без плавного переходу.",
      },
      {
        type: "code",
        language: "css",
        code: `.element { background-image: repeating-linear-gradient( red 0, red 20px, blue 20px, blue 40px ); },`,
      },
      {
        type: "example",
        title: "Результат",
        text: "Створяться червоні смуги шириною 20px та сині смуги шириною 20px, які будуть повторюватися.",
      },
      {
        type: "heading",
        text: "Напрямок градієнта",
      },
      {
        type: "paragraph",
        text: "Напрямок повторюваного градієнта можна змінити за допомогою ключових слів to right, to left, to bottom, to top та інших напрямків.",
      },
      {
        type: "code",
        language: "css",
        code: `.element { background-image: repeating-linear-gradient( to right, red 0, red 20px, blue 20px, blue 40px ); },`,
      },
      {
        type: "example",
        title: "Результат",
        text: "Смуги будуть вертикальними та повторюватимуться зліва направо.",
      },
      {
        type: "heading",
        text: "Градієнт під кутом",
      },
      {
        type: "paragraph",
        text: "Напрямок можна задавати не тільки словами, а й кутом у градусах. Наприклад, 45deg створює діагональний напрямок.",
      },
      {
        type: "code",
        language: "css",
        code: `.element { background-image: repeating-linear-gradient( 45deg, red 0, red 20px, blue 20px, blue 40px ); },`,
      },
      {
        type: "example",
        title: "Результат",
        text: "На елементі з'являться повторювані діагональні червоні та сині смуги.",
      },
      {
        type: "heading",
        text: "Кілька кольорів",
      },
      {
        type: "paragraph",
        text: "У повторюваному градієнті можна використовувати три і більше кольорів. Кожному кольору можна задати власну позицію.",
      },
      {
        type: "code",
        language: "css",
        code: `.element { background-image: repeating-linear-gradient( red 0, red 20px, yellow 20px, yellow 40px, blue 40px, blue 60px ); },`,
      },
      {
        type: "example",
        title: "Результат",
        text: "Створяться червона, жовта та синя смуги, після чого весь шаблон повториться.",
      },
      {
        type: "heading",
        text: "Плавний повторюваний градієнт",
      },
      {
        type: "paragraph",
        text: "repeating-linear-gradient() також дозволяє створювати плавні переходи між кольорами. Для цього кольори розташовують на різних позиціях без однакових точок переходу.",
      },
      {
        type: "code",
        language: "css",
        code: `.element { background-image: repeating-linear-gradient( 90deg, red, yellow 30px, blue 60px ); },`,
      },
      {
        type: "example",
        title: "Результат",
        text: "Буде створено плавний перехід від червоного до жовтого, потім до синього. Після 60px цей градієнт почнеться знову.",
      },
      {
        type: "heading",
        text: "Практичне завдання",
      },
      {
        type: "task",
        text: [
          "Створіть блок шириною 300px і висотою 200px.",
          "Створіть повторюваний градієнт із червоних і синіх горизонтальних смуг.",
          "Зробіть повторювані вертикальні смуги за допомогою напрямку to right.",
          "Створіть діагональні смуги під кутом 45deg.",
          "Задайте ширину червоної та синьої смуги по 20px.",
          "Створіть повторюваний градієнт із трьох кольорів: red, yellow та blue.",
          "Створіть плавний повторюваний градієнт із трьох кольорів.",
        ],
      },
      {
        type: "code",
        language: "html",
        code: `<!-- Початковий код -->

<div class="box"></div>`,
      },
      {
        type: "hint",
        text: "Використовуйте repeating-linear-gradient(). Для чітких смуг задавайте однаковий колір на початковій та кінцевій позиціях, наприклад red 0, red 20px.",
      },
      {
        type: "answer",
        text: `.box { width: 300px; height: 200px; background-image: repeating-linear-gradient( 45deg, red 0, red 20px, yellow 20px, yellow 40px, blue 40px, blue 60px ); }`,
      },
    ],
  },
  {
    id: "css-repeating-radial-gradient",
    title: "Повторюваний радіальний градієнт у CSS",
    description:
      "Вивчаємо функцію repeating-radial-gradient() та створюємо повторювані радіальні градієнти, кільця й кругові візерунки в CSS.",
    content: [
      {
        type: "heading",
        text: "Що таке repeating-radial-gradient()",
      },
      {
        type: "paragraph",
        text: "Функція repeating-radial-gradient() створює радіальний градієнт, який повторюється від центру до країв елемента. На відміну від radial-gradient(), після завершення першого кольорового циклу градієнт продовжує повторюватися.",
      },
      {
        type: "paragraph",
        text: "За допомогою repeating-radial-gradient() можна створювати концентричні кола, кільця та різні декоративні фонові візерунки.",
      },
      {
        type: "heading",
        text: "Базовий синтаксис",
      },
      {
        type: "code",
        language: "css",
        code: `.element { background-image: repeating-radial-gradient( red, blue 50px ); },`,
      },
      {
        type: "paragraph",
        text: "У цьому прикладі градієнт починається з червоного кольору в центрі та поступово переходить у синій. Після завершення заданого відрізка градієнт повторюється.",
      },
      {
        type: "example",
        title: "Результат",
        text: "Від центру елемента будуть поширюватися повторювані кольорові переходи.",
      },
      {
        type: "heading",
        text: "Створення концентричних кілець",
      },
      {
        type: "paragraph",
        text: "Якщо задати однакові позиції для початку та кінця кольорових ділянок, можна створити чіткі концентричні кільця.",
      },
      {
        type: "code",
        language: "css",
        code: `.element { background-image: repeating-radial-gradient( red 0, red 20px, blue 20px, blue 40px ); },`,
      },
      {
        type: "example",
        title: "Результат",
        text: "Навколо центру елемента утворяться червоні та сині кільця, кожне з яких повторюється через 40px.",
      },
      {
        type: "heading",
        text: "Кругла та еліптична форма",
      },
      {
        type: "paragraph",
        text: "За допомогою ключових слів circle та ellipse можна явно вказати форму радіального градієнта.",
      },
      {
        type: "code",
        language: "css",
        code: `.circle {
background-image: repeating-radial-gradient(
circle,
red 0,
red 20px,
blue 20px,
blue 40px
);
}

.ellipse {
background-image: repeating-radial-gradient(
ellipse,
red 0,
red 20px,
blue 20px,
blue 40px
);
}, `,
      },
      { type: "heading", text: "Позиція градієнта" },
      {
        type: "paragraph",
        text: "Центр повторюваного радіального градієнта можна перемістити за допомогою ключового слова at.",
      },
      {
        type: "code",
        language: "css",
        code: `.element {
background-image: repeating-radial-gradient(
circle at top left,
red 0,
red 20px,
blue 20px,
blue 40px
);
}, `,
      },
      {
        type: "example",
        title: "Результат",
        text: "Концентричні кільця будуть поширюватися від верхнього лівого кута елемента.",
      },
      { type: "heading", text: "Точне положення центру" },
      {
        type: "paragraph",
        text: "Позицію центру можна задати у відсотках або інших одиницях CSS.",
      },
      {
        type: "code",
        language: "css",
        code: `.element {
background-image: repeating-radial-gradient(
circle at 30% 40%,
red 0,
red 20px,
blue 20px,
blue 40px
);
}, `,
      },
      { type: "heading", text: "Кілька кольорів" },
      {
        type: "paragraph",
        text: "У повторюваному радіальному градієнті можна використовувати три і більше кольорів. Після завершення останньої кольорової ділянки весь шаблон повторюється.",
      },
      {
        type: "code",
        language: "css",
        code: `.element {
background-image: repeating-radial-gradient(
red 0,
red 20px,
yellow 20px,
yellow 40px,
blue 40px,
blue 60px
);
}, `,
      },
      {
        type: "example",
        title: "Результат",
        text: "Від центру назовні будуть повторюватися червоні, жовті та сині кільця.",
      },
      { type: "heading", text: "Практичне завдання" },
      {
        type: "task",
        text: [
          "Створіть блок шириною 300px і висотою 300px.",
          "Створіть повторюваний радіальний градієнт із червоного та синього кольорів.",
          "Створіть концентричні червоні та сині кільця.",
          "Зробіть градієнт круглої форми за допомогою circle.",
          "Перемістіть центр градієнта у верхній лівий кут.",
          "Розташуйте центр градієнта на 30% по горизонталі та 40% по вертикалі.",
          "Створіть повторюваний градієнт із трьох кольорів: red, yellow та blue.",
        ],
      },
      {
        type: "code",
        language: "html",
        code: `<!--Початковий код -- >

<div class="box"></div>`,
      },
      {
        type: "hint",
        text: "Для повторюваного радіального градієнта використовуйте repeating-radial-gradient(). Для чітких кілець задавайте кожен колір на двох сусідніх позиціях, наприклад red 0, red 20px.",
      },
      {
        type: "answer",
        text: `.box { width: 300px; height: 300px; background-image: repeating-radial-gradient( circle at 30% 40%, red 0, red 20px, yellow 20px, yellow 40px, blue 40px, blue 60px ); }`,
      },
    ],
  },
];
