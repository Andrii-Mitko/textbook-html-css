import type { Lesson } from "../types";

export const positioning: Lesson[] = [
  {
    id: "position-absolute-css",
    title: "Абсолютне позиціонування елементів у CSS",
    description:
      "Вивчаємо абсолютне позиціонування за допомогою position: absolute, а також властивості top, right, bottom та left для розташування елементів за координатами.",
    content: [
      {
        type: "heading",
        text: "Абсолютне позиціонування елементів у CSS",
      },
      {
        type: "paragraph",
        text: "Абсолютне позиціонування дозволяє розташувати елемент у будь-якому місці сторінки за допомогою заданих координат.",
      },
      {
        type: "paragraph",
        text: "Такий елемент випадає з нормального потоку документа. Інші елементи поводяться так, ніби цього елемента немає.",
      },
      {
        type: "paragraph",
        text: "Абсолютно позиціонований елемент може перекривати інші елементи, оскільки він переміщується поверх них.",
      },

      {
        type: "heading",
        text: "Властивість position: absolute",
      },
      {
        type: "paragraph",
        text: "Щоб зробити елемент абсолютно позиціонованим, потрібно задати властивість position зі значенням absolute.",
      },
      {
        type: "code",
        language: "css",
        code: `.element {
  position: absolute;
}`,
      },

      {
        type: "heading",
        text: "Координати елемента",
      },
      {
        type: "paragraph",
        text: "Для керування положенням використовуються властивості top, right, bottom та left.",
      },
      {
        type: "list",
        items: [
          "top — відстань від верхнього краю.",
          "bottom — відстань від нижнього краю.",
          "left — відстань від лівого краю.",
          "right — відстань від правого краю.",
        ],
      },

      {
        type: "example",
        title: "Звичайне розташування блоків",
        text: "Без позиціонування блоки розташовуються один під одним у нормальному потоці документа.",
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
  width: 200px;
  height: 200px;
  border: 1px solid red;
}

#elem2 {
  width: 100px;
  height: 100px;
  border: 1px solid green;
}`,
      },

      {
        type: "example",
        title: "Позиціонування зверху та зліва",
        text: "Блок буде розташований на відстані 150px зверху та 100px зліва від вікна браузера.",
      },

      {
        type: "code",
        language: "css",
        code: `#elem2 {
  position: absolute;
  top: 150px;
  left: 100px;

  width: 100px;
  height: 100px;
  border: 1px solid green;
}`,
      },

      {
        type: "example",
        title: "Позиція зверху зліва",
        text: "За допомогою top: 0 та left: 0 елемент притискається до верхнього лівого кута.",
      },

      {
        type: "code",
        language: "css",
        code: `#elem2 {
  position: absolute;
  top: 0;
  left: 0;
}`,
      },

      {
        type: "example",
        title: "Позиція зверху справа",
        text: "Властивості top та right дозволяють розташувати елемент у верхньому правому куті.",
      },

      {
        type: "code",
        language: "css",
        code: `#elem2 {
  position: absolute;
  top: 0;
  right: 0;
}`,
      },

      {
        type: "example",
        title: "Позиція знизу справа",
        text: "За допомогою bottom та right можна встановити елемент у нижній правий кут.",
      },

      {
        type: "code",
        language: "css",
        code: `#elem2 {
  position: absolute;
  bottom: 0;
  right: 0;
}`,
      },

      {
        type: "note",
        text: "Абсолютне позиціонування часто використовується для створення модальних вікон, кнопок поверх зображень, випадаючих меню та декоративних елементів.",
      },

      {
        type: "heading",
        text: "Практичні завдання",
      },

      {
        type: "task",
        text: [
          "№1. Створіть два блоки та розмістіть другий блок за допомогою position: absolute.",
          "№2. Встановіть блок у верхній лівий, верхній правий, нижній лівий та нижній правий кути.",
          "№3. Спробуйте змінити значення top, left, right та bottom.",
        ],
      },

      {
        type: "hint",
        text: "Для абсолютного позиціонування обов'язково потрібно вказати position: absolute та хоча б одну координату по вертикалі і одну по горизонталі.",
      },

      {
        type: "answer",
        text: `.element {
  position: absolute;
  top: 50px;
  left: 100px;
}`,
      },
    ],
  },
  {
    id: "position-relative-css",
    title: "Відносне позиціонування елементів у CSS",
    description:
      "Вивчаємо position: relative, зміщення елементів за допомогою top, right, bottom та left, а також різницю між relative та normal flow.",
    content: [
      {
        type: "heading",
        text: "Відносне позиціонування елементів у CSS",
      },
      {
        type: "paragraph",
        text: "Відносне позиціонування задається за допомогою значення relative властивості position.",
      },
      {
        type: "paragraph",
        text: "Таке позиціонування дозволяє зміщувати елемент відносно його початкового положення.",
      },
      {
        type: "paragraph",
        text: "На відміну від абсолютного позиціонування, елемент не випадає з нормального потоку документа. Інші елементи продовжують вважати, що він знаходиться на своєму старому місці.",
      },

      {
        type: "heading",
        text: "Властивість position: relative",
      },
      {
        type: "paragraph",
        text: "Щоб увімкнути відносне позиціонування, потрібно додати position: relative.",
      },
      {
        type: "code",
        language: "css",
        code: `.element {
  position: relative;
}`,
      },

      {
        type: "heading",
        text: "Зміщення елемента",
      },
      {
        type: "paragraph",
        text: "Для зміщення використовуються властивості top, right, bottom та left.",
      },
      {
        type: "list",
        items: [
          "top — зміщення зверху вниз або знизу вгору при від'ємному значенні.",
          "bottom — зміщення знизу вгору або вниз при від'ємному значенні.",
          "left — зміщення вправо або вліво при від'ємному значенні.",
          "right — зміщення вліво або вправо при від'ємному значенні.",
        ],
      },

      {
        type: "example",
        title: "Блоки без позиціонування",
        text: "Спочатку створимо два звичайних блоки. Вони розташовуються один за одним у нормальному потоці.",
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
  border: 1px solid green;
}

#elem2 {
  width: 200px;
  height: 200px;
  border: 1px solid red;
}`,
      },

      {
        type: "example",
        title: "Додавання position: relative",
        text: "Якщо додати position: relative без координат, зовнішній вигляд елемента не зміниться.",
      },

      {
        type: "code",
        language: "css",
        code: `#elem1 {
  position: relative;

  width: 100px;
  height: 100px;
  border: 1px solid green;
}`,
      },

      {
        type: "example",
        title: "Зміщення зверху",
        text: "Властивість top: 30px зміщує елемент вниз на 30px від його початкового положення.",
      },

      {
        type: "code",
        language: "css",
        code: `#elem1 {
  position: relative;
  top: 30px;

  width: 100px;
  height: 100px;
  border: 1px solid green;
}`,
      },

      {
        type: "example",
        title: "Зміщення вправо",
        text: "Властивість left: 40px зміщує елемент вправо.",
      },

      {
        type: "code",
        language: "css",
        code: `#elem1 {
  position: relative;
  top: 30px;
  left: 40px;

  width: 100px;
  height: 100px;
  border: 1px solid green;
}`,
      },

      {
        type: "heading",
        text: "Від'ємні значення координат",
      },

      {
        type: "paragraph",
        text: "Якщо використовувати від'ємні значення top, right, bottom або left, елемент буде зміщуватися у протилежний бік.",
      },

      {
        type: "example",
        title: "Зміщення вгору за допомогою від'ємного top",
        text: "Значення top: -40px перемістить елемент на 40px вверх.",
      },

      {
        type: "code",
        language: "css",
        code: `#elem2 {
  position: relative;
  top: -40px;
  left: 20px;

  width: 200px;
  height: 200px;
  border: 1px solid red;
}`,
      },

      {
        type: "note",
        text: "position: relative часто використовується разом із position: absolute. Батьківському елементу задають relative, а дочірньому absolute, щоб позиціонувати його всередині батьківського блоку.",
      },

      {
        type: "heading",
        text: "Практичні завдання",
      },

      {
        type: "task",
        text: [
          "№1. Створіть три блоки різного кольору.",
          "№2. Додайте другому блоку position: relative.",
          "№3. Змістіть блок за допомогою top та left.",
          "№4. Спробуйте використати від'ємні значення.",
        ],
      },

      {
        type: "hint",
        text: "Пам'ятайте: relative змінює тільки візуальне положення елемента, але місце в документі залишається зайнятим.",
      },

      {
        type: "answer",
        text: `.element {
  position: relative;
  top: 30px;
  left: 40px;
}`,
      },
    ],
  },
  {
    id: "position-relative-absolute-parent-css",
    title: "Позиціонування відносно батьківського елемента в CSS",
    description:
      "Вивчаємо, як position: relative у батьківського елемента змінює поведінку дочірнього елемента з position: absolute.",
    content: [
      {
        type: "heading",
        text: "Позиціонування відносно батьківського елемента в CSS",
      },

      {
        type: "paragraph",
        text: "Якщо батьківському елементу задати position: relative, а дочірньому position: absolute, то дочірній елемент буде позиціонуватися відносно свого батька.",
      },

      {
        type: "paragraph",
        text: "Без position: relative у батька абсолютний елемент буде орієнтуватися відносно вікна браузера.",
      },

      {
        type: "paragraph",
        text: "Зазвичай батьківському елементу задають position: relative без координат. У такому випадку його положення не змінюється, але він стає точкою відліку для дочірніх елементів.",
      },

      {
        type: "heading",
        text: "Звичайний батьківський та дочірній елемент",
      },

      {
        type: "paragraph",
        text: "Спочатку створимо два блоки без позиціонування.",
      },

      {
        type: "code",
        language: "html",
        code: `<div id="parent">
  <div id="child"></div>
</div>`,
      },

      {
        type: "code",
        language: "css",
        code: `#parent {
  width: 500px;
  height: 300px;
  margin: 0 auto;
  border: 1px solid red;
}

#child {
  width: 200px;
  height: 200px;
  border: 1px solid green;
}`,
      },

      {
        type: "heading",
        text: "Absolute без position: relative у батька",
      },

      {
        type: "paragraph",
        text: "Якщо дочірньому елементу задати position: absolute, але батько не має position: relative, елемент буде позиціонуватися відносно вікна браузера.",
      },

      {
        type: "code",
        language: "css",
        code: `#child {
  position: absolute;
  top: 20px;
  left: 20px;

  width: 200px;
  height: 200px;
  border: 1px solid green;
}`,
      },

      {
        type: "heading",
        text: "Absolute всередині relative",
      },

      {
        type: "paragraph",
        text: "Додамо батьківському блоку position: relative. Тепер дочірній елемент буде рахувати координати відносно батька.",
      },

      {
        type: "code",
        language: "css",
        code: `#parent {
  position: relative;

  width: 500px;
  height: 300px;
  margin: 0 auto;
  border: 1px solid red;
}

#child {
  position: absolute;
  top: 20px;
  left: 20px;

  width: 200px;
  height: 200px;
  border: 1px solid green;
}`,
      },

      {
        type: "example",
        title: "Як це працює",
        text: "Батьківський блок стає системою координат. Значення top: 20px та left: 20px відраховуються від його верхнього лівого кута.",
      },

      {
        type: "list",
        items: [
          "position: relative у батька створює точку відліку.",
          "position: absolute у дочірнього елемента дозволяє керувати його положенням.",
          "top, left, right, bottom рахуються відносно найближчого батька з position.",
          "Без relative абсолютний елемент орієнтується на сторінку.",
        ],
      },

      {
        type: "note",
        text: "Ця схема використовується майже у всіх сучасних інтерфейсах: картки із бейджами, кнопки поверх зображень, модальні вікна та декоративні елементи.",
      },

      {
        type: "heading",
        text: "Практичні завдання",
      },

      {
        type: "task",
        text: [
          "№1. Створіть батьківський блок розміром 500×300px.",
          "№2. Додайте всередину дочірній блок.",
          "№3. Задайте дочірньому блоку position: absolute.",
          "№4. Додайте батьку position: relative та порівняйте результат.",
        ],
      },

      {
        type: "hint",
        text: "Запам'ятайте правило: relative ставиться батьку, absolute — елементу, який потрібно пересунути.",
      },

      {
        type: "answer",
        text: `#parent {
  position: relative;
}

#child {
  position: absolute;
  top: 20px;
  left: 20px;
}`,
      },
    ],
  },
  {
    id: "position-absolute-parent-css",
    title: "Позиціонування відносно абсолютного батька в CSS",
    description:
      "Вивчаємо, як елемент з position: absolute може бути батьківською системою координат для інших абсолютно позиціонованих елементів.",
    content: [
      {
        type: "heading",
        text: "Позиціонування відносно абсолютного батька в CSS",
      },

      {
        type: "paragraph",
        text: "У попередньому уроці ми розглянули, що елемент з position: relative може бути точкою відліку для дочірнього елемента з position: absolute.",
      },

      {
        type: "paragraph",
        text: "Але батьківський елемент не обов'язково повинен мати relative. Елемент із position: absolute також може бути батьком для іншого абсолютного елемента.",
      },

      {
        type: "paragraph",
        text: "У такому випадку дочірній елемент буде позиціонуватися відносно абсолютного батька, а не відносно вікна браузера.",
      },

      {
        type: "heading",
        text: "Абсолютний батьківський елемент",
      },

      {
        type: "paragraph",
        text: "Створимо батьківський блок з абсолютним позиціонуванням та дочірній блок всередині нього.",
      },

      {
        type: "code",
        language: "html",
        code: `<div id="parent">
  <div id="child"></div>
</div>`,
      },

      {
        type: "code",
        language: "css",
        code: `#parent {
  position: absolute;
  top: 100px;
  left: 200px;

  width: 500px;
  height: 300px;
  border: 1px solid red;
}

#child {
  position: absolute;
  top: 0;
  left: 0;

  width: 200px;
  height: 200px;
  border: 1px solid green;
}`,
      },

      {
        type: "example",
        title: "Як працюють координати",
        text: "Дочірній блок з top: 0 та left: 0 буде розташований у верхньому лівому куті батьківського блоку.",
      },

      {
        type: "heading",
        text: "Ланцюжок позиціонування",
      },

      {
        type: "list",
        items: [
          "Браузер шукає найближчого батька з position.",
          "Якщо знайдено relative, absolute або fixed — координати рахуються від нього.",
          "Якщо такого батька немає — позиціонування відбувається відносно сторінки.",
          "absolute може бути як дочірнім, так і батьківським елементом.",
        ],
      },

      {
        type: "example",
        title: "Приклад використання",
        text: "Таку структуру часто використовують для складних компонентів: картки товарів, банери, галереї та інтерактивні блоки.",
      },

      {
        type: "code",
        language: "css",
        code: `.card {
  position: absolute;
}

.badge {
  position: absolute;
  top: 10px;
  right: 10px;
}`,
      },

      {
        type: "note",
        text: "Не має значення, яке саме значення position має батько: relative чи absolute. Головне — щоб воно було задане.",
      },

      {
        type: "heading",
        text: "Практичне завдання",
      },

      {
        type: "task",
        text: [
          "№1. Створіть квадратний блок розміром 400px з position: absolute.",
          "№2. Всередині створіть два блоки розміром 50px.",
          "№3. Перший блок розмістіть у верхньому правому куті.",
          "№4. Другий блок розмістіть у нижньому лівому куті.",
        ],
      },

      {
        type: "hint",
        text: "Батьківському блоку задайте position: absolute, а дочірнім блокам використайте top, right, bottom та left.",
      },

      {
        type: "answer",
        text: `.parent {
  position: absolute;
  width: 400px;
  height: 400px;
}

.child-one {
  position: absolute;
  top: 0;
  right: 0;
}

.child-two {
  position: absolute;
  bottom: 0;
  left: 0;
}`,
      },
    ],
  },
  {
    id: "position-absolute-without-coordinates-css",
    title: "Абсолютне позиціонування без координат у CSS",
    description:
      "Вивчаємо поведінку position: absolute без top, left, right та bottom, а також розуміємо, як елемент випадає з нормального потоку.",
    content: [
      {
        type: "heading",
        text: "Абсолютне позиціонування без координат у CSS",
      },

      {
        type: "paragraph",
        text: "При використанні position: absolute не обов'язково одразу задавати координати top, left, right або bottom.",
      },

      {
        type: "paragraph",
        text: "Якщо елементу задати тільки position: absolute, він залишиться приблизно на тому місці, де знаходився раніше.",
      },

      {
        type: "paragraph",
        text: "Але такий елемент все одно випаде з нормального потоку документа. Інші елементи будуть поводитися так, ніби цього елемента немає.",
      },

      {
        type: "heading",
        text: "Блоки без позиціонування",
      },

      {
        type: "paragraph",
        text: "Спочатку створимо три блоки та текст між ними без використання позиціонування.",
      },

      {
        type: "code",
        language: "html",
        code: `<div id="elem1"></div>
<div id="elem2"></div>

text text text text text text

<div id="elem3"></div>`,
      },

      {
        type: "code",
        language: "css",
        code: `#elem1 {
  width: 200px;
  height: 150px;
  border: 1px solid red;
}

#elem2 {
  width: 100px;
  height: 100px;
  margin-left: 10px;
  border: 1px solid green;
}

#elem3 {
  width: 50px;
  height: 150px;
  border: 1px solid blue;
}`,
      },

      {
        type: "heading",
        text: "Absolute без координат",
      },

      {
        type: "paragraph",
        text: "Додамо другому блоку position: absolute, але не будемо задавати координати.",
      },

      {
        type: "paragraph",
        text: "Блок залишиться на своєму місці, але інші елементи більше не будуть враховувати його розмір.",
      },

      {
        type: "code",
        language: "css",
        code: `#elem2 {
  position: absolute;

  width: 100px;
  height: 100px;
  margin-left: 10px;
  border: 1px solid green;
}`,
      },

      {
        type: "heading",
        text: "Absolute тільки з left",
      },

      {
        type: "paragraph",
        text: "Якщо задати тільки left, елемент зміститься по горизонталі, а вертикальне положення залишиться без змін.",
      },

      {
        type: "code",
        language: "css",
        code: `#elem2 {
  position: absolute;
  left: 40px;

  width: 100px;
  height: 100px;
  border: 1px solid green;
}`,
      },

      {
        type: "heading",
        text: "Absolute тільки з top",
      },

      {
        type: "paragraph",
        text: "Якщо задати тільки top, елемент зміститься по вертикалі, а горизонтальне положення залишиться таким самим.",
      },

      {
        type: "code",
        language: "css",
        code: `#elem2 {
  position: absolute;
  top: 100px;

  width: 100px;
  height: 100px;
  border: 1px solid green;
}`,
      },

      {
        type: "heading",
        text: "Головна особливість absolute",
      },

      {
        type: "list",
        items: [
          "position: absolute прибирає елемент із нормального потоку.",
          "Координати top, left, right, bottom є необов'язковими.",
          "Без координат елемент залишається на початковій позиції.",
          "Інші елементи не займають місце абсолютного елемента.",
        ],
      },

      {
        type: "example",
        title: "Де використовується",
        text: "Absolute без координат може використовуватися для створення шарів, декоративних елементів та складних компонентів інтерфейсу.",
      },

      {
        type: "note",
        text: "Якщо потрібно точно керувати положенням елемента — використовуйте top, left, right або bottom. Якщо потрібно тільки прибрати елемент із потоку — достатньо position: absolute.",
      },

      {
        type: "heading",
        text: "Практичні завдання",
      },

      {
        type: "task",
        text: [
          "№1. Створіть три блоки різного розміру.",
          "№2. Другому блоку задайте position: absolute без координат.",
          "№3. Додайте текст після другого блоку та спостерігайте, як він накладається.",
          "№4. Спробуйте додати left або top і перевірте результат.",
        ],
      },

      {
        type: "hint",
        text: "Пам'ятайте: absolute змінює поведінку елемента навіть без координат.",
      },

      {
        type: "answer",
        text: `.element {
  position: absolute;
}`,
      },
    ],
  },
  {
    id: "position-absolute-center-css",
    title: "Центрування через абсолютне позиціонування в CSS",
    description:
      "Вивчаємо спосіб створення елемента з автоматичним розтягуванням за допомогою position: absolute та координат top, right, bottom, left.",
    content: [
      {
        type: "heading",
        text: "Центрування через абсолютне позиціонування в CSS",
      },

      {
        type: "paragraph",
        text: "За допомогою абсолютного позиціонування можна створювати елементи, які займають певну область екрана з однаковими відступами від усіх сторін.",
      },

      {
        type: "paragraph",
        text: "Для цього потрібно задати position: absolute та одночасно вказати координати top, right, bottom і left.",
      },

      {
        type: "paragraph",
        text: "Ширину та висоту елементу задавати не потрібно. Браузер сам розрахує його розмір.",
      },

      {
        type: "heading",
        text: "Розтягування елемента через absolute",
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
  position: absolute;

  top: 30px;
  right: 30px;
  bottom: 30px;
  left: 30px;

  border: 1px solid green;
}`,
      },

      {
        type: "example",
        title: "Як це працює",
        text: "Елемент отримає відступ 30px від кожного краю екрана. Його ширина та висота визначаться автоматично.",
      },

      {
        type: "heading",
        text: "Центрування з однаковими відступами",
      },

      {
        type: "paragraph",
        text: "Якщо задати однакові значення для всіх сторін, можна створити блок по центру екрана з потрібними відступами.",
      },

      {
        type: "code",
        language: "css",
        code: `#elem {
  position: absolute;

  top: 100px;
  right: 100px;
  bottom: 100px;
  left: 100px;
}`,
      },

      {
        type: "heading",
        text: "Переваги такого способу",
      },

      {
        type: "list",
        items: [
          "Не потрібно задавати width та height.",
          "Розмір елемента розраховується автоматично.",
          "Можна легко створити область з однаковими відступами.",
          "Часто використовується для модальних вікон та повноекранних блоків.",
        ],
      },

      {
        type: "note",
        text: "Такий спосіб часто використовується для створення затемнення екрану, модальних вікон та центральних панелей.",
      },

      {
        type: "heading",
        text: "Практичні завдання",
      },

      {
        type: "task",
        text: [
          "№1. Створіть блок, який буде мати відступ 100px від усіх країв екрана.",
          "№2. Створіть блок з відступом зверху 100px, справа 200px, знизу 50px та зліва 10px.",
        ],
      },

      {
        type: "hint",
        text: "Не задавайте width і height. Використовуйте тільки position: absolute та чотири координати.",
      },

      {
        type: "answer",
        text: `#elem {
  position: absolute;

  top: 100px;
  right: 100px;
  bottom: 100px;
  left: 100px;
}`,
      },

      {
        type: "heading",
        text: "Приклад із різними відступами",
      },

      {
        type: "code",
        language: "css",
        code: `#elem {
  position: absolute;

  top: 100px;
  right: 200px;
  bottom: 50px;
  left: 10px;
}`,
      },
    ],
  },
  {
    id: "position-negative-values-css",
    title: "Від'ємні значення при позиціонуванні в CSS",
    description:
      "Вивчаємо використання від'ємних значень top, right, bottom і left для зміщення позиціонованих елементів.",
    content: [
      {
        type: "heading",
        text: "Від'ємні значення при позиціонуванні в CSS",
      },

      {
        type: "paragraph",
        text: "Властивості top, right, bottom і left можуть приймати не тільки додатні, а й від'ємні значення.",
      },

      {
        type: "paragraph",
        text: "Додатнє значення переміщує елемент у вказаному напрямку, а від'ємне — у протилежному.",
      },

      {
        type: "heading",
        text: "Звичайне позиціонування",
      },

      {
        type: "paragraph",
        text: "Спочатку створимо батьківський блок із position: relative та дочірній блок із position: absolute.",
      },

      {
        type: "code",
        language: "html",
        code: `<div id="parent">
  <div id="child"></div>
