import type { Lesson } from "../types";

export const grid: Lesson[] = [
  {
    id: "css-grid-introduction",
    title: "Введення в CSS Grid",
    description:
      "Знайомимося з CSS Grid, створенням Grid-контейнера та принципом роботи двовимірної сітки.",
    content: [
      {
        type: "heading",
        text: "Введення в CSS Grid",
      },

      {
        type: "paragraph",
        text: "CSS Grid — це сучасний спосіб розміщення елементів одночасно по горизонталі та вертикалі.",
      },

      {
        type: "paragraph",
        text: "На відміну від Flexbox, який працює переважно в одному напрямку, Grid дозволяє створювати двовимірні сітки зі стовпців та рядків.",
      },

      {
        type: "note",
        text: "CSS Grid потужніший за Flexbox для складних макетів, але потребує більше знань для правильного використання.",
      },

      {
        type: "heading",
        text: "Створення Grid-контейнера",
      },

      {
        type: "paragraph",
        text: "Щоб перетворити звичайний блок у Grid-контейнер, потрібно задати йому властивість display зі значенням grid.",
      },

      {
        type: "code",
        language: "html",
        code: `<div id="parent">
  <div>1</div>
  <div>2</div>
  <div>3</div>
  <div>4</div>
</div>`,
      },

      {
        type: "code",
        language: "css",
        code: `#parent {
  display: grid;
}`,
      },

      {
        type: "example",
        title: "Що відбувається після display: grid",
        text: "Батьківський елемент стає Grid-контейнером, а дочірні елементи починають розташовуватися у сітці.",
      },

      {
        type: "paragraph",
        text: "Grid складається з вертикальних ліній та горизонтальних ліній. Вертикальні області утворюють стовпці, а горизонтальні — рядки.",
      },

      {
        type: "paragraph",
        text: "Місце перетину стовпця та рядка називається Grid-коміркою.",
      },

      {
        type: "list",
        items: [
          "Стовпці (columns) розташовані вертикально.",
          "Рядки (rows) розташовані горизонтально.",
          "Комірка (grid cell) — область перетину рядка і стовпця.",
          "Grid дозволяє керувати розташуванням елементів у двох напрямках.",
        ],
      },

      {
        type: "heading",
        text: "Можливості CSS Grid",
      },

      {
        type: "paragraph",
        text: "За допомогою спеціальних властивостей можна керувати розміром колонок, рядків та позицією елементів у сітці.",
      },

      {
        type: "example",
        title: "Приклади використання Grid",
        text: "CSS Grid часто використовується для створення складних макетів: галерей, карток товарів, сторінок з колонками та великих інтерфейсів.",
      },

      {
        type: "note",
        text: "У наступних уроках розглянемо створення колонок, рядків та об'єднаємо всі можливості CSS Grid для створення повноцінних макетів.",
      },

      {
        type: "task",
        text: [
          "№1. Створіть div з чотирма дочірніми елементами.",
          "№2. Перетворіть батьківський блок у Grid-контейнер за допомогою display: grid.",
          "№3. Перевірте, як зміниться розташування дочірніх елементів.",
          "№4. Відкрийте DevTools та знайдіть Grid-інструменти браузера.",
        ],
      },

      {
        type: "hint",
        text: "Для створення Grid-контейнера достатньо додати властивість display: grid батьківському елементу.",
      },

      {
        type: "answer",
        text: `#parent {
  display: grid;
}`,
      },
    ],
  },
  {
    id: "grid-tracks-lines-css",
    title: "Треки та лінії в CSS Grid",
    description:
      "Розбираємо основні складові CSS Grid: треки, лінії та комірки сітки.",
    content: [
      {
        type: "heading",
        text: "Треки та лінії в CSS Grid",
      },

      {
        type: "paragraph",
        text: "CSS Grid складається з декількох основних частин: треків (grid tracks), ліній (grid lines) та комірок (grid cells).",
      },

      {
        type: "heading",
        text: "Що таке Grid-трек",
      },

      {
        type: "paragraph",
        text: "Трек у CSS Grid — це область сітки, яка займає один ряд або один стовпець.",
      },

      {
        type: "list",
        items: [
          "Column track — вертикальний трек (стовпець).",
          "Row track — горизонтальний трек (ряд).",
          "Кількість треків залежить від налаштувань Grid-контейнера.",
        ],
      },

      {
        type: "example",
        title: "Стовпці та рядки",
        text: "Якщо Grid має три стовпці та два рядки, то він складається з шести областей, у яких можуть розміщуватися елементи.",
      },

      {
        type: "heading",
        text: "Що таке Grid-комірка",
      },

      {
        type: "paragraph",
        text: "Комірка (grid cell) — це область, яка утворюється на перетині одного стовпця та одного рядка.",
      },

      {
        type: "example",
        title: "Приклад комірки",
        text: "Один елемент Grid зазвичай займає одну комірку, якщо йому не задано розширення на декілька рядків або колонок.",
      },

      {
        type: "heading",
        text: "Що таке Grid-лінії",
      },

      {
        type: "paragraph",
        text: "Лінії Grid (grid lines) — це невидимі межі, які розташовані між треками та використовуються для позиціонування елементів.",
      },

      {
        type: "list",
        items: [
          "Вертикальні лінії розділяють стовпці.",
          "Горизонтальні лінії розділяють рядки.",
          "Елементи Grid можна прив'язувати до конкретних ліній.",
        ],
      },

      {
        type: "note",
        text: "У CSS Grid нумерація ліній починається з 1. Наприклад, перший стовпець знаходиться між першою та другою вертикальною лінією.",
      },

      {
        type: "code",
        language: "css",
        code: `.parent {
  display: grid;

  grid-template-columns: 100px 100px;
  grid-template-rows: 100px 100px;
}`,
      },

      {
        type: "example",
        title: "Як працює сітка",
        text: "У прикладі створюється Grid із двома колонками та двома рядами. У результаті утворюється чотири комірки.",
      },

      {
        type: "diagram",
        text: "Grid складається з треків, які розділяються лініями. На перетині горизонтальних і вертикальних треків утворюються комірки.",
      },

      {
        type: "list",
        items: [
          "Трек — це ряд або колонка Grid.",
          "Комірка — область перетину рядка та колонки.",
          "Лінії знаходяться між треками.",
          "За допомогою ліній можна точно розміщувати елементи.",
        ],
      },

      {
        type: "task",
        text: [
          "№1. Створіть Grid-контейнер з чотирма дочірніми елементами.",
          "№2. Додайте дві колонки та два рядки.",
          "№3. Відкрийте DevTools та знайдіть Grid-лінії.",
          "№4. Визначте кількість комірок у створеній сітці.",
        ],
      },

      {
        type: "hint",
        text: "Пам'ятайте: колонки та рядки — це треки, а межі між ними — Grid-лінії.",
      },

      {
        type: "answer",
        text: `.parent {
  display: grid;

  grid-template-columns: 100px 100px;
  grid-template-rows: 100px 100px;
}`,
      },
    ],
  },
  {
    id: "grid-debugger-chrome",
    title: "Відображення grid у відладчику браузера",
    description:
      "Як використовувати інструменти розробника Chrome для перевірки CSS Grid розмітки.",

    content: [
      {
        type: "heading",
        text: "Відображення grid у відладчику браузера",
      },

      {
        type: "paragraph",
        text: "Під час створення сайтів за допомогою CSS Grid іноді потрібно перевірити, чи правильно розташовані елементи у сітці. Відладчик браузера допомагає побачити структуру grid, колонки, рядки та знайти помилки у розміщенні елементів.",
      },

      {
        type: "note",
        text: "У Chrome DevTools є спеціальний інструмент для CSS Grid. Він дозволяє візуально побачити колонки, рядки та області сітки.",
      },

      {
        type: "heading",
        text: "1. Відкриваємо інструменти розробника",
      },

      {
        type: "paragraph",
        text: "Спочатку потрібно знайти елемент, який використовує CSS Grid. Натисніть правою кнопкою миші на елементі та виберіть пункт «Переглянути код» (Inspect).",
      },

      {
        type: "image",
        src: "/html/devtools-inspect.png",
        alt: "Відкриття Chrome DevTools",
        caption: "Відкриваємо панель розробника браузера",
      },

      {
        type: "heading",
        text: "2. Знаходимо кнопку grid",
      },

      {
        type: "paragraph",
        text: "У панелі Elements біля батьківського елемента з display: grid з'явиться спеціальна кнопка grid.",
      },

      {
        type: "image",
        src: "/html/grid-button.png",
        alt: "Кнопка grid у Chrome DevTools",
        caption: "Кнопка grid біля елемента з CSS Grid",
      },

      {
        type: "heading",
        text: "3. Вмикаємо відображення сітки",
      },

      {
        type: "paragraph",
        text: "Після натискання кнопки grid браузер покаже структуру сітки: номери колонок, рядків та межі grid-контейнера.",
      },

      {
        type: "image",
        src: "/html/grid-overlay.png",
        alt: "Відображення CSS Grid",
        caption: "Візуальна схема grid у DevTools",
      },

      {
        type: "heading",
        text: "4. Налаштування Grid у вкладці Layout",
      },

      {
        type: "paragraph",
        text: "У правій частині DevTools відкрийте вкладку Layout. Там знаходяться додаткові налаштування відображення CSS Grid.",
      },

      {
        type: "image",
        src: "/html/layout-panel.png",
        alt: "Панель Layout для CSS Grid",
        caption: "Налаштування Grid у вкладці Layout",
      },

      {
        type: "heading",
        text: "Корисні налаштування Grid",
      },

      {
        type: "list",
        items: [
          "Show track sizes — показує розміри колонок і рядків.",
          "Show area names — показує назви областей grid, якщо вони створені через grid-template-areas.",
          "Extend grid lines — продовжує лінії сітки за межі контейнера.",
        ],
      },

      {
        type: "heading",
        text: "Приклад CSS Grid",
      },

      {
        type: "code",
        language: "html",
        code: `<div class="grid">
  <div>1</div>
  <div>2</div>
  <div>3</div>
  <div>4</div>
</div>`,
      },

      {
        type: "code",
        language: "css",
        code: `.grid {
  display: grid;
  grid-template-columns: repeat(2, 150px);
  grid-template-rows: repeat(2, 100px);
  gap: 20px;
}

.grid div {
  border: 1px solid green;
}`,
      },

      {
        type: "example",
        title: "Що можна перевірити через DevTools",
        text: "За допомогою Grid Overlay можна побачити, чи правильно задані колонки, рядки, відступи gap та розміщення елементів.",
      },

      {
        type: "task",
        text: [
          "Створіть контейнер з display: grid.",
          "Додайте 6 дочірніх блоків.",
          "Відкрийте DevTools та увімкніть Grid Overlay.",
          "Перевірте розміри колонок і рядків.",
        ],
      },

      {
        type: "hint",
        text: "Якщо елементи Grid розташовані неправильно, спочатку перевіряйте grid-template-columns, grid-template-rows та gap.",
      },
    ],
  },
  {
    id: "grid-template-columns-css",
    title: "Кількість і ширина стовпців у CSS Grid",
    description:
      "Вивчаємо властивість grid-template-columns для створення колонок різної кількості та ширини у CSS Grid.",
    content: [
      {
        type: "heading",
        text: "Кількість і ширина стовпців у CSS Grid",
      },

      {
        type: "paragraph",
        text: "Для початку роботи з CSS Grid потрібно навчитися керувати кількістю та шириною колонок, у яких будуть розміщуватися дочірні елементи.",
      },

      {
        type: "paragraph",
        text: "За це відповідає властивість grid-template-columns. Вона задається батьківському Grid-контейнеру та визначає кількість колонок і їхню ширину.",
      },

      {
        type: "note",
        text: "Кількість значень у grid-template-columns визначає кількість колонок. Кожне значення задає ширину окремого стовпця.",
      },

      {
        type: "example",
        title: "Створення Grid-контейнера з двома колонками",
        text: "Створимо батьківський блок з чотирма дочірніми елементами та зробимо його Grid-контейнером.",
      },

      {
        type: "code",
        language: "html",
        code: `<div id="parent">
  <div>1</div>
  <div>2</div>
  <div>3</div>
  <div>4</div>
</div>`,
      },

      {
        type: "code",
        language: "css",
        code: `#parent {
  display: grid;
  grid-template-columns: 200px 400px;

  border: 2px solid #696989;
  padding: 10px;
  width: 600px;
}

#parent > div {
  padding: 10px;
  border: 1px solid #696989;
}`,
      },

      {
        type: "example",
        title: "Результат",
        text: "У контейнері створилося дві колонки: перша шириною 200px, друга шириною 400px.",
      },

      {
        type: "heading",
        text: "Створення декількох колонок різної ширини",
      },

      {
        type: "paragraph",
        text: "У grid-template-columns можна задавати будь-яку кількість колонок із різними розмірами.",
      },

      {
        type: "code",
        language: "html",
        code: `<div id="parent">
  <div>1</div>
  <div>2</div>
  <div>3</div>
  <div>4</div>
  <div>5</div>
  <div>6</div>
  <div>7</div>
  <div>8</div>
</div>`,
      },

      {
        type: "code",
        language: "css",
        code: `#parent {
  display: grid;
  grid-template-columns: 50px 100px 200px 250px;

  border: 2px solid #696989;
  padding: 10px;
  width: 600px;
}

#parent > div {
  padding: 10px;
  border: 1px solid #696989;
}`,
      },

      {
        type: "example",
        title: "Результат",
        text: "Батьківський блок отримав чотири колонки різної ширини: 50px, 100px, 200px та 250px.",
      },

      {
        type: "list",
        items: [
          "grid-template-columns задається батьківському Grid-контейнеру.",
          "Кількість значень визначає кількість колонок.",
          "Кожне значення відповідає ширині окремого стовпця.",
          "Ширину колонок можна задавати у px, %, fr та інших одиницях.",
        ],
      },

      {
        type: "heading",
        text: "Практичні завдання",
      },

      {
        type: "task",
        text: [
          "№1. Створіть div з дев'ятьма дочірніми елементами.",
          "№2. Зробіть батьківський елемент Grid-контейнером.",
          "№3. Розмістіть дочірні елементи у два стовпці шириною 200px.",
          "№4. Розмістіть дочірні елементи у три стовпці шириною 150px.",
          "№5. Створіть три стовпці: перший 100px, другий 150px, третій 200px.",
        ],
      },

      {
        type: "hint",
        text: "Кількість колонок визначається кількістю значень після grid-template-columns.",
      },

      {
        type: "answer",
        text: `/* Два стовпці по 200px */
.parent {
  display: grid;
  grid-template-columns: 200px 200px;
}

/* Три стовпці по 150px */
.parent {
  display: grid;
  grid-template-columns: 150px 150px 150px;
}

/* Три стовпці різної ширини */
.parent {
  display: grid;
  grid-template-columns: 100px 150px 200px;
}`,
      },
    ],
  },
  {
    id: "grid-fr-unit-css",
    title: "Одиниця fr у CSS Grid",
    description:
      "Вивчаємо гнучку одиницю fr у CSS Grid для розподілу доступного простору між колонками та рядками.",
    content: [
      {
        type: "heading",
        text: "Одиниця fr у CSS Grid",
      },

      {
        type: "paragraph",
        text: "У CSS Grid розміри колонок і рядків можна задавати не тільки у пікселях, а й за допомогою спеціальної одиниці fr (fraction).",
      },

      {
        type: "paragraph",
        text: "Одиниця fr означає частину доступного простору Grid-контейнера. Весь вільний простір ділиться на частини, а кожен трек отримує свою кількість цих частин.",
      },

      {
        type: "heading",
        text: "Як працює fr",
      },

      {
        type: "example",
        title: "Три колонки з різними частками",
        text: "Створимо Grid із трьома колонками. Перша і друга отримають по одній частині простору, а третя — три частини.",
      },

      {
        type: "code",
        language: "html",
        code: `<div id="parent">
  <div>1</div>
  <div>2</div>
  <div>3</div>
  <div>4</div>
  <div>5</div>
  <div>6</div>
  <div>7</div>
  <div>8</div>
  <div>9</div>
</div>`,
      },

      {
        type: "code",
        language: "css",
        code: `#parent {
  display: grid;

  grid-template-columns: 1fr 1fr 3fr;

  border: 2px solid #696989;
  padding: 10px;
  width: 600px;
}

#parent > div {
  padding: 10px;
  box-sizing: border-box;
  border: 1px solid #696989;
}`,
      },

      {
        type: "paragraph",
        text: "У цьому прикладі весь доступний простір ділиться на 5 частин: 1 + 1 + 3 = 5. Перші дві колонки займають по одній частині, а третя — три частини.",
      },

      {
        type: "note",
        text: "Чим більше значення fr у колонки, тим більше місця вона отримає відносно інших колонок.",
      },

      {
        type: "heading",
        text: "Порівняння fr",
      },

      {
        type: "list",
        items: [
          "1fr 1fr — дві однакові колонки.",
          "1fr 1fr 1fr — три однакові колонки.",
          "1fr 1fr 2fr — третя колонка вдвічі більша за перші дві.",
        ],
      },

      {
        type: "example",
        title: "Однакова ширина двох колонок",
        text: "Дві колонки отримують однакову кількість простору.",
      },

      {
        type: "code",
        language: "css",
        code: `#parent {
  display: grid;
  grid-template-columns: 1fr 1fr;
}`,
      },

      {
        type: "example",
        title: "Однакова ширина трьох колонок",
        text: "Три колонки ділять весь простір контейнера порівну.",
      },

      {
        type: "code",
        language: "css",
        code: `#parent {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
}`,
      },

      {
        type: "example",
        title: "Третя колонка більша",
        text: "Третя колонка займає вдвічі більше простору, ніж перша та друга.",
      },

      {
        type: "code",
        language: "css",
        code: `#parent {
  display: grid;
  grid-template-columns: 1fr 1fr 2fr;
}`,
      },

      {
        type: "task",
        text: [
          "№1. Створіть Grid із двома колонками.",
          "№2. Зробіть однакову ширину колонок за допомогою fr.",
          "№3. Створіть Grid із трьома колонками однакової ширини.",
          "№4. Зробіть третю колонку вдвічі більшою за першу та другу.",
        ],
      },

      {
        type: "hint",
        text: "Для рівного розподілу простору використовуйте однакові значення fr. Для більшої колонки збільшуйте її число.",
      },

      {
        type: "answer",
        text: `/* 1. Дві однакові колонки */
grid-template-columns: 1fr 1fr;

/* 2. Три однакові колонки */
grid-template-columns: 1fr 1fr 1fr;

/* 3. Третя колонка вдвічі більша */
grid-template-columns: 1fr 1fr 2fr;`,
      },
    ],
  },
  {
    id: "grid-fr-fractional-css",
    title: "Дробові одиниці fr у CSS Grid",
    description:
      "Вивчаємо використання дробових значень fr для точнішого розподілу простору між колонками CSS Grid.",
    content: [
      {
        type: "heading",
        text: "Дробові одиниці fr у CSS Grid",
      },

      {
        type: "paragraph",
        text: "Одиниця fr у CSS Grid може використовуватися не тільки з цілими числами, але й з дробовими значеннями.",
      },

      {
        type: "paragraph",
        text: "Дробові значення дозволяють більш точно керувати співвідношенням ширини колонок.",
      },

      {
        type: "example",
        title: "Колонки з дробовими значеннями fr",
        text: "Створимо Grid із трьома колонками, де кожна колонка отримає різну частину доступного простору.",
      },

      {
        type: "code",
        language: "html",
        code: `<div id="parent">
  <div>1</div>
  <div>2</div>
  <div>3</div>
  <div>4</div>
  <div>5</div>
  <div>6</div>
  <div>7</div>
  <div>8</div>
  <div>9</div>
</div>`,
      },

      {
        type: "code",
        language: "css",
        code: `#parent {
  display: grid;

  grid-template-columns: 1fr 0.5fr 2.5fr;

  border: 2px solid #696989;
  padding: 10px;
  width: 600px;
}

#parent > div {
  padding: 10px;
  border: 1px solid #696989;
}`,
      },

      {
        type: "paragraph",
        text: "У цьому прикладі простір розділяється на 4 частини: 1 + 0.5 + 2.5 = 4. Перша колонка отримує одну частину, друга половину частини, а третя — дві з половиною частини.",
      },

      {
        type: "note",
        text: "Дробові значення fr працюють так само, як і цілі: більша кількість fr означає більшу частину доступного простору.",
      },

      {
        type: "heading",
        text: "Приклади співвідношень колонок",
      },

      {
        type: "example",
        title: "Третя колонка у 1.5 раза більша",
        text: "Щоб третя колонка була у 1.5 раза більшою за першу та другу, задаємо співвідношення 1 : 1 : 1.5.",
      },

      {
        type: "code",
        language: "css",
        code: `#parent {
  display: grid;

  grid-template-columns: 1fr 1fr 1.5fr;
}`,
      },

      {
        type: "example",
        title: "Друга та третя колонки більші",
        text: "Друга колонка повинна бути у 1.5 раза більшою за першу, а третя — у 2.5 раза.",
      },

      {
        type: "code",
        language: "css",
        code: `#parent {
  display: grid;

  grid-template-columns: 1fr 1.5fr 2.5fr;
}`,
      },

      {
        type: "list",
        items: [
          "1fr 1fr 1.5fr — третя колонка у 1.5 раза більша.",
          "1fr 1.5fr 2.5fr — друга колонка у 1.5 раза більша, третя у 2.5 раза.",
          "Дробові fr дозволяють створювати гнучкі пропорції колонок.",
        ],
      },

      {
        type: "task",
        text: [
          "№1. Створіть Grid із трьома колонками.",
          "№2. Зробіть третю колонку у 1.5 раза більшою за першу та другу.",
          "№3. Зробіть другу колонку у 1.5 раза більшою за першу.",
          "№4. Зробіть третю колонку у 2.5 раза більшою за першу.",
        ],
      },

      {
        type: "hint",
        text: "Використовуйте першу колонку як базову одиницю 1fr, а інші збільшуйте через множники.",
      },

      {
        type: "answer",
        text: `/* №1 */
grid-template-columns: 1fr 1fr 1.5fr;

/* №2 */
grid-template-columns: 1fr 1.5fr 2.5fr;`,
      },
    ],
  },
  {
    id: "grid-pixels-fr-css",
    title: "Пікселі та одиниці fr у CSS Grid",
    description:
      "Вивчаємо комбінування фіксованих розмірів у px та гнучких значень fr для створення колонок CSS Grid.",
    content: [
      {
        type: "heading",
        text: "Пікселі та одиниці fr у CSS Grid",
      },

      {
        type: "paragraph",
        text: "У CSS Grid можна одночасно використовувати різні одиниці вимірювання. Наприклад, частину колонок можна задати у пікселях, а інші — за допомогою fr.",
      },

      {
        type: "paragraph",
        text: "Пікселі задають фіксований розмір колонки, а fr ділить залишок вільного простору між іншими колонками.",
      },

      {
        type: "example",
        title: "Поєднання px та fr",
        text: "Створимо три колонки: перша шириною 100px, друга займе весь доступний простір, а третя матиме фіксовану ширину 50px.",
      },

      {
        type: "code",
        language: "html",
        code: `<div id="parent">
  <div>1</div>
  <div>2</div>
  <div>3</div>
  <div>4</div>
  <div>5</div>
  <div>6</div>
  <div>7</div>
  <div>8</div>
  <div>9</div>
</div>`,
      },

      {
        type: "code",
        language: "css",
        code: `#parent {
  display: grid;

  grid-template-columns: 100px 1fr 50px;

  border: 2px solid #696989;
  padding: 10px;
  width: 600px;
}

#parent > div {
  padding: 10px;
  border: 1px solid #696989;
}`,
      },

      {
        type: "paragraph",
        text: "У цьому прикладі перша та третя колонки мають фіксований розмір, а друга колонка автоматично отримує весь простір, який залишився.",
      },

      {
        type: "note",
        text: "Якщо в Grid використовуються px та fr разом, спочатку займається місце під фіксовані значення px, а залишок розподіляється між fr.",
      },

      {
        type: "heading",
        text: "Приклади використання px разом з fr",
      },

      {
        type: "example",
        title: "Перша колонка 100px, інші однакові",
        text: "Після першої фіксованої колонки залишок простору ділять дві однакові колонки.",
      },

      {
        type: "code",
        language: "css",
        code: `#parent {
  display: grid;

  grid-template-columns: 100px 1fr 1fr;
}`,
      },

      {
        type: "example",
        title: "Фіксовані краї та різні fr",
        text: "Перша та остання колонки мають фіксовану ширину, а середні ділять залишок у співвідношенні 1 : 1.5.",
      },

      {
        type: "code",
        language: "css",
        code: `#parent {
  display: grid;

  grid-template-columns: 100px 1fr 1.5fr 100px;
}`,
      },

      {
        type: "list",
        items: [
          "px використовується для фіксованих розмірів.",
          "fr використовується для гнучкого розподілу простору.",
          "Фіксовані px-колонки займають місце першими.",
          "Залишок простору розподіляється між fr-колонками.",
        ],
      },

      {
        type: "task",
        text: [
          "№1. Створіть Grid із трьома колонками.",
          "№2. Задайте першій колонці ширину 100px.",
          "№3. Зробіть другу та третю колонки однаковими за допомогою fr.",
          "№4. Створіть Grid із чотирма колонками.",
          "№5. Зробіть першу та останню колонки по 100px.",
          "№6. Зробіть третю колонку у 1.5 раза більшою за другу.",
        ],
      },

      {
        type: "hint",
        text: "Для нерівних колонок використовуйте співвідношення fr: наприклад 1fr 1.5fr означає, що друга колонка буде у півтора раза більшою.",
      },

      {
        type: "answer",
        text: `/* №1 */
grid-template-columns: 100px 1fr 1fr;

/* №2 */
grid-template-columns: 100px 1fr 1.5fr 100px;`,
      },
    ],
  },
  {
    id: "grid-percent-fr-css",
    title: "Відсотки та одиниці fr у CSS Grid",
    description:
      "Вивчаємо використання відсотків (%) разом з одиницями fr для створення гнучких колонок CSS Grid.",
    content: [
      {
        type: "heading",
        text: "Відсотки та одиниці fr у CSS Grid",
      },

      {
        type: "paragraph",
        text: "У CSS Grid ширину колонок можна задавати не тільки через px та fr, але й за допомогою відсотків (%).",
      },

      {
        type: "paragraph",
        text: "Відсотки визначають частину ширини Grid-контейнера. Після розрахунку колонок у %, простір, що залишився, розподіляється між колонками з одиницею fr.",
      },

      {
        type: "example",
        title: "Поєднання % та fr",
        text: "Створимо Grid із чотирма колонками: перша займе 50%, четверта — 30%, а решта простору буде розділена між другою та третьою колонками.",
      },

      {
        type: "code",
        language: "html",
        code: `<div id="parent">
  <div>1</div>
  <div>2</div>
  <div>3</div>
  <div>4</div>
  <div>5</div>
  <div>6</div>
  <div>7</div>
  <div>8</div>
</div>`,
      },

      {
        type: "code",
        language: "css",
        code: `#parent {
  display: grid;

  grid-template-columns: 50% 1fr 2fr 30%;

  border: 2px solid #696989;
  padding: 10px;
  width: 600px;
}

#parent > div {
  padding: 10px;
  border: 1px solid #696989;
}`,
      },

      {
        type: "paragraph",
        text: "Спочатку Grid виділяє місце для колонок із процентними значеннями. Після цього весь залишковий простір ділиться між колонками з fr.",
      },

      {
        type: "note",
        text: "Відсотки рахуються від ширини Grid-контейнера, а fr працює тільки із залишком вільного простору.",
      },

      {
        type: "heading",
        text: "Приклади використання % разом із fr",
      },

      {
        type: "example",
        title: "Перша колонка 20%, інші однакові",
        text: "Перша колонка займає п'яту частину контейнера, а дві інші ділять залишок порівну.",
      },

      {
        type: "code",
        language: "css",
        code: `#parent {
  display: grid;

  grid-template-columns: 20% 1fr 1fr;
}`,
      },

      {
        type: "example",
        title: "Комбінація px, %, та fr",
        text: "Перша колонка має фіксовані 100px, друга займає 20%, а інші колонки розподіляють залишок у співвідношенні 1 : 2 : 4.",
      },

      {
        type: "code",
        language: "css",
        code: `#parent {
  display: grid;

  grid-template-columns: 100px 20% 1fr 2fr 4fr;
}`,
      },

      {
        type: "list",
        items: [
          "% задає частину ширини контейнера.",
          "fr розподіляє залишок вільного місця.",
          "px має фіксований розмір.",
          "У Grid можна комбінувати px, %, fr в одному правилі.",
        ],
      },

      {
        type: "task",
        text: [
          "№1. Створіть Grid із трьома колонками.",
          "№2. Зробіть першу колонку шириною 20%.",
          "№3. Зробіть другу та третю колонки однаковими через fr.",
          "№4. Створіть Grid із п'ятьма колонками.",
          "№5. Задайте першій колонці 100px.",
          "№6. Другу колонку зробіть шириною 20%.",
          "№7. Інші колонки зробіть у два рази більшими за попередні.",
        ],
      },

      {
        type: "hint",
        text: "Після фіксованих значень px та % використовуйте fr для створення потрібного співвідношення між колонками.",
      },

      {
        type: "answer",
        text: `/* №1 */
grid-template-columns: 20% 1fr 1fr;

/* №2 */
grid-template-columns: 100px 20% 1fr 2fr 4fr;`,
      },
    ],
  },
  {
    id: "grid-repeat-function-css",
    title: "Функція repeat у CSS Grid",
    description:
      "Вивчаємо використання функції repeat() для скорочення запису однакових колонок у CSS Grid.",
    content: [
      {
        type: "heading",
        text: "Функція repeat() у CSS Grid",
      },

      {
        type: "paragraph",
        text: "Якщо у Grid є декілька колонок з однаковою шириною, можна скоротити запис за допомогою функції repeat().",
      },

      {
        type: "paragraph",
        text: "Функція repeat() приймає два параметри: перший — кількість повторень, другий — розмір колонки.",
      },

      {
        type: "example",
        title: "Три однакові колонки",
        text: "Замість повторення однакового значення декілька разів можна використати repeat().",
      },

      {
        type: "code",
        language: "css",
        code: `/* Звичайний запис */
#parent {
  display: grid;

  grid-template-columns: 1fr 1fr 1fr;
}

/* Скорочений запис */
#parent {
  display: grid;

  grid-template-columns: repeat(3, 1fr);
}`,
      },

      {
        type: "example",
        title: "Одна колонка відрізняється",
        text: "Функцію repeat() можна комбінувати з іншими значеннями.",
      },

      {
        type: "code",
        language: "css",
        code: `#parent {
  display: grid;

  grid-template-columns: repeat(3, 1fr) 2fr;
}`,
      },

      {
        type: "example",
        title: "Дві групи колонок",
        text: "Можна створювати декілька груп колонок з різними розмірами.",
      },

      {
        type: "code",
        language: "css",
        code: `#parent {
  display: grid;

  grid-template-columns:
    repeat(3, 1fr)
    repeat(3, 2fr);
}`,
      },

      {
        type: "example",
        title: "Комбінація repeat() з іншими колонками",
        text: "Між групами повторюваних колонок можна додавати окремі значення.",
      },

      {
        type: "code",
        language: "css",
        code: `#parent {
  display: grid;

  grid-template-columns:
    repeat(3, 1fr)
    3fr
    repeat(3, 2fr);
}`,
      },

      {
        type: "example",
        title: "repeat() з пікселями",
        text: "Функція працює не тільки з fr, але й з px, %, та іншими одиницями.",
      },

      {
        type: "code",
        language: "css",
        code: `/* Звичайний запис */
#parent {
  display: grid;

  grid-template-columns:
    200px 200px 200px;
}

/* Скорочений запис */
#parent {
  display: grid;

  grid-template-columns:
    repeat(3, 200px);
}`,
      },

      {
        type: "note",
        text: "repeat() робить CSS Grid більш читабельним та зменшує кількість однакового коду.",
      },

      {
        type: "list",
        items: [
          "repeat(3, 1fr) створює три однакові колонки.",
          "У repeat() перше число — кількість повторень.",
          "Друге значення — розмір кожної повторюваної колонки.",
          "repeat() можна комбінувати з px, %, fr та іншими одиницями.",
        ],
      },

      {
        type: "task",
        text: [
          "№1. Створіть 4 колонки однакового розміру за допомогою repeat().",
          "№2. Створіть 4 колонки розміром 100px та ще 3 колонки розміром 2fr.",
          "№3. Створіть 2 колонки по 100px.",
          "№4. Додайте 3 колонки по 200px.",
          "№5. Додайте одну колонку розміром 1fr.",
          "№6. Додайте 2 колонки розміром 10%.",
        ],
      },

      {
        type: "hint",
        text: "Групи однакових колонок можна записувати через repeat(кількість, розмір).",
      },

      {
        type: "answer",
        text: `/* №1 */
grid-template-columns: repeat(4, 1fr);

/* №2 */
grid-template-columns:
  repeat(4, 100px)
  repeat(3, 2fr);

/* №3 */
grid-template-columns:
  repeat(2, 100px)
  repeat(3, 200px)
  1fr
  repeat(2, 10%);`,
      },
    ],
  },
  {
    id: "grid-auto-value-css",
    title: "Значення auto у CSS Grid",
    description:
      "Вивчаємо використання значення auto для автоматичного заповнення вільного простору в CSS Grid.",
    content: [
      {
        type: "heading",
        text: "Значення auto у CSS Grid",
      },

      {
        type: "paragraph",
        text: "У CSS Grid для визначення ширини колонок та висоти рядків можна використовувати значення auto.",
      },

      {
        type: "paragraph",
        text: "Значення auto дозволяє колонці або рядку зайняти весь доступний вільний простір після врахування колонок із фіксованими розмірами.",
      },

      {
        type: "example",
        title: "Колонка auto між фіксованими колонками",
        text: "Створимо три колонки: перша має ширину 100px, третя — 150px, а друга автоматично займе весь залишок.",
      },

      {
        type: "code",
        language: "html",
        code: `<div id="parent">
  <div>1</div>
  <div>2</div>
  <div>3</div>
  <div>4</div>
  <div>5</div>
  <div>6</div>
  <div>7</div>
  <div>8</div>
</div>`,
      },

      {
        type: "code",
        language: "css",
        code: `#parent {
  display: grid;

  grid-template-columns:
    100px auto 150px;

  border: 2px solid #696989;
  padding: 10px;
  width: 600px;
}

#parent > div {
  padding: 10px;
  border: 1px solid #696989;
}`,
      },

      {
        type: "paragraph",
        text: "У цьому прикладі перша та третя колонки займають задану ширину, а друга отримує весь простір, що залишився.",
      },

      {
        type: "note",
        text: "auto схоже на 1fr у простих випадках, але auto залежить від розміру контенту та доступного простору.",
      },

      {
        type: "heading",
        text: "Приклади використання auto",
      },

      {
        type: "example",
        title: "Дві колонки",
        text: "Перша колонка має фіксовану ширину 200px, друга автоматично займає залишок.",
      },

      {
        type: "code",
        language: "css",
        code: `#parent {
  display: grid;

  grid-template-columns:
    200px auto;
}`,
      },

      {
        type: "example",
        title: "Три колонки",
        text: "Перші дві колонки мають фіксовані розміри, третя займає весь доступний простір.",
      },

      {
        type: "code",
        language: "css",
        code: `#parent {
  display: grid;

  grid-template-columns:
    100px 150px auto;
}`,
      },

      {
        type: "list",
        items: [
          "auto займає весь доступний вільний простір.",
          "Фіксовані px-колонки враховуються першими.",
          "auto можна використовувати для колонок і рядків.",
          "auto зручно використовувати для адаптивних макетів.",
        ],
      },

      {
        type: "task",
        text: [
          "№1. Створіть Grid із двома колонками.",
          "№2. Задайте першій колонці ширину 200px.",
          "№3. Другу колонку зробіть auto.",
          "№4. Створіть Grid із трьома колонками.",
          "№5. Першу колонку зробіть 100px.",
          "№6. Другу колонку зробіть 150px.",
          "№7. Третю колонку зробіть auto.",
        ],
      },

      {
        type: "hint",
        text: "Використовуйте auto для колонки, яка повинна забрати весь залишковий простір контейнера.",
      },

      {
        type: "answer",
        text: `/* №1 */
grid-template-columns:
  200px auto;

/* №2 */
grid-template-columns:
  100px 150px auto;`,
      },
    ],
  },
  {
    id: "grid-auto-fill-css",
    title: "Значення auto-fill у CSS Grid",
    description:
      "Вивчаємо використання auto-fill у функції repeat() для автоматичного створення однакових колонок у CSS Grid.",
    content: [
      {
        type: "heading",
        text: "Значення auto-fill у CSS Grid",
      },

      {
        type: "paragraph",
        text: "У CSS Grid функція repeat() може використовувати спеціальне значення auto-fill, яке автоматично визначає кількість колонок, що помістяться у контейнер.",
      },

      {
        type: "paragraph",
        text: "За допомогою auto-fill можна створювати адаптивні сітки, де кількість колонок змінюється залежно від ширини батьківського елемента.",
      },

      {
        type: "example",
        title: "Автоматична кількість колонок",
        text: "Створимо Grid із восьми елементів. Кожна колонка буде мати ширину 200px, а кількість колонок визначить auto-fill.",
      },

      {
        type: "code",
        language: "html",
        code: `<div id="parent">
  <div>1</div>
  <div>2</div>
  <div>3</div>
  <div>4</div>
  <div>5</div>
  <div>6</div>
  <div>7</div>
  <div>8</div>
</div>`,
      },

      {
        type: "code",
        language: "css",
        code: `#parent {
  display: grid;

  grid-template-columns:
    repeat(auto-fill, 200px);

  border: 2px solid #696989;
  padding: 10px;
}

#parent > div {
  padding: 10px;
  border: 1px solid #696989;
}`,
      },

      {
        type: "paragraph",
        text: "Браузер автоматично розраховує, скільки колонок шириною 200px може поміститися в контейнері.",
      },

      {
        type: "example",
        title: "Зміна ширини контейнера",
        text: "Якщо збільшувати ширину батьківського блоку, у ньому буде поміщатися більше колонок. Якщо зменшувати — кількість колонок буде скорочуватися.",
      },

      {
        type: "note",
        text: "auto-fill створює стільки колонок, скільки фізично може поміститися у Grid-контейнері.",
      },

      {
        type: "heading",
        text: "Синтаксис auto-fill",
      },

      {
        type: "code",
        language: "css",
        code: `grid-template-columns:
  repeat(auto-fill, 200px);`,
      },

      {
        type: "list",
        items: [
          "auto-fill використовується тільки всередині repeat().",
          "Друге значення repeat() задає розмір колонок.",
          "Браузер сам визначає кількість колонок.",
          "Ширина контейнера впливає на кількість створених колонок.",
        ],
      },

      {
        type: "task",
        text: [
          "№1. Створіть Grid-контейнер.",
          "№2. Додайте декілька дочірніх елементів.",
          "№3. Встановіть ширину колонок 200px через repeat().",
          "№4. Використайте auto-fill.",
          "№5. Змінюйте ширину батьківського блоку та спостерігайте за кількістю колонок.",
        ],
      },

      {
        type: "hint",
        text: "Використовуйте repeat(auto-fill, 200px), щоб браузер сам визначав кількість колонок.",
      },

      {
        type: "answer",
        text: `#parent {
  display: grid;

  grid-template-columns:
    repeat(auto-fill, 200px);
}`,
      },
    ],
  },
  {
    id: "grid-minmax-function-css",
    title: "Функція minmax у CSS Grid",
    description:
      "Вивчаємо використання функції minmax() разом з auto-fill для створення адаптивних колонок у CSS Grid.",
    content: [
      {
        type: "heading",
        text: "Функція minmax() у CSS Grid",
      },

      {
        type: "paragraph",
        text: "У CSS Grid функція minmax() дозволяє задати діапазон розміру колонки: мінімальне та максимальне значення.",
      },

      {
        type: "paragraph",
        text: "Вона часто використовується разом з auto-fill, щоб створювати адаптивні сітки, які автоматично перебудовуються під різну ширину екрана.",
      },

      {
        type: "example",
        title: "Адаптивні колонки через minmax()",
        text: "Створимо Grid, у якому кожна колонка буде мати мінімальну ширину 150px, але зможе розтягуватися на весь доступний простір.",
      },

      {
        type: "code",
        language: "html",
        code: `<div id="parent">
  <div>1</div>
  <div>2</div>
  <div>3</div>
  <div>4</div>
  <div>5</div>
  <div>6</div>
  <div>7</div>
  <div>8</div>
</div>`,
      },

      {
        type: "code",
        language: "css",
        code: `#parent {
  display: grid;

  grid-template-columns:
    repeat(auto-fill, minmax(150px, 1fr));

  border: 2px solid #696989;
  padding: 10px;
}

#parent > div {
  padding: 10px;
  border: 1px solid #696989;
}`,
      },

      {
        type: "paragraph",
        text: "У цьому прикладі браузер створює максимально можливу кількість колонок. Кожна колонка не може бути меншою за 150px, але може збільшуватися до 1fr.",
      },

      {
        type: "example",
        title: "Як працює minmax()",
        text: "Якщо контейнер широкий — у ряд поміщається більше колонок. Якщо ширини недостатньо — частина колонок переходить на новий ряд.",
      },

      {
        type: "code",
        language: "css",
        code: `grid-template-columns:
  repeat(auto-fill, minmax(150px, 1fr));`,
      },

      {
        type: "note",
        text: "minmax(150px, 1fr) означає: колонка повинна бути не меншою за 150px, але може зайняти весь доступний простір.",
      },

      {
        type: "heading",
        text: "Структура функції minmax()",
      },

      {
        type: "list",
        items: [
          "Перше значення — мінімальний розмір колонки.",
          "Друге значення — максимальний розмір колонки.",
          "auto-fill створює потрібну кількість колонок.",
          "1fr дозволяє колонкам рівномірно розподіляти вільний простір.",
        ],
      },

      {
        type: "example",
        title: "Інший приклад minmax()",
        text: "Колонки будуть мати ширину від 200px до 400px.",
      },

      {
        type: "code",
        language: "css",
        code: `#parent {
  display: grid;

  grid-template-columns:
    repeat(auto-fill, minmax(200px, 400px));
}`,
      },

      {
        type: "task",
        text: [
          "№1. Створіть Grid-контейнер із кількома елементами.",
          "№2. Використайте repeat() разом з auto-fill.",
          "№3. Задайте колонкам мінімальну ширину 150px.",
          "№4. Максимальну ширину зробіть 1fr.",
          "№5. Змінюйте ширину вікна браузера та перевірте перебудову Grid.",
        ],
      },

      {
        type: "hint",
        text: "Для адаптивного Grid найчастіше використовують конструкцію repeat(auto-fill, minmax(150px, 1fr)).",
      },

      {
        type: "answer",
        text: `#parent {
  display: grid;

  grid-template-columns:
    repeat(auto-fill, minmax(150px, 1fr));
}`,
      },
    ],
  },
  {
    id: "grid-auto-fit-css",
    title: "Значення auto-fit у CSS Grid",
    description:
      "Вивчаємо використання auto-fit разом з repeat() та minmax() для створення адаптивних колонок у CSS Grid.",
    content: [
      {
        type: "heading",
        text: "Значення auto-fit у CSS Grid",
      },

      {
        type: "paragraph",
        text: "У CSS Grid значення auto-fit використовується у функції repeat() для автоматичного підлаштування кількості колонок під ширину контейнера.",
      },

      {
        type: "paragraph",
        text: "На відміну від auto-fill, auto-fit не просто створює доступні колонки, а розтягує або стискає існуючі колонки, щоб вони максимально заповнили простір контейнера.",
      },

      {
        type: "example",
        title: "Використання auto-fit з minmax()",
        text: "Створимо Grid із восьми елементів. Колонки матимуть мінімальну ширину 150px і будуть автоматично розтягуватися.",
      },

      {
        type: "code",
        language: "html",
        code: `<div id="parent">
  <div>1</div>
  <div>2</div>
  <div>3</div>
  <div>4</div>
  <div>5</div>
  <div>6</div>
  <div>7</div>
  <div>8</div>
</div>`,
      },

      {
        type: "code",
        language: "css",
        code: `#parent {
  display: grid;

  grid-template-columns:
    repeat(auto-fit, minmax(150px, 1fr));

  border: 2px solid #696989;
  padding: 10px;
  width: 600px;
}

#parent > div {
  padding: 10px;
  border: 1px solid #696989;
}`,
      },

      {
        type: "paragraph",
        text: "При ширині контейнера 600px браузер автоматично визначає кількість колонок та розподіляє між ними доступний простір.",
      },

      {
        type: "example",
        title: "Зменшення ширини контейнера",
        text: "Якщо зменшити ширину Grid-контейнера, auto-fit перебудує сітку та змінить розмір колонок.",
      },

      {
        type: "code",
        language: "css",
        code: `#parent {
  display: grid;

  grid-template-columns:
    repeat(auto-fit, minmax(150px, 1fr));

  width: 400px;
}`,
      },

      {
        type: "paragraph",
        text: "Колонки залишаються адаптивними: вони не стають меншими за 150px, але можуть займати більше місця завдяки 1fr.",
      },

      {
        type: "note",
        text: "auto-fit часто використовують для адаптивних карток товарів, галерей та списків, де кількість колонок повинна змінюватися автоматично.",
      },

      {
        type: "heading",
        text: "Різниця між auto-fill та auto-fit",
      },

      {
        type: "list",
        items: [
          "auto-fill створює стільки колонок, скільки може поміститися.",
          "auto-fit підлаштовує колонки під доступний простір.",
          "auto-fit розтягує колонки, щоб заповнити весь контейнер.",
          "Обидва значення часто використовуються разом з minmax().",
        ],
      },

      {
        type: "example",
        title: "Приклад адаптивної сітки",
        text: "Такий запис створює колонки від 150px і автоматично підлаштовує їх під екран.",
      },

      {
        type: "code",
        language: "css",
        code: `#parent {
  display: grid;

  grid-template-columns:
    repeat(auto-fit, minmax(150px, 1fr));
}`,
      },

      {
        type: "task",
        text: [
          "№1. Створіть Grid із дев'ятьма елементами.",
          "№2. Використайте auto-fit для створення адаптивних колонок.",
          "№3. Налаштуйте контейнер так, щоб елементи розмістилися у три ряди.",
          "№4. Змініть ширину контейнера так, щоб елементи розмістилися у два ряди.",
        ],
      },

      {
        type: "hint",
        text: "Використовуйте repeat(auto-fit, minmax(150px, 1fr)) та змінюйте ширину контейнера.",
      },

      {
        type: "answer",
        text: `#parent {
  display: grid;

  grid-template-columns:
    repeat(auto-fit, minmax(150px, 1fr));

  width: 600px;
}

/* Для двох рядів можна зменшити ширину контейнера */
#parent {
  width: 400px;
}`,
      },
    ],
  },
  {
    id: "grid-template-rows-css",
    title: "Кількість і висота рядків у CSS Grid",
    description:
      "Вивчаємо властивість grid-template-rows для керування кількістю та розміром рядків у CSS Grid.",
    content: [
      {
        type: "heading",
        text: "Кількість і висота рядків у CSS Grid",
      },

      {
        type: "paragraph",
        text: "У CSS Grid можна керувати не тільки колонками, а й рядками. Для цього використовується властивість grid-template-rows.",
      },

      {
        type: "paragraph",
        text: "Властивість grid-template-rows задає висоту рядків через пробіл. Для неї можна використовувати ті самі одиниці, що й для колонок: px, %, fr, auto та repeat().",
      },

      {
        type: "example",
        title: "Створення чотирьох рядків",
        text: "Створимо Grid та задамо кожному рядку власну висоту.",
      },

      {
        type: "code",
        language: "html",
        code: `<div id="parent">
  <div>1</div>
  <div>2</div>
  <div>3</div>
  <div>4</div>
</div>`,
      },

      {
        type: "code",
        language: "css",
        code: `#parent {
  display: grid;

  grid-template-rows:
    50px 100px 50px 50px;

  border: 2px solid #696989;
  padding: 10px;
  width: 600px;
}

#parent > div {
  padding: 10px;
  border: 1px solid #696989;
}`,
      },

      {
        type: "paragraph",
        text: "Кожен рядок отримує власну висоту відповідно до значень у grid-template-rows.",
      },

      {
        type: "example",
        title: "Використання auto",
        text: "Перший та третій рядки мають фіксовану висоту, а другий займає весь доступний простір.",
      },

      {
        type: "code",
        language: "css",
        code: `#parent {
  display: grid;

  grid-template-rows:
    100px auto 60px;

  height: 400px;
}`,
      },

      {
        type: "paragraph",
        text: "Значення auto дозволяє рядку зайняти залишковий простір контейнера.",
      },

      {
        type: "example",
        title: "Використання repeat()",
        text: "Функція repeat() дозволяє скоротити запис однакових рядків.",
      },

      {
        type: "code",
        language: "css",
        code: `#parent {
  display: grid;

  grid-template-rows:
    repeat(3, 1fr);

  height: 200px;
}`,
      },

      {
        type: "paragraph",
        text: "У цьому прикладі контейнер ділиться на три однакові частини.",
      },

      {
        type: "example",
        title: "Автоматична кількість рядків через auto-fill",
        text: "Значення auto-fill може автоматично створювати потрібну кількість рядків заданої висоти.",
      },

      {
        type: "code",
        language: "css",
        code: `#parent {
  display: grid;

  grid-template-rows:
    repeat(auto-fill, 50px);

  height: 200px;
}`,
      },

      {
        type: "note",
        text: "grid-template-rows працює так само, як grid-template-columns, тільки керує горизонтальними рядами.",
      },

      {
        type: "list",
        items: [
          "grid-template-rows задає висоту рядків.",
          "Можна використовувати px, %, fr та auto.",
          "repeat() спрощує створення однакових рядків.",
          "auto-fill створює автоматичну кількість рядків.",
        ],
      },

      {
        type: "task",
        text: [
          "№1. Створіть Grid із трьома рядками.",
          "№2. Задайте першому рядку висоту 100px.",
          "№3. Задайте другому рядку висоту 150px.",
          "№4. Задайте третьому рядку висоту 200px.",
          "№5. Створіть три однакових рядки через repeat().",
        ],
      },

      {
        type: "hint",
        text: "Для однакових рядків використовуйте repeat(3, 1fr).",
      },

      {
        type: "answer",
        text: `/* Завдання №1 */
grid-template-rows:
  100px 150px 200px;

/* Завдання №2 */
grid-template-rows:
  repeat(3, 1fr);`,
      },
    ],
  },
  {
    id: "grid-template-short-css",
    title: "Скорочення для рядків і колонок у CSS Grid",
    description:
      "Вивчаємо скорочений запис grid-template для одночасного налаштування рядків і колонок у CSS Grid.",
    content: [
      {
        type: "heading",
        text: "Скорочення для рядків і колонок у CSS Grid",
      },

      {
        type: "paragraph",
        text: "У CSS Grid можна задавати розміри рядків і колонок окремо через grid-template-rows та grid-template-columns.",
      },

      {
        type: "paragraph",
        text: "Але якщо потрібно задати обидва значення одночасно, можна використати скорочену властивість grid-template.",
      },

      {
        type: "paragraph",
        text: "У властивості grid-template спочатку вказуються рядки, потім через символ / задаються колонки.",
      },

      {
        type: "example",
        title: "Створення таблиці через grid-template",
        text: "Створимо Grid із трьома однаковими рядками та трьома однаковими колонками.",
      },

      {
        type: "code",
        language: "html",
        code: `<div id="parent">
  <div>1</div>
  <div>2</div>
  <div>3</div>
  <div>4</div>
  <div>5</div>
  <div>6</div>
  <div>7</div>
  <div>8</div>
  <div>9</div>
</div>`,
      },

      {
        type: "code",
        language: "css",
        code: `#parent {
  display: grid;

  grid-template:
    1fr 1fr 1fr /
    1fr 1fr 1fr;

  border: 2px solid #696989;
  padding: 10px;
  width: 600px;
  height: 400px;
}

#parent > div {
  padding: 10px;
  border: 1px solid #696989;
}`,
      },

      {
        type: "paragraph",
        text: "Запис 1fr 1fr 1fr / 1fr 1fr 1fr означає: три рядки однакової висоти та три колонки однакової ширини.",
      },

      {
        type: "example",
        title: "Різні розміри рядків і колонок",
        text: "Можна задавати різні значення для кожного рядка та колонки.",
      },

      {
        type: "code",
        language: "css",
        code: `#parent {
  display: grid;

  grid-template:
    60px 1fr 60px /
    20% 1fr 15%;

  height: 300px;
}`,
      },

      {
        type: "paragraph",
        text: "У цьому прикладі перший і третій рядки мають фіксовану висоту, а середній займає весь доступний простір.",
      },

      {
        type: "example",
        title: "Використання дробових одиниць fr",
        text: "Значення fr можна використовувати для створення різних пропорцій між рядками та колонками.",
      },

      {
        type: "code",
        language: "css",
        code: `#parent {
  display: grid;

  grid-template:
    2fr 1fr 1fr /
    0.5fr 1fr 1fr;

  height: 400px;
}`,
      },

      {
        type: "note",
        text: "У grid-template спочатку записуються рядки, після / — колонки.",
      },

      {
        type: "heading",
        text: "Синтаксис grid-template",
      },

      {
        type: "code",
        language: "css",
        code: `grid-template:
  розміри-рядків /
  розміри-колонок;`,
      },

      {
        type: "list",
        items: [
          "grid-template об'єднує grid-template-rows та grid-template-columns.",
          "Рядки записуються перед символом /.",
          "Колонки записуються після символу /.",
          "Можна використовувати px, %, fr, auto та repeat().",
        ],
      },

      {
        type: "example",
        title: "Приклад структури",
        text: "Створимо Grid із двома рядками та трьома колонками.",
      },

      {
        type: "code",
        language: "css",
        code: `#parent {
  display: grid;

  grid-template:
    100px 1fr /
    200px 1fr 100px;
}`,
      },

      {
        type: "task",
        text: [
          "№1. Створіть Grid-контейнер через display: grid.",
          "№2. Використайте властивість grid-template.",
          "№3. Створіть декілька рядків та колонок різного розміру.",
          "№4. Спробуйте повторити різні плиткові макети через grid-template.",
          "№5. Використовуйте fr для створення пропорційних блоків.",
        ],
      },

      {
        type: "hint",
        text: "Пам'ятайте: спочатку задаються рядки, потім через / колонки.",
      },

      {
        type: "answer",
        text: `#parent {
  display: grid;

  grid-template:
    1fr 1fr 1fr /
    1fr 1fr 1fr;
}`,
      },
    ],
  },
  {
    id: "grid-row-span-css",
    title: "Об'єднання рядків у CSS Grid",
    description:
      "Вивчаємо властивість grid-row, яка дозволяє елементам займати декілька рядків у CSS Grid.",
    content: [
      {
        type: "heading",
        text: "Об'єднання рядків у CSS Grid",
      },

      {
        type: "paragraph",
        text: "У CSS Grid елемент може займати не тільки одну комірку, а декілька рядків або колонок сітки.",
      },

      {
        type: "paragraph",
        text: "Для об'єднання рядків використовується властивість grid-row, яка задає початкову та кінцеву позицію елемента.",
      },

      {
        type: "paragraph",
        text: "Значення записується через символ /. Наприклад, grid-row: 1 / 3 означає, що елемент займе перший і другий рядок, але не третій.",
      },

      {
        type: "example",
        title: "Елемент займає два рядки",
        text: "Створимо Grid із трьома елементами. Перший елемент буде займати два рядки.",
      },

      {
        type: "code",
        language: "html",
        code: `<div id="parent">
  <div id="elem1">1</div>
  <div id="elem2">2</div>
  <div id="elem3">3</div>
</div>`,
      },

      {
        type: "code",
        language: "css",
        code: `#parent {
  display: grid;

  grid-template-columns:
    2fr 1fr;

  height: 300px;
  width: 400px;

  padding: 10px;
  border: 2px solid #696989;
}

#parent > div {
  padding: 10px;
  border: 1px solid #696989;
}

#elem1 {
  grid-row: 1 / 3;
}

#elem2 {
  grid-row: 1 / 2;
}

#elem3 {
  grid-row: 2 / 3;
}`,
      },

      {
        type: "paragraph",
        text: "Перший елемент розтягується через два рядки, а другий і третій займають по одному рядку.",
      },

      {
        type: "example",
        title: "Елемент займає три рядки",
        text: "Тепер четвертий елемент розтягнемо на всі три рядки Grid.",
      },

      {
        type: "code",
        language: "html",
        code: `<div id="parent">
  <div id="elem1">1</div>
  <div id="elem2">2</div>
  <div id="elem3">3</div>
  <div id="elem4">4</div>
</div>`,
      },

      {
        type: "code",
        language: "css",
        code: `#elem1 {
  grid-row: 1 / 2;
}

#elem2 {
  grid-row: 2 / 3;
}

#elem3 {
  grid-row: 3 / 4;
}

#elem4 {
  grid-row: 1 / 4;
}`,
      },

      {
        type: "paragraph",
        text: "Елемент з grid-row: 1 / 4 займає всі три рядки, починаючи з першої лінії Grid і закінчуючи перед четвертою.",
      },

      {
        type: "note",
        text: "grid-row працює з лініями Grid, а не з кількістю рядків. Кінцева лінія не входить у область елемента.",
      },

      {
        type: "heading",
        text: "Синтаксис grid-row",
      },

      {
        type: "code",
        language: "css",
        code: `element {
  grid-row: початкова-лінія / кінцева-лінія;
}`,
      },

      {
        type: "list",
        items: [
          "grid-row: 1 / 2 займає один рядок.",
          "grid-row: 1 / 3 займає два рядки.",
          "grid-row: 1 / 4 займає три рядки.",
          "Властивість задається самому Grid-елементу, а не контейнеру.",
        ],
      },

      {
        type: "example",
        title: "Приклад створення великого блоку",
        text: "Можна зробити елемент, який займає більшу частину сітки.",
      },

      {
        type: "code",
        language: "css",
        code: `#main {
  grid-row: 1 / 5;
}`,
      },

      {
        type: "task",
        text: [
          "№1. Створіть Grid із декількома елементами.",
          "№2. Використайте grid-row для об'єднання рядків.",
          "№3. Зробіть один елемент висотою у два рядки.",
          "№4. Зробіть один елемент висотою у три рядки.",
          "№5. Повторіть різні макети через grid-row.",
        ],
      },

      {
        type: "hint",
        text: "Пам'ятайте: grid-row: 1 / 3 займає два рядки, тому що друга лінія не включається.",
      },

      {
        type: "answer",
        text: `#elem1 {
  grid-row: 1 / 3;
}

#elem4 {
  grid-row: 1 / 4;
}`,
      },
    ],
  },
  {
    id: "grid-column-span-css",
    title: "Об'єднання колонок у CSS Grid",
    description:
      "Вивчаємо властивість grid-column, яка дозволяє елементам займати декілька колонок у CSS Grid.",
    content: [
      {
        type: "heading",
        text: "Об'єднання колонок у CSS Grid",
      },

      {
        type: "paragraph",
        text: "Так само, як можна об'єднувати рядки за допомогою grid-row, у CSS Grid можна об'єднувати колонки за допомогою властивості grid-column.",
      },

      {
        type: "paragraph",
        text: "Властивість grid-column визначає, між якими вертикальними лініями Grid буде розташований елемент.",
      },

      {
        type: "paragraph",
        text: "Значення записується через символ /. Наприклад, grid-column: 1 / 4 означає, що елемент займе першу, другу та третю колонку.",
      },

      {
        type: "example",
        title: "Об'єднання колонок",
        text: "Створимо Grid із чотирма елементами. Перші три елементи будуть розташовані у першому рядку, а четвертий займе весь другий рядок.",
      },

      {
        type: "code",
        language: "html",
        code: `<div id="parent">
  <div id="elem1">1</div>
  <div id="elem2">2</div>
  <div id="elem3">3</div>
  <div id="elem4">4</div>
</div>`,
      },

      {
        type: "code",
        language: "css",
        code: `#parent {
  display: grid;

  padding: 10px;
  border: 2px solid #696989;

  width: 400px;
  height: 300px;
}

#parent > div {
  padding: 10px;
  border: 1px solid #696989;
}

#elem1 {
  grid-column: 1 / 2;
}

#elem2 {
  grid-column: 2 / 3;
}

#elem3 {
  grid-column: 3 / 4;
}

#elem4 {
  grid-column: 1 / 4;
}`,
      },

      {
        type: "paragraph",
        text: "Перші три елементи займають окремі колонки першого рядка, а четвертий елемент розтягується на всі три колонки другого рядка.",
      },

      {
        type: "heading",
        text: "Синтаксис grid-column",
      },

      {
        type: "code",
        language: "css",
        code: `element {
  grid-column:
    початкова-лінія /
    кінцева-лінія;
}`,
      },

      {
        type: "paragraph",
        text: "Grid використовує лінії між колонками. Кінцева лінія не входить у область елемента.",
      },

      {
        type: "example",
        title: "Елемент на всю ширину Grid",
        text: "Щоб елемент зайняв усі колонки, потрібно вказати початок і кінець сітки.",
      },

      {
        type: "code",
        language: "css",
        code: `#header {
  grid-column: 1 / 4;
}`,
      },

      {
        type: "note",
        text: "grid-column часто використовується для створення макетів: шапка сайту, основний контент, бокові панелі та підвал.",
      },

      {
        type: "list",
        items: [
          "grid-column керує шириною елемента у Grid.",
          "grid-column: 1 / 2 займає одну колонку.",
          "grid-column: 1 / 4 займає три колонки.",
          "Властивість задається дочірньому Grid-елементу.",
        ],
      },

      {
        type: "example",
        title: "Поєднання grid-row та grid-column",
        text: "Можна одночасно розтягувати елемент по вертикалі та горизонталі.",
      },

      {
        type: "code",
        language: "css",
        code: `#element {
  grid-row: 1 / 3;
  grid-column: 1 / 4;
}`,
      },

      {
        type: "paragraph",
        text: "У цьому випадку елемент займе декілька рядків і декілька колонок одночасно.",
      },

      {
        type: "task",
        text: [
          "№1. Створіть Grid із чотирма елементами.",
          "№2. Розмістіть три елементи у першому рядку.",
          "№3. Зробіть четвертий елемент на всю ширину другого рядка.",
          "№4. Використайте grid-column для об'єднання колонок.",
          "№5. Спробуйте створити власний макет.",
        ],
      },

      {
        type: "hint",
        text: "Щоб елемент зайняв декілька колонок, збільшуйте кінцевий номер лінії у grid-column.",
      },

      {
        type: "answer",
        text: `#elem4 {
  grid-column: 1 / 4;
}`,
      },
    ],
  },
  {
    id: "grid-row-column-combinations-css",
    title: "Комбінації об'єднань по рядах і стовпцях у CSS гридах",
    description:
      "Вивчаємо комбінування властивостей grid-row і grid-column для створення складних макетів у CSS Grid.",

    content: [
      {
        type: "heading",
        text: "Комбінації об'єднань по рядах і стовпцях у CSS гридах",
      },

      {
        type: "paragraph",
        text: "У CSS Grid можна об'єднувати елементи не тільки по рядах або стовпцях окремо, а також комбінувати ці можливості разом.",
      },

      {
        type: "paragraph",
        text: "Для цього використовуються властивості grid-row та grid-column, які дозволяють елементу займати декілька клітинок сітки.",
      },

      {
        type: "example",
        title: "Комбінація grid-row і grid-column",
        text: "Створимо таблицю, де елементи займають різну кількість рядків і стовпців.",
      },

      {
        type: "code",
        language: "html",
        code: `<div id="parent">
  <div id="elem1">1</div>
  <div id="elem2">2</div>
  <div id="elem3">3</div>
  <div id="elem4">4</div>
</div>`,
      },

      {
        type: "code",
        language: "css",
        code: `#parent {
  display: grid;
  grid-template-columns: 2fr 1fr 1fr;
  border: 2px solid #696989;
  padding: 10px;
  height: 300px;
  width: 400px;
}

#parent > div {
  padding: 10px;
  border: 1px solid #696989;
}

#elem1 {
  grid-row: 1 / 3;
}

#elem2 {
  grid-row: 1 / 2;
}

#elem3 {
  grid-row: 1 / 2;
}

#elem4 {
  grid-row: 2 / 3;
  grid-column: 2 / 4;
}`,
      },

      {
        type: "note",
        text: "grid-row визначає, скільки рядків займає елемент, а grid-column — скільки стовпців.",
      },

      {
        type: "example",
        title: "Елемент на всю ширину",
        text: "Можна зробити так, щоб один елемент займав весь ряд.",
      },

      {
        type: "code",
        language: "css",
        code: `#elem1 {
  grid-row: 1 / 2;
  grid-column: 1 / 4;
}`,
      },

      {
        type: "paragraph",
        text: "У цьому випадку перший елемент займає всі три стовпці першого ряду.",
      },

      {
        type: "example",
        title: "Елемент на декілька рядків і стовпців",
        text: "Один блок може одночасно займати декілька рядків і декілька колонок.",
      },

      {
        type: "code",
        language: "css",
        code: `#elem2 {
  grid-row: 2 / 4;
  grid-column: 1 / 2;
}

#elem3 {
  grid-row: 2 / 3;
  grid-column: 2 / 4;
}`,
      },

      {
        type: "paragraph",
        text: "Так можна створювати складні макети: сайдбари, великі блоки контенту, картки та журнальні сітки.",
      },

      {
        type: "example",
        title: "Верхній блок і однакові нижні блоки",
        text: "Перший елемент займає весь верхній ряд, а інші елементи ділять нижній ряд.",
      },

      {
        type: "code",
        language: "html",
        code: `<div id="parent">
  <div id="elem1">1</div>
  <div id="elem2">2</div>
  <div id="elem3">3</div>
  <div id="elem4">4</div>
</div>`,
      },

      {
        type: "code",
        language: "css",
        code: `#parent {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  height: 300px;
  width: 400px;
}

#elem1 {
  grid-column: 1 / 4;
}

#elem2,
#elem3,
#elem4 {
  grid-row: 2 / 3;
}`,
      },

      {
        type: "example",
        title: "Різна ширина колонок",
        text: "За допомогою fr можна створювати колонки різного розміру.",
      },

      {
        type: "code",
        language: "css",
        code: `#parent {
  display: grid;
  grid-template-columns: 3fr 1fr 1fr;
}

#elem1 {
  grid-column: 1 / 4;
}`,
      },

      {
        type: "paragraph",
        text: "У цьому прикладі перша колонка буде у три рази ширша за інші.",
      },

      {
        type: "example",
        title: "Чотири колонки з об'єднанням",
        text: "Створимо сітку з чотирьох колонок і об'єднаємо елементи.",
      },

      {
        type: "code",
        language: "css",
        code: `#parent {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
}

#elem1 {
  grid-column: 1 / 4;
}

#elem2 {
  grid-column: 4 / 5;
}

#elem3 {
  grid-column: 1 / 3;
}

#elem4 {
  grid-column: 3 / 5;
}`,
      },

      {
        type: "note",
        text: "grid-column: 1 / 4 означає, що елемент займає першу, другу і третю клітинки, але не включає четверту лінію.",
      },

      {
        type: "list",
        items: [
          "grid-row керує об'єднанням рядків.",
          "grid-column керує об'єднанням стовпців.",
          "Властивості можна використовувати разом.",
          "fr дозволяє створювати гнучкі пропорції колонок.",
          "CSS Grid дозволяє створювати складні адаптивні макети.",
        ],
      },

      {
        type: "task",
        text: [
          "№1. Створіть grid-контейнер з п'ятьма елементами.",
          "№2. Зробіть перший елемент на всю ширину.",
          "№3. Другий елемент розтягніть на два рядки.",
          "№4. Третій і четвертий елементи розмістіть поруч.",
          "№5. П'ятий елемент зробіть нижнім блоком на всю ширину.",
        ],
      },

      {
        type: "hint",
        text: "Для складних схем спочатку намалюйте сітку з лініями, а потім визначайте початок і кінець через grid-row та grid-column.",
      },

      {
        type: "answer",
        text: `#elem1 {
  grid-row: 1 / 2;
  grid-column: 1 / 5;
}

#elem2 {
  grid-row: 2 / 4;
  grid-column: 1 / 2;
}

#elem5 {
  grid-row: 4 / 5;
  grid-column: 1 / 5;
}`,
      },
    ],
  },
  {
    id: "grid-column-overlap-css",
    title: "Перекриття стовпців у CSS Grid",
    description:
      "Вивчаємо ситуації, коли елементи CSS Grid займають однакові стовпці та автоматично переходять на наступні рядки.",

    content: [
      {
        type: "heading",
        text: "Перекриття стовпців у CSS Grid",
      },

      {
        type: "paragraph",
        text: "У CSS Grid може виникнути ситуація, коли декілька елементів займають один і той самий стовпець.",
      },

      {
        type: "paragraph",
        text: "Якщо місце вже зайняте іншим елементом, браузер автоматично переміщує наступний елемент на новий ряд.",
      },

      {
        type: "example",
        title: "Приклад перекриття стовпців",
        text: "Створимо Grid-контейнер та розмістимо елементи за допомогою властивості grid-column.",
      },

      {
        type: "code",
        language: "html",
        code: `<div id="parent">
  <div id="elem1">1</div>
  <div id="elem2">2</div>
  <div id="elem3">3</div>
  <div id="elem4">4</div>
</div>`,
      },

      {
        type: "code",
        language: "css",
        code: `#parent {
  display: grid;
  padding: 10px;
  border: 2px solid #696989;
  width: 400px;
  height: 300px;
}

#parent > div {
  padding: 10px;
  border: 1px solid #696989;
}

#elem1 {
  grid-column: 1 / 4;
}

#elem2 {
  grid-column: 2 / 3;
}

#elem3 {
  grid-column: 1 / 2;
}

#elem4 {
  grid-column: 3 / 4;
}`,
      },

      {
        type: "paragraph",
        text: "Перший елемент займає всі три стовпці першого рядка. Інші елементи не можуть розміститися в цьому ж місці, тому браузер переносить їх нижче.",
      },

      {
        type: "heading",
        text: "Властивість grid-column",
      },

      {
        type: "paragraph",
        text: "Властивість grid-column визначає початкову та кінцеву лінію стовпця, який буде займати елемент.",
      },

      {
        type: "code",
        language: "css",
        code: `grid-column: 1 / 4;`,
      },

      {
        type: "note",
        text: "Значення 1 / 4 означає, що елемент займає область від першої до четвертої лінії Grid, тобто три стовпці.",
      },

      {
        type: "list",
        items: [
          "grid-column керує розташуванням елемента по горизонталі.",
          "Якщо місце зайняте, Grid переносить елемент нижче.",
          "Перекриття дозволяє створювати складні макети.",
          "Позиції визначаються через номери Grid-ліній.",
        ],
      },

      {
        type: "task",
        text: [
          "№1. Створіть Grid-контейнер width: 400px.",
          "№2. Додайте чотири дочірні блоки.",
          "№3. Перший блок розтягніть на три стовпці.",
          "№4. Інші блоки розмістіть у наступному рядку.",
        ],
      },

      {
        type: "hint",
        text: "Для розтягування елемента використовуйте grid-column: початкова-лінія / кінцева-лінія.",
      },

      {
        type: "answer",
        text: `.elem {
  grid-column: 1 / 4;
}`,
      },
    ],
  },
  {
    id: "grid-column-gap-css",
    title: "Відстань між стовпцями в CSS Grid",
    description:
      "Вивчаємо властивість column-gap, яка дозволяє задавати проміжки між стовпцями Grid-контейнера.",

    content: [
      {
        type: "heading",
        text: "Відстань між стовпцями в CSS Grid",
      },

      {
        type: "paragraph",
        text: "У CSS Grid можна керувати відстанню між стовпцями сітки. Для цього використовується властивість column-gap.",
      },

      {
        type: "paragraph",
        text: "Властивість column-gap задається батьківському Grid-контейнеру і визначає проміжок між вертикальними лініями сітки.",
      },

      {
        type: "example",
        title: "Використання column-gap",
        text: "Створимо Grid-контейнер із дев'ятьма елементами та додамо відстань між стовпцями 20px.",
      },

      {
        type: "code",
        language: "html",
        code: `<div id="parent">
  <div>1</div>
  <div>2</div>
  <div>3</div>
  <div>4</div>
  <div>5</div>
  <div>6</div>
  <div>7</div>
  <div>8</div>
  <div>9</div>
</div>`,
      },

      {
        type: "code",
        language: "css",
        code: `#parent {
  display: grid;
  column-gap: 20px;
  grid-template: 1fr 1fr 1fr / 1fr 1fr 1fr;
  padding: 10px;
  border: 2px solid #696989;
  width: 600px;
  height: 200px;
}

#parent > div {
  padding: 10px;
  border: 1px solid #696989;
}`,
      },

      {
        type: "paragraph",
        text: "У цьому прикладі Grid має три стовпці однакової ширини. Властивість column-gap додає між ними проміжок 20px.",
      },

      {
        type: "heading",
        text: "Значення column-gap",
      },

      {
        type: "paragraph",
        text: "Значення column-gap можна задавати у різних одиницях вимірювання: px, %, rem, fr та інших.",
      },

      {
        type: "code",
        language: "css",
        code: `#parent {
  column-gap: 20%;
}`,
      },

      {
        type: "note",
        text: "column-gap впливає тільки на відстань між стовпцями. Для відстані між рядками використовується властивість row-gap.",
      },

      {
        type: "list",
        items: [
          "column-gap задається Grid-батьку.",
          "Властивість створює проміжки між стовпцями.",
          "Значення можна задавати в px, %, rem та інших одиницях.",
          "Для рядків використовується row-gap.",
        ],
      },

      {
        type: "task",
        text: [
          "№1. Створіть Grid-контейнер із дев'ятьма блоками.",
          "№2. Зробіть три стовпці та три рядки.",
          "№3. Додайте відстань між стовпцями 20%.",
          "№4. Перевірте результат у браузері.",
        ],
      },

      {
        type: "hint",
        text: "Використовуйте властивість column-gap у батьківському Grid-контейнері.",
      },

      {
        type: "answer",
        text: `#parent {
  display: grid;
  column-gap: 20%;
}`,
      },
    ],
  },
  {
    id: "grid-row-gap-css",
    title: "Відстань між рядами в CSS Grid",
    description:
      "Вивчаємо властивість row-gap, яка дозволяє задавати проміжки між горизонтальними рядами Grid-контейнера.",

    content: [
      {
        type: "heading",
        text: "Відстань між рядами в CSS Grid",
      },

      {
        type: "paragraph",
        text: "У CSS Grid можна керувати не тільки відстанню між стовпцями, а й проміжками між рядами.",
      },

      {
        type: "paragraph",
        text: "Для створення відстані між горизонтальними рядами використовується властивість row-gap. Вона задається батьківському Grid-контейнеру.",
      },

      {
        type: "example",
        title: "Використання row-gap",
        text: "Створимо Grid-контейнер із трьома елементами та додамо відстань між рядами 10px.",
      },

      {
        type: "code",
        language: "html",
        code: `<div id="parent">
  <div>1</div>
  <div>2</div>
  <div>3</div>
</div>`,
      },

      {
        type: "code",
        language: "css",
        code: `#parent {
  display: grid;
  row-gap: 10px;
  padding: 10px;
  border: 2px solid #696989;
  width: 600px;
  height: 200px;
}

#parent > div {
  padding: 10px;
  border: 1px solid #696989;
}`,
      },

      {
        type: "paragraph",
        text: "У цьому прикладі між рядками Grid створюється проміжок 10px. Елементи залишаються у своїх комірках, але між ними з'являється відстань.",
      },

      {
        type: "heading",
        text: "Значення row-gap",
      },

      {
        type: "paragraph",
        text: "Властивість row-gap може приймати різні одиниці вимірювання: px, %, rem та інші.",
      },

      {
        type: "code",
        language: "css",
        code: `#parent {
  row-gap: 25%;
}`,
      },

      {
        type: "paragraph",
        text: "Значення у відсотках створює проміжок, який залежить від розміру Grid-контейнера.",
      },

      {
        type: "note",
        text: "row-gap відповідає тільки за відстань між рядами. Для стовпців використовується властивість column-gap.",
      },

      {
        type: "list",
        items: [
          "row-gap задається Grid-батьку.",
          "Властивість створює проміжки між горизонтальними рядами.",
          "Можна використовувати px, %, rem та інші одиниці.",
          "column-gap відповідає за проміжки між стовпцями.",
        ],
      },

      {
        type: "task",
        text: [
          "№1. Створіть Grid-таблицю з кількома елементами.",
          "№2. Додайте властивість row-gap.",
          "№3. Встановіть відстань між рядами 25%.",
          "№4. Перевірте результат у браузері.",
        ],
      },

      {
        type: "hint",
        text: "Для створення проміжків між рядами використовуйте row-gap у батьківському Grid-контейнері.",
      },

      {
        type: "answer",
        text: `#parent {
  display: grid;
  row-gap: 25%;
}`,
      },
    ],
  },
  {
    id: "grid-gap-css",
    title: "Відстань між стовпцями і рядами в CSS Grid",
    description:
      "Вивчаємо властивість gap, яка дозволяє одночасно задавати проміжки між рядками та стовпцями Grid-контейнера.",

    content: [
      {
        type: "heading",
        text: "Відстань між стовпцями і рядами в CSS Grid",
      },

      {
        type: "paragraph",
        text: "У CSS Grid можна одночасно задавати відстань між рядками та стовпцями за допомогою властивості gap.",
      },

      {
        type: "paragraph",
        text: "Властивість gap є скороченим записом для row-gap і column-gap.",
      },

      {
        type: "heading",
        text: "Один параметр у властивості gap",
      },

      {
        type: "paragraph",
        text: "Якщо передати тільки одне значення, воно буде використовуватися одночасно для відстані між рядками та стовпцями.",
      },

      {
        type: "example",
        title: "Однакова відстань між рядами і стовпцями",
        text: "Створимо Grid із дев'ятьма елементами та встановимо однаковий проміжок 10px.",
      },

      {
        type: "code",
        language: "html",
        code: `<div id="parent">
  <div>1</div>
  <div>2</div>
  <div>3</div>
  <div>4</div>
  <div>5</div>
  <div>6</div>
  <div>7</div>
  <div>8</div>
  <div>9</div>
</div>`,
      },

      {
        type: "code",
        language: "css",
        code: `#parent {
  display: grid;
  gap: 10px;
  grid-template: 1fr 1fr 1fr / 1fr 1fr 1fr;
  padding: 10px;
  border: 2px solid #696989;
  width: 600px;
  height: 200px;
}

#parent > div {
  padding: 10px;
  border: 1px solid #696989;
}`,
      },

      {
        type: "paragraph",
        text: "У цьому прикладі між усіма рядками та стовпцями з'являється однакова відстань 10px.",
      },

      {
        type: "heading",
        text: "Два параметри у властивості gap",
      },

      {
        type: "paragraph",
        text: "Якщо передати два значення через пробіл, перше значення відповідає за рядки, а друге — за стовпці.",
      },

      {
        type: "code",
        language: "css",
        code: `#parent {
  display: grid;
  gap: 20px 10px;
}`,
      },

      {
        type: "paragraph",
        text: "У прикладі gap: 20px 10px означає: 20px між рядами та 10px між стовпцями.",
      },

      {
        type: "note",
        text: "Порядок значень у gap важливий: перше значення — рядки, друге — стовпці.",
      },

      {
        type: "list",
        items: [
          "gap — скорочений запис для row-gap і column-gap.",
          "Одне значення задає однаковий відступ.",
          "Два значення: перше для рядків, друге для стовпців.",
          "gap задається батьківському Grid-контейнеру.",
        ],
      },

      {
        type: "heading",
        text: "Практичні завдання",
      },

      {
        type: "task",
        text: [
          "№1. Створіть Grid-таблицю з декількома елементами.",
          "№2. Додайте однакову відстань між рядками та стовпцями 10px.",
          "№3. Створіть другий варіант, де відстань між рядами 10px, а між стовпцями 5%.",
        ],
      },

      {
        type: "hint",
        text: "Для однакової відстані використовуйте gap: значення. Для різної відстані використовуйте два значення через пробіл.",
      },

      {
        type: "answer",
        text: `/* однакова відстань */
#parent {
  gap: 10px;
}

/* різна відстань */
#parent {
  gap: 10px 5%;
}`,
      },
    ],
  },
  {
    id: "grid-tile-layout-css",
    title: "Плитка в CSS Grid",
    description:
      "Практикуємо створення плиток у CSS Grid: розміщення елементів у декілька колонок та додавання відступів між блоками.",

    content: [
      {
        type: "heading",
        text: "Плитка в CSS Grid",
      },

      {
        type: "paragraph",
        text: "CSS Grid часто використовується для створення плиткових макетів: карток, галерей, каталогів товарів та інших елементів.",
      },

      {
        type: "paragraph",
        text: "За допомогою grid-template-columns можна легко розташувати блоки у потрібну кількість колонок.",
      },

      {
        type: "heading",
        text: "Плитка з 9 блоків по 3 в ряд без відступів",
      },

      {
        type: "paragraph",
        text: "Створимо Grid з дев'ятьма елементами та розмістимо їх у три однакові колонки.",
      },

      {
        type: "code",
        language: "html",
        code: `<div id="parent">
  <div>1</div>
  <div>2</div>
  <div>3</div>
  <div>4</div>
  <div>5</div>
  <div>6</div>
  <div>7</div>
  <div>8</div>
  <div>9</div>
</div>`,
      },

      {
        type: "code",
        language: "css",
        code: `#parent {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  border: 2px solid #696989;
  padding: 10px;
  width: 600px;
}

#parent > div {
  height: 100px;
  padding: 10px;
  border: 1px solid #696989;
}`,
      },

      {
        type: "paragraph",
        text: "Функція repeat(3, 1fr) створює три однакові колонки. Усі блоки займають свої комірки без проміжків між ними.",
      },

      {
        type: "heading",
        text: "Плитка з відступами між блоками",
      },

      {
        type: "paragraph",
        text: "Для створення відстані між елементами використовується властивість grid-gap або сучасний запис gap.",
      },

      {
        type: "code",
        language: "css",
        code: `#parent {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 10px;
  border: 2px solid #696989;
  padding: 10px;
  width: 600px;
}`,
      },

      {
        type: "paragraph",
        text: "Тепер між усіма блоками з'явився однаковий проміжок 10px.",
      },

      {
        type: "heading",
        text: "Відступи тільки між блоками",
      },

      {
        type: "paragraph",
        text: "Якщо потрібно прибрати зовнішній відступ навколо плитки, не додаємо padding контейнеру, а залишаємо тільки gap.",
      },

      {
        type: "code",
        language: "css",
        code: `#parent {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 10px;
  border: 2px solid #696989;
  width: 600px;
}`,
      },

      {
        type: "heading",
        text: "Плитка з 8 блоків",
      },

      {
        type: "paragraph",
        text: "Якщо кількість елементів не ділиться на кількість колонок, Grid автоматично створює неповний останній ряд.",
      },

      {
        type: "code",
        language: "html",
        code: `<div id="parent">
  <div>1</div>
  <div>2</div>
  <div>3</div>
  <div>4</div>
  <div>5</div>
  <div>6</div>
  <div>7</div>
  <div>8</div>
</div>`,
      },

      {
        type: "code",
        language: "css",
        code: `#parent {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 10px;
  border: 2px solid #696989;
  width: 600px;
}

#parent > div {
  height: 100px;
  padding: 10px;
  border: 1px solid #696989;
}`,
      },

      {
        type: "note",
        text: "CSS Grid автоматично переносить елементи на нові рядки, якщо в поточному рядку недостатньо місця.",
      },

      {
        type: "list",
        items: [
          "Grid дозволяє швидко створювати плиткові макети.",
          "repeat() спрощує створення однакових колонок.",
          "gap додає відстань між елементами.",
          "Неповний останній ряд заповнюється автоматично.",
        ],
      },

      {
        type: "task",
        text: [
          "№1. Створіть плитку з 9 блоків у три колонки.",
          "№2. Додайте відступи між блоками через gap: 20px.",
          "№3. Створіть плитку з 8 блоків і перевірте останній ряд.",
        ],
      },

      {
        type: "hint",
        text: "Для однакової ширини колонок використовуйте grid-template-columns: repeat(3, 1fr).",
      },

      {
        type: "answer",
        text: `#parent {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 10px;
}`,
      },
    ],
  },
];
