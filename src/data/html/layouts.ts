import type { Lesson } from "../types";

export const layouts: Lesson[] = [
  {
    id: "css-menu-flex-practice",
    title: "Створення меню в CSS",
    description:
      "Практикуємо створення горизонтального меню сайту за допомогою Flexbox, стилізацію посилань, hover-ефектів та активного пункту меню.",

    content: [
      {
        type: "heading",
        text: "Створення меню в CSS",
      },

      {
        type: "paragraph",
        text: "Меню є одним із найпоширеніших елементів вебсайтів. За допомогою CSS можна створити горизонтальну навігацію зі стилізованими посиланнями.",
      },

      {
        type: "paragraph",
        text: "Для розміщення пунктів меню в один ряд зручно використовувати Flexbox.",
      },

      {
        type: "heading",
        text: "HTML-структура меню",
      },

      {
        type: "paragraph",
        text: "Спочатку створимо контейнер menu та додамо в нього посилання.",
      },

      {
        type: "code",
        language: "html",
        code: `<div id="menu">
  <a href="#">link text 1</a>
  <a href="#">link text 2</a>
  <a href="#">link text 3</a>
  <a href="#">link text 4</a>
  <a href="#">link text 5</a>
</div>`,
      },

      {
        type: "heading",
        text: "Активний пункт меню",
      },

      {
        type: "paragraph",
        text: "Поточну сторінку сайту зазвичай виділяють окремим класом active.",
      },

      {
        type: "code",
        language: "html",
        code: `<div id="menu">
  <a href="#">link text 1</a>
  <a href="#" class="active">link text 2</a>
  <a href="#">link text 3</a>
  <a href="#">link text 4</a>
  <a href="#">link text 5</a>
</div>`,
      },

      {
        type: "heading",
        text: "Розташування посилань у ряд",
      },

      {
        type: "paragraph",
        text: "За допомогою display: flex контейнер перетворюється на Flex-контейнер, а посилання автоматично стають у ряд.",
      },

      {
        type: "code",
        language: "css",
        code: `#menu {
  display: flex;
}`,
      },

      {
        type: "heading",
        text: "Стилізація пунктів меню",
      },

      {
        type: "code",
        language: "css",
        code: `#menu a {
  margin-right: 5px;
  padding: 10px;
  font: 15px Arial;
  text-decoration: none;
  color: #1437AD;
  border: 1px solid #1437AD;
  background-color: white;
}`,
      },

      {
        type: "paragraph",
        text: "Посилання отримують відступи, рамку, колір тексту та білий фон.",
      },

      {
        type: "heading",
        text: "Ефект при наведенні",
      },

      {
        type: "paragraph",
        text: "За допомогою псевдокласу hover можна змінити вигляд пункту меню при наведенні курсора.",
      },

      {
        type: "code",
        language: "css",
        code: `#menu a:hover {
  color: blue;
  border: 1px solid blue;
  background-color: #F5F6FA;
}`,
      },

      {
        type: "heading",
        text: "Активний пункт і hover",
      },

      {
        type: "paragraph",
        text: "Оскільки активний пункт має такий самий вигляд, як при наведенні, стилі можна об'єднати.",
      },

      {
        type: "code",
        language: "css",
        code: `#menu a:hover,
#menu a.active {
  color: blue;
  border: 1px solid blue;
  background-color: #F5F6FA;
}`,
      },

      {
        type: "heading",
        text: "Готове меню",
      },

      {
        type: "code",
        language: "html",
        code: `<div id="menu">
  <a href="#">link text 1</a>
  <a href="#" class="active">link text 2</a>
  <a href="#">link text 3</a>
  <a href="#">link text 4</a>
  <a href="#">link text 5</a>
</div>`,
      },

      {
        type: "code",
        language: "css",
        code: `#menu {
  display: flex;
}

#menu a {
  margin-right: 5px;
  padding: 10px;
  font: 15px Arial;
  text-decoration: none;
  color: #1437AD;
  border: 1px solid #1437AD;
  background-color: white;
}

#menu a:hover,
#menu a.active {
  color: blue;
  border: 1px solid blue;
  background-color: #F5F6FA;
}`,
      },

      {
        type: "note",
        text: "Клас active зазвичай використовується для позначення сторінки, на якій зараз знаходиться користувач.",
      },

      {
        type: "list",
        items: [
          "display: flex розташовує пункти меню в один ряд.",
          "hover змінює стиль при наведенні курсора.",
          "active показує поточний пункт меню.",
          "Посилання можна стилізувати як кнопки.",
        ],
      },

      {
        type: "task",
        text: [
          "№1. Створіть меню з п'яти посилань.",
          "№2. Розмістіть посилання горизонтально через Flexbox.",
          "№3. Додайте hover-ефект.",
          "№4. Виділіть активний пункт меню через клас active.",
        ],
      },

      {
        type: "hint",
        text: "Для горизонтального меню використовуйте display: flex для контейнера та клас active для поточного пункту.",
      },

      {
        type: "answer",
        text: `#menu {
  display: flex;
}

#menu a:hover,
#menu a.active {
  color: blue;
}`,
      },
    ],
  },
  {
    id: "css-simple-single-column-layout",
    title: "Прості одноколоночні макети сайтів в CSS",
    description:
      "Практикуємо створення простого одноколоночного макета сайту з wrapper, меню та основним контентом.",

    content: [
      {
        type: "heading",
        text: "Прості одноколоночні макети сайтів в CSS",
      },

      {
        type: "paragraph",
        text: "Одноколоночний макет — це один із найпростіших варіантів структури сайту. Він складається з центрального контейнера, меню та основного блоку з контентом.",
      },

      {
        type: "heading",
        text: "Створення головного контейнера",
      },

      {
        type: "paragraph",
        text: "Зазвичай весь сайт розміщують всередині загального блоку wrapper.",
      },

      {
        type: "code",
        language: "html",
        code: `<div id="wrapper">

</div>`,
      },

      {
        type: "paragraph",
        text: "Задамо контейнеру ширину та вирівняємо його по центру сторінки.",
      },

      {
        type: "code",
        language: "css",
        code: `#wrapper {
  width: 800px;
  margin: 50px auto;
}`,
      },

      {
        type: "paragraph",
        text: "Додамо рамку для візуального відображення меж контейнера.",
      },

      {
        type: "code",
        language: "css",
        code: `#wrapper {
  width: 800px;
  margin: 50px auto;
  border: 1px solid black;
}`,
      },

      {
        type: "heading",
        text: "Структура сторінки",
      },

      {
        type: "paragraph",
        text: "Наш макет буде складатися з двох основних частин: меню та контенту.",
      },

      {
        type: "code",
        language: "html",
        code: `<div id="wrapper">
  <div id="menu">

  </div>

  <div id="content">

  </div>
</div>`,
      },

      {
        type: "heading",
        text: "Додаємо меню та контент",
      },

      {
        type: "code",
        language: "html",
        code: `<div id="wrapper">
  <div id="menu">
    <a href="#">link text 1</a>
    <a href="#" class="active">link text 2</a>
    <a href="#">link text 3</a>
    <a href="#">link text 4</a>
    <a href="#">link text 5</a>
  </div>

  <div id="content">
    <h1>Proin tristique lorem</h1>

    <p>
      Текст першого абзацу.
    </p>

    <p>
      Текст другого абзацу.
    </p>
  </div>
</div>`,
      },

      {
        type: "heading",
        text: "Стилізація меню",
      },

      {
        type: "paragraph",
        text: "За допомогою Flexbox розмістимо пункти меню в один ряд та вирівняємо їх по центру.",
      },

      {
        type: "code",
        language: "css",
        code: `#menu {
  display: flex;
  justify-content: center;
  margin-bottom: 20px;
  background-color: #484848;
}

#menu a {
  margin: 0 5px;
  padding: 15px 25px;
  text-decoration: none;
  color: #fff;
  font: bold 14px Arial;
}

#menu a:hover,
#menu a.active {
  color: #484848;
  background-color: #fff;
}`,
      },

      {
        type: "heading",
        text: "Стилізація контенту",
      },

      {
        type: "code",
        language: "css",
        code: `#content {
  padding: 0 30px 20px;
}

#content h1 {
  text-align: center;
  margin-top: 0;
  margin-bottom: 10px;
}

#content p {
  padding: 0 10px;
  margin-bottom: 5px;
  font: 18px/1.3 Arial;
  text-align: justify;
}`,
      },

      {
        type: "heading",
        text: "Готовий макет",
      },

      {
        type: "code",
        language: "css",
        code: `#wrapper {
  width: 800px;
  margin: 50px auto;
  border: 1px solid black;
}

#menu {
  display: flex;
  justify-content: center;
  margin-bottom: 20px;
  background-color: #484848;
}

#menu a {
  margin: 0 5px;
  padding: 15px 25px;
  text-decoration: none;
  color: #fff;
  font: bold 14px Arial;
}

#menu a:hover,
#menu a.active {
  color: #484848;
  background-color: #fff;
}

#content {
  padding: 0 30px 20px;
}

#content h1 {
  text-align: center;
  margin-top: 0;
  margin-bottom: 10px;
}

#content p {
  padding: 0 10px;
  margin-bottom: 5px;
  font: 18px/1.3 Arial;
  text-align: justify;
}`,
      },

      {
        type: "heading",
        text: "Правила створення відступів",
      },

      {
        type: "list",
        items: [
          "Зручніше створювати відступи зверху вниз: нижній margin попереднього блоку.",
          "Дочірні елементи не повинні створювати відступи між батьківськими блоками.",
          "Якщо відступ потрібен між двома елементами, краще використовувати margin.",
        ],
      },

      {
        type: "note",
        text: "Правильна структура відступів допомагає уникнути конфліктів CSS та робить код легшим для підтримки.",
      },

      {
        type: "task",
        text: [
          "№1. Створіть контейнер wrapper шириною 800px.",
          "№2. Додайте всередину меню та блок контенту.",
          "№3. Вирівняйте меню по центру за допомогою Flexbox.",
          "№4. Додайте активний пункт меню.",
          "№5. Створіть три різні одноколоночні макети.",
        ],
      },

      {
        type: "hint",
        text: "Починайте макет із головного контейнера wrapper, потім створюйте великі блоки сторінки і тільки після цього додавайте стилі.",
      },

      {
        type: "answer",
        text: `#wrapper {
  width: 800px;
  margin: 50px auto;
}

#menu {
  display: flex;
  justify-content: center;
}

#content {
  padding: 20px;
}`,
      },
    ],
  },
  {
    id: "css-layout-multiple-wrappers",
    title: "Схема макетів з кількома wrapper у CSS",
    description:
      "Вивчаємо створення макетів, де фон займає всю ширину сторінки, а контент залишається по центру за допомогою декількох wrapper та center.",

    content: [
      {
        type: "heading",
        text: "Схема макетів з кількома wrapper у CSS",
      },

      {
        type: "paragraph",
        text: "У сучасній верстці часто зустрічаються блоки, які мають фоновий колір на всю ширину екрана, але їхній вміст повинен залишатися по центру сторінки.",
      },

      {
        type: "paragraph",
        text: "Для створення такого макета одного контейнера недостатньо. Ми будемо використовувати декілька wrapper для різних секцій сторінки.",
      },

      {
        type: "heading",
        text: "Загальна схема макета",
      },

      {
        type: "code",
        language: "html",
        code: `<div class="wrapper">
  <div class="center">

  </div>
</div>

<div class="wrapper line">
  <div class="center">

  </div>
</div>

<div class="wrapper">
  <div class="center">

  </div>
</div>

<div class="wrapper line">
  <div class="center">

  </div>
</div>`,
      },

      {
        type: "heading",
        text: "Блок center для вирівнювання контенту",
      },

      {
        type: "paragraph",
        text: "Клас center відповідає за фіксовану ширину блоку та його розташування по центру сторінки.",
      },

      {
        type: "code",
        language: "css",
        code: `.center {
  width: 800px;
  padding: 20px;
  margin: 0 auto;
}`,
      },

      {
        type: "heading",
        text: "Блок line для фону",
      },

      {
        type: "paragraph",
        text: "Клас line використовується разом із wrapper і додає фон для всієї секції.",
      },

      {
        type: "code",
        language: "css",
        code: `.wrapper.line {
  background-color: #008040;
  color: white;
}`,
      },

      {
        type: "heading",
        text: "Блок wrapper",
      },

      {
        type: "paragraph",
        text: "Wrapper є зовнішнім контейнером кожної секції. Він використовується для створення відступів між блоками.",
      },

      {
        type: "code",
        language: "css",
        code: `.wrapper {
  margin-bottom: 30px;
}`,
      },

      {
        type: "example",
        title: "Повний HTML макета",
        text: "Створимо декілька секцій: заголовок сайту, інформацію про компанію, ціни та контакти.",
      },

      {
        type: "code",
        language: "html",
        code: `<div class="wrapper">
  <div class="center">
    <h1>Main site header</h1>
  </div>
</div>

<div class="wrapper line">
  <div class="center">
    <h2>Our company</h2>

    <p>
      Текст про компанію.
    </p>

    <p>
      Додатковий опис компанії.
    </p>
  </div>
</div>

<div class="wrapper">
  <div class="center">
    <h2>Our price</h2>

    <p>
      Інформація про ціни.
    </p>
  </div>
</div>

<div class="wrapper line">
  <div class="center">
    <h2>Our contacts</h2>

    <p>
      Контактна інформація.
    </p>
  </div>
</div>`,
      },

      {
        type: "example",
        title: "Повний CSS макета",
        text: "Додаємо базові стилі для контейнерів, заголовків та тексту.",
      },

      {
        type: "code",
        language: "css",
        code: `* {
  box-sizing: border-box;
}

body {
  margin: 0;
}

.wrapper {
  margin-bottom: 30px;
}

.wrapper.line {
  background-color: #008040;
  color: white;
}

.center {
  width: 800px;
  padding: 20px;
  margin: 0 auto;
}

.wrapper h1 {
  margin: 0;
  font: 40px "Times New Roman";
}

.wrapper h2 {
  margin: 0;
  font: 25px "Times New Roman";
}

.wrapper p {
  font: 16px/1.4 Arial;
  text-align: justify;
}`,
      },

      {
        type: "note",
        text: "Такий підхід дозволяє легко створювати секції сайту з різними фонами, але однаковою шириною контенту.",
      },

      {
        type: "list",
        items: [
          "wrapper відповідає за зовнішній блок секції.",
          "center обмежує ширину та центрує контент.",
          "line додає фоновий колір на всю ширину сторінки.",
          "Один сайт може містити багато wrapper-блоків.",
        ],
      },

      {
        type: "task",
        text: [
          "№1. Створіть три секції сайту через wrapper.",
          "№2. Додайте всередину кожного wrapper блок center.",
          "№3. Одній секції додайте кольоровий фон через клас line.",
          "№4. Вирівняйте контент по центру сторінки.",
          "№5. Додайте власні заголовки та текст.",
        ],
      },

      {
        type: "hint",
        text: "Якщо фон повинен займати всю ширину екрана, додавайте його wrapper, а не center.",
      },

      {
        type: "answer",
        text: `.wrapper {
  margin-bottom: 30px;
}

.center {
  width: 800px;
  margin: 0 auto;
}

.wrapper.line {
  background-color: #008040;
}`,
      },
    ],
  },
  {
    id: "html-site-structural-blocks",
    title: "Структурні блоки сайту в HTML",
    description:
      "Вивчаємо стандартну структуру вебсайту: wrapper, header, container, content, sidebar та footer.",

    content: [
      {
        type: "heading",
        text: "Структурні блоки сайту в HTML",
      },

      {
        type: "paragraph",
        text: "При створенні сайтів зазвичай використовують стандартні назви для основних структурних блоків. Це допомагає зрозуміти призначення кожної частини сторінки.",
      },

      {
        type: "list",
        items: [
          "wrapper — загальний контейнер, у якому знаходиться весь сайт.",
          "header — верхня частина сайту, зазвичай містить логотип та основне меню.",
          "content — основна частина сторінки з текстом або контентом.",
          "sidebar — бокова панель з додатковою інформацією.",
          "footer — нижня частина сайту.",
        ],
      },

      {
        type: "example",
        title: "Проста структура сайту",
        text: "Створимо загальний контейнер wrapper, всередині якого будуть основні частини сторінки.",
      },

      {
        type: "code",
        language: "html",
        code: `<div id="wrapper">
  <div id="header">
    header
  </div>

  <div id="content">
    content
  </div>

  <div id="sidebar">
    sidebar
  </div>

  <div id="footer">
    footer
  </div>
</div>`,
      },

      {
        type: "heading",
        text: "Блок container для об'єднання контенту і sidebar",
      },

      {
        type: "paragraph",
        text: "Часто основний контент і бічну панель об'єднують у спільний блок container. Це зручно для створення макета сторінки.",
      },

      {
        type: "code",
        language: "html",
        code: `<div id="wrapper">
  <div id="header">
    header
  </div>

  <div id="container">
    <div id="content">
      content
    </div>

    <div id="sidebar">
      sidebar
    </div>
  </div>

  <div id="footer">
    footer
  </div>
</div>`,
      },

      {
        type: "heading",
        text: "Сайт з двома sidebar",
      },

      {
        type: "paragraph",
        text: "У складніших макетах можна використовувати два сайдбари: лівий і правий. Контент при цьому розташовується між ними.",
      },

      {
        type: "code",
        language: "html",
        code: `<div id="wrapper">
  <div id="header">
    header
  </div>

  <div id="container">
    <div id="left">
      left sidebar
    </div>

    <div id="content">
      content
    </div>

    <div id="right">
      right sidebar
    </div>
  </div>

  <div id="footer">
    footer
  </div>
</div>`,
      },

      {
        type: "note",
        text: "Таку структуру часто використовують як основу для сайтів перед додаванням CSS Grid або Flexbox.",
      },

      {
        type: "list",
        items: [
          "wrapper відповідає за весь сайт.",
          "header створює верхню частину сторінки.",
          "container об'єднує основну область і додаткові блоки.",
          "content містить головну інформацію.",
          "sidebar використовується для додаткових елементів.",
          "footer завершує сторінку.",
        ],
      },

      {
        type: "task",
        text: [
          "№1. Створіть блок wrapper.",
          "№2. Додайте всередину header, content, sidebar та footer.",
          "№3. Об'єднайте content і sidebar у блок container.",
          "№4. Створіть варіант сторінки з двома sidebar.",
        ],
      },

      {
        type: "hint",
        text: "Перед створенням CSS-макета спочатку правильно побудуйте HTML-структуру сторінки.",
      },

      {
        type: "answer",
        text: `<div id="wrapper">
  <div id="header">
    header
  </div>

  <div id="container">
    <div id="content">
      content
    </div>

    <div id="sidebar">
      sidebar
    </div>
  </div>

  <div id="footer">
    footer
  </div>
</div>`,
      },
    ],
  },
  {
    id: "css-two-column-layout-flex",
    title: "Схема двоколоночного макета сайту в CSS",
    description:
      "Створюємо двоколоночний макет сайту за допомогою HTML-структури та Flexbox для розташування контенту і sidebar.",

    content: [
      {
        type: "heading",
        text: "Схема двоколоночного макета сайту в CSS",
      },

      {
        type: "paragraph",
        text: "Двоколоночний макет — це структура сайту, у якій основний контент та бокова панель розташовані поруч в одному рядку.",
      },

      {
        type: "paragraph",
        text: "Для створення такого макета будемо використовувати wrapper, header, container, content, sidebar та footer.",
      },

      {
        type: "heading",
        text: "Структура HTML",
      },

      {
        type: "code",
        language: "html",
        code: `<div id="wrapper">
  <div id="header">
    header
  </div>

  <div id="container">
    <div id="content">
      content
    </div>

    <div id="sidebar">
      sidebar
    </div>
  </div>

  <div id="footer">
    footer
  </div>
</div>`,
      },

      {
        type: "heading",
        text: "Створення головного контейнера",
      },

      {
        type: "paragraph",
        text: "Wrapper буде містити весь сайт. Задамо йому ширину та вирівняємо по центру сторінки.",
      },

      {
        type: "code",
        language: "css",
        code: `#wrapper {
  width: 1000px;
  margin: 30px auto;
  border: 1px solid black;
}`,
      },

      {
        type: "heading",
        text: "Стилізація header і footer",
      },

      {
        type: "paragraph",
        text: "Якщо блок не має вмісту, йому можна задати висоту. Якщо всередині є текст або інші елементи, висота формується автоматично.",
      },

      {
        type: "code",
        language: "css",
        code: `#header {
  height: 200px;
  border: 1px solid black;
}

#footer {
  height: 200px;
  border: 1px solid black;
}`,
      },

      {
        type: "paragraph",
        text: "Додаємо внутрішні відступи, щоб текст не прилипав до меж блоку.",
      },

      {
        type: "code",
        language: "css",
        code: `#header {
  height: 200px;
  padding: 20px;
  border: 1px solid black;
}

#footer {
  height: 200px;
  padding: 20px;
  border: 1px solid black;
}`,
      },

      {
        type: "heading",
        text: "Використання box-sizing",
      },

      {
        type: "paragraph",
        text: "Padding та border збільшують фактичний розмір блоку. Щоб вони враховувалися всередині заданої ширини та висоти, використовуємо box-sizing.",
      },

      {
        type: "code",
        language: "css",
        code: `* {
  box-sizing: border-box;
}`,
      },

      {
        type: "heading",
        text: "Розташування колонок через Flexbox",
      },

      {
        type: "paragraph",
        text: "Щоб content і sidebar стали в один ряд, перетворимо container на flex-контейнер.",
      },

      {
        type: "code",
        language: "css",
        code: `#container {
  display: flex;
}`,
      },

      {
        type: "heading",
        text: "Задаємо ширину колонок",
      },

      {
        type: "paragraph",
        text: "Сума ширини колонок повинна відповідати ширині wrapper.",
      },

      {
        type: "code",
        language: "css",
        code: `#content {
  width: 800px;
}

#sidebar {
  width: 200px;
}`,
      },

      {
        type: "example",
        title: "Додаємо відступ між колонками",
        text: "Щоб створити простір між sidebar і content, додаємо margin для sidebar та зменшуємо ширину content.",
      },

      {
        type: "code",
        language: "css",
        code: `#content {
  width: 780px;
}

#sidebar {
  width: 200px;
  margin-right: 20px;
}`,
      },

      {
        type: "heading",
        text: "Висота колонок",
      },

      {
        type: "paragraph",
        text: "У Flexbox елементи одного рядка автоматично підлаштовують висоту один під одного. Тому достатньо задати висоту тільки одному блоку.",
      },

      {
        type: "code",
        language: "css",
        code: `#content {
  width: 780px;
  height: 700px;
}`,
      },

      {
        type: "heading",
        text: "Фінальні стилі макета",
      },

      {
        type: "code",
        language: "css",
        code: `* {
  box-sizing: border-box;
}

#wrapper {
  width: 1000px;
  margin: 30px auto;
  border: 1px solid black;
}

#header {
  height: 200px;
  padding: 20px;
  border: 1px solid black;
}

#container {
  display: flex;
}

#content {
  width: 780px;
  height: 700px;
  padding: 20px;
  border: 1px solid black;
}

#sidebar {
  width: 200px;
  margin-right: 20px;
  padding: 20px;
  border: 1px solid black;
}

#footer {
  height: 200px;
  padding: 20px;
  border: 1px solid black;
}`,
      },

      {
        type: "note",
        text: "Flexbox добре підходить для створення колонок у макетах, де елементи потрібно розташувати в один ряд.",
      },

      {
        type: "list",
        items: [
          "wrapper обмежує ширину всього сайту.",
          "container створює область для колонок.",
          "display: flex розташовує блоки поруч.",
          "content займає основну частину сторінки.",
          "sidebar використовується для додаткової інформації.",
          "box-sizing: border-box спрощує роботу з розмірами.",
        ],
      },

      {
        type: "task",
        text: [
          "№1. Створіть макет з header, content, sidebar та footer.",
          "№2. Зробіть дві колонки через Flexbox.",
          "№3. Додайте відступ між content і sidebar.",
          "№4. Змініть ширину колонок та перевірте результат.",
        ],
      },

      {
        type: "hint",
        text: "Якщо колонки не стають поруч, перевірте чи батьківський контейнер має display: flex.",
      },

      {
        type: "answer",
        text: `#container {
  display: flex;
}

#content {
  width: 780px;
}

#sidebar {
  width: 200px;
}`,
      },
    ],
  },
  {
    id: "css-three-column-layout-flex",
    title: "Схема триколоночного макета сайту в CSS",
    description:
      "Створюємо триколоночний макет сайту за допомогою Flexbox: лівий sidebar, основний контент та правий sidebar.",

    content: [
      {
        type: "heading",
        text: "Схема триколоночного макета сайту в CSS",
      },

      {
        type: "paragraph",
        text: "Триколоночний макет складається з трьох основних областей: лівої бокової панелі, центрального контенту та правої бокової панелі.",
      },

      {
        type: "paragraph",
        text: "Такий тип макета часто використовується для інформаційних сайтів, блогів та панелей керування.",
      },

      {
        type: "heading",
        text: "HTML структура сайту",
      },

      {
        type: "code",
        language: "html",
        code: `<div id="wrapper">
  <div id="header">
    header
  </div>

  <div id="container">
    <div id="left">
      left sidebar
    </div>

    <div id="content">
      content
    </div>

    <div id="right">
      right sidebar
    </div>
  </div>

  <div id="footer">
    footer
  </div>
</div>`,
      },

      {
        type: "heading",
        text: "Створення основного контейнера",
      },

      {
        type: "paragraph",
        text: "Wrapper буде містити весь сайт. Встановимо йому ширину та вирівняємо по центру сторінки.",
      },

      {
        type: "code",
        language: "css",
        code: `#wrapper {
  width: 1100px;
  margin: 30px auto;
  border: 1px solid black;
}`,
      },

      {
        type: "heading",
        text: "Розташування колонок через Flexbox",
      },

      {
        type: "paragraph",
        text: "Щоб три блоки розташувалися в один ряд, перетворимо container у flex-контейнер.",
      },

      {
        type: "code",
        language: "css",
        code: `#container {
  display: flex;
}`,
      },

      {
        type: "heading",
        text: "Встановлення ширини колонок",
      },

      {
        type: "paragraph",
        text: "Ширина всіх трьох колонок повинна дорівнювати ширині wrapper.",
      },

      {
        type: "code",
        language: "css",
        code: `#content {
  width: 700px;
}

#left {
  width: 200px;
}

#right {
  width: 200px;
}`,
      },

      {
        type: "example",
        title: "Додавання відступів між колонками",
        text: "Щоб створити відстань між sidebar і content, додаємо margin до бокових блоків і трохи зменшуємо ширину контенту.",
      },

      {
        type: "code",
        language: "css",
        code: `#content {
  width: 660px;
}

#left {
  width: 200px;
  margin-right: 20px;
}

#right {
  width: 200px;
  margin-left: 20px;
}`,
      },

      {
        type: "heading",
        text: "Фінальні стилі колонок",
      },

      {
        type: "code",
        language: "css",
        code: `#content {
  width: 660px;
  height: 700px;
  padding: 20px;
  border: 1px solid black;
}

#left {
  width: 200px;
  margin-right: 20px;
  padding: 20px;
  border: 1px solid black;
}

#right {
  width: 200px;
  margin-left: 20px;
  padding: 20px;
  border: 1px solid black;
}`,
      },

      {
        type: "heading",
        text: "Повний CSS макета",
      },

      {
        type: "code",
        language: "css",
        code: `* {
  box-sizing: border-box;
}

#wrapper {
  width: 1100px;
  margin: 30px auto;
  border: 1px solid black;
}

#header {
  height: 200px;
  padding: 20px;
  border: 1px solid black;
}

#container {
  display: flex;
}

#content {
  width: 660px;
  height: 700px;
  padding: 20px;
  border: 1px solid black;
}

#left {
  width: 200px;
  margin-right: 20px;
  padding: 20px;
  border: 1px solid black;
}

#right {
  width: 200px;
  margin-left: 20px;
  padding: 20px;
  border: 1px solid black;
}

#footer {
  height: 200px;
  padding: 20px;
  border: 1px solid black;
}`,
      },

      {
        type: "note",
        text: "При використанні Flexbox висота колонок автоматично підлаштовується під найбільший елемент у рядку.",
      },

      {
        type: "list",
        items: [
          "wrapper задає загальну ширину сайту.",
          "container розміщує колонки в один ряд.",
          "left — лівий sidebar.",
          "content — основна частина сторінки.",
          "right — правий sidebar.",
          "Flexbox спрощує створення горизонтальних макетів.",
        ],
      },

      {
        type: "task",
        text: [
          "№1. Створіть wrapper шириною 1100px.",
          "№2. Додайте три колонки: left, content, right.",
          "№3. Зробіть container flex-контейнером.",
          "№4. Додайте відступи між колонками.",
          "№5. Додайте header та footer.",
        ],
      },

      {
        type: "hint",
        text: "Сума ширини колонок і відступів повинна відповідати ширині батьківського контейнера.",
      },

      {
        type: "answer",
        text: `#container {
  display: flex;
}

#left {
  width: 200px;
}

#content {
  width: 660px;
}

#right {
  width: 200px;
}`,
      },
    ],
  },
  {
    id: "html-layout-semantic-tags",
    title: "Основні теги макета в HTML",
    description:
      "Вивчаємо семантичні HTML-теги для створення структури сайту: header, footer, aside, main та nav.",

    content: [
      {
        type: "heading",
        text: "Основні теги макета в HTML",
      },

      {
        type: "paragraph",
        text: "У сучасному HTML для створення структури сайту використовують семантичні теги. Вони описують призначення кожного блоку та роблять код зрозумілішим.",
      },

      {
        type: "list",
        items: [
          "header — верхня частина сайту або окремого розділу.",
          "footer — нижня частина сайту.",
          "aside — бокова панель або додаткова інформація.",
          "main — головний контент сторінки.",
          "nav — блок навігації з посиланнями.",
        ],
      },

      {
        type: "heading",
        text: "Структура сайту з семантичними тегами",
      },

      {
        type: "paragraph",
        text: "Замість звичайних div з id можна використовувати спеціальні HTML5-теги, які одразу показують роль кожного блоку.",
      },

      {
        type: "code",
        language: "html",
        code: `<div id="wrapper">
  <header>
    header
  </header>

  <div id="container">
    <aside>
      sidebar
    </aside>

    <main>
      content
    </main>
  </div>

  <footer>
    footer
  </footer>
</div>`,
      },

      {
        type: "heading",
        text: "Тег nav для меню",
      },

      {
        type: "paragraph",
        text: "Для створення навігаційного меню використовується тег nav. Всередині нього зазвичай розміщують посилання.",
      },

      {
        type: "code",
        language: "html",
        code: `<nav>
  <a href="#">Головна</a>
  <a href="#">Про нас</a>
  <a href="#">Контакти</a>
</nav>`,
      },

      {
        type: "example",
        title: "Порівняння старого і нового підходу",
        text: "Раніше для кожного блоку створювали div з id. Тепер можна замінити їх на зрозумілі семантичні теги.",
      },

      {
        type: "code",
        language: "html",
        code: `<!-- Старий варіант -->

<div id="header">
  header
</div>

<div id="sidebar">
  sidebar
</div>

<div id="content">
  content
</div>

<div id="footer">
  footer
</div>`,
      },

      {
        type: "code",
        language: "html",
        code: `<!-- Семантичний варіант -->

<header>
  header
</header>

<aside>
  sidebar
</aside>

<main>
  content
</main>

<footer>
  footer
</footer>`,
      },
      {
        type: "note",
        text: "Семантичні теги не змінюють зовнішній вигляд сайту, але покращують структуру HTML, SEO та доступність для користувачів.",
      },
      {
        type: "heading",
        text: "Практичне завдання",
      },

      {
        type: "task",
        text: [
          "№1. Є макет із div та id.",
          "№2. Замініть header, footer, sidebar, content і menu на відповідні HTML5-теги.",
          "№3. Використайте header, footer, aside, main та nav.",
        ],
      },

      {
        type: "code",
        language: "html",
        code: `<!-- Початковий код -->

<div id="wrapper">
  <div id="header">
    <div id="menu">
      <a href="#"></a>
      <a href="#"></a>
      <a href="#"></a>
    </div>
  </div>

  <div id="container">
    <div id="sidebar">
      sidebar
    </div>

    <div id="content">
      content
    </div>
  </div>

  <div id="footer">
    footer
  </div>
</div>`,
      },

      {
        type: "hint",
        text: "Не обов'язково видаляти всі div. Наприклад, wrapper і container можуть залишатися звичайними блоками для створення CSS-макета.",
      },

      {
        type: "answer",
        text: `<div id="wrapper">
  <header>
    <nav>
      <a href="#"></a>
      <a href="#"></a>
      <a href="#"></a>
    </nav>
  </header>

  <div id="container">
    <aside>
      sidebar
    </aside>

    <main>
      content
    </main>
  </div>

  <footer>
    footer
  </footer>
</div>`,
      },
    ],
  },
  {
    id: "html-section-tag",
    title: "Тег section в HTML",
    description:
      "Вивчаємо тег section для об'єднання пов'язаних блоків сторінки та створення логічної структури HTML-документа.",

    content: [
      {
        type: "heading",
        text: "Тег section в HTML",
      },

      {
        type: "paragraph",
        text: "Тег section використовується для об'єднання логічно пов'язаних частин сторінки. Зазвичай всередині секції розміщують заголовок та контент, який відноситься до цього розділу.",
      },

      {
        type: "list",
        items: [
          "section — окремий розділ сторінки.",
          "Всередині section зазвичай знаходиться заголовок h2 або h3.",
          "Секції допомагають зробити структуру HTML зрозумілішою.",
          "Тег section покращує семантику документа.",
        ],
      },

      {
        type: "heading",
        text: "Приклад використання section",
      },

      {
        type: "paragraph",
        text: "Замість звичайних div з класом section можна використовувати спеціальний семантичний тег section.",
      },

      {
        type: "code",
        language: "html",
        code: `<section>
  <h2>Заголовок секції</h2>

  <p>
    Перший абзац секції.
  </p>

  <p>
    Другий абзац секції.
  </p>
</section>

<section>
  <h2>Інша секція</h2>

  <p>
    Текст іншого розділу.
  </p>
</section>`,
      },

      {
        type: "heading",
        text: "Порівняння div і section",
      },

      {
        type: "paragraph",
        text: "Раніше для створення розділів часто використовували div з класом section. У сучасному HTML краще використовувати section, якщо блок має логічний зміст.",
      },

      {
        type: "code",
        language: "html",
        code: `<!-- Старий варіант -->

<div class="section">
  <h2>Заголовок</h2>

  <p>
    Текст.
  </p>

  <p>
    Текст.
  </p>
</div>`,
      },

      {
        type: "code",
        language: "html",
        code: `<!-- Семантичний варіант -->

<section>
  <h2>Заголовок</h2>

  <p>
    Текст.
  </p>

  <p>
    Текст.
  </p>
</section>`,
      },

      {
        type: "note",
        text: "Тег section не створює візуальних змін. Він потрібен для правильної структури HTML, SEO та доступності.",
      },

      {
        type: "heading",
        text: "Практичне завдання №1",
      },

      {
        type: "task",
        text: [
          '№1. Є код з div class="section".',
          "№2. Замініть блоки section на однойменний HTML-тег.",
          "№3. Збережіть структуру заголовків і тексту.",
        ],
      },

      {
        type: "code",
        language: "html",
        code: `<!-- Початковий код -->

<div id="content">
  <h1></h1>

  <div class="section">
    <h2></h2>

    <p></p>
    <p></p>
  </div>

  <div class="section">
    <h2></h2>

    <p></p>
    <p></p>
  </div>
</div>`,
      },

      {
        type: "hint",
        text: "Замініть тільки div з класом section. Основний контейнер content можна залишити div.",
      },

      {
        type: "answer",
        text: `<div id="content">
  <h1></h1>

  <section>
    <h2></h2>

    <p></p>
    <p></p>
  </section>

  <section>
    <h2></h2>

    <p></p>
    <p></p>
  </section>
</div>`,
      },

      {
        type: "heading",
        text: "Практичне завдання №2",
      },

      {
        type: "task",
        text: [
          "№1. Є великий макет сайту з div.",
          "№2. Замініть відповідні блоки на семантичні теги.",
          "№3. Використайте header, nav, aside, main, section та footer.",
        ],
      },

      {
        type: "code",
        language: "html",
        code: `<!-- Початковий код -->

<div id="wrapper">
  <div id="header">
    <div id="logo">
      <img src="" alt="logo">
    </div>

    <div id="menu">
      <a href="#"></a>
      <a href="#"></a>
      <a href="#"></a>
    </div>
  </div>

  <div id="container">
    <div id="left">
      <div class="section">
        section
      </div>
    </div>

    <div id="content">
      <h1>main header</h1>

      <div class="section">
        <h2>section header</h2>
      </div>
    </div>

    <div id="right">
      <div class="section">
        section
      </div>
    </div>
  </div>

  <div id="footer">
    footer
  </div>
</div>`,
      },

      {
        type: "hint",
        text: "Блоки header, footer, left і right можна замінити на відповідні семантичні теги. Внутрішні блоки section замініть тегом section.",
      },

      {
        type: "answer",
        text: `<div id="wrapper">

  <header>
    <div id="logo">
      <img src="" alt="logo">
    </div>

    <nav>
      <a href="#"></a>
      <a href="#"></a>
      <a href="#"></a>
    </nav>
  </header>

  <div id="container">

    <aside>
      <section>
        section
      </section>

      <section>
        section
      </section>

      <section>
        section
      </section>
    </aside>

    <main>
      <h1>main header</h1>

      <section>
        <h2>section header</h2>

        <div>
          <p></p>
          <p></p>
        </div>

        <div>
          <p></p>
          <p></p>
        </div>
      </section>

      <section>
        <h2>section header</h2>

        <div>
          <p></p>
          <p></p>
        </div>

        <div>
          <p></p>
          <p></p>
        </div>
      </section>
    </main>

    <aside>
      <section>
        section
      </section>

      <section>
        section
      </section>

      <section>
        section
      </section>
    </aside>

  </div>

  <footer>
    footer
  </footer>

</div>`,
      },

      {
        type: "note",
        text: "Не всі div потрібно замінювати семантичними тегами. Div залишається потрібним для створення технічних контейнерів та CSS-розмітки.",
      },
    ],
  },
  {
    id: "html-css-layout-practice",
    title: "Практика на макетах HTML та CSS",
    description:
      "Практикуємо створення повноцінних макетів сайтів за допомогою HTML та CSS: wrapper, header, nav, aside, main, footer та flex-розмітка.",

    content: [
      {
        type: "heading",
        text: "Практика на макетах HTML та CSS",
      },

      {
        type: "paragraph",
        text: "У цьому уроці навчимося створювати реальні макети сайтів. Ми використаємо семантичні HTML-теги header, nav, aside, main і footer, а для розташування колонок застосуємо CSS Flexbox.",
      },

      {
        type: "list",
        items: [
          "wrapper — головний контейнер сторінки.",
          "header — верхня частина сайту.",
          "nav — меню навігації.",
          "aside — бокові панелі.",
          "main — основний контент.",
          "footer — нижня частина сайту.",
        ],
      },

      {
        type: "heading",
        text: "Основна структура макета",
      },

      {
        type: "paragraph",
        text: "Спочатку створюємо загальну структуру сторінки. Вона складається з хедера, трьох колонок та футера.",
      },

      {
        type: "code",
        language: "html",
        code: `<div class="wrapper">

  <header>
    ...
  </header>

  <div class="container">

    <aside class="left">
      left
    </aside>

    <main>
      ...
    </main>

    <aside class="right">
      right
    </aside>

  </div>

  <footer>
    site.com
  </footer>

</div>`,
      },

      {
        type: "heading",
        text: "Створення хедера сайту",
      },

      {
        type: "paragraph",
        text: "У верхній частині сайту розміщуємо назву сайту та меню. Щоб керувати ними разом, створимо спільний блок block.",
      },

      {
        type: "code",
        language: "html",
        code: `<header>

  <div class="block">

    <div class="sitename">
      site.com
    </div>

    <nav>
      <a href="#">home</a>
      <a href="#" class="active">blog</a>
      <a href="#">photos</a>
      <a href="#">about us</a>
      <a href="#">contacts</a>
    </nav>

  </div>

</header>`,
      },

      {
        type: "heading",
        text: "Створення трьох колонок",
      },

      {
        type: "paragraph",
        text: "Для розташування лівої панелі, контенту та правої панелі в один ряд використаємо Flexbox.",
      },

      {
        type: "code",
        language: "css",
        code: `.container {
  display: flex;
}

main {
  width: 660px;
  padding: 20px;
}

.left {
  width: 200px;
  margin-right: 20px;
  padding: 20px;
}

.right {
  width: 200px;
  margin-left: 20px;
  padding: 20px;
}`,
      },

      {
        type: "heading",
        text: "Повний HTML макета",
      },

      {
        type: "code",
        language: "html",
        code: `<div class="wrapper">

  <header>

    <div class="block">

      <div class="sitename">
        site.com
      </div>

      <nav>
        <a href="#">home</a>
        <a href="#" class="active">blog</a>
        <a href="#">photos</a>
        <a href="#">about us</a>
        <a href="#">contacts</a>
      </nav>

    </div>

  </header>


  <div class="container">

    <aside class="left">
      left
    </aside>


    <main>

      <h1>
        Our blog
      </h1>

      <p>
        Текст блогу.
      </p>

      <p>
        Текст блогу.
      </p>

      <p>
        Текст блогу.
      </p>

    </main>


    <aside class="right">
      right
    </aside>

  </div>


  <footer>
    site.com
  </footer>

</div>`,
      },

      {
        type: "heading",
        text: "CSS макета",
      },

      {
        type: "code",
        language: "css",
        code: `* {
  box-sizing: border-box;
}


.wrapper {
  width: 1100px;
  margin: 30px auto;
  border: 1px solid black;
}


header {
  border: 1px solid black;
}


.container {
  display: flex;
}


main {
  width: 660px;
  padding: 20px;
  border: 1px solid black;
}


.left {
  width: 200px;
  margin-right: 20px;
  padding: 20px;
  border: 1px solid black;
}


.right {
  width: 200px;
  margin-left: 20px;
  padding: 20px;
  border: 1px solid black;
}


footer {
  padding: 30px 0;
  border: 1px solid black;
  text-align: center;
}


.block {
  margin: 20px 0 50px 220px;
}


.sitename {
  margin-bottom: 10px;
  font: 20px Arial;
}


nav {
  display: flex;
  width: 600px;
}


nav a {
  padding: 10px;
  color: blue;
  text-decoration: none;
  font: 15px Arial;
}


nav a:hover,
nav a.active {
  color: red;
  text-decoration: underline;
}


main h1 {
  font: 20px "Times New Roman";
}


main p {
  margin: 10px 0;
  text-align: justify;
  font: 15px Arial;
}`,
      },

      {
        type: "note",
        text: "Не задавайте фиксированную высоту блокам с текстом. Пусть высота формируется содержимым — так макет будет гибче.",
      },

      {
        type: "example",
        title: "Почему используем Flexbox",
        text: "Контейнер container становится flex-контейнером, а дочерние элементы автоматически выстраиваются в ряд. Это удобнее, чем использовать старый подход с float.",
      },

      {
        type: "heading",
        text: "Практичні завдання",
      },

      {
        type: "task",
        text: [
          "№1. Завантажте готовий макет та повторіть його за зразком.",
          "№2. Створіть wrapper для всієї сторінки.",
          "№3. Додайте header, nav, aside, main та footer.",
          "№4. Для колонок використайте display: flex.",
        ],
      },

      {
        type: "hint",
        text: "Спочатку зробіть HTML-структуру, а потім поступово додавайте CSS. Не намагайтеся одразу стилізувати весь сайт.",
      },

      {
        type: "answer",
        text: "Готовий макет повинен містити: wrapper → header → container (left sidebar, main, right sidebar) → footer. Колонки повинні бути створені через Flexbox.",
      },
    ],
  },
];