</div>`,
      },

      {
        type: "code",
        language: "css",
        code: `#parent {
  position: relative;

  width: 300px;
  height: 300px;

  margin: 50px auto;
  border: 1px solid red;
}

#child {
  position: absolute;

  top: 0;
  left: 0;

  width: 100px;
  height: 100px;

  border: 1px solid green;
}`,
      },

      {
        type: "example",
        title: "Положення top: 0 та left: 0",
        text: "Дочірній блок знаходиться у верхньому лівому куті батьківського елемента.",
      },

      {
        type: "heading",
        text: "Використання від'ємних координат",
      },

      {
        type: "paragraph",
        text: "Тепер змістимо блок за межі батьківського елемента за допомогою від'ємних значень.",
      },

      {
        type: "code",
        language: "css",
        code: `#child {
  position: absolute;

  top: -20px;
  left: -30px;

  width: 100px;
  height: 100px;

  border: 1px solid green;
}`,
      },

      {
        type: "example",
        title: "Результат",
        text: "Значення top: -20px піднімає елемент на 20px вверх, а left: -30px зміщує його на 30px вліво.",
      },

      {
        type: "heading",
        text: "Як працюють від'ємні значення",
      },

      {
        type: "list",
        items: [
          "top: -20px переміщує елемент вверх.",
          "bottom: -20px переміщує елемент вниз.",
          "left: -20px переміщує елемент вліво.",
          "right: -20px переміщує елемент вправо.",
        ],
      },

      {
        type: "heading",
        text: "Практичне використання",
      },

      {
        type: "paragraph",
        text: "Від'ємні значення часто використовуються для створення елементів, які частково виходять за межі батьківського блока.",
      },

      {
        type: "example",
        title: "Приклади з реальних сайтів",
        text: "Бейджі на картках товарів, кнопки поверх зображень, декоративні круги та іконки часто створюються саме таким способом.",
      },

      {
        type: "note",
        text: "Якщо елемент виходить за межі батька — це не помилка. У сучасному дизайні це дуже поширений прийом.",
      },

      {
        type: "heading",
        text: "Практичні завдання",
      },

      {
        type: "task",
        text: [
          "№1. Створіть блок 300×300px з position: relative.",
          "№2. Додайте дочірній блок 100×100px з position: absolute.",
          "№3. Розмістіть його через top: 0 та left: 0.",
          "№4. Спробуйте значення top: -20px та left: -30px.",
          "№5. Подивіться, як блок виходить за межі батька.",
        ],
      },

      {
        type: "hint",
        text: "Від'ємні координати не змінюють розмір елемента — вони тільки змінюють його положення.",
      },

      {
        type: "answer",
        text: `#child {
  position: absolute;

  top: -20px;
  left: -30px;
}`,
      },
    ],
  },
  {
    id: "position-fixed-css",
    title: "Фіксоване позиціонування в CSS",
    description:
      "Вивчаємо position: fixed та розуміємо різницю між абсолютним і фіксованим позиціонуванням.",
    content: [
      {
        type: "heading",
        text: "Фіксоване позиціонування в CSS",
      },

      {
        type: "paragraph",
        text: "Фіксоване позиціонування схоже на абсолютне. Елемент також можна переміщувати за допомогою top, right, bottom і left.",
      },

      {
        type: "paragraph",
        text: "Головна відмінність проявляється під час прокручування сторінки.",
      },

      {
        type: "paragraph",
        text: "Елемент з position: absolute рухається разом зі сторінкою, а елемент з position: fixed залишається на одному місці відносно вікна браузера.",
      },

      {
        type: "heading",
        text: "Абсолютне позиціонування",
      },

      {
        type: "paragraph",
        text: "Створимо блок з абсолютним позиціонуванням та великий текст, щоб з'явилася прокрутка.",
      },

      {
        type: "code",
        language: "html",
        code: `<div id="elem"></div>

