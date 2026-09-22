import type { Lesson } from "../types";

export const boxModel: Lesson[] = [
  {
    id: "margin-css",
    title: "Робота з відступами margin в CSS",
    description:
      "Вивчаємо властивість margin, яка створює зовнішні відступи між елементами сторінки.",
    content: [
      {
        type: "heading",
        text: "Робота з відступами margin в CSS",
      },
      {
        type: "paragraph",
        text: "Властивість margin використовується для створення зовнішніх відступів навколо елементів.",
      },
      {
        type: "paragraph",
        text: "За допомогою margin можна керувати відстанню між елементами сайту та робити структуру сторінки більш зрозумілою.",
      },
      {
        type: "paragraph",
        text: "Розглянемо приклад двох вкладених блоків без використання margin.",
      },
      {
        type: "code",
        language: "html",
        code: `
        <div id="parent">
          <div id="child"></div>
        </div>`,
      },
      {
        type: "code",
        language: "css",
        code: `
#parent {
  width: 300px;
  border: 1px solid red;
}

#child {
  height: 100px;
  border: 1px solid green;
}`,
      },
      {
        type: "example",
        title: "Результат виконання коду",
        text: "Внутрішній блок прилипає до батьківського елемента, тому між ними немає відступу.",
      },
      {
        type: "paragraph",
        text: "Тепер додамо внутрішньому блоку зовнішній відступ margin зі значенням 30px.",
      },
      {
        type: "code",
        language: "css",
        code: `
#parent {
  width: 300px;
  border: 1px solid red;
}

#child {
  height: 100px;
  border: 1px solid green;
  margin: 30px;
}`,
      },
      {
        type: "example",
        title: "Результат після додавання margin",
        text: "Внутрішній блок отримає відступ 30px від усіх сторін відносно батьківського елемента.",
      },
      {
        type: "note",
        text: "margin створює зовнішній відступ за межами елемента, а padding створює внутрішній відступ між вмістом та границею.",
      },
      {
        type: "list",
        items: [
          "margin-top — верхній зовнішній відступ.",
          "margin-right — правий зовнішній відступ.",
          "margin-bottom — нижній зовнішній відступ.",
          "margin-left — лівий зовнішній відступ.",
        ],
      },
      {
        type: "task",
        text: [
          "№1. Створіть два вкладені блоки.",
          "№2. Додайте внутрішньому блоку margin: 30px.",
          "№3. Змініть значення margin та спостерігайте за результатом.",
        ],
      },
      {
        type: "hint",
        text: "Спробуйте значення 10px, 20px, 50px та подивіться, як змінюється відстань між елементами.",
      },
      {
        type: "answer",
        text: `
#child {
  height: 100px;
  border: 1px solid green;
  margin: 30px;
}`,
      },
    ],
  },
  {
    id: "margin-sides-css",
    title: "Відступи margin для різних сторін в CSS",
    description:
      "Вивчаємо окремі властивості margin для створення різних зовнішніх відступів з кожної сторони елемента.",
    content: [
      {
        type: "heading",
        text: "Відступи margin для різних сторін в CSS",
      },
      {
        type: "paragraph",
        text: "Властивість margin дозволяє створювати зовнішні відступи навколо елементів.",
      },
      {
        type: "paragraph",
        text: "Якщо потрібно задати різні відступи для кожної сторони, використовуються окремі властивості: margin-top, margin-right, margin-bottom та margin-left.",
      },
      {
        type: "list",
        items: [
          "margin-top — відступ зверху.",
          "margin-right — відступ справа.",
          "margin-bottom — відступ знизу.",
          "margin-left — відступ зліва.",
        ],
      },
      {
        type: "code",
        language: "html",
        code: `
<div id="parent">
  <div id="child"></div>
</div>`,
      },
      {
        type: "code",
        language: "css",
        code: `
#parent {
  width: 300px;
  border: 1px solid red;
}

#child {
  margin-top: 10px; /* зверху */
  margin-right: 20px; /* справа */
  margin-bottom: 30px; /* знизу */
  margin-left: 40px; /* зліва */

  height: 100px;
  border: 1px solid green;
}`,
      },
      {
        type: "example",
        title: "Результат виконання коду",
        text: "Внутрішній блок отримає різні відступи з кожної сторони: 10px зверху, 20px справа, 30px знизу та 40px зліва.",
      },
      {
        type: "note",
        text: "Окремі властивості margin дозволяють точно керувати положенням елементів на сторінці.",
      },
      {
        type: "task",
        text: [
          "№1. Створіть два вкладені блоки.",
          "№2. Задайте кожній стороні різне значення margin.",
          "№3. Змініть значення відступів та перевірте результат.",
        ],
      },
      {
        type: "hint",
        text: "Для швидкого налаштування всіх сторін можна використовувати скорочений запис margin.",
      },
      {
        type: "answer",
        text: `
#child {
  margin-top: 10px;
  margin-right: 20px;
  margin-bottom: 30px;
  margin-left: 40px;

  height: 100px;
  border: 1px solid green;
}`,
      },
    ],
  },
  {
    id: "margin-four-values-css",
    title: "Чотири значення у властивості margin в CSS",
    description:
      "Вивчаємо скорочений запис margin із чотирма значеннями для задання різних зовнішніх відступів з усіх сторін елемента.",
    content: [
      {
        type: "heading",
        text: "Чотири значення у властивості margin в CSS",
      },
      {
        type: "paragraph",
        text: "Властивість margin може приймати чотири значення, кожне з яких задає відступ для окремої сторони елемента.",
      },
      {
        type: "paragraph",
        text: "Значення записуються за годинниковою стрілкою: зверху → справа → знизу → зліва.",
      },
      {
        type: "example",
        title: "Порядок значень margin",
        text: "margin: верх право низ ліво;",
      },
      {
        type: "list",
        items: [
          "Перше значення — margin-top (верхній відступ).",
          "Друге значення — margin-right (правий відступ).",
          "Третє значення — margin-bottom (нижній відступ).",
          "Четверте значення — margin-left (лівий відступ).",
        ],
      },
      {
        type: "code",
        language: "html",
        code: `
<div id="parent">
  <div id="child"></div>
</div>`,
      },
      {
        type: "code",
        language: "css",
        code: `
#parent {
  width: 300px;
  border: 1px solid red;
}

#child {
  height: 100px;
  border: 1px solid green;
  margin: 10px 20px 30px 40px;
}`,
      },
      {
        type: "example",
        title: "Результат виконання коду",
        text: "Елемент отримає відступи: 10px зверху, 20px справа, 30px знизу та 40px зліва.",
      },
      {
        type: "note",
        text: "Такий запис дозволяє замінити чотири окремі властивості margin-top, margin-right, margin-bottom та margin-left одним рядком.",
      },
      {
        type: "task",
        text: [
          "№1. Створіть блок та задайте йому різні відступи через margin.",
          "№2. Використайте запис margin з чотирма значеннями.",
          "№3. Поміняйте місцями значення та перевірте, як зміниться положення елемента.",
        ],
      },
      {
        type: "hint",
        text: "Запам'ятайте порядок: верх → право → низ → ліво. Це такий самий напрямок, як рух стрілки годинника.",
      },
      {
        type: "answer",
        text: `
#child {
  margin: 10px 20px 30px 40px;
}`,
      },
    ],
  },
  {
    id: "margin-two-values-css",
    title: "Два значення у властивості margin в CSS",
    description:
      "Вивчаємо скорочений запис margin із двома значеннями для одночасного задання вертикальних та горизонтальних відступів.",
    content: [
      {
        type: "heading",
        text: "Два значення у властивості margin в CSS",
      },
      {
        type: "paragraph",
        text: "Властивість margin може приймати два значення. У такому випадку перше значення задає верхній і нижній відступ, а друге — лівий і правий.",
      },
      {
        type: "example",
        title: "Порядок значень margin",
        text: "margin: вертикальні відступи горизонтальні відступи;",
      },
      {
        type: "list",
        items: [
          "Перше значення — margin-top та margin-bottom.",
          "Друге значення — margin-right та margin-left.",
        ],
      },
      {
        type: "code",
        language: "html",
        code: `
<div id="parent">
  <div id="child"></div>
</div>`,
      },
      {
        type: "code",
        language: "css",
        code: `
#parent {
  width: 300px;
  border: 1px solid red;
}

#child {
  height: 100px;
  border: 1px solid green;
  margin: 40px 20px;
}`,
      },
      {
        type: "example",
        title: "Результат виконання коду",
        text: "Блок отримає відступ 40px зверху і знизу, а також 20px зліва і справа.",
      },
      {
        type: "note",
        text: "Два значення margin дозволяють скоротити запис замість використання чотирьох окремих властивостей.",
      },
      {
        type: "example",
        title: "Порівняння записів",
        text: `
margin: 40px 20px;

те саме, що:

margin-top: 40px;
margin-bottom: 40px;
margin-left: 20px;
margin-right: 20px;`,
      },
      {
        type: "task",
        text: [
          "№1. Створіть два вкладені блоки.",
          "№2. Задайте внутрішньому блоку margin із двома значеннями.",
          "№3. Перевірте, як змінюється положення блоку при зміні значень.",
        ],
      },
      {
        type: "hint",
        text: "Запам'ятайте правило: перше значення відповідає за вертикаль, друге — за горизонталь.",
      },
      {
        type: "answer",
        text: `
#child {
  margin: 40px 20px;
}`,
      },
    ],
  },
  {
    id: "margin-three-values-css",
    title: "Три значення у властивості margin в CSS",
    description:
      "Вивчаємо скорочений запис margin із трьома значеннями для задання верхнього, горизонтального та нижнього відступів.",
    content: [
      {
        type: "heading",
        text: "Три значення у властивості margin в CSS",
      },
      {
        type: "paragraph",
        text: "Властивість margin може приймати три значення. У такому випадку кожне значення відповідає за певні сторони елемента.",
      },
      {
        type: "paragraph",
        text: "Перше значення задає верхній відступ, друге — одночасно лівий і правий, третє — нижній відступ.",
      },
      {
        type: "example",
        title: "Порядок значень margin",
        text: "margin: верх горизонтальні сторони низ;",
      },
      {
        type: "list",
        items: [
          "Перше значення — margin-top (верхній відступ).",
          "Друге значення — margin-left та margin-right (ліві та праві відступи).",
          "Третє значення — margin-bottom (нижній відступ).",
        ],
      },
      {
        type: "code",
        language: "html",
        code: `
<div id="parent">
  <div id="child"></div>
</div>`,
      },
      {
        type: "code",
        language: "css",
        code: `
#parent {
  width: 300px;
  border: 1px solid red;
}

#child {
  height: 100px;
  border: 1px solid green;
  margin: 10px 20px 30px;
}`,
      },
      {
        type: "example",
        title: "Результат виконання коду",
        text: "Блок отримає 10px зверху, 20px зліва та справа, а також 30px знизу.",
      },
      {
        type: "note",
        text: "Три значення margin — це скорочений запис замість чотирьох окремих властивостей.",
      },
      {
        type: "example",
        title: "Повний запис",
        text: `
margin: 10px 20px 30px;

те саме, що:

margin-top: 10px;
margin-right: 20px;
margin-bottom: 30px;
margin-left: 20px;`,
      },
      {
        type: "task",
        text: [
          "№1. Створіть два вкладені блоки.",
          "№2. Задайте внутрішньому блоку margin із трьома значеннями.",
          "№3. Змініть значення та перевірте, як змінюються відступи.",
        ],
      },
      {
        type: "hint",
        text: "Запам'ятайте схему: верх → горизонтальні сторони → низ.",
      },
      {
        type: "answer",
        text: `
#child {
  margin: 10px 20px 30px;
}`,
      },
    ],
  },
  {
    id: "padding-css",
    title: "Робота з відступами padding в CSS",
    description:
      "Вивчаємо властивість padding, яка створює внутрішні відступи між вмістом елемента та його границею.",
    content: [
      {
        type: "heading",
        text: "Робота з відступами padding в CSS",
      },
      {
        type: "paragraph",
        text: "Ми вже розглянули властивість margin, яка створює зовнішні відступи за межами границі елемента.",
      },
      {
        type: "paragraph",
        text: "Властивість padding працює схожим чином, але створює внутрішній відступ між вмістом елемента та його границею.",
      },
      {
        type: "example",
        title: "Елемент без padding",
        text: "Текст прилипає до границі блоку, оскільки внутрішнього відступу немає.",
      },
      {
        type: "code",
        language: "html",
        code: `
<div id="elem">
  some long text
</div>`,
      },
      {
        type: "code",
        language: "css",
        code: `
#elem {
  width: 300px;
  border: 1px solid red;
  text-align: justify;
}`,
      },
      {
        type: "example",
        title: "Додавання внутрішнього відступу",
        text: "Тепер додамо padding: 30px для всіх сторін елемента.",
      },
      {
        type: "code",
        language: "css",
        code: `#elem {
  padding: 30px;
  width: 300px;
  border: 1px solid red;
  text-align: justify;
}`,
      },
      {
        type: "example",
        title: "Результат виконання коду",
        text: "Текст отримає відступ 30px від границі з усіх сторін.",
      },
      {
        type: "note",
        text: "Головна різниця: margin створює відступ зовні елемента, а padding — всередині елемента.",
      },
      {
        type: "list",
        items: [
          "padding-top — внутрішній відступ зверху.",
          "padding-right — внутрішній відступ справа.",
          "padding-bottom — внутрішній відступ знизу.",
          "padding-left — внутрішній відступ зліва.",
        ],
      },
      {
        type: "task",
        text: [
          "№1. Створіть блок із текстом та границею.",
          "№2. Додайте padding: 30px.",
          "№3. Змініть значення padding та перевірте, як змінюється відстань між текстом і границею.",
        ],
      },
      {
        type: "hint",
        text: "Спробуйте порівняти padding та margin: один рухає вміст усередині, інший створює відстань між елементами.",
      },
      {
        type: "answer",
        text: `#elem {
  padding: 30px;
  width: 300px;
  border: 1px solid red;
  text-align: justify;
}`,
      },
    ],
  },
  {
    id: "padding-sides-css",
    title: "Відступи padding для різних сторін в CSS",
    description:
      "Вивчаємо окремі властивості padding для створення різних внутрішніх відступів з кожної сторони елемента.",
    content: [
      {
        type: "heading",
        text: "Відступи padding для різних сторін в CSS",
      },
      {
        type: "paragraph",
        text: "Для внутрішніх відступів, так само як і для зовнішніх, існують окремі властивості для кожної сторони елемента.",
      },
      {
        type: "paragraph",
        text: "За допомогою padding-top, padding-right, padding-bottom та padding-left можна задати різні відступи між текстом і границею блоку.",
      },
      {
        type: "list",
        items: [
          "padding-top — внутрішній відступ зверху.",
          "padding-right — внутрішній відступ справа.",
          "padding-bottom — внутрішній відступ знизу.",
          "padding-left — внутрішній відступ зліва.",
        ],
      },
      {
        type: "code",
        language: "html",
        code: `<div id="elem">
  some long text
</div>`,
      },
      {
        type: "code",
        language: "css",
        code: `#elem {
  padding-top: 10px; /* зверху */
  padding-right: 20px; /* справа */
  padding-bottom: 30px; /* знизу */
  padding-left: 40px; /* зліва */

  width: 300px;
  border: 1px solid red;
  text-align: justify;
}`,
      },
      {
        type: "example",
        title: "Результат виконання коду",
        text: "Текст отримає різні внутрішні відступи: 10px зверху, 20px справа, 30px знизу та 40px зліва.",
      },
      {
        type: "note",
        text: "На відміну від margin, властивість padding збільшує відстань між вмістом елемента та його границею.",
      },
      {
        type: "example",
        title: "Порівняння margin та padding",
        text: "margin створює відстань між елементами, а padding створює простір усередині самого елемента.",
      },
      {
        type: "task",
        text: [
          "№1. Створіть блок із текстом та границею.",
          "№2. Задайте різні значення для padding кожної сторони.",
          "№3. Змініть значення padding та перевірте результат.",
        ],
      },
      {
        type: "hint",
        text: "Використовуйте окремі властивості padding, коли потрібно точно налаштувати відступ тільки з однієї сторони.",
      },
      {
        type: "answer",
        text: `#elem {
  padding-top: 10px;
  padding-right: 20px;
  padding-bottom: 30px;
  padding-left: 40px;
}`,
      },
    ],
  },
  {
    id: "padding-values-css",
    title: "Кілька значень у властивості padding в CSS",
    description:
      "Вивчаємо скорочений запис padding із двома, трьома та чотирма значеннями для задання внутрішніх відступів.",
    content: [
      {
        type: "heading",
        text: "Кілька значень у властивості padding в CSS",
      },
      {
        type: "paragraph",
        text: "Властивість padding може приймати не тільки одне значення, а й два, три або чотири значення.",
      },
      {
        type: "paragraph",
        text: "У таких випадках padding працює за тим самим правилом, що й властивість margin.",
      },
      {
        type: "list",
        items: [
          "Одне значення — задає однаковий внутрішній відступ з усіх сторін.",
          "Два значення — перше для верхньої та нижньої сторони, друге для лівої та правої.",
          "Три значення — перше зверху, друге зліва і справа, третє знизу.",
          "Чотири значення — зверху, справа, знизу, зліва.",
        ],
      },
      {
        type: "example",
        title: "Одне значення",
        text: "Відступ з усіх сторін буде однаковим.",
      },
      {
        type: "code",
        language: "css",
        code: `#elem {
  padding: 20px;
}`,
      },
      {
        type: "example",
        title: "Два значення",
        text: "Перше значення відповідає за верх і низ, друге — за ліво і право.",
      },
      {
        type: "code",
        language: "css",
        code: `#elem {
  padding: 10px 20px;
}`,
      },
      {
        type: "example",
        title: "Три значення",
        text: "Перше значення — верх, друге — сторони, третє — низ.",
      },
      {
        type: "code",
        language: "css",
        code: `#elem {
  padding: 10px 20px 30px;
}`,
      },
      {
        type: "example",
        title: "Чотири значення",
        text: "Значення задаються за годинниковою стрілкою: верх, право, низ, ліво.",
      },
      {
        type: "code",
        language: "css",
        code: `#elem {
  padding: 10px 20px 30px 40px;
}`,
      },
      {
        type: "note",
        text: "Порядок значень padding повністю збігається з порядком значень margin.",
      },
      {
        type: "task",
        text: [
          "№1. Створіть блок із текстом та границею.",
          "№2. Спробуйте різні варіанти запису padding.",
          "№3. Перевірте, як змінюється відстань між текстом і границею.",
        ],
      },
      {
        type: "hint",
        text: "Запам'ятайте правило: 4 значення читаються як рух за годинниковою стрілкою — верх, право, низ, ліво.",
      },
      {
        type: "answer",
        text: `#elem {
  padding: 10px 20px 30px 40px;
}`,
      },
    ],
  },
  {
    id: "padding-width-css",
    title: "Як padding впливає на розмір елемента в CSS",
    description:
      "Вивчаємо, як внутрішні відступи padding змінюють фактичний розмір елемента навіть при заданій ширині width.",
    content: [
      {
        type: "heading",
        text: "Як padding впливає на розмір елемента в CSS",
      },
      {
        type: "paragraph",
        text: "Якщо задати елементу ширину width: 100px, це не завжди означає, що його фактична ширина буде 100px.",
      },
      {
        type: "paragraph",
        text: "За замовчуванням у CSS ширина width визначає тільки ширину вмісту елемента. Якщо додати padding, він збільшить загальний розмір блоку.",
      },
      {
        type: "example",
        title: "Порівняння двох блоків",
        text: "Перший блок має тільки width: 100px, а другий додатково має padding: 25px, тому він буде більшим.",
      },
      {
        type: "code",
        language: "html",
        code: `<div id="elem1"></div>
<div id="elem2"></div>`,
      },
      {
        type: "code",
        language: "css",
        code: `#elem1 {
  width: 100px;
  height: 100px;
  background-color: #f1f1f1;
  margin-bottom: 20px;
}

#elem2 {
  padding: 25px;
  width: 100px;
  height: 100px;
  background-color: #f1f1f1;
}`,
      },
      {
        type: "example",
        title: "Результат виконання коду",
        text: "Перший блок матиме ширину 100px. Другий блок стане ширшим, оскільки до ширини додасться padding зліва і справа.",
      },
      {
        type: "note",
        text: "За стандартною моделлю CSS загальна ширина елемента обчислюється так: width + padding зліва + padding справа + border.",
      },
      {
        type: "example",
        title: "Розрахунок розміру",
        text: "width: 100px + padding-left: 25px + padding-right: 25px = фактична ширина 150px (без урахування border).",
      },
      {
        type: "list",
        items: [
          "width — ширина області вмісту.",
          "padding — внутрішні відступи навколо вмісту.",
          "border — границя елемента.",
          "Фактичний розмір може бути більшим за width.",
        ],
      },
      {
        type: "task",
        text: [
          "№1. Створіть два блоки однакової ширини.",
          "№2. Додайте одному з блоків padding: 25px.",
          "№3. Порівняйте їхні розміри.",
        ],
      },
      {
        type: "hint",
        text: "Відкрийте інструменти розробника браузера та подивіться модель box model, щоб побачити розміри елемента.",
      },
      {
        type: "answer",
        text: `#elem2 {
  padding: 25px;
  width: 100px;
  height: 100px;
  background-color: #f1f1f1;
}`,
      },
    ],
  },
  {
    id: "border-width-css",
    title: "Вплив границі на розширення елементів у CSS",
    description:
      "Вивчаємо, як властивість border впливає на фактичний розмір елемента та чому блок стає більшим за заданий width.",
    content: [
      {
        type: "heading",
        text: "Вплив границі на розширення елементів у CSS",
      },
      {
        type: "paragraph",
        text: "Границя (border) також збільшує фактичний розмір елемента, так само як і внутрішній відступ padding.",
      },
      {
        type: "paragraph",
        text: "Якщо елементу задано width: 100px, додавання границі збільшить його загальну ширину.",
      },
      {
        type: "example",
        title: "Порівняння двох блоків",
        text: "Перший блок має тільки ширину 100px. Другий блок має таку саму ширину, але додатково отримує границю 10px, тому стає більшим.",
      },
      {
        type: "code",
        language: "html",
        code: `<div id="elem1"></div>
<div id="elem2"></div>`,
      },
      {
        type: "code",
        language: "css",
        code: `#elem1 {
  width: 100px;
  height: 100px;
  background-color: #f1f1f1;
  margin-bottom: 20px;
}

#elem2 {
  width: 100px;
  height: 100px;
  background-color: #f1f1f1;
  border: 10px solid green;
}`,
      },
      {
        type: "example",
        title: "Результат виконання коду",
        text: "Перший блок матиме розмір 100px × 100px. Другий блок стане більшим через додану границю.",
      },
      {
        type: "note",
        text: "За стандартною моделлю CSS ширина елемента враховує тільки область вмісту. Padding і border додаються зверху.",
      },
      {
        type: "example",
        title: "Розрахунок фактичного розміру",
        text: "width: 100px + border-left: 10px + border-right: 10px = фактична ширина 120px.",
      },
      {
        type: "list",
        items: [
          "width — ширина вмісту елемента.",
          "padding — внутрішній відступ навколо вмісту.",
          "border — границя навколо padding та вмісту.",
          "margin — зовнішній відступ між елементами.",
        ],
      },
      {
        type: "task",
        text: [
          "№1. Створіть два блоки однакового розміру.",
          "№2. Додайте другому блоку border: 10px solid green.",
          "№3. Порівняйте розміри блоків.",
        ],
      },
      {
        type: "hint",
        text: "Використовуйте інструменти розробника браузера, щоб побачити, як border впливає на розмір елемента.",
      },
      {
        type: "answer",
        text: `#elem2 {
  width: 100px;
  height: 100px;
  background-color: #f1f1f1;
  border: 10px solid green;
}`,
      },
    ],
  },
  {
    id: "padding-border-width-css",
    title: "Вплив padding і границі на розширення елементів у CSS",
    description:
      "Вивчаємо, як одночасне використання padding і border збільшує фактичний розмір елемента.",
    content: [
      {
        type: "heading",
        text: "Вплив padding і границі на розширення елементів у CSS",
      },
      {
        type: "paragraph",
        text: "Якщо у елемента одночасно задані padding і border, вони разом збільшують його фактичний розмір.",
      },
      {
        type: "paragraph",
        text: "Властивість width за замовчуванням визначає тільки ширину вмісту, а padding і border додаються до неї.",
      },
      {
        type: "example",
        title: "Порівняння двох блоків",
        text: "Перший блок має тільки width і height. Другий додатково має padding та border, тому його розмір буде більшим.",
      },
      {
        type: "code",
        language: "html",
        code: `<div id="elem1"></div>
<div id="elem2"></div>`,
      },
      {
        type: "code",
        language: "css",
        code: `#elem1 {
  width: 100px;
  height: 100px;
  background-color: #f1f1f1;
  margin-bottom: 20px;
}

#elem2 {
  width: 100px;
  height: 100px;
  background-color: #f1f1f1;
  padding: 25px;
  border: 10px solid green;
}`,
      },
      {
        type: "example",
        title: "Розрахунок фактичного розміру",
        text: "Ширина другого блоку: 100px (width) + 25px (padding зліва) + 25px (padding справа) + 10px (border зліва) + 10px (border справа) = 170px.",
      },
      {
        type: "note",
        text: "Padding і border не входять у значення width та height при стандартній моделі CSS box model.",
      },
      {
        type: "list",
        items: [
          "width — ширина області вмісту.",
          "padding — внутрішній простір між вмістом і границею.",
          "border — товщина границі навколо елемента.",
          "Загальний розмір елемента = content + padding + border.",
        ],
      },
      {
        type: "example",
        title: "Схема розміру елемента",
        text: "content → padding → border → margin",
      },
      {
        type: "task",
        text: [
          "№1. Створіть два блоки однакового розміру.",
          "№2. Додайте другому блоку padding: 25px.",
          "№3. Додайте border: 10px solid green.",
          "№4. Порівняйте фактичні розміри блоків.",
        ],
      },
      {
        type: "hint",
        text: "Спробуйте змінювати padding і border та спостерігайте, як змінюється розмір елемента.",
      },
      {
        type: "answer",
        text: `#elem2 {
  width: 100px;
  height: 100px;
  background-color: #f1f1f1;
  padding: 25px;
  border: 10px solid green;
}`,
      },
    ],
  },
  {
    id: "box-sizing-border-box-css",
    title: "Скасування розширення елементів у CSS",
    description:
      "Вивчаємо властивість box-sizing зі значенням border-box, яка дозволяє включити padding і border у задані розміри елемента.",
    content: [
      {
        type: "heading",
        text: "Скасування розширення елементів у CSS",
      },
      {
        type: "paragraph",
        text: "За стандартною моделлю CSS додавання padding і border збільшує фактичний розмір елемента.",
      },
      {
        type: "paragraph",
        text: "У більшості випадків таке розширення незручне, тому в CSS існує властивість box-sizing.",
      },
      {
        type: "paragraph",
        text: "Якщо встановити box-sizing: border-box, то padding і border будуть враховуватися всередині заданої ширини та висоти елемента.",
      },
      {
        type: "example",
        title: "Порівняння двох блоків",
        text: "Перший блок має звичайну модель розрахунку. Другий використовує box-sizing: border-box, тому його розмір залишається 100px.",
      },
      {
        type: "code",
        language: "html",
        code: `<div id="elem1"></div>
<div id="elem2"></div>`,
      },
      {
        type: "code",
        language: "css",
        code: `#elem1 {
  width: 100px;
  height: 100px;
  background-color: #f1f1f1;
  margin-bottom: 20px;
}

#elem2 {
  width: 100px;
  height: 100px;
  background-color: #f1f1f1;
  padding: 25px;
  border: 10px solid green;
  box-sizing: border-box;
}`,
      },
      {
        type: "example",
        title: "Результат виконання коду",
        text: "Другий блок залишиться розміром 100px × 100px, навіть з padding і border.",
      },
      {
        type: "note",
        text: "Зі значенням border-box ширина і висота включають content, padding та border.",
      },
      {
        type: "example",
        title: "Порівняння моделей",
        text: `content-box (за замовчуванням):
width = тільки вміст

border-box:
width = вміст + padding + border`,
      },
      {
        type: "list",
        items: [
          "content-box — стандартне значення, padding і border збільшують розмір.",
          "border-box — padding і border входять у задані width та height.",
        ],
      },
      {
        type: "task",
        text: [
          "№1. Створіть блок width: 100px.",
          "№2. Додайте padding і border та перевірте, як змінився розмір.",
          "№3. Додайте box-sizing: border-box та порівняйте результат.",
        ],
      },
      {
        type: "hint",
        text: "У сучасній верстці часто встановлюють box-sizing: border-box для всіх елементів через універсальний селектор.",
      },
      {
        type: "code",
        language: "css",
        code: `* {
  box-sizing: border-box;
}`,
      },
      {
        type: "answer",
        text: `#elem2 {
  width: 100px;
  height: 100px;
  background-color: #f1f1f1;
  padding: 25px;
  border: 10px solid green;
  box-sizing: border-box;
}`,
      },
    ],
  },
  {
    id: "block-width-height-css",
    title: "Ширина і висота блочного елемента в CSS",
    description:
      "Вивчаємо, як задавати ширину та висоту блочних елементів за допомогою властивостей width і height.",
    content: [
      {
        type: "heading",
        text: "Ширина і висота блочного елемента в CSS",
      },
      {
        type: "paragraph",
        text: "Блочним елементам у CSS можна задавати власну ширину та висоту за допомогою властивостей width і height.",
      },
      {
        type: "paragraph",
        text: "За замовчуванням блочні елементи займають всю доступну ширину батьківського елемента, але за допомогою width можна змінити їхній розмір.",
      },
      {
        type: "code",
        language: "html",
        code: `<div>text</div>`,
      },
      {
        type: "code",
        language: "css",
        code: `div {
  width: 100px;
  height: 100px;
  border: 1px solid red;
}`,
      },
      {
        type: "example",
        title: "Результат виконання коду",
        text: "Блок div матиме ширину 100px і висоту 100px з червоною границею.",
      },
      {
        type: "list",
        items: [
          "width — задає ширину елемента.",
          "height — задає висоту елемента.",
          "border — додає границю навколо елемента.",
        ],
      },
      {
        type: "note",
        text: "Ширина та висота застосовуються до блочних елементів. Для рядкових елементів ці властивості зазвичай не працюють так само.",
      },
      {
        type: "example",
        title: "Приклад зміни розміру",
        text: "Змінюючи значення width і height, можна створювати блоки різних розмірів.",
      },
      {
        type: "task",
        text: [
          "№1. Створіть блок div.",
          "№2. Задайте йому width: 200px та height: 100px.",
          "№3. Додайте границю та змініть її товщину.",
        ],
      },
      {
        type: "hint",
        text: "Спробуйте змінити width і height та подивіться, як змінюється розмір блоку.",
      },
      {
        type: "answer",
        text: `div {
  width: 100px;
  height: 100px;
  border: 1px solid red;
}`,
      },
    ],
  },
  {
    id: "block-width-auto-css",
    title: "Ширина блочного елемента в CSS",
    description:
      "Вивчаємо поведінку блочних елементів без заданої ширини та як CSS автоматично розтягує їх на всю доступну ширину.",
    content: [
      {
        type: "heading",
        text: "Ширина блочного елемента в CSS",
      },
      {
        type: "paragraph",
        text: "Якщо у блочного елемента не вказати ширину за допомогою властивості width, він автоматично займе всю доступну ширину батьківського елемента.",
      },
      {
        type: "paragraph",
        text: "Це стандартна поведінка блокових елементів у CSS.",
      },
      {
        type: "example",
        title: "Блок без заданої ширини",
        text: "Елемент div не має властивості width, тому він розтягується на всю ширину контейнера.",
      },
      {
        type: "code",
        language: "html",
        code: `<div>text</div>`,
      },
      {
        type: "code",
        language: "css",
        code: `div {
  height: 100px;
  border: 1px solid red;
}`,
      },
      {
        type: "example",
        title: "Результат виконання коду",
        text: "Блок div займе всю доступну ширину сторінки та матиме висоту 100px.",
      },
      {
        type: "note",
        text: "Блочні елементи за замовчуванням займають всю ширину батьківського елемента, якщо для них не задано width.",
      },
      {
        type: "list",
        items: [
          "div — приклад блочного елемента.",
          "width — задає власну ширину елемента.",
          "Без width блок займає всю доступну ширину.",
          "height не впливає на ширину елемента.",
        ],
      },
      {
        type: "example",
        title: "Порівняння",
        text: `Без width:
блок → вся доступна ширина

З width:
блок → заданий розмір`,
      },
      {
        type: "task",
        text: [
          "№1. Створіть блок div без властивості width.",
          "№2. Додайте йому border і height.",
          "№3. Задайте width: 300px та порівняйте результат.",
        ],
      },
      {
        type: "hint",
        text: "Спробуйте змінити ширину вікна браузера та подивіться, як блок змінює свій розмір.",
      },
      {
        type: "answer",
        text: `div {
  height: 100px;
  border: 1px solid red;
}`,
      },
    ],
  },
  {
    id: "block-height-auto-css",
    title: "Висота блочного елемента в CSS",
    description:
      "Вивчаємо, як формується висота блочного елемента, якщо властивість height не задана.",
    content: [
      {
        type: "heading",
        text: "Висота блочного елемента в CSS",
      },
      {
        type: "paragraph",
        text: "Якщо у блочного елемента не вказати висоту за допомогою властивості height, вона буде автоматично визначатися його вмістом.",
      },
      {
        type: "paragraph",
        text: "Браузер розраховує висоту блоку залежно від кількості тексту, вкладених елементів та інших властивостей.",
      },
      {
        type: "example",
        title: "Блок без заданої висоти",
        text: "Елемент div не має властивості height, тому його висота буде залежати від тексту всередині.",
      },
      {
        type: "code",
        language: "html",
        code: `<div>text</div>`,
      },
      {
        type: "code",
        language: "css",
        code: `div {
  width: 100px;
  border: 1px solid red;
}`,
      },
      {
        type: "example",
        title: "Результат виконання коду",
        text: "Блок div отримає ширину 100px, а його висота автоматично сформується за висотою тексту.",
      },
      {
        type: "note",
        text: "Для блочних елементів height не є обов'язковою властивістю. Якщо її не задати, висота визначається вмістом.",
      },
      {
        type: "list",
        items: [
          "width — задає ширину елемента.",
          "height — задає фіксовану висоту елемента.",
          "Без height висота залежить від вмісту.",
          "Більше тексту — більша висота блоку.",
        ],
      },
      {
        type: "example",
        title: "Порівняння",
        text: `Без height:
висота → залежить від вмісту

З height:
висота → заданий розмір`,
      },
      {
        type: "task",
        text: [
          "№1. Створіть блок div із текстом.",
          "№2. Додайте width: 100px та border.",
          "№3. Додайте більше тексту та подивіться, як змінюється висота блоку.",
        ],
      },
      {
        type: "hint",
        text: "Спробуйте видалити height у блоків і подивіться, як браузер сам визначає їхню висоту.",
      },
      {
        type: "answer",
        text: `div {
  width: 100px;
  border: 1px solid red;
}`,
      },
    ],
  },
  {
    id: "block-empty-height-css",
    title: "Висота блочного елемента без вмісту в CSS",
    description:
      "Вивчаємо, як поводиться блочний елемент без вмісту та чому його висота стає нульовою.",
    content: [
      {
        type: "heading",
        text: "Висота блочного елемента без вмісту в CSS",
      },
      {
        type: "paragraph",
        text: "Якщо у блочному елементі немає вмісту і не задано властивість height, його висота буде дорівнювати нулю.",
      },
      {
        type: "paragraph",
        text: "У результаті границя елемента згорнеться, і ми побачимо тільки тонку лінію.",
      },
      {
        type: "example",
        title: "Порожній блок",
        text: "Елемент div не містить тексту та не має заданої висоти, тому його внутрішня область відсутня.",
      },
      {
        type: "code",
        language: "html",
        code: `<div></div>`,
      },
      {
        type: "code",
        language: "css",
        code: `div {
  width: 100px;
  border: 1px solid red;
}`,
      },
      {
        type: "example",
        title: "Результат виконання коду",
        text: "Блок матиме ширину 100px, але його висота буде дорівнювати 0px. Буде видно лише верхню та нижню границю.",
      },
      {
        type: "note",
        text: "Висота блочного елемента без height формується з його вмісту. Якщо вмісту немає — висота дорівнює нулю.",
      },
      {
        type: "list",
        items: [
          "Порожній блок без height має висоту 0px.",
          "Границя все одно буде відображатися.",
          "Додавання тексту або height збільшить висоту елемента.",
        ],
      },
      {
        type: "example",
        title: "Як зробити порожній блок видимим",
        text: "Можна задати висоту через height або додати внутрішній відступ padding.",
      },
      {
        type: "code",
        language: "css",
        code: `div {
  width: 100px;
  height: 100px;
  border: 1px solid red;
}`,
      },
      {
        type: "task",
        text: [
          "№1. Створіть порожній div.",
          "№2. Додайте йому width та border.",
          "№3. Додайте height і порівняйте результат.",
          "№4. Спробуйте замість height використати padding.",
        ],
      },
      {
        type: "hint",
        text: "Якщо блок не видно, перевірте, чи має він висоту або вміст.",
      },
      {
        type: "answer",
        text: `div {
  width: 100px;
  height: 100px;
  border: 1px solid red;
}`,
      },
    ],
  },
  {
    id: "block-elements-line-css",
    title: "Кілька блочних елементів поруч у CSS",
    description:
      "Вивчаємо стандартну поведінку блочних елементів та чому вони починаються з нового рядка.",
    content: [
      {
        type: "heading",
        text: "Кілька блочних елементів поруч у CSS",
      },
      {
        type: "paragraph",
        text: "Блочні елементи за замовчуванням займають всю доступну ширину рядка, тому кожен наступний блочний елемент починається з нового рядка.",
      },
      {
        type: "paragraph",
        text: "Навіть якщо задати блоку невелику ширину, він все одно залишиться окремим блоком і наступний елемент буде розташований під ним.",
      },
      {
        type: "example",
        title: "Кілька блоків div",
        text: "Три елементи div будуть розташовані один під одним.",
      },
      {
        type: "code",
        language: "html",
        code: `<div>text</div>
<div>text</div>
<div>text</div>`,
      },
      {
        type: "code",
        language: "css",
        code: `div {
  width: 100px;
  height: 100px;
  margin-bottom: 20px;
  border: 1px solid red;
}`,
      },
      {
        type: "example",
        title: "Результат виконання коду",
        text: "Кожен блок div буде розташований з нового рядка, навіть якщо його ширина становить лише 100px.",
      },
      {
        type: "note",
        text: "Блочна поведінка є стандартною для елементів div, p, h1-h6, section та інших блокових тегів.",
      },
      {
        type: "list",
        items: [
          "Блочні елементи починаються з нового рядка.",
          "За замовчуванням займають всю доступну ширину.",
          "Властивості width і height працюють для блоків.",
          "Щоб розташувати блоки поруч, потрібно змінити їхню поведінку через CSS.",
        ],
      },
      {
        type: "example",
        title: "Як розмістити блоки в один ряд",
        text: "Для розташування блоків поруч можна використовувати display: inline-block, flex або grid.",
      },
      {
        type: "code",
        language: "css",
        code: `div {
  display: inline-block;
}`,
      },
      {
        type: "task",
        text: [
          "№1. Створіть три блоки div.",
          "№2. Задайте їм width, height та border.",
          "№3. Перевірте, як вони розташовуються на сторінці.",
          "№4. Додайте display: inline-block та порівняйте результат.",
        ],
      },
      {
        type: "hint",
        text: "Спробуйте змінити display у блоку та подивіться, як зміниться його поведінка.",
      },
      {
        type: "answer",
        text: `div {
  width: 100px;
  height: 100px;
  margin-bottom: 20px;
  border: 1px solid red;
}`,
      },
    ],
  },
  {
    id: "inline-width-height-css",
    title: "Ширина і висота рядкового елемента в CSS",
    description:
      "Вивчаємо особливості розмірів рядкових елементів та чому властивості width і height для них не працюють.",
    content: [
      {
        type: "heading",
        text: "Ширина і висота рядкового елемента в CSS",
      },
      {
        type: "paragraph",
        text: "Рядкові елементи мають розмір, який визначається їхнім вмістом. Їхня ширина і висота залежать від тексту або інших вкладених елементів.",
      },
      {
        type: "paragraph",
        text: "Якщо задати рядковому елементу властивості width і height, вони не будуть працювати.",
      },
      {
        type: "example",
        title: "Рядковий елемент span",
        text: "Елемент span є рядковим, тому його розміри визначаються текстом усередині.",
      },
      {
        type: "code",
        language: "html",
        code: `<span>text</span>`,
      },
      {
        type: "code",
        language: "css",
        code: `span {
  width: 100px;
  height: 100px;
  border: 1px solid red;
}`,
      },
      {
        type: "example",
        title: "Результат виконання коду",
        text: "Границя буде відображатися навколо тексту, але ширина та висота 100px не застосуються.",
      },
      {
        type: "note",
        text: "Для рядкових елементів властивості width і height не працюють, оскільки вони не створюють окремий блок розміру.",
      },
      {
        type: "list",
        items: [
          "span — приклад рядкового елемента.",
          "Розмір рядкового елемента залежить від його вмісту.",
          "width не змінює ширину рядкового елемента.",
          "height не змінює висоту рядкового елемента.",
        ],
      },
      {
        type: "example",
        title: "Як змінити розмір рядкового елемента",
        text: "Щоб задати ширину та висоту, потрібно змінити тип відображення через display: inline-block або display: block.",
      },
      {
        type: "code",
        language: "css",
        code: `span {
  display: inline-block;
  width: 100px;
  height: 100px;
  border: 1px solid red;
}`,
      },
      {
        type: "task",
        text: [
          "№1. Створіть елемент span із текстом.",
          "№2. Додайте йому width та height.",
          "№3. Перевірте, чому розміри не змінюються.",
          "№4. Додайте display: inline-block і порівняйте результат.",
        ],
      },
      {
        type: "hint",
        text: "Якщо потрібно керувати розмірами рядкового елемента, використовуйте inline-block.",
      },
      {
        type: "answer",
        text: `span {
  display: inline-block;
  width: 100px;
  height: 100px;
  border: 1px solid red;
}`,
      },
    ],
  },
  {
    id: "inline-elements-row-css",
    title: "Кілька рядкових елементів поруч у CSS",
    description:
      "Вивчаємо поведінку рядкових елементів та як вони автоматично розташовуються в один ряд.",
    content: [
      {
        type: "heading",
        text: "Кілька рядкових елементів поруч у CSS",
      },
      {
        type: "paragraph",
        text: "Рядкові елементи за замовчуванням розташовуються один за одним в одному рядку, якщо для них вистачає місця.",
      },
      {
        type: "paragraph",
        text: "На відміну від блочних елементів, рядкові елементи не починають новий рядок.",
      },
      {
        type: "example",
        title: "Кілька елементів span",
        text: "Три рядкові елементи span будуть розташовані поруч один з одним.",
      },
      {
        type: "code",
        language: "html",
        code: `<span>text</span>
<span>text</span>
<span>text</span>`,
      },
      {
        type: "code",
        language: "css",
        code: `span {
  border: 1px solid red;
}`,
      },
      {
        type: "example",
        title: "Результат виконання коду",
        text: "Елементи span відобразяться в один ряд, а границя буде тільки навколо тексту кожного елемента.",
      },
      {
        type: "note",
        text: "Рядкові елементи займають тільки ту ширину, яка потрібна їхньому вмісту.",
      },
      {
        type: "list",
        items: [
          "span — приклад рядкового елемента.",
          "Рядкові елементи розташовуються горизонтально.",
          "Вони не створюють новий рядок.",
          "Їхня ширина залежить від вмісту.",
        ],
      },
      {
        type: "example",
        title: "Порівняння блоків і рядків",
        text: `Блочні елементи:
div → новий рядок

Рядкові елементи:
span → один ряд`,
      },
      {
        type: "task",
        text: [
          "№1. Створіть три елементи span.",
          "№2. Додайте їм границю.",
          "№3. Додайте різний текст та перевірте розташування.",
          "№4. Порівняйте поведінку span і div.",
        ],
      },
      {
        type: "hint",
        text: "Спробуйте додати width і height до span та перевірте, чи зміниться його розмір.",
      },
      {
        type: "answer",
        text: `span {
  border: 1px solid red;
}`,
      },
    ],
  },
  {
    id: "inline-elements-spaces-css",
    title: "Відступи між рядковими елементами в CSS",
    description:
      "Вивчаємо, звідки беруться проміжки між рядковими елементами та як ними керувати.",
    content: [
      {
        type: "heading",
        text: "Відступи між рядковими елементами в CSS",
      },
      {
        type: "paragraph",
        text: "Якщо розташувати кілька рядкових елементів поруч, між ними можуть з'явитися невеликі проміжки.",
      },
      {
        type: "paragraph",
        text: "Ці проміжки не створює CSS. Вони є звичайними символами пробілу між тегами в HTML-коді.",
      },
      {
        type: "example",
        title: "Рядкові елементи з пробілами",
        text: "У цьому прикладі між тегами span є переноси рядків і пробіли, тому браузер показує проміжки між елементами.",
      },
      {
        type: "code",
        language: "html",
        code: `<span>text</span>
<span>text</span>
<span>text</span>`,
      },
      {
        type: "code",
        language: "css",
        code: `span {
  border: 1px solid red;
}`,
      },
      {
        type: "example",
        title: "Приклад без пробілів",
        text: "Якщо записати HTML без пробілів між тегами, проміжки між елементами зникнуть.",
      },
      {
        type: "code",
        language: "html",
        code: `<span>text</span><span>text</span><span>text</span>`,
      },
      {
        type: "example",
        title: "Результат виконання коду",
        text: "Елементи span будуть розташовані впритул один до одного без додаткових проміжків.",
      },
      {
        type: "note",
        text: "Пробіли між рядковими елементами в HTML обробляються браузером як звичайний текстовий пробіл.",
      },
      {
        type: "list",
        items: [
          "Пробіли між тегами HTML створюють проміжки між inline-елементами.",
          "CSS не додає ці відступи автоматично.",
          "Видалення пробілів у HTML прибирає проміжки.",
          "Для точного керування розташуванням часто використовують flex або grid.",
        ],
      },
      {
        type: "example",
        title: "Інші способи прибрати проміжки",
        text: "Можна використовувати flexbox або змінювати HTML-структуру, замість видалення пробілів вручну.",
      },
      {
        type: "code",
        language: "css",
        code: `.container {
  display: flex;
}`,
      },
      {
        type: "task",
        text: [
          "№1. Створіть три елементи span.",
          "№2. Додайте їм границю.",
          "№3. Додайте пробіли між тегами та подивіться результат.",
          "№4. Видаліть пробіли між тегами та порівняйте результат.",
        ],
      },
      {
        type: "hint",
        text: "Якщо між inline-елементами з'явився незрозумілий проміжок — перевірте HTML-код на пробіли та переноси рядків.",
      },
      {
        type: "answer",
        text: `<span>text</span><span>text</span><span>text</span>`,
      },
    ],
  },
  {
    id: "html-tags-box-model-task",
    title: "Визначення блочної моделі HTML тегів",
    description:
      "Практикуємо визначати, до якої моделі відображення належать різні HTML-елементи: блочні або рядкові.",
    content: [
      {
        type: "heading",
        text: "Визначення блочної моделі HTML тегів",
      },
      {
        type: "paragraph",
        text: "У HTML елементи поділяються на блочні та рядкові. Блочні елементи займають новий рядок, а рядкові розташовуються в одному рядку з іншими елементами.",
      },
      {
        type: "list",
        items: [
          "Блочні елементи: p, h1-h6, div, section та інші.",
          "Рядкові елементи: b, i, a, span та інші.",
        ],
      },
      {
        type: "task",
        text: [
          "№1. Визначте, до якої моделі відноситься тег p.",
          "№2. Визначте, до якої моделі відноситься тег b.",
          "№3. Визначте, до якої моделі відноситься тег h2.",
          "№4. Визначте, до якої моделі відноситься тег h3.",
          "№5. Визначте, до якої моделі відноситься тег i.",
          "№6. Визначте, до якої моделі відноситься тег a.",
        ],
      },
      {
        type: "hint",
        text: "Подумайте, чи починає тег новий рядок, чи може розташовуватися поруч з іншими елементами.",
      },
      {
        type: "answer",
        text: `№1. p — блочний елемент.

№2. b — рядковий елемент.

№3. h2 — блочний елемент.

№4. h3 — блочний елемент.

№5. i — рядковий елемент.

№6. a — рядковий елемент.`,
      },
      {
        type: "note",
        text: "За замовчуванням ці правила задаються браузером. За допомогою CSS властивості display можна змінити поведінку будь-якого елемента.",
      },
    ],
  },
  {
    id: "display-block-inline-css",
    title: "Робота з властивістю display у CSS",
    description:
      "Вивчаємо властивість display, яка дозволяє змінювати тип відображення HTML-елементів: робити їх блочними або рядковими.",
    content: [
      {
        type: "heading",
        text: "Робота з властивістю display у CSS",
      },
      {
        type: "paragraph",
        text: "Кожен HTML-тег має свій стандартний тип відображення: блочний або рядковий.",
      },
      {
        type: "paragraph",
        text: "За допомогою властивості display можна змінити поведінку елемента. Значення block робить елемент блочним, а значення inline — рядковим.",
      },
      {
        type: "list",
        items: [
          "display: block — елемент починається з нового рядка та займає доступну ширину.",
          "display: inline — елемент розташовується в одному рядку з іншими елементами.",
        ],
      },
      {
        type: "example",
        title: "Перетворення span у блочний елемент",
        text: "За замовчуванням span є рядковим елементом. За допомогою display: block він починає поводитися як блок.",
      },
      {
        type: "code",
        language: "html",
        code: `<span>text</span>
<span>text</span>
<span>text</span>`,
      },
      {
        type: "code",
        language: "css",
        code: `span {
  display: block;
  width: 100px;
  height: 100px;
  border: 1px solid red;
  margin-bottom: 20px;
}`,
      },
      {
        type: "example",
        title: "Результат виконання коду",
        text: "Елементи span будуть розташовані один під одним, як звичайні блочні елементи.",
      },
      {
        type: "note",
        text: "Після зміни display елемент зберігає свій HTML-тег, але змінює поведінку у верстці.",
      },
      {
        type: "task",
        text: [
          "№1. У HTML-коді є кілька абзаців p. Зробіть так, щоб вони поводилися як рядкові елементи.",
          "№2. У HTML-коді є кілька посилань a. Зробіть так, щоб вони поводилися як блочні елементи. Додайте їм границю, ширину та висоту.",
        ],
      },

      {
        type: "example",
        title: "Приклад перетворення p у рядковий елемент",
        text: "Абзаци p за замовчуванням є блочними, але їх можна зробити рядковими.",
      },
      {
        type: "code",
        language: "css",
        code: `p {
  display: inline;
}`,
      },
      {
        type: "example",
        title: "Приклад перетворення посилань у блочні елементи",
        text: "Посилання a за замовчуванням є рядковими, але їх можна зробити блоками.",
      },
      {
        type: "code",
        language: "css",
        code: `a {
  display: block;
  width: 100px;
  height: 50px;
  border: 1px solid red;
}`,
      },
      {
        type: "hint",
        text: "Для зміни поведінки елементів використовуйте display: inline або display: block.",
      },
      {
        type: "answer",
        text: `/* №1 */
p {
  display: inline;
}

/* №2 */
a {
  display: block;
  width: 100px;
  height: 50px;
  border: 1px solid red;
}`,
      },
    ],
  },
  {
    id: "inline-block-width-height-css",
    title: "Ширина і висота рядково-блочного елемента в CSS",
    description:
      "Вивчаємо особливості елементів із display: inline-block та можливість задавати їм ширину і висоту.",
    content: [
      {
        type: "heading",
        text: "Ширина і висота рядково-блочного елемента в CSS",
      },
      {
        type: "paragraph",
        text: "Рядково-блочний елемент поєднує властивості блочних і рядкових елементів.",
      },
      {
        type: "paragraph",
        text: "На відміну від звичайних рядкових елементів, йому можна задавати ширину та висоту.",
      },
      {
        type: "paragraph",
        text: "При цьому такі елементи можуть розташовуватися в одному рядку, як рядкові елементи.",
      },
      {
        type: "example",
        title: "Створення рядково-блочного елемента",
        text: "За замовчуванням span є рядковим елементом, але display: inline-block дозволяє керувати його розмірами.",
      },
      {
        type: "code",
        language: "html",
        code: `<span>text</span>`,
      },
      {
        type: "code",
        language: "css",
        code: `span {
  width: 100px;
  height: 100px;
  border: 1px solid red;
  display: inline-block;
}`,
      },
      {
        type: "example",
        title: "Результат виконання коду",
        text: "Елемент span отримає ширину 100px і висоту 100px, але залишиться в одному рядку з іншими inline-block елементами.",
      },
      {
        type: "note",
        text: "display: inline-block часто використовують для створення кнопок, карток, пунктів меню та інших елементів, яким потрібні розміри та розташування в ряд.",
      },
      {
        type: "list",
        items: [
          "inline — елемент у рядку, але width і height не працюють.",
          "block — елемент починається з нового рядка, width і height працюють.",
          "inline-block — елемент у рядку, width і height працюють.",
        ],
      },
      {
        type: "example",
        title: "Порівняння display",
        text: `display: inline;
→ неможливо задати ширину і висоту

display: block;
→ новий рядок + можна задати розміри

display: inline-block;
→ один рядок + можна задати розміри`,
      },
      {
        type: "task",
        text: [
          "№1. Створіть кілька елементів span.",
          "№2. Додайте їм display: inline-block.",
          "№3. Встановіть width і height.",
          "№4. Порівняйте результат із display: inline.",
        ],
      },
      {
        type: "hint",
        text: "Якщо потрібно зробити елемент у рядку, але керувати його розмірами — використовуйте inline-block.",
      },
      {
        type: "answer",
        text: `span {
  width: 100px;
  height: 100px;
  border: 1px solid red;
  display: inline-block;
}`,
      },
    ],
  },
  {
    id: "inline-block-width-auto-css",
    title: "Ширина рядково-блочного елемента в CSS",
    description:
      "Вивчаємо, як формується ширина елемента з display: inline-block, якщо властивість width не задана.",
    content: [
      {
        type: "heading",
        text: "Ширина рядково-блочного елемента в CSS",
      },
      {
        type: "paragraph",
        text: "Якщо у рядково-блочного елемента не вказати властивість width, його ширина буде визначатися вмістом.",
      },
      {
        type: "paragraph",
        text: "Така поведінка схожа на звичайні рядкові елементи: блок займає тільки необхідний простір для тексту.",
      },
      {
        type: "example",
        title: "Рядково-блочний елемент без width",
        text: "Елемент span має задану висоту, але ширина автоматично формується за розміром тексту.",
      },
      {
        type: "code",
        language: "html",
        code: `<span>text</span>`,
      },
      {
        type: "code",
        language: "css",
        code: `span {
  height: 100px;
  border: 1px solid red;
  display: inline-block;
}`,
      },
      {
        type: "example",
        title: "Результат виконання коду",
        text: "Елемент span матиме висоту 100px, а його ширина буде дорівнювати ширині тексту.",
      },
      {
        type: "note",
        text: "Для inline-block елементів властивості width і height працюють. Якщо width не задано, ширина визначається вмістом.",
      },
      {
        type: "list",
        items: [
          "inline-block дозволяє задавати width і height.",
          "Без width ширина залежить від вмісту.",
          "Без height висота залежить від вмісту.",
          "Елемент може розташовуватися в одному рядку з іншими inline-block елементами.",
        ],
      },
      {
        type: "example",
        title: "Порівняння ширини",
        text: `span {
  display: inline;
}
→ ширина тільки за текстом

span {
  display: inline-block;
}
→ ширину можна задати, але без width вона теж залежить від тексту`,
      },
      {
        type: "task",
        text: [
          "№1. Створіть елемент span з display: inline-block.",
          "№2. Задайте йому height, але не задавайте width.",
          "№3. Змініть текст усередині та подивіться, як змінюється ширина.",
          "№4. Додайте width і порівняйте результат.",
        ],
      },
      {
        type: "hint",
        text: "Спробуйте змінити кількість тексту всередині елемента та спостерігайте за зміною ширини.",
      },
      {
        type: "answer",
        text: `span {
  height: 100px;
  border: 1px solid red;
  display: inline-block;
}`,
      },
    ],
  },
  {
    id: "inline-block-height-auto-css",
    title: "Висота рядково-блочного елемента в CSS",
    description:
      "Вивчаємо, як формується висота елемента з display: inline-block, якщо властивість height не задана.",
    content: [
      {
        type: "heading",
        text: "Висота рядково-блочного елемента в CSS",
      },
      {
        type: "paragraph",
        text: "Якщо у рядково-блочного елемента не вказати властивість height, його висота буде визначатися вмістом.",
      },
      {
        type: "paragraph",
        text: "Така поведінка схожа на рядкові елементи: елемент займає тільки необхідну висоту для свого вмісту.",
      },
      {
        type: "example",
        title: "Рядково-блочний елемент без height",
        text: "Елемент span має задану ширину, але висота автоматично формується за висотою тексту.",
      },
      {
        type: "code",
        language: "html",
        code: `<span>text</span>`,
      },
      {
        type: "code",
        language: "css",
        code: `span {
  width: 100px;
  border: 1px solid red;
  display: inline-block;
}`,
      },
      {
        type: "example",
        title: "Результат виконання коду",
        text: "Елемент span матиме ширину 100px, а його висота буде залежати від тексту всередині.",
      },
      {
        type: "note",
        text: "Для inline-block елементів можна задавати width і height. Якщо height не задано, висота формується вмістом.",
      },
      {
        type: "list",
        items: [
          "inline-block дозволяє керувати розмірами елемента.",
          "Без height висота залежить від вмісту.",
          "Без width ширина залежить від вмісту.",
          "За допомогою width і height можна створити елемент заданого розміру.",
        ],
      },
      {
        type: "example",
        title: "Порівняння висоти елементів",
        text: `span {
  display: inline;
}
→ висота залежить від тексту

span {
  display: inline-block;
}
→ висоту можна задати через height`,
      },
      {
        type: "task",
        text: [
          "№1. Створіть елемент span з display: inline-block.",
          "№2. Додайте йому width, але не задавайте height.",
          "№3. Змініть кількість тексту всередині та перевірте зміну висоти.",
          "№4. Додайте height і порівняйте результат.",
        ],
      },
      {
        type: "hint",
        text: "Якщо у елемента немає заданої висоти, браузер розраховує її за вмістом.",
      },
      {
        type: "answer",
        text: `span {
  width: 100px;
  border: 1px solid red;
  display: inline-block;
}`,
      },
    ],
  },
  {
    id: "inline-block-elements-row-css",
    title: "Кілька рядково-блочних елементів поруч у CSS",
    description:
      "Вивчаємо, як розташувати кілька елементів в один ряд за допомогою display: inline-block.",
    content: [
      {
        type: "heading",
        text: "Кілька рядково-блочних елементів поруч у CSS",
      },
      {
        type: "paragraph",
        text: "Рядково-блочні елементи поєднують властивості рядкових і блочних елементів.",
      },
      {
        type: "paragraph",
        text: "Вони можуть розташовуватися в одному рядку, як рядкові елементи, але при цьому для них працюють width і height, як у блочних.",
      },
      {
        type: "example",
        title: "Кілька елементів span в один ряд",
        text: "За допомогою display: inline-block елементи span розташовуються поруч і мають задані розміри.",
      },
      {
        type: "code",
        language: "html",
        code: `<span>text</span>
<span>text</span>
<span>text</span>`,
      },
      {
        type: "code",
        language: "css",
        code: `span {
  width: 100px;
  height: 100px;
  margin-bottom: 20px;
  border: 1px solid red;
  display: inline-block;
}`,
      },
      {
        type: "example",
        title: "Результат виконання коду",
        text: "Елементи span будуть розташовані в один ряд, кожен матиме ширину 100px і висоту 100px.",
      },
      {
        type: "list",
        items: [
          "display: block → елементи розташовуються один під одним.",
          "display: inline → елементи в рядку, але без width і height.",
          "display: inline-block → елементи в рядку з можливістю задавати розміри.",
        ],
      },
      {
        type: "note",
        text: "display: inline-block часто використовують для створення карток, кнопок, пунктів меню та інших елементів, які повинні бути в рядку і мати розміри.",
      },
      {
        type: "task",
        text: [
          "№1. Дані блоки div:",
          '<div class="elem">text</div>',
          '<div class="elem">text</div>',
          '<div class="elem">text</div>',
          "Перетворіть їх у рядково-блочні елементи, щоб вони розташувалися в один ряд.",
        ],
      },
      {
        type: "code",
        language: "css",
        code: `div {
  width: 100px;
  height: 100px;
  border: 1px solid red;
}`,
      },
      {
        type: "hint",
        text: "Додайте властивість display: inline-block до блочних елементів.",
      },
      {
        type: "answer",
        text: `div {
  width: 100px;
  height: 100px;
  border: 1px solid red;
  display: inline-block;
}`,
      },
    ],
  },
  {
    id: "block-elements-center-css",
    title: "Вирівнювання блочних елементів у CSS",
    description:
      "Вивчаємо, як за допомогою margin: auto центрувати блочні елементи по горизонталі.",
    content: [
      {
        type: "heading",
        text: "Вирівнювання блочних елементів у CSS",
      },
      {
        type: "paragraph",
        text: "Властивість margin використовується не тільки для створення відступів, а й для вирівнювання блочних елементів по центру.",
      },
      {
        type: "paragraph",
        text: "Щоб розмістити блочний елемент по центру горизонтально, потрібно задати лівий і правий відступи значенням auto.",
      },
      {
        type: "example",
        title: "Центрування блочного елемента",
        text: "Внутрішній блок буде розташований по центру батьківського елемента.",
      },
      {
        type: "code",
        language: "html",
        code: `<div class="parent">
  <div class="child"></div>
</div>`,
      },
      {
        type: "code",
        language: "css",
        code: `.parent {
  border: 1px solid red;
}

.child {
  height: 100px;
  width: 200px;
  border: 1px solid green;
  margin: 10px auto;
}`,
      },
      {
        type: "example",
        title: "Результат виконання коду",
        text: "Блок .child буде вирівняний по центру батьківського блоку по горизонталі.",
      },
      {
        type: "note",
        text: "За допомогою margin: auto можна центрувати тільки блочні елементи, тільки по горизонталі та тільки якщо їм задана ширина.",
      },
      {
        type: "list",
        items: [
          "margin: 10px auto — верхній і нижній відступ 10px, лівий і правий автоматичні.",
          "auto розподіляє вільний простір порівну між лівою і правою сторонами.",
          "Для центрування елемент повинен мати задану ширину.",
        ],
      },
      {
        type: "heading",
        text: "Різні верхній і нижній відступи",
      },
      {
        type: "paragraph",
        text: "Якщо потрібно задати різні верхній і нижній відступи, можна використовувати чотири значення margin.",
      },
      {
        type: "code",
        language: "css",
        code: `.child {
  margin: 30px auto 10px auto;
}`,
      },
      {
        type: "paragraph",
        text: "Також можна скоротити запис до трьох значень.",
      },
      {
        type: "code",
        language: "css",
        code: `.child {
  margin: 30px auto 10px;
}`,
      },
      {
        type: "example",
        title: "Правило трьох значень margin",
        text: "Перше значення — верхній відступ, друге — лівий і правий відступ, третє — нижній відступ.",
      },
      {
        type: "task",
        text: [
          "№1. Створіть батьківський блок і внутрішній блок.",
          "№2. Задайте внутрішньому блоку ширину.",
          "№3. Вирівняйте його по центру за допомогою margin: auto.",
          "№4. Змініть верхній і нижній відступи.",
        ],
      },
      {
        type: "hint",
        text: "Якщо margin: auto не працює, перевірте, чи має елемент задану ширину і чи є він блочним.",
      },
      {
        type: "answer",
        text: `.child {
  width: 200px;
  margin: 10px auto;
}`,
      },
    ],
  },
  {
    id: "block-element-margin-left-auto-css",
    title: "Вирівнювання блочного елемента з відступом зліва в CSS",
    description:
      "Вивчаємо, як значення auto у margin-left дозволяє розташувати блочний елемент праворуч.",
    content: [
      {
        type: "heading",
        text: "Вирівнювання блочного елемента з відступом зліва в CSS",
      },
      {
        type: "paragraph",
        text: "Значення auto у властивості margin не тільки центрує елементи, а й дозволяє браузеру автоматично розрахувати вільний простір.",
      },
      {
        type: "paragraph",
        text: "Коли для лівого і правого відступу встановлено auto, елемент вирівнюється по центру.",
      },
      {
        type: "paragraph",
        text: "Якщо встановити тільки margin-left: auto, весь вільний простір буде додано зліва, і елемент переміститься до правого краю.",
      },
      {
        type: "example",
        title: "Автоматичний лівий відступ",
        text: "Блок .child отримає максимально можливий відступ зліва та буде розташований праворуч у батьківському елементі.",
      },
      {
        type: "code",
        language: "html",
        code: `<div class="parent">
  <div class="child"></div>
</div>`,
      },
      {
        type: "code",
        language: "css",
        code: `.parent {
  padding: 10px 0;
  border: 1px solid red;
}

.child {
  margin-left: auto;
  height: 100px;
  width: 200px;
  border: 1px solid green;
}`,
      },
      {
        type: "example",
        title: "Результат виконання коду",
        text: "Блок .child буде притиснутий до правого краю батьківського блоку.",
      },
      {
        type: "note",
        text: "margin-left: auto працює для блочних елементів із заданою шириною.",
      },
      {
        type: "list",
        items: [
          "margin: 0 auto — центрує блочний елемент по горизонталі.",
          "margin-left: auto — переміщує елемент праворуч.",
          "margin-right: auto — переміщує елемент ліворуч.",
          "auto займає весь доступний вільний простір.",
        ],
      },
      {
        type: "example",
        title: "Приклад вирівнювання праворуч",
        text: `Схема:

[вільний простір] [елемент]

margin-left: auto → весь вільний простір зліва`,
      },
      {
        type: "task",
        text: [
          "№1. Створіть батьківський блок з границею.",
          "№2. Додайте внутрішній блок із шириною 200px.",
          "№3. Використайте margin-left: auto.",
          "№4. Замініть його на margin-right: auto та порівняйте результат.",
        ],
      },
      {
        type: "hint",
        text: "Значення auto забирає весь доступний вільний простір із заданого боку.",
      },
      {
        type: "answer",
        text: `.child {
  margin-left: auto;
  height: 100px;
  width: 200px;
  border: 1px solid green;
}`,
      },
    ],
  },
  {
    id: "block-element-margin-right-auto-css",
    title: "Вирівнювання блочного елемента з відступом справа в CSS",
    description:
      "Вивчаємо, як поєднання margin-left: auto та margin-right дозволяє розташувати блочний елемент із заданим правим відступом.",
    content: [
      {
        type: "heading",
        text: "Вирівнювання блочного елемента з відступом справа в CSS",
      },
      {
        type: "paragraph",
        text: "Значення auto для margin дозволяє браузеру автоматично розподілити вільний простір.",
      },
      {
        type: "paragraph",
        text: "Якщо задати margin-left: auto, елемент переміститься праворуч. Додавши margin-right із конкретним значенням, можна створити відступ від правого краю.",
      },
      {
        type: "example",
        title: "Блок із правим відступом",
        text: "Елемент .child буде розташований праворуч, але не торкатиметься правої межі батьківського блоку.",
      },
      {
        type: "code",
        language: "html",
        code: `<div class="parent">
  <div class="child"></div>
</div>`,
      },
      {
        type: "code",
        language: "css",
        code: `.parent {
  padding: 10px 0;
  border: 1px solid red;
}

.child {
  margin-left: auto;
  margin-right: 20px;
  height: 100px;
  width: 200px;
  border: 1px solid green;
}`,
      },
      {
        type: "example",
        title: "Результат виконання коду",
        text: "Блок .child буде вирівняний праворуч і матиме відступ 20px від правого краю батьківського елемента.",
      },
      {
        type: "note",
        text: "Щоб margin-left: auto працював, елемент повинен бути блочним і мати задану ширину.",
      },
      {
        type: "list",
        items: [
          "margin-left: auto — займає весь вільний простір зліва.",
          "margin-right: 20px — створює фіксований відступ справа.",
          "Елемент притискається до правої сторони з урахуванням заданого відступу.",
          "Такий спосіб часто використовують для вирівнювання блоків у макетах.",
        ],
      },
      {
        type: "example",
        title: "Різниця між варіантами",
        text: `margin: 0 auto;
→ елемент по центру

margin-left: auto;
→ елемент праворуч

margin-left: auto;
margin-right: 20px;
→ елемент праворуч із відступом`,
      },
      {
        type: "task",
        text: [
          "№1. Створіть батьківський блок із границею.",
          "№2. Додайте дочірній блок шириною 200px.",
          "№3. Вирівняйте його праворуч за допомогою margin-left: auto.",
          "№4. Додайте правий відступ 20px.",
        ],
      },
      {
        type: "hint",
        text: "Спробуйте змінити значення margin-right і подивіться, як змінюється положення елемента.",
      },
      {
        type: "answer",
        text: `.child {
  margin-left: auto;
  margin-right: 20px;
  height: 100px;
  width: 200px;
  border: 1px solid green;
}`,
      },
    ],
  },
  {
    id: "inline-elements-center-css",
    title: "Центрування рядкових елементів у CSS",
    description:
      "Вивчаємо, як вирівнювати рядкові елементи по центру за допомогою властивості text-align.",
    content: [
      {
        type: "heading",
        text: "Центрування рядкових елементів у CSS",
      },
      {
        type: "paragraph",
        text: "Рядкові елементи не можна центрувати за допомогою margin: auto, оскільки вони не мають власної ширини.",
      },
      {
        type: "paragraph",
        text: "Для вирівнювання рядкових елементів по горизонталі використовується властивість text-align у батьківського елемента.",
      },
      {
        type: "example",
        title: "Центрування рядкового елемента",
        text: "Елемент span буде розташований по центру батьківського блоку.",
      },
      {
        type: "code",
        language: "html",
        code: `<div class="parent">
  <span class="child">text</span>
</div>`,
      },
      {
        type: "code",
        language: "css",
        code: `.parent {
  text-align: center;
  padding: 10px 0;
  border: 1px solid red;
}

.child {
  border: 1px solid green;
}`,
      },
      {
        type: "example",
        title: "Результат виконання коду",
        text: "Текстовий елемент span буде вирівняний по центру всередині батьківського блоку.",
      },
      {
        type: "note",
        text: "Властивість text-align застосовується до батьківського елемента і впливає на його рядкових дочірніх елементів.",
      },
      {
        type: "list",
        items: [
          "text-align: center — вирівнює рядкові елементи по центру.",
          "text-align: left — вирівнювання ліворуч (значення за замовчуванням).",
          "text-align: right — вирівнювання праворуч.",
          "Властивість працює для тексту та рядкових елементів.",
        ],
      },
      {
        type: "example",
        title: "Порівняння способів вирівнювання",
        text: `Блочний елемент:
margin: 0 auto;
→ центр по горизонталі

Рядковий елемент:
text-align: center;
→ центр у батьківському елементі`,
      },
      {
        type: "task",
        text: [
          "№1. Створіть div з елементом span всередині.",
          "№2. Додайте границю для обох елементів.",
          "№3. Вирівняйте span по центру через text-align.",
          "№4. Спробуйте значення left і right.",
        ],
      },
      {
        type: "hint",
        text: "text-align задається батьківському елементу, а не самому рядковому елементу.",
      },
      {
        type: "answer",
        text: `.parent {
  text-align: center;
}`,
      },
    ],
  },
  {
    id: "multiple-inline-elements-center-css",
    title: "Центрування кількох рядкових елементів у CSS",
    description:
      "Вивчаємо, як вирівнювати кілька рядкових елементів по центру за допомогою text-align.",
    content: [
      {
        type: "heading",
        text: "Центрування кількох рядкових елементів",
      },
      {
        type: "paragraph",
        text: "Властивість text-align: center працює не тільки для одного рядкового елемента, а й для кількох елементів одночасно.",
      },
      {
        type: "paragraph",
        text: "Достатньо задати text-align: center батьківському елементу, і всі рядкові дочірні елементи будуть вирівняні по центру.",
      },
      {
        type: "example",
        title: "Кілька рядкових елементів по центру",
        text: "Усі елементи span будуть розташовані в центрі батьківського блоку.",
      },
      {
        type: "code",
        language: "html",
        code: `<div class="parent">
  <span class="child">text</span>
  <span class="child">text</span>
  <span class="child">text</span>
</div>`,
      },
      {
        type: "code",
        language: "css",
        code: `.parent {
  text-align: center;
  padding: 10px 0;
  border: 1px solid red;
}

.child {
  border: 1px solid green;
}`,
      },
      {
        type: "example",
        title: "Результат виконання коду",
        text: "Три елементи span будуть розташовані по центру в одному рядку.",
      },
      {
        type: "note",
        text: "text-align впливає на всі рядкові елементи всередині батьківського блоку.",
      },
      {
        type: "list",
        items: [
          "text-align: center — центрує всі рядкові елементи всередині блока.",
          "Працює для тексту, span, a та інших рядкових елементів.",
          "Не потрібно задавати стилі кожному елементу окремо.",
        ],
      },
      {
        type: "heading",
        text: "Практичне завдання",
      },
      {
        type: "task",
        text: [
          "Дано div з посиланнями:",
          '<a href="">посилання 1</a>',
          '<a href="">посилання 2</a>',
          '<a href="">посилання 3</a>',
          "Розташуйте посилання по центру цього div.",
        ],
      },
      {
        type: "code",
        language: "html",
        code: `<div class="parent">
  <a href="">посилання 1</a>
  <a href="">посилання 2</a>
  <a href="">посилання 3</a>
</div>`,
      },
      {
        type: "code",
        language: "css",
        code: `.parent {
  padding: 10px 0;
  border: 1px solid red;
}`,
      },
      {
        type: "hint",
        text: "Додайте text-align: center до батьківського елемента.",
      },
      {
        type: "answer",
        text: `.parent {
  padding: 10px 0;
  border: 1px solid red;
  text-align: center;
}`,
      },
    ],
  },
  {
    id: "inline-elements-right-css",
    title: "Вирівнювання рядкових елементів по правому краю в CSS",
    description:
      "Вивчаємо, як вирівнювати рядкові елементи праворуч за допомогою властивості text-align.",
    content: [
      {
        type: "heading",
        text: "Вирівнювання рядкових елементів по правому краю в CSS",
      },
      {
        type: "paragraph",
        text: "Для вирівнювання рядкових елементів по правому краю використовується властивість text-align зі значенням right.",
      },
      {
        type: "paragraph",
        text: "Як і при центруванні, властивість text-align потрібно задавати батьківському елементу.",
      },
      {
        type: "example",
        title: "Вирівнювання рядкового елемента праворуч",
        text: "Елемент span буде розташований біля правого краю батьківського блока.",
      },
      {
        type: "code",
        language: "html",
        code: `<div class="parent">
  <span class="child">text</span>
</div>`,
      },
      {
        type: "code",
        language: "css",
        code: `.parent {
  text-align: right;
  padding: 10px 0;
  border: 1px solid red;
}

.child {
  border: 1px solid green;
}`,
      },
      {
        type: "example",
        title: "Результат виконання коду",
        text: "Елемент span буде вирівняний по правому краю батьківського блоку.",
      },
      {
        type: "note",
        text: "text-align: right вирівнює текст і всі рядкові елементи всередині батьківського елемента.",
      },
      {
        type: "list",
        items: [
          "text-align: left — вирівнювання ліворуч.",
          "text-align: center — вирівнювання по центру.",
          "text-align: right — вирівнювання праворуч.",
          "Властивість задається батьківському елементу.",
        ],
      },
      {
        type: "heading",
        text: "Практичні завдання",
      },
      {
        type: "task",
        text: [
          "№1. Дан div із посиланням:",
          '<a href="">посилання</a>',
          "Розташуйте це посилання по правому краю div.",
        ],
      },
      {
        type: "code",
        language: "html",
        code: `<div class="parent">
  <a href="">посилання</a>
</div>`,
      },
      {
        type: "code",
        language: "css",
        code: `.parent {
  padding: 10px 0;
  border: 1px solid red;
}`,
      },
      {
        type: "hint",
        text: "Додайте text-align: right до батьківського елемента.",
      },
      {
        type: "answer",
        text: `.parent {
  padding: 10px 0;
  border: 1px solid red;
  text-align: right;
}`,
      },
      {
        type: "task",
        text: [
          "№2. Змініть попередню задачу так, щоб посилання не притискалося до правого краю.",
          "Додайте батьківському елементу правий padding.",
        ],
      },
      {
        type: "code",
        language: "css",
        code: `.parent {
  padding: 10px 20px 10px 0;
  border: 1px solid red;
  text-align: right;
}`,
      },
      {
        type: "note",
        text: "Padding створює внутрішній відступ і дозволяє залишити простір між елементом та межею батьківського блока.",
      },
    ],
  },
  {
    id: "inline-block-center-css",
    title: "Центрування рядково-блочних елементів у CSS",
    description:
      "Вивчаємо, як вирівнювати рядково-блочні елементи по центру за допомогою text-align.",
    content: [
      {
        type: "heading",
        text: "Центрування рядково-блочних елементів у CSS",
      },
      {
        type: "paragraph",
        text: "Рядково-блочні елементи поєднують властивості рядкових і блочних елементів.",
      },
      {
        type: "paragraph",
        text: "Вони можуть розташовуватися в одному рядку, як рядкові елементи, і при цьому підтримують width, height, padding та margin.",
      },
      {
        type: "paragraph",
        text: "Для центрування рядково-блочних елементів використовується text-align: center у батьківського елемента.",
      },
      {
        type: "example",
        title: "Центрування рядково-блочних елементів",
        text: "Кілька елементів span будуть розташовані по центру батьківського блока.",
      },
      {
        type: "code",
        language: "html",
        code: `<div class="parent">
  <span class="child">text</span>
  <span class="child">text</span>
  <span class="child">text</span>
</div>`,
      },
      {
        type: "code",
        language: "css",
        code: `.parent {
  text-align: center;
  padding: 10px 0;
  border: 1px solid red;
}

.child {
  display: inline-block;
  padding: 10px 20px;
  border: 1px solid green;
}`,
      },
      {
        type: "example",
        title: "Результат виконання коду",
        text: "Елементи span будуть розташовані в один ряд і вирівняні по центру.",
      },
      {
        type: "note",
        text: "text-align працює не тільки з текстом, а й з рядковими та рядково-блочними елементами.",
      },
      {
        type: "list",
        items: [
          "display: inline-block дозволяє задавати розміри елементу.",
          "text-align: center центрує рядково-блочні елементи всередині батька.",
          "margin між inline-block елементами можна задавати для створення відступів.",
        ],
      },
      {
        type: "heading",
        text: "Практичне завдання",
      },
      {
        type: "task",
        text: [
          "№1. Дані div-елементи всередині батьківського блока:",
          '<div class="child">text 1</div>',
          '<div class="child">text 2</div>',
          '<div class="child">text 3</div>',
          "Перетворіть дочірні div у рядково-блочні елементи.",
          "Додайте їм горизонтальний margin 5px.",
          "Відцентруйте їх по горизонталі відносно батьківського елемента.",
        ],
      },
      {
        type: "code",
        language: "html",
        code: `<div class="parent">
  <div class="child">text 1</div>
  <div class="child">text 2</div>
  <div class="child">text 3</div>
</div>`,
      },
      {
        type: "code",
        language: "css",
        code: `.parent {
  padding: 10px 0;
  border: 1px solid red;
}

.child {
  padding: 10px;
  border: 1px solid green;
}`,
      },
      {
        type: "hint",
        text: "Додайте дочірнім елементам display: inline-block і margin: 0 5px. Для батьківського елемента використайте text-align: center.",
      },
      {
        type: "answer",
        text: `.parent {
  padding: 10px 0;
  border: 1px solid red;
  text-align: center;
}

.child {
  display: inline-block;
  padding: 10px;
  margin: 0 5px;
  border: 1px solid green;
}`,
      },
    ],
  },
  {
    id: "inline-block-right-css",
    title: "Вирівнювання рядково-блочних елементів по правому краю в CSS",
    description:
      "Вивчаємо, як вирівнювати рядково-блочні елементи по правому краю за допомогою text-align: right.",
    content: [
      {
        type: "heading",
        text: "Вирівнювання рядково-блочних елементів по правому краю в CSS",
      },
      {
        type: "paragraph",
        text: "Рядково-блочні елементи можна вирівнювати так само, як і звичайні рядкові елементи.",
      },
      {
        type: "paragraph",
        text: "Для вирівнювання по правому краю потрібно задати батьківському елементу властивість text-align зі значенням right.",
      },
      {
        type: "example",
        title: "Вирівнювання inline-block елемента праворуч",
        text: "Елемент span буде розташований біля правого краю батьківського блока.",
      },
      {
        type: "code",
        language: "html",
        code: `<div class="parent">
  <span class="child">text</span>
</div>`,
      },
      {
        type: "code",
        language: "css",
        code: `.parent {
  text-align: right;
  padding: 10px 0;
  border: 1px solid red;
}

.child {
  display: inline-block;
  padding: 10px 20px;
  border: 1px solid green;
}`,
      },
      {
        type: "example",
        title: "Результат виконання коду",
        text: "Елемент span буде вирівняний по правому краю батьківського блока.",
      },
      {
        type: "note",
        text: "text-align впливає на розташування inline та inline-block елементів усередині батьківського елемента.",
      },
      {
        type: "list",
        items: [
          "display: inline-block дозволяє задати розміри елементу.",
          "text-align: right вирівнює елемент по правому краю.",
          "Відступи можна додавати через padding батька або margin дочірнього елемента.",
        ],
      },
      {
        type: "heading",
        text: "Практичні завдання",
      },
      {
        type: "task",
        text: [
          "№1. Дан div усередині батьківського елемента:",
          '<div class="child">text</div>',
          "Перетворіть дочірній div у рядково-блочний елемент і вирівняйте його по правому краю батька.",
        ],
      },
      {
        type: "hint",
        text: "Використайте display: inline-block для дочірнього елемента та text-align: right для батьківського.",
      },
      {
        type: "answer",
        text: `.parent {
  padding: 10px 0;
  border: 1px solid red;
  text-align: right;
}

.child {
  display: inline-block;
  padding: 10px;
  border: 1px solid green;
}`,
      },
      {
        type: "task",
        text: [
          "№2. Зробіть так, щоб елемент не притискався до правого краю.",
          "Додайте правий padding батьківському елементу.",
        ],
      },
      {
        type: "code",
        language: "css",
        code: `.parent {
  padding: 10px 20px 10px 0;
  text-align: right;
}`,
      },
      {
        type: "task",
        text: [
          "№3. Змініть попередню задачу.",
          "Додайте правий margin дочірньому елементу замість padding батька.",
        ],
      },
      {
        type: "code",
        language: "css",
        code: `.child {
  display: inline-block;
  margin-right: 20px;
}`,
      },
      {
        type: "task",
        text: [
          "№4. Данo посилання всередині батьківського елемента:",
          '<a href="" class="child">text</a>',
          "Перетворіть посилання у рядково-блочний елемент і вирівняйте його по правому краю.",
        ],
      },
      {
        type: "hint",
        text: "Посилання за замовчуванням є рядковим елементом, тому для width і padding краще використати inline-block.",
      },
      {
        type: "answer",
        text: `.parent {
  text-align: right;
}

.child {
  display: inline-block;
  width: 100px;
  padding: 10px;
  border: 1px solid green;
}`,
      },
      {
        type: "task",
        text: [
          "№5. Змініть попередню задачу так, щоб текст усередині посилання був вирівняний по центру.",
        ],
      },
      {
        type: "answer",
        text: `.child {
  display: inline-block;
  width: 100px;
  padding: 10px;
  border: 1px solid green;
  text-align: center;
}`,
      },
    ],
  },
  {
    id: "flex-elements-css",
    title: "Флекс-елементи в CSS",
    description:
      "Вивчаємо нову модель розташування елементів — flex, яка дозволяє легко створювати рядкові макети.",
    content: [
      {
        type: "heading",
        text: "Флекс-елементи в CSS",
      },
      {
        type: "paragraph",
        text: "Окрім блочних, рядкових і рядково-блочних елементів у CSS існує ще одна модель — flex-елементи.",
      },
      {
        type: "paragraph",
        text: "Щоб зробити дочірні елементи flex-елементами, потрібно батьківському елементу задати display: flex.",
      },
      {
        type: "paragraph",
        text: "Сам батьківський елемент залишиться блочним, а всі його прямі дочірні елементи стануть flex-елементами.",
      },
      {
        type: "example",
        title: "Створення flex-елементів",
        text: "Після додавання display: flex дочірні блоки автоматично розташуються в один ряд.",
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
        text: "Три дочірні блоки будуть розташовані в один ряд усередині батьківського елемента.",
      },
      {
        type: "note",
        text: "За замовчуванням flex-елементи розташовуються горизонтально зліва направо.",
      },
      {
        type: "list",
        items: [
          "display: flex задається батьківському елементу.",
          "Дочірні елементи автоматично стають flex-елементами.",
          "Flex-елементи підтримують width, height, margin і padding.",
          "За замовчуванням елементи розташовуються в один ряд.",
        ],
      },
      {
        type: "example",
        title: "Порівняння моделей",
        text: `block:
елементи один під одним

inline:
елементи в рядку без width і height

inline-block:
елементи в рядку з розмірами

flex:
елементи в рядку з можливістю зручного керування розташуванням`,
      },
      {
        type: "task",
        text: [
          "№1. Створіть батьківський div із трьома дочірніми блоками.",
          "№2. Додайте батьківському елементу display: flex.",
          "№3. Задайте дочірнім елементам ширину та висоту.",
          "№4. Перевірте, як зміниться розташування блоків.",
        ],
      },
      {
        type: "hint",
        text: "Спробуйте прибрати display: flex і порівняйте результат. Ви побачите, що звичайні блоки розташовуються один під одним.",
      },
      {
        type: "answer",
        text: `.parent {
  display: flex;
}

.child {
  width: 50px;
  height: 50px;
}`,
      },
    ],
  },
  {
    id: "flex-parent-height-css",
    title: "Висота батьківського елемента flex у CSS",
    description:
      "Вивчаємо, як формується висота flex-контейнера, якщо йому не задано власну висоту.",
    content: [
      {
        type: "heading",
        text: "Висота батьківського елемента flex у CSS",
      },
      {
        type: "paragraph",
        text: "Якщо flex-контейнеру не задати висоту, його висота буде автоматично визначатися вмістом.",
      },
      {
        type: "paragraph",
        text: "Висота батьківського елемента буде дорівнювати висоті його дочірніх flex-елементів.",
      },
      {
        type: "example",
        title: "Flex-контейнер без заданої висоти",
        text: "Батьківський елемент автоматично розтягнеться під висоту дочірніх блоків.",
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
  width: 300px;
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
        text: "Висота батьківського блока буде сформована дочірніми елементами висотою 50px.",
      },
      {
        type: "note",
        text: "Flex-контейнер не має власної висоти, тому він підлаштовується під своїх дочірніх елементів.",
      },
      {
        type: "list",
        items: [
          "display: flex створює flex-контейнер.",
          "Висота без height залежить від вмісту.",
          "Дочірні елементи визначають розмір батьківського блока.",
          "Властивість width працює незалежно від висоти контейнера.",
        ],
      },
      {
        type: "example",
        title: "Приклад зміни висоти",
        text: "Якщо змінити height дочірнього елемента, висота батьківського flex-контейнера також зміниться.",
      },
      {
        type: "code",
        language: "css",
        code: `.child {
  width: 50px;
  height: 100px;
  border: 1px solid green;
}`,
      },
      {
        type: "task",
        text: [
          "№1. Створіть flex-контейнер із трьома дочірніми блоками.",
          "№2. Не задавайте батьківському елементу height.",
          "№3. Змініть висоту дочірніх елементів і спостерігайте за зміною висоти батька.",
        ],
      },
      {
        type: "hint",
        text: "Спробуйте змінити height дочірнього елемента з 50px на 100px і перевірте, як зміниться flex-контейнер.",
      },
      {
        type: "answer",
        text: `.parent {
  display: flex;
}

.child {
  height: 50px;
}`,
      },
    ],
  },
  {
    id: "flex-parent-width-css",
    title: "Ширина батьківського елемента flex у CSS",
    description:
      "Вивчаємо, як визначається ширина flex-контейнера, якщо йому не задано власну ширину.",
    content: [
      {
        type: "heading",
        text: "Ширина батьківського елемента flex у CSS",
      },
      {
        type: "paragraph",
        text: "Якщо flex-контейнеру не задати ширину, він займе весь доступний простір по ширині.",
      },
      {
        type: "paragraph",
        text: "На відміну від висоти, яка залежить від вмісту, ширина flex-контейнера за замовчуванням формується як у звичайного блочного елемента.",
      },
      {
        type: "example",
        title: "Flex-контейнер без заданої ширини",
        text: "Батьківський елемент розтягнеться на всю доступну ширину батьківського контейнера.",
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
        title: "Результат виконання коду",
        text: "Flex-контейнер займе всю доступну ширину, а дочірні елементи розташуються всередині нього в один ряд.",
      },
      {
        type: "note",
        text: "Flex-контейнер за замовчуванням є блочним елементом, тому без заданої ширини він займає всю ширину батьківського блока.",
      },
      {
        type: "list",
        items: [
          "display: flex створює flex-контейнер.",
          "Без width батьківський елемент займає всю доступну ширину.",
          "Дочірні елементи розташовуються в ряд.",
          "Ширина дочірніх елементів залежить від їх власних властивостей.",
        ],
      },
      {
        type: "example",
        title: "Порівняння width і height flex-контейнера",
        text: "Ширина flex-контейнера без width розтягується, а висота без height формується його вмістом.",
      },
      {
        type: "task",
        text: [
          "№1. Створіть flex-контейнер без заданої ширини.",
          "№2. Додайте три дочірні блоки.",
          "№3. Змініть ширину дочірніх елементів і перевірте, як вони розташовуються всередині контейнера.",
        ],
      },
      {
        type: "hint",
        text: "Спробуйте додати width: 300px батьківському елементу і порівняйте результат.",
      },
      {
        type: "answer",
        text: `.parent {
  display: flex;
  border: 1px solid red;
}

.child {
  width: 50px;
  height: 50px;
}`,
      },
    ],
  },
  {
    id: "inline-flex-parent-css",
    title: "Рядково-блочний батьківський елемент flex у CSS",
    description:
      "Вивчаємо значення inline-flex, яке створює flex-контейнер із поведінкою рядково-блочного елемента.",
    content: [
      {
        type: "heading",
        text: "Рядково-блочний батьківський елемент flex у CSS",
      },
      {
        type: "paragraph",
        text: "Для створення flex-контейнера можна використовувати не тільки display: flex, а й display: inline-flex.",
      },
      {
        type: "paragraph",
        text: "Значення inline-flex створює flex-контейнер, який поводиться як рядково-блочний елемент.",
      },
      {
        type: "paragraph",
        text: "Такий елемент може розташовуватися в одному рядку з іншими елементами та підтримує властивості flex-контейнера.",
      },
      {
        type: "example",
        title: "Створення inline-flex контейнера",
        text: "Якщо ширину батьківському елементу не задати, вона сформується за шириною його дочірніх елементів.",
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
  display: inline-flex;
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
        text: "Батьківський елемент займе тільки необхідну ширину, яка дорівнює ширині його дочірніх елементів.",
      },
      {
        type: "note",
        text: "Різниця між flex і inline-flex полягає в поведінці самого контейнера. Його дочірні елементи в обох випадках залишаються flex-елементами.",
      },
      {
        type: "list",
        items: [
          "display: flex — створює блочний flex-контейнер.",
          "display: inline-flex — створює рядково-блочний flex-контейнер.",
          "inline-flex займає ширину за вмістом.",
          "Дочірні елементи розташовуються як flex-елементи.",
        ],
      },
      {
        type: "example",
        title: "Порівняння flex і inline-flex",
        text: `flex:
контейнер займає всю доступну ширину

inline-flex:
контейнер займає тільки ширину своїх дочірніх елементів`,
      },
      {
        type: "task",
        text: [
          "№1. Створіть блок із трьома дочірніми елементами.",
          "№2. Замість display: flex використайте display: inline-flex.",
          "№3. Приберіть ширину батьківського елемента та порівняйте результат.",
        ],
      },
      {
        type: "hint",
        text: "Зверніть увагу, що inline-flex не розтягується на всю ширину сторінки, а займає тільки необхідний простір.",
      },
      {
        type: "answer",
        text: `.parent {
  display: inline-flex;
  border: 1px solid red;
}

.child {
  width: 50px;
  height: 50px;
  border: 1px solid green;
}`,
      },
    ],
  },
  {
    id: "flex-parent-padding-css",
    title: "Відступи padding батьківського елемента flex у CSS",
    description:
      "Вивчаємо, як працює внутрішній відступ padding у flex-контейнера.",
    content: [
      {
        type: "heading",
        text: "Відступи padding батьківського елемента flex у CSS",
      },
      {
        type: "paragraph",
        text: "Flex-контейнеру, як і звичайному елементу, можна задавати внутрішні відступи за допомогою властивості padding.",
      },
      {
        type: "paragraph",
        text: "Padding створює простір між межею батьківського елемента та його дочірніми flex-елементами.",
      },
      {
        type: "example",
        title: "Padding у flex-контейнері",
        text: "Батьківський елемент отримає внутрішній відступ 10px з усіх сторін.",
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
  display: inline-flex;
  padding: 10px;
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
        text: "Flex-елементи будуть розташовані всередині контейнера з відступом 10px від його межі.",
      },
      {
        type: "note",
        text: "Padding збільшує внутрішній простір flex-контейнера, але не змінює поведінку flex-елементів.",
      },
      {
        type: "list",
        items: [
          "padding задає внутрішні відступи контейнера.",
          "Відступи створюються між межею батька і дочірніми елементами.",
          "Flex-елементи враховують padding батьківського контейнера.",
          "Для окремих сторін можна використовувати padding-top, padding-right, padding-bottom, padding-left.",
        ],
      },
      {
        type: "example",
        title: "Padding для різних сторін",
        text: "Можна задавати різні внутрішні відступи для кожної сторони контейнера.",
      },
      {
        type: "code",
        language: "css",
        code: `.parent {
  display: flex;
  padding-top: 20px;
  padding-right: 10px;
  padding-bottom: 20px;
  padding-left: 10px;
}`,
      },
      {
        type: "task",
        text: [
          "№1. Створіть flex-контейнер із трьома дочірніми елементами.",
          "№2. Додайте батьківському елементу padding: 20px.",
          "№3. Змініть значення padding і подивіться, як змінюється відстань між межею та flex-елементами.",
        ],
      },
      {
        type: "hint",
        text: "Спробуйте спочатку прибрати padding, а потім додати його знову, щоб побачити різницю.",
      },
      {
        type: "answer",
        text: `.parent {
  display: inline-flex;
  padding: 10px;
  border: 1px solid red;
}

.child {
  width: 50px;
  height: 50px;
  border: 1px solid green;
}`,
      },
    ],
  },
  {
    id: "flex-child-margin-css",
    title: "Відступи margin у flex-елементів CSS",
    description:
      "Вивчаємо, як працюють зовнішні відступи margin у дочірніх flex-елементів.",
    content: [
      {
        type: "heading",
        text: "Відступи margin у flex-елементів CSS",
      },
      {
        type: "paragraph",
        text: "Flex-елементам, як і звичайним блокам, можна задавати зовнішні відступи за допомогою властивості margin.",
      },
      {
        type: "paragraph",
        text: "Margin створює простір між flex-елементами та впливає на їх розташування всередині flex-контейнера.",
      },
      {
        type: "example",
        title: "Використання margin у flex-елементів",
        text: "Кожен дочірній елемент отримає зовнішній відступ 10px з усіх сторін.",
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
  display: inline-flex;
  border: 1px solid red;
}

.child {
  margin: 10px;
  width: 50px;
  height: 50px;
  border: 1px solid green;
}`,
      },
      {
        type: "example",
        title: "Результат виконання коду",
        text: "Між flex-елементами з'являться відступи 10px, а також відстань між елементами та краями контейнера.",
      },
      {
        type: "note",
        text: "У flex-контейнері margin може використовуватися не тільки для створення відступів, а й для вирівнювання елементів.",
      },
      {
        type: "list",
        items: [
          "margin задає зовнішні відступи flex-елементів.",
          "margin впливає на відстань між сусідніми flex-елементами.",
          "Можна задавати margin для окремих сторін: margin-left, margin-right, margin-top, margin-bottom.",
          "У flexbox значення auto для margin має особливу поведінку.",
        ],
      },
      {
        type: "example",
        title: "Margin для окремих сторін",
        text: "Можна створювати різні відступи для кожної сторони flex-елемента.",
      },
      {
        type: "code",
        language: "css",
        code: `.child {
  margin-top: 10px;
  margin-right: 20px;
  margin-bottom: 30px;
  margin-left: 40px;
}`,
      },
      {
        type: "task",
        text: [
          "№1. Створіть flex-контейнер із трьома дочірніми елементами.",
          "№2. Додайте дочірнім елементам margin: 20px.",
          "№3. Змініть значення margin і перевірте, як змінюється відстань між елементами.",
        ],
      },
      {
        type: "hint",
        text: "Спробуйте використати margin-left або margin-right, щоб змінити відстань тільки з одного боку.",
      },
      {
        type: "answer",
        text: `.parent {
  display: inline-flex;
  border: 1px solid red;
}

.child {
  margin: 10px;
  width: 50px;
  height: 50px;
  border: 1px solid green;
}`,
      },
    ],
  },
  {
    id: "flex-justify-content-center-css",
    title: "Вирівнювання flex-елементів по центру в CSS",
    description:
      "Вивчаємо властивість justify-content та значення center для вирівнювання flex-елементів по горизонталі.",
    content: [
      {
        type: "heading",
        text: "Вирівнювання flex-елементів по центру в CSS",
      },
      {
        type: "paragraph",
        text: "Для вирівнювання flex-елементів усередині контейнера використовується властивість justify-content.",
      },
      {
        type: "paragraph",
        text: "Значення center розташовує всі flex-елементи по центру батьківського контейнера.",
      },
      {
        type: "example",
        title: "Центрування flex-елементів",
        text: "Flex-елементи будуть розташовані по центру головної осі контейнера.",
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
        type: "example",
        title: "Результат виконання коду",
        text: "Дочірні елементи перемістяться з лівого краю контейнера в його центр.",
      },
      {
        type: "note",
        text: "За замовчуванням flex-елементи розташовані зліва. Властивість justify-content змінює їх положення по головній осі.",
      },
      {
        type: "list",
        items: [
          "justify-content керує розташуванням flex-елементів по головній осі.",
          "center — розташовує елементи по центру.",
          "За замовчуванням використовується значення flex-start.",
          "Для вертикального розташування потрібно змінити напрямок flex через flex-direction.",
        ],
      },
      {
        type: "example",
        title: "Приклад із контейнером",
        text: "Три блоки будуть знаходитися посередині батьківського елемента.",
      },
      {
        type: "code",
        language: "css",
        code: `.parent {
  display: flex;
  width: 300px;
  height: 100px;
  justify-content: center;
  border: 1px solid red;
}

.child {
  width: 50px;
  height: 50px;
  border: 1px solid green;
}`,
      },
      {
        type: "task",
        text: [
          "№1. Створіть flex-контейнер із трьома дочірніми блоками.",
          "№2. Додайте батьківському елементу justify-content: center.",
          "№3. Перевірте, як зміниться положення елементів.",
        ],
      },
      {
        type: "hint",
        text: "Спробуйте змінити center на flex-start і flex-end, щоб побачити різницю.",
      },
      {
        type: "answer",
        text: `.parent {
  display: flex;
  justify-content: center;
}`,
      },
    ],
  },
  {
    id: "flex-justify-content-space-between-css",
    title: "Вирівнювання flex-елементів по краях батька в CSS",
    description:
      "Вивчаємо значення space-between властивості justify-content для рівномірного розподілу flex-елементів.",
    content: [
      {
        type: "heading",
        text: "Вирівнювання flex-елементів по краях батька в CSS",
      },
      {
        type: "paragraph",
        text: "Властивість justify-content має значення space-between, яке дозволяє рівномірно розподілити flex-елементи всередині контейнера.",
      },
      {
        type: "paragraph",
        text: "При використанні space-between перший елемент притискається до лівого краю, а останній — до правого.",
      },
      {
        type: "paragraph",
        text: "Відстань між усіма елементами розраховується браузером автоматично.",
      },
      {
        type: "example",
        title: "Розподіл елементів по ширині контейнера",
        text: "Flex-елементи займають всю доступну ширину, а проміжки між ними стають однаковими.",
      },
      {
        type: "code",
        language: "css",
        code: `.parent {
  display: flex;
  justify-content: space-between;
}`,
      },
      {
        type: "example",
        title: "Результат виконання коду",
        text: "Перший елемент знаходиться біля лівого краю, останній — біля правого, а між іншими елементами створюються рівні проміжки.",
      },
      {
        type: "note",
        text: "space-between не додає відступів перед першим і після останнього елемента. Вільний простір розподіляється тільки між ними.",
      },
      {
        type: "list",
        items: [
          "justify-content керує розташуванням по головній осі.",
          "space-between розподіляє вільний простір між елементами.",
          "Перший елемент притискається до початку контейнера.",
          "Останній елемент притискається до кінця контейнера.",
        ],
      },
      {
        type: "example",
        title: "Приклад із трьома елементами",
        text: "Три блоки будуть розташовані з однаковими проміжками між ними.",
      },
      {
        type: "code",
        language: "css",
        code: `.parent {
  display: flex;
  width: 400px;
  justify-content: space-between;
  border: 1px solid red;
}

.child {
  width: 50px;
  height: 50px;
  border: 1px solid green;
}`,
      },
      {
        type: "task",
        text: [
          "№1. Створіть flex-контейнер із трьома дочірніми блоками.",
          "№2. Додайте justify-content: space-between.",
          "№3. Змініть ширину контейнера та подивіться, як змінюється відстань між елементами.",
        ],
      },
      {
        type: "hint",
        text: "Порівняйте space-between із center. У center всі елементи групуються разом, а у space-between займають всю ширину контейнера.",
      },
      {
        type: "answer",
        text: `.parent {
  display: flex;
  justify-content: space-between;
}`,
      },
    ],
  },
  {
    id: "flex-justify-content-space-around-css",
    title: "Вирівнювання flex-елементів з відступами в CSS",
    description:
      "Вивчаємо значення space-around властивості justify-content для створення відступів навколо flex-елементів.",
    content: [
      {
        type: "heading",
        text: "Вирівнювання flex-елементів з відступами в CSS",
      },
      {
        type: "paragraph",
        text: "Властивість justify-content зі значенням space-around додає однаковий простір навколо кожного flex-елемента.",
      },
      {
        type: "paragraph",
        text: "Крайні елементи також отримують відступ від країв батьківського контейнера.",
      },
      {
        type: "paragraph",
        text: "На перший погляд може здатися, що всі відстані однакові, але це не так.",
      },
      {
        type: "paragraph",
        text: "Відстань між flex-елементами буде у два рази більшою, ніж відстань від крайнього елемента до межі контейнера.",
      },
      {
        type: "example",
        title: "Використання justify-content: space-around",
        text: "Flex-елементи отримають автоматичні відступи зліва і справа.",
      },
      {
        type: "code",
        language: "css",
        code: `.parent {
  display: flex;
  justify-content: space-around;
}`,
      },
      {
        type: "example",
        title: "Результат виконання коду",
        text: "Кожен елемент має простір навколо себе, а проміжки між елементами стають більшими, ніж відступи від країв контейнера.",
      },
      {
        type: "note",
        text: "space-around створює відступи з усіх сторін елементів. Через об'єднання сусідніх відступів проміжки між елементами виходять більшими.",
      },
      {
        type: "list",
        items: [
          "justify-content: space-around розподіляє вільний простір навколо елементів.",
          "Кожен flex-елемент отримує відступ зліва і справа.",
          "Проміжки між елементами у два рази більші за крайні відступи.",
          "Елементи не притискаються до країв контейнера.",
        ],
      },
      {
        type: "example",
        title: "Приклад із трьома елементами",
        text: "Три блоки будуть розташовані з автоматичними відступами навколо кожного з них.",
      },
      {
        type: "code",
        language: "css",
        code: `.parent {
  display: flex;
  width: 400px;
  justify-content: space-around;
  border: 1px solid red;
}

.child {
  width: 50px;
  height: 50px;
  border: 1px solid green;
}`,
      },
      {
        type: "task",
        text: [
          "№1. Створіть flex-контейнер із трьома дочірніми елементами.",
          "№2. Додайте justify-content: space-around.",
          "№3. Порівняйте результат із justify-content: space-between.",
        ],
      },
      {
        type: "hint",
        text: "Зверніть увагу: space-between притискає крайні елементи до меж контейнера, а space-around залишає відступи по краях.",
      },
      {
        type: "answer",
        text: `.parent {
  display: flex;
  justify-content: space-around;
}`,
      },
    ],
  },
  {
    id: "flex-justify-content-space-evenly-css",
    title: "Вирівнювання flex-елементів з рівними відступами в CSS",
    description:
      "Вивчаємо значення space-evenly властивості justify-content для створення однакових відстаней між flex-елементами та краями контейнера.",
    content: [
      {
        type: "heading",
        text: "Вирівнювання flex-елементів з рівними відступами в CSS",
      },
      {
        type: "paragraph",
        text: "Значення space-around часто не дає потрібного результату, оскільки відстані між елементами та краями контейнера виходять різними.",
      },
      {
        type: "paragraph",
        text: "Для створення абсолютно однакових проміжків використовується значення space-evenly.",
      },
      {
        type: "paragraph",
        text: "При використанні space-evenly всі відступи стають однаковими: між елементами, а також між крайніми елементами та межами батьківського контейнера.",
      },
      {
        type: "example",
        title: "Використання justify-content: space-evenly",
        text: "Flex-елементи будуть рівномірно розподілені по всій ширині контейнера.",
      },
      {
        type: "code",
        language: "css",
        code: `.parent {
  display: flex;
  justify-content: space-evenly;
}`,
      },
      {
        type: "example",
        title: "Результат виконання коду",
        text: "Відстань між першим елементом і краєм контейнера, між елементами та між останнім елементом і краєм буде однаковою.",
      },
      {
        type: "note",
        text: "На відміну від space-around, значення space-evenly створює повністю рівні проміжки без подвоєння відстаней між елементами.",
      },
      {
        type: "list",
        items: [
          "justify-content: space-evenly рівномірно розподіляє вільний простір.",
          "Усі відступи мають однаковий розмір.",
          "Проміжки між елементами дорівнюють крайнім відступам.",
          "Зручно використовувати для меню, карток та навігації.",
        ],
      },
      {
        type: "example",
        title: "Порівняння значень justify-content",
        text: `space-between:
елементи притиснуті до країв, відступи тільки між ними.

space-around:
навколо елементів є відступи, але вони різні.

space-evenly:
усі відступи однакові.`,
      },
      {
        type: "code",
        language: "css",
        code: `.parent {
  display: flex;
  width: 400px;
  justify-content: space-evenly;
  border: 1px solid red;
}

.child {
  width: 50px;
  height: 50px;
  border: 1px solid green;
}`,
      },
      {
        type: "task",
        text: [
          "№1. Створіть flex-контейнер із трьома дочірніми блоками.",
          "№2. Додайте justify-content: space-evenly.",
          "№3. Порівняйте результат із space-around та space-between.",
        ],
      },
      {
        type: "hint",
        text: "Використовуйте space-evenly, коли потрібно отримати однакові відстані між усіма елементами та краями контейнера.",
      },
      {
        type: "answer",
        text: `.parent {
  display: flex;
  justify-content: space-evenly;
}`,
      },
    ],
  },
];
