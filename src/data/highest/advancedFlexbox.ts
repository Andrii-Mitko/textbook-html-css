import { Lesson } from "../types";

export const advancedFlexbox: Lesson[] = [
  {
    id: "css-flex-basis",
    title: "Розмір flex-елемента вздовж головної осі",
    description:
      "Вивчаємо властивість flex-basis, яка задає початковий розмір flex-елемента вздовж головної осі. Розглядаємо її роботу при горизонтальній та вертикальній орієнтації flex-контейнера, а також пріоритет над width і height.",
    content: [
      { type: "heading", text: "Властивості width і height у flex-моделі" },
      {
        type: "paragraph",
        text: "Властивості width і height задають ширину та висоту flex-елемента незалежно від напрямку головної осі. Якщо головна вісь горизонтальна, width задає ширину елемента. Якщо головна вісь вертикальна, width все одно залишається шириною, а не розміром уздовж головної осі.",
      },
      {
        type: "paragraph",
        text: "Іноді зручніше задавати не конкретно ширину або висоту, а розмір елемента саме вздовж головної осі. Для цього у flex-моделі використовується властивість flex-basis.",
      },
      { type: "heading", text: "Властивість flex-basis" },
      {
        type: "paragraph",
        text: "Властивість flex-basis задає початковий розмір flex-елемента вздовж головної осі контейнера.",
      },
      {
        type: "list",
        items: [
          "Якщо головна вісь горизонтальна (flex-direction: row), flex-basis задає початкову ширину елемента.",
          "Якщо головна вісь вертикальна (flex-direction: column), flex-basis задає початкову висоту елемента.",
          "flex-basis задається безпосередньо flex-елементу, а не flex-контейнеру.",
        ],
      },
      {
        type: "note",
        text: "Головна ідея flex-basis: властивість задає розмір не конкретно по горизонталі або вертикалі, а саме вздовж головної осі flex-контейнера.",
      },
      { type: "heading", text: "flex-basis при горизонтальній осі" },
      {
        type: "paragraph",
        text: "За замовчуванням flex-контейнер використовує flex-direction: row, тому його головна вісь є горизонтальною. У такому випадку flex-basis визначає початкову ширину flex-елемента.",
      },
      {
        type: "code",
        language: "html",
        code: `
<div class="parent">
  <div class="child">1</div>
  <div class="child">2</div>
  <div class="child">3</div>
</div>`,
      },
      {
        type: "code",
        language: "css",
        code: `
.parent {
  display: flex;
  flex-direction: row;
  width: 300px;
  height: 300px;
  border: 1px solid red;
}

.child {
  flex-basis: 50px;
  border: 1px solid green;
}`,
      },
      {
        type: "example",
        title: "Результат",
        text: "Головна вісь горизонтальна, тому flex-basis: 50px задає початковий розмір елементів уздовж горизонтальної осі — 50px.",
      },
      { type: "heading", text: "flex-basis при вертикальній осі" },
      {
        type: "paragraph",
        text: "Якщо встановити flex-direction: column, головна вісь стане вертикальною. При цьому значення flex-basis залишиться 50px, але тепер воно задаватиме початковий розмір елемента вздовж вертикальної осі, тобто висоту.",
      },
      {
        type: "code",
        language: "css",
        code: `
.parent {
  display: flex;
  flex-direction: column;
  width: 300px;
  height: 300px;
  border: 1px solid red;
}

.child {
  flex-basis: 50px;
  border: 1px solid green;
}`,
      },
      {
        type: "example",
        title: "Результат",
        text: "Головна вісь тепер вертикальна, тому flex-basis: 50px задає початковий розмір елементів уздовж вертикальної осі — 50px по висоті.",
      },
      { type: "heading", text: "flex-basis і width" },
      {
        type: "paragraph",
        text: "Якщо головна вісь горизонтальна і flex-елемент одночасно має flex-basis та width, значення flex-basis використовується як базовий розмір уздовж головної осі. Тому width не визначає базовий розмір елемента замість flex-basis.",
      },
      {
        type: "code",
        language: "css",
        code: `
.parent {
  display: flex;
}

.child {
  width: 200px;
  flex-basis: 100px;
}`,
      },
      {
        type: "example",
        title: "Результат",
        text: "При горизонтальній головній осі flex-basis визначає базовий розмір елемента вздовж головної осі, тому значення width: 200px не замінює flex-basis: 100px.",
      },
      { type: "heading", text: "flex-basis і height" },
      {
        type: "paragraph",
        text: "Якщо головна вісь вертикальна і flex-елемент одночасно має flex-basis та height, flex-basis використовується як базовий розмір уздовж головної осі.",
      },
      {
        type: "code",
        language: "css",
        code: `
.parent {
  display: flex;
  flex-direction: column;
}

.child {
  height: 200px;
  flex-basis: 100px;
}`,
      },
      {
        type: "example",
        title: "Результат",
        text: "При вертикальній головній осі flex-basis визначає базовий розмір елемента вздовж вертикальної осі, тому height: 200px не замінює flex-basis: 100px.",
      },
      {
        type: "note",
        text: "Запам'ятайте: flex-basis залежить від напрямку головної осі. При row він працює вздовж горизонтальної осі, а при column — вздовж вертикальної.",
      },
      { type: "heading", text: "Практичне завдання 1" },
      {
        type: "task",
        text: [
          "Створіть flex-контейнер із п'ятьма flex-елементами.",
          "Задайте всім елементам flex-basis: 100px.",
          "Зробіть головну вісь горизонтальною.",
          "Подивіться, який розмір елементи отримали вздовж головної осі.",
          "Змініть напрямок на вертикальний за допомогою flex-direction: column.",
          "Порівняйте поведінку елементів у двох напрямках.",
        ],
      },
      {
        type: "code",
        language: "html",
        code: `
<!-- Початковий код -->
<div class="parent">
  <div class="child">1</div>
  <div class="child">2</div>
  <div class="child">3</div>
  <div class="child">4</div>
  <div class="child">5</div>
</div>`,
      },
      {
        type: "hint",
        text: "Задайте батьківському елементу display: flex;, а дочірнім елементам flex-basis: 100px;. Для перевірки різних напрямків змінюйте flex-direction: row та flex-direction: column.",
      },
      {
        type: "answer",
        text: `
.parent {
  display: flex;
  flex-direction: row;
}

.child {
  flex-basis: 100px;
  border: 1px solid green;
}`,
      },
      { type: "heading", text: "Практичне завдання 2" },
      {
        type: "task",
        text: [
          "Створіть flex-контейнер із кількома елементами.",
          "Задайте контейнеру горизонтальну головну вісь.",
          "Для flex-елемента одночасно задайте width: 200px; та flex-basis: 100px;.",
          "Перевірте, який базовий розмір елемента буде використано.",
          "Поясніть, чому flex-basis має пріоритет над width уздовж головної осі.",
        ],
      },
      {
        type: "code",
        language: "html",
        code: `
<!-- Початковий код -->
<div class="parent">
  <div class="child">Елемент</div>
</div>`,
      },
      {
        type: "hint",
        text: "Використайте flex-direction: row;, а для дочірнього елемента одночасно задайте width: 200px; та flex-basis: 100px;.",
      },
      {
        type: "answer",
        text: `
.parent {
  display: flex;
  flex-direction: row;
}

.child {
  width: 200px;
  flex-basis: 100px;
  border: 1px solid green;
}`,
      },
      { type: "heading", text: "Практичне завдання 3" },
      {
        type: "task",
        text: [
          "Створіть flex-контейнер.",
          "Зробіть головну вісь вертикальною.",
          "Для flex-елемента задайте height: 200px;.",
          "Додайте flex-basis: 100px;.",
          "Перевірте, який базовий розмір елемента використовується вздовж вертикальної осі.",
        ],
      },
      {
        type: "code",
        language: "html",
        code: `
<!-- Початковий код -->
<div class="parent">
  <div class="child">Елемент</div>
</div>`,
      },
      {
        type: "hint",
        text: "Встановіть flex-direction: column; у контейнера. Для дочірнього елемента використайте одночасно height: 200px; та flex-basis: 100px;.",
      },
      {
        type: "answer",
        text: `
.parent {
  display: flex;
  flex-direction: column;
}

.child {
  height: 200px;
  flex-basis: 100px;
  border: 1px solid green;
}`,
      },
    ],
  },
  {
    id: "css-flex-grow",
    title: "Жадібність flex-елементів у CSS",
    description:
      "Вивчаємо властивість flex-grow, яка дозволяє flex-елементам ділити між собою вільний простір контейнера пропорційно до заданих значень.",
    content: [
      { type: "heading", text: "Що таке flex-grow" },
      {
        type: "paragraph",
        text: "Якщо сума базових розмірів flex-елементів менша за розмір flex-контейнера вздовж головної осі, у контейнері залишається вільний простір. За замовчуванням цей простір не розподіляється між елементами.",
      },
      {
        type: "paragraph",
        text: "Властивість flex-grow визначає, яку частину вільного простору може отримати flex-елемент. Значенням flex-grow є безрозмірне число.",
      },
      {
        type: "paragraph",
        text: "Чим більше значення flex-grow у елемента порівняно з іншими елементами, тим більшу частину вільного простору він отримає.",
      },
      { type: "heading", text: "flex-grow без вільного простору" },
      {
        type: "paragraph",
        text: "Розглянемо контейнер шириною 300px та два flex-елементи шириною по 100px. Разом елементи займають 200px, тому залишається 100px вільного простору.",
      },
      {
        type: "code",
        language: "html",
        code: `
<div class="parent">
  <div class="child">1</div>
  <div class="child">2</div>
</div>`,
      },
      {
        type: "code",
        language: "css",
        code: `
.parent {
  display: flex;
  width: 300px;
  height: 200px;
  border: 1px solid red;
}

.child {
  width: 100px;
  height: 100px;
  border: 1px solid green;
}`,
      },
      {
        type: "example",
        title: "Результат",
        text: "Елементи займають свої базові розміри, а вільний простір залишається праворуч, оскільки flex-grow не задано.",
      },
      { type: "heading", text: "Як flex-grow ділить вільний простір" },
      {
        type: "paragraph",
        text: "Щоб flex-grow розподілив вільний простір, потрібно врахувати значення flex-grow усіх flex-елементів. Спочатку визначаємо суму їхніх значень, потім ділимо вільний простір на цю суму.",
      },
      {
        type: "list",
        items: [
          "Визначаємо вільний простір контейнера.",
          "Додаємо значення flex-grow усіх елементів.",
          "Ділимо вільний простір на отриману суму.",
          "Отримане число показує, скільки вільного простору припадає на одну одиницю flex-grow.",
          "Кожен елемент отримує кількість простору відповідно до свого значення flex-grow.",
        ],
      },
      { type: "heading", text: "Приклад із flex-grow: 1 та flex-grow: 3" },
      {
        type: "paragraph",
        text: "Нехай контейнер має ширину 300px, а два елементи мають ширину 100px кожен. Разом вони займають 200px, тому залишається 100px вільного простору.",
      },
      {
        type: "paragraph",
        text: "Першому елементу задано flex-grow: 1, а другому — flex-grow: 3. Сума значень дорівнює 4. Отже, одна одиниця flex-grow відповідає 100px / 4 = 25px.",
      },
      {
        type: "paragraph",
        text: "Перший елемент отримує додаткові 25px, а другий — 75px. У результаті перший елемент має базовий розмір 125px, а другий — 175px.",
      },
      {
        type: "code",
        language: "html",
        code: `
<div class="parent">
  <div class="child elem1">1</div>
  <div class="child elem2">2</div>
</div>`,
      },
      {
        type: "code",
        language: "css",
        code: `
.parent {
  display: flex;
  width: 300px;
  height: 200px;
  border: 1px solid red;
}

.child {
  height: 50px;
  border: 1px solid green;
}

.elem1 {
  width: 100px;
  flex-grow: 1;
}

.elem2 {
  width: 100px;
  flex-grow: 3;
}`,
      },
      {
        type: "example",
        title: "Результат",
        text: "Вільні 100px розподіляються у співвідношенні 1:3. Перший елемент отримує 25px, а другий — 75px.",
      },
      { type: "heading", text: "Однаковий flex-grow" },
      {
        type: "paragraph",
        text: "Якщо елементи мають однакове значення flex-grow, вільний простір розподіляється між ними порівну, незалежно від початкової ширини елементів.",
      },
      {
        type: "paragraph",
        text: "Наприклад, контейнер має ширину 400px. Перший елемент має ширину 200px, другий — 100px. Разом вони займають 300px, тому залишається 100px. Якщо обом елементам задати flex-grow: 1, кожен отримає по 50px.",
      },
      {
        type: "code",
        language: "html",
        code: `
<div class="parent">
  <div class="child elem1">1</div>
  <div class="child elem2">2</div>
</div>`,
      },
      {
        type: "code",
        language: "css",
        code: `
.parent {
  display: flex;
  width: 400px;
  height: 200px;
  border: 1px solid red;
}

.child {
  height: 50px;
  border: 1px solid green;
}

.elem1 {
  width: 200px;
  flex-grow: 1;
}

.elem2 {
  width: 100px;
  flex-grow: 1;
}`,
      },
      {
        type: "example",
        title: "Результат",
        text: "Перший елемент збільшується з 200px до 250px, а другий — зі 100px до 150px.",
      },
      { type: "heading", text: "Різні значення flex-grow" },
      {
        type: "paragraph",
        text: "Якщо елементи мають різні значення flex-grow, вільний простір розподіляється пропорційно. Елемент зі значенням 3 отримає втричі більше вільного простору, ніж елемент зі значенням 1.",
      },
      {
        type: "paragraph",
        text: "Нехай контейнер має ширину 400px. Перший елемент має ширину 200px і flex-grow: 3, а другий — ширину 100px і flex-grow: 1. Вільного простору залишається 100px. Сума значень flex-grow дорівнює 4, тому одна одиниця відповідає 25px.",
      },
      {
        type: "paragraph",
        text: "Перший елемент отримує 3 × 25px = 75px і стає 275px. Другий отримує 1 × 25px = 25px і стає 125px.",
      },
      {
        type: "code",
        language: "css",
        code: `
.parent {
  display: flex;
  width: 400px;
  height: 200px;
  border: 1px solid red;
}

.child {
  height: 50px;
  border: 1px solid green;
}

.elem1 {
  width: 200px;
  flex-grow: 3;
}

.elem2 {
  width: 100px;
  flex-grow: 1;
}`,
      },
      {
        type: "example",
        title: "Результат",
        text: "Вільні 100px розподіляються у співвідношенні 3:1. Перший елемент отримує 75px, а другий — 25px.",
      },
      {
        type: "note",
        text: "Для розрахунків у цих прикладах використовуємо спрощену модель без урахування додаткових змін розміру через flex-shrink та інших факторів flex-розкладки.",
      },
      { type: "heading", text: "Практичне завдання 1" },
      {
        type: "task",
        text: [
          "Розгляньте код із трьома flex-елементами.",
          "Самостійно розрахуйте ширину кожного елемента після розподілу вільного простору.",
          "Після розрахунків запустіть код і перевірте результат.",
        ],
      },
      {
        type: "code",
        language: "html",
        code: `
<!-- Початковий код -->
<div class="parent">
  <div class="child elem1">1</div>
  <div class="child elem2">2</div>
  <div class="child elem3">3</div>
</div>`,
      },
      {
        type: "code",
        language: "css",
        code: `
.parent {
  display: flex;
  width: 500px;
  height: 200px;
  border: 1px solid red;
}

.child {
  height: 50px;
  border: 1px solid green;
}

.elem1 {
  width: 200px;
  flex-grow: 3;
}

.elem2 {
  width: 100px;
  flex-grow: 1;
}

.elem3 {
  width: 100px;
  flex-grow: 1;
}`,
      },
      {
        type: "hint",
        text: "Спочатку знайдіть вільний простір: 500px - (200px + 100px + 100px). Потім додайте значення flex-grow: 3 + 1 + 1.",
      },
      {
        type: "answer",
        text: "Вільний простір: 500px - 400px = 100px. Сума flex-grow: 3 + 1 + 1 = 5. Одна одиниця flex-grow: 100px / 5 = 20px. Перший елемент: 200px + 60px = 260px. Другий: 100px + 20px = 120px. Третій: 100px + 20px = 120px.",
      },
      { type: "heading", text: "Практичне завдання 2" },
      {
        type: "task",
        text: [
          "Розрахуйте ширину кожного з трьох flex-елементів.",
          "Визначте кількість вільного простору.",
          "Знайдіть суму значень flex-grow.",
          "Розподіліть вільний простір між елементами.",
          "Перевірте свої розрахунки в браузері.",
        ],
      },
      {
        type: "code",
        language: "html",
        code: `
<!-- Початковий код -->
<div class="parent">
  <div class="child elem1">1</div>
  <div class="child elem2">2</div>
  <div class="child elem3">3</div>
</div>`,
      },
      {
        type: "code",
        language: "css",
        code: `
.parent {
  display: flex;
  width: 700px;
  height: 200px;
  border: 1px solid red;
}

.child {
  height: 50px;
  border: 1px solid green;
}

.elem1 {
  width: 100px;
  flex-grow: 1;
}

.elem2 {
  width: 100px;
  flex-grow: 2;
}

.elem3 {
  width: 200px;
  flex-grow: 3;
}`,
      },
      {
        type: "hint",
        text: "Спочатку обчисліть 700px - (100px + 100px + 200px), а потім поділіть отриманий вільний простір на суму 1 + 2 + 3.",
      },
      {
        type: "answer",
        text: "Вільний простір: 700px - 400px = 300px. Сума flex-grow: 1 + 2 + 3 = 6. Одна одиниця: 300px / 6 = 50px. Перший елемент: 100px + 50px = 150px. Другий: 100px + 100px = 200px. Третій: 200px + 150px = 350px.",
      },
      { type: "heading", text: "Практичне завдання 3" },
      {
        type: "task",
        text: [
          "Розрахуйте ширину кожного з трьох flex-елементів.",
          "Усі три елементи мають однаковий flex-grow.",
          "Визначте, скільки вільного простору отримає кожен елемент.",
          "Перевірте результат у браузері.",
        ],
      },
      {
        type: "code",
        language: "html",
        code: `
<!-- Початковий код -->
<div class="parent">
  <div class="child elem1">1</div>
  <div class="child elem2">2</div>
  <div class="child elem3">3</div>
</div>`,
      },
      {
        type: "code",
        language: "css",
        code: `
.parent {
  display: flex;
  width: 500px;
  height: 200px;
  border: 1px solid red;
}

.child {
  height: 50px;
  border: 1px solid green;
}

.elem1 {
  width: 100px;
  flex-grow: 1;
}

.elem2 {
  width: 100px;
  flex-grow: 1;
}

.elem3 {
  width: 100px;
  flex-grow: 1;
}`,
      },
      {
        type: "hint",
        text: "Спочатку знайдіть вільні 200px. Сума flex-grow дорівнює 3, тому вільний простір потрібно поділити на 3.",
      },
      {
        type: "answer",
        text: "Вільний простір: 500px - 300px = 200px. Сума flex-grow: 1 + 1 + 1 = 3. Кожен елемент отримує 200px / 3 ≈ 66.67px. Отже, кожен елемент має приблизно 166.67px.",
      },
      { type: "heading", text: "Практичне завдання 4" },
      {
        type: "task",
        text: [
          "Розрахуйте ширину кожного з чотирьох flex-елементів.",
          "Знайдіть вільний простір контейнера.",
          "Обчисліть суму значень flex-grow.",
          "Визначте, скільки додаткового простору отримає кожен елемент.",
          "Перевірте свої розрахунки в браузері.",
        ],
      },
      {
        type: "code",
        language: "html",
        code: `
<!-- Початковий код -->
<div class="parent">
  <div class="child elem1">1</div>
  <div class="child elem2">2</div>
  <div class="child elem3">3</div>
  <div class="child elem4">4</div>
</div>`,
      },
      {
        type: "code",
        language: "css",
        code: `
.parent {
  display: flex;
  width: 1000px;
  height: 200px;
  border: 1px solid red;
}

.child {
  height: 50px;
  border: 1px solid green;
}

.elem1 {
  width: 200px;
  flex-grow: 1;
}

.elem2 {
  width: 100px;
  flex-grow: 2;
}

.elem3 {
  width: 100px;
  flex-grow: 4;
}

.elem4 {
  width: 100px;
  flex-grow: 3;
}`,
      },
      {
        type: "hint",
        text: "Спочатку обчисліть вільний простір: 1000px - (200px + 100px + 100px + 100px). Потім знайдіть суму flex-grow: 1 + 2 + 4 + 3.",
      },
      {
        type: "answer",
        text: "Вільний простір: 1000px - 500px = 500px. Сума flex-grow: 1 + 2 + 4 + 3 = 10. Одна одиниця: 500px / 10 = 50px. Перший елемент: 200px + 50px = 250px. Другий: 100px + 100px = 200px. Третій: 100px + 200px = 300px. Четвертий: 100px + 150px = 250px.",
      },
    ],
  },
  {
    id: "css-flex-grow-zero",
    title: "Нульова жадібність flex-елементів",
    description:
      "Розглядаємо значення flex-grow: 0, яке не дозволяє flex-елементу брати участь у розподілі вільного простору контейнера.",
    content: [
      { type: "heading", text: "Що означає flex-grow: 0" },
      {
        type: "paragraph",
        text: "Якщо для flex-елемента flex-grow має значення 0, цей елемент не бере участі в розподілі вільного простору вздовж головної осі.",
      },
      {
        type: "paragraph",
        text: "Значення flex-grow за замовчуванням дорівнює 0. Тому flex-елементи без явно заданого flex-grow не збільшуються за рахунок вільного простору контейнера.",
      },
      {
        type: "paragraph",
        text: "Інші елементи, у яких flex-grow має значення більше за 0, можуть поділити між собою весь доступний вільний простір.",
      },
      { type: "heading", text: "Приклад із flex-grow: 0, 2 та 3" },
      {
        type: "paragraph",
        text: "Розглянемо контейнер шириною 500px і три flex-елементи шириною по 100px. Разом вони займають 300px, тому залишається 200px вільного простору.",
      },
      {
        type: "paragraph",
        text: "Перший елемент має flex-grow: 0, другий — flex-grow: 2, а третій — flex-grow: 3. Перший елемент не бере участі в розподілі, тому для розрахунку враховуються тільки значення 2 і 3.",
      },
      {
        type: "paragraph",
        text: "Сума значень flex-grow елементів, які беруть участь у розподілі, дорівнює 5. Одна одиниця flex-grow отримує 200px / 5 = 40px.",
      },
      {
        type: "list",
        items: [
          "Перший елемент: 100px + 0 × 40px = 100px.",
          "Другий елемент: 100px + 2 × 40px = 180px.",
          "Третій елемент: 100px + 3 × 40px = 220px.",
        ],
      },
      {
        type: "code",
        language: "html",
        code: `
<div class="parent">
  <div class="child elem1">1</div>
  <div class="child elem2">2</div>
  <div class="child elem3">3</div>
</div>`,
      },
      {
        type: "code",
        language: "css",
        code: `
.parent {
  display: flex;
  width: 500px;
  height: 200px;
  border: 1px solid red;
}

.child {
  height: 50px;
  border: 1px solid green;
}

.elem1 {
  width: 100px;
  flex-grow: 0;
}

.elem2 {
  width: 100px;
  flex-grow: 2;
}

.elem3 {
  width: 100px;
  flex-grow: 3;
}`,
      },
      {
        type: "example",
        title: "Результат",
        text: "Перший елемент залишається шириною 100px. Другий стає 180px, а третій — 220px. Вільні 200px розподіляються тільки між другим і третім елементами.",
      },
      {
        type: "heading",
        text: "flex-grow: 0 не означає, що елемент стає невидимим",
      },
      {
        type: "paragraph",
        text: "Значення flex-grow: 0 не змінює базовий розмір елемента на нуль і не приховує його. Воно лише означає, що елемент не отримує додатковий простір під час розподілу вільного простору.",
      },
      {
        type: "note",
        text: "Запам'ятайте: flex-grow: 0 означає «не збільшувати цей елемент за рахунок вільного простору». Це значення встановлене для flex-grow за замовчуванням.",
      },
      { type: "heading", text: "Практичне завдання 1" },
      {
        type: "task",
        text: [
          "Розрахуйте ширину кожного flex-елемента.",
          "Визначте вільний простір контейнера.",
          "Не враховуйте перший елемент під час розподілу, оскільки його flex-grow дорівнює 0.",
          "Розподіліть вільний простір між другим і третім елементами.",
          "Перевірте свої розрахунки в браузері.",
        ],
      },
      {
        type: "code",
        language: "html",
        code: `
<!-- Початковий код -->
<div class="parent">
  <div class="child elem1">1</div>
  <div class="child elem2">2</div>
  <div class="child elem3">3</div>
</div>`,
      },
      {
        type: "code",
        language: "css",
        code: `
.parent {
  display: flex;
  width: 500px;
  height: 200px;
  border: 1px solid red;
}

.child {
  height: 50px;
  border: 1px solid green;
}

.elem1 {
  width: 200px;
  flex-grow: 0;
}

.elem2 {
  width: 100px;
  flex-grow: 1;
}

.elem3 {
  width: 100px;
  flex-grow: 1;
}`,
      },
      {
        type: "hint",
        text: "Вільний простір дорівнює 500px - (200px + 100px + 100px). Перший елемент не бере участі в розподілі. Вільний простір потрібно поділити між двома елементами з flex-grow: 1.",
      },
      {
        type: "answer",
        text: "Вільний простір: 500px - 400px = 100px. Сума flex-grow для елементів, які беруть участь у розподілі: 1 + 1 = 2. Кожен отримує по 50px. Перший елемент: 200px. Другий: 100px + 50px = 150px. Третій: 100px + 50px = 150px.",
      },
      { type: "heading", text: "Практичне завдання 2" },
      {
        type: "task",
        text: [
          "Розрахуйте ширину кожного flex-елемента.",
          "Знайдіть вільний простір контейнера.",
          "Перший елемент має flex-grow: 0, тому він не бере участі в розподілі.",
          "Розподіліть вільний простір між другим і третім елементами у співвідношенні 3:2.",
          "Перевірте результат у браузері.",
        ],
      },
      {
        type: "code",
        language: "html",
        code: `
<!-- Початковий код -->
<div class="parent">
  <div class="child elem1">1</div>
  <div class="child elem2">2</div>
  <div class="child elem3">3</div>
</div>`,
      },
      {
        type: "code",
        language: "css",
        code: `
.parent {
  display: flex;
  width: 900px;
  height: 200px;
  border: 1px solid red;
}

.child {
  height: 50px;
  border: 1px solid green;
}

.elem1 {
  width: 300px;
  flex-grow: 0;
}

.elem2 {
  width: 200px;
  flex-grow: 3;
}

.elem3 {
  width: 100px;
  flex-grow: 2;
}`,
      },
      {
        type: "hint",
        text: "Спочатку знайдіть вільний простір: 900px - (300px + 200px + 100px). Потім знайдіть суму flex-grow тільки для другого і третього елементів: 3 + 2.",
      },
      {
        type: "answer",
        text: "Вільний простір: 900px - 600px = 300px. Сума flex-grow: 3 + 2 = 5. Одна одиниця: 300px / 5 = 60px. Перший елемент: 300px. Другий: 200px + 3 × 60px = 380px. Третій: 100px + 2 × 60px = 220px.",
      },
      { type: "heading", text: "Практичне завдання 3" },
      {
        type: "task",
        text: [
          "Розрахуйте ширину кожного з чотирьох flex-елементів.",
          "Визначте, які елементи беруть участь у розподілі вільного простору.",
          "Знайдіть вільний простір контейнера.",
          "Розподіліть його між елементами з flex-grow більше 0.",
          "Перевірте свої розрахунки в браузері.",
        ],
      },
      {
        type: "code",
        language: "html",
        code: `
<!-- Початковий код -->
<div class="parent">
  <div class="child elem1">1</div>
  <div class="child elem2">2</div>
  <div class="child elem3">3</div>
  <div class="child elem4">4</div>
</div>`,
      },
      {
        type: "code",
        language: "css",
        code: `
.parent {
  display: flex;
  width: 700px;
  height: 200px;
  border: 1px solid red;
}

.child {
  height: 50px;
  border: 1px solid green;
}

.elem1 {
  width: 200px;
  flex-grow: 0;
}

.elem2 {
  width: 200px;
  flex-grow: 0;
}

.elem3 {
  width: 100px;
  flex-grow: 1;
}

.elem4 {
  width: 100px;
  flex-grow: 1;
}`,
      },
      {
        type: "hint",
        text: "Перший і другий елементи не беруть участі в розподілі. Спочатку знайдіть вільний простір: 700px - (200px + 200px + 100px + 100px). Потім поділіть його між третім і четвертим елементами.",
      },
      {
        type: "answer",
        text: "Вільний простір: 700px - 600px = 100px. У розподілі беруть участь тільки третій і четвертий елементи. Сума flex-grow: 1 + 1 = 2. Кожен отримує по 50px. Перший елемент: 200px. Другий: 200px. Третій: 100px + 50px = 150px. Четвертий: 100px + 50px = 150px.",
      },
    ],
  },
  {
    id: "css-flex-grow-auto-width",
    title: "Жадібність без заданої ширини flex-елементів",
    description:
      "Розглядаємо поведінку flex-елементів без заданої ширини та дізнаємося, як flex-grow розподіляє вільний простір поверх розміру, сформованого вмістом.",
    content: [
      { type: "heading", text: "Ширина flex-елемента без width" },
      {
        type: "paragraph",
        text: "Якщо flex-елементу не задано width, його початковий розмір уздовж головної осі визначається його вмістом. Наприклад, елемент із довшим текстом займатиме більше місця, ніж елемент із коротким текстом.",
      },
      {
        type: "code",
        language: "html",
        code: `
<div class="parent">
  <div class="child elem1">text text text</div>
  <div class="child elem2">text</div>
</div>`,
      },
      {
        type: "code",
        language: "css",
        code: `
.parent {
  display: flex;
  width: 300px;
  height: 200px;
  border: 1px solid red;
}

.child {
  height: 50px;
  border: 1px solid green;
}`,
      },
      {
        type: "example",
        title: "Результат",
        text: "Ширина елементів формується їхнім вмістом. Елемент із текстом «text text text» займає більше місця, ніж елемент із текстом «text».",
      },
      { type: "heading", text: "flex-grow без заданої ширини" },
      {
        type: "paragraph",
        text: "Якщо для таких елементів задати flex-grow, вільний простір контейнера почне розподілятися між ними пропорційно до значень flex-grow.",
      },
      {
        type: "paragraph",
        text: "Важливо: flex-grow не встановлює однакову ширину елементів. Спочатку кожен елемент має свій базовий розмір, сформований вмістом, а потім елементи отримують додаткову частину вільного простору відповідно до flex-grow.",
      },
      {
        type: "code",
        language: "html",
        code: `
<div class="parent">
  <div class="child elem1">text text text</div>
  <div class="child elem2">text</div>
</div>`,
      },
      {
        type: "code",
        language: "css",
        code: `
.parent {
  display: flex;
  width: 300px;
  height: 200px;
  border: 1px solid red;
}

.child {
  height: 50px;
  border: 1px solid green;
}

.elem1 {
  flex-grow: 1;
}

.elem2 {
  flex-grow: 1;
}`,
      },
      {
        type: "example",
        title: "Результат",
        text: "Обидва елементи отримують однакову частину вільного простору, але їхні підсумкові ширини можуть залишатися різними, оскільки початкові розміри елементів, сформовані вмістом, різні.",
      },
      {
        type: "note",
        text: "flex-grow розподіляє саме вільний простір. Він не ігнорує початковий розмір елемента та не робить елементи однакової ширини автоматично.",
      },
      { type: "heading", text: "Практичне завдання 1" },
      {
        type: "task",
        text: [
          "Створіть flex-контейнер шириною 400px.",
          "Додайте два flex-елементи з різним за довжиною текстом.",
          "Не задавайте елементам width.",
          "Подивіться, як ширина елементів формується на основі їхнього вмісту.",
          "Додайте обом елементам flex-grow: 1.",
          "Порівняйте ширини елементів до та після додавання flex-grow.",
        ],
      },
      {
        type: "code",
        language: "html",
        code: `
<!-- Початковий код -->
<div class="parent">
  <div class="child elem1">Це довший текст</div>
  <div class="child elem2">Текст</div>
</div>`,
      },
      {
        type: "hint",
        text: "Не задавайте width для .child. Спочатку подивіться на початкові розміри, а потім додайте flex-grow: 1 до обох елементів.",
      },
      {
        type: "answer",
        text: `
.parent {
  display: flex;
  width: 400px;
}

.child {
  height: 50px;
  border: 1px solid green;
}

.elem1 {
  flex-grow: 1;
}

.elem2 {
  flex-grow: 1;
}`,
      },
      { type: "heading", text: "Практичне завдання 2" },
      {
        type: "task",
        text: [
          "Створіть flex-контейнер шириною 400px.",
          "Додайте два елементи без заданої width.",
          "Задайте першому елементу flex-grow: 1.",
          "Задайте другому елементу flex-grow: 3.",
          "Порівняйте підсумкові ширини елементів.",
          "Зверніть увагу, що flex-grow: 3 дає другому елементу втричі більшу частину вільного простору.",
        ],
      },
      {
        type: "code",
        language: "html",
        code: `
<!-- Початковий код -->
<div class="parent">
  <div class="child elem1">Короткий текст</div>
  <div class="child elem2">Текст</div>
</div>`,
      },
      {
        type: "hint",
        text: "Не задавайте width. Використайте flex-grow: 1 для першого елемента та flex-grow: 3 для другого.",
      },
      {
        type: "answer",
        text: `
.parent {
  display: flex;
  width: 400px;
}

.child {
  height: 50px;
  border: 1px solid green;
}

.elem1 {
  flex-grow: 1;
}

.elem2 {
  flex-grow: 3;
}`,
      },
    ],
  },
  {
    id: "css-flex-grow-fixed-width",
    title: "Жадібність flex-елемента при заданій ширині",
    description:
      "Розглядаємо, як flex-grow дозволяє одному flex-елементу займати весь вільний простір, коли ширина інших елементів задана явно.",
    content: [
      { type: "heading", text: "flex-grow та елементи із заданою шириною" },
      {
        type: "paragraph",
        text: "Якщо кільком flex-елементам задати фіксовану ширину, а одному з них встановити flex-grow: 1 без заданої width, цей елемент отримає весь вільний простір, який залишиться в контейнері.",
      },
      {
        type: "code",
        language: "html",
        code: `
<div class="parent">
 <div class="child elem1"></div>
 <div class="child elem2"></div>
 <div class="child elem3"></div>
</div>`,
      },
      {
        type: "code",
        language: "css",
        code: `
.parent {
  display: flex;
  width: 400px;
  height: 200px;
  border: 1px solid red;
}

.child {
  height: 50px; border: 1px solid green;
}
  
.elem1 {
  width: 100px;
}
.elem2 {
  flex-grow: 1;
}
  
.elem3 {
width: 100px;
}`,
      },
      {
        type: "example",
        title: "Результат",
        text: "Контейнер має ширину 400px. Перший і третій елементи займають по 100px, а другий елемент із flex-grow: 1 займає весь простір, що залишився.",
      },
      {
        type: "paragraph",
        text: "У спрощеному прикладі вільний простір становить 200px: 400px − 100px − 100px. Саме цей простір отримує елемент із flex-grow: 1.",
      },
      {
        type: "note",
        text: "flex-grow не змінює ширину елементів, яким явно задано width у цьому прикладі. Він визначає, як розподілити вільний простір між flex-елементами, які можуть його отримати.",
      },
      { type: "heading", text: "Плаваюча ширина при зміні контейнера" },
      {
        type: "paragraph",
        text: "Особливо зручно використовувати таку схему, коли ширина батьківського контейнера задається у відсотках. Тоді ширина контейнера може змінюватися разом із доступним простором, а flex-елемент із flex-grow автоматично займає весь вільний простір.",
      },
      {
        type: "code",
        language: "css",
        code: `
.parent {
  display: flex;
  width: 80%;
  border: 1px solid red;
}
  
.elem1 {
  width: 100px;
}
  
.elem2 {
  flex-grow: 1;
}
  
.elem3 {
  width: 100px;
}`,
      },
      {
        type: "example",
        title: "Результат",
        text: "Під час зміни ширини батьківського контейнера перший і третій елементи зберігають задану ширину, а другий елемент автоматично розтягується або стискається відповідно до доступного простору.",
      },
      {
        type: "note",
        text: "Це зручно для створення гнучких макетів: частина елементів має фіксований розмір, а один або кілька flex-елементів займають увесь простір, що залишився.",
      },
      { type: "heading", text: "Практичне завдання 1" },
      {
        type: "task",
        text: [
          "Створіть flex-контейнер шириною 500px.",
          "Додайте три flex-елементи.",
          "Першому та третьому елементам задайте width: 100px.",
          "Другому елементу задайте flex-grow: 1.",
          "Подивіться, як другий елемент займає весь вільний простір.",
        ],
      },
      {
        type: "code",
        language: "html",
        code: `
        <!-- Початковий код -->
<div class="parent">
  <div class="child elem1"></div>
  <div class="child elem2"></div>
  <div class="child elem3"></div>
</div>`,
      },
      {
        type: "hint",
        text: "Задайте першому та третьому елементам width: 100px, а другому — flex-grow: 1.",
      },
      {
        type: "answer",
        text: `.parent { display: flex; width: 500px; } .child { height: 50px; border: 1px solid green; } .elem1 { width: 100px; } .elem2 { flex-grow: 1; } .elem3 { width: 100px; }`,
      },
      { type: "heading", text: "Практичне завдання 2" },
      {
        type: "task",
        text: [
          "Задайте батьківському контейнеру ширину 80%.",
          "Створіть три flex-елементи.",
          "Першому та третьому елементам задайте width: 120px.",
          "Другому елементу задайте flex-grow: 1.",
          "Змінюйте ширину вікна браузера та спостерігайте за поведінкою елементів.",
        ],
      },
      {
        type: "code",
        language: "html",
        code: `
        <!-- Початковий код -->
<div class="parent">
  <div class="child elem1"></div>
  <div class="child elem2"></div>
  <div class="child elem3"></div>
</div>`,
      },
      {
        type: "hint",
        text: "Для контейнера використайте width: 80%. Фіксовану ширину задайте першому та третьому елементам, а для другого використайте flex-grow: 1.",
      },
      {
        type: "answer",
        text: `
.parent {
  display: flex;
  width: 80%;
}
  
.child {
  height: 50px;
  border: 1px solid green;
}
  
.elem1 {
  width: 120px;
}
  
.elem2 {
  flex-grow: 1;
}
  
.elem3 {
  width: 120px;
}`,
      },
    ],
  },
  {
    id: "css-flex-shrink",
    title: "Стискання flex-елементів при нестачі місця",
    description:
      "Розглядаємо властивість flex-shrink, яка визначає, як flex-елементи стискаються, коли їхня сумарна ширина перевищує доступний простір контейнера.",
    content: [
      {
        type: "heading",
        text: "Що відбувається, коли елементам не вистачає місця",
      },
      {
        type: "paragraph",
        text: "Уявімо flex-контейнер шириною 300px із трьома елементами по 100px. Загальна ширина елементів дорівнює ширині контейнера, тому всі вони поміщаються в один ряд.",
      },
      {
        type: "code",
        language: "html",
        code: `
<div class="parent">
  <div class="child">1</div>
  <div class="child">2</div>
  <div class="child">3</div>
</div>`,
      },
      {
        type: "code",
        language: "css",
        code: `
.parent {
  display: flex;
  width: 300px;
  border: 1px solid red;
}
  
.child {
  width: 100px;
  height: 50px;
  border: 1px solid green;
}`,
      },
      {
        type: "example",
        title: "Результат",
        text: "Три елементи по 100px займають усі 300px контейнера.",
      },
      { type: "heading", text: "Додаємо більше елементів" },
      {
        type: "paragraph",
        text: "Тепер додамо ще один елемент шириною 100px. Загальна задана ширина становитиме 400px, але контейнер має лише 300px.",
      },
      {
        type: "code",
        language: "html",
        code: `
<div class="parent">
   <div class="child">1</div>
   <div class="child">2</div>
   <div class="child">3</div>
   <div class="child">4</div>
</div>`,
      },
      {
        type: "example",
        title: "Результат",
        text: "Попри те, що кожному елементу задано width: 100px, елементи за замовчуванням можуть стиснутися, щоб поміститися в доступний простір flex-контейнера.",
      },
      { type: "heading", text: "Властивість flex-shrink" },
      {
        type: "paragraph",
        text: "За стискання flex-елементів відповідає властивість flex-shrink. Її значення визначає, наскільки елемент може стискатися, коли для всіх елементів недостатньо місця.",
      },
      {
        type: "code",
        language: "css",
        code: `
.child {
  width: 100px;
  flex-shrink: 1;
}`,
      },
      {
        type: "paragraph",
        text: "Значення flex-shrink: 1 є значенням за замовчуванням. Тому flex-елементи можуть стискатися, навіть якщо їм явно задано width.",
      },
      {
        type: "note",
        text: "Не плутайте width із гарантованою шириною flex-елемента. Усередині flex-контейнера width бере участь у формуванні базового розміру, але flexbox може змінити підсумковий розмір елемента через flex-shrink.",
      },
      { type: "heading", text: "Як заборонити стискання" },
      {
        type: "paragraph",
        text: "Якщо потрібно, щоб елемент не стискався, можна встановити flex-shrink: 0.",
      },
      {
        type: "code",
        language: "css",
        code: `
.child {
  width: 100px;
  flex-shrink: 0;
}`,
      },
      {
        type: "paragraph",
        text: "У такому випадку елемент намагатиметься зберегти свій базовий розмір. Якщо місця в контейнері недостатньо, елементи можуть вийти за межі контейнера.",
      },
      { type: "heading", text: "Різне значення flex-shrink" },
      {
        type: "paragraph",
        text: "Для різних елементів можна встановити різні значення flex-shrink. Елементи з більшим значенням мають більшу частку негативного вільного простору, але фактичне стискання залежить також від їхніх базових розмірів та інших обмежень.",
      },
      {
        type: "code",
        language: "css",
        code: `
.elem1 {
  flex-shrink: 1;
}

.elem2 {
  flex-shrink: 2;
}
  
.elem3 {
  flex-shrink: 1;
}`,
      },
      {
        type: "note",
        text: "Для початкового вивчення достатньо запам'ятати: flex-grow розподіляє додатковий вільний простір, а flex-shrink визначає поведінку елементів, коли простору недостатньо.",
      },
      { type: "heading", text: "Практичне завдання 1" },
      {
        type: "task",
        text: [
          "Створіть flex-контейнер шириною 300px.",
          "Додайте чотири елементи шириною 100px.",
          "Подивіться, як flex-елементи стискаються, щоб поміститися в контейнер.",
          "Потім встановіть для всіх елементів flex-shrink: 0.",
          "Порівняйте результат.",
        ],
      },
      {
        type: "code",
        language: "html",
        code: `
        <!-- Початковий код -->
<div class="parent">
  <div class="child">1</div>
  <div class="child">2</div>
  <div class="child">3</div>
  <div class="child">4</div>
</div>`,
      },
      {
        type: "hint",
        text: "Спочатку нічого не змінюйте у flex-shrink. Потім додайте .child { flex-shrink: 0; } і подивіться, що станеться.",
      },
      {
        type: "answer",
        text: `
.parent {
  display: flex; width: 300px;
}
  
.child {
  width: 100px;
  height: 50px;
  border: 1px solid green;
  flex-shrink: 0;
}`,
      },
      { type: "heading", text: "Практичне завдання 2" },
      {
        type: "task",
        text: [
          "Створіть контейнер шириною 300px.",
          "Додайте три елементи шириною 150px.",
          "Першому елементу залиште flex-shrink: 1.",
          "Другому елементу задайте flex-shrink: 2.",
          "Третьому елементу задайте flex-shrink: 1.",
          "Порівняйте, як елементи розподіляють нестачу простору.",
        ],
      },
      {
        type: "code",
        language: "html",
        code: `
        <!-- Початковий код -->
<div class="parent">
  <div class="child elem1">1</div>
  <div class="child elem2">2</div>
  <div class="child elem3">3</div>
</div>`,
      },
      {
        type: "hint",
        text: "Використайте flex-shrink: 1 для першого і третього елементів та flex-shrink: 2 для другого.",
      },
      {
        type: "answer",
        text: `
.parent {
  display: flex; width: 300px;
}
  
.child {
  width: 150px;
  height: 50px;
  border: 1px solid green;
}
.elem1 {
  flex-shrink: 1;
}
  
.elem2 {
  flex-shrink: 2;
}
  
.elem3 {
  flex-shrink: 1;
}`,
      },
    ],
  },
  {
    id: "css-flex-shrink-percentage-parent",
    title: "Вплив ширини батьківського контейнера на стискання flex-елементів",
    description:
      "Розглядаємо, як відсоткова ширина flex-контейнера впливає на стискання його елементів, коли їхня сумарна ширина перевищує доступний простір.",
    content: [
      { type: "heading", text: "Flex-контейнер із шириною у відсотках" },
      {
        type: "paragraph",
        text: "Якщо ширину flex-контейнера задати у відсотках, його фактична ширина залежатиме від ширини батьківського елемента або доступного простору. Тому під час зміни ширини вікна браузера ширина flex-контейнера також може змінюватися.",
      },
      {
        type: "code",
        language: "html",
        code: `
<div class="parent">
  <div class="child">1</div>
  <div class="child">2</div>
  <div class="child">3</div>
  <div class="child">4</div>
  <div class="child">5</div>
</div>`,
      },
      {
        type: "code",
        language: "css",
        code: `
.parent {
  display: flex;
  width: 100%;
  border: 1px solid red;
}
  
.child {
  width: 100px;
  height: 50px;
  border: 1px solid green;
}`,
      },
      {
        type: "example",
        title: "Коли місця достатньо",
        text: "П'ять елементів мають базову ширину по 100px. Разом їм потрібно 500px. Якщо контейнер має ширину 500px або більше, стискання не потрібне.",
      },
      { type: "heading", text: "Що відбувається при зменшенні вікна" },
      {
        type: "paragraph",
        text: "Зменшимо ширину вікна браузера. Оскільки контейнер має width: 100%, його ширина також зменшиться. Коли вона стане меншою за 500px, п'ять елементів по 100px вже не зможуть поміститися без зміни їхнього розміру.",
      },
      {
        type: "example",
        title: "Наприклад",
        text: "Якщо контейнер став шириною 400px, а п'ятьом елементам потрібно 500px, flexbox має компенсувати нестачу 100px. За замовчуванням flex-shrink: 1, тому елементи можуть стиснутися.",
      },
      {
        type: "paragraph",
        text: "У спрощеному випадку, коли всі п'ять елементів мають однаковий базовий розмір і однаковий flex-shrink: 1, нестача простору розподіляється між ними, тому їхня підсумкова ширина буде меншою за 100px.",
      },
      {
        type: "code",
        language: "css",
        code: `
.child {
  width: 100px;
  flex-shrink: 1;
}`,
      },
      {
        type: "note",
        text: "flex-shrink має значення 1 за замовчуванням. Тому flex-елементи можуть автоматично стискатися, коли їхні базові розміри не поміщаються в контейнер.",
      },
      { type: "heading", text: "Забороняємо стискання" },
      {
        type: "paragraph",
        text: "Якщо потрібно зберегти базову ширину елементів, можна заборонити їхнє стискання за допомогою flex-shrink: 0.",
      },
      {
        type: "code",
        language: "css",
        code: `
.child {
  width: 100px;
  flex-shrink: 0;
}`,
      },
      {
        type: "example",
        title: "Результат",
        text: "Коли контейнер стає вужчим за 500px, елементи більше не стискаються. Їхня сумарна ширина залишається 500px, тому вони можуть не поміститися в контейнер і вийти за його межі.",
      },
      {
        type: "note",
        text: "Якщо потрібно, щоб елементи переносилися на новий рядок замість стискання або виходу за межі контейнера, можна використовувати flex-wrap: wrap.",
      },
      { type: "heading", text: "Практичне завдання 1" },
      {
        type: "task",
        text: [
          "Створіть flex-контейнер шириною 100%.",
          "Додайте п'ять елементів.",
          "Задайте кожному елементу width: 100px.",
          "Зменшуйте ширину вікна браузера.",
          "Спостерігайте, як елементи поступово стискаються, коли контейнер стає вужчим за 500px.",
        ],
      },
      {
        type: "code",
        language: "html",
        code: `
        <!-- Початковий код -->
<div class="parent">
  <div class="child">1</div>
  <div class="child">2</div>
  <div class="child">3</div>
  <div class="child">4</div>
  <div class="child">5</div>
</div>`,
      },
      {
        type: "hint",
        text: "Задайте контейнеру width: 100%, а кожному елементу width: 100px. Не вимикайте flex-shrink.",
      },
      {
        type: "answer",
        text: `
.parent {
  display: flex; width: 100%;
}
  
.child {
  width: 100px;
  height: 50px;
  border: 1px solid green;
}`,
      },
      { type: "heading", text: "Практичне завдання 2" },
      {
        type: "task",
        text: [
          "Використайте ті самі п'ять елементів шириною 100px.",
          "Задайте контейнеру width: 100%.",
          "Забороніть стискання елементів за допомогою flex-shrink: 0.",
          "Зменшіть ширину вікна браузера менше ніж до 500px.",
          "Порівняйте результат із попереднім завданням.",
        ],
      },
      {
        type: "code",
        language: "html",
        code: `
      <!-- Початковий код -->
<div class="parent">
  <div class="child">1</div>
  <div class="child">2</div>
  <div class="child">3</div>
  <div class="child">4</div>
  <div class="child">5</div>
</div>`,
      },
      {
        type: "hint",
        text: "Додайте flex-shrink: 0 до .child і порівняйте поведінку елементів при вузькому контейнері.",
      },
      {
        type: "answer",
        text: `
.parent {
  display: flex; width: 100%;
}
  
.child {
  width: 100px;
  height: 50px;
  border: 1px solid green;
  flex-shrink: 0;
}`,
      },
    ],
  },
  {
    id: "css-flex-shrink-different-widths",
    title: "Вплив різної ширини flex-елементів на стискання",
    description:
      "Розглядаємо, як різні початкові ширини flex-елементів впливають на їхнє стискання при нестачі вільного простору.",
    content: [
      { type: "heading", text: "Елементи з різною шириною" },
      {
        type: "paragraph",
        text: "Уявімо п'ять flex-елементів. Чотири з них мають ширину 100px, а другий елемент — 150px. Загальна базова ширина всіх елементів становить 550px.",
      },
      {
        type: "code",
        language: "html",
        code: `
<div class="parent">
  <div class="child elem1">1</div>
  <div class="child elem2">2</div>
  <div class="child elem3">3</div>
  <div class="child elem4">4</div>
  <div class="child elem5">5</div>
</div>`,
      },
      {
        type: "code",
        language: "css",
        code: `
.parent {
  display: flex;
  width: 100%;
  border: 1px solid red;
}
  
.child {
  width: 100px;
  height: 50px;
  border: 1px solid green;
}
  
.elem2 {
  width: 150px;
}`,
      },
      {
        type: "example",
        title: "Початковий результат",
        text: "Другий елемент має базову ширину 150px, а всі інші — по 100px. Тобто другий елемент у 1,5 раза ширший за кожен інший.",
      },
      { type: "heading", text: "Що відбувається при нестачі місця" },
      {
        type: "paragraph",
        text: "Коли ширина контейнера стає меншою за 550px, усім елементам уже не вистачає місця. Оскільки flex-shrink: 1 встановлено за замовчуванням, flexbox починає стискати елементи.",
      },
      {
        type: "paragraph",
        text: "Важливо, що стискання залежить не лише від значення flex-shrink, а й від базового розміру елемента. Якщо значення flex-shrink однакове, більший елемент бере на себе більшу частину зменшення.",
      },
      {
        type: "code",
        language: "css",
        code: `
.child {
   width: 100px;
   flex-shrink: 1;
}
   
.elem2 {
  width: 150px;
  flex-shrink: 1;
}`,
      },
      {
        type: "example",
        title: "Результат",
        text: "Усі елементи стають меншими за свої початкові розміри. Другий елемент при цьому залишається більшим за інші, якщо простору все ще достатньо для збереження різниці між їхніми базовими розмірами.",
      },
      { type: "heading", text: "Чому більший елемент стискається сильніше" },
      {
        type: "paragraph",
        text: "При однаковому flex-shrink більший базовий розмір означає більшу частку негативного вільного простору. Тому елемент шириною 150px може втратити більше пікселів, ніж елемент шириною 100px.",
      },
      {
        type: "example",
        title: "Спрощений приклад",
        text: "Якщо потрібно зменшити сумарну ширину елементів на 110px, елементи з однаковим flex-shrink стискатимуться пропорційно своїм базовим розмірам. Тому елемент 150px втратить більше ширини, ніж елемент 100px.",
      },
      {
        type: "note",
        text: "Для точного розрахунку flexbox використовує не просто співвідношення flex-shrink, а добуток flex-shrink на базовий розмір елемента. Тому при однаковому flex-shrink більші елементи стискаються сильніше.",
      },
      { type: "heading", text: "При дуже сильному стисканні" },
      {
        type: "paragraph",
        text: "Якщо контейнер стає дуже вузьким, різниця між розмірами елементів може значно зменшитися. Крім того, на фактичний результат можуть впливати мінімальні розміри, вміст та інші обмеження flex-елементів.",
      },
      {
        type: "note",
        text: "Не варто сприймати правило про збереження співвідношення 1,5:1 як абсолютне. У реальному flexbox результат залежить від базових розмірів, flex-shrink, min-width, max-width, вмісту та інших властивостей.",
      },
      { type: "heading", text: "Практичне завдання 1" },
      {
        type: "task",
        text: [
          "Створіть flex-контейнер шириною 100%.",
          "Додайте п'ять елементів.",
          "Задайте всім елементам width: 100px.",
          "Другому елементу задайте width: 150px.",
          "Зменшуйте ширину вікна браузера.",
          "Спостерігайте, як елементи стискаються при нестачі місця.",
        ],
      },
      {
        type: "code",
        language: "html",
        code: `
    <!-- Початковий код -->
<div class="parent">
  <div class="child elem1">1</div>
  <div class="child elem2">2</div>
  <div class="child elem3">3</div>
  <div class="child elem4">4</div>
  <div class="child elem5">5</div>
</div>`,
      },
      {
        type: "hint",
        text: "Задайте всім .child width: 100px, а для .elem2 перевизначте ширину: 150px. Не вимикайте flex-shrink.",
      },
      {
        type: "answer",
        text: `
.parent {
  display: flex;
  width: 100%;
}
  
.child {
  width: 100px;
  height: 50px;
  border: 1px solid green;
}
  
.elem2 {
  width: 150px;
}`,
      },
      { type: "heading", text: "Практичне завдання 2" },
      {
        type: "task",
        text: [
          "Створіть flex-контейнер шириною 400px.",
          "Додайте три flex-елементи.",
          "Першому та третьому елементам задайте width: 100px.",
          "Другому елементу задайте width: 200px.",
          "Задайте всім елементам flex-shrink: 1.",
          "Поступово зменшуйте ширину контейнера та спостерігайте за стисканням.",
        ],
      },
      {
        type: "code",
        language: "html",
        code: `
        <!-- Початковий код -->
<div class="parent">
  <div class="child elem1">1</div>
  <div class="child elem2">2</div>
  <div class="child elem3">3</div>
</div>`,
      },
      {
        type: "hint",
        text: "Задайте ширини 100px, 200px і 100px. Для всіх елементів використайте flex-shrink: 1.",
      },
      {
        type: "answer",
        text: `
.parent {
  display: flex;
  width: 400px;
}
  
.child {
  height: 50px;
  border: 1px solid green;
  flex-shrink: 1;
}
  
.elem1 {
  width: 100px;
}
  
.elem2 {
  width: 200px;
}
  
.elem3 {
  width: 100px;
}`,
      },
    ],
  },
  {
    id: "css-flex-grow-shrink",
    title: "Вплив flex-grow на стискання flex-елементів",
    description:
      "Розглядаємо взаємодію flex-grow і flex-shrink та дізнаємося, чому співвідношення розмірів flex-елементів може змінюватися при сильному стисканні контейнера.",
    content: [
      { type: "heading", text: "flex-grow замість width" },
      {
        type: "paragraph",
        text: "Розглянемо п'ять flex-елементів без заданої width. Замість ширини використаємо flex-grow: 1 для більшості елементів, а другому елементу задамо flex-grow: 3.",
      },
      {
        type: "code",
        language: "html",
        code: `
<div class="parent">
  <div class="child elem1">1</div>
  <div class="child elem2">2</div>
  <div class="child elem3">3</div>
  <div class="child elem4">4</div>
  <div class="child elem5">5</div>
</div>`,
      },
      {
        type: "code",
        language: "css",
        code: `
.parent {
  display: flex;
  width: 100%;
  border: 1px solid red;
}
  
.child {
  height: 50px;
  border: 1px solid green;
  flex-grow: 1;
}
  
.elem2 {
  flex-grow: 3;
}`,
      },
      { type: "heading", text: "Як працює flex-grow" },
      {
        type: "paragraph",
        text: "flex-grow визначає, яку частину додаткового вільного простору може отримати елемент. У цьому прикладі перший, третій, четвертий і п'ятий елементи мають коефіцієнт 1, а другий — 3.",
      },
      {
        type: "example",
        title: "Результат",
        text: "Коли в контейнері є достатньо вільного простору, другий елемент отримує втричі більшу частку додаткового простору, ніж кожен елемент із flex-grow: 1.",
      },
      {
        type: "note",
        text: "flex-grow працює саме з додатковим вільним простором. Він не означає, що підсумкова ширина другого елемента завжди буде рівно втричі більшою за ширину інших.",
      },
      { type: "heading", text: "Що відбувається при сильному стисканні" },
      {
        type: "paragraph",
        text: "Коли ширина контейнера зменшується, вільного простору стає все менше. У певний момент його вже недостатньо, і flexbox переходить до стискання елементів відповідно до flex-shrink.",
      },
      {
        type: "code",
        language: "css",
        code: `
.child {
  flex-grow: 1;
  flex-shrink: 1;
}
  
.elem2 {
  flex-grow: 3;
}`,
      },
      {
        type: "paragraph",
        text: "За замовчуванням flex-shrink дорівнює 1. Тому, коли елементам не вистачає місця, вони можуть стискатися. Саме в цей момент співвідношення, сформоване flex-grow, перестає визначати підсумкові розміри.",
      },
      {
        type: "example",
        title: "Результат при вузькому контейнері",
        text: "При сильному стисканні другий елемент уже не обов'язково буде втричі ширшим за інші. Його розмір залежатиме від поточного базового розміру та правил стискання flexbox.",
      },
      { type: "heading", text: "Grow і shrink працюють у різних ситуаціях" },
      {
        type: "list",
        items: [
          "flex-grow використовується для розподілу додаткового простору.",
          "flex-shrink використовується для розподілу нестачі простору.",
          "flex-grow: 3 не означає, що елемент завжди буде втричі ширшим.",
          "При сильному стисканні результат може суттєво відрізнятися від початкового співвідношення.",
        ],
      },
      {
        type: "note",
        text: "Зручно запам'ятати: grow відповідає на запитання «кому дати більше вільного місця?», а shrink — «як зменшити елементи, коли місця недостатньо?».",
      },
      { type: "heading", text: "Практичне завдання 1" },
      {
        type: "task",
        text: [
          "Створіть flex-контейнер шириною 100%.",
          "Додайте п'ять flex-елементів.",
          "Не задавайте елементам width.",
          "Для всіх елементів встановіть flex-grow: 1.",
          "Другому елементу встановіть flex-grow: 3.",
          "Розширюйте та звужуйте вікно браузера.",
          "Спостерігайте, як змінюється співвідношення розмірів елементів.",
        ],
      },
      {
        type: "code",
        language: "html",
        code: `
        <!-- Початковий код -->
<div class="parent">
  <div class="child elem1">1</div>
  <div class="child elem2">2</div>
  <div class="child elem3">3</div>
  <div class="child elem4">4</div>
  <div class="child elem5">5</div>
</div>`,
      },
      {
        type: "hint",
        text: "Для всіх .child використайте flex-grow: 1, а для .elem2 перевизначте його значення на 3. Не задавайте width.",
      },
      {
        type: "answer",
        text: `
.parent {
  display: flex;
  width: 100%;
}
  
.child {
  height: 50px;
  border: 1px solid green;
  flex-grow: 1;
}
  
.elem2 {
  flex-grow: 3;
}`,
      },
      { type: "heading", text: "Практичне завдання 2" },
      {
        type: "task",
        text: [
          "Створіть flex-контейнер шириною 100%.",
          "Додайте три flex-елементи без заданої width.",
          "Першому та третьому елементам встановіть flex-grow: 1.",
          "Другому елементу встановіть flex-grow: 4.",
          "Змінюйте ширину вікна браузера.",
          "Зверніть увагу, що при достатній ширині другий елемент отримує більшу частину вільного простору, але при сильному стисканні співвідношення може змінюватися.",
        ],
      },
      {
        type: "code",
        language: "html",
        code: `
        <!-- Початковий код -->
<div class="parent">
  <div class="child elem1">Перший</div>
  <div class="child elem2">Другий</div>
  <div class="child elem3">Третій</div>
</div>`,
      },
      {
        type: "hint",
        text: "Не задавайте width. Використайте flex-grow: 1 для першого й третього елементів та flex-grow: 4 для другого.",
      },
      {
        type: "answer",
        text: `
.parent {
  display: flex;
  width: 100%;
}
  
.child {
  height: 50px;
  border: 1px solid green;
  flex-grow: 1;
}
  
.elem2 {
  flex-grow: 4;
}`,
      },
    ],
  },
  {
    id: "css-flex-shrink-factor",
    title: "Фактор стискання flex-елементів",
    description:
      "Розбираємо від'ємний вільний простір та принцип розподілу стискання flex-елементів, коли їхня сумарна ширина перевищує ширину контейнера.",
    content: [
      { type: "heading", text: "Що таке від'ємний вільний простір" },
      {
        type: "paragraph",
        text: "Коли сумарний базовий розмір flex-елементів більший за доступний простір контейнера, виникає від'ємний вільний простір. Flexbox має зменшити розміри елементів, щоб вони могли поміститися в контейнер.",
      },
      {
        type: "paragraph",
        text: "Від'ємний вільний простір можна знайти як різницю між сумарною шириною flex-елементів і шириною контейнера.",
      },
      { type: "heading", text: "Простий розрахунок" },
      {
        type: "paragraph",
        text: "Нехай є чотири елементи шириною по 200px, а ширина контейнера становить 700px.",
      },
      {
        type: "code",
        language: "text",
        code: `
200px × 4 = 800px
800px − 700px = 100px`,
      },
      {
        type: "paragraph",
        text: "Сумарна ширина елементів на 100px більша за ширину контейнера. Отже, потрібно розподілити 100px стискання між елементами.",
      },
      {
        type: "code",
        language: "text",
        code: `100px ÷ 4 = 25px`,
      },
      {
        type: "paragraph",
        text: "Якщо всі елементи мають однаковий базовий розмір і однаковий flex-shrink, у цьому спрощеному прикладі кожен елемент втратить по 25px.",
      },
      {
        type: "code",
        language: "text",
        code: `200px − 25px = 175px`,
      },
      {
        type: "example",
        title: "Результат",
        text: "Кожен із чотирьох елементів матиме ширину 175px. Разом вони займуть 700px і помістяться в контейнер.",
      },
      { type: "heading", text: "Роль flex-shrink" },
      {
        type: "paragraph",
        text: "За можливість стискання відповідає властивість flex-shrink. Її значення за замовчуванням дорівнює 1.",
      },
      {
        type: "code",
        language: "css",
        code: `
.child {
  width: 200px;
  flex-shrink: 1;
}`,
      },
      {
        type: "paragraph",
        text: "Якщо для всіх елементів flex-shrink однаковий, то при однакових базових розмірах їхнє стискання буде однаковим.",
      },
      {
        type: "note",
        text: "У реальному алгоритмі Flexbox стискання розподіляється не просто порівну. Враховується добуток flex-shrink на базовий розмір елемента. Тому елементи різного базового розміру можуть стискатися на різну кількість пікселів.",
      },
      { type: "heading", text: "Практичне завдання 1" },
      {
        type: "task",
        text: [
          "Створіть flex-контейнер шириною 700px.",
          "Додайте чотири flex-елементи.",
          "Задайте кожному елементу width: 200px.",
          "Задайте однакову висоту та межу для наочності.",
          "Перед перевіркою розрахуйте очікувану ширину кожного елемента.",
          "Перевірте ширину елементів за допомогою DevTools браузера.",
        ],
      },
      {
        type: "code",
        language: "html",
        code: `
        <!-- Початковий код -->
<div class="parent">
  <div class="child">1</div>
  <div class="child">2</div>
  <div class="child">3</div>
  <div class="child">4</div>
</div>`,
      },
      {
        type: "hint",
        text: "Спочатку знайдіть сумарну ширину чотирьох елементів, потім визначте від'ємний вільний простір і поділіть його між елементами.",
      },
      {
        type: "answer",
        text: `
.parent {
  display: flex;
  width: 700px;
  height: 200px;
  border: 1px solid red;
}
  
.child {
  width: 200px;
  height: 50px;
  border: 1px solid green;
}`,
      },
      {
        type: "example",
        title: "Перевірка",
        text: "Сумарна базова ширина — 800px. Від'ємний вільний простір — 100px. За однакового flex-shrink і однакових базових розмірів кожен елемент стискається на 25px, тому очікувана ширина — 175px.",
      },
      { type: "heading", text: "Практичне завдання 2" },
      {
        type: "task",
        text: [
          "Створіть flex-контейнер шириною 200px.",
          "Додайте три елементи.",
          "Кожному елементу задайте width: 100px.",
          "Не змінюйте значення flex-shrink.",
          "До запуску коду розрахуйте, якою приблизно буде ширина кожного елемента.",
          "Перевірте свій розрахунок за допомогою DevTools.",
        ],
      },
      {
        type: "code",
        language: "html",
        code: `
        <!-- Початковий код -->
<div class="parent">
  <div class="child elem1">1</div>
  <div class="child elem2">2</div>
  <div class="child elem3">3</div>
</div>`,
      },
      {
        type: "hint",
        text: "Спочатку порахуйте сумарну ширину трьох елементів, потім визначте, скільки пікселів не вистачає контейнеру, і розподіліть цю нестачу між трьома однаковими елементами.",
      },
      {
        type: "answer",
        text: `
.parent {
  display: flex;
  width: 200px;
  height: 200px;
  border: 1px solid red;
}
  
.child {
  height: 50px;
  border: 1px solid green;
}
  
.elem1 {
  width: 100px;
}
  
.elem2 {
  width: 100px;
}
  
.elem3 {
  width: 100px;
}`,
      },
      {
        type: "example",
        title: "Перевірка",
        text: "Сумарна базова ширина — 300px. Від'ємний вільний простір — 100px. За однакових базових розмірів і flex-shrink: 1 кожен елемент у спрощеному розрахунку втратить приблизно 33,33px, тому його ширина становитиме приблизно 66,67px.",
      },
    ],
  },

  {
    id: "css-flex-shrink-proportional",
    title: "Різна ширина елементів і їхнє стискання",
    description:
      "Розглядаємо, як Flexbox розподіляє від'ємний вільний простір між елементами з різними базовими розмірами.",
    content: [
      { type: "heading", text: "Чому елементи стискаються по-різному" },
      {
        type: "paragraph",
        text: "Якщо flex-елементи мають однакову ширину, за однакового flex-shrink вони в простому випадку стискаються на однакову кількість пікселів. Але якщо їхні базові ширини різні, більший елемент отримує більшу частку стискання.",
      },
      {
        type: "paragraph",
        text: "У спрощеному випадку, коли всі елементи мають однаковий flex-shrink, частину від'ємного вільного простору для конкретного елемента можна розрахувати за формулою:",
      },
      {
        type: "code",
        language: "text",
        code: `
        частка стискання = від'ємний вільний простір × (базовий розмір елемента / сумарний базовий розмір)`,
      },
      { type: "heading", text: "Приклад із чотирма елементами" },
      {
        type: "paragraph",
        text: "Нехай є чотири елементи. Перший має ширину 400px, а три інші — по 200px. Ширина контейнера становить 900px.",
      },
      {
        type: "code",
        language: "text",
        code: `
        400px + 200px + 200px + 200px = 1000px`,
      },
      {
        type: "paragraph",
        text: "Сумарна базова ширина елементів становить 1000px, а контейнер має лише 900px. Отже, виникає 100px від'ємного вільного простору.",
      },
      { type: "code", language: "text", code: `1000px − 900px = 100px` },
      { type: "heading", text: "Стискання першого елемента" },
      {
        type: "paragraph",
        text: "Перший елемент має найбільшу базову ширину — 400px. Тому він отримує більшу частку від'ємного вільного простору:",
      },
      {
        type: "code",
        language: "text",
        code: `
        100px × (400px / 1000px) = 40px`,
      },
      {
        type: "paragraph",
        text: "Отже, від першого елемента віднімається 40px:",
      },
      { type: "code", language: "text", code: `400px − 40px = 360px` },
      { type: "heading", text: "Стискання інших елементів" },
      {
        type: "paragraph",
        text: "Кожен із трьох інших елементів має базову ширину 200px. Його частка стискання становить:",
      },
      {
        type: "code",
        language: "text",
        code: `
        100px × (200px / 1000px) = 20px`,
      },
      {
        type: "paragraph",
        text: "Тому ширина кожного з цих елементів після стискання становитиме:",
      },
      {
        type: "code",
        language: "text",
        code: `
        200px − 20px = 180px`,
      },
      {
        type: "example",
        title: "Підсумковий результат",
        text: "Після стискання ширини елементів становитимуть 360px, 180px, 180px і 180px. Разом вони займають рівно 900px — ширину контейнера.",
      },
      {
        type: "note",
        text: "Чим більший базовий розмір flex-елемента, тим більшу частину від'ємного вільного простору він може втратити за однакового flex-shrink.",
      },
      { type: "heading", text: "Перевірка результату" },
      {
        type: "code",
        language: "html",
        code: `
<div class="parent">
  <div class="child elem1">1</div>
  <div class="child elem2">2</div>
  <div class="child elem3">3</div>
  <div class="child elem4">4</div>
</div>`,
      },
      {
        type: "code",
        language: "css",
        code: `
.parent {
  display: flex;
  width: 900px;
  height: 200px;
  border: 1px solid red;
}
  
.child {
  height: 50px;
  border: 1px solid green;
}
  
.elem1 {
  width: 400px;
}
.elem2,
.elem3,
.elem4 {
  width: 200px;
}`,
      },
      {
        type: "paragraph",
        text: "Відкрийте DevTools браузера та перевірте фактичну ширину кожного елемента. За наведених умов очікуваний результат — приблизно 360px, 180px, 180px і 180px.",
      },
      { type: "heading", text: "Практичне завдання 1" },
      {
        type: "task",
        text: [
          "Реалізуйте приклад із чотирма елементами.",
          "Задайте першому елементу width: 400px.",
          "Іншим трьом елементам задайте width: 200px.",
          "Задайте контейнеру width: 900px.",
          "До перевірки розрахуйте очікувану ширину всіх елементів.",
          "Перевірте результат за допомогою DevTools.",
        ],
      },
      {
        type: "code",
        language: "html",
        code: `
  <!-- Початковий код -->
<div class="parent">
  <div class="child elem1">1</div>
  <div class="child elem2">2</div>
  <div class="child elem3">3</div>
  <div class="child elem4">4</div>
</div>`,
      },
      {
        type: "hint",
        text: "Спочатку знайдіть сумарну ширину елементів і від'ємний вільний простір. Потім розподіліть нестачу пропорційно до базових ширин.",
      },
      {
        type: "answer",
        text: `
.parent {
  display: flex;
  width: 900px;
  height: 200px;
  border: 1px solid red;
}
  
.child {
  height: 50px;
  border: 1px solid green;
}

.elem1 {
  width: 400px;
}
  
.elem2,
.elem3,
.elem4 {
  width: 200px;
}`,
      },
      { type: "heading", text: "Практичне завдання 2" },
      {
        type: "task",
        text: [
          "Розрахуйте підсумкові ширини трьох елементів.",
          "Контейнер має ширину 300px.",
          "Перший елемент має width: 300px.",
          "Другий і третій елементи мають width: 100px.",
          "Визначте сумарну базову ширину.",
          "Знайдіть від'ємний вільний простір.",
          "Розрахуйте, скільки пікселів втратить кожен елемент.",
          "Перевірте свої розрахунки в браузері.",
        ],
      },
      {
        type: "code",
        language: "html",
        code: `
        <!-- Початковий код -->
<div class="parent">
  <div class="child elem1">1</div>
  <div class="child elem2">2</div>
  <div class="child elem3">3</div>
</div>`,
      },
      {
        type: "hint",
        text: "Сумарна базова ширина — 500px, а контейнер має 300px. Спочатку знайдіть 200px від'ємного вільного простору, а потім розподіліть його пропорційно ширинам 300px, 100px і 100px.",
      },
      {
        type: "answer",
        text: `
.parent {
  display: flex;
  width: 300px;
  height: 200px;
  border: 1px solid red;
}

.child {
  height: 50px;
  border: 1px solid green;
}
  
.elem1 {
  width: 300px;
}
  
.elem2 {
  width: 100px;
}
  
.elem3 {
  width: 100px;
}`,
      },
      {
        type: "example",
        title: "Відповідь до завдання 2",
        text: "Сумарна базова ширина — 500px. Від'ємний вільний простір — 200px. Перший елемент втрачає 120px і стає 180px. Другий і третій втрачають по 40px і стають по 60px.",
      },
    ],
  },

  {
    id: "css-flex-shrink-weight",
    title: "Регулювання стискання flex-елементів",
    description:
      "Вивчаємо властивість flex-shrink, яка дозволяє керувати тим, наскільки сильно кожен flex-елемент стискається при нестачі вільного простору.",
    content: [
      { type: "heading", text: "Що робить flex-shrink" },
      {
        type: "paragraph",
        text: "Коли flex-елементам не вистачає місця, вони можуть стискатися. За замовчуванням усі елементи мають flex-shrink: 1. Якщо значення flex-shrink однакове, більший елемент стискається сильніше, оскільки його базовий розмір більший.",
      },
      {
        type: "paragraph",
        text: "Властивість flex-shrink дозволяє змінити вагу елемента під час розподілу від'ємного вільного простору. Чим більше значення flex-shrink, тим більшу частку стискання елемент може отримати за однакового базового розміру.",
      },
      { type: "heading", text: "Зважена ширина" },
      {
        type: "paragraph",
        text: "Для спрощеного розрахунку спочатку визначимо зважену ширину елемента. Вона дорівнює його базовій ширині, помноженій на flex-shrink.",
      },
      {
        type: "code",
        language: "text",
        code: `
        зважена ширина = базова ширина × flex-shrink`,
      },
      {
        type: "example",
        title: "Приклад",
        text: "Якщо базова ширина елемента становить 200px, а flex-shrink дорівнює 3, його зважена ширина становить 600px.",
      },
      {
        type: "code",
        language: "text",
        code: `200px × 3 = 600px`,
      },
      { type: "heading", text: "Формула стискання" },
      {
        type: "paragraph",
        text: "Після визначення зважених ширин можна знайти, яку частину від'ємного вільного простору втратить кожен елемент.",
      },
      {
        type: "code",
        language: "text",
        code: `стискання елемента = від'ємний вільний простір × (зважена ширина елемента / сумарна зважена ширина)`,
      },
      { type: "heading", text: "Приклад із чотирма елементами" },
      {
        type: "paragraph",
        text: "Нехай перший елемент має ширину 400px і flex-shrink: 2. Три інші елементи мають ширину 200px і flex-shrink: 1. Ширина контейнера — 900px.",
      },
      {
        type: "code",
        language: "text",
        code: `
400px + 3 × 200px = 1000px
1000px − 900px = 100px`,
      },
      {
        type: "paragraph",
        text: "Отже, від'ємний вільний простір становить 100px.",
      },
      { type: "heading", text: "Знаходимо зважені ширини" },
      {
        type: "code",
        language: "text",
        code: `
400px × 2 = 800px
200px × 1 = 200px
200px × 1 = 200px
200px × 1 = 200px`,
      },
      { type: "paragraph", text: "Сумарна зважена ширина становить:" },
      {
        type: "code",
        language: "text",
        code: `
800px + 200px + 200px + 200px = 1400px`,
      },
      { type: "heading", text: "Стискання першого елемента" },
      {
        type: "paragraph",
        text: "Перший елемент має зважену ширину 800px. Його частка стискання становить:",
      },
      {
        type: "code",
        language: "text",
        code: `
100px × (800px / 1400px) = 57,14px`,
      },
      {
        type: "paragraph",
        text: "Тому після стискання його ширина буде приблизно 342,86px.",
      },
      {
        type: "code",
        language: "text",
        code: `
400px − 57,14px = 342,86px ≈ 343px`,
      },
      { type: "heading", text: "Стискання інших елементів" },
      {
        type: "paragraph",
        text: "Кожен із трьох інших елементів має зважену ширину 200px. Тому кожен із них втратить:",
      },
      {
        type: "code",
        language: "text",
        code: `
100px × (200px / 1400px) = 14,29px`,
      },
      {
        type: "paragraph",
        text: "Підсумкова ширина кожного з них становитиме приблизно 185,71px.",
      },
      {
        type: "code",
        language: "text",
        code: `
200px − 14,29px = 185,71px ≈ 186px`,
      },
      {
        type: "example",
        title: "Підсумковий результат",
        text: "Після стискання ширини елементів становитимуть приблизно 342,86px, 185,71px, 185,71px і 185,71px. Їхня сума дорівнює 900px.",
      },
      {
        type: "note",
        text: "Важливо: flex-shrink не задає безпосередньо кількість пікселів, на яку зменшиться елемент. Він є коефіцієнтом, який впливає на розподіл від'ємного вільного простору.",
      },
      { type: "heading", text: "Практичне завдання 1" },
      {
        type: "task",
        text: [
          "Створіть flex-контейнер шириною 900px.",
          "Додайте чотири елементи.",
          "Першому елементу задайте width: 400px і flex-shrink: 2.",
          "Іншим трьом елементам задайте width: 200px і flex-shrink: 1.",
          "До запуску коду розрахуйте підсумкову ширину кожного елемента.",
          "Перевірте результат за допомогою DevTools.",
        ],
      },
      {
        type: "code",
        language: "html",
        code: `
        <!-- Початковий код -->
<div class="parent">
  <div class="child elem1">1</div>
  <div class="child elem2">2</div>
  <div class="child elem3">3</div>
  <div class="child elem4">4</div>
</div>`,
      },
      {
        type: "hint",
        text: "Знайдіть від'ємний вільний простір, потім зважені ширини та їхню суму. Для першого елемента використайте flex-shrink: 2, для інших — flex-shrink: 1.",
      },
      {
        type: "answer",
        text: `
.parent {
  display: flex;
  width: 900px;
}
  
.child {
  height: 50px;
  border: 1px solid green;
}
  
.elem1 {
  width: 400px;
  flex-shrink: 2;
}
  
.elem2,
.elem3,
.elem4 {
  width: 200px;
  flex-shrink: 1;
}`,
      },
      {
        type: "example",
        title: "Відповідь",
        text: "Очікувані ширини: приблизно 342,86px, 185,71px, 185,71px і 185,71px.",
      },
      { type: "heading", text: "Практичне завдання 2" },
      {
        type: "task",
        text: [
          "Створіть контейнер шириною 200px.",
          "Додайте три елементи шириною по 100px.",
          "Першому елементу задайте flex-shrink: 2.",
          "Другому та третьому елементам задайте flex-shrink: 1.",
          "Розрахуйте підсумкову ширину кожного елемента.",
          "Перевірте результат у браузері.",
        ],
      },
      {
        type: "code",
        language: "html",
        code: `
        <!-- Початковий код -->
<div class="parent">
  <div class="child elem1">1</div>
  <div class="child elem2">2</div>
  <div class="child elem3">3</div>
</div>`,
      },
      {
        type: "hint",
        text: "Сумарна ширина — 300px, контейнер — 200px, тому від'ємний вільний простір становить 100px. Зважені ширини дорівнюють 200px, 100px і 100px.",
      },
      {
        type: "answer",
        text: `
.parent {
  display: flex;
  width: 200px;
}
  
.child {
  height: 50px;
  border: 1px solid green;
}
  
.elem1 {
  width: 100px;
  flex-shrink: 2;
}
  
.elem2 {
  width: 100px;
  flex-shrink: 1;
}
  
.elem3 {
  width: 100px;
  flex-shrink: 1;
}`,
      },
      {
        type: "example",
        title: "Відповідь",
        text: "Сумарна зважена ширина — 400px. Перший елемент втратить 50px і матиме 50px. Другий та третій втратять по 25px і матимуть по 75px.",
      },
      { type: "heading", text: "Практичне завдання 3" },
      {
        type: "task",
        text: [
          "Створіть контейнер шириною 200px.",
          "Додайте три елементи шириною по 100px.",
          "Для першого встановіть flex-shrink: 3.",
          "Для другого встановіть flex-shrink: 2.",
          "Для третього встановіть flex-shrink: 1.",
          "Розрахуйте підсумкову ширину кожного елемента.",
          "Перевірте свої розрахунки вимірюванням.",
        ],
      },
      {
        type: "code",
        language: "html",
        code: `<!-- Початковий код --> <div class="parent"> <div class="child elem1">1</div> <div class="child elem2">2</div> <div class="child elem3">3</div> </div>`,
      },
      {
        type: "hint",
        text: "Від'ємний вільний простір — 100px. Зважені ширини: 300px, 200px і 100px. Сумарна зважена ширина — 600px.",
      },
      {
        type: "answer",
        text: `.parent { display: flex; width: 200px; } .child { height: 50px; border: 1px solid green; } .elem1 { width: 100px; flex-shrink: 3; } .elem2 { width: 100px; flex-shrink: 2; } .elem3 { width: 100px; flex-shrink: 1; }`,
      },
      {
        type: "example",
        title: "Відповідь",
        text: "Перший елемент втратить 50px і матиме 50px. Другий втратить приблизно 33,33px і матиме приблизно 66,67px. Третій втратить приблизно 16,67px і матиме приблизно 83,33px.",
      },
      { type: "heading", text: "Практичне завдання 4" },
      {
        type: "task",
        text: [
          "Створіть контейнер шириною 500px.",
          "Першому елементу задайте width: 300px і flex-shrink: 3.",
          "Другому елементу задайте width: 200px і flex-shrink: 2.",
          "Третьому та четвертому елементам задайте width: 200px і flex-shrink: 1.",
          "Розрахуйте від'ємний вільний простір.",
          "Знайдіть зважену ширину кожного елемента.",
          "Розрахуйте підсумкові ширини всіх чотирьох елементів.",
          "Перевірте результат у DevTools.",
        ],
      },
      {
        type: "code",
        language: "html",
        code: `<!-- Початковий код --> <div class="parent"> <div class="child elem1">1</div> <div class="child elem2">2</div> <div class="child elem3">3</div> <div class="child elem4">4</div> </div>`,
      },
      {
        type: "hint",
        text: "Сумарна базова ширина — 900px, тому від'ємний вільний простір — 400px. Зважені ширини: 900px, 400px, 200px і 200px. Їхня сума — 1700px.",
      },
      {
        type: "answer",
        text: `.parent { display: flex; width: 500px; } .child { height: 50px; border: 1px solid green; } .elem1 { width: 300px; flex-shrink: 3; } .elem2 { width: 200px; flex-shrink: 2; } .elem3 { width: 200px; flex-shrink: 1; } .elem4 { width: 200px; flex-shrink: 1; }`,
      },
      {
        type: "example",
        title: "Відповідь",
        text: "Перший елемент втратить приблизно 211,76px і матиме 88,24px. Другий втратить приблизно 94,12px і матиме 105,88px. Третій і четвертий втратять приблизно по 47,06px та матимуть приблизно по 152,94px.",
      },
      {
        type: "note",
        text: "Під час перевірки в браузері можливі невеликі відмінності від ручного розрахунку через піксельне округлення та інші особливості алгоритму Flexbox. Для навчальних прикладів наведені розрахунки показують основний принцип роботи flex-shrink.",
      },
    ],
  },

  {
    id: "css-flex-shrink-zero",
    title: "Скасування стискання flex-елементів",
    description:
      "Вивчаємо властивість flex-shrink: значення 1 за замовчуванням, скасування стискання за допомогою 0 та використання дробових значень для керування стисканням.",
    content: [
      { type: "heading", text: "Значення flex-shrink за замовчуванням" },
      {
        type: "paragraph",
        text: "Для flex-елементів властивість flex-shrink за замовчуванням має значення 1. Це означає, що елемент може стискатися, якщо всім елементам не вистачає місця в контейнері.",
      },
      {
        type: "code",
        language: "css",
        code: `.container { display: flex; width: 300px; } .item { width: 150px; }`,
      },
      {
        type: "example",
        title: "Що відбувається",
        text: "Якщо три елементи мають ширину 150px, їхня загальна ширина становить 450px, а контейнер має лише 300px. Оскільки flex-shrink дорівнює 1, елементи будуть стискатися, щоб поміститися в контейнер.",
      },
      { type: "heading", text: "Як скасувати стискання" },
      {
        type: "paragraph",
        text: "Щоб заборонити flex-елементу стискатися, встановіть flex-shrink: 0. Такий елемент збереже свій базовий розмір, навіть якщо для всіх елементів не вистачає місця.",
      },
      {
        type: "code",
        language: "css",
        code: `.item { width: 150px; flex-shrink: 0; }`,
      },
      {
        type: "example",
        title: "Результат",
        text: "Елемент із flex-shrink: 0 не буде зменшуватися через нестачу вільного місця. Якщо всі елементи разом не помістяться в контейнер, може з'явитися горизонтальне переповнення.",
      },
      {
        type: "list",
        items: [
          "flex-shrink: 1 — елемент може стискатися; це значення використовується за замовчуванням.",
          "flex-shrink: 0 — елемент не стискається.",
          "flex-shrink: 0.5 — елемент стискається, але його фактор стискання менший, ніж у елемента з flex-shrink: 1.",
          "flex-shrink: 1.5 — фактор стискання більший, ніж у елемента з flex-shrink: 1.",
        ],
      },
      { type: "heading", text: "Дробові значення" },
      {
        type: "paragraph",
        text: "Властивість flex-shrink може мати не лише цілі, а й дробові невід'ємні значення. Вони використовуються як фактор стискання. При однакових базових розмірах елемент із більшим значенням flex-shrink отримає більшу частку стискання.",
      },
      {
        type: "code",
        language: "css",
        code: `.item:nth-child(1) { flex-shrink: 1; } .item:nth-child(2) { flex-shrink: 0.5; } .item:nth-child(3) { flex-shrink: 2; }`,
      },
      {
        type: "example",
        title: "Як розподіляється стискання",
        text: "Якщо елементи мають однакову базову ширину, третій елемент із flex-shrink: 2 стискатиметься сильніше за перший із flex-shrink: 1, а другий із flex-shrink: 0.5 — слабше. Точний результат залежить також від базових розмірів і обмежень flex-елементів.",
      },
      {
        type: "note",
        text: "flex-shrink не задає безпосередньо кількість пікселів, на яку зменшиться елемент. Він визначає фактор, який використовується під час розподілу негативного вільного простору. Тому однакові значення flex-shrink можуть дати різний результат для елементів різного розміру.",
      },
      { type: "heading", text: "Практичні завдання" },
      {
        type: "task",
        text: [
          "Створіть flex-контейнер шириною 300px.",
          "Додайте три елементи шириною 150px.",
          "Для другого елемента встановіть flex-shrink: 0.",
          "Перевірте, як зміниться його поведінка порівняно з іншими елементами.",
        ],
      },
      {
        type: "code",
        language: "html",
        code: `<!-- Початковий код --> <div class="container"> <div class="item">1</div> <div class="item item--no-shrink">2</div> <div class="item">3</div> </div>`,
      },
      {
        type: "hint",
        text: "Для другого елемента використайте flex-shrink: 0.",
      },
      {
        type: "answer",
        text: `.container { display: flex; width: 300px; } .item { width: 150px; flex-shrink: 1; } .item--no-shrink { flex-shrink: 0; }`,
      },
      {
        type: "task",
        text: [
          "Створіть три flex-елементи однакової ширини.",
          "Встановіть для них flex-shrink: 1, 0.5 і 2 відповідно.",
          "Зменшуйте ширину контейнера та спостерігайте, який елемент стискається сильніше.",
        ],
      },
      {
        type: "code",
        language: "html",
        code: `<!-- Початковий код --> <div class="container"> <div class="item item--one">1</div> <div class="item item--two">2</div> <div class="item item--three">3</div> </div>`,
      },
      {
        type: "hint",
        text: "Задайте однакову ширину елементам, а потім встановіть для них різні значення flex-shrink.",
      },
      {
        type: "answer",
        text: `.container { display: flex; width: 300px; } .item { width: 150px; } .item--one { flex-shrink: 1; } .item--two { flex-shrink: 0.5; } .item--three { flex-shrink: 2; }`,
      },
    ],
  },

  {
    id: "css-flex-shorthand",
    title: "Скорочена властивість flex",
    description:
      "Вивчаємо скорочену властивість flex, яка об'єднує flex-grow, flex-shrink і flex-basis, а також правила скороченого запису та значення за замовчуванням.",
    content: [
      { type: "heading", text: "Що таке flex" },
      {
        type: "paragraph",
        text: "Властивість flex — це скорочений запис для трьох властивостей flex-елемента: flex-grow, flex-shrink і flex-basis.",
      },
      {
        type: "code",
        language: "css",
        code: `.child { flex-grow: 1; flex-shrink: 2; flex-basis: 100px; }`,
      },
      {
        type: "paragraph",
        text: "Той самий запис можна скоротити до однієї властивості flex. Порядок значень завжди такий: flex-grow, flex-shrink, flex-basis.",
      },
      { type: "code", language: "css", code: `.child { flex: 1 2 100px; }` },
      {
        type: "list",
        items: [
          "Перше значення — flex-grow: жадібність, тобто здатність отримувати вільний простір.",
          "Друге значення — flex-shrink: здатність стискатися при нестачі місця.",
          "Третє значення — flex-basis: базовий розмір flex-елемента.",
        ],
      },
      { type: "heading", text: "Можна опускати значення" },
      {
        type: "paragraph",
        text: "У скороченому записі частину значень можна не вказувати. Якщо пропущено flex-basis або flex-shrink, браузер використовує правила синтаксису скороченої властивості flex та відповідні значення за замовчуванням.",
      },
      {
        type: "code",
        language: "css",
        code: `.child { flex: 2; } .child { flex: 2 0.5; } .child { flex: 2 0.5 100px; }`,
      },
      {
        type: "example",
        title: "Як читати скорочений запис",
        text: "Запис flex: 2 0.5 100px означає flex-grow: 2, flex-shrink: 0.5 і flex-basis: 100px. Якщо записати flex: 2 0.5, два числові значення означатимуть flex-grow: 2 і flex-shrink: 0.5, а базовий розмір у цьому синтаксисі буде 0%.",
      },
      {
        type: "note",
        text: "Не варто механічно сприймати пропущене значення як звичайне значення за замовчуванням. flex має власні правила розбору скороченого синтаксису. Наприклад, flex: 1 фактично використовується як flex: 1 1 0%, а не як flex-grow: 1; flex-shrink: 1; flex-basis: auto.",
      },
      { type: "heading", text: "Приклади перетворення" },
      {
        type: "paragraph",
        text: "Якщо всі три властивості задані явно, просто запишіть їх значення в порядку flex-grow, flex-shrink, flex-basis.",
      },
      {
        type: "code",
        language: "css",
        code: `.child { flex-grow: 1; flex-shrink: 2; flex-basis: 100px; } /* Скорочено */ .child { flex: 1 2 100px; }`,
      },
      {
        type: "paragraph",
        text: "Якщо задані лише flex-grow і flex-shrink, можна записати два числа.",
      },
      {
        type: "code",
        language: "css",
        code: `.child { flex-grow: 2; flex-shrink: 0.5; } /* Скорочено */ .child { flex: 2 0.5; }`,
      },
      {
        type: "paragraph",
        text: "Якщо задано лише одне число, воно використовується як flex-grow. У такому записі flex: 3 відповідає flex-grow: 3, flex-shrink: 1 і flex-basis: 0%.",
      },
      {
        type: "code",
        language: "css",
        code: `.child { flex: 3; } /* Еквівалентно */ .child { flex-grow: 3; flex-shrink: 1; flex-basis: 0%; }`,
      },
      { type: "heading", text: "Практичні завдання" },
      {
        type: "task",
        text: [
          "Перепишіть код через скорочену властивість flex.",
          "Збережіть ті самі значення flex-grow, flex-shrink і flex-basis.",
        ],
      },
      {
        type: "code",
        language: "css",
        code: `.child { flex-basis: 100px; flex-grow: 1; flex-shrink: 2; }`,
      },
      {
        type: "hint",
        text: "Запишіть значення в порядку flex-grow, flex-shrink, flex-basis.",
      },
      { type: "answer", text: `.child { flex: 1 2 100px; }` },
      {
        type: "task",
        text: [
          "Перепишіть код через flex.",
          "Тут задані тільки flex-grow і flex-shrink.",
        ],
      },
      {
        type: "code",
        language: "css",
        code: `.child { flex-shrink: 0.5; flex-grow: 2; }`,
      },
      { type: "hint", text: "Спочатку запишіть flex-grow, потім flex-shrink." },
      { type: "answer", text: `.child { flex: 2 0.5; }` },
      {
        type: "task",
        text: [
          "Перепишіть код через flex.",
          "Визначте, яке значення має бути першим, а яке другим.",
        ],
      },
      {
        type: "code",
        language: "css",
        code: `.child { flex-shrink: 0.5; flex-grow: 1; }`,
      },
      {
        type: "hint",
        text: "Порядок властивостей у початковому коді не має значення. У flex спочатку записується grow, потім shrink.",
      },
      { type: "answer", text: `.child { flex: 1 0.5; }` },
      {
        type: "task",
        text: ["Розгорніть скорочений запис flex у три окремі властивості."],
      },
      { type: "code", language: "css", code: `.child { flex: 1 2 200px; }` },
      {
        type: "hint",
        text: "Перше значення — grow, друге — shrink, третє — basis.",
      },
      {
        type: "answer",
        text: `.child { flex-grow: 1; flex-shrink: 2; flex-basis: 200px; }`,
      },
      {
        type: "task",
        text: [
          "Розгорніть запис flex: 2 0.7 у три окремі властивості.",
          "Пам'ятайте, що два числові значення означають grow і shrink.",
        ],
      },
      { type: "code", language: "css", code: `.child { flex: 2 0.7; }` },
      {
        type: "hint",
        text: "Перше число — flex-grow, друге — flex-shrink. Для такого скороченого запису flex-basis дорівнює 0%.",
      },
      {
        type: "answer",
        text: `.child { flex-grow: 2; flex-shrink: 0.7; flex-basis: 0%; }`,
      },
      {
        type: "task",
        text: [
          "Розгорніть запис flex: 3 у три окремі властивості.",
          "Врахуйте спеціальні правила скороченого запису flex з одним числом.",
        ],
      },
      { type: "code", language: "css", code: `.child { flex: 3; }` },
      {
        type: "hint",
        text: "Одне число задає flex-grow. Для такого запису flex-shrink стає 1, а flex-basis — 0%.",
      },
      {
        type: "answer",
        text: `.child { flex-grow: 3; flex-shrink: 1; flex-basis: 0%; }`,
      },
    ],
  },

  {
    id: "css-flex-tiles",
    title: "Плитка на Flexbox",
    description:
      "Вчимося створювати сітку з flex-елементів у кілька рядів за допомогою flex-wrap, justify-content та align-content.",
    content: [
      { type: "heading", text: "Розташування елементів у кілька рядів" },
      {
        type: "paragraph",
        text: "За замовчуванням flex-елементи намагаються розташуватися в один ряд. Щоб дозволити їм переходити на наступний ряд, використовується властивість flex-wrap: wrap.",
      },
      {
        type: "code",
        language: "html",
        code: `<div class="parent"> <div class="child">1</div> <div class="child">2</div> <div class="child">3</div> <div class="child">4</div> <div class="child">5</div> <div class="child">6</div> <div class="child">7</div> <div class="child">8</div> <div class="child">9</div> </div>`,
      },
      {
        type: "code",
        language: "css",
        code: `.parent { display: flex; flex-wrap: wrap; width: 300px; border: 1px solid red; } .child { box-sizing: border-box; width: 100px; height: 100px; border: 1px solid green; }`,
      },
      {
        type: "example",
        title: "Результат",
        text: "У контейнері шириною 300px поміщаються три елементи по 100px. Оскільки використано flex-wrap: wrap, наступні елементи переходять на новий ряд. У результаті отримуємо три ряди по три елементи.",
      },
      { type: "heading", text: "Відстань між елементами по горизонталі" },
      {
        type: "paragraph",
        text: "Тепер додамо горизонтальні проміжки між елементами. У кожному рядку є три елементи, тому між ними утворюються два проміжки.",
      },
      {
        type: "paragraph",
        text: "Якщо кожен проміжок має бути 10px, потрібно додати до ширини контейнера 20px: 10px для першого проміжку та 10px для другого. Тому ширина контейнера буде 320px.",
      },
      {
        type: "code",
        language: "css",
        code: `.parent { display: flex; flex-wrap: wrap; justify-content: space-between; width: 320px; border: 1px solid red; } .child { box-sizing: border-box; width: 100px; height: 100px; border: 1px solid green; }`,
      },
      {
        type: "example",
        title: "Як працює space-between",
        text: "justify-content: space-between розподіляє вільний простір між елементами рядка. Перший елемент притискається до початку рядка, останній — до кінця, а вільний простір між ними розподіляється рівномірно.",
      },
      { type: "heading", text: "Відстань між рядами" },
      {
        type: "paragraph",
        text: "Тепер потрібно створити такі самі проміжки між рядами. Для розподілу вільного простору між flex-рядками можна використати властивість align-content.",
      },
      {
        type: "paragraph",
        text: "Встановимо align-content: space-between. Воно розподілить вільний простір між трьома рядами.",
      },
      {
        type: "code",
        language: "css",
        code: `.parent { display: flex; flex-wrap: wrap; justify-content: space-between; align-content: space-between; width: 320px; height: 320px; border: 1px solid red; } .child { box-sizing: border-box; width: 100px; height: 100px; border: 1px solid green; }`,
      },
      {
        type: "example",
        title: "Результат",
        text: "Три ряди мають загальну висоту 300px. Висота контейнера становить 320px, тому залишається 20px вільного простору. align-content: space-between розподіляє ці 20px між двома проміжками — по 10px між рядами.",
      },
      { type: "heading", text: "Чому потрібна висота контейнера" },
      {
        type: "paragraph",
        text: "align-content розподіляє вільний простір між flex-лініями. Якщо висота контейнера не задана і в ньому немає додаткової висоти, для такого розподілу просто не буде вільного простору.",
      },
      {
        type: "list",
        items: [
          "flex-wrap: wrap — дозволяє елементам переходити на наступні ряди.",
          "justify-content: space-between — розподіляє вільний простір між елементами кожного рядка.",
          "align-content: space-between — розподіляє вільний простір між flex-рядками.",
          "Для роботи align-content потрібен вільний простір у поперечній осі.",
        ],
      },
      {
        type: "note",
        text: "У сучасному CSS для створення сіток часто зручніше використовувати CSS Grid і властивість gap. Але Flexbox добре підходить для навчання та ситуацій, де потрібно керувати розташуванням елементів уздовж flex-осей.",
      },
      { type: "heading", text: "Практичне завдання" },
      {
        type: "task",
        text: [
          "Створіть контейнер шириною 320px і висотою 320px.",
          "Додайте дев'ять елементів розміром 100×100px.",
          "Розташуйте елементи в кілька рядів.",
          "Зробіть відстань між елементами по горизонталі та вертикалі приблизно 10px.",
        ],
      },
      {
        type: "code",
        language: "html",
        code: `<!-- Початковий код --> <div class="parent"> <div class="child">1</div> <div class="child">2</div> <div class="child">3</div> <div class="child">4</div> <div class="child">5</div> <div class="child">6</div> <div class="child">7</div> <div class="child">8</div> <div class="child">9</div> </div>`,
      },
      {
        type: "hint",
        text: "Використайте display: flex, flex-wrap: wrap, justify-content: space-between та align-content: space-between. Не забудьте задати контейнеру розмір 320×320px.",
      },
      {
        type: "answer",
        text: `.parent { display: flex; flex-wrap: wrap; justify-content: space-between; align-content: space-between; width: 320px; height: 320px; } .child { box-sizing: border-box; width: 100px; height: 100px; }`,
      },
      {
        type: "task",
        text: [
          "Змініть розмір елементів на 80×80px.",
          "Збережіть відстань між елементами приблизно 10px.",
          "Підберіть ширину та висоту контейнера так, щоб у ньому помістилися три елементи в ряд і три ряди.",
        ],
      },
      {
        type: "code",
        language: "html",
        code: `<!-- Початковий код --> <div class="parent"> <div class="child">1</div> <div class="child">2</div> <div class="child">3</div> <div class="child">4</div> <div class="child">5</div> <div class="child">6</div> <div class="child">7</div> <div class="child">8</div> <div class="child">9</div> </div>`,
      },
      {
        type: "hint",
        text: "Три елементи по 80px займають 240px. Додайте два проміжки по 10px для ширини та аналогічно розрахуйте висоту.",
      },
      {
        type: "answer",
        text: `.parent { display: flex; flex-wrap: wrap; justify-content: space-between; align-content: space-between; width: 260px; height: 260px; } .child { box-sizing: border-box; width: 80px; height: 80px; }`,
      },
    ],
  },

  {
    id: "css-flex-tiles-problems",
    title: "Проблеми плитки на Flexbox",
    description:
      "Розглядаємо основні проблеми створення плитки за допомогою Flexbox: необхідність фіксованої висоти контейнера та неправильне розташування елементів у неповному останньому рядку.",
    content: [
      { type: "heading", text: "Проблема з фіксованою висотою" },
      {
        type: "paragraph",
        text: "Для створення вертикальних проміжків між рядами ми використовували align-content: space-between. Але для його роботи контейнеру потрібно мати вільний простір у поперечній осі. Тому в попередньому прикладі ми були змушені явно задавати висоту контейнера.",
      },
      {
        type: "code",
        language: "css",
        code: `.parent { display: flex; flex-wrap: wrap; justify-content: space-between; align-content: space-between; width: 320px; height: 320px; }`,
      },
      {
        type: "paragraph",
        text: "Це незручно, якщо кількість елементів може змінюватися. Наприклад, сьогодні є 9 елементів, завтра 12, а потім 7. Кількість рядів змінюється, а фіксована висота контейнера вже не підходить.",
      },
      { type: "heading", text: "Проблема з неповним останнім рядом" },
      {
        type: "paragraph",
        text: "Друга проблема виникає, коли кількість елементів не ділиться на кількість елементів у рядку. Наприклад, якщо потрібно розмістити по три елементи в ряд, а всього є вісім елементів, останній ряд міститиме лише два.",
      },
      {
        type: "code",
        language: "html",
        code: `<div class="parent"> <div class="child">1</div> <div class="child">2</div> <div class="child">3</div> <div class="child">4</div> <div class="child">5</div> <div class="child">6</div> <div class="child">7</div> <div class="child">8</div> </div>`,
      },
      {
        type: "code",
        language: "css",
        code: `.parent { display: flex; flex-wrap: wrap; justify-content: space-between; width: 320px; } .child { box-sizing: border-box; width: 100px; height: 100px; border: 1px solid green; }`,
      },
      {
        type: "example",
        title: "Що відбудеться",
        text: "У перших двох рядах буде по три елементи. В останньому залишиться лише два. Оскільки використовується justify-content: space-between, ці два елементи розійдуться до протилежних країв рядка. Вони вже не будуть стояти так само, як елементи в повних рядах.",
      },
      {
        type: "heading",
        text: "Чому space-between не підходить для такої плитки",
      },
      {
        type: "paragraph",
        text: "justify-content: space-between розподіляє вільний простір між елементами кожного окремого flex-рядка. Він не знає, що ми хочемо зберегти однакові колонки в усіх рядах.",
      },
      {
        type: "paragraph",
        text: "Тому в повному рядку з трьома елементами проміжки можуть бути однаковими, а в неповному рядку з двома елементами простір розподілиться зовсім інакше.",
      },
      {
        type: "code",
        language: "text",
        code: `Повний ряд: [100] 20px [100] 20px [100] Неповний ряд із space-between: [100] [100]`,
      },
      { type: "heading", text: "Коли такий спосіб можна використовувати" },
      {
        type: "paragraph",
        text: "Плитка на Flexbox із space-between може бути зручною, якщо кількість елементів відома заздалегідь, кількість елементів у кожному рядку завжди однакова, а висота контейнера не створює проблем.",
      },
      {
        type: "paragraph",
        text: "Якщо ж кількість елементів змінюється динамічно або останній ряд може бути неповним, краще використовувати інший підхід.",
      },
      {
        type: "note",
        text: "Для справжніх сіток із рядками та колонками зазвичай зручніше використовувати CSS Grid. Flexbox більше орієнтований на розподіл елементів уздовж однієї осі, тому створення повноцінної двовимірної плитки на ньому потребує додаткових прийомів.",
      },
      { type: "heading", text: "Практичне завдання №1" },
      {
        type: "task",
        text: [
          "Є 12 елементів.",
          "Створіть плитку по 4 елементи в ряд.",
          "Ширина кожного елемента — 100px.",
          "Відстань між елементами — 20px.",
        ],
      },
      {
        type: "code",
        language: "html",
        code: `<!-- Початковий код --> <div class="parent"> <div class="child">1</div> <div class="child">2</div> <div class="child">3</div> <div class="child">4</div> <div class="child">5</div> <div class="child">6</div> <div class="child">7</div> <div class="child">8</div> <div class="child">9</div> <div class="child">10</div> <div class="child">11</div> <div class="child">12</div> </div>`,
      },
      {
        type: "hint",
        text: "Для чотирьох елементів по 100px потрібно 400px. Між ними буде три проміжки по 20px. Ширина контейнера має дорівнювати 460px.",
      },
      {
        type: "answer",
        text: `.parent { display: flex; flex-wrap: wrap; justify-content: space-between; width: 460px; } .child { box-sizing: border-box; width: 100px; height: 100px; }`,
      },
      { type: "heading", text: "Практичне завдання №2" },
      {
        type: "task",
        text: [
          "Є 12 елементів.",
          "Створіть плитку по 3 елементи в ряд.",
          "Ширина кожного елемента — 150px.",
          "Відстань між елементами — 10px.",
        ],
      },
      {
        type: "code",
        language: "html",
        code: `<!-- Початковий код --> <div class="parent"> <div class="child">1</div> <div class="child">2</div> <div class="child">3</div> <div class="child">4</div> <div class="child">5</div> <div class="child">6</div> <div class="child">7</div> <div class="child">8</div> <div class="child">9</div> <div class="child">10</div> <div class="child">11</div> <div class="child">12</div> </div>`,
      },
      {
        type: "hint",
        text: "Три елементи по 150px займають 450px. Додайте два проміжки по 10px. Отже, ширина контейнера — 470px.",
      },
      {
        type: "answer",
        text: `.parent { display: flex; flex-wrap: wrap; justify-content: space-between; width: 470px; } .child { box-sizing: border-box; width: 150px; height: 100px; }`,
      },
    ],
  },

  {
    id: "css-flex-tiles-margin",
    title: "Плитка з коректними відступами",
    description:
      "Вчимося створювати flex-плитку з правильними горизонтальними відступами за допомогою margin та псевдокласу :nth-child().",
    content: [
      { type: "heading", text: "Плитка без відступів" },
      {
        type: "paragraph",
        text: "Почнемо з простої flex-плитки. Контейнер має ширину 300px, а кожен елемент — ширину 100px. Тому в одному рядку поміщаються три елементи.",
      },
      {
        type: "code",
        language: "html",
        code: `<div class="parent"> <div class="child">1</div> <div class="child">2</div> <div class="child">3</div> <div class="child">4</div> <div class="child">5</div> <div class="child">6</div> <div class="child">7</div> <div class="child">8</div> <div class="child">9</div> </div>`,
      },
      {
        type: "code",
        language: "css",
        code: `.parent { display: flex; flex-wrap: wrap; width: 300px; border: 1px solid red; } .child { box-sizing: border-box; width: 100px; height: 100px; border: 1px solid green; }`,
      },
      { type: "heading", text: "Додаємо горизонтальні відступи" },
      {
        type: "paragraph",
        text: "Додамо між елементами горизонтальний відступ 10px за допомогою margin-right. Але якщо додати його всім елементам, останній елемент кожного рядка також матиме зайвий відступ.",
      },
      {
        type: "paragraph",
        text: "Тому для кожного третього елемента потрібно прибрати правий відступ. Для цього використаємо псевдоклас :nth-child(3n). Він вибирає кожен третій елемент: 3-й, 6-й, 9-й тощо.",
      },
      {
        type: "code",
        language: "css",
        code: `.parent { display: flex; flex-wrap: wrap; width: 320px; border: 1px solid red; } .child { box-sizing: border-box; width: 100px; height: 100px; margin-right: 10px; border: 1px solid green; } .child:nth-child(3n) { margin-right: 0; }`,
      },
      {
        type: "example",
        title: "Чому ширина контейнера 320px",
        text: "Три елементи по 100px займають 300px. Між ними потрібні два проміжки по 10px. Отже, необхідна ширина становить 300 + 10 + 10 = 320px.",
      },
      {
        type: "code",
        language: "text",
        code: `1-й елемент 2-й елемент 3-й елемент 100px 100px 100px ← 10px → ← 10px → Загальна ширина: 100 + 10 + 100 + 10 + 100 = 320px`,
      },
      { type: "heading", text: "Перевага перед space-between" },
      {
        type: "paragraph",
        text: "На відміну від justify-content: space-between, відступи через margin не перерозподіляються залежно від кількості елементів у рядку. Тому неповний останній ряд не роз'їжджається по краях.",
      },
      {
        type: "code",
        language: "html",
        code: `<div class="parent"> <div class="child">1</div> <div class="child">2</div> <div class="child">3</div> <div class="child">4</div> <div class="child">5</div> <div class="child">6</div> <div class="child">7</div> <div class="child">8</div> </div>`,
      },
      {
        type: "example",
        title: "Неповний останній ряд",
        text: "Якщо залишити лише 8 елементів, останній ряд міститиме два елементи. Вони залишаться на початку рядка з відстанню 10px між ними, а не розійдуться до протилежних країв контейнера.",
      },
      { type: "heading", text: "Як працює :nth-child(3n)" },
      {
        type: "paragraph",
        text: "Запис :nth-child(3n) вибирає кожен третій дочірній елемент. У нашому випадку це останній елемент кожного рядка з трьома колонками.",
      },
      {
        type: "list",
        items: [
          ":nth-child(3n) вибирає 3-й, 6-й, 9-й, 12-й та наступні елементи.",
          "Для цих елементів margin-right встановлюється в 0.",
          "Інші елементи отримують margin-right: 10px.",
          "Для трьох колонок у рядку ширина контейнера становить 320px.",
        ],
      },
      {
        type: "note",
        text: "Цей підхід прив'язаний до кількості колонок. Якщо потрібно 4 елементи в ряд, замість :nth-child(3n) потрібно використовувати :nth-child(4n). Для сучасних сіток також можна використовувати CSS Grid і gap.",
      },
      { type: "heading", text: "Практичне завдання" },
      {
        type: "task",
        text: [
          "Створіть flex-плитку по два елементи в ряд.",
          "Зробіть відстань між елементами 20px.",
          "Ширину кожного елемента встановіть 100px.",
          "Зробіть так, щоб останній елемент кожного рядка не мав правого відступу.",
        ],
      },
      {
        type: "code",
        language: "html",
        code: `<!-- Початковий код --> <div class="parent"> <div class="child">1</div> <div class="child">2</div> <div class="child">3</div> <div class="child">4</div> <div class="child">5</div> <div class="child">6</div> <div class="child">7</div> </div>`,
      },
      {
        type: "hint",
        text: "Для двох колонок останнім елементом рядка буде кожен другий елемент. Використайте :nth-child(2n). Ширина контейнера має враховувати два елементи по 100px і один проміжок 20px.",
      },
      {
        type: "answer",
        text: `.parent { display: flex; flex-wrap: wrap; width: 220px; } .child { box-sizing: border-box; width: 100px; height: 100px; margin-right: 20px; border: 1px solid green; } .child:nth-child(2n) { margin-right: 0; }`,
      },
    ],
  },

  {
    id: "css-flex-tiles-vertical-margin",
    title: "Вертикальні відступи для плитки",
    description:
      "Додаємо вертикальні відступи до flex-плитки за допомогою margin-bottom та розбираємо особливість зайвого відступу після останнього ряду.",
    content: [
      { type: "heading", text: "Додаємо вертикальні відступи" },
      {
        type: "paragraph",
        text: "У попередньому прикладі ми створили горизонтальні відступи за допомогою margin-right. Тепер додамо відстань між рядами. Для цього всім flex-елементам задамо margin-bottom: 10px.",
      },
      {
        type: "code",
        language: "css",
        code: `.parent { display: flex; flex-wrap: wrap; width: 320px; border: 1px solid red; } .child { box-sizing: border-box; width: 100px; height: 100px; margin-right: 10px; margin-bottom: 10px; border: 1px solid green; } .child:nth-child(3n) { margin-right: 0; }`,
      },
      {
        type: "example",
        title: "Результат",
        text: "Між сусідніми рядами з'являється відстань 10px. Горизонтальні відступи залишаються такими самими, як у попередньому прикладі.",
      },
      { type: "heading", text: "Зайвий відступ після останнього ряду" },
      {
        type: "paragraph",
        text: "Є одна особливість такого підходу: margin-bottom додається не лише елементам між рядами, а й елементам останнього ряду.",
      },
      {
        type: "code",
        language: "text",
        code: `┌──────────────────────────┐ │ 1 2 3 │ │ │ │ 4 5 6 │ │ │ ← 10px └──────────────────────────┘`,
      },
      {
        type: "paragraph",
        text: "Тому після останнього ряду залишається додатковий нижній відступ. У багатьох випадках це не критично, але якщо потрібно точно контролювати зовнішні відступи плитки, цей момент варто враховувати.",
      },
      { type: "heading", text: "Як розрахувати ширину контейнера" },
      {
        type: "paragraph",
        text: "Якщо в рядку має бути N елементів шириною W, а відстань між ними становить G, ширину контейнера можна розрахувати за формулою: N × W + (N − 1) × G.",
      },
      {
        type: "code",
        language: "text",
        code: `Ширина = кількість елементів × ширина елемента + кількість проміжків × розмір проміжку Кількість проміжків = кількість елементів − 1`,
      },
      {
        type: "example",
        title: "Три елементи по 100px і відступ 10px",
        text: "3 × 100px + 2 × 10px = 320px. Отже, для трьох колонок шириною 100px і проміжками 10px контейнер має бути шириною 320px.",
      },
      { type: "heading", text: "Підсумок" },
      {
        type: "list",
        items: [
          "margin-right створює горизонтальні проміжки між елементами.",
          "margin-bottom створює вертикальні проміжки між рядами.",
          ":nth-child(3n) прибирає правий відступ у кожного третього елемента для трьох колонок.",
          "Після останнього ряду залишається margin-bottom.",
          "Ширина контейнера розраховується за кількістю колонок і горизонтальним проміжком.",
        ],
      },
      {
        type: "note",
        text: "У сучасному CSS для створення таких проміжків часто зручніше використовувати gap. Але margin-підхід важливо знати, оскільки він добре демонструє принципи роботи відступів і вибору елементів через :nth-child().",
      },
      { type: "heading", text: "Практичне завдання №1" },
      {
        type: "task",
        text: [
          "Створіть плитку по два елементи в ряд.",
          "Встановіть відстань між елементами 20px.",
          "Ширина кожного елемента — 100px.",
          "Додайте вертикальну відстань між рядами 20px.",
        ],
      },
      {
        type: "code",
        language: "html",
        code: `<!-- Початковий код --> <div class="parent"> <div class="child">1</div> <div class="child">2</div> <div class="child">3</div> <div class="child">4</div> <div class="child">5</div> <div class="child">6</div> </div>`,
      },
      {
        type: "hint",
        text: "Для двох колонок ширина контейнера: 2 × 100 + 1 × 20 = 220px. Для другого елемента кожного рядка приберіть margin-right.",
      },
      {
        type: "answer",
        text: `.parent { display: flex; flex-wrap: wrap; width: 220px; } .child { box-sizing: border-box; width: 100px; height: 100px; margin-right: 20px; margin-bottom: 20px; } .child:nth-child(2n) { margin-right: 0; }`,
      },
      { type: "heading", text: "Практичне завдання №2" },
      {
        type: "task",
        text: [
          "Створіть плитку по три елементи в ряд.",
          "Встановіть горизонтальну та вертикальну відстань 20px.",
          "Ширина кожного елемента — 100px.",
        ],
      },
      {
        type: "code",
        language: "html",
        code: `<!-- Початковий код --> <div class="parent"> <div class="child">1</div> <div class="child">2</div> <div class="child">3</div> <div class="child">4</div> <div class="child">5</div> <div class="child">6</div> <div class="child">7</div> </div>`,
      },
      {
        type: "hint",
        text: "Для трьох колонок ширина контейнера: 3 × 100 + 2 × 20 = 340px. Використайте :nth-child(3n).",
      },
      {
        type: "answer",
        text: `.parent { display: flex; flex-wrap: wrap; width: 340px; } .child { box-sizing: border-box; width: 100px; height: 100px; margin-right: 20px; margin-bottom: 20px; } .child:nth-child(3n) { margin-right: 0; }`,
      },
      { type: "heading", text: "Практичне завдання №3" },
      {
        type: "task",
        text: [
          "Створіть плитку по чотири елементи в ряд.",
          "Встановіть горизонтальну та вертикальну відстань 20px.",
          "Ширина кожного елемента — 100px.",
        ],
      },
      {
        type: "code",
        language: "html",
        code: `<!-- Початковий код --> <div class="parent"> <div class="child">1</div> <div class="child">2</div> <div class="child">3</div> <div class="child">4</div> <div class="child">5</div> <div class="child">6</div> <div class="child">7</div> <div class="child">8</div> <div class="child">9</div> </div>`,
      },
      {
        type: "hint",
        text: "Для чотирьох колонок ширина контейнера: 4 × 100 + 3 × 20 = 460px. Використайте :nth-child(4n).",
      },
      {
        type: "answer",
        text: `.parent { display: flex; flex-wrap: wrap; width: 460px; } .child { box-sizing: border-box; width: 100px; height: 100px; margin-right: 20px; margin-bottom: 20px; } .child:nth-child(4n) { margin-right: 0; }`,
      },
    ],
  },

  {
    id: "css-flex-tiles-auto-width",
    title: "Плитка з автоматичною шириною блоків",
    description:
      "Вчимося задавати ширину flex-елементів у відсотках, щоб вони автоматично підлаштовувалися під ширину батьківського контейнера.",
    content: [
      {
        type: "heading",
        text: "Проблема фіксованої ширини",
      },
      {
        type: "paragraph",
        text: "Якщо ширина елементів задана в пікселях, потрібно заздалегідь розрахувати ширину контейнера. Наприклад, для чотирьох елементів по 200px контейнер має бути шириною 800px.",
      },
      {
        type: "code",
        language: "css",
        code: `
        .parent {
          display: flex;
          flex-wrap: wrap;
          width: 800px;
          margin: 50px auto;
          border: 1px solid red;
          }
        .child {
          box-sizing: border-box;
          width: 200px;
          height: 100px;
          border: 1px solid green; }`,
      },
      {
        type: "paragraph",
        text: "Такий підхід не дуже універсальний. Якщо змінити ширину контейнера, ширину дочірніх елементів також доведеться перераховувати.",
      },
      {
        type: "heading",
        text: "Ширина у відсотках",
      },
      {
        type: "paragraph",
        text: "Замість фіксованої ширини можна задати ширину елемента у відсотках. Відсоткова ширина flex-елемента розраховується від ширини його батьківського контейнера.",
      },
      {
        type: "code",
        language: "css",
        code: `
        .parent {
          display: flex;
          flex-wrap: wrap;
          width: 800px;
          margin: 50px auto;
          border: 1px solid red;
          }
        .child {
          box-sizing: border-box;
          width: 25%;
          height: 100px;
          border: 1px solid green;
          }`,
      },
      {
        type: "example",
        title: "Чотири елементи в ряд",
        text: "25% означає чверть ширини батьківського контейнера. Тому в контейнері шириною 800px кожен елемент матиме ширину 200px, і в одному рядку помістяться чотири елементи.",
      },
      { type: "heading", text: "Зміна кількості колонок" },
      {
        type: "paragraph",
        text: "Щоб змінити кількість елементів у рядку, достатньо змінити їхню відсоткову ширину.",
      },
      {
        type: "list",
        items: [
          "25% — чотири елементи в ряд.",
          "33.333% — три елементи в ряд.",
          "50% — два елементи в ряд.",
          "100% — один елемент у ряд.",
        ],
      },
      {
        type: "code",
        language: "css",
        code: `
        /* 4 елементи в ряд */
         .child {
           width: 25%;
           }
        /* 3 елементи в ряд */
         .child {
           width: 33.333333%;
           }
        /* 2 елементи в ряд */
         .child {
           width: 50%;
           }
        /* 1 елемент у ряд */
         .child {
           width: 100%;
           }`,
      },
      { type: "heading", text: "Перевага відсоткової ширини" },
      {
        type: "paragraph",
        text: "Тепер ширина самих елементів автоматично змінюється разом із шириною контейнера. Наприклад, якщо елемент має width: 25%, він завжди займає чверть доступної ширини батьківського контейнера.",
      },
      {
        type: "example",
        title: "Приклад",
        text: "Якщо контейнер має ширину 800px, елемент із width: 25% матиме 200px. Якщо контейнер стане шириною 600px, той самий елемент автоматично стане 150px.",
      },
      {
        type: "note",
        text: "Якщо до flex-елементів додати горизонтальні margin або інші зовнішні відступи, їх потрібно враховувати окремо. Чотири елементи по 25% плюс додаткові горизонтальні відступи можуть уже не поміститися в один ряд.",
      },
      { type: "heading", text: "Практичне завдання №1" },
      {
        type: "task",
        text: [
          "Змініть ширину flex-елементів так, щоб у кожному рядку було три елементи.",
          "Використовуйте відсоткову ширину.",
        ],
      },
      {
        type: "code",
        language: "css",
        code: `
        .parent {
          display: flex;
          flex-wrap: wrap;
          width: 800px;
         }
        .child {
          box-sizing: border-box;
          height: 100px;
          border: 1px solid green;
         }`,
      },
      {
        type: "hint",
        text: "Ширина одного елемента має становити одну третину ширини контейнера.",
      },
      {
        type: "answer",
        text: `
         .child {
           box-sizing: border-box;
           width: 33.333333%;
           height: 100px;
           border: 1px solid green;
           }`,
      },
      { type: "heading", text: "Практичне завдання №2" },
      {
        type: "task",
        text: [
          "Змініть ширину flex-елементів так, щоб у кожному рядку було два елементи.",
          "Задайте ширину у відсотках.",
        ],
      },
      {
        type: "code",
        language: "css",
        code: `
        .parent {
          display: flex;
          flex-wrap: wrap;
          width: 800px;
         }
        .child {
          box-sizing: border-box;
          height: 100px;
          border: 1px solid green;
         }`,
      },
      {
        type: "hint",
        text: "Два елементи мають порівну поділити ширину контейнера.",
      },
      {
        type: "answer",
        text: `
        .child {
          box-sizing: border-box;
          width: 50%;
          height: 100px;
          border: 1px solid green;
          }`,
      },
      { type: "heading", text: "Практичне завдання №3" },
      {
        type: "task",
        text: [
          "Змініть ширину flex-елементів так, щоб у кожному рядку був лише один елемент.",
          "Ширина має бути задана у відсотках.",
        ],
      },
      {
        type: "code",
        language: "css",
        code: `
        .parent {
          display: flex;
          flex-wrap: wrap;
          width: 800px;
          }
        .child {
          box-sizing: border-box;
          height: 100px;
          border: 1px solid green;
          }`,
      },
      {
        type: "hint",
        text: "Один елемент має займати всю ширину батьківського контейнера.",
      },
      {
        type: "answer",
        text: `
        .child {
          box-sizing: border-box;
          width: 100%;
          height: 100px;
          border: 1px solid green;
          }`,
      },
    ],
  },

  {
    id: "css-flex-tiles-auto-width-margin",
    title: "Відступи в плитці з автоматичною шириною блоків",
    description:
      "Як додати горизонтальні та вертикальні відступи до Flexbox-плитки з блоками, ширина яких залежить від ширини батьківського контейнера.",
    content: [
      { type: "heading", text: "Проблема з відступами" },
      {
        type: "paragraph",
        text: "Якщо зробити чотири блоки по 25% ширини та додати їм правий margin, їхня сумарна ширина разом із відступами перевищить 100%. Через це блоки можуть переноситися на наступний ряд.",
      },
      {
        type: "code",
        language: "css",
        code: `
        .child {
          width: 25%;
          margin-right: 1.5%;
          margin-bottom: 1.5%;
          }
        .child:nth-child(4n) {
          margin-right: 0;
          }`,
      },
      { type: "heading", text: "Як розрахувати правильну ширину" },
      {
        type: "paragraph",
        text: "Якщо потрібно розмістити 4 блоки в ряд і залишити між ними відступ 1.5%, між блоками буде 3 відступи. Тому із ширини кожного блока потрібно відняти частину, яка припадає на ці відступи.",
      },
      {
        type: "paragraph",
        text: "Формула: ширина блока = 100% / кількість блоків − загальний горизонтальний відступ / кількість блоків.",
      },
      {
        type: "code",
        language: "text",
        code: `
        100% / 4 - (1.5% × 3) / 4 = 25% - 1.125% = 23.875%`,
      },
      { type: "heading", text: "Розрахунок за допомогою calc()" },
      {
        type: "paragraph",
        text: "Щоб не виконувати розрахунки вручну, можна використати функцію calc(). Вона дозволяє браузеру обчислити ширину блока безпосередньо під час відображення сторінки.",
      },
      {
        type: "code",
        language: "css",
        code: `
        .child {
          width: calc(100% / 4 - 1.5% * 3 / 4);
          margin-right: 1.5%;
          margin-bottom: 1.5%;
          }
        .child:nth-child(4n) {
          margin-right: 0;
          }`,
      },
      {
        type: "example",
        title: "Як це працює",
        text: "Для 4 блоків і відступу 1.5% браузер фактично використовує ширину 23.875% для кожного блока. Три блоки отримують правий відступ, а четвертий блок у кожному рядку — ні.",
      },
      { type: "heading", text: "Як змінити кількість блоків" },
      {
        type: "paragraph",
        text: "У формулі потрібно враховувати кількість блоків у рядку. Якщо блоків 3, використовуємо 100% / 3. Якщо 5 — 100% / 5.",
      },
      {
        type: "code",
        language: "css",
        code: `
        
      /* 3 блоки, відступ 3% */
        .child {
          width: calc(100% / 3 - 3% * 2 / 3);
          }
      /* 6 блоків, відступ 0.5% */
        .child {
          width: calc(100% / 6 - 0.5% * 5 / 6);
          }`,
      },
      { type: "heading", text: "Якщо відступ заданий у пікселях" },
      {
        type: "paragraph",
        text: "Відступ можна задавати не тільки у відсотках, а й у пікселях. У такому випадку calc() дозволяє відняти від ширини контейнера потрібну кількість пікселів.",
      },
      {
        type: "code",
        language: "css",
        code: `
      /* 4 блоки, відступ 30px */ 
        .child {
           width: calc((100% - 30px * 3) / 4);
           margin-right: 30px;
           margin-bottom: 30px;
          }
        .child:nth-child(4n) {
           margin-right: 0;
          }`,
      },
      {
        type: "note",
        text: "Для N блоків у рядку буде N − 1 горизонтальних відступів. Саме їхню загальну ширину потрібно відняти від 100% ширини контейнера.",
      },
      { type: "heading", text: "Практичне завдання №1" },
      {
        type: "task",
        text: [
          "Задайте блокам ширину у відсотках так, щоб у плитці було 3 блоки в ряд.",
          "Відстань між блоками має становити 3%.",
        ],
      },
      {
        type: "code",
        language: "css",
        code: `
        .child {
          width: /* ваш код */;
          margin-right: 3%;
          margin-bottom: 3%;
          }
        .child:nth-child(3n) {
          margin-right: 0;
          }`,
      },
      {
        type: "hint",
        text: "У рядку буде 3 блоки, тому між ними буде 2 відступи. Використайте calc().",
      },
      {
        type: "answer",
        text: `
        .child {
          width: calc(100% / 3 - 3% * 2 / 3);
          margin-right: 3%;
          margin-bottom: 3%;
          }
        .child:nth-child(3n) {
          margin-right: 0;
          }`,
      },
      { type: "heading", text: "Практичне завдання №2" },
      {
        type: "task",
        text: [
          "Задайте блокам ширину у відсотках так, щоб у плитці було 6 блоків у ряд.",
          "Відстань між блоками має становити 0.5%.",
        ],
      },
      {
        type: "code",
        language: "css",
        code: `
        .child {
           width: /* ваш код */;
           margin-right: 0.5%;
           margin-bottom: 0.5%;
        }
        .child:nth-child(6n) {
           margin-right: 0;
        }`,
      },
      {
        type: "hint",
        text: "Для 6 блоків потрібно врахувати 5 горизонтальних відступів.",
      },
      {
        type: "answer",
        text: `.child { width: calc(100% / 6 - 0.5% * 5 / 6); margin-right: 0.5%; margin-bottom: 0.5%; } .child:nth-child(6n) { margin-right: 0; }`,
      },
      { type: "heading", text: "Практичне завдання №3" },
      {
        type: "task",
        text: [
          "Задайте блокам ширину у відсотках так, щоб у плитці було 4 блоки в ряд.",
          "Відстань між блоками має становити 30px.",
        ],
      },

      {
        type: "code",
        language: "css",
        code: `
        .child {
           width: /* ваш код */;
           margin-right: 30px;
           margin-bottom: 30px;
        }
        .child:nth-child(4n) {
           margin-right: 0;
        }`,
      },
      {
        type: "hint",
        text: "Між 4 блоками буде 3 відступи по 30px. Відніміть їхню загальну ширину від 100% контейнера.",
      },
      {
        type: "answer",
        text: `
        .child {
           width: calc((100% - 30px * 3) / 4);
           margin-right: 30px; margin-bottom: 30px;
          }
        .child:nth-child(4n) {
            margin-right: 0;
          }`,
      },
      { type: "heading", text: "Практичне завдання №4" },
      {
        type: "task",
        text: [
          "Задайте блокам ширину у відсотках так, щоб у плитці було 5 блоків у ряд.",
          "Відстань між блоками має становити 50px.",
        ],
      },
      {
        type: "code",
        language: "css",
        code: `
        .child { width: /* ваш код */; 
          margin-right: 50px;
          margin-bottom: 50px;
          }
         
      .child:nth-child(5n) {
         margin-right: 0;
          }`,
      },
      {
        type: "hint",
        text: "Для 5 блоків потрібно врахувати 4 горизонтальні відступи по 50px.",
      },
      {
        type: "answer",
        text: `
        .child {
           width: calc((100% - 50px * 4) / 5);
           margin-right: 50px; margin-bottom: 50px;
           }
        .child:nth-child(5n) {
           margin-right: 0; }`,
      },
    ],
  },
];