<div id="content">
  some long text
</div>`,
      },

      {
        type: "code",
        language: "css",
        code: `#elem {
  position: absolute;

  top: 30px;
  right: 30px;

  width: 100px;
  height: 100px;

  border: 1px solid green;
}

#content {
  margin: 0 auto;

  width: 300px;

  text-align: justify;
  font: 16px Arial;
}`,
      },

      {
        type: "example",
        title: "Результат",
        text: "При прокручуванні сторінки блок рухається разом із документом, тому він може зникнути з екрана.",
      },

      {
        type: "heading",
        text: "Фіксоване позиціонування",
      },

      {
        type: "paragraph",
        text: "Замінимо absolute на fixed. Тепер елемент буде прив'язаний до вікна браузера.",
      },

      {
        type: "code",
        language: "css",
        code: `#elem {
  position: fixed;

  top: 30px;
  right: 30px;

  width: 100px;
  height: 100px;

  border: 1px solid green;
}`,
      },

      {
        type: "example",
        title: "Результат",
        text: "При прокручуванні сторінки блок залишатиметься на тому самому місці.",
      },

      {
        type: "heading",
        text: "Різниця між absolute та fixed",
      },

      {
        type: "list",
        items: [
          "absolute позиціонується відносно батьківського елемента або сторінки.",
          "fixed позиціонується відносно вікна браузера.",
          "absolute рухається разом зі сторінкою.",
          "fixed залишається на екрані під час прокручування.",
        ],
      },

      {
        type: "heading",
        text: "Де використовується fixed",
      },

      {
        type: "list",
        items: [
          "Фіксоване меню зверху сторінки.",
          "Кнопка повернення нагору.",
          "Плаваючі кнопки підтримки.",
          "Панелі керування, які завжди мають бути доступними.",
        ],
      },

      {
        type: "note",
        text: "Майже всі сучасні сайти використовують fixed для навігації або важливих кнопок, які повинні залишатися перед очима користувача.",
      },

      {
        type: "heading",
        text: "Практичні завдання",
      },

      {
        type: "task",
        text: [
          "№1. Створіть квадратний блок 100×100px.",
          "№2. Додайте йому position: fixed.",
          "№3. Розмістіть його у верхньому правому куті.",
          "№4. Додайте багато тексту та перевірте поведінку під час прокрутки.",
        ],
      },

      {
        type: "hint",
        text: "Для закріплення елемента на екрані використовуйте position: fixed.",
      },

      {
        type: "answer",
        text: `#elem {
  position: fixed;

  top: 30px;
  right: 30px;
}`,
      },
    ],
  },
  {
    id: "position-fixed-full-width-css",
    title: "Блок на всю ширину екрана в CSS",
    description:
      "Вивчаємо створення фіксованого блоку на всю ширину екрана за допомогою position: fixed та width: 100%.",
    content: [
      {
        type: "heading",
        text: "Блок на всю ширину екрана в CSS",
      },

      {
        type: "paragraph",
        text: "Фіксований елемент може займати всю ширину вікна браузера. Для цього потрібно задати йому position: fixed та ширину width: 100%.",
      },

      {
        type: "paragraph",
        text: "Найчастіше такий прийом використовується для створення верхнього меню, панелей навігації та інформаційних блоків.",
      },

      {
        type: "heading",
        text: "Приклад фіксованого блоку",
      },

      {
        type: "code",
        language: "html",
        code: `<div id="elem"></div>

