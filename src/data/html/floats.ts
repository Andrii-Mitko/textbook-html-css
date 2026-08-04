import type { Lesson } from "../types";

export const floats: Lesson[] = [
  {
    id: "float-introduction-css",
    title: "Вступ до властивості float у CSS",
    description:
      "Вивчаємо властивість float, яка дозволяє розташовувати елементи з обтіканням текстом.",
    content: [
      {
        type: "heading",
        text: "Вступ до властивості float у CSS",
      },

      {
        type: "paragraph",
        text: "Властивість float використовується для того, щоб елемент міг бути притиснутий до лівого або правого краю, а інший контент обтікав його.",
      },

      {
        type: "paragraph",
        text: "Найчастіше float використовували для розташування зображень у тексті, коли текст повинен обтікати картинку.",
      },

      {
        type: "heading",
        text: "Приклад без float",
      },

      {
        type: "code",
        language: "html",
        code: `<div>
  <img src="img.png" alt="">
  some long text
</div>`,
      },

      {
        type: "code",
        language: "css",
        code: `div {
  width: 400px;
  text-align: justify;
}`,
      },

      {
        type: "example",
        title: "Проблема",
        text: "Картинка займає місце тільки на першому рядку тексту. Праворуч від неї залишається порожній простір.",
      },

      {
        type: "heading",
        text: "float: left",
      },

      {
        type: "paragraph",
        text: "Значення left притискає елемент до лівого краю, а текст починає обтікати його справа.",
      },

      {
        type: "code",
        language: "css",
        code: `img {
  float: left;
}`,
      },

      {
        type: "example",
        title: "Результат",
        text: "Зображення знаходиться зліва, а текст заповнює вільний простір поруч із ним.",
      },

      {
        type: "heading",
        text: "float: right",
      },

      {
        type: "paragraph",
        text: "За допомогою значення right можна притиснути елемент до правого краю, а текст буде обтікати його зліва.",
      },

      {
        type: "code",
        language: "css",
        code: `img {
  float: right;
}`,
      },

      {
        type: "example",
        title: "Результат",
        text: "Картинка переміщується вправо, а текст розташовується поруч із нею зліва.",
      },

      {
        type: "heading",
        text: "Основні значення float",
      },

      {
        type: "list",
        items: [
          "float: left — елемент плаває зліва.",
          "float: right — елемент плаває справа.",
          "float: none — стандартне значення, без обтікання.",
        ],
      },

      {
        type: "note",
        text: "Сьогодні для створення складних макетів частіше використовують Flexbox і Grid, але float досі зустрічається в роботі з текстом та старими проєктами.",
      },

      {
        type: "heading",
        text: "Практичне завдання",
      },

      {
        type: "task",
        text: [
          "№1. Візьміть довгий текст.",
          "№2. Додайте одну картинку на початок тексту.",
          "№3. Додайте другу картинку в середину тексту.",
          "№4. Для першої картинки встановіть float: left.",
          "№5. Для другої картинки встановіть float: right.",
        ],
      },

      {
        type: "hint",
        text: "Для обтікання текстом використовуйте float: left або float: right.",
      },

      {
        type: "answer",
        text: `img:first-child {
  float: left;
}

img:nth-of-type(2) {
  float: right;
}`,
      },
    ],
  },
  {
    id: "float-elements-through-tags-css",
    title: "Проникнення плаваючих елементів через теги в CSS",
    description:
      "Розбираємо, як float впливає на сусідні елементи та чому плаваючий елемент може заходити за межі інших тегів.",
    content: [
      {
        type: "heading",
        text: "Проникнення плаваючих елементів через теги в CSS",
      },

      {
        type: "paragraph",
        text: "Плаваючі елементи за допомогою float можуть впливати не тільки на текст, а й на інші HTML-елементи.",
      },

      {
        type: "paragraph",
        text: "Наявність тегів, наприклад p, не заважає обтіканню. Текст усередині цих тегів буде обходити елемент із float.",
      },

      {
        type: "heading",
        text: "Приклад із декількома абзацами",
      },

      {
        type: "code",
        language: "html",
        code: `<div>
  <img src="img.png" alt="">

  <p>
    some long text
  </p>

  <p>
    some long text
  </p>
</div>`,
      },

      {
        type: "code",
        language: "css",
        code: `div {
  width: 400px;
  border: 1px solid red;
  text-align: justify;
}

img {
  float: left;
}`,
      },

      {
        type: "example",
        title: "Результат",
        text: "Картинка знаходиться зліва, а текст у параграфах обтікає її справа.",
      },

      {
        type: "heading",
        text: "Проблема з коротким текстом",
      },

      {
        type: "paragraph",
        text: "Якщо в першому абзаці мало тексту, висоти рядків може бути недостатньо, щоб обійти картинку повністю.",
      },

      {
        type: "paragraph",
        text: "У такому випадку плаваюча картинка може зайти на наступний абзац.",
      },

      {
        type: "code",
        language: "html",
        code: `<div>
  <img src="img.png" alt="">

  <p>
    Lorem ipsum dolor sit amet,
    consectetur adipiscing elit.
  </p>

  <p>
    some long text
  </p>
</div>`,
      },

      {
        type: "code",
        language: "css",
        code: `div {
  width: 400px;
  border: 1px solid red;
  text-align: justify;
}

img {
  float: left;
}`,
      },

      {
        type: "example",
        title: "Що відбувається",
        text: "Другий абзац також починає обтікати картинку, тому що float не обмежується одним тегом.",
      },

      {
        type: "heading",
        text: "Чому це відбувається",
      },

      {
        type: "list",
        items: [
          "float виводить елемент із нормального потоку документа.",
          "Інші елементи продовжують займати доступний простір.",
          "Обтікання працює для всього контейнера, а не тільки одного абзацу.",
        ],
      },

      {
        type: "note",
        text: "Щоб зупинити обтікання float, використовується властивість clear.",
      },

      {
        type: "heading",
        text: "Практичне завдання",
      },

      {
        type: "task",
        text: [
          "№1. Створіть контейнер із картинкою та двома абзацами.",
          "№2. Додайте картинці float: left.",
          "№3. Зменшіть текст у першому абзаці.",
          "№4. Перевірте, як картинка впливає на другий абзац.",
        ],
      },

      {
        type: "hint",
        text: "float працює на рівні контейнера, тому всі наступні елементи можуть обтікати плаваючий блок.",
      },
    ],
  },
  {
    id: "float-margin-css",
    title: "Поєднання float і margin у CSS",
    description:
      "Розбираємо особливості роботи margin з плаваючими елементами та розуміємо, чому відступи можуть працювати не так, як очікується.",
    content: [
      {
        type: "heading",
        text: "Поєднання float і margin у CSS",
      },

      {
        type: "paragraph",
        text: "Коли елемент має float, робота відступів може відрізнятися від звичайної поведінки блоків.",
      },

      {
        type: "paragraph",
        text: "Розглянемо ситуацію, коли картинка плаває зліва, а текст знаходиться поруч із нею.",
      },

      {
        type: "heading",
        text: "Проблема з margin у тексті",
      },

      {
        type: "code",
        language: "html",
        code: `<div>
  <img src="img.png" alt="">

  <p>
    Lorem ipsum dolor sit amet,
    consectetur adipiscing elit.
  </p>

  <p>
    some long text
  </p>
</div>`,
      },

      {
        type: "code",
        language: "css",
        code: `div {
  width: 400px;
  border: 1px solid red;
  text-align: justify;
}

p {
  margin-left: 30px;
}

img {
  float: left;
}`,
      },

      {
        type: "example",
        title: "Результат",
        text: "Відступ зліва застосовується не від картинки, а від батьківського div. Текст біля картинки залишається на тому ж місці.",
      },

      {
        type: "heading",
        text: "Перевіряємо межі елементів",
      },

      {
        type: "paragraph",
        text: "Щоб зрозуміти, що відбувається, додамо зелену межу для абзаців.",
      },

      {
        type: "code",
        language: "css",
        code: `p {
  margin-left: 30px;
  border: 1px solid green;
}

img {
  float: left;
}`,
      },

      {
        type: "example",
        title: "Що видно",
        text: "Абзаци дійсно зміщуються вправо, але їх блок все одно знаходиться під плаваючою картинкою.",
      },

      {
        type: "heading",
        text: "Використання opacity для перевірки",
      },

      {
        type: "paragraph",
        text: "Якщо зробити картинку напівпрозорою, стає видно, що текстові блоки фізично знаходяться під нею.",
      },

      {
        type: "code",
        language: "css",
        code: `img {
  float: left;
  opacity: 0.5;
}`,
      },

      {
        type: "example",
        title: "Результат",
        text: "Картинка стає прозорою, і видно, що межі абзаців проходять під нею.",
      },

      {
        type: "heading",
        text: "Коли картинка знаходиться всередині абзацу",
      },

      {
        type: "paragraph",
        text: "Якщо помістити зображення всередину першого абзацу, float буде працювати вже відносно цього абзацу.",
      },

      {
        type: "code",
        language: "html",
        code: `<div>
  <p>
    <img src="img.png" alt="">
    Lorem ipsum dolor sit amet.
  </p>

  <p>
    some long text
  </p>
</div>`,
      },

      {
        type: "code",
        language: "css",
        code: `p {
  margin-left: 30px;
  border: 1px solid green;
}

img {
  float: left;
  opacity: 0.5;
}`,
      },

      {
        type: "example",
        title: "Результат",
        text: "Тепер картинка рухається разом із першим абзацом, тому margin впливає на весь блок.",
      },

      {
        type: "heading",
        text: "Головний висновок",
      },

      {
        type: "list",
        items: [
          "float змінює спосіб взаємодії елемента з текстом.",
          "Блоки з float можуть знаходитися під іншими блоками.",
          "margin працює для самого блоку, а не для відстані між текстом і float-елементом.",
          "Якщо потрібно керувати відстанню від картинки, краще задавати margin самій картинці.",
        ],
      },

      {
        type: "note",
        text: "Для створення сучасних макетів краще використовувати Flexbox або Grid. float сьогодні переважно застосовують для обтікання текстом.",
      },

      {
        type: "heading",
        text: "Практичне завдання",
      },

      {
        type: "task",
        text: [
          "№1. Створіть div із картинкою та двома абзацами.",
          "№2. Додайте картинці float: left.",
          "№3. Додайте абзацам margin-left: 30px.",
          "№4. Додайте межі та перевірте розташування блоків.",
          "№5. Перемістіть картинку всередину першого абзацу та порівняйте результат.",
        ],
      },

      {
        type: "hint",
        text: "Якщо потрібно зробити відступ саме між текстом і картинкою, використовуйте margin для картинки.",
      },

      {
        type: "answer",
        text: `img {
  float: left;
  margin-right: 30px;
}`,
      },
    ],
  },
  {
    id: "float-padding-css",
    title: "Поєднання float і padding у CSS",
    description:
      "Розбираємо, як padding взаємодіє з плаваючими елементами та чому відступ може не впливати на відстань між текстом і картинкою.",
    content: [
      {
        type: "heading",
        text: "Поєднання float і padding у CSS",
      },

      {
        type: "paragraph",
        text: "Як і margin, властивість padding має свої особливості при роботі з елементами, які мають float.",
      },

      {
        type: "paragraph",
        text: "Розглянемо приклад, коли картинка знаходиться перед абзацами та має float: left.",
      },

      {
        type: "heading",
        text: "Padding у абзацах поруч із float-елементом",
      },

      {
        type: "code",
        language: "html",
        code: `<div>
  <img src="img.png" alt="">

  <p>
    Lorem ipsum dolor sit amet,
    consectetur adipiscing elit.
  </p>

  <p>
    some long text
  </p>
</div>`,
      },

      {
        type: "code",
        language: "css",
        code: `div {
  width: 400px;
  border: 1px solid red;
  text-align: justify;
}

p {
  margin-left: 30px;
  padding-left: 30px;
  border: 1px solid green;
}

img {
  float: left;
  opacity: 0.5;
}`,
      },

      {
        type: "example",
        title: "Результат",
        text: "Padding зміщує текст усередині абзацу, але не створює відступ саме від картинки.",
      },

      {
        type: "heading",
        text: "Чому padding не відсуває текст від картинки",
      },

      {
        type: "paragraph",
        text: "Причина в тому, що абзаци фізично знаходяться під плаваючим елементом. Padding змінює внутрішній простір самого абзацу, а не положення картинки.",
      },

      {
        type: "heading",
        text: "Картинка всередині абзацу",
      },

      {
        type: "paragraph",
        text: "Якщо перемістити картинку всередину першого абзацу, вона буде рухатися разом із цим блоком.",
      },

      {
        type: "code",
        language: "html",
        code: `<div>
  <p>
    <img src="img.png" alt="">
    Lorem ipsum dolor sit amet,
    consectetur adipiscing elit.
  </p>

  <p>
    some long text
  </p>
</div>`,
      },

      {
        type: "code",
        language: "css",
        code: `div {
  width: 400px;
  border: 1px solid red;
  text-align: justify;
}

p {
  margin-left: 30px;
  padding-left: 30px;
  border: 1px solid green;
}

img {
  float: left;
  opacity: 0.5;
}`,
      },

      {
        type: "example",
        title: "Результат",
        text: "Тепер картинка переміщується разом із текстом абзацу, тому margin і padding впливають на її положення.",
      },

      {
        type: "heading",
        text: "Як правильно зробити відступ від картинки",
      },

      {
        type: "paragraph",
        text: "Якщо потрібно створити відстань між картинкою та текстом, краще додати margin безпосередньо до картинки.",
      },

      {
        type: "code",
        language: "css",
        code: `img {
  float: left;
  margin-right: 30px;
}`,
      },

      {
        type: "heading",
        text: "Висновок",
      },

      {
        type: "list",
        items: [
          "padding змінює внутрішній простір елемента.",
          "padding не створює відстань між float-картинкою та текстом.",
          "float-елемент може знаходитися під блоком абзацу.",
          "Для відступу від картинки використовуйте margin у самої картинки.",
        ],
      },

      {
        type: "note",
        text: "Розуміння поведінки float важливе для роботи зі старим CSS-кодом, але сучасні макети краще створювати через Flexbox та Grid.",
      },

      {
        type: "heading",
        text: "Практичне завдання",
      },

      {
        type: "task",
        text: [
          "№1. Створіть контейнер із картинкою та двома абзацами.",
          "№2. Додайте картинці float: left.",
          "№3. Додайте абзацам padding-left: 30px.",
          "№4. Перевірте, чому текст біля картинки не змістився.",
          "№5. Перенесіть картинку всередину абзацу та порівняйте результат.",
        ],
      },

      {
        type: "hint",
        text: "Padding працює всередині елемента. Якщо потрібно відсунути текст від картинки — задайте margin самій картинці.",
      },

      {
        type: "answer",
        text: `img {
  float: left;
  margin-right: 30px;
}`,
      },
    ],
  },
  {
    id: "float-elements-under-tags-css",
    title: "Плаваючі елементи під тегами в CSS",
    description:
      "Розбираємо, які елементи обтікають float-елементи та чому обтікання працює тільки для елементів, які знаходяться після них у HTML.",
    content: [
      {
        type: "heading",
        text: "Плаваючі елементи під тегами в CSS",
      },

      {
        type: "paragraph",
        text: "При роботі з float важливо розуміти порядок HTML-елементів. Плаваючий елемент впливає тільки на ті елементи, які знаходяться після нього в коді.",
      },

      {
        type: "heading",
        text: "Картинка всередині першого абзацу",
      },

      {
        type: "paragraph",
        text: "Спочатку розглянемо випадок, коли картинка знаходиться всередині першого абзацу та має float: right.",
      },

      {
        type: "code",
        language: "html",
        code: `<div>
  <p>
    <img src="img.png" alt="">
    Lorem ipsum dolor sit amet,
    consectetur adipiscing elit.
  </p>

  <p>
    some long text
  </p>
</div>`,
      },

      {
        type: "code",
        language: "css",
        code: `div {
  border: 1px solid red;
  text-align: justify;
}

p {
  border: 1px solid green;
}

img {
  float: right;
  opacity: 0.5;
}`,
      },

      {
        type: "example",
        title: "Результат",
        text: "Текст першого абзацу обтікає картинку справа, оскільки зображення знаходиться всередині цього абзацу.",
      },

      {
        type: "heading",
        text: "Картинка між абзацами",
      },

      {
        type: "paragraph",
        text: "Тепер винесемо картинку після першого абзацу.",
      },

      {
        type: "code",
        language: "html",
        code: `<div>
  <p>
    Lorem ipsum dolor sit amet,
    consectetur adipiscing elit.
  </p>

  <img src="img.png" alt="">

  <p>
    some long text
  </p>
</div>`,
      },

      {
        type: "example",
        title: "Результат",
        text: "Картинку обтікає тільки другий абзац, тому що він знаходиться після картинки в HTML-коді.",
      },

      {
        type: "heading",
        text: "Картинка після всього тексту",
      },

      {
        type: "paragraph",
        text: "Якщо перемістити картинку після другого абзацу, жоден текст не буде її обтікати.",
      },

      {
        type: "code",
        language: "html",
        code: `<div>
  <p>
    Lorem ipsum dolor sit amet,
    consectetur adipiscing elit.
  </p>

  <p>
    some long text
  </p>

  <img src="img.png" alt="">
</div>`,
      },

      {
        type: "example",
        title: "Результат",
        text: "Картинка плаває справа, але обтікання немає, тому що після неї немає текстових елементів.",
      },

      {
        type: "heading",
        text: "Головне правило float",
      },

      {
        type: "list",
        items: [
          "Елементи після float-елемента можуть його обтікати.",
          "Елементи перед float-елементом не реагують на нього.",
          "Порядок HTML-коду впливає на поведінку обтікання.",
          "float не повертає елемент назад у нормальний потік документа.",
        ],
      },

      {
        type: "note",
        text: "Якщо потрібно, щоб певний блок не обтікав float-елемент, використовуйте властивість clear.",
      },

      {
        type: "heading",
        text: "Практичне завдання",
      },

      {
        type: "task",
        text: [
          "№1. Створіть два абзаци та картинку.",
          "№2. Додайте картинці float: right.",
          "№3. Перевірте поведінку, коли картинка знаходиться всередині першого абзацу.",
          "№4. Перемістіть картинку між абзацами.",
          "№5. Перемістіть картинку після другого абзацу та порівняйте результат.",
        ],
      },

      {
        type: "hint",
        text: "float впливає тільки на елементи, які знаходяться нижче нього в HTML-структурі.",
      },

      {
        type: "answer",
        text: `img {
  float: right;
}`,
      },
    ],
  },
  {
    id: "float-parent-height-css2",
    title: "Вплив float на батьківський елемент у CSS",
    description:
      "Розбираємо, чому елементи з float не враховуються у висоті батьківського контейнера та як це впливає на верстку.",
    content: [
      {
        type: "heading",
        text: "Вплив float на батьківський елемент у CSS",
      },

      {
        type: "paragraph",
        text: "Плаваючі елементи мають особливість: вони можуть випадати з розрахунку висоти свого батьківського елемента.",
      },

      {
        type: "paragraph",
        text: "Через це батьківський блок може втратити свою висоту, навіть якщо всередині нього знаходиться зображення.",
      },

      {
        type: "heading",
        text: "Картинка без float",
      },

      {
        type: "paragraph",
        text: "Спочатку створимо контейнер div із зображенням без використання float.",
      },

      {
        type: "code",
        language: "html",
        code: `<div>
  <img src="img.png" alt="">
</div>`,
      },

      {
        type: "code",
        language: "css",
        code: `div {
  border: 1px solid red;
}`,
      },

      {
        type: "example",
        title: "Результат",
        text: "Батьківський div має висоту зображення, тому його межа повністю охоплює картинку.",
      },

      {
        type: "heading",
        text: "Картинка з float: left",
      },

      {
        type: "paragraph",
        text: "Тепер додамо зображенню float зі значенням left.",
      },

      {
        type: "code",
        language: "css",
        code: `img {
  float: left;
}`,
      },

      {
        type: "example",
        title: "Що відбувається",
        text: "Висота батьківського div зникає. Нижня межа контейнера стає одразу під верхньою, а картинка виходить за межі батька.",
      },

      {
        type: "heading",
        text: "Чому це відбувається",
      },

      {
        type: "paragraph",
        text: "Елементи з float вилучаються з нормального потоку документа, тому батьківський елемент більше не враховує їхню висоту.",
      },

      {
        type: "list",
        items: [
          "Звичайний елемент збільшує висоту батька.",
          "Елемент із float не впливає на висоту батьківського контейнера.",
          "Батьківський блок може стати порожнім з точки зору висоти.",
        ],
      },

      {
        type: "heading",
        text: "Картинка з float: right",
      },

      {
        type: "paragraph",
        text: "Якщо замість left використати right, поведінка батьківського елемента залишиться такою ж.",
      },

      {
        type: "code",
        language: "css",
        code: `img {
  float: right;
}`,
      },

      {
        type: "example",
        title: "Результат",
        text: "Картинка переміститься вправо, але батьківський div все одно не врахує її висоту.",
      },

      {
        type: "heading",
        text: "Як виправити проблему",
      },

      {
        type: "paragraph",
        text: "Щоб батьківський блок знову враховував висоту float-елементів, використовують спеціальні методи очищення float.",
      },

      {
        type: "list",
        items: [
          "clear: both — очищення обтікання.",
          "Створення псевдоелемента ::after.",
          "Використання overflow: hidden або overflow: auto.",
          "Сучасний спосіб — Flexbox або Grid.",
        ],
      },

      {
        type: "note",
        text: "Ця проблема називається 'collapsing parent' або 'згортання батьківського контейнера' через float.",
      },

      {
        type: "heading",
        text: "Практичне завдання",
      },

      {
        type: "task",
        text: [
          "№1. Створіть div із зображенням всередині.",
          "№2. Додайте div червону межу.",
          "№3. Перевірте результат без float.",
          "№4. Додайте img { float: left; }.",
          "№5. Порівняйте висоту батьківського елемента.",
          "№6. Замініть left на right.",
        ],
      },

      {
        type: "hint",
        text: "float виводить елемент із нормального потоку, тому батьківський блок перестає бачити його висоту.",
      },
    ],
  },
  {
    id: "float-parent-height-css",
    title: "Висота батьківського елемента з float в CSS",
    description:
      "Розбираємо, як задати висоту батьківському елементу, коли всередині знаходяться плаваючі елементи float.",
    content: [
      {
        type: "heading",
        text: "Висота батьківського елемента з float в CSS",
      },
      {
        type: "paragraph",
        text: "Плаваючі елементи з властивістю float не збільшують висоту свого батьківського контейнера.",
      },
      {
        type: "paragraph",
        text: "Але ми можемо примусово задати висоту батьківському елементу за допомогою властивості height.",
      },

      {
        type: "example",
        title: "Задаємо висоту батьківському елементу",
        text: "Створимо блок із зображенням всередині та задамо йому фіксовану висоту.",
      },

      {
        type: "code",
        language: "html",
        code: `<div>
  <img src="img.png" alt="">
</div>`,
      },

      {
        type: "code",
        language: "css",
        code: `div {
  height: 100px;
  border: 1px solid red;
}

img {
  float: right;
}`,
      },

      {
        type: "example",
        title: "Результат виконання коду",
        text: "Батьківський div матиме висоту 100px, навіть якщо всередині знаходиться елемент із float.",
      },

      {
        type: "paragraph",
        text: "У цьому випадку висота контейнера вже не залежить від висоти картинки, оскільки ми задали її вручну.",
      },

      {
        type: "note",
        text: "Використання height для батька з float підходить тільки тоді, коли відома точна висота блоку. Якщо контент може змінюватися, краще використовувати інші способи очищення float.",
      },

      {
        type: "heading",
        text: "Проблема фіксованої висоти",
      },

      {
        type: "paragraph",
        text: "Якщо зображення або інший контент стане більшим за задану висоту, він може вийти за межі батьківського елемента.",
      },

      {
        type: "code",
        language: "css",
        code: `div {
  height: 50px;
  border: 1px solid red;
}

img {
  float: right;
  height: 100px;
}`,
      },

      {
        type: "example",
        title: "Що станеться",
        text: "Картинка буде більшою за контейнер і вийде за його межі.",
      },

      {
        type: "list",
        items: [
          "float-елементи не впливають на висоту батька.",
          "height дозволяє вручну задати висоту контейнера.",
          "Фіксована висота може створити проблеми з адаптивністю.",
          "У сучасній верстці частіше використовують flex або grid.",
        ],
      },

      {
        type: "heading",
        text: "Практичні завдання",
      },

      {
        type: "task",
        text: [
          "№1. Створіть div із зображенням всередині.",
          "№2. Додайте зображенню float: right.",
          "№3. Додайте батьківському div height: 100px.",
          "№4. Змініть висоту картинки та подивіться результат.",
        ],
      },

      {
        type: "hint",
        text: "height змушує контейнер мати заданий розмір, але не змушує його автоматично рахувати висоту float-елементів.",
      },
    ],
  },
  {
    id: "float-parent-text-css",
    title: "Текст у батьківському елементі з float в CSS",
    description:
      "Розбираємо, як текст у батьківському контейнері впливає на висоту блоку з плаваючими елементами float.",
    content: [
      {
        type: "heading",
        text: "Текст у батьківському елементі з float в CSS",
      },

      {
        type: "paragraph",
        text: "Якщо у батьківського елемента немає заданої висоти, його розмір буде залежати від звичайного контенту всередині.",
      },

      {
        type: "paragraph",
        text: "Але елементи з властивістю float не враховуються при розрахунку висоти батьківського контейнера.",
      },

      {
        type: "example",
        title: "Текст перед плаваючим елементом",
        text: "Створимо блок із текстом та зображенням, якому задано float: right.",
      },

      {
        type: "code",
        language: "html",
        code: `<div>
  text
  <img src="img.png" alt="">
</div>`,
      },

      {
        type: "code",
        language: "css",
        code: `div {
  border: 1px solid red;
}

img {
  float: right;
}`,
      },

      {
        type: "example",
        title: "Результат",
        text: "Висота div буде дорівнювати висоті тексту. Зображення при цьому може вийти за межі батьківського елемента.",
      },

      {
        type: "example",
        title: "Текст після картинки",
        text: "Якщо поміняти місцями текст і картинку, результат залишиться таким самим.",
      },

      {
        type: "code",
        language: "html",
        code: `<div>
  <img src="img.png" alt="">
  text
</div>`,
      },

      {
        type: "example",
        title: "Float зліва",
        text: "Зміна float: right на float: left не змінює проблему. Плаваючий елемент все одно не збільшує висоту батька.",
      },

      {
        type: "code",
        language: "css",
        code: `img {
  float: left;
}`,
      },

      {
        type: "example",
        title: "Налізання на сусідній блок",
        text: "Якщо після контейнера додати ще один div, картинка може накластися на нього, оскільки перший блок не враховує висоту float-елемента.",
      },

      {
        type: "code",
        language: "html",
        code: `<div>
  <img src="img.png" alt="">
  text
</div>

<div>
  text
</div>`,
      },

      {
        type: "paragraph",
        text: "Якщо ж тексту всередині першого блоку достатньо багато, його висота стане більшою за висоту картинки, і проблема зникне.",
      },

      {
        type: "code",
        language: "css",
        code: `div {
  text-align: justify;
  border: 1px solid red;
}

img {
  float: left;
}`,
      },

      {
        type: "note",
        text: "Не варто розраховувати на кількість тексту для правильного відображення float. Якщо контент зміниться, плаваючі елементи можуть почати накладатися на сусідні блоки.",
      },

      {
        type: "list",
        items: [
          "float-елементи не збільшують висоту батьківського блока.",
          "Висота контейнера залежить тільки від звичайного потоку документа.",
          "Мала кількість тексту може призвести до накладання елементів.",
          "Для сучасної верстки частіше використовують flex або grid.",
        ],
      },

      {
        type: "task",
        text: [
          "№1. Створіть div із текстом та зображенням.",
          "№2. Додайте картинці float: left.",
          "№3. Додайте після блоку ще один div.",
          "№4. Перевірте, коли зображення починає накладатися на сусідній блок.",
        ],
      },

      {
        type: "hint",
        text: "Проблема виникає тому, що float-властивість прибирає елемент із нормального розрахунку висоти батьківського контейнера.",
      },
    ],
  },
  {
    id: "float-overflow-css",
    title: "Обтікання елементів з float в CSS",
    description:
      "Розбираємо проблему накладання блоків при використанні float та як працює обтікання елементів.",
    content: [
      {
        type: "heading",
        text: "Обтікання елементів з float в CSS",
      },

      {
        type: "paragraph",
        text: "Коли елементу задається властивість float, він перестає враховуватися при розрахунку висоти батьківського блока.",
      },

      {
        type: "paragraph",
        text: "Через це плаваючий елемент може накладатися на сусідні блоки, якщо батьківський контейнер не має достатньої висоти.",
      },

      {
        type: "example",
        title: "Два блоки з float",
        text: "Створимо два div з однаковим класом. У першому розмістимо картинку з float: left.",
      },

      {
        type: "code",
        language: "html",
        code: `<div class="parent">
  <img src="img.png" alt="">
  text
</div>

<div class="parent">
  text
</div>`,
      },

      {
        type: "code",
        language: "css",
        code: `.parent {
  border: 1px solid red;
}

.parent img {
  float: left;
}`,
      },

      {
        type: "example",
        title: "Результат виконання коду",
        text: "Картинка може вийти за межі першого div і накластися на другий блок.",
      },

      {
        type: "paragraph",
        text: "Причина полягає в тому, що перший div не враховує висоту зображення з float.",
      },

      {
        type: "heading",
        text: "Чому виникає проблема",
      },

      {
        type: "paragraph",
        text: "Звичайні елементи займають місце в потоці документа, а float-елементи ніби переміщуються вбік і дозволяють іншому контенту обтікати їх.",
      },

      {
        type: "paragraph",
        text: "Якщо батьківський блок має тільки float-елементи всередині, його висота може стати рівною нулю.",
      },

      {
        type: "note",
        text: "Проблема з float часто зустрічається у старих макетах. Для сучасної верстки зазвичай використовують flexbox або CSS Grid.",
      },

      {
        type: "list",
        items: [
          "float-елементи можуть випадати з розрахунку висоти батька.",
          "Сусідні блоки можуть накладатися на плаваючі елементи.",
          "Проблема залежить від кількості контенту всередині блока.",
          "Для керування поведінкою float використовують очищення float.",
        ],
      },

      {
        type: "task",
        text: [
          "№1. Створіть два div з однаковим класом.",
          "№2. Додайте в перший div зображення.",
          "№3. Встановіть для зображення float: left.",
          "№4. Перевірте, як картинка впливає на другий блок.",
        ],
      },

      {
        type: "hint",
        text: "Якщо float-елемент накладається на сусідні блоки, перевірте висоту батьківського контейнера та способи очищення float.",
      },
    ],
  },
  {
    id: "float-clear-css",
    title: "Відміна обтікання за допомогою clear в CSS",
    description:
      "Вивчаємо властивість clear, яка дозволяє скасувати обтікання float та уникнути накладання елементів.",
    content: [
      {
        type: "heading",
        text: "Відміна обтікання за допомогою clear в CSS",
      },

      {
        type: "paragraph",
        text: "Під час використання float може виникнути проблема: плаваючий елемент виходить за межі батьківського блока і накладається на наступні елементи.",
      },

      {
        type: "paragraph",
        text: "Для вирішення цієї проблеми використовується спеціальна властивість clear.",
      },

      {
        type: "heading",
        text: "Властивість clear",
      },

      {
        type: "paragraph",
        text: "Властивість clear забороняє елементу обтікати плаваючі елементи.",
      },

      {
        type: "list",
        items: [
          "clear: left — скасовує обтікання зліва.",
          "clear: right — скасовує обтікання справа.",
          "clear: both — скасовує обтікання з обох сторін.",
        ],
      },

      {
        type: "note",
        text: "Найчастіше використовується значення clear: both, оскільки воно прибирає обтікання незалежно від напрямку float.",
      },

      {
        type: "example",
        title: "Проблема без clear",
        text: "Створимо два блоки. У першому буде картинка з float: left.",
      },

      {
        type: "code",
        language: "html",
        code: `<div class="parent">
  <img src="img.png" alt="">
  text
</div>

<div class="parent">
  text
</div>`,
      },

      {
        type: "code",
        language: "css",
        code: `.parent {
  border: 1px solid red;
}

.parent img {
  float: left;
}`,
      },

      {
        type: "example",
        title: "Результат",
        text: "Картинка може накластися на другий блок, тому що другий блок не враховує висоту float-елемента.",
      },

      {
        type: "heading",
        text: "Використання clear: both",
      },

      {
        type: "paragraph",
        text: "Властивість clear потрібно задавати тому елементу, на який не повинні впливати плаваючі елементи.",
      },

      {
        type: "paragraph",
        text: "У нашому випадку clear додається другому div.",
      },

      {
        type: "code",
        language: "html",
        code: `<div class="parent">
  <img src="img.png" alt="">
  text
</div>

<div class="parent clearfix">
  text
</div>`,
      },

      {
        type: "code",
        language: "css",
        code: `.parent {
  border: 1px solid red;
}

.parent img {
  float: left;
}

.clearfix {
  clear: both;
}`,
      },

      {
        type: "example",
        title: "Результат виконання коду",
        text: "Другий блок більше не піднімається під картинку. Обтікання скасоване.",
      },

      {
        type: "note",
        text: "Назва clearfix є загальноприйнятою. У проєктах часто використовують саме цей клас для очищення float.",
      },

      {
        type: "list",
        items: [
          "clear прибирає вплив float на елемент.",
          "clear потрібно ставити після плаваючих елементів.",
          "clear: both використовується найчастіше.",
          "Клас clearfix — стандартна назва для очищення обтікання.",
        ],
      },

      {
        type: "task",
        text: [
          "№1. Створіть два блоки parent.",
          "№2. Додайте в перший блок картинку з float: left.",
          "№3. Перевірте, як картинка накладається на другий блок.",
          "№4. Додайте другому блоку клас clearfix.",
          "№5. Задайте класу clearfix властивість clear: both.",
        ],
      },

      {
        type: "hint",
        text: "Якщо float-елементи накладаються на наступні блоки, додайте clear: both елементу, який повинен починатися після них.",
      },

      {
        type: "answer",
        text: `.clearfix {
  clear: both;
}`,
      },
    ],
  },
  {
    id: "float-separate-clearfix-css",
    title: "Окремий div з clearfix в CSS",
    description:
      "Розглядаємо використання окремого блоку clearfix для скасування обтікання float.",
    content: [
      {
        type: "heading",
        text: "Окремий div з clearfix в CSS",
      },

      {
        type: "paragraph",
        text: "У попередньому уроці ми додавали клас clearfix безпосередньо елементу, який повинен був очиститися від впливу float.",
      },

      {
        type: "paragraph",
        text: "Але на практиці частіше використовують окремий порожній div з класом clearfix.",
      },

      {
        type: "paragraph",
        text: "Такий блок ставлять між контейнером з float-елементами та наступним блоком.",
      },

      {
        type: "example",
        title: "Використання окремого clearfix",
        text: "Створимо перший блок з картинкою, яка має float: left. Після нього додамо окремий div для очищення обтікання.",
      },

      {
        type: "code",
        language: "html",
        code: `<div class="parent">
  <img src="img.png" alt="">
  text
</div>

<div class="clearfix"></div>

<div class="parent">
  text
</div>`,
      },

      {
        type: "code",
        language: "css",
        code: `.parent {
  border: 1px solid red;
}

.parent img {
  float: left;
}

.clearfix {
  clear: both;
}`,
      },

      {
        type: "example",
        title: "Як працює clearfix",
        text: "Порожній div з clear: both зупиняє обтікання і змушує наступний блок починатися після плаваючих елементів.",
      },

      {
        type: "note",
        text: "Окремий div з класом clearfix — це один зі старих, але поширених способів боротьби з float у CSS.",
      },

      {
        type: "heading",
        text: "Чому використовується окремий блок",
      },

      {
        type: "paragraph",
        text: "Іноді неможливо або незручно змінювати HTML-структуру існуючого елемента. У такому випадку додають окремий clearfix між блоками.",
      },

      {
        type: "list",
        items: [
          "clearfix ставиться після елемента з float.",
          "clear: both очищає обтікання з обох сторін.",
          "Після clearfix наступний блок починається нижче float-елементів.",
          "Такий спосіб часто зустрічається у старих проєктах.",
        ],
      },

      {
        type: "task",
        text: [
          "№1. Створіть два блоки parent.",
          "№2. Додайте в перший блок картинку з float: left.",
          "№3. Між блоками створіть порожній div.",
          "№4. Додайте йому клас clearfix.",
          "№5. Встановіть для clearfix властивість clear: both.",
        ],
      },

      {
        type: "hint",
        text: "Якщо наступний блок піднімається під float-елемент, вставте між ними div з clear: both.",
      },

      {
        type: "answer",
        text: `.clearfix {
  clear: both;
}`,
      },
    ],
  },
  {
    id: "float-clearfix-parent-height-css",
    title: "Кліарфікс і висота батьківського елемента в CSS",
    description:
      "Дізнаємося, як clearfix допомагає відновити висоту батьківського блоку з плаваючими елементами float.",
    content: [
      {
        type: "heading",
        text: "Кліарфікс і висота батьківського елемента в CSS",
      },

      {
        type: "paragraph",
        text: "Плаваючі елементи з властивістю float не збільшують висоту свого батьківського елемента.",
      },

      {
        type: "paragraph",
        text: "Через це може виникнути проблема: батьківський блок має тільки рамку, а картинка виходить за його межі.",
      },

      {
        type: "example",
        title: "Проблема з висотою батьківського блоку",
        text: "У батьківському div знаходиться тільки картинка з float: left.",
      },

      {
        type: "code",
        language: "html",
        code: `<div class="parent">
  <img src="img.png" alt="">
</div>`,
      },

      {
        type: "code",
        language: "css",
        code: `.parent {
  border: 1px solid red;
}

.parent img {
  float: left;
}`,
      },

      {
        type: "example",
        title: "Чому висота зникає",
        text: "Картинка випадає з нормального потоку документа, тому батьківський блок не враховує її висоту.",
      },

      {
        type: "paragraph",
        text: "Щоб виправити проблему, додають спеціальний порожній div з класом clearfix після плаваючого елемента.",
      },

      {
        type: "example",
        title: "Використання clearfix для відновлення висоти",
        text: "Кліарфікс не є плаваючим елементом і тому впливає на висоту батьківського блоку.",
      },

      {
        type: "code",
        language: "html",
        code: `<div class="parent">
  <img src="img.png" alt="">
  <div class="clearfix"></div>
</div>`,
      },

      {
        type: "code",
        language: "css",
        code: `.parent {
  border: 1px solid red;
}

.parent img {
  float: left;
}

.clearfix {
  clear: both;
}`,
      },

      {
        type: "note",
        text: "Div з класом clearfix невидимий на сторінці, але він змушує батьківський блок враховувати висоту float-елемента.",
      },

      {
        type: "list",
        items: [
          "float-елементи не впливають на висоту батьківського блоку.",
          "clear: both скасовує обтікання з обох сторін.",
          "clearfix створює невидимий елемент після float.",
          "Батьківський блок знову отримує правильну висоту.",
        ],
      },

      {
        type: "example",
        title: "Сучасний спосіб",
        text: "У сучасній верстці замість додаткового div часто використовують псевдоелемент ::after.",
      },

      {
        type: "code",
        language: "css",
        code: `.parent::after {
  content: "";
  display: block;
  clear: both;
}`,
      },

      {
        type: "task",
        text: [
          "№1. Створіть div з картинкою всередині.",
          "№2. Додайте картинці float: left.",
          "№3. Перевірте, як зміниться висота батьківського блоку.",
          "№4. Додайте clearfix після картинки.",
          "№5. Переконайтеся, що висота батьківського блоку відновилася.",
        ],
      },

      {
        type: "hint",
        text: "Якщо батьківський блок не враховує float-елементи, додайте clear: both після них.",
      },

      {
        type: "answer",
        text: `.clearfix {
  clear: both;
}`,
      },
    ],
  },
  {
    id: "float-blocks-css",
    title: "Властивість float для блоків у CSS",
    description:
      "Вивчаємо використання float не тільки для зображень, а й для звичайних блокових елементів.",
    content: [
      {
        type: "heading",
        text: "Властивість float для блоків у CSS",
      },

      {
        type: "paragraph",
        text: "Властивість float можна застосовувати не тільки до зображень, але й до будь-яких інших блокових елементів.",
      },

      {
        type: "paragraph",
        text: "Наприклад, блок можна притиснути до лівого або правого краю, а текст навколо нього буде обтікати цей блок.",
      },

      {
        type: "example",
        title: "Блок без float",
        text: "Створимо батьківський блок parent, всередині якого знаходиться блок child та текст.",
      },

      {
        type: "code",
        language: "html",
        code: `<div class="parent">
  <div class="child"></div>
  some long text
</div>`,
      },

      {
        type: "code",
        language: "css",
        code: `.parent {
  border: 1px solid red;
  text-align: justify;
}

.child {
  width: 200px;
  height: 100px;
  border: 1px solid green;
}`,
      },

      {
        type: "example",
        title: "Результат",
        text: "Без float блок займає звичайне місце в потоці документа, а текст розташовується під ним.",
      },

      {
        type: "heading",
        text: "Додаємо float до блоку",
      },

      {
        type: "paragraph",
        text: "Тепер додамо блоку child властивість float: left. Блок переміститься ліворуч, а текст почне його обтікати.",
      },

      {
        type: "code",
        language: "css",
        code: `.child {
  float: left;
  width: 200px;
  height: 100px;
  border: 1px solid green;
}`,
      },

      {
        type: "example",
        title: "Результат виконання коду",
        text: "Текст займає вільний простір праворуч від блоку та обтікає його.",
      },

      {
        type: "note",
        text: "Float працює з будь-якими елементами: div, img, section, article та іншими блоками.",
      },

      {
        type: "list",
        items: [
          "float: left притискає елемент до лівого краю.",
          "float: right притискає елемент до правого краю.",
          "Інший контент починає обтікати плаваючий елемент.",
          "Float виводить елемент зі звичайного потоку документа.",
        ],
      },

      {
        type: "task",
        text: [
          "№1. Створіть батьківський блок parent.",
          "№2. Додайте всередину блок child.",
          "№3. Задайте child ширину та висоту.",
          "№4. Додайте child властивість float: left.",
          "№5. Перевірте, як текст почне обтікати блок.",
        ],
      },

      {
        type: "hint",
        text: "Спробуйте змінити float: left на float: right і подивіться, як зміниться розташування елемента.",
      },

      {
        type: "answer",
        text: `.child {
  float: left;
}`,
      },
    ],
  },
  {
    id: "float-multiple-blocks-css",
    title: "Властивість float і декілька блоків у CSS",
    description:
      "Розглядаємо поведінку декількох блокових елементів з однаковим значенням float.",
    content: [
      {
        type: "heading",
        text: "Властивість float і декілька блоків у CSS",
      },

      {
        type: "paragraph",
        text: "Властивість float можна застосовувати одразу до декількох блоків. У такому випадку вони будуть розташовуватися поруч один з одним.",
      },

      {
        type: "paragraph",
        text: "Якщо кілька елементів мають float: left, вони шикуються в ряд зліва направо відповідно до порядку в HTML-коді.",
      },

      {
        type: "example",
        title: "Два блоки з float: left",
        text: "Створимо два дочірні блоки та додамо їм однакове правило float: left.",
      },

      {
        type: "code",
        language: "html",
        code: `<div class="parent">
  <div class="child">1</div>
  <div class="child">2</div>
  some long text
</div>`,
      },

      {
        type: "code",
        language: "css",
        code: `.parent {
  border: 1px solid red;
  text-align: justify;
}

.child {
  float: left;
  width: 200px;
  height: 100px;
  border: 1px solid green;
}`,
      },

      {
        type: "example",
        title: "Результат",
        text: "Перший блок розташовується ліворуч, другий — праворуч від нього. Порядок відповідає порядку елементів у HTML.",
      },

      {
        type: "heading",
        text: "Використання float: right",
      },

      {
        type: "paragraph",
        text: "Якщо змінити float: left на float: right, блоки будуть притискатися до правого краю контейнера.",
      },

      {
        type: "paragraph",
        text: "При цьому порядок блоків візуально зміниться: елемент, який знаходиться нижче в HTML, буде ближче до правого краю.",
      },

      {
        type: "code",
        language: "css",
        code: `.child {
  float: right;
  width: 200px;
  height: 100px;
  border: 1px solid green;
}`,
      },

      {
        type: "example",
        title: "Результат виконання коду",
        text: "Другий блок опиниться правіше першого, хоча в HTML вони залишилися в тому самому порядку.",
      },

      {
        type: "note",
        text: "При float: left елементи будуються зліва направо, а при float: right — справа наліво.",
      },

      {
        type: "list",
        items: [
          "Декілька блоків з float: left стають в один ряд.",
          "Порядок left відповідає порядку в HTML.",
          "float: right змінює напрямок розташування блоків.",
          "Якщо місця недостатньо, блоки можуть перейти на новий ряд.",
        ],
      },

      {
        type: "task",
        text: [
          "№1. Створіть контейнер parent.",
          "№2. Додайте два блоки child.",
          "№3. Задайте їм float: left.",
          "№4. Поміняйте значення на float: right.",
          "№5. Порівняйте різницю у розташуванні.",
        ],
      },

      {
        type: "hint",
        text: "Спробуйте змінювати тільки значення float і спостерігайте, як змінюється порядок блоків.",
      },

      {
        type: "answer",
        text: `.child {
  float: left;
}`,
      },
    ],
  },
  {
    id: "float-parent-no-text-css",
    title: "Властивість float і батьківський блок без тексту в CSS",
    description:
      "Вивчаємо проблему зникнення висоти батьківського елемента при використанні float та вирішення через clearfix.",
    content: [
      {
        type: "heading",
        text: "Властивість float і батьківський блок без тексту в CSS",
      },

      {
        type: "paragraph",
        text: "Якщо батьківський блок містить тільки дочірні елементи з float, він може втратити свою висоту.",
      },

      {
        type: "paragraph",
        text: "Це відбувається тому, що плаваючі елементи випадають зі звичайного потоку документа і батьківський елемент їх більше не враховує.",
      },

      {
        type: "example",
        title: "Блоки без float",
        text: "Спочатку створимо батьківський блок і два дочірні блоки без позиціонування.",
      },

      {
        type: "code",
        language: "html",
        code: `<div class="parent">
  <div class="child">1</div>
  <div class="child">2</div>
</div>`,
      },

      {
        type: "code",
        language: "css",
        code: `.parent {
  width: 500px;
  border: 1px solid red;
  text-align: justify;
}

.child {
  width: 200px;
  height: 100px;
  border: 1px solid green;
}`,
      },

      {
        type: "example",
        title: "Додаємо float",
        text: "Тепер зробимо дочірні блоки плаваючими за допомогою float: left.",
      },

      {
        type: "code",
        language: "css",
        code: `.child {
  float: left;
  width: 200px;
  height: 100px;
  border: 1px solid green;
}`,
      },

      {
        type: "example",
        title: "Проблема",
        text: "Блоки стають в один ряд, але висота батьківського елемента зникає. Дочірні елементи виходять за його нижню межу.",
      },

      {
        type: "paragraph",
        text: "Така поведінка вже знайома: float-елементи не впливають на висоту свого батьківського блоку.",
      },

      {
        type: "heading",
        text: "Вирішення за допомогою clearfix",
      },

      {
        type: "paragraph",
        text: "Щоб повернути батьківському елементу правильну висоту, додаємо після float-елементів порожній блок з clear: both.",
      },

      {
        type: "code",
        language: "html",
        code: `<div class="parent">
  <div class="child">1</div>
  <div class="child">2</div>
  <div class="clearfix"></div>
</div>`,
      },

      {
        type: "code",
        language: "css",
        code: `.parent {
  width: 500px;
  border: 1px solid red;
  text-align: justify;
}

.child {
  float: left;
  width: 200px;
  height: 100px;
  border: 1px solid green;
}

.clearfix {
  clear: both;
}`,
      },

      {
        type: "note",
        text: "clearfix змушує батьківський блок врахувати висоту плаваючих елементів.",
      },

      {
        type: "list",
        items: [
          "float виводить елемент зі звичайного потоку.",
          "Батьківський блок не бачить висоту float-елементів.",
          "Через це висота контейнера може стати нульовою.",
          "clear: both після float відновлює висоту батька.",
        ],
      },

      {
        type: "task",
        text: [
          "№1. Створіть контейнер parent.",
          "№2. Додайте два блоки child.",
          "№3. Додайте їм float: left.",
          "№4. Перевірте проблему з висотою батьківського блоку.",
          "№5. Додайте clearfix та виправте помилку.",
        ],
      },

      {
        type: "hint",
        text: "Якщо контейнер не враховує float-елементи, додайте після них елемент з clear: both.",
      },

      {
        type: "answer",
        text: `.clearfix {
  clear: both;
}`,
      },
    ],
  },
];
