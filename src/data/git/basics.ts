import { Lesson } from "../types";

export const basics: Lesson[] = [
  {
    id: "test-project",
    title: "Тестовий проєкт",
    description: "Створення тестового проєкту для вивчення основ роботи з Git.",
    content: [
      {
        type: "heading",
        text: "Тестовий проєкт для Git",
      },

      {
        type: "paragraph",
        text: "Перед початком роботи з Git потрібно створити невеликий тестовий проєкт. Саме на ньому ми будемо вивчати всі основні команди Git.",
      },

      {
        type: "paragraph",
        text: "Створіть нову папку для проєкту та додайте до неї два порожні файли:",
      },

      {
        type: "code",
        language: "text",
        code: `
        index.html
        styles.css`,
      },

      {
        type: "paragraph",
        text: "Поки що файли можуть залишатися порожніми. Їхній вміст ми будемо змінювати в наступних уроках.",
      },

      {
        type: "note",
        text: "Усі подальші приклади виконуватимуться саме в цьому тестовому проєкті. Не видаляйте його до завершення навчання.",
      },

      {
        type: "task",
        text: [
          "Створіть нову папку для тестового проєкту.",
          "Створіть у ній порожній файл index.html.",
          "Створіть у ній порожній файл styles.css.",
          "Переконайтеся, що обидва файли знаходяться в одній папці.",
        ],
      },

      {
        type: "hint",
        text: "Створити файли можна через Провідник, VS Code або за допомогою термінала. Головне, щоб файли index.html і styles.css знаходилися в одній папці проєкту.",
      },

      {
        type: "answer",
        text: `Відповідь:

Структура тестового проєкту повинна виглядати так:

project/
├── index.html
└── styles.css

Після цього можна переходити до створення Git-репозиторію.`,
      },
    ],
  },
  {
    id: "repository",
    title: "Створення репозиторію",
    description: "Ініціалізація Git-репозиторію та створення папки .git.",
    content: [
      {
        type: "heading",
        text: "Створення Git-репозиторію",
      },

      {
        type: "paragraph",
        text: "Щоб Git почав відстежувати зміни у проєкті, потрібно створити Git-репозиторій. Саме в ньому Git буде зберігати історію змін, коміти та службову інформацію.",
      },

      {
        type: "paragraph",
        text: "Після ініціалізації у папці проєкту автоматично створюється прихована папка .git. Вона містить усі дані, необхідні для роботи Git.",
      },

      {
        type: "paragraph",
        text: "Нехай у вашому тестовому проєкті вже є такі файли:",
      },

      {
        type: "code",
        language: "text",
        code: `
        index.html
        styles.css`,
      },

      {
        type: "paragraph",
        text: "Перейдіть у терміналі до папки проєкту та виконайте команду:",
      },

      {
        type: "code",
        language: "bash",
        code: "git init",
      },

      {
        type: "paragraph",
        text: "Після успішного виконання команди Git повідомить, що репозиторій створено.",
      },

      {
        type: "code",
        language: "text",
        code: `Initialized empty Git repository in C:/Projects/my-project/.git/`,
      },

      {
        type: "note",
        text: "Ніколи не видаляйте папку .git, якщо не хочете втратити всю історію комітів та налаштування репозиторію.",
      },

      {
        type: "task",
        text: [
          "Перейдіть у терміналі до папки вашого тестового проєкту.",
          "Ініціалізуйте Git-репозиторій командою git init.",
          "Переконайтеся, що команда виконалася без помилок.",
          "Перевірте, що у папці проєкту з'явилася прихована папка .git.",
        ],
      },

      {
        type: "hint",
        text: "Якщо папка .git не відображається, увімкніть показ прихованих файлів у файловому менеджері або скористайтеся командою dir /a (Windows) чи ls -a (Linux/macOS).",
      },

      {
        type: "answer",
        text: `Відповідь:

1. Перейдіть до папки проєкту:

cd шлях/до/проєкту

2. Створіть Git-репозиторій:

git init

3. Переконайтеся, що з'явилася прихована папка:

.git

Це означає, що Git-репозиторій успішно створений і готовий до роботи.`,
      },
    ],
  },
  {
    id: "tracking",
    title: "Відстеження файлів",
    description: "Як Git відстежує файли та як перевірити їхній поточний стан.",
    content: [
      {
        type: "heading",
        text: "Відстеження файлів у Git",
      },

      {
        type: "paragraph",
        text: "Після створення Git-репозиторію можна починати зберігати зміни. Проте Git не відстежує нові файли автоматично. Спочатку потрібно явно повідомити йому, які файли необхідно контролювати.",
      },

      {
        type: "paragraph",
        text: "У кожному проєкті можуть бути файли, які не потрібно додавати до репозиторію, наприклад кеш, тимчасові файли або службові дані програм.",
      },

      {
        type: "paragraph",
        text: "Саме тому кожен файл у Git проходить кілька станів.",
      },

      {
        type: "heading",
        text: "Життєвий цикл файлу",
      },

      {
        type: "diagram",
        text: `Створення файлу
       │
       ▼
Untracked (не відстежується)
       │
   git add
       │
       ▼
Staged (підготовлений)
       │
git commit -m "..."
       │
       ▼
Tracked (відстежується)
       │
Редагування файлу
       │
       ▼
Modified (змінений)
       │
   git add
       │
       ▼
Staged (підготовлений)
       │
git commit -m "..."
       │
       ▼
Tracked (оновлена версія)`,
      },

      {
        type: "paragraph",
        text: "Новий файл завжди має стан Untracked. Після виконання команди git add він переходить до стану Staged, а після створення коміту стає відстежуваним (Tracked). Якщо відредагувати такий файл, він переходить у стан Modified.",
      },

      {
        type: "heading",
        text: "Перевірка стану файлів",
      },

      {
        type: "paragraph",
        text: "Переглянути поточний стан усіх файлів можна командою:",
      },

      {
        type: "code",
        language: "bash",
        code: "git status",
      },

      {
        type: "paragraph",
        text: "Нехай у папці проєкту знаходяться такі файли:",
      },

      {
        type: "code",
        language: "text",
        code: `index.html
styles.css`,
      },

      {
        type: "paragraph",
        text: "Після створення репозиторію вони ще не відстежуються, тому Git покаже приблизно такий результат:",
      },

      {
        type: "code",
        language: "text",
        code: `On branch main

No commits yet

Untracked files:
  index.html
  styles.css

nothing added to commit but untracked files present`,
      },

      {
        type: "note",
        text: "Git ніколи не починає відстежувати нові файли автоматично. Для цього потрібно виконати команду git add.",
      },

      {
        type: "task",
        text: [
          "Виконайте команду git status у папці вашого проєкту.",
          "Перегляньте список невідстежуваних файлів.",
          "Створіть у проєкті ще один файл із будь-якою назвою.",
          "Повторно виконайте команду git status.",
          "Переконайтеся, що новий файл також з'явився у списку Untracked files.",
        ],
      },

      {
        type: "hint",
        text: "Після створення нового файлу Git автоматично покаже його у розділі Untracked files. Щоб побачити зміни, достатньо ще раз виконати git status.",
      },

      {
        type: "answer",
        text: `Відповідь:

1. Перевірте стан репозиторію:

git status

2. Створіть новий файл, наприклад:

script.js

3. Знову виконайте команду:

git status

Новий файл script.js з'явиться у списку Untracked files, оскільки Git ще не почав його відстежувати.`,
      },
    ],
  },
  {
    id: "track-file",
    title: "Початок відстеження файлу",
    description:
      "Додавання окремого файлу до області підготовки (Staging Area) за допомогою команди git add.",
    content: [
      {
        type: "heading",
        text: "Початок відстеження файлу",
      },

      {
        type: "paragraph",
        text: "Нові файли не відстежуються Git автоматично. Щоб Git почав контролювати зміни певного файлу, його потрібно додати за допомогою команди git add.",
      },

      {
        type: "paragraph",
        text: "Після команди git add файл переходить зі стану Untracked до стану Staged (підготовлений до коміту).",
      },

      {
        type: "code",
        language: "bash",
        code: "git add index.html",
      },

      {
        type: "paragraph",
        text: "Після цього перевірте стан репозиторію командою:",
      },

      {
        type: "code",
        language: "bash",
        code: "git status",
      },

      {
        type: "paragraph",
        text: "Тепер Git покаже, що файл підготовлений до першого коміту:",
      },

      {
        type: "code",
        language: "text",
        code: `Changes to be committed:
  new file: index.html`,
      },

      {
        type: "diagram",
        text: `index.html
      │
      ▼
Untracked
      │
git add index.html
      │
      ▼
Staged`,
      },

      {
        type: "note",
        text: "Команда git add ще не створює коміт. Вона лише додає файл до області підготовки (Staging Area). Сам коміт буде створений командою git commit.",
      },

      {
        type: "task",
        text: [
          "Додайте файл index.html до області підготовки командою git add index.html.",
          "Перевірте стан репозиторію командою git status.",
          "Переконайтеся, що файл відображається у розділі Changes to be committed.",
          "Повторіть ці самі дії для інших файлів вашого проєкту.",
        ],
      },

      {
        type: "hint",
        text: "Після виконання git add файл більше не буде знаходитись у розділі Untracked files. Він з'явиться у розділі Changes to be committed.",
      },

      {
        type: "answer",
        text: `Відповідь:

Додайте файл:

git add index.html

Перевірте результат:

git status

Приблизний результат:

Changes to be committed:
  new file: index.html`,
      },
    ],
  },
  {
    id: "track-folder",
    title: "Початок відстеження папки",
    description:
      "Додавання всіх файлів із папки до області підготовки за допомогою команди git add .",
    content: [
      {
        type: "heading",
        text: "Початок відстеження папки",
      },

      {
        type: "paragraph",
        text: "Якщо у папці знаходиться багато файлів, додавати кожен окремо командою git add незручно. У такому випадку можна одразу додати всі файли, які знаходяться в певній папці.",
      },

      {
        type: "paragraph",
        text: "Нехай структура проєкту має такий вигляд:",
      },

      {
        type: "code",
        language: "text",
        code: `index.html
styles.css

script/
└── index.js`,
      },

      {
        type: "paragraph",
        text: "Щоб додати всі файли з папки script, виконайте команду:",
      },

      {
        type: "code",
        language: "bash",
        code: "git add script",
      },

      {
        type: "paragraph",
        text: "Після цього всі файли, які знаходилися в папці script на момент виконання команди, перейдуть до області підготовки (Staged).",
      },

      {
        type: "diagram",
        text: `script/
└── index.js
      │
      ▼
git add script
      │
      ▼
index.js → Staged`,
      },

      {
        type: "paragraph",
        text: "Якщо пізніше створити в цій папці новий файл, Git автоматично не почне його відстежувати. Новий файл знову матиме стан Untracked.",
      },

      {
        type: "note",
        text: "Команда git add script додає лише ті файли, які існують у папці на момент її виконання. Нові файли потрібно додавати окремо або повторно виконувати git add script.",
      },

      {
        type: "task",
        text: [
          "Створіть у проєкті папку script із будь-яким файлом.",
          "Додайте всі файли цієї папки командою git add script.",
          "Перевірте результат командою git status.",
          "Створіть у папці script новий файл.",
          "Ще раз виконайте git status та переконайтеся, що новий файл має стан Untracked.",
        ],
      },

      {
        type: "hint",
        text: "Після створення нового файлу повторно виконайте git status. Якщо файл не був доданий командою git add, він з'явиться у розділі Untracked files.",
      },

      {
        type: "answer",
        text: `Відповідь:

Додайте всі файли папки:

git add script

Перевірте стан:

git status

Створіть новий файл, наприклад:

script/app.js

Знову перевірте стан:

git status

Файл app.js буде відображатися у списку Untracked files, поки ви не виконаєте:

git add script

або

git add script/app.js`,
      },
    ],
  },
  {
    id: "track-project",
    title: "Початок відстеження проєкту",
    description:
      "Додавання всіх файлів проєкту до області підготовки за допомогою команди git add .",
    content: [
      {
        type: "heading",
        text: "Початок відстеження проєкту",
      },

      {
        type: "paragraph",
        text: "Якщо потрібно додати всі файли проєкту одразу, не потрібно виконувати git add для кожного файлу або папки окремо. Для цього використовується команда git add .",
      },

      {
        type: "code",
        language: "bash",
        code: "git add .",
      },

      {
        type: "paragraph",
        text: "Крапка (.) означає поточну папку. Git перегляне її вміст та додасть усі нові або змінені файли до області підготовки (Staged).",
      },

      {
        type: "diagram",
        text: `Проєкт
│
├── index.html
├── styles.css
├── script/
│   └── app.js
└── images/
    └── logo.png

        │
        ▼
     git add .
        │
        ▼
Усі файли → Staged`,
      },

      {
        type: "note",
        text: "Команда git add . є найпоширенішим способом підготувати всі зміни до коміту. Проте вона не створює коміт — лише додає файли до області підготовки.",
      },

      {
        type: "task",
        text: [
          "Виконайте команду git add . у папці вашого проєкту.",
          "Перевірте стан репозиторію командою git status.",
          "Переконайтеся, що всі нові та змінені файли знаходяться у розділі Changes to be committed.",
        ],
      },

      {
        type: "hint",
        text: "Після виконання git add . скористайтеся командою git status, щоб переконатися, що всі файли були додані до області підготовки.",
      },

      {
        type: "answer",
        text: `Відповідь:

Додайте всі файли проєкту:

git add .

Перевірте результат:

git status

Усі додані файли будуть відображатися у розділі:

Changes to be committed`,
      },
    ],
  },
  {
    id: "stage-changes",
    title: "Підготовка файлів до коміту",
    description:
      "Як працює команда git add після зміни файлів та чому її потрібно виконувати повторно.",
    content: [
      {
        type: "heading",
        text: "Підготовка файлів до коміту",
      },

      {
        type: "paragraph",
        text: "Команда git add використовується не лише для початку відстеження файлів. Вона також додає поточний стан файлу до області підготовки (Staging Area).",
      },

      {
        type: "paragraph",
        text: "Якщо після виконання git add ви знову зміните файл, Git не оновить його автоматично. Щоб нові зміни потрапили до наступного коміту, потрібно ще раз виконати git add.",
      },

      {
        type: "heading",
        text: "Як змінюється стан файлу",
      },

      {
        type: "diagram",
        text: `Створили файл
      │
      ▼
Untracked
      │
git add
      │
      ▼
Staged
      │
Редагування
      │
      ▼
Modified
      │
git add
      │
      ▼
Staged
      │
Редагування
      │
      ▼
Modified
      │
git add
      │
      ▼
Staged`,
      },

      {
        type: "paragraph",
        text: "Після кожного редагування файл переходить у стан Modified. Якщо ви хочете включити ці зміни до наступного коміту, необхідно повторно виконати git add.",
      },

      {
        type: "heading",
        text: "Приклад",
      },

      {
        type: "paragraph",
        text: "Створіть новий файл та додайте його до області підготовки:",
      },

      {
        type: "code",
        language: "bash",
        code: `git add index.html
git status`,
      },

      {
        type: "code",
        language: "text",
        code: `Changes to be committed:
  new file: index.html`,
      },

      {
        type: "paragraph",
        text: "Тепер відредагуйте файл та знову перевірте його стан:",
      },

      {
        type: "code",
        language: "bash",
        code: "git status",
      },

      {
        type: "code",
        language: "text",
        code: `Changes to be committed:
  new file: index.html

Changes not staged for commit:
  modified: index.html`,
      },

      {
        type: "paragraph",
        text: "Git показує дві версії одного файлу: одну вже підготовлену до коміту, а іншу — зі змінами, які ще не були додані до області підготовки.",
      },

      {
        type: "paragraph",
        text: "Щоб оновити підготовлену версію файлу, ще раз виконайте:",
      },

      {
        type: "code",
        language: "bash",
        code: `git add index.html
git status`,
      },

      {
        type: "code",
        language: "text",
        code: `Changes to be committed:
  modified: index.html`,
      },

      {
        type: "note",
        text: "Запам'ятайте просте правило: після кожної зміни файлу, яку потрібно включити до наступного коміту, виконуйте git add.",
      },

      {
        type: "task",
        text: [
          "Створіть новий файл та виконайте git add для нього.",
          "Перевірте стан репозиторію командою git status.",
          "Відредагуйте файл та знову виконайте git status.",
          "Повторно виконайте git add для цього файлу.",
          "Ще раз перевірте стан репозиторію та переконайтеся, що файл знаходиться лише у розділі Changes to be committed.",
          "Повторіть редагування файлу ще раз і знову виконайте git add.",
        ],
      },

      {
        type: "hint",
        text: "Після кожного редагування використовуйте git status. Це допоможе побачити, коли файл знаходиться у стані Modified, а коли вже підготовлений до коміту.",
      },

      {
        type: "answer",
        text: `Відповідь:

git add index.html

git status

(відредагуйте файл)

git status

git add index.html

git status

Після повторного виконання git add файл знову буде знаходитися лише у розділі Changes to be committed.`,
      },
    ],
  },
  {
    id: "commit",
    title: "Створення коміту",
    description:
      "Збереження поточного стану проєкту за допомогою команди git commit.",
    content: [
      {
        type: "heading",
        text: "Створення коміту",
      },

      {
        type: "paragraph",
        text: "Після того як усі необхідні файли були додані до області підготовки (Staging Area), можна створити коміт. Коміт зберігає поточний стан проєкту та дозволяє в майбутньому повернутися до цієї версії.",
      },

      {
        type: "paragraph",
        text: "Кожен коміт повинен мати короткий і зрозумілий опис змін. Для цього використовується параметр -m.",
      },

      {
        type: "code",
        language: "bash",
        code: `git commit -m "Перший коміт"`,
      },

      {
        type: "paragraph",
        text: "Після успішного створення коміту Git повідомить, скільки файлів було додано та які зміни були збережені.",
      },

      {
        type: "code",
        language: "text",
        code: `
[main (root-commit) 3a4f6d2]
Перший коміт

2 files changed
create mode 100644 index.html
create mode 100644 styles.css`,
      },

      {
        type: "diagram",
        text: `Файли
   │
git add
   │
   ▼
Staged
   │
git commit -m "..."
   │
   ▼
Коміт створено`,
      },

      {
        type: "paragraph",
        text: "Після створення коміту всі підготовлені зміни зберігаються в історії Git, а робоча директорія стає чистою.",
      },

      {
        type: "code",
        language: "bash",
        code: "git status",
      },

      {
        type: "code",
        language: "text",
        code: `On branch main

nothing to commit, working tree clean`,
      },

      {
        type: "note",
        text: "Коміт містить лише ті зміни, які були додані командою git add. Якщо після цього ви ще раз відредагуєте файл, нові зміни потрібно знову додати командою git add.",
      },

      {
        type: "heading",
        text: "Довге повідомлення коміту",
      },

      {
        type: "paragraph",
        text: "Якщо потрібно написати детальний опис коміту, можна виконати команду без параметра -m.",
      },

      {
        type: "code",
        language: "bash",
        code: "git commit",
      },

      {
        type: "paragraph",
        text: "Git відкриє налаштований текстовий редактор, у якому можна ввести заголовок і детальний опис коміту.",
      },

      {
        type: "task",
        text: [
          "Створіть перший коміт командою git commit -m.",
          "Перевірте стан репозиторію командою git status.",
          "Відредагуйте один або декілька файлів.",
          "Перегляньте статус репозиторію.",
          "Підготуйте зміни командою git add.",
          "Створіть ще один коміт із новим повідомленням.",
          "Переконайтеся, що після коміту робоча директорія стала чистою.",
        ],
      },

      {
        type: "hint",
        text: "Після створення коміту виконайте git status. Якщо всі зміни були закомічені, Git виведе повідомлення: nothing to commit, working tree clean.",
      },

      {
        type: "answer",
        text: `Відповідь:

Створіть коміт:

git commit -m "Перший коміт"

Перевірте стан:

git status

Внесіть зміни у файл.

Підготуйте їх:

git add .

Створіть новий коміт:

git commit -m "Оновлено проєкт"

Перевірте результат:

git status`,
      },
    ],
  },
  {
    id: "tracked-file-states",
    title: "Стани відстежуваних файлів",
    description:
      "Основні стани файлів у Git та їх визначення за результатом команди git status.",
    content: [
      {
        type: "heading",
        text: "Стани відстежуваних файлів",
      },

      {
        type: "paragraph",
        text: "Після того як Git почав відстежувати файл, він може перебувати в одному з трьох основних станів: Modified, Staged або Committed.",
      },

      {
        type: "diagram",
        text: `Committed
    │
Редагування файлу
    │
    ▼
Modified
    │
 git add
    │
    ▼
Staged
    │
git commit
    │
    ▼
Committed`,
      },

      {
        type: "heading",
        text: "Modified",
      },

      {
        type: "paragraph",
        text: "Файл був змінений, але ці зміни ще не додані до області підготовки. Git знає про зміни, але вони ще не потраплять до наступного коміту.",
      },

      {
        type: "heading",
        text: "Staged",
      },

      {
        type: "paragraph",
        text: "Поточний стан файлу вже додано до області підготовки командою git add. Саме ця версія буде включена до наступного коміту.",
      },

      {
        type: "heading",
        text: "Committed",
      },

      {
        type: "paragraph",
        text: "Файл уже збережений у репозиторії. Якщо після коміту ви більше нічого не змінювали, робоча директорія буде чистою.",
      },

      {
        type: "note",
        text: "Команда git status дозволяє швидко визначити, у якому стані зараз знаходиться кожен файл.",
      },

      {
        type: "task",
        text: [
          "Визначте стан файлу, якщо команда git status показує:\n\nChanges to be committed:\n  new file: index.html",
          "Визначте стан файлу, якщо команда git status показує:\n\nChanges to be committed:\n  modified: index.html",
          "Визначте стан файлу, якщо команда git status показує:\n\nChanges not staged for commit:\n  modified: index.html",
          "Визначте стан файлів, якщо команда git status показує:\n\nnothing to commit, working tree clean",
        ],
      },

      {
        type: "hint",
        text: "Звертайте увагу не лише на статус файлу (new file або modified), а й на розділ, у якому він знаходиться: Changes to be committed або Changes not staged for commit.",
      },

      {
        type: "answer",
        text: `Відповідь:

1. Staged (новий файл підготовлений до коміту).

2. Staged (змінений файл підготовлений до коміту).

3. Modified (файл змінений, але ще не доданий командою git add).

4. Committed (усі зміни вже збережені у репозиторії, робоча директорія чиста).`,
      },
    ],
  },
];