<div id="content">
  some long text
</div>`,
      },

      {
        type: "code",
        language: "css",
        code: `#elem {
  position: fixed;

  top: 0;
  left: 0;

  width: 100%;
  height: 100px;

  border: 1px solid green;
}

#content {
  margin: 0 auto;

  width: 300px;

  text-align: justify;
  font: 16px Arial;
}`,
      },

      {
        type: "example",
        title: "Як працює код",
        text: "Властивості top: 0 та left: 0 притискають блок до верхнього лівого кута, а width: 100% розтягує його на всю ширину екрана.",
      },

      {
        type: "heading",
        text: "Фіксована верхня панель",
      },

      {
        type: "paragraph",
        text: "Такий блок залишається зверху навіть під час прокручування сторінки.",
      },

      {
        type: "code",
        language: "css",
        code: `.header {
  position: fixed;

  top: 0;
  left: 0;

  width: 100%;
}`,
      },

      {
        type: "list",
        items: [
          "position: fixed закріплює елемент у вікні браузера.",
          "top: 0 притискає блок до верхнього краю.",
          "left: 0 притискає блок до лівого краю.",
          "width: 100% розтягує блок на всю ширину.",
        ],
      },

      {
        type: "note",
        text: "При створенні фіксованої верхньої панелі часто потрібно додати верхній відступ для основного контенту, щоб він не ховався під блоком.",
      },

      {
        type: "example",
        title: "Відступ для контенту",
        text: "Якщо висота фіксованого меню 100px, основному контенту можна додати margin-top: 100px.",
      },

      {
        type: "code",
        language: "css",
        code: `#content {
  margin-top: 100px;
}`,
      },

      {
        type: "heading",
        text: "Практичні завдання",
      },

      {
        type: "task",
        text: [
          "№1. Створіть блок висотою 80px.",
          "№2. Зробіть його position: fixed.",
          "№3. Розтягніть блок на всю ширину екрана.",
          "№4. Додайте текст і перевірте роботу під час прокручування.",
        ],
      },

      {
        type: "hint",
        text: "Для фіксованого блоку на всю ширину використовуйте top: 0, left: 0 та width: 100%.",
      },

      {
        type: "answer",
        text: `.header {
  position: fixed;

  top: 0;
  left: 0;

  width: 100%;
}`,
      },
    ],
  },
  {
    id: "z-index-overlapping-elements-css",
    title: "Накладання елементів по осі Z у CSS",
    description:
      "Вивчаємо порядок накладання елементів та розуміємо, як браузер визначає, який елемент буде зверху.",
    content: [
      {
        type: "heading",
        text: "Накладання елементів по осі Z у CSS",
      },

      {
        type: "paragraph",
        text: "У CSS елементи можуть накладатися один на одного. Це часто використовується при створенні карток, меню, модальних вікон та декоративних елементів.",
      },

      {
        type: "paragraph",
        text: "Якщо два елементи займають одну область, браузер визначає порядок їх відображення по осі Z.",
      },

      {
        type: "paragraph",
        text: "За замовчуванням вище буде той елемент, який знаходиться нижче в HTML-коді.",
      },

      {
        type: "heading",
        text: "Приклад накладання елементів",
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
  position: absolute;

  top: 30px;
  left: 30px;

  width: 100px;
  height: 100px;

  background-color: #ff8888;
}

#elem2 {
  position: absolute;

  top: 60px;
  left: 60px;

  width: 100px;
  height: 100px;

  background-color: #7e89eb;
}`,
      },

      {
        type: "example",
        title: "Результат виконання",
        text: "Блоки частково перекривають один одного. Другий блок буде зверху, тому що він записаний нижче в HTML.",
      },

      {
        type: "heading",
        text: "Як браузер визначає порядок",
      },

      {
        type: "list",
        items: [
          "Елементи, які йдуть нижче в HTML, мають вищий пріоритет.",
          "Пізніший елемент перекриває попередній.",
          "Порядок можна змінити за допомогою властивості z-index.",
        ],
      },

      {
        type: "heading",
        text: "Вісь Z",
      },

      {
        type: "paragraph",
        text: "Уявіть сторінку як простір із трьома напрямками: X — горизонталь, Y — вертикаль, Z — глибина. Саме вісь Z визначає, який елемент буде ближче до користувача.",
      },

      {
        type: "note",
        text: "Властивість z-index працює тільки для позиціонованих елементів: relative, absolute, fixed або sticky.",
      },

      {
        type: "heading",
        text: "Практичні завдання",
      },

      {
        type: "task",
        text: [
          "№1. Створіть два блоки з position: absolute.",
          "№2. Зробіть так, щоб вони частково перекривали один одного.",
          "№3. Поміняйте порядок блоків у HTML та перевірте результат.",
          "№4. Спробуйте змінити порядок через z-index.",
        ],
      },

      {
        type: "hint",
        text: "Якщо елементи перекриваються, спочатку перевірте порядок у HTML, а потім використовуйте z-index.",
      },

      {
        type: "answer",
        text: `#elem2 {
  position: absolute;

  z-index: 2;
}`,
      },
    ],
  },
  {
    id: "z-index-control-css",
    title: "Регулювання накладання елементів по осі Z у CSS",
    description:
      "Вивчаємо властивість z-index для керування порядком відображення елементів, які накладаються один на одного.",
    content: [
      {
        type: "heading",
        text: "Регулювання накладання елементів по осі Z у CSS",
      },

      {
        type: "paragraph",
        text: "За допомогою властивості z-index можна керувати тим, який елемент буде знаходитися вище при накладанні.",
      },

      {
        type: "paragraph",
        text: "Властивість z-index приймає цілі числа: додатні значення, від'ємні значення або нуль.",
      },

      {
        type: "paragraph",
        text: "Важливо: z-index працює тільки для елементів, у яких задано position: relative, absolute, fixed або sticky.",
      },

      {
        type: "heading",
        text: "Як працює z-index",
      },

      {
        type: "paragraph",
        text: "Чим більше значення z-index, тим вище буде знаходитися елемент.",
      },

      {
        type: "list",
        items: [
          "z-index: 10 буде вище, ніж z-index: 5.",
          "z-index: 2 буде вище, ніж z-index: 1.",
          "z-index: 0 буде нижче додатних значень.",
          "Від'ємні значення можуть перемістити елемент на задній план.",
        ],
      },

      {
        type: "heading",
        text: "Приклад без z-index",
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
  position: absolute;

  top: 30px;
  left: 30px;

  width: 100px;
  height: 100px;

  background-color: #ff8888;
}

#elem2 {
  position: absolute;

  top: 60px;
  left: 60px;

  width: 100px;
  height: 100px;

  background-color: #7e89eb;
}`,
      },

      {
        type: "example",
        title: "Проблема",
        text: "Другий блок знаходиться зверху, тому що він розташований нижче у HTML-коді.",
      },

      {
        type: "heading",
        text: "Зміна порядку через z-index",
      },

      {
        type: "paragraph",
        text: "Зробимо перший блок вищим за другий за допомогою більшого значення z-index.",
      },

      {
        type: "code",
        language: "css",
        code: `#elem1 {
  z-index: 2;
}

