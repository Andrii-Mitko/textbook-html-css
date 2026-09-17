import { Lesson } from "../types";
export const effects: Lesson[] = [
  {
    id: "css-transition",
    title: "Плавні переходи в CSS",
    description:
      "Вивчаємо CSS-переходи за допомогою властивостей transition-property, transition-duration, transition-timing-function, transition-delay та скороченої властивості transition.",
    content: [
      { type: "heading", text: "Що таке transition" },
      {
        type: "paragraph",
        text: "Властивість transition дозволяє створювати плавну зміну CSS-властивостей замість миттєвого переходу від одного значення до іншого. Наприклад, при наведенні курсора колір кнопки, її розмір або прозорість можуть змінюватися поступово.",
      },
      {
        type: "paragraph",
        text: "Переходи часто використовують разом із псевдокласом :hover, але вони можуть працювати і під час зміни інших станів елемента.",
      },
      { type: "heading", text: "Властивість transition-property" },
      {
        type: "paragraph",
        text: "Властивість transition-property визначає, які саме CSS-властивості повинні змінюватися плавно.",
      },
      {
        type: "code",
        language: "css",
        code: `.button { background-color: gray; transition-property: background-color; } .button:hover { background-color: blue; }`,
      },
      {
        type: "example",
        title: "Результат",
        text: "При наведенні курсора колір кнопки плавно зміниться з сірого на синій.",
      },
      { type: "heading", text: "Властивість transition-duration" },
      {
        type: "paragraph",
        text: "Властивість transition-duration визначає тривалість переходу. Значення можна задавати в секундах (s) або мілісекундах (ms).",
      },
      {
        type: "code",
        language: "css",
        code: `.button { background-color: gray; transition-property: background-color; transition-duration: 1s; } .button:hover { background-color: blue; }`,
      },
      {
        type: "example",
        title: "Результат",
        text: "Зміна кольору кнопки триватиме 1 секунду.",
      },
      { type: "heading", text: "Властивість transition-timing-function" },
      {
        type: "paragraph",
        text: "Властивість transition-timing-function визначає швидкість зміни властивості протягом переходу.",
      },
      {
        type: "list",
        items: [
          "ease — початок і завершення переходу повільніші, а середина швидша.",
          "linear — зміна відбувається з однаковою швидкістю.",
          "ease-in — перехід починається повільно.",
          "ease-out — перехід завершується повільно.",
          "ease-in-out — перехід повільний на початку та в кінці.",
        ],
      },
      {
        type: "code",
        language: "css",
        code: `.button { background-color: gray; transition-property: background-color; transition-duration: 1s; transition-timing-function: ease-in-out; } .button:hover { background-color: blue; }`,
      },
      { type: "heading", text: "Властивість transition-delay" },
      {
        type: "paragraph",
        text: "Властивість transition-delay визначає затримку перед початком переходу.",
      },
      {
        type: "code",
        language: "css",
        code: `.button { background-color: gray; transition-property: background-color; transition-duration: 1s; transition-delay: 0.5s; } .button:hover { background-color: blue; }`,
      },
      {
        type: "example",
        title: "Результат",
        text: "Після наведення курсора перехід почнеться через 0.5 секунди та триватиме 1 секунду.",
      },
      { type: "heading", text: "Скорочена властивість transition" },
      {
        type: "paragraph",
        text: "Властивість transition дозволяє записати основні параметри переходу в одному рядку.",
      },
      {
        type: "code",
        language: "css",
        code: `.button { background-color: gray; transition: background-color 1s ease-in-out 0.5s; } .button:hover { background-color: blue; }`,
      },
      {
        type: "paragraph",
        text: "У такому записі після назви властивості вказується тривалість, функція швидкості та затримка.",
      },
      { type: "heading", text: "Плавна зміна кількох властивостей" },
      {
        type: "paragraph",
        text: "За допомогою transition можна одночасно анімувати кілька CSS-властивостей. Для цього назви властивостей можна перелічити через кому.",
      },
      {
        type: "code",
        language: "css",
        code: `.button { background-color: gray; opacity: 1; transform: scale(1); transition: background-color 0.3s ease, transform 0.3s ease, opacity 0.3s ease; } .button:hover { background-color: blue; transform: scale(1.1); opacity: 0.8; }`,
      },
      {
        type: "note",
        text: "Властивість transition не створює анімацію сама по собі. Вона визначає, як плавно має відбуватися зміна властивості між двома станами елемента.",
      },
      { type: "heading", text: "Практичне завдання" },
      { type: "heading", text: "Практичне завдання 1" },
      {
        type: "task",
        text: [
          "Створіть кнопку.",
          "Задайте їй початковий колір фону.",
          "При наведенні курсора змініть колір фону.",
          "Використайте transition-property для плавної зміни background-color.",
        ],
      },
      {
        type: "code",
        language: "html",
        code: `<!-- Початковий код --> <button class="button">Наведіть курсор</button>`,
      },
      {
        type: "hint",
        text: "Задайте початковий background-color, додайте transition-property: background-color; та змініть background-color у стані :hover.",
      },
      {
        type: "answer",
        text: `.button { background-color: gray; transition-property: background-color; } .button:hover { background-color: blue; }`,
      },
      { type: "heading", text: "Практичне завдання 2" },
      {
        type: "task",
        text: [
          "Створіть кнопку.",
          "Задайте початковий колір фону.",
          "Зробіть плавну зміну кольору тривалістю 1 секунду.",
          "При наведенні змінюйте колір фону.",
          "Використайте transition-duration.",
        ],
      },
      {
        type: "code",
        language: "html",
        code: `<!-- Початковий код --> <button class="button">Наведіть курсор</button>`,
      },
      { type: "hint", text: "Задайте transition-duration: 1s;." },
      {
        type: "answer",
        text: `.button { background-color: gray; transition-property: background-color; transition-duration: 1s; } .button:hover { background-color: blue; }`,
      },
      { type: "heading", text: "Практичне завдання 3" },
      {
        type: "task",
        text: [
          "Створіть кнопку.",
          "Задайте початковий колір фону.",
          "Задайте тривалість переходу 1 секунду.",
          "Використайте timing-function ease-in-out.",
          "При наведенні змінюйте колір кнопки.",
        ],
      },
      {
        type: "code",
        language: "html",
        code: `<!-- Початковий код --> <button class="button">Наведіть курсор</button>`,
      },
      {
        type: "hint",
        text: "Використайте transition-timing-function: ease-in-out;.",
      },
      {
        type: "answer",
        text: `.button { background-color: gray; transition-property: background-color; transition-duration: 1s; transition-timing-function: ease-in-out; } .button:hover { background-color: blue; }`,
      },
      { type: "heading", text: "Практичне завдання 4" },
      {
        type: "task",
        text: [
          "Створіть кнопку.",
          "Задайте початковий колір фону.",
          "Задайте плавну зміну кольору тривалістю 1 секунду.",
          "Додайте затримку перед початком переходу 0.5 секунди.",
        ],
      },
      {
        type: "code",
        language: "html",
        code: `<!-- Початковий код --> <button class="button">Наведіть курсор</button>`,
      },
      { type: "hint", text: "Використайте transition-delay: 0.5s;." },
      {
        type: "answer",
        text: `.button { background-color: gray; transition-property: background-color; transition-duration: 1s; transition-delay: 0.5s; } .button:hover { background-color: blue; }`,
      },
      { type: "heading", text: "Практичне завдання 5" },
      {
        type: "task",
        text: [
          "Створіть кнопку.",
          "Задайте початковий колір фону.",
          "Зробіть плавну зміну кольору за допомогою скороченої властивості transition.",
          "Задайте тривалість переходу 0.5 секунди.",
          "Використайте функцію ease-in-out.",
        ],
      },
      {
        type: "code",
        language: "html",
        code: `<!-- Початковий код --> <button class="button">Наведіть курсор</button>`,
      },
      {
        type: "hint",
        text: "Синтаксис: transition: властивість тривалість timing-function.",
      },
      {
        type: "answer",
        text: `.button { background-color: gray; transition: background-color 0.5s ease-in-out; } .button:hover { background-color: blue; }`,
      },
      { type: "heading", text: "Практичне завдання 6" },
      {
        type: "task",
        text: [
          "Створіть блок.",
          "Задайте початковий стан transform: scale(1).",
          "При наведенні збільшуйте його за допомогою transform: scale().",
          "Зробіть зміну розміру плавною протягом 0.3 секунди.",
        ],
      },
      {
        type: "code",
        language: "html",
        code: `<!-- Початковий код --> <div class="box"></div>`,
      },
      {
        type: "hint",
        text: "Задайте transform: scale(1); у початковому стані, додайте transition для transform, а в :hover використайте transform: scale(1.2).",
      },
      {
        type: "answer",
        text: `.box { width: 100px; height: 100px; background-color: gray; transform: scale(1); transition: transform 0.3s ease; } .box:hover { transform: scale(1.2); }`,
      },
      { type: "heading", text: "Практичне завдання 7" },
      {
        type: "task",
        text: [
          "Створіть кнопку.",
          "Задайте початковий колір та прозорість.",
          "При наведенні одночасно змінюйте її колір та прозорість.",
          "Для кожної властивості задайте власну тривалість переходу.",
        ],
      },
      {
        type: "code",
        language: "html",
        code: `<!-- Початковий код --> <button class="button">Наведіть курсор</button>`,
      },
      {
        type: "hint",
        text: "Використайте кілька переходів, розділивши їх комами.",
      },
      {
        type: "answer",
        text: `.button { background-color: gray; opacity: 1; transition: background-color 0.3s ease, opacity 0.5s ease; } .button:hover { background-color: blue; opacity: 0.7; }`,
      },
      { type: "heading", text: "Практичне завдання 8" },
      {
        type: "task",
        text: [
          "Створіть кнопку.",
          "Задайте початкові значення кольору, прозорості та transform.",
          "При наведенні змінюйте її колір, прозорість та розмір.",
          "Для всіх змін використайте скорочену властивість transition.",
          "Задайте тривалість переходів 0.3 секунди.",
        ],
      },
      {
        type: "code",
        language: "html",
        code: `<!-- Початковий код --> <button class="button">Наведіть курсор</button>`,
      },
      {
        type: "hint",
        text: "Використайте кілька властивостей у transition через кому: background-color, opacity та transform.",
      },
      {
        type: "answer",
        text: `.button { background-color: gray; opacity: 1; transform: scale(1); transition: background-color 0.3s ease, opacity 0.3s ease, transform 0.3s ease; } .button:hover { background-color: blue; opacity: 0.8; transform: scale(1.1); }`,
      },
    ],
  },
  {
    id: "css-animation",
    title: "Робота з анімацією в CSS",
    description:
      "Вивчаємо CSS-анімації за допомогою властивостей animation-name, animation-duration, animation-delay, animation-timing-function, animation-iteration-count, animation-fill-mode та animation-direction.",
    content: [
      { type: "heading", text: "Що таке animation" },
      {
        type: "paragraph",
        text: "CSS-анімації дозволяють поступово змінювати властивості елемента протягом певного часу. На відміну від transition, анімація може запускатися без зміни стану елемента та містити кілька етапів зміни.",
      },
      {
        type: "paragraph",
        text: "Для створення анімації використовують правило @keyframes, у якому описують початковий та кінцевий стани або кілька проміжних станів елемента.",
      },
      {
        type: "code",
        language: "css",
        code: `@keyframes move { from { transform: translateX(0); } to { transform: translateX(200px); } } .box { animation-name: move; animation-duration: 2s; }`,
      },
      {
        type: "example",
        title: "Результат",
        text: "Блок протягом 2 секунд плавно переміститься з початкової позиції на 200px вправо.",
      },
      { type: "heading", text: "Властивість animation-name" },
      {
        type: "paragraph",
        text: "Властивість animation-name визначає назву анімації, яку потрібно застосувати до елемента. Назва повинна збігатися з назвою, заданою в правилі @keyframes.",
      },
      {
        type: "code",
        language: "css",
        code: `@keyframes move { from { transform: translateX(0); } to { transform: translateX(200px); } } .box { animation-name: move; animation-duration: 2s; }`,
      },
      { type: "heading", text: "Властивість animation-duration" },
      {
        type: "paragraph",
        text: "Властивість animation-duration визначає, скільки часу триває один цикл анімації. Значення задають у секундах (s) або мілісекундах (ms).",
      },
      {
        type: "code",
        language: "css",
        code: `@keyframes move { from { transform: translateX(0); } to { transform: translateX(200px); } } .box { animation-name: move; animation-duration: 2s; }`,
      },
      {
        type: "example",
        title: "Результат",
        text: "Один цикл анімації триватиме 2 секунди.",
      },
      { type: "heading", text: "Властивість animation-delay" },
      {
        type: "paragraph",
        text: "Властивість animation-delay визначає затримку перед початком анімації.",
      },
      {
        type: "code",
        language: "css",
        code: `@keyframes move { from { transform: translateX(0); } to { transform: translateX(200px); } } .box { animation-name: move; animation-duration: 2s; animation-delay: 1s; }`,
      },
      {
        type: "example",
        title: "Результат",
        text: "Після появи елемента пройде 1 секунда, а потім почнеться анімація тривалістю 2 секунди.",
      },
      { type: "heading", text: "Властивість animation-timing-function" },
      {
        type: "paragraph",
        text: "Властивість animation-timing-function визначає швидкість зміни властивості протягом анімації.",
      },
      {
        type: "list",
        items: [
          "ease — анімація починається та завершується повільніше.",
          "linear — анімація відбувається з однаковою швидкістю.",
          "ease-in — анімація починається повільно.",
          "ease-out — анімація завершується повільно.",
          "ease-in-out — анімація повільна на початку та в кінці.",
        ],
      },
      {
        type: "code",
        language: "css",
        code: `@keyframes move { from { transform: translateX(0); } to { transform: translateX(200px); } } .box { animation-name: move; animation-duration: 2s; animation-timing-function: ease-in-out; }`,
      },
      { type: "heading", text: "Властивість animation-iteration-count" },
      {
        type: "paragraph",
        text: "Властивість animation-iteration-count визначає, скільки разів повинна повторитися анімація.",
      },
      {
        type: "list",
        items: [
          "1 — анімація виконується один раз.",
          "2, 3, 4 тощо — анімація повторюється вказану кількість разів.",
          "infinite — анімація повторюється нескінченно.",
        ],
      },
      {
        type: "code",
        language: "css",
        code: `@keyframes move { from { transform: translateX(0); } to { transform: translateX(200px); } } .box { animation-name: move; animation-duration: 2s; animation-iteration-count: infinite; }`,
      },
      {
        type: "example",
        title: "Результат",
        text: "Анімація буде повторюватися нескінченно.",
      },
      { type: "heading", text: "Властивість animation-fill-mode" },
      {
        type: "paragraph",
        text: "Властивість animation-fill-mode визначає, які стилі анімації застосовуються до елемента до її початку або після її завершення.",
      },
      {
        type: "list",
        items: [
          "none — стилі анімації не застосовуються до або після її виконання.",
          "forwards — після завершення анімації зберігається останній стан.",
          "backwards — під час затримки застосовуються стилі першого ключового кадру.",
          "both — поєднує поведінку forwards та backwards.",
        ],
      },
      {
        type: "code",
        language: "css",
        code: `@keyframes move { from { transform: translateX(0); } to { transform: translateX(200px); } } .box { animation-name: move; animation-duration: 2s; animation-fill-mode: forwards; }`,
      },
      {
        type: "example",
        title: "Результат",
        text: "Після завершення анімації блок залишиться на кінцевій позиції.",
      },
      { type: "heading", text: "Властивість animation-direction" },
      {
        type: "paragraph",
        text: "Властивість animation-direction визначає напрямок відтворення анімації.",
      },
      {
        type: "list",
        items: [
          "normal — кожен цикл виконується від початку до кінця.",
          "reverse — кожен цикл виконується у зворотному напрямку.",
          "alternate — напрямок змінюється після кожного циклу.",
          "alternate-reverse — анімація починається у зворотному напрямку та змінює його після кожного циклу.",
        ],
      },
      {
        type: "code",
        language: "css",
        code: `@keyframes move { from { transform: translateX(0); } to { transform: translateX(200px); } } .box { animation-name: move; animation-duration: 2s; animation-iteration-count: infinite; animation-direction: alternate; }`,
      },
      {
        type: "example",
        title: "Результат",
        text: "Блок рухатиметься вперед, а після завершення циклу повертатиметься назад.",
      },
      { type: "heading", text: "Практичне завдання" },
      { type: "heading", text: "Практичне завдання 1" },
      {
        type: "task",
        text: [
          "Створіть блок.",
          "Задайте йому початкове положення.",
          "Створіть @keyframes з назвою move.",
          "Перемістіть блок на 200px вправо.",
          "Підключіть анімацію за допомогою animation-name.",
          "Задайте тривалість анімації 2 секунди.",
        ],
      },
      {
        type: "code",
        language: "html",
        code: `<!-- Початковий код --> <div class="box"></div>`,
      },
      {
        type: "hint",
        text: "Створіть @keyframes move, задайте animation-name: move; та animation-duration: 2s;.",
      },
      {
        type: "answer",
        text: `@keyframes move { from { transform: translateX(0); } to { transform: translateX(200px); } } .box { width: 100px; height: 100px; background-color: gray; animation-name: move; animation-duration: 2s; }`,
      },
      { type: "heading", text: "Практичне завдання 2" },
      {
        type: "task",
        text: [
          "Створіть анімацію переміщення блоку.",
          "Задайте тривалість одного циклу 2 секунди.",
          "Використайте animation-duration.",
        ],
      },
      {
        type: "code",
        language: "html",
        code: `<!-- Початковий код --> <div class="box"></div>`,
      },
      { type: "hint", text: "Додайте animation-duration: 2s;." },
      {
        type: "answer",
        text: `@keyframes move { from { transform: translateX(0); } to { transform: translateX(200px); } } .box { width: 100px; height: 100px; background-color: gray; animation-name: move; animation-duration: 2s; }`,
      },
      { type: "heading", text: "Практичне завдання 3" },
      {
        type: "task",
        text: [
          "Створіть анімацію переміщення блоку.",
          "Задайте тривалість 2 секунди.",
          "Додайте затримку перед початком анімації 1 секунду.",
        ],
      },
      {
        type: "code",
        language: "html",
        code: `<!-- Початковий код --> <div class="box"></div>`,
      },
      { type: "hint", text: "Використайте animation-delay: 1s;." },
      {
        type: "answer",
        text: `@keyframes move { from { transform: translateX(0); } to { transform: translateX(200px); } } .box { width: 100px; height: 100px; background-color: gray; animation-name: move; animation-duration: 2s; animation-delay: 1s; }`,
      },
      { type: "heading", text: "Практичне завдання 4" },
      {
        type: "task",
        text: [
          "Створіть анімацію переміщення блоку.",
          "Задайте тривалість 2 секунди.",
          "Використайте animation-timing-function: ease-in-out.",
        ],
      },
      {
        type: "code",
        language: "html",
        code: `<!-- Початковий код --> <div class="box"></div>`,
      },
      {
        type: "hint",
        text: "Додайте animation-timing-function: ease-in-out;.",
      },
      {
        type: "answer",
        text: `@keyframes move { from { transform: translateX(0); } to { transform: translateX(200px); } } .box { width: 100px; height: 100px; background-color: gray; animation-name: move; animation-duration: 2s; animation-timing-function: ease-in-out; }`,
      },
      { type: "heading", text: "Практичне завдання 5" },
      {
        type: "task",
        text: [
          "Створіть анімацію переміщення блоку.",
          "Задайте тривалість 2 секунди.",
          "Зробіть так, щоб анімація повторилася 3 рази.",
          "Використайте animation-iteration-count.",
        ],
      },
      {
        type: "code",
        language: "html",
        code: `<!-- Початковий код --> <div class="box"></div>`,
      },
      { type: "hint", text: "Задайте animation-iteration-count: 3;." },
      {
        type: "answer",
        text: `@keyframes move { from { transform: translateX(0); } to { transform: translateX(200px); } } .box { width: 100px; height: 100px; background-color: gray; animation-name: move; animation-duration: 2s; animation-iteration-count: 3; }`,
      },
      { type: "heading", text: "Практичне завдання 6" },
      {
        type: "task",
        text: [
          "Створіть анімацію переміщення блоку.",
          "Задайте тривалість 2 секунди.",
          "Зробіть так, щоб після завершення анімації блок залишався у кінцевій позиції.",
          "Використайте animation-fill-mode.",
        ],
      },
      {
        type: "code",
        language: "html",
        code: `<!-- Початковий код --> <div class="box"></div>`,
      },
      { type: "hint", text: "Використайте animation-fill-mode: forwards;." },
      {
        type: "answer",
        text: `@keyframes move { from { transform: translateX(0); } to { transform: translateX(200px); } } .box { width: 100px; height: 100px; background-color: gray; animation-name: move; animation-duration: 2s; animation-fill-mode: forwards; }`,
      },
      { type: "heading", text: "Практичне завдання 7" },
      {
        type: "task",
        text: [
          "Створіть анімацію переміщення блоку.",
          "Задайте тривалість 1 секунду.",
          "Зробіть так, щоб блок постійно рухався вперед і назад.",
          "Використайте animation-iteration-count та animation-direction.",
        ],
      },
      {
        type: "code",
        language: "html",
        code: `<!-- Початковий код --> <div class="box"></div>`,
      },
      {
        type: "hint",
        text: "Використайте animation-iteration-count: infinite; та animation-direction: alternate;.",
      },
      {
        type: "answer",
        text: `@keyframes move { from { transform: translateX(0); } to { transform: translateX(200px); } } .box { width: 100px; height: 100px; background-color: gray; animation-name: move; animation-duration: 1s; animation-iteration-count: infinite; animation-direction: alternate; }`,
      },
      { type: "heading", text: "Практичне завдання 8" },
      {
        type: "task",
        text: [
          "Створіть блок.",
          "Задайте йому початковий розмір та колір.",
          "Створіть анімацію, яка збільшує блок від scale(1) до scale(1.3).",
          "Задайте тривалість анімації 1 секунду.",
          "Зробіть анімацію нескінченною.",
          "Зробіть рух вперед і назад за допомогою animation-direction: alternate.",
        ],
      },
      {
        type: "code",
        language: "html",
        code: `<!-- Початковий код --> <div class="box"></div>`,
      },
      {
        type: "hint",
        text: "У @keyframes використайте transform: scale(1) та transform: scale(1.3).",
      },
      {
        type: "answer",
        text: `@keyframes scaleBox { from { transform: scale(1); } to { transform: scale(1.3); } } .box { width: 100px; height: 100px; background-color: gray; transform: scale(1); animation-name: scaleBox; animation-duration: 1s; animation-iteration-count: infinite; animation-direction: alternate; }`,
      },
      {
        type: "note",
        text: "CSS-анімація складається з ключових кадрів @keyframes та властивостей animation, які визначають назву, тривалість, затримку, швидкість, кількість повторень, поведінку після завершення та напрямок відтворення.",
      },
    ],
  },
  {
    id: "css-animation-play-state",
    title: "Стан анімації в CSS",
    description:
      "Вивчаємо властивість animation-play-state, яка дозволяє запускати, зупиняти та продовжувати CSS-анімацію.",
    content: [
      { type: "heading", text: "Що таке animation-play-state" },
      {
        type: "paragraph",
        text: "Властивість animation-play-state визначає, чи повинна CSS-анімація виконуватися або бути призупиненою.",
      },
      {
        type: "paragraph",
        text: "Властивість має два основні значення: running — анімація виконується, та paused — анімація призупинена.",
      },
      {
        type: "list",
        items: [
          "running — анімація відтворюється.",
          "paused — анімація призупинена.",
        ],
      },
      { type: "heading", text: "Значення running" },
      {
        type: "paragraph",
        text: "Значення running запускає або продовжує відтворення анімації. Це значення використовується за замовчуванням.",
      },
      {
        type: "code",
        language: "css",
        code: `@keyframes move { from { transform: translateX(0); } to { transform: translateX(200px); } } .box { width: 100px; height: 100px; background-color: gray; animation-name: move; animation-duration: 2s; animation-iteration-count: infinite; animation-play-state: running; }`,
      },
      {
        type: "example",
        title: "Результат",
        text: "Блок постійно рухається між початковою та кінцевою позиціями.",
      },
      { type: "heading", text: "Значення paused" },
      {
        type: "paragraph",
        text: "Значення paused призупиняє анімацію на поточному кадрі. Після повернення значення running анімація продовжується з того самого місця.",
      },
      {
        type: "code",
        language: "css",
        code: `@keyframes move { from { transform: translateX(0); } to { transform: translateX(200px); } } .box { width: 100px; height: 100px; background-color: gray; animation-name: move; animation-duration: 2s; animation-iteration-count: infinite; animation-play-state: paused; }`,
      },
      {
        type: "example",
        title: "Результат",
        text: "Анімація не відтворюється та залишається призупиненою на поточному стані.",
      },
      { type: "heading", text: "Зупинка анімації при наведенні" },
      {
        type: "paragraph",
        text: "Властивість animation-play-state часто використовують разом із псевдокласом :hover. Наприклад, анімація може постійно виконуватися, а при наведенні курсора призупинятися.",
      },
      {
        type: "code",
        language: "css",
        code: `@keyframes move { from { transform: translateX(0); } to { transform: translateX(200px); } } .box { width: 100px; height: 100px; background-color: gray; animation-name: move; animation-duration: 2s; animation-iteration-count: infinite; animation-direction: alternate; animation-play-state: running; } .box:hover { animation-play-state: paused; }`,
      },
      {
        type: "example",
        title: "Результат",
        text: "Блок постійно рухається вперед і назад. При наведенні курсора анімація призупиняється. Після відведення курсора анімація продовжується.",
      },
      { type: "heading", text: "Практичне завдання" },
      { type: "heading", text: "Практичне завдання 1" },
      {
        type: "task",
        text: [
          "Створіть блок.",
          "Створіть анімацію переміщення блоку.",
          "Зробіть анімацію нескінченною.",
          "Використайте animation-play-state: running.",
        ],
      },
      {
        type: "code",
        language: "html",
        code: `<!-- Початковий код --> <div class="box"></div>`,
      },
      {
        type: "hint",
        text: "Створіть @keyframes, підключіть анімацію та задайте animation-play-state: running;.",
      },
      {
        type: "answer",
        text: `@keyframes move { from { transform: translateX(0); } to { transform: translateX(200px); } } .box { width: 100px; height: 100px; background-color: gray; animation-name: move; animation-duration: 2s; animation-iteration-count: infinite; animation-play-state: running; }`,
      },
      { type: "heading", text: "Практичне завдання 2" },
      {
        type: "task",
        text: [
          "Створіть блок.",
          "Створіть нескінченну анімацію переміщення.",
          "Зробіть так, щоб анімація була призупинена.",
          "Використайте animation-play-state: paused.",
        ],
      },
      {
        type: "code",
        language: "html",
        code: `<!-- Початковий код --> <div class="box"></div>`,
      },
      {
        type: "hint",
        text: "Додайте animation-play-state: paused; до стилів блоку.",
      },
      {
        type: "answer",
        text: `@keyframes move { from { transform: translateX(0); } to { transform: translateX(200px); } } .box { width: 100px; height: 100px; background-color: gray; animation-name: move; animation-duration: 2s; animation-iteration-count: infinite; animation-play-state: paused; }`,
      },
      { type: "heading", text: "Практичне завдання 3" },
      {
        type: "task",
        text: [
          "Створіть блок з нескінченною анімацією.",
          "Зробіть так, щоб анімація працювала у звичайному стані.",
          "При наведенні курсора призупиняйте анімацію.",
          "Після відведення курсора анімація повинна продовжуватися.",
        ],
      },
      {
        type: "code",
        language: "html",
        code: `<!-- Початковий код --> <div class="box"></div>`,
      },
      {
        type: "hint",
        text: "У звичайному стані використайте animation-play-state: running;, а в .box:hover — animation-play-state: paused;.",
      },
      {
        type: "answer",
        text: `@keyframes move { from { transform: translateX(0); } to { transform: translateX(200px); } } .box { width: 100px; height: 100px; background-color: gray; animation-name: move; animation-duration: 2s; animation-iteration-count: infinite; animation-direction: alternate; animation-play-state: running; } .box:hover { animation-play-state: paused; }`,
      },
      { type: "heading", text: "Практичне завдання 4" },
      {
        type: "task",
        text: [
          "Створіть блок.",
          "Створіть нескінченну анімацію зміни розміру.",
          "Зробіть анімацію активною за замовчуванням.",
          "При наведенні курсора призупиняйте її.",
        ],
      },
      {
        type: "code",
        language: "html",
        code: `<!-- Початковий код --> <div class="box"></div>`,
      },
      {
        type: "hint",
        text: "Створіть @keyframes із transform: scale(1) та transform: scale(1.3). Використайте animation-play-state у звичайному стані та :hover.",
      },
      {
        type: "answer",
        text: `@keyframes scaleBox { from { transform: scale(1); } to { transform: scale(1.3); } } .box { width: 100px; height: 100px; background-color: gray; animation-name: scaleBox; animation-duration: 1s; animation-iteration-count: infinite; animation-direction: alternate; animation-play-state: running; } .box:hover { animation-play-state: paused; }`,
      },
      {
        type: "note",
        text: "animation-play-state не змінює саму анімацію, а керує її відтворенням. Значення paused призупиняє анімацію на поточному кадрі, а running дозволяє їй продовжитися.",
      },
    ],
  },
  {
    id: "css-rotate",
    title: "Поворот элемента в CSS",
    description:
      "Вивчаємо функцію rotate(), яка дозволяє повертати HTML-елементи навколо своєї точки трансформації.",
    content: [
      { type: "heading", text: "Що таке rotate()" },
      {
        type: "paragraph",
        text: "Функція rotate() використовується разом із властивістю transform і повертає елемент на заданий кут.",
      },
      {
        type: "paragraph",
        text: "Кут можна задавати в градусах (deg). Додатне значення повертає елемент за годинниковою стрілкою, а від'ємне — проти годинникової стрілки.",
      },
      {
        type: "list",
        items: [
          "rotate(45deg) — поворот на 45 градусів за годинниковою стрілкою.",
          "rotate(-45deg) — поворот на 45 градусів проти годинникової стрілки.",
          "rotate(90deg) — поворот на 90 градусів.",
          "rotate(180deg) — поворот на 180 градусів.",
        ],
      },
      { type: "heading", text: "Синтаксис" },
      {
        type: "code",
        language: "css",
        code: `.element { transform: rotate(45deg); }`,
      },
      {
        type: "example",
        title: "Результат",
        text: "Елемент буде повернутий на 45 градусів за годинниковою стрілкою.",
      },
      { type: "heading", text: "Поворот проти годинникової стрілки" },
      {
        type: "code",
        language: "css",
        code: `.element { transform: rotate(-30deg); }`,
      },
      {
        type: "example",
        title: "Результат",
        text: "Елемент буде повернутий на 30 градусів проти годинникової стрілки.",
      },
      { type: "heading", text: "Поворот при наведенні" },
      {
        type: "code",
        language: "css",
        code: `.element { transition: transform 0.3s ease; } .element:hover { transform: rotate(10deg); }`,
      },
      {
        type: "example",
        title: "Результат",
        text: "При наведенні курсора елемент плавно повернеться на 10 градусів.",
      },
      {
        type: "note",
        text: "Функція rotate() сама по собі не створює плавного переходу. Для плавного повороту зазвичай використовують transition разом із transform.",
      },
      { type: "heading", text: "Практичне завдання" },
      { type: "heading", text: "Практичне завдання 1" },
      {
        type: "task",
        text: [
          "Створіть блок розміром 100px на 100px.",
          "Поверніть його на 45 градусів за допомогою rotate().",
        ],
      },
      {
        type: "code",
        language: "html",
        code: `<!-- Початковий код --> <div class="box"></div> <style> .box { width: 100px; height: 100px; background-color: steelblue; } </style>`,
      },
      {
        type: "hint",
        text: "Використайте властивість transform та функцію rotate(45deg).",
      },
      {
        type: "answer",
        text: `.box { width: 100px; height: 100px; background-color: steelblue; transform: rotate(45deg); }`,
      },
      { type: "heading", text: "Практичне завдання 2" },
      {
        type: "task",
        text: [
          "Зробіть так, щоб блок при наведенні повертався на 90 градусів.",
          "Додайте плавність повороту.",
        ],
      },
      {
        type: "code",
        language: "html",
        code: `<!-- Початковий код --> <div class="box"></div> <style> .box { width: 100px; height: 100px; background-color: tomato; } </style>`,
      },
      {
        type: "hint",
        text: "Для плавності використайте transition: transform 0.5s ease, а поворот задайте через transform: rotate(90deg) у стані :hover.",
      },
      {
        type: "answer",
        text: `.box { width: 100px; height: 100px; background-color: tomato; transition: transform 0.5s ease; } .box:hover { transform: rotate(90deg); }`,
      },
      { type: "heading", text: "Практичне завдання 3" },
      {
        type: "task",
        text: [
          "Створіть кнопку.",
          "При наведенні зробіть її поворот на -10 градусів.",
          "Поворот повинен бути плавним.",
        ],
      },
      {
        type: "code",
        language: "html",
        code: `<!-- Початковий код --> <button class="button">Навести курсор</button> <style> .button { padding: 10px 20px; border: none; background-color: royalblue; color: white; cursor: pointer; } </style>`,
      },
      {
        type: "hint",
        text: "Використайте transition для плавності та rotate(-10deg) у :hover.",
      },
      {
        type: "answer",
        text: `.button { padding: 10px 20px; border: none; background-color: royalblue; color: white; cursor: pointer; transition: transform 0.3s ease; } .button:hover { transform: rotate(-10deg); }`,
      },
    ],
  },
  {
    id: "css-scale",
    title: "Масштабування елемента в CSS",
    description:
      "Вивчаємо функції scaleX(), scaleY() та scale(), які дозволяють змінювати масштаб елемента по горизонталі, вертикалі або одночасно в обох напрямках.",
    content: [
      { type: "heading", text: "Що таке масштабування" },
      {
        type: "paragraph",
        text: "Масштабування дозволяє збільшувати або зменшувати розміри елемента за допомогою властивості transform.",
      },
      {
        type: "paragraph",
        text: "Для масштабування використовують функції scaleX(), scaleY() та scale(). Значення більше 1 збільшує елемент, значення від 0 до 1 зменшує його.",
      },
      {
        type: "list",
        items: [
          "scaleX() — змінює масштаб елемента по горизонталі.",
          "scaleY() — змінює масштаб елемента по вертикалі.",
          "scale() — змінює масштаб по горизонталі та вертикалі.",
        ],
      },
      { type: "heading", text: "Масштабування по горизонталі через scaleX()" },
      {
        type: "paragraph",
        text: "Функція scaleX() змінює ширину елемента візуально, не змінюючи його фактичне значення width.",
      },
      {
        type: "code",
        language: "css",
        code: `.element { transform: scaleX(2); }`,
      },
      {
        type: "example",
        title: "Результат",
        text: "Елемент стане вдвічі ширшим по горизонталі.",
      },
      { type: "heading", text: "Масштабування по вертикалі через scaleY()" },
      {
        type: "code",
        language: "css",
        code: `.element { transform: scaleY(1.5); }`,
      },
      {
        type: "example",
        title: "Результат",
        text: "Елемент стане в 1,5 раза вищим по вертикалі.",
      },
      { type: "heading", text: "Масштабування через scale()" },
      {
        type: "paragraph",
        text: "Функція scale() може приймати одне або два значення. Одне значення застосовується одночасно по горизонталі та вертикалі. Два значення дозволяють окремо задати масштаб по X та Y.",
      },
      {
        type: "code",
        language: "css",
        code: `.element { transform: scale(1.5); }`,
      },
      {
        type: "example",
        title: "Результат",
        text: "Елемент збільшиться в 1,5 раза одночасно по горизонталі та вертикалі.",
      },
      {
        type: "code",
        language: "css",
        code: `.element { transform: scale(2, 0.5); }`,
      },
      {
        type: "example",
        title: "Результат",
        text: "Елемент стане вдвічі ширшим і вдвічі нижчим.",
      },
      { type: "heading", text: "Зменшення елемента" },
      {
        type: "code",
        language: "css",
        code: `.element { transform: scale(0.7); }`,
      },
      {
        type: "example",
        title: "Результат",
        text: "Елемент зменшиться до 70% від початкового розміру.",
      },
      { type: "heading", text: "Масштабування при наведенні" },
      {
        type: "code",
        language: "css",
        code: `.element { transition: transform 0.3s ease; } .element:hover { transform: scale(1.1); }`,
      },
      {
        type: "example",
        title: "Результат",
        text: "При наведенні елемент плавно збільшиться на 10%.",
      },
      {
        type: "note",
        text: "Функції scaleX(), scaleY() та scale() працюють через transform. Для плавного масштабування при зміні стану елемента використовуйте transition: transform.",
      },
      { type: "heading", text: "Практичне завдання" },
      { type: "heading", text: "Практичне завдання 1" },
      {
        type: "task",
        text: [
          "Створіть блок розміром 100px на 100px.",
          "Збільште його ширину вдвічі за допомогою scaleX().",
        ],
      },
      {
        type: "code",
        language: "html",
        code: `<!-- Початковий код --> <div class="box"></div> <style> .box { width: 100px; height: 100px; background-color: steelblue; } </style>`,
      },
      { type: "hint", text: "Використайте transform: scaleX(2)." },
      {
        type: "answer",
        text: `.box { width: 100px; height: 100px; background-color: steelblue; transform: scaleX(2); }`,
      },
      { type: "heading", text: "Практичне завдання 2" },
      {
        type: "task",
        text: [
          "Створіть блок розміром 100px на 100px.",
          "Збільшіть його висоту в 1,5 раза за допомогою scaleY().",
        ],
      },
      {
        type: "code",
        language: "html",
        code: `<!-- Початковий код --> <div class="box"></div> <style> .box { width: 100px; height: 100px; background-color: tomato; } </style>`,
      },
      { type: "hint", text: "Використайте transform: scaleY(1.5)." },
      {
        type: "answer",
        text: `.box { width: 100px; height: 100px; background-color: tomato; transform: scaleY(1.5); }`,
      },
      { type: "heading", text: "Практичне завдання 3" },
      {
        type: "task",
        text: [
          "Створіть блок розміром 100px на 100px.",
          "Збільште його одночасно по горизонталі та вертикалі в 1,2 раза.",
        ],
      },
      {
        type: "code",
        language: "html",
        code: `<!-- Початковий код --> <div class="box"></div> <style> .box { width: 100px; height: 100px; background-color: seagreen; } </style>`,
      },
      { type: "hint", text: "Використайте transform: scale(1.2)." },
      {
        type: "answer",
        text: `.box { width: 100px; height: 100px; background-color: seagreen; transform: scale(1.2); }`,
      },
      { type: "heading", text: "Практичне завдання 4" },
      {
        type: "task",
        text: [
          "Створіть кнопку.",
          "При наведенні збільшуйте її в 1,1 раза.",
          "Зробіть масштабування плавним.",
        ],
      },
      {
        type: "code",
        language: "html",
        code: `<!-- Початковий код --> <button class="button">Навести курсор</button> <style> .button { padding: 10px 20px; border: none; background-color: royalblue; color: white; cursor: pointer; } </style>`,
      },
      {
        type: "hint",
        text: "Додайте transition: transform 0.3s ease і використайте scale(1.1) у стані :hover.",
      },
      {
        type: "answer",
        text: `.button { padding: 10px 20px; border: none; background-color: royalblue; color: white; cursor: pointer; transition: transform 0.3s ease; } .button:hover { transform: scale(1.1); }`,
      },
    ],
  },
  {
    id: "css-skew",
    title: "Скіс елемента по осі в CSS",
    description:
      "Вивчаємо функції skewX(), skewY() та skew(), які дозволяють нахиляти елемент по горизонтальній та вертикальній осях.",
    content: [
      { type: "heading", text: "Що таке skew()" },
      {
        type: "paragraph",
        text: "Функції skewX(), skewY() та skew() використовуються разом із властивістю transform для нахилу або скошування елемента.",
      },
      {
        type: "paragraph",
        text: "Кут нахилу задається в градусах (deg). Додатне або від'ємне значення визначає напрямок нахилу.",
      },
      {
        type: "list",
        items: [
          "skewX() — нахиляє елемент по горизонтальній осі X.",
          "skewY() — нахиляє елемент по вертикальній осі Y.",
          "skew() — дозволяє одночасно задати нахил по X та Y.",
        ],
      },
      { type: "heading", text: "Нахил по осі X через skewX()" },
      {
        type: "paragraph",
        text: "Функція skewX() нахиляє вертикальні сторони елемента, змінюючи його форму відносно горизонтальної осі.",
      },
      {
        type: "code",
        language: "css",
        code: `.element { transform: skewX(20deg); }`,
      },
      {
        type: "example",
        title: "Результат",
        text: "Елемент буде нахилений по горизонтальній осі на 20 градусів.",
      },
      { type: "heading", text: "Нахил по осі Y через skewY()" },
      {
        type: "code",
        language: "css",
        code: `.element { transform: skewY(15deg); }`,
      },
      {
        type: "example",
        title: "Результат",
        text: "Елемент буде нахилений по вертикальній осі на 15 градусів.",
      },
      { type: "heading", text: "Нахил по двох осях через skew()" },
      {
        type: "paragraph",
        text: "Функція skew() може приймати одне або два значення. Перше значення задає нахил по X, друге — по Y.",
      },
      {
        type: "code",
        language: "css",
        code: `.element { transform: skew(20deg, 10deg); }`,
      },
      {
        type: "example",
        title: "Результат",
        text: "Елемент буде нахилений на 20 градусів по X та на 10 градусів по Y.",
      },
      {
        type: "paragraph",
        text: "Якщо вказати тільки одне значення, воно застосовується до осі X, а нахил по Y буде дорівнювати 0.",
      },
      {
        type: "code",
        language: "css",
        code: `.element { transform: skew(20deg); }`,
      },
      {
        type: "example",
        title: "Результат",
        text: "Елемент буде нахилений на 20 градусів по осі X.",
      },
      { type: "heading", text: "Від'ємне значення" },
      {
        type: "code",
        language: "css",
        code: `.element { transform: skewX(-15deg); }`,
      },
      {
        type: "example",
        title: "Результат",
        text: "Елемент буде нахилений у протилежному напрямку.",
      },
      { type: "heading", text: "Скіс при наведенні" },
      {
        type: "code",
        language: "css",
        code: `.element { transition: transform 0.3s ease; } .element:hover { transform: skewX(10deg); }`,
      },
      {
        type: "example",
        title: "Результат",
        text: "При наведенні курсора елемент плавно нахилиться по осі X на 10 градусів.",
      },
      {
        type: "note",
        text: "Функції skewX(), skewY() та skew() працюють через transform. Для плавної зміни нахилу можна використовувати transition: transform.",
      },
      { type: "heading", text: "Практичне завдання" },
      { type: "heading", text: "Практичне завдання 1" },
      {
        type: "task",
        text: [
          "Створіть блок розміром 100px на 100px.",
          "Нахиліть його по осі X на 20 градусів.",
        ],
      },
      {
        type: "code",
        language: "html",
        code: `<!-- Початковий код --> <div class="box"></div> <style> .box { width: 100px; height: 100px; background-color: steelblue; } </style>`,
      },
      { type: "hint", text: "Використайте transform: skewX(20deg)." },
      {
        type: "answer",
        text: `.box { width: 100px; height: 100px; background-color: steelblue; transform: skewX(20deg); }`,
      },
      { type: "heading", text: "Практичне завдання 2" },
      {
        type: "task",
        text: [
          "Створіть блок розміром 100px на 100px.",
          "Нахиліть його по осі Y на 15 градусів.",
        ],
      },
      {
        type: "code",
        language: "html",
        code: `<!-- Початковий код --> <div class="box"></div> <style> .box { width: 100px; height: 100px; background-color: tomato; } </style>`,
      },
      { type: "hint", text: "Використайте transform: skewY(15deg)." },
      {
        type: "answer",
        text: `.box { width: 100px; height: 100px; background-color: tomato; transform: skewY(15deg); }`,
      },
      { type: "heading", text: "Практичне завдання 3" },
      {
        type: "task",
        text: [
          "Створіть блок розміром 100px на 100px.",
          "Нахиліть його на 20 градусів по X та на 10 градусів по Y.",
        ],
      },
      {
        type: "code",
        language: "html",
        code: `<!-- Початковий код --> <div class="box"></div> <style> .box { width: 100px; height: 100px; background-color: seagreen; } </style>`,
      },
      { type: "hint", text: "Використайте transform: skew(20deg, 10deg)." },
      {
        type: "answer",
        text: `.box { width: 100px; height: 100px; background-color: seagreen; transform: skew(20deg, 10deg); }`,
      },
      { type: "heading", text: "Практичне завдання 4" },
      {
        type: "task",
        text: [
          "Створіть кнопку.",
          "При наведенні нахиляйте її по осі X на 10 градусів.",
          "Зробіть нахил плавним.",
        ],
      },
      {
        type: "code",
        language: "html",
        code: `<!-- Початковий код --> <button class="button">Навести курсор</button> <style> .button { padding: 10px 20px; border: none; background-color: royalblue; color: white; cursor: pointer; } </style>`,
      },
      {
        type: "hint",
        text: "Додайте transition: transform 0.3s ease і використайте skewX(10deg) у стані :hover.",
      },
      {
        type: "answer",
        text: `.button { padding: 10px 20px; border: none; background-color: royalblue; color: white; cursor: pointer; transition: transform 0.3s ease; } .button:hover { transform: skewX(10deg); }`,
      },
    ],
  },
  {
    id: "css-translate",
    title: "Зсув елемента в CSS",
    description:
      "Вивчаємо функції translateX(), translateY() та translate(), які дозволяють зміщувати елемент по горизонталі, вертикалі або одночасно по обох осях.",
    content: [
      { type: "heading", text: "Що таке translate()" },
      {
        type: "paragraph",
        text: "Функції translateX(), translateY() та translate() використовуються разом із властивістю transform для зміщення елемента відносно його початкового положення.",
      },
      {
        type: "paragraph",
        text: "Відстань зміщення можна задавати в пікселях (px), відсотках (%) та інших одиницях CSS.",
      },
      {
        type: "list",
        items: [
          "translateX() — зміщує елемент по горизонтальній осі X.",
          "translateY() — зміщує елемент по вертикальній осі Y.",
          "translate() — дозволяє одночасно задати зміщення по X та Y.",
        ],
      },
      { type: "heading", text: "Зсув по осі X через translateX()" },
      {
        type: "paragraph",
        text: "Функція translateX() зміщує елемент по горизонталі. Додатне значення зміщує його праворуч, а від'ємне — ліворуч.",
      },
      {
        type: "code",
        language: "css",
        code: `.element { transform: translateX(50px); }`,
      },
      {
        type: "example",
        title: "Результат",
        text: "Елемент зміститься на 50px праворуч від початкового положення.",
      },
      { type: "heading", text: "Зсув по осі Y через translateY()" },
      {
        type: "paragraph",
        text: "Функція translateY() зміщує елемент по вертикалі. Додатне значення зміщує його вниз, а від'ємне — вгору.",
      },
      {
        type: "code",
        language: "css",
        code: `.element { transform: translateY(30px); }`,
      },
      {
        type: "example",
        title: "Результат",
        text: "Елемент зміститься на 30px вниз.",
      },
      { type: "heading", text: "Зсув по двох осях через translate()" },
      {
        type: "paragraph",
        text: "Функція translate() може приймати одне або два значення. Перше значення задає зміщення по X, друге — по Y.",
      },
      {
        type: "code",
        language: "css",
        code: `.element { transform: translate(50px, 20px); }`,
      },
      {
        type: "example",
        title: "Результат",
        text: "Елемент зміститься на 50px праворуч і на 20px вниз.",
      },
      {
        type: "paragraph",
        text: "Якщо вказати тільки одне значення, воно застосовується по X, а зміщення по Y буде дорівнювати 0.",
      },
      {
        type: "code",
        language: "css",
        code: `.element { transform: translate(50px); }`,
      },
      {
        type: "example",
        title: "Результат",
        text: "Елемент зміститься на 50px праворуч.",
      },
      { type: "heading", text: "Від'ємне значення" },
      {
        type: "code",
        language: "css",
        code: `.element { transform: translateX(-30px); }`,
      },
      {
        type: "example",
        title: "Результат",
        text: "Елемент зміститься на 30px ліворуч.",
      },
      { type: "heading", text: "Зсув при наведенні" },
      {
        type: "code",
        language: "css",
        code: `.element { transition: transform 0.3s ease; } .element:hover { transform: translateY(-10px); }`,
      },
      {
        type: "example",
        title: "Результат",
        text: "При наведенні курсора елемент плавно зміститься на 10px вгору.",
      },
      {
        type: "note",
        text: "Функції translateX(), translateY() та translate() змінюють візуальне положення елемента, не змінюючи його місце в потоці документа. Для плавного зміщення використовуйте transition: transform.",
      },
      { type: "heading", text: "Практичне завдання" },
      { type: "heading", text: "Практичне завдання 1" },
      {
        type: "task",
        text: [
          "Створіть блок розміром 100px на 100px.",
          "Змістіть його на 50px праворуч за допомогою translateX().",
        ],
      },
      {
        type: "code",
        language: "html",
        code: `<!-- Початковий код --> <div class="box"></div> <style> .box { width: 100px; height: 100px; background-color: steelblue; } </style>`,
      },
      { type: "hint", text: "Використайте transform: translateX(50px)." },
      {
        type: "answer",
        text: `.box { width: 100px; height: 100px; background-color: steelblue; transform: translateX(50px); }`,
      },
      { type: "heading", text: "Практичне завдання 2" },
      {
        type: "task",
        text: [
          "Створіть блок розміром 100px на 100px.",
          "Змістіть його на 30px вгору за допомогою translateY().",
        ],
      },
      {
        type: "code",
        language: "html",
        code: `<!-- Початковий код --> <div class="box"></div> <style> .box { width: 100px; height: 100px; background-color: tomato; } </style>`,
      },
      {
        type: "hint",
        text: "Щоб змістити елемент вгору, використайте від'ємне значення: translateY(-30px).",
      },
      {
        type: "answer",
        text: `.box { width: 100px; height: 100px; background-color: tomato; transform: translateY(-30px); }`,
      },
      { type: "heading", text: "Практичне завдання 3" },
      {
        type: "task",
        text: [
          "Створіть блок розміром 100px на 100px.",
          "Змістіть його на 40px праворуч і на 20px вниз.",
          "Використайте функцію translate().",
        ],
      },
      {
        type: "code",
        language: "html",
        code: `<!-- Початковий код --> <div class="box"></div> <style> .box { width: 100px; height: 100px; background-color: seagreen; } </style>`,
      },
      { type: "hint", text: "Використайте transform: translate(40px, 20px)." },
      {
        type: "answer",
        text: `.box { width: 100px; height: 100px; background-color: seagreen; transform: translate(40px, 20px); }`,
      },
      { type: "heading", text: "Практичне завдання 4" },
      {
        type: "task",
        text: [
          "Створіть кнопку.",
          "При наведенні зміщуйте її на 10px вгору.",
          "Зробіть зміщення плавним.",
        ],
      },
      {
        type: "code",
        language: "html",
        code: `<!-- Початковий код --> <button class="button">Навести курсор</button> <style> .button { padding: 10px 20px; border: none; background-color: royalblue; color: white; cursor: pointer; } </style>`,
      },
      {
        type: "hint",
        text: "Додайте transition: transform 0.3s ease і використайте translateY(-10px) у стані :hover.",
      },
      {
        type: "answer",
        text: `.button { padding: 10px 20px; border: none; background-color: royalblue; color: white; cursor: pointer; transition: transform 0.3s ease; } .button:hover { transform: translateY(-10px); }`,
      },
    ],
  },
  {
    id: "css-transform-origin",
    title: "Точка трансформації в CSS",
    description:
      "Вивчаємо властивість transform-origin, яка визначає точку, відносно якої виконується поворот, масштабування та інші CSS-трансформації.",
    content: [
      { type: "heading", text: "Що таке transform-origin" },
      {
        type: "paragraph",
        text: "Властивість transform-origin визначає точку, навколо якої виконується CSS-трансформація елемента.",
      },
      {
        type: "paragraph",
        text: "За замовчуванням точка трансформації знаходиться в центрі елемента — 50% по горизонталі та 50% по вертикалі.",
      },
      {
        type: "list",
        items: [
          "center — центр елемента.",
          "top — верхня частина елемента.",
          "right — права частина елемента.",
          "bottom — нижня частина елемента.",
          "left — ліва частина елемента.",
        ],
      },
      { type: "heading", text: "Точка трансформації в центрі" },
      {
        type: "code",
        language: "css",
        code: `.element { transform-origin: center; transform: rotate(45deg); }`,
      },
      {
        type: "example",
        title: "Результат",
        text: "Елемент повернеться на 45 градусів навколо своєї центральної точки.",
      },
      { type: "heading", text: "Точка трансформації у верхньому лівому куті" },
      {
        type: "code",
        language: "css",
        code: `.element { transform-origin: top left; transform: rotate(45deg); }`,
      },
      {
        type: "example",
        title: "Результат",
        text: "Елемент буде повертатися навколо своєї верхньої лівої точки.",
      },
      { type: "heading", text: "Точка трансформації через відсотки" },
      {
        type: "paragraph",
        text: "Точку трансформації можна задавати у відсотках. Перше значення визначає положення по горизонталі, друге — по вертикалі.",
      },
      {
        type: "code",
        language: "css",
        code: `.element { transform-origin: 0% 0%; transform: rotate(45deg); }`,
      },
      {
        type: "example",
        title: "Результат",
        text: "Трансформація відбуватиметься навколо верхньої лівої точки елемента.",
      },
      {
        type: "code",
        language: "css",
        code: `.element { transform-origin: 100% 50%; transform: rotate(45deg); }`,
      },
      {
        type: "example",
        title: "Результат",
        text: "Точка трансформації буде розташована посередині правого краю елемента.",
      },
      { type: "heading", text: "Точка трансформації через пікселі" },
      {
        type: "paragraph",
        text: "Положення точки можна задавати конкретними значеннями в пікселях.",
      },
      {
        type: "code",
        language: "css",
        code: `.element { transform-origin: 20px 30px; transform: rotate(45deg); }`,
      },
      {
        type: "example",
        title: "Результат",
        text: "Точкою трансформації буде позиція 20px по горизонталі та 30px по вертикалі відносно елемента.",
      },
      { type: "heading", text: "transform-origin разом із scale()" },
      {
        type: "paragraph",
        text: "transform-origin впливає не тільки на поворот. Він також визначає, відносно якої точки буде виконуватися масштабування.",
      },
      {
        type: "code",
        language: "css",
        code: `.element { transform-origin: left center; transform: scale(1.5); }`,
      },
      {
        type: "example",
        title: "Результат",
        text: "Елемент збільшиться в 1,5 раза, залишаючись прив'язаним до своєї лівої центральної точки.",
      },
      { type: "heading", text: "Поворот при наведенні" },
      {
        type: "code",
        language: "css",
        code: `.element { transform-origin: left center; transition: transform 0.3s ease; } .element:hover { transform: rotate(10deg); }`,
      },
      {
        type: "example",
        title: "Результат",
        text: "При наведенні елемент плавно повернеться навколо точки, розташованої посередині його лівого краю.",
      },
      {
        type: "note",
        text: "За замовчуванням transform-origin має значення 50% 50%, тобто центр елемента. Змінивши transform-origin, можна змусити елемент обертатися або масштабуватися навколо іншої точки.",
      },
      { type: "heading", text: "Практичне завдання" },
      { type: "heading", text: "Практичне завдання 1" },
      {
        type: "task",
        text: [
          "Створіть блок розміром 100px на 100px.",
          "Задайте точку трансформації у верхньому лівому куті.",
          "Поверніть блок на 45 градусів.",
        ],
      },
      {
        type: "code",
        language: "html",
        code: `<!-- Початковий код --> <div class="box"></div> <style> .box { width: 100px; height: 100px; background-color: steelblue; } </style>`,
      },
      {
        type: "hint",
        text: "Використайте transform-origin: top left та transform: rotate(45deg).",
      },
      {
        type: "answer",
        text: `.box { width: 100px; height: 100px; background-color: steelblue; transform-origin: top left; transform: rotate(45deg); }`,
      },
      { type: "heading", text: "Практичне завдання 2" },
      {
        type: "task",
        text: [
          "Створіть блок розміром 100px на 100px.",
          "Задайте точку трансформації в центрі правого краю.",
          "Поверніть блок на 30 градусів.",
        ],
      },
      {
        type: "code",
        language: "html",
        code: `<!-- Початковий код --> <div class="box"></div> <style> .box { width: 100px; height: 100px; background-color: tomato; } </style>`,
      },
      {
        type: "hint",
        text: "Для точки трансформації використайте transform-origin: right center.",
      },
      {
        type: "answer",
        text: `.box { width: 100px; height: 100px; background-color: tomato; transform-origin: right center; transform: rotate(30deg); }`,
      },
      { type: "heading", text: "Практичне завдання 3" },
      {
        type: "task",
        text: [
          "Створіть блок розміром 100px на 100px.",
          "Задайте transform-origin через відсотки.",
          "Точка трансформації повинна знаходитися в центрі лівого краю.",
          "Збільште блок у 1,5 раза.",
        ],
      },
      {
        type: "code",
        language: "html",
        code: `<!-- Початковий код --> <div class="box"></div> <style> .box { width: 100px; height: 100px; background-color: seagreen; } </style>`,
      },
      { type: "hint", text: "Центр лівого краю — це 0% по X та 50% по Y." },
      {
        type: "answer",
        text: `.box { width: 100px; height: 100px; background-color: seagreen; transform-origin: 0% 50%; transform: scale(1.5); }`,
      },
      { type: "heading", text: "Практичне завдання 4" },
      {
        type: "task",
        text: [
          "Створіть кнопку.",
          "Задайте точку трансформації в центрі нижнього краю.",
          "При наведенні повертайте кнопку на 10 градусів.",
          "Зробіть поворот плавним.",
        ],
      },
      {
        type: "code",
        language: "html",
        code: `<!-- Початковий код --> <button class="button">Навести курсор</button> <style> .button { padding: 10px 20px; border: none; background-color: royalblue; color: white; cursor: pointer; } </style>`,
      },
      {
        type: "hint",
        text: "Використайте transform-origin: center bottom та transition: transform 0.3s ease.",
      },
      {
        type: "answer",
        text: `.button { padding: 10px 20px; border: none; background-color: royalblue; color: white; cursor: pointer; transform-origin: center bottom; transition: transform 0.3s ease; } .button:hover { transform: rotate(10deg); }`,
      },
    ],
  },
  {
    id: "css-effects",
    title: "Застосування ефектів у CSS",
    description:
      "Вивчаємо, як поєднувати CSS-трансформації, переходи та інші властивості для створення візуальних ефектів при наведенні та зміні стану елементів.",
    content: [
      { type: "heading", text: "Що таке ефекти в CSS" },
      {
        type: "paragraph",
        text: "CSS дозволяє створювати різноманітні візуальні ефекти без JavaScript. Для цього можна поєднувати transform, transition, opacity, box-shadow та інші властивості.",
      },
      {
        type: "paragraph",
        text: "Найчастіше ефекти застосовують при наведенні курсора за допомогою псевдокласу :hover.",
      },
      {
        type: "list",
        items: [
          "transform: scale() — збільшення або зменшення елемента.",
          "transform: rotate() — поворот елемента.",
          "transform: translate() — зміщення елемента.",
          "transform: skew() — нахил елемента.",
          "opacity — зміна прозорості.",
          "box-shadow — створення тіні.",
          "transition — плавна зміна властивостей.",
        ],
      },
      { type: "heading", text: "Збільшення елемента" },
      {
        type: "code",
        language: "css",
        code: `.card { transition: transform 0.3s ease; } .card:hover { transform: scale(1.05); }`,
      },
      {
        type: "example",
        title: "Результат",
        text: "При наведенні картка плавно збільшиться на 5%.",
      },
      { type: "heading", text: "Поворот елемента" },
      {
        type: "code",
        language: "css",
        code: `.icon { transition: transform 0.3s ease; } .icon:hover { transform: rotate(15deg); }`,
      },
      {
        type: "example",
        title: "Результат",
        text: "При наведенні іконка плавно повернеться на 15 градусів.",
      },
      { type: "heading", text: "Зміщення елемента" },
      {
        type: "code",
        language: "css",
        code: `.button { transition: transform 0.3s ease; } .button:hover { transform: translateY(-5px); }`,
      },
      {
        type: "example",
        title: "Результат",
        text: "При наведенні кнопка плавно зміститься на 5px вгору.",
      },
      { type: "heading", text: "Зміна прозорості" },
      {
        type: "code",
        language: "css",
        code: `.image { transition: opacity 0.3s ease; } .image:hover { opacity: 0.7; }`,
      },
      {
        type: "example",
        title: "Результат",
        text: "При наведенні зображення стане напівпрозорим.",
      },
      { type: "heading", text: "Комбінація декількох ефектів" },
      {
        type: "paragraph",
        text: "Декілька трансформацій можна поєднати в одному значенні властивості transform.",
      },
      {
        type: "code",
        language: "css",
        code: `.card { transition: transform 0.3s ease; } .card:hover { transform: translateY(-5px) scale(1.05) rotate(1deg); }`,
      },
      {
        type: "example",
        title: "Результат",
        text: "При наведенні картка підніметься, трохи збільшиться та повернеться на 1 градус.",
      },
      { type: "heading", text: "Ефект із тінню" },
      {
        type: "code",
        language: "css",
        code: `.card { transition: transform 0.3s ease, box-shadow 0.3s ease; } .card:hover { transform: translateY(-5px); box-shadow: 0 10px 25px rgb(0 0 0 / 20%); }`,
      },
      {
        type: "example",
        title: "Результат",
        text: "При наведенні картка підніметься та отримає виразнішу тінь.",
      },
      {
        type: "note",
        text: "Для плавних ефектів важливо додавати transition до початкового стану елемента, а не тільки до :hover. Це забезпечує плавний перехід як при наведенні, так і при його завершенні.",
      },
      { type: "heading", text: "Практичне завдання" },
      { type: "heading", text: "Практичне завдання 1" },
      {
        type: "task",
        text: [
          "Створіть блок розміром 100px на 100px.",
          "При наведенні збільшуйте його в 1,1 раза.",
          "Зробіть ефект плавним.",
        ],
      },
      {
        type: "code",
        language: "html",
        code: `<!-- Початковий код --> <div class="box"></div> <style> .box { width: 100px; height: 100px; background-color: steelblue; } </style>`,
      },
      {
        type: "hint",
        text: "Використайте transition: transform 0.3s ease та transform: scale(1.1) у :hover.",
      },
      {
        type: "answer",
        text: `.box { width: 100px; height: 100px; background-color: steelblue; transition: transform 0.3s ease; } .box:hover { transform: scale(1.1); }`,
      },
      { type: "heading", text: "Практичне завдання 2" },
      {
        type: "task",
        text: [
          "Створіть кнопку.",
          "При наведенні зміщуйте її на 5px вгору.",
          "Одночасно збільшуйте кнопку в 1,05 раза.",
          "Зробіть ефект плавним.",
        ],
      },
      {
        type: "code",
        language: "html",
        code: `<!-- Початковий код --> <button class="button">Навести курсор</button> <style> .button { padding: 10px 20px; border: none; background-color: royalblue; color: white; cursor: pointer; } </style>`,
      },
      {
        type: "hint",
        text: "Поєднайте translateY(-5px) та scale(1.05) в одному значенні transform.",
      },
      {
        type: "answer",
        text: `.button { padding: 10px 20px; border: none; background-color: royalblue; color: white; cursor: pointer; transition: transform 0.3s ease; } .button:hover { transform: translateY(-5px) scale(1.05); }`,
      },
      { type: "heading", text: "Практичне завдання 3" },
      {
        type: "task",
        text: [
          "Створіть картку.",
          "При наведенні піднімайте її на 5px.",
          "Додайте збільшення тіні.",
          "Обидва ефекти повинні бути плавними.",
        ],
      },
      {
        type: "code",
        language: "html",
        code: `<!-- Початковий код --> <div class="card"> <h3>Картка</h3> <p>Наведіть курсор.</p> </div> <style> .card { width: 220px; padding: 20px; background-color: white; } </style>`,
      },
      {
        type: "hint",
        text: "Додайте transition для transform і box-shadow, а в :hover використайте translateY(-5px) та box-shadow.",
      },
      {
        type: "answer",
        text: `.card { width: 220px; padding: 20px; background-color: white; transition: transform 0.3s ease, box-shadow 0.3s ease; } .card:hover { transform: translateY(-5px); box-shadow: 0 10px 25px rgb(0 0 0 / 20%); }`,
      },
      { type: "heading", text: "Практичне завдання 4" },
      {
        type: "task",
        text: [
          "Створіть елемент із текстом.",
          "При наведенні зробіть його трохи прозорим.",
          "Одночасно поверніть його на 5 градусів.",
          "Зробіть обидва ефекти плавними.",
        ],
      },
      {
        type: "code",
        language: "html",
        code: `<!-- Початковий код --> <div class="element">CSS Effects</div> <style> .element { padding: 20px; background-color: seagreen; color: white; } </style>`,
      },
      {
        type: "hint",
        text: "Додайте transition для opacity та transform. У :hover використайте opacity: 0.7 та rotate(5deg).",
      },
      {
        type: "answer",
        text: `.element { padding: 20px; background-color: seagreen; color: white; transition: opacity 0.3s ease, transform 0.3s ease; } .element:hover { opacity: 0.7; transform: rotate(5deg); }`,
      },
    ],
  },
];
