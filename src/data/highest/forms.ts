import { Lesson } from "../types";

export const forms: Lesson[] = [
  {
    id: "html-form-basic-elements",
    title: "Основні елементи HTML-форми",
    description:
      "Вивчаємо базові елементи HTML-форм: form, input та button для створення полів введення і кнопок.",

    content: [
      {
        type: "heading",
        text: "Основні елементи HTML-форми",
      },

      {
        type: "paragraph",
        text: "HTML-форми використовуються для отримання даних від користувача. За допомогою форм можна створювати поля введення, кнопки, пошук, авторизацію та інші елементи взаємодії.",
      },

      {
        type: "list",
        items: [
          "form — основний контейнер форми.",
          "input — поле для введення даних.",
          "button — кнопка для виконання дії.",
        ],
      },

      {
        type: "heading",
        text: "Тег form",
      },

      {
        type: "paragraph",
        text: "Тег form створює область, у якій розміщуються всі елементи форми. Він об'єднує поля введення і кнопки.",
      },

      {
        type: "code",
        language: "html",
        code: `<form>
  ...
</form>`,
      },

      {
        type: "heading",
        text: "Тег input",
      },

      {
        type: "paragraph",
        text: "Тег input створює поле введення. За допомогою атрибута type можна змінювати його призначення.",
      },

      {
        type: "code",
        language: "html",
        code: `<form>
  <input type="text">
</form>`,
      },

      {
        type: "list",
        items: [
          'type="text" — звичайне текстове поле.',
          'type="password" — поле для пароля.',
          'type="email" — поле для електронної пошти.',
          'type="number" — поле для чисел.',
        ],
      },

      {
        type: "heading",
        text: "Тег button",
      },

      {
        type: "paragraph",
        text: "Тег button створює кнопку. При натисканні вона може відправляти форму або виконувати JavaScript-код.",
      },

      {
        type: "code",
        language: "html",
        code: `<button>
  Відправити
</button>`,
      },

      {
        type: "heading",
        text: "Приклад простої форми",
      },

      {
        type: "code",
        language: "html",
        code: `<form>
  <input type="text" placeholder="Ваше ім'я">

  <input type="email" placeholder="Email">

  <button>
    Надіслати
  </button>
</form>`,
      },

      {
        type: "example",
        title: "Як працює форма",
        text: "Користувач вводить дані в поля input, після чого натискає кнопку button. Форма передає ці дані для подальшої обробки.",
      },

      {
        type: "note",
        text: "Тег form сам по собі не створює красиву форму. Зовнішній вигляд задається за допомогою CSS.",
      },

      {
        type: "heading",
        text: "Практичне завдання",
      },

      {
        type: "task",
        text: [
          "№1. Створіть форму.",
          "№2. Додайте текстове поле input.",
          "№3. Додайте кнопку button.",
          "№4. Зробіть просту форму реєстрації.",
        ],
      },

      {
        type: "code",
        language: "html",
        code: `<!-- Початковий код -->

<form>

</form>`,
      },

      {
        type: "hint",
        text: "Всередині form потрібно розмістити input для введення даних та button для відправлення форми.",
      },

      {
        type: "answer",
        text: `<form>
  <input 
    type="text"
    placeholder="Ім'я"
  >

  <input
    type="email"
    placeholder="Email"
  >

  <button>
    Зареєструватися
  </button>
</form>`,
      },
    ],
  },
  {
    id: "html-input-value",
    title: "Текст input в HTML",
    description:
      "Вивчаємо атрибут value для встановлення початкового тексту в HTML-полях input.",

    content: [
      {
        type: "heading",
        text: "Текст input в HTML",
      },

      {
        type: "paragraph",
        text: "Атрибут value дозволяє задати початкове значення для елемента input. Текст, вказаний у value, одразу буде показаний у полі введення.",
      },

      {
        type: "heading",
        text: "Атрибут value",
      },

      {
        type: "paragraph",
        text: "За замовчуванням поле input порожнє. Якщо додати атрибут value, браузер покаже заданий текст всередині поля.",
      },

      {
        type: "code",
        language: "html",
        code: `<input 
  type="text" 
  value="Ваш текст"
>`,
      },

      {
        type: "example",
        title: "Приклад використання value",
        text: "У цьому прикладі поле введення одразу містить текст «Ім'я користувача». Користувач може змінити його вручну.",
      },

      {
        type: "code",
        language: "html",
        code: `<form>
  <input 
    type="text"
    value="Ім'я користувача"
  >

  <button>
    Відправити
  </button>
</form>`,
      },

      {
        type: "heading",
        text: "Різниця між value та placeholder",
      },

      {
        type: "list",
        items: [
          "value — справжнє значення поля, яке можна відправити разом із формою.",
          "placeholder — підказка, яка зникає після введення тексту.",
        ],
      },

      {
        type: "code",
        language: "html",
        code: `<input 
  type="text"
  value="Andrii"
>

<input
  type="text"
  placeholder="Введіть ім'я"
>`,
      },

      {
        type: "note",
        text: "Якщо поле має value, користувач побачить цей текст як готове значення. Якщо використовується placeholder — це лише підказка.",
      },

      {
        type: "heading",
        text: "Практичне завдання",
      },

      {
        type: "task",
        text: [
          "№1. Створіть поле input.",
          "№2. За допомогою атрибута value додайте в нього свій текст.",
          "№3. Перевірте, що текст одразу відображається в полі.",
        ],
      },

      {
        type: "code",
        language: "html",
        code: `<!-- Початковий код -->

<input type="text">`,
      },

      {
        type: "hint",
        text: "Додайте атрибут value всередину тегу input і вкажіть потрібний текст у лапках.",
      },

      {
        type: "answer",
        text: `<input
  type="text"
  value="Мій текст"
>`,
      },
    ],
  },
  {
    id: "html-form-label",
    title: "Мітка для елементів форми в HTML",
    description:
      "Вивчаємо тег label для створення підписів до елементів HTML-форми та покращення зручності користування.",

    content: [
      {
        type: "heading",
        text: "Мітка для елементів форми в HTML",
      },

      {
        type: "paragraph",
        text: "Тег label використовується для створення підпису до елементів форми. Він допомагає користувачу зрозуміти, що потрібно вводити у поле.",
      },

      {
        type: "heading",
        text: "Тег label",
      },

      {
        type: "paragraph",
        text: "Мітку можна зв'язати з елементом input за допомогою атрибута for. Значення for повинно збігатися зі значенням атрибута id у поля форми.",
      },

      {
        type: "code",
        language: "html",
        code: `<label for="name">
  Ваше ім'я
</label>

<input 
  id="name"
  type="text"
>`,
      },

      {
        type: "example",
        title: "Як працює label",
        text: "Якщо натиснути на текст мітки, пов'язане поле input стане активним. Це особливо зручно на мобільних пристроях.",
      },

      {
        type: "code",
        language: "html",
        code: `<form>
  <label for="email">
    Email:
  </label>

  <input
    id="email"
    type="text"
  >

  <button>
    Відправити
  </button>
</form>`,
      },

      {
        type: "heading",
        text: "Label без атрибута for",
      },

      {
        type: "paragraph",
        text: "Існує ще один спосіб — помістити input всередину label. У цьому випадку зв'язок створюється автоматично.",
      },

      {
        type: "code",
        language: "html",
        code: `<label>
  Ім'я:
  <input type="text">
</label>`,
      },

      {
        type: "list",
        items: [
          "label робить форму зрозумілішою.",
          "Клік по тексту label активує відповідне поле.",
          "Атрибут for повинен відповідати id елемента форми.",
          "Label покращує доступність сайту для користувачів.",
        ],
      },

      {
        type: "note",
        text: "Рекомендується завжди використовувати label для полів форми. Форма без підписів змушує користувача вгадувати, що потрібно вводити.",
      },

      {
        type: "heading",
        text: "Практичне завдання",
      },

      {
        type: "task",
        text: [
          "№1. Створіть поле введення імені.",
          "№2. Додайте до нього мітку за допомогою label.",
          "№3. Зв'яжіть label та input через for і id.",
        ],
      },

      {
        type: "code",
        language: "html",
        code: `<!-- Початковий код -->

<input type="text">`,
      },

      {
        type: "hint",
        text: "Додайте label перед input. Вкажіть однакові значення для for у label та id у input.",
      },

      {
        type: "answer",
        text: `<label for="username">
  Ім'я користувача:
</label>

<input
  id="username"
  type="text"
>`,
      },
    ],
  },
  {
    id: "html-form-checkbox",
    title: "Чекбокси в HTML",
    description:
      "Вивчаємо елемент checkbox для створення перемикачів вибору в HTML-формах.",

    content: [
      {
        type: "heading",
        text: "Чекбокси в HTML",
      },

      {
        type: "paragraph",
        text: "Чекбокс (checkbox) — це елемент форми, який дозволяє користувачу вибрати один або декілька варіантів із запропонованого списку.",
      },

      {
        type: "heading",
        text: "Створення checkbox",
      },

      {
        type: "paragraph",
        text: 'Для створення чекбокса використовується тег input з атрибутом type="checkbox".',
      },

      {
        type: "code",
        language: "html",
        code: `<input 
  type="checkbox"
>`,
      },

      {
        type: "example",
        title: "Простий чекбокс",
        text: "Користувач може поставити або зняти позначку у полі checkbox.",
      },

      {
        type: "code",
        language: "html",
        code: `<label>
  <input type="checkbox">
  Я погоджуюсь з правилами
</label>`,
      },

      {
        type: "heading",
        text: "Кілька чекбоксів",
      },

      {
        type: "paragraph",
        text: "На відміну від радіокнопок, checkbox дозволяє вибрати декілька варіантів одночасно.",
      },

      {
        type: "code",
        language: "html",
        code: `<form>

  <label>
    <input type="checkbox">
    HTML
  </label>

  <label>
    <input type="checkbox">
    CSS
  </label>

  <label>
    <input type="checkbox">
    JavaScript
  </label>

</form>`,
      },

      {
        type: "heading",
        text: "Атрибут checked",
      },

      {
        type: "paragraph",
        text: "Атрибут checked дозволяє зробити чекбокс вибраним за замовчуванням.",
      },

      {
        type: "code",
        language: "html",
        code: `<input 
  type="checkbox"
  checked
>`,
      },

      {
        type: "list",
        items: [
          'checkbox створюється через input type="checkbox".',
          "Можна вибрати декілька чекбоксів одночасно.",
          "checked встановлює активний стан за замовчуванням.",
          "label робить натискання зручнішим для користувача.",
        ],
      },

      {
        type: "note",
        text: "Чекбокси часто використовують для налаштувань, згоди з правилами, вибору категорій та фільтрів.",
      },

      {
        type: "heading",
        text: "Практичне завдання",
      },

      {
        type: "task",
        text: [
          "№1. Створіть форму з чекбоксом.",
          "№2. Додайте текст біля нього за допомогою label.",
          "№3. Зробіть один чекбокс вибраним за замовчуванням.",
        ],
      },

      {
        type: "code",
        language: "html",
        code: `<!-- Початковий код -->

<input type="checkbox">`,
      },

      {
        type: "hint",
        text: "Використайте атрибут checked, щоб чекбокс був увімкнений одразу після відкриття сторінки.",
      },

      {
        type: "answer",
        text: `<label>
  <input 
    type="checkbox"
    checked
  >
  Я приймаю умови
</label>`,
      },
    ],
  },
  {
    id: "html-radio-input",
    title: "Радіо перемикачі в HTML",
    description:
      'Вивчаємо елемент input type="radio" для створення вибору одного варіанта зі списку.',

    content: [
      {
        type: "heading",
        text: "Радіо перемикачі в HTML",
      },

      {
        type: "paragraph",
        text: "Радіо кнопки використовуються у формах, коли користувач повинен вибрати тільки один варіант із декількох запропонованих.",
      },

      {
        type: "paragraph",
        text: 'Для створення радіо перемикача використовується тег input з атрибутом type="radio".',
      },

      {
        type: "code",
        language: "html",
        code: `<input type="radio">

<input type="radio">

<input type="radio">`,
      },

      {
        type: "heading",
        text: "Групування радіо кнопок",
      },

      {
        type: "paragraph",
        text: "Щоб декілька радіо кнопок працювали як одна група, їм потрібно задати однаковий атрибут name.",
      },

      {
        type: "code",
        language: "html",
        code: `<form>

  <label>
    <input type="radio" name="city">
    Київ
  </label>

  <label>
    <input type="radio" name="city">
    Львів
  </label>

  <label>
    <input type="radio" name="city">
    Одеса
  </label>

</form>`,
      },

      {
        type: "example",
        title: "Як працює name",
        text: "Усі кнопки з однаковим name належать до однієї групи. Після вибору одного варіанта інші автоматично вимикаються.",
      },

      {
        type: "heading",
        text: "Вибраний варіант за замовчуванням",
      },

      {
        type: "paragraph",
        text: "За допомогою атрибута checked можна зробити один варіант вибраним одразу після відкриття сторінки.",
      },

      {
        type: "code",
        language: "html",
        code: `<form>

<label>
  <input type="radio" name="gender" checked>
  Чоловік
</label>

<label>
  <input type="radio" name="gender">
  Жінка
</label>

</form>`,
      },

      {
        type: "list",
        items: [
          'type="radio" — створює радіо кнопку.',
          "name — об'єднує кнопки в одну групу.",
          "checked — вибирає кнопку за замовчуванням.",
          "value — значення, яке буде передано при відправці форми.",
        ],
      },

      {
        type: "heading",
        text: "Приклад форми з радіо кнопками",
      },

      {
        type: "code",
        language: "html",
        code: `<form>

<p>Оберіть спосіб доставки:</p>

<label>
  <input 
    type="radio" 
    name="delivery"
    value="courier">
  Кур'єр
</label>

<br>

<label>
  <input 
    type="radio" 
    name="delivery"
    value="pickup">
  Самовивіз
</label>

<br>

<label>
  <input 
    type="radio" 
    name="delivery"
    value="post">
  Пошта
</label>

<br><br>

<button>
  Відправити
</button>

</form>`,
      },

      {
        type: "note",
        text: "Якщо потрібно дозволити вибрати декілька варіантів одночасно — використовуйте checkbox, а не radio.",
      },

      {
        type: "heading",
        text: "Практичне завдання",
      },

      {
        type: "task",
        text: [
          "№1. Створіть форму вибору статі.",
          "№2. Додайте три варіанти: Чоловік, Жінка, Інше.",
          "№3. Об'єднайте кнопки одним атрибутом name.",
          "№4. Зробіть перший варіант вибраним за замовчуванням.",
        ],
      },

      {
        type: "code",
        language: "html",
        code: `<!-- Ваш код -->

<form>

  <label>
    <input type="radio" name="gender">
    Чоловік
  </label>

  <label>
    <input type="radio" name="gender">
    Жінка
  </label>

  <label>
    <input type="radio" name="gender">
    Інше
  </label>

</form>`,
      },

      {
        type: "hint",
        text: "Пам'ятайте: усі radio кнопки, які повинні працювати разом, мають мати однаковий name.",
      },

      {
        type: "answer",
        text: `<form>

<label>
  <input 
    type="radio" 
    name="gender"
    checked>
  Чоловік
</label>

<label>
  <input 
    type="radio" 
    name="gender">
  Жінка
</label>

<label>
  <input 
    type="radio" 
    name="gender">
  Інше
</label>

</form>`,
      },
    ],
  },
  {
    id: "html-textarea",
    title: "Многострочные поля ввода в HTML",
    description:
      "Вивчаємо тег textarea для створення багаторядкових полів введення у HTML-формах.",

    content: [
      {
        type: "heading",
        text: "Многострочные поля ввода в HTML",
      },

      {
        type: "paragraph",
        text: "Для створення поля, у яке користувач може вводити кілька рядків тексту, використовується тег textarea.",
      },

      {
        type: "paragraph",
        text: "На відміну від input, який використовується для короткого тексту, textarea дозволяє вводити великі об'єми інформації: повідомлення, коментарі, описи тощо.",
      },

      {
        type: "heading",
        text: "Базовий синтаксис textarea",
      },

      {
        type: "code",
        language: "html",
        code: `<textarea>
Текст всередині поля
</textarea>`,
      },

      {
        type: "paragraph",
        text: "Текст, який знаходиться між відкриваючим і закриваючим тегом textarea, буде показаний всередині поля.",
      },

      {
        type: "heading",
        text: "Атрибути textarea",
      },

      {
        type: "list",
        items: [
          "rows — задає кількість рядків поля.",
          "cols — задає ширину поля у символах.",
          "placeholder — показує підказку всередині поля.",
          "name — ім'я поля для відправки форми.",
          "disabled — робить поле недоступним для введення.",
        ],
      },

      {
        type: "heading",
        text: "Приклад багаторядкового поля",
      },

      {
        type: "code",
        language: "html",
        code: `<form>
  <label for="message">
    Ваше повідомлення:
  </label>

  <textarea 
    id="message"
    name="message"
    rows="5"
    cols="30"
    placeholder="Введіть текст..."
  ></textarea>

</form>`,
      },

      {
        type: "example",
        title: "Результат",
        text: "Користувач отримує поле, де може написати повідомлення у декілька рядків.",
      },

      {
        type: "heading",
        text: "Textarea у формах",
      },

      {
        type: "paragraph",
        text: "Найчастіше textarea використовується у формах зворотного зв'язку, коментарях та анкетах.",
      },

      {
        type: "code",
        language: "html",
        code: `<form>

  <label>
    Ім'я:
    <input type="text">
  </label>

  <br><br>

  <label>
    Коментар:
    <textarea
      rows="4"
      placeholder="Ваш коментар">
    </textarea>
  </label>

  <br><br>

  <button>
    Надіслати
  </button>

</form>`,
      },

      {
        type: "note",
        text: "Textarea не має атрибута value, як input. Значення за замовчуванням записують між тегами textarea.",
      },

      {
        type: "code",
        language: "html",
        code: `<textarea>
Текст за замовчуванням
</textarea>`,
      },

      {
        type: "heading",
        text: "Практичне завдання",
      },

      {
        type: "task",
        text: [
          "№1. Створіть форму з полем textarea.",
          "№2. Додайте label з назвою поля.",
          "№3. Встановіть rows і cols.",
          "№4. Додайте placeholder з підказкою.",
        ],
      },

      {
        type: "code",
        language: "html",
        code: `<!-- Початковий код -->

<form>

</form>`,
      },

      {
        type: "hint",
        text: "Використовуйте textarea замість input, коли потрібно дозволити користувачу вводити багато рядків тексту.",
      },

      {
        type: "answer",
        text: `<form>

  <label for="text">
    Повідомлення:
  </label>

  <textarea
    id="text"
    name="text"
    rows="5"
    cols="40"
    placeholder="Введіть повідомлення">
  </textarea>

</form>`,
      },
    ],
  },
  {
    id: "css-textarea-resize",
    title: "Зміна розміру textarea в CSS",
    description:
      "Вивчаємо властивість resize для керування можливістю зміни розміру textarea користувачем.",

    content: [
      {
        type: "heading",
        text: "Зміна розміру textarea в CSS",
      },

      {
        type: "paragraph",
        text: "За замовчуванням користувач може змінювати розмір елемента textarea за допомогою мишки. За це відповідає CSS-властивість resize.",
      },

      {
        type: "heading",
        text: "Властивість resize",
      },

      {
        type: "list",
        items: [
          "both — дозволяє змінювати ширину та висоту.",
          "horizontal — дозволяє змінювати тільки ширину.",
          "vertical — дозволяє змінювати тільки висоту.",
          "none — повністю забороняє зміну розміру.",
          "auto — значення за замовчуванням.",
        ],
      },

      {
        type: "heading",
        text: "Заборона зміни розміру textarea",
      },

      {
        type: "paragraph",
        text: "За допомогою resize: none можна прибрати можливість розтягувати поле вводу.",
      },

      {
        type: "code",
        language: "css",
        code: `textarea {
  resize: none;
}`,
      },

      {
        type: "heading",
        text: "Зміна тільки по вертикалі",
      },

      {
        type: "code",
        language: "css",
        code: `textarea {
  resize: vertical;
}`,
      },

      {
        type: "heading",
        text: "Зміна тільки по горизонталі",
      },

      {
        type: "code",
        language: "css",
        code: `textarea {
  resize: horizontal;
}`,
      },

      {
        type: "heading",
        text: "Приклад використання",
      },

      {
        type: "code",
        language: "html",
        code: `<textarea>
Напишіть повідомлення
</textarea>`,
      },

      {
        type: "code",
        language: "css",
        code: `textarea {
  width: 300px;
  height: 150px;

  padding: 10px;

  font-size: 16px;

  border: 1px solid #333;

  resize: vertical;
}`,
      },

      {
        type: "example",
        title: "Результат",
        text: "Користувач може змінювати висоту поля, але не може змінити його ширину.",
      },

      {
        type: "heading",
        text: "Практичне завдання",
      },

      {
        type: "task",
        text: [
          "№1. Створіть textarea шириною 300px і висотою 150px.",
          "№2. Додайте CSS-властивість resize.",
          "№3. Перевірте роботу значень vertical, horizontal та none.",
        ],
      },

      {
        type: "code",
        language: "html",
        code: `<!-- Початковий код -->

<textarea>
Ваш текст
</textarea>`,
      },

      {
        type: "hint",
        text: "Якщо textarea використовується у формах, часто ставлять resize: vertical, щоб користувач міг збільшити поле для довгого тексту, але не ламав ширину макета.",
      },

      {
        type: "answer",
        text: `<textarea>
Ваш текст
</textarea>

<style>
textarea {
  width: 300px;
  height: 150px;
  resize: vertical;
}
</style>`,
      },
    ],
  },
  {
    id: "html-input-placeholder",
    title: "Підказка placeholder в HTML",
    description:
      "Вивчаємо атрибут placeholder для створення підказок у полях введення HTML-форм.",

    content: [
      {
        type: "heading",
        text: "Підказка placeholder в HTML",
      },

      {
        type: "paragraph",
        text: "Атрибут placeholder додає підказку всередині поля введення. Цей текст показується користувачу до того моменту, поки він не почне вводити свої дані.",
      },

      {
        type: "paragraph",
        text: "Placeholder часто використовують у формах для пояснення, що саме потрібно ввести у поле.",
      },

      {
        type: "heading",
        text: "Синтаксис placeholder",
      },

      {
        type: "code",
        language: "html",
        code: `<input 
  type="text" 
  placeholder="Введіть ваше ім'я"
>`,
      },

      {
        type: "paragraph",
        text: "Текст, який знаходиться у placeholder, не є значенням поля. Він автоматично зникає після початку введення.",
      },

      {
        type: "heading",
        text: "Приклад форми",
      },

      {
        type: "code",
        language: "html",
        code: `<form>

  <label>
    Ім'я:
  </label>

  <input 
    type="text"
    placeholder="Наприклад: Андрій"
  >

  <br><br>

  <label>
    Email:
  </label>

  <input
    type="email"
    placeholder="example@mail.com"
  >

</form>`,
      },

      {
        type: "example",
        title: "Результат",
        text: "У полях форми відображаються підказки, які допомагають користувачу зрозуміти формат введення.",
      },

      {
        type: "heading",
        text: "Placeholder у textarea",
      },

      {
        type: "paragraph",
        text: "Атрибут placeholder також можна використовувати у багаторядкових полях textarea.",
      },

      {
        type: "code",
        language: "html",
        code: `<textarea
  placeholder="Напишіть ваше повідомлення..."
></textarea>`,
      },

      {
        type: "note",
        text: "Placeholder не замінює label. Для доступності краще використовувати label разом із placeholder.",
      },

      {
        type: "heading",
        text: "Практичне завдання",
      },

      {
        type: "task",
        text: [
          "№1. Створіть поле input для імені.",
          "№2. Додайте placeholder з прикладом введення.",
          "№3. Створіть поле email з власною підказкою.",
        ],
      },

      {
        type: "code",
        language: "html",
        code: `<!-- Початковий код -->

<form>

  <input type="text">

  <input type="email">

</form>`,
      },

      {
        type: "hint",
        text: 'Placeholder задається прямо всередині HTML-тега через атрибут placeholder="текст підказки".',
      },

      {
        type: "answer",
        text: `<form>

  <input
    type="text"
    placeholder="Ваше ім'я"
  >

  <br><br>

  <input
    type="email"
    placeholder="Ваш email"
  >

</form>`,
      },
    ],
  },
  {
    id: "css-placeholder-pseudo-element",
    title: "Псевдоелемент placeholder в CSS",
    description:
      "Вивчаємо псевдоелемент ::placeholder для стилізації тексту підказки в HTML-полях введення.",

    content: [
      {
        type: "heading",
        text: "Псевдоелемент placeholder в CSS",
      },

      {
        type: "paragraph",
        text: "Псевдоелемент ::placeholder використовується для зміни стилю тексту, який знаходиться всередині атрибута placeholder.",
      },

      {
        type: "paragraph",
        text: "За допомогою ::placeholder можна змінювати колір, розмір, шрифт та інші властивості тексту підказки.",
      },

      {
        type: "heading",
        text: "Синтаксис ::placeholder",
      },

      {
        type: "code",
        language: "css",
        code: `input::placeholder {
  color: gray;
}`,
      },

      {
        type: "heading",
        text: "Приклад стилізації placeholder",
      },

      {
        type: "code",
        language: "html",
        code: `<input
  type="text"
  placeholder="Введіть ваше ім'я"
>`,
      },

      {
        type: "code",
        language: "css",
        code: `input::placeholder {
  color: blue;
  font-size: 18px;
  font-style: italic;
}`,
      },

      {
        type: "example",
        title: "Результат",
        text: "Текст підказки всередині поля стане синім, більшим та курсивним.",
      },

      {
        type: "heading",
        text: "Стилізація textarea",
      },

      {
        type: "paragraph",
        text: "Псевдоелемент ::placeholder працює не тільки з input, але й з textarea.",
      },

      {
        type: "code",
        language: "html",
        code: `<textarea
  placeholder="Напишіть повідомлення"
></textarea>`,
      },

      {
        type: "code",
        language: "css",
        code: `textarea::placeholder {
  color: green;
  font-size: 16px;
}`,
      },

      {
        type: "note",
        text: "Псевдоелемент ::placeholder змінює тільки текст-підказку. Значення, яке вводить користувач, він не стилізує.",
      },

      {
        type: "heading",
        text: "Практичне завдання",
      },

      {
        type: "task",
        text: [
          "№1. Створіть поле input з placeholder.",
          "№2. Змініть колір тексту підказки.",
          "№3. Задайте власний розмір та стиль шрифту для placeholder.",
        ],
      },

      {
        type: "code",
        language: "html",
        code: `<!-- Початковий код -->

<input
  type="text"
  placeholder="Ваше ім'я"
>`,
      },

      {
        type: "hint",
        text: "Для стилізації placeholder використовуйте селектор елемента::placeholder.",
      },

      {
        type: "answer",
        text: `<input
  type="text"
  placeholder="Ваше ім'я"
>

<style>
input::placeholder {
  color: red;
  font-size: 18px;
}
</style>`,
      },
    ],
  },
  {
    id: "html-select-dropdown",
    title: "Випадаючі списки в HTML",
    description:
      "Вивчаємо створення випадаючих списків за допомогою HTML-тега select та елемента option.",

    content: [
      {
        type: "heading",
        text: "Випадаючі списки в HTML",
      },

      {
        type: "paragraph",
        text: "Для створення випадаючого списку в HTML використовується тег select. Всередині нього розміщують варіанти вибору за допомогою тегів option.",
      },

      {
        type: "heading",
        text: "Основна структура select",
      },

      {
        type: "code",
        language: "html",
        code: `<select>
  <option>Варіант 1</option>
  <option>Варіант 2</option>
  <option>Варіант 3</option>
</select>`,
      },

      {
        type: "list",
        items: [
          "select — створює випадаючий список.",
          "option — окремий пункт списку.",
          "selected — робить пункт вибраним за замовчуванням.",
          "value — задає значення пункту для відправки форми.",
        ],
      },

      {
        type: "heading",
        text: "Приклад випадаючого списку",
      },

      {
        type: "code",
        language: "html",
        code: `<label>
  Оберіть місто:
</label>

<select>
  <option>Київ</option>
  <option>Львів</option>
  <option>Одеса</option>
  <option>Харків</option>
</select>`,
      },

      {
        type: "heading",
        text: "Вибраний пункт за замовчуванням",
      },

      {
        type: "paragraph",
        text: "За допомогою атрибута selected можна одразу встановити активний пункт списку.",
      },

      {
        type: "code",
        language: "html",
        code: `<select>
  <option>Червоний</option>
  <option selected>Зелений</option>
  <option>Синій</option>
</select>`,
      },

      {
        type: "heading",
        text: "Використання value",
      },

      {
        type: "paragraph",
        text: "Атрибут value задає значення, яке буде передано при відправці форми.",
      },

      {
        type: "code",
        language: "html",
        code: `<select>
  <option value="uk">Україна</option>
  <option value="pl">Польща</option>
  <option value="de">Німеччина</option>
</select>`,
      },

      {
        type: "example",
        title: "Результат",
        text: "Користувач бачить назви країн, але форма передає їхні значення uk, pl та de.",
      },

      {
        type: "heading",
        text: "Практичне завдання",
      },

      {
        type: "task",
        text: [
          "№1. Створіть випадаючий список із кількома варіантами.",
          "№2. Додайте label перед списком.",
          "№3. Зробіть один пункт вибраним за замовчуванням.",
        ],
      },

      {
        type: "code",
        language: "html",
        code: `<!-- Початковий код -->

<select>

</select>`,
      },

      {
        type: "hint",
        text: "Пункти випадаючого списку створюються тільки через option, який знаходиться всередині select.",
      },

      {
        type: "answer",
        text: `<label>
  Оберіть професію:
</label>

<select>
  <option>Розробник</option>
  <option selected>Електрик</option>
  <option>Дизайнер</option>
</select>`,
      },
    ],
  },
  {
    id: "html-form-disabled",
    title: "Блокування елементів форми в HTML",
    description:
      "Вивчаємо атрибут disabled для блокування елементів HTML-форми: input, button, select та textarea.",

    content: [
      {
        type: "heading",
        text: "Блокування елементів форми в HTML",
      },

      {
        type: "paragraph",
        text: "Для тимчасового блокування елементів форми використовується атрибут disabled. Заблокований елемент не дозволяє користувачу змінювати значення або взаємодіяти з ним.",
      },

      {
        type: "list",
        items: [
          "disabled — робить елемент неактивним.",
          "Користувач не може змінити значення заблокованого поля.",
          "Заблоковані поля не передаються при відправці форми.",
          "Атрибут можна використовувати для input, button, select та textarea.",
        ],
      },

      {
        type: "heading",
        text: "Блокування input",
      },

      {
        type: "paragraph",
        text: "За допомогою disabled можна заборонити введення тексту у поле.",
      },

      {
        type: "code",
        language: "html",
        code: `<input type="text" value="Текст доступний">

<input type="text" value="Текст заблокований" disabled>`,
      },

      {
        type: "heading",
        text: "Блокування кнопки",
      },

      {
        type: "paragraph",
        text: "Заблокована кнопка не реагує на натискання.",
      },

      {
        type: "code",
        language: "html",
        code: `<button>
  Відправити
</button>

<button disabled>
  Недоступно
</button>`,
      },

      {
        type: "heading",
        text: "Блокування select",
      },

      {
        type: "code",
        language: "html",
        code: `<select disabled>
  <option>Київ</option>
  <option>Львів</option>
  <option>Одеса</option>
</select>`,
      },

      {
        type: "heading",
        text: "Блокування textarea",
      },

      {
        type: "code",
        language: "html",
        code: `<textarea disabled>
Цей текст не можна змінити
</textarea>`,
      },

      {
        type: "example",
        title: "Приклад форми",
        text: "У формах часто блокують поля, коли користувач ще не виконав певну дію. Наприклад, кнопка оплати може бути недоступною до погодження умов.",
      },

      {
        type: "code",
        language: "html",
        code: `<form>

  <label>
    Ім'я:
    <input type="text">
  </label>

  <br>

  <label>
    Email:
    <input type="email" disabled>
  </label>

  <br>

  <button>
    Надіслати
  </button>

</form>`,
      },
      {
        type: "note",
        text: "disabled відрізняється від readonly: readonly дозволяє відправити значення форми, а disabled повністю вимикає елемент.",
      },
      {
        type: "heading",
        text: "Практичне завдання",
      },

      {
        type: "task",
        text: [
          "№1. Створіть форму з кількома полями.",
          "№2. Одне поле input зробіть заблокованим.",
          "№3. Додайте кнопку, яка також буде disabled.",
        ],
      },

      {
        type: "code",
        language: "html",
        code: `<!-- Початковий код -->

<form>

  <input type="text">

  <input type="text">

  <button>
    
  </button>

</form>`,
      },

      {
        type: "hint",
        text: "Щоб зробити елемент неактивним, достатньо додати атрибут disabled без значення.",
      },

      {
        type: "answer",
        text: `<form>

  <input type="text" value="Активне поле">

  <input type="text" value="Заблоковане поле" disabled>

  <button disabled>
    Надіслати
  </button>

</form>`,
      },
    ],
  },
  {
    id: "html-form-legend",
    title: "Підпис форми в HTML",
    description:
      "Вивчаємо тег legend для створення підпису групи полів форми за допомогою fieldset.",

    content: [
      {
        type: "heading",
        text: "Підпис форми в HTML",
      },

      {
        type: "paragraph",
        text: "Для створення заголовка або підпису групи полів форми використовується тег legend. Він завжди використовується разом із тегом fieldset.",
      },

      {
        type: "list",
        items: [
          "fieldset — групує пов'язані елементи форми.",
          "legend — задає назву або опис цієї групи.",
          "legend повинен бути першим дочірнім елементом fieldset.",
        ],
      },

      {
        type: "heading",
        text: "Приклад використання fieldset і legend",
      },

      {
        type: "code",
        language: "html",
        code: `<fieldset>

  <legend>
    Особисті дані
  </legend>

  <label>
    Ім'я:
    <input type="text">
  </label>

  <br>

  <label>
    Прізвище:
    <input type="text">
  </label>

</fieldset>`,
      },

      {
        type: "example",
        title: "Групування полів форми",
        text: "За допомогою fieldset можна об'єднати поля, які відносяться до однієї категорії, а legend пояснює користувачу, що саме потрібно заповнити.",
      },

      {
        type: "code",
        language: "html",
        code: `<form>

  <fieldset>

    <legend>
      Контактна інформація
    </legend>

    <label>
      Email:
      <input type="email">
    </label>

    <br>

    <label>
      Телефон:
      <input type="tel">
    </label>

  </fieldset>

</form>`,
      },

      {
        type: "heading",
        text: "Стилізація legend через CSS",
      },

      {
        type: "paragraph",
        text: "Тег legend можна оформити за допомогою CSS так само, як звичайний текстовий елемент.",
      },

      {
        type: "code",
        language: "css",
        code: `fieldset {
  border: 2px solid #333;
  padding: 20px;
}

legend {
  font-size: 20px;
  font-weight: bold;
  color: blue;
}`,
      },
      {
        type: "note",
        text: "fieldset і legend покращують структуру форми, роблять її зрозумілішою для користувачів та допомагають технологіям доступності правильно читати форму.",
      },
      {
        type: "heading",
        text: "Практичне завдання",
      },

      {
        type: "task",
        text: [
          "№1. Створіть форму реєстрації.",
          "№2. Об'єднайте поля користувача через fieldset.",
          "№3. Додайте підпис групи за допомогою legend.",
        ],
      },

      {
        type: "code",
        language: "html",
        code: `<!-- Початковий код -->

<form>

  <input type="text">

  <input type="email">

</form>`,
      },

      {
        type: "hint",
        text: "Спочатку створіть fieldset, а вже всередину нього додайте legend та поля форми.",
      },

      {
        type: "answer",
        text: `<form>

  <fieldset>

    <legend>
      Реєстрація
    </legend>

    <label>
      Ім'я:
      <input type="text">
    </label>

    <br>

    <label>
      Email:
      <input type="email">
    </label>

  </fieldset>

</form>`,
      },
    ],
  },
  {
    id: "html-input-buttons-submit-reset",
    title: "Інпут у вигляді кнопки в HTML",
    description:
      "Вивчаємо кнопки форми через input submit та reset для відправлення і очищення даних.",

    content: [
      {
        type: "heading",
        text: "Інпут у вигляді кнопки в HTML",
      },

      {
        type: "paragraph",
        text: "У HTML елемент input може використовуватися не тільки для введення тексту, але й для створення кнопок форми.",
      },

      {
        type: "list",
        items: [
          "submit — кнопка для відправлення форми.",
          "reset — кнопка для очищення всіх полів форми та повернення початкових значень.",
        ],
      },

      {
        type: "heading",
        text: "Кнопка submit",
      },

      {
        type: "paragraph",
        text: "Тип submit створює кнопку, яка відправляє дані форми на сервер.",
      },

      {
        type: "code",
        language: "html",
        code: `<form>

  <input type="text" name="name">

  <input type="submit" value="Відправити">

</form>`,
      },

      {
        type: "example",
        title: "Як працює submit",
        text: "Коли користувач натискає кнопку, браузер збирає дані з полів форми та відправляє їх за вказаною адресою.",
      },

      {
        type: "code",
        language: "html",
        code: `<form action="/send">

  <label>
    Ім'я:
    <input type="text" name="username">
  </label>

  <br>

  <input 
    type="submit" 
    value="Надіслати"
  >

</form>`,
      },

      {
        type: "heading",
        text: "Кнопка reset",
      },

      {
        type: "paragraph",
        text: "Тип reset очищає введені користувачем значення і повертає форму до початкового стану.",
      },

      {
        type: "code",
        language: "html",
        code: `<form>

  <input 
    type="text" 
    value="Андрій"
  >

  <input 
    type="reset" 
    value="Очистити"
  >

</form>`,
      },

      {
        type: "heading",
        text: "Стилізація кнопок через CSS",
      },

      {
        type: "code",
        language: "css",
        code: `input[type="submit"],
input[type="reset"] {
  padding: 10px 20px;
  border: none;
  color: white;
  background-color: blue;
  cursor: pointer;
}

input[type="submit"]:hover,
input[type="reset"]:hover {
  background-color: darkblue;
}`,
      },
      {
        type: "note",
        text: "У сучасних проєктах часто використовують тег button замість input для кнопок, оскільки він дозволяє додавати складніший вміст усередину кнопки.",
      },
      {
        type: "heading",
        text: "Практичне завдання",
      },

      {
        type: "task",
        text: [
          "№1. Створіть форму з полем для введення імені.",
          "№2. Додайте кнопку submit з текстом «Відправити».",
          "№3. Додайте кнопку reset з текстом «Очистити».",
        ],
      },

      {
        type: "code",
        language: "html",
        code: `<!-- Початковий код -->

<form>

  <input type="text">

</form>`,
      },

      {
        type: "hint",
        text: 'Для створення кнопки використовуйте input з атрибутом type="submit" або type="reset".',
      },

      {
        type: "answer",
        text: `<form>

  <label>
    Ім'я:
    <input type="text">
  </label>

  <br>

  <input 
    type="submit" 
    value="Відправити"
  >

  <input 
    type="reset" 
    value="Очистити"
  >

</form>`,
      },
    ],
  },
  {
    id: "html-input-password",
    title: "Поле для введення пароля в HTML",
    description:
      "Вивчаємо тип input password для створення прихованого поля введення пароля у HTML-формах.",

    content: [
      {
        type: "heading",
        text: "Поле для введення пароля в HTML",
      },

      {
        type: "paragraph",
        text: 'Для створення поля, у якому введені символи приховуються, використовується тег input з атрибутом type="password".',
      },

      {
        type: "list",
        items: [
          'type="password" — створює поле для введення пароля.',
          "Введені символи відображаються у вигляді крапок або зірочок.",
          "Таке поле використовується для паролів, PIN-кодів та секретних даних.",
        ],
      },

      {
        type: "heading",
        text: "Приклад поля password",
      },

      {
        type: "code",
        language: "html",
        code: `<form>

  <label>
    Пароль:
    <input type="password">
  </label>

</form>`,
      },

      {
        type: "example",
        title: "Форма входу",
        text: "Найчастіше password використовується разом з полем логіна або email для створення форми авторизації.",
      },

      {
        type: "code",
        language: "html",
        code: `<form>

  <label>
    Email:
    <input 
      type="email"
      name="email"
    >
  </label>

  <br>

  <label>
    Пароль:
    <input 
      type="password"
      name="password"
    >
  </label>

  <br>

  <input 
    type="submit"
    value="Увійти"
  >

</form>`,
      },

      {
        type: "heading",
        text: "Додаткові атрибути password",
      },

      {
        type: "list",
        items: [
          "placeholder — показує підказку всередині поля.",
          "value — задає початкове значення.",
          "maxlength — обмежує максимальну кількість символів.",
          "required — робить поле обов'язковим.",
        ],
      },

      {
        type: "code",
        language: "html",
        code: `<input
  type="password"
  placeholder="Введіть пароль"
  maxlength="20"
  required
>`,
      },
      {
        type: "note",
        text: "Поле password лише приховує символи на екрані. Для безпеки справжні паролі повинні передаватися через HTTPS та правильно оброблятися на сервері.",
      },
      {
        type: "heading",
        text: "Практичне завдання",
      },

      {
        type: "task",
        text: [
          "№1. Створіть форму входу.",
          "№2. Додайте поле для email.",
          "№3. Додайте поле password.",
          "№4. Додайте кнопку для відправлення форми.",
        ],
      },

      {
        type: "code",
        language: "html",
        code: `<!-- Початковий код -->

<form>

  <input type="email">

</form>`,
      },

      {
        type: "hint",
        text: 'Для прихованого введення використовуйте input з type="password".',
      },

      {
        type: "answer",
        text: `<form>

  <label>
    Email:
    <input type="email">
  </label>

  <br>

  <label>
    Пароль:
    <input type="password">
  </label>

  <br>

  <input
    type="submit"
    value="Увійти"
  >

</form>`,
      },
    ],
  },
  {
    id: "html-input-file",
    title: "Тип інпута для завантаження файлу в HTML",
    description:
      "Вивчаємо тип input file для створення поля вибору та завантаження файлів у HTML-формах.",

    content: [
      {
        type: "heading",
        text: "Тип інпута file в HTML",
      },

      {
        type: "paragraph",
        text: 'Для створення поля вибору файлу використовується тег input з атрибутом type="file". За допомогою нього користувач може вибрати файл зі свого пристрою.',
      },

      {
        type: "list",
        items: [
          'type="file" — створює кнопку вибору файлу.',
          "Користувач може вибрати файл зі свого комп'ютера або телефону.",
          "Вибраний файл можна передати на сервер через форму.",
        ],
      },

      {
        type: "heading",
        text: "Простий приклад завантаження файлу",
      },

      {
        type: "code",
        language: "html",
        code: `<form>

  <label>
    Виберіть файл:
    <input type="file">
  </label>

</form>`,
      },

      {
        type: "example",
        title: "Форма з кнопкою відправлення",
        text: "Щоб файл можна було відправити на сервер, поле file зазвичай розміщують всередині форми з методом POST.",
      },

      {
        type: "code",
        language: "html",
        code: `<form 
  method="post" 
  enctype="multipart/form-data"
>

  <label>
    Фото:
    <input 
      type="file"
      name="photo"
    >
  </label>

  <br>

  <input 
    type="submit"
    value="Завантажити"
  >

</form>`,
      },

      {
        type: "heading",
        text: "Атрибут enctype",
      },

      {
        type: "paragraph",
        text: 'Для передачі файлів через форму потрібно додати атрибут enctype="multipart/form-data". Без нього файл не буде правильно відправлений.',
      },

      {
        type: "code",
        language: "html",
        code: `<form enctype="multipart/form-data">

  <input type="file">

</form>`,
      },

      {
        type: "heading",
        text: "Додаткові атрибути file",
      },

      {
        type: "list",
        items: [
          "multiple — дозволяє вибрати декілька файлів.",
          "accept — обмежує типи файлів.",
          "required — робить вибір файлу обов'язковим.",
        ],
      },

      {
        type: "code",
        language: "html",
        code: `<input
  type="file"
  accept="image/*"
  multiple
  required
>`,
      },

      {
        type: "heading",
        text: "Приклад завантаження тільки зображень",
      },

      {
        type: "code",
        language: "html",
        code: `<form>

  <label>
    Завантажте фото:
    <input
      type="file"
      accept="image/png, image/jpeg"
    >
  </label>

</form>`,
      },
      {
        type: "note",
        text: "HTML тільки створює поле вибору файлу. Саме завантаження та збереження файлу виконується за допомогою серверного коду.",
      },
      {
        type: "heading",
        text: "Практичне завдання",
      },

      {
        type: "task",
        text: [
          "№1. Створіть форму для завантаження файлу.",
          "№2. Додайте поле input з типом file.",
          "№3. Дозвольте завантажувати тільки зображення.",
          "№4. Додайте кнопку відправлення форми.",
        ],
      },

      {
        type: "code",
        language: "html",
        code: `<!-- Початковий код -->

<form>

</form>`,
      },

      {
        type: "hint",
        text: 'Для вибору файлів використовуйте input type="file". Для зображень застосуйте атрибут accept.',
      },

      {
        type: "answer",
        text: `<form
  method="post"
  enctype="multipart/form-data"
>

  <label>
    Фото:
    <input
      type="file"
      accept="image/*"
      required
    >
  </label>

  <br>

  <button>
    Завантажити
  </button>

</form>`,
      },
    ],
  },
  {
    id: "html-input-other-types",
    title: "Інші типи input в HTML",
    description:
      "Вивчаємо додаткові типи HTML input: email, number, url, tel, search, color, date, month, week, datetime-local та range.",

    content: [
      {
        type: "heading",
        text: "Інші типи input в HTML",
      },

      {
        type: "paragraph",
        text: "HTML має багато спеціальних типів поля input. Вони допомагають користувачу вводити дані у правильному форматі та додають зручні елементи керування.",
      },

      {
        type: "list",
        items: [
          "email — поле для введення електронної пошти.",
          "number — поле для чисел.",
          "url — поле для посилань.",
          "tel — поле для номера телефону.",
          "search — поле пошуку.",
          "color — вибір кольору.",
          "date — вибір дати.",
          "month — вибір місяця.",
          "week — вибір тижня.",
          "datetime-local — дата та час.",
          "range — повзунок значення.",
        ],
      },

      {
        type: "heading",
        text: "Email",
      },

      {
        type: "paragraph",
        text: "Тип email використовується для введення електронної адреси. Браузер може перевіряти правильність формату.",
      },

      {
        type: "code",
        language: "html",
        code: `<input 
  type="email"
  placeholder="example@mail.com"
>`,
      },

      {
        type: "heading",
        text: "Number",
      },

      {
        type: "code",
        language: "html",
        code: `<input
  type="number"
  min="1"
  max="100"
>`,
      },

      {
        type: "paragraph",
        text: "Дозволяє вводити тільки числові значення. Атрибути min та max задають межі.",
      },

      {
        type: "heading",
        text: "URL",
      },

      {
        type: "code",
        language: "html",
        code: `<input
  type="url"
  placeholder="https://site.com"
>`,
      },

      {
        type: "heading",
        text: "Телефон",
      },

      {
        type: "code",
        language: "html",
        code: `<input
  type="tel"
  placeholder="+380..."
>`,
      },

      {
        type: "heading",
        text: "Пошук",
      },

      {
        type: "code",
        language: "html",
        code: `<input
  type="search"
  placeholder="Пошук..."
>`,
      },

      {
        type: "heading",
        text: "Вибір кольору",
      },

      {
        type: "code",
        language: "html",
        code: `<input
  type="color"
>`,
      },

      {
        type: "heading",
        text: "Дата і час",
      },

      {
        type: "code",
        language: "html",
        code: `<input type="date">

<input type="month">

<input type="week">

<input type="datetime-local">`,
      },

      {
        type: "heading",
        text: "Повзунок range",
      },

      {
        type: "paragraph",
        text: "Тип range створює повзунок для вибору числового значення.",
      },

      {
        type: "code",
        language: "html",
        code: `<input
  type="range"
  min="0"
  max="100"
  value="50"
>`,
      },

      {
        type: "heading",
        text: "Приклад форми з різними input",
      },

      {
        type: "code",
        language: "html",
        code: `<form>

  <label>
    Email:
    <input type="email">
  </label>

  <br>

  <label>
    Вік:
    <input type="number">
  </label>

  <br>

  <label>
    Сайт:
    <input type="url">
  </label>

  <br>

  <label>
    Дата:
    <input type="date">
  </label>

  <br>

  <label>
    Колір:
    <input type="color">
  </label>

</form>`,
      },
      {
        type: "note",
        text: "Спеціальні типи input покращують взаємодію з користувачем: на телефоні відкривається потрібна клавіатура, а браузер може виконувати базову перевірку введених даних.",
      },
      {
        type: "heading",
        text: "Практичне завдання",
      },

      {
        type: "task",
        text: [
          "№1. Створіть форму з різними типами input.",
          "№2. Додайте поля email, number, url та tel.",
          "№3. Додайте вибір дати, кольору та повзунок range.",
        ],
      },

      {
        type: "code",
        language: "html",
        code: `<!-- Початковий код -->

<form>

</form>`,
      },

      {
        type: "hint",
        text: "Для кожного поля використовуйте свій type: email, number, url, tel, color, date або range.",
      },

      {
        type: "answer",
        text: `<form>

  <input type="email">

  <input type="number">

  <input type="url">

  <input type="tel">

  <input type="date">

  <input type="color">

  <input type="range">

</form>`,
      },
    ],
  },
  {
    id: "html-form-focus",
    title: "Фокус для елементів форм в HTML",
    description:
      "Вивчаємо CSS-псевдоклас :focus для стилізації активного елемента форми.",

    content: [
      {
        type: "heading",
        text: "Фокус для елементів форм в HTML",
      },

      {
        type: "paragraph",
        text: "Коли користувач натискає на поле форми або переходить до нього за допомогою клавіші Tab, цей елемент отримує фокус. Для стилізації таких елементів використовується псевдоклас :focus.",
      },

      {
        type: "list",
        items: [
          ":focus застосовується до активного елемента.",
          "Найчастіше використовується для input, textarea та select.",
          "Дозволяє показати користувачу, яке поле зараз вибране.",
        ],
      },

      {
        type: "heading",
        text: "Простий приклад :focus",
      },

      {
        type: "code",
        language: "html",
        code: `<input type="text">

<input type="email">`,
      },

      {
        type: "code",
        language: "css",
        code: `input:focus {
  border: 2px solid blue;
  outline: none;
}`,
      },

      {
        type: "example",
        title: "Зміна кольору поля при введенні",
        text: "Коли користувач натискає на поле, його рамка змінюється. Це допомагає зрозуміти, де зараз вводиться текст.",
      },

      {
        type: "code",
        language: "css",
        code: `input {
  padding: 10px;
  border: 1px solid gray;
}

input:focus {
  border-color: green;
  background-color: #f0fff0;
}`,
      },

      {
        type: "heading",
        text: "Фокус для textarea",
      },

      {
        type: "code",
        language: "html",
        code: `<textarea></textarea>`,
      },

      {
        type: "code",
        language: "css",
        code: `textarea:focus {
  border: 2px solid orange;
}`,
      },

      {
        type: "heading",
        text: "Фокус для кнопок",
      },

      {
        type: "code",
        language: "html",
        code: `<button>
  Відправити
</button>`,
      },

      {
        type: "code",
        language: "css",
        code: `button:focus {
  outline: 3px solid blue;
}`,
      },

      {
        type: "note",
        text: ":focus важливий не тільки для краси, а й для доступності. Користувачі, які керують сайтом клавіатурою, повинні бачити активний елемент.",
      },

      {
        type: "code",
        language: "css",
        code: `input {
  padding: 10px;
  border: 1px solid #999;
}

input:focus {
  border-color: blue;
  outline: none;
}`,
      },
      {
        type: "heading",
        text: "Практичне завдання",
      },

      {
        type: "task",
        text: [
          "№1. Створіть форму з полем імені та email.",
          "№2. Додайте стилі для звичайного стану полів.",
          "№3. При фокусі змініть колір рамки.",
        ],
      },

      {
        type: "code",
        language: "html",
        code: `<!-- Початковий код -->

<form>

  <input type="text">

  <input type="email">

</form>`,
      },

      {
        type: "hint",
        text: "Для стилізації активного поля використовуйте селектор input:focus.",
      },

      {
        type: "answer",
        text: `<form>

  <input 
    type="text"
    placeholder="Ім'я"
  >

  <br>

  <input
    type="email"
    placeholder="Email"
  >

</form>`,
      },
    ],
  },
  {
    id: "html-form-tabindex",
    title: "Зміна фокуса Tab в HTML",
    description:
      "Вивчаємо атрибут tabindex для керування порядком переходу між елементами форми за допомогою клавіші Tab.",

    content: [
      {
        type: "heading",
        text: "Зміна фокуса Tab в HTML",
      },

      {
        type: "paragraph",
        text: "За замовчуванням браузер переводить фокус між елементами форми у порядку їх розташування в HTML-коді. Атрибут tabindex дозволяє змінити цей порядок.",
      },

      {
        type: "list",
        items: [
          "tabindex задає порядок переходу клавішею Tab.",
          "Чим менше число tabindex, тим раніше елемент отримає фокус.",
          'tabindex="1" отримає фокус перед tabindex="2".',
          "tabindex можна використовувати для input, button, посилань та інших елементів.",
        ],
      },

      {
        type: "heading",
        text: "Приклад роботи tabindex",
      },

      {
        type: "paragraph",
        text: "Є інпути, але їхній порядок у HTML відрізняється від потрібного порядку переходу.",
      },

      {
        type: "code",
        language: "html",
        code: `<input value="3">
<input value="4">
<input value="1">
<input value="2">
<input value="5">`,
      },

      {
        type: "heading",
        text: "Виправляємо порядок через tabindex",
      },

      {
        type: "code",
        language: "html",
        code: `<input value="3" tabindex="3">

<input value="4" tabindex="4">

<input value="1" tabindex="1">

<input value="2" tabindex="2">

<input value="5" tabindex="5">`,
      },

      {
        type: "example",
        title: "Результат",
        text: "Тепер при натисканні клавіші Tab фокус переходить так: 1 → 2 → 3 → 4 → 5.",
      },
      {
        type: "note",
        text: "tabindex допомагає створювати зручну навігацію без миші. Але не варто без потреби змінювати стандартний порядок — неправильний tabindex може заплутати користувача.",
      },
      {
        type: "heading",
        text: "Практичне завдання",
      },

      {
        type: "task",
        text: [
          "№1. Є п'ять input у неправильному порядку.",
          "№2. Додайте tabindex кожному елементу.",
          "№3. Зробіть порядок переходу таким самим, як значення value.",
        ],
      },

      {
        type: "code",
        language: "html",
        code: `<!-- Початковий код -->

<input value="3">

<input value="4">

<input value="1">

<input value="2">

<input value="5">`,
      },

      {
        type: "hint",
        text: "Значення value підказує, яке число потрібно поставити у tabindex.",
      },

      {
        type: "answer",
        text: `<input value="3" tabindex="3">

<input value="4" tabindex="4">

<input value="1" tabindex="1">

<input value="2" tabindex="2">

<input value="5" tabindex="5">`,
      },
    ],
  },
  {
    id: "html-form-autofocus",
    title: "Автофокус для елементів форм в HTML",
    description:
      "Вивчаємо атрибут autofocus, який автоматично встановлює фокус на елемент форми після відкриття сторінки.",

    content: [
      {
        type: "heading",
        text: "Автофокус для елементів форм в HTML",
      },

      {
        type: "paragraph",
        text: "Атрибут autofocus дозволяє автоматично встановити курсор у потрібне поле форми одразу після завантаження сторінки.",
      },

      {
        type: "list",
        items: [
          "autofocus використовується для input, textarea та інших елементів форми.",
          "На одній сторінці бажано використовувати тільки один autofocus.",
          "Користувач може одразу почати вводити дані без додаткового натискання на поле.",
        ],
      },

      {
        type: "heading",
        text: "Приклад без autofocus",
      },

      {
        type: "code",
        language: "html",
        code: `<input>

<input>

<input>`,
      },

      {
        type: "heading",
        text: "Встановлення фокуса на другий input",
      },

      {
        type: "paragraph",
        text: "Щоб після відкриття сторінки курсор одразу знаходився у другому полі, потрібно додати атрибут autofocus саме цьому input.",
      },

      {
        type: "code",
        language: "html",
        code: `<input>

<input autofocus>

<input>`,
      },

      {
        type: "example",
        title: "Результат",
        text: "Після заходу на сторінку другий input буде активним, і текст можна одразу вводити з клавіатури.",
      },

      {
        type: "note",
        text: "autofocus зручно використовувати у формах пошуку, авторизації та реєстрації, де користувач одразу повинен вводити дані.",
      },
      {
        type: "heading",
        text: "Практичне завдання",
      },

      {
        type: "task",
        text: [
          "№1. Є три input без атрибутів.",
          "№2. Додайте autofocus другому полю.",
          "№3. Перевірте результат після перезавантаження сторінки.",
        ],
      },

      {
        type: "code",
        language: "html",
        code: `<!-- Початковий код -->

<input>

<input>

<input>`,
      },

      {
        type: "hint",
        text: "autofocus потрібно додати тільки до того елемента, який повинен отримати фокус першим.",
      },

      {
        type: "answer",
        text: `<input>

<input autofocus>

<input>`,
      },
    ],
  },
  {
    id: "html-form-accesskey",
    title: "Гарячі клавіші в HTML",
    description:
      "Вивчаємо атрибут accesskey для створення швидкого доступу до елементів форми за допомогою клавіатури.",

    content: [
      {
        type: "heading",
        text: "Гарячі клавіші в HTML",
      },

      {
        type: "paragraph",
        text: "Атрибут accesskey дозволяє призначити елементу власну гарячу клавішу. Користувач може швидко перейти до цього елемента за допомогою клавіатури.",
      },

      {
        type: "list",
        items: [
          "accesskey задається у вигляді однієї клавіші.",
          "Після натискання спеціальної комбінації клавіш браузер переводить фокус на елемент.",
          "Комбінація залежить від операційної системи.",
        ],
      },

      {
        type: "heading",
        text: "Приклад використання accesskey",
      },

      {
        type: "code",
        language: "html",
        code: `<input accesskey="1">

<input accesskey="2">

<input accesskey="3">`,
      },

      {
        type: "example",
        title: "Результат",
        text: "Кожен input отримав свою гарячу клавішу: перше поле — 1, друге — 2, третє — 3.",
      },

      {
        type: "heading",
        text: "Як працюють гарячі клавіші",
      },

      {
        type: "list",
        items: [
          "Windows: Alt + клавіша (у деяких браузерах Alt + Shift + клавіша).",
          "macOS: Control + Option + клавіша.",
          "Після активації елемент отримує фокус.",
        ],
      },
      {
        type: "note",
        text: "accesskey може покращити швидкість роботи з формами, але не варто призначати багато гарячих клавіш — вони можуть конфліктувати з командами браузера.",
      },
      {
        type: "heading",
        text: "Практичне завдання",
      },

      {
        type: "task",
        text: [
          "№1. Є три input без атрибутів.",
          "№2. Додайте кожному свою гарячу клавішу.",
          "№3. Перевірте перехід між полями за допомогою клавіатури.",
        ],
      },

      {
        type: "code",
        language: "html",
        code: `<!-- Початковий код -->

<input>

<input>

<input>`,
      },

      {
        type: "hint",
        text: "Для кожного input додайте різне значення accesskey, наприклад 1, 2 і 3.",
      },

      {
        type: "answer",
        text: `<input accesskey="1">

<input accesskey="2">

<input accesskey="3">`,
      },
    ],
  },
  {
    id: "html-form-checked",
    title: "Псевдоклас для відмічених елементів форм в HTML",
    description:
      "Вивчаємо CSS-псевдоклас :checked для стилізації вибраних checkbox та radio елементів.",

    content: [
      {
        type: "heading",
        text: "Псевдоклас :checked в HTML",
      },

      {
        type: "paragraph",
        text: "Псевдоклас :checked використовується для вибору елементів форми, які зараз відмічені. Найчастіше він застосовується до checkbox і radio.",
      },

      {
        type: "list",
        items: [
          ":checked працює тільки з елементами, які можна вибирати.",
          "Для checkbox він спрацьовує після встановлення галочки.",
          "Для radio він спрацьовує після вибору варіанта.",
          "За допомогою :checked можна змінювати стилі інших елементів.",
        ],
      },

      {
        type: "heading",
        text: "Приклад з checkbox",
      },

      {
        type: "code",
        language: "html",
        code: `<label>
  <input type="checkbox">
  Погоджуюсь з правилами
</label>`,
      },

      {
        type: "code",
        language: "css",
        code: `input:checked {
  width: 20px;
  height: 20px;
}`,
      },

      {
        type: "heading",
        text: "Зміна стилю після вибору",
      },

      {
        type: "code",
        language: "html",
        code: `<input type="checkbox" id="check">

<label for="check">
  Активувати
</label>`,
      },

      {
        type: "code",
        language: "css",
        code: `input:checked + label {
  color: green;
  font-weight: bold;
}`,
      },

      {
        type: "example",
        title: "Результат",
        text: "Коли checkbox увімкнений, текст поруч змінює колір і стає жирним.",
      },

      {
        type: "heading",
        text: "Приклад з radio",
      },

      {
        type: "code",
        language: "html",
        code: `<input type="radio" name="color">
Червоний

<input type="radio" name="color">
Синій>`,
      },

      {
        type: "code",
        language: "css",
        code: `input[type="radio"]:checked {
  accent-color: blue;
}`,
      },
      {
        type: "note",
        text: ":checked часто використовують для створення красивих перемикачів, меню без JavaScript та інтерактивних елементів форми.",
      },
      {
        type: "code",
        language: "css",
        code: `input:checked + label {
  color: green;
}`,
      },
      {
        type: "heading",
        text: "Практичне завдання",
      },

      {
        type: "task",
        text: [
          "№1. Створіть checkbox.",
          "№2. За допомогою :checked змініть стиль тексту після вибору.",
          "№3. Перевірте результат при встановленні та знятті галочки.",
        ],
      },

      {
        type: "code",
        language: "html",
        code: `<!-- Початковий код -->

<input type="checkbox">

<span>
  Текст
</span>`,
      },

      {
        type: "hint",
        text: "Селектор input:checked дозволяє вибрати тільки активний checkbox.",
      },

      {
        type: "answer",
        text: `<input type="checkbox" id="agree">

<label for="agree">
  Погоджуюсь
</label>`,
      },
    ],
  },
  {
    id: "html-form-disabled2",
    title: "Псевдоклас для неактивних елементів форм в HTML",
    description:
      "Вивчаємо CSS-псевдоклас :disabled для стилізації заблокованих елементів форми.",

    content: [
      {
        type: "heading",
        text: "Псевдоклас :disabled в HTML",
      },

      {
        type: "paragraph",
        text: "Псевдоклас :disabled використовується для вибору елементів форми, які є неактивними. Такі елементи не можна змінювати або натискати.",
      },

      {
        type: "list",
        items: [
          ":disabled працює з input, button, textarea, select та іншими елементами форми.",
          "Неактивний елемент зазвичай має атрибут disabled.",
          "За допомогою :disabled можна змінювати його зовнішній вигляд.",
        ],
      },

      {
        type: "heading",
        text: "Приклад неактивного input",
      },

      {
        type: "code",
        language: "html",
        code: `<input value="Звичайне поле">

<input value="Заблоковане поле" disabled>`,
      },

      {
        type: "code",
        language: "css",
        code: `input:disabled {
  background-color: #ddd;
  color: gray;
}`,
      },

      {
        type: "example",
        title: "Результат",
        text: "Друге поле буде неактивним та матиме інший стиль.",
      },

      {
        type: "heading",
        text: "Приклад з кнопкою",
      },

      {
        type: "code",
        language: "html",
        code: `<button>
  Відправити
</button>

<button disabled>
  Недоступно
</button>`,
      },

      {
        type: "code",
        language: "css",
        code: `button:disabled {
  opacity: 0.5;
  cursor: not-allowed;
}`,
      },

      {
        type: "heading",
        text: "Різниця між звичайним та disabled елементом",
      },

      {
        type: "list",
        items: [
          "Звичайний елемент реагує на дії користувача.",
          "disabled елемент не приймає введення.",
          "Форма не відправляє значення заблокованого поля.",
        ],
      },

      {
        type: "note",
        text: ":disabled часто використовують для кнопок відправки форми, які стають активними тільки після виконання певних умов.",
      },
      {
        type: "code",
        language: "css",
        code: `input:disabled {
  background-color: lightgray;
  color: gray;
}`,
      },
      {
        type: "heading",
        text: "Практичне завдання",
      },

      {
        type: "task",
        text: [
          "№1. Створіть декілька input.",
          "№2. Один з них зробіть неактивним за допомогою disabled.",
          "№3. За допомогою :disabled змініть його колір та фон.",
        ],
      },

      {
        type: "code",
        language: "html",
        code: `<!-- Початковий код -->

<input value="Ім'я">

<input value="Email">`,
      },

      {
        type: "hint",
        text: "Додайте атрибут disabled до поля, яке потрібно заблокувати.",
      },

      {
        type: "answer",
        text: `<input value="Ім'я">

<input value="Email" disabled>`,
      },
    ],
  },
  {
    id: "html-form-datalist",
    title: "Автозаповнення інпутів в HTML",
    description:
      "Вивчаємо HTML-тег datalist для створення списку підказок під час введення тексту в input.",

    content: [
      {
        type: "heading",
        text: "Автозаповнення інпутів в HTML",
      },

      {
        type: "paragraph",
        text: "Тег datalist дозволяє створити список готових варіантів для input. Користувач вводить текст, а браузер показує відповідні підказки.",
      },

      {
        type: "list",
        items: [
          "datalist створює список підказок для input.",
          "Елемент input повинен мати атрибут list.",
          "Атрибут list повинен збігатися з id елемента datalist.",
          "Користувач може вибрати готовий варіант або ввести свій текст.",
        ],
      },

      {
        type: "heading",
        text: "Приклад списку країн",
      },

      {
        type: "code",
        language: "html",
        code: `<label>
  Країна:
</label>

<input list="countries">

<datalist id="countries">
  <option value="Україна">
  <option value="Польща">
  <option value="Німеччина">
  <option value="Франція">
  <option value="Італія">
</datalist>`,
      },

      {
        type: "example",
        title: "Результат",
        text: "Після введення перших букв країни браузер покаже відповідні варіанти зі списку.",
      },

      {
        type: "heading",
        text: "Як працює зв'язок input і datalist",
      },

      {
        type: "code",
        language: "html",
        code: `<input list="cities">

<datalist id="cities">
  <option value="Київ">
  <option value="Львів">
  <option value="Одеса">
</datalist>`,
      },

      {
        type: "list",
        items: [
          'list="cities" шукає datalist з id="cities".',
          "option задає один варіант у списку.",
          "value містить текст, який буде запропонований користувачу.",
        ],
      },
      {
        type: "note",
        text: "datalist працює без JavaScript і є зручним способом додати підказки для пошуку, вибору міст, країн або інших значень.",
      },
      {
        type: "heading",
        text: "Практичне завдання",
      },

      {
        type: "task",
        text: [
          "№1. Створіть input для введення країни.",
          "№2. Додайте datalist зі списком країн.",
          "№3. Перевірте, як змінюється список під час введення символів.",
        ],
      },

      {
        type: "code",
        language: "html",
        code: `<!-- Початковий код -->

<label>
  Країна:
</label>

<input>`,
      },

      {
        type: "hint",
        text: "Використайте атрибут list у input та створіть datalist з таким самим id.",
      },

      {
        type: "answer",
        text: `<label>
  Країна:
</label>

<input list="countries">

<datalist id="countries">
  <option value="Україна">
  <option value="Польща">
  <option value="Канада">
  <option value="США">
  <option value="Японія">
</datalist>`,
      },
    ],
  },
  {
    id: "html-form-autocomplete",
    title: "Відміна автозаповнення полів в HTML",
    description:
      "Вивчаємо атрибут autocomplete для керування автоматичним заповненням полів форми браузером.",

    content: [
      {
        type: "heading",
        text: "Атрибут autocomplete в HTML",
      },

      {
        type: "paragraph",
        text: "Атрибут autocomplete дозволяє керувати автоматичним заповненням полів форми. Браузер може зберігати введені раніше дані та пропонувати їх користувачу.",
      },

      {
        type: "list",
        items: [
          'autocomplete="on" — дозволяє автозаповнення.',
          'autocomplete="off" — вимикає автозаповнення.',
          "Атрибут можна встановлювати для form або окремого input.",
          "Часто використовується для паролів, логінів та конфіденційних даних.",
        ],
      },

      {
        type: "heading",
        text: "Приклад увімкненого автозаповнення",
      },

      {
        type: "code",
        language: "html",
        code: `<label>
  Ім'я:
</label>

<input 
  type="text" 
  autocomplete="on"
>`,
      },

      {
        type: "example",
        title: "Результат",
        text: "Після введення даних браузер може запам'ятати значення і запропонувати його наступного разу.",
      },

      {
        type: "heading",
        text: "Вимкнення автозаповнення",
      },

      {
        type: "code",
        language: "html",
        code: `<label>
  Ім'я:
</label>

<input 
  type="text" 
  autocomplete="off"
>`,
      },

      {
        type: "paragraph",
        text: "Тепер браузер не буде показувати раніше введені значення для цього поля.",
      },

      {
        type: "heading",
        text: "Вимкнення автозаповнення для всієї форми",
      },

      {
        type: "code",
        language: "html",
        code: `<form autocomplete="off">

  <input type="text">
  <input type="email">

</form>`,
      },

      {
        type: "note",
        text: 'Для полів з паролями та важливою інформацією часто використовують autocomplete="off", щоб не зберігати введені дані.',
      },

      {
        type: "heading",
        text: "Практичне завдання",
      },

      {
        type: "task",
        text: [
          "№1. Створіть input з увімкненим autocomplete.",
          "№2. Введіть у нього текст та перевірте автозаповнення.",
          '№3. Вимкніть автозаповнення за допомогою autocomplete="off".',
        ],
      },

      {
        type: "code",
        language: "html",
        code: `<!-- Початковий код -->

<input type="text">`,
      },

      {
        type: "hint",
        text: "Додайте атрибут autocomplete до input і встановіть значення off.",
      },

      {
        type: "answer",
        text: `<input 
  type="text" 
  autocomplete="off"
>`,
      },
    ],
  },
];