#elem2 {
  z-index: 1;
}`,
      },

      {
        type: "example",
        title: "Результат",
        text: "Перший блок тепер буде зверху, тому що його z-index більший.",
      },

      {
        type: "heading",
        text: "Практичне використання z-index",
      },

      {
        type: "list",
        items: [
          "Модальні вікна поверх сторінки.",
          "Випадаючі меню поверх контенту.",
          "Кнопки поверх зображень.",
          "Бейджі та декоративні елементи на картках.",
        ],
      },

      {
        type: "note",
        text: "Не використовуйте величезні значення типу z-index: 999999 без причини. Краще створити зрозумілу систему шарів.",
      },

      {
        type: "heading",
        text: "Практичні завдання",
      },

      {
        type: "task",
        text: [
          "№1. Створіть два блоки, які перекриваються.",
          "№2. Додайте їм position: absolute.",
          "№3. Поставте першому блоку z-index: 2.",
          "№4. Поставте другому блоку z-index: 1.",
          "№5. Перевірте, який блок знаходиться зверху.",
        ],
      },

      {
        type: "hint",
        text: "Більше значення z-index означає ближче до користувача.",
      },

      {
        type: "answer",
        text: `#elem1 {
  position: absolute;
  z-index: 2;
}

#elem2 {
  position: absolute;
  z-index: 1;
}`,
      },
    ],
  },
  {
    id: "negative-z-index-css",
    title: "Нюанси використання від'ємного значення z-index у CSS",
    description:
      "Розбираємо, як працюють від'ємні значення z-index та чому елемент із z-index: -1 може опинитися позаду інших елементів.",
    content: [
      {
        type: "heading",
        text: "Нюанси використання від'ємного значення z-index у CSS",
      },

      {
        type: "paragraph",
        text: "Якщо для елемента не задано властивість z-index, браузер вважає його значення рівним 0.",
      },

      {
        type: "paragraph",
        text: "Це означає, що елемент із z-index: -1 буде знаходитися нижче за елемент, у якого z-index не заданий.",
      },

      {
        type: "heading",
        text: "Приклад",
      },

      {
        type: "paragraph",
        text: "Є два елементи, які перекриваються. Перший елемент не має z-index, тому його значення дорівнює 0.",
      },

      {
        type: "code",
        language: "css",
        code: `#elem1 {
  /* z-index не заданий */
}

#elem2 {
  z-index: -1;
}`,
      },

      {
        type: "example",
        title: "Результат",
        text: "Другий елемент переміститься під перший, тому що його z-index менший.",
      },

      {
        type: "heading",
        text: "Порівняння значень z-index",
      },

      {
        type: "list",
        items: [
          "z-index: 2 — елемент знаходиться вище.",
          "z-index: 1 — нижче за z-index: 2.",
          "z-index: 0 — стандартне значення.",
          "z-index: -1 — елемент буде позаду елементів зі значенням 0.",
        ],
      },

      {
        type: "heading",
        text: "Приклад із двома блоками",
      },

      {
        type: "code",
        language: "css",
        code: `#elem1 {
  position: absolute;

  width: 100px;
  height: 100px;

  background-color: red;
}

#elem2 {
  position: absolute;

  z-index: -1;

  width: 100px;
  height: 100px;

  background-color: blue;
}`,
      },

      {
        type: "note",
        text: "Від'ємний z-index потрібно використовувати обережно. Елемент може опинитися позаду батьківського фону і стати невидимим.",
      },

      {
        type: "heading",
        text: "Де використовують від'ємний z-index",
      },

      {
        type: "list",
        items: [
          "Декоративні фонові елементи.",
          "Тіні та фігури позаду основного контенту.",
          "Анімовані елементи під текстом.",
        ],
      },

      {
        type: "heading",
        text: "Практичні завдання",
      },

      {
        type: "task",
        text: [
          "№1. Створіть два блоки, які перекриваються.",
          "№2. Додайте їм position: absolute.",
          "№3. Другому блоку задайте z-index: -1.",
          "№4. Перевірте, як змінився порядок шарів.",
        ],
      },

      {
        type: "hint",
        text: "Якщо z-index не заданий, браузер використовує значення 0.",
      },

      {
        type: "answer",
        text: `#elem2 {
  position: absolute;
  z-index: -1;
}`,
      },
    ],
  },
];
