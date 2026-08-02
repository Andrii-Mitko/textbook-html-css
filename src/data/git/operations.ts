import type { Lesson } from "./git";

export const operations: Lesson[] = [
  {
    id: "advanced",
    title: "Просунуті операції в Git",
    description:
      "Робота з історією змін, скасуванням операцій, порівнянням версій та іншими можливостями Git.",
    content: [
      {
        type: "heading",
        value: "Просунуті операції в Git",
      },

      {
        type: "paragraph",
        value:
          "Після вивчення основ настав час перейти до більш просунутих можливостей Git.",
      },

      {
        type: "paragraph",
        value:
          "У цьому розділі ви навчитеся працювати зі станами файлів, переглядати історію змін, скасовувати зміни, порівнювати версії та використовувати інші корисні інструменти Git у повсякденній роботі.",
      },

      {
        type: "note",
        value:
          "Перед переходом до цього розділу переконайтеся, що ви вже розумієте основи Git: репозиторій, add, commit та статус файлів.",
      },
    ],
  },

  {
    id: "status-short",
    title: "Короткий статус репозиторію",
    description:
      "Перегляд короткої форми статусу файлів за допомогою git status -s.",
    content: [
      {
        type: "heading",
        value: "Коротка форма статусу Git",
      },

      {
        type: "paragraph",
        value:
          "Команда git status показує багато інформації про стан репозиторію. Для швидкого перегляду можна використовувати скорочену форму статусу.",
      },

      {
        type: "paragraph",
        value:
          "У короткому форматі Git показує спеціальні літери перед назвами файлів, які допомагають швидко визначити їхній стан.",
      },

      {
        type: "heading",
        value: "Команда короткого статусу",
      },

      {
        type: "code",
        language: "bash",
        value: "git status -s",
      },

      {
        type: "paragraph",
        value: "Також існує повний запис команди:",
      },

      {
        type: "code",
        language: "bash",
        value: "git status --short",
      },

      {
        type: "heading",
        value: "Позначення станів файлів",
      },

      {
        type: "table",
        value: [
          ["Позначення", "Стан", "Опис"],
          [" ", "unmodified", "Файл не має змін"],
          ["M", "modified", "Файл змінений"],
          ["T", "type changed", "Змінено тип файлу"],
          ["A", "added", "Новий файл доданий до індексу"],
          ["D", "deleted", "Файл видалений"],
          ["R", "renamed", "Файл перейменований"],
          ["C", "copied", "Файл скопійований"],
          ["U", "updated but unmerged", "Файл має конфлікт злиття"],
        ],
      },

      {
        type: "diagram",
        value: `Зміна файлу

      │
      ▼

Modified (M)

      │
    git add

      ▼

Staged (A)

      │
  git commit

      ▼

Committed`,
      },

      {
        type: "heading",
        value: "Приклади",
      },

      {
        type: "code",
        language: "text",
        value: `M text.txt
A index.html
D old.txt`,
      },

      {
        type: "paragraph",
        value: "Літера перед назвою файлу показує, що саме відбулося з файлом.",
      },

      {
        type: "note",
        value:
          "Команда git status -s зручна під час щоденної роботи, коли потрібно швидко перевірити зміни у великому проєкті.",
      },

      {
        type: "heading",
        value: "Завдання",
      },

      {
        type: "task",
        value: [
          "Виконайте команду git status -s у своєму репозиторії.",
          "Визначте стан файлу, якщо Git показує: M text.txt.",
          "Визначте стан файлу, якщо Git показує: A text.txt.",
          "Визначте стан файлу, якщо Git показує: D text.txt.",
          "Визначте стан файлу, якщо Git показує: R text.txt.",
          "Визначте стан файлу, якщо Git показує: C text.txt.",
          "Визначте стани файлів:\nA text1.txt\ntext2.txt\nD text3.txt\nM text4.txt",
        ],
      },

      {
        type: "hint",
        value:
          "Запам'ятайте основні скорочення: M — modified, A — added, D — deleted, R — renamed, C — copied.",
      },

      {
        type: "answer",
        value: `Відповідь:

1. Перевірити короткий статус:

git status -s


2. M text.txt

Файл змінений (modified).


3. A text.txt

Файл доданий (added) до області підготовки.


4. D text.txt

Файл видалений (deleted).


5. R text.txt

Файл перейменований (renamed).


6. C text.txt

Файл скопійований (copied).


7.

A text1.txt — новий файл доданий.

text2.txt — файл без змін (unmodified).

D text3.txt — файл видалений.

M text4.txt — файл змінений.`,
      },
    ],
  },
  {
    id: "gitignore",
    title: "Ігнорування файлів",
    description:
      "Робота з файлом .gitignore та налаштування файлів, які Git не повинен відстежувати.",
    content: [
      {
        type: "heading",
        value: "Ігнорування файлів у Git",
      },

      {
        type: "paragraph",
        value:
          "У реальних проєктах є файли, які не потрібно додавати до Git. Це можуть бути кеш, тимчасові файли, конфіденційні дані або службові файли програм.",
      },

      {
        type: "paragraph",
        value:
          "Щоб Git не відстежував такі файли, використовується спеціальний файл .gitignore.",
      },

      {
        type: "code",
        language: "text",
        value: ".gitignore",
      },

      {
        type: "paragraph",
        value:
          "Файл .gitignore створюється у корені проєкту. Кожен рядок у ньому містить правило для файлів або папок, які потрібно ігнорувати.",
      },

      {
        type: "heading",
        value: "Ігнорування папки",
      },

      {
        type: "paragraph",
        value:
          "Щоб Git ігнорував усі файли з папки cache, додайте її у .gitignore:",
      },

      {
        type: "code",
        language: "text",
        value: `cache/`,
      },

      {
        type: "diagram",
        value: `Проєкт

├── index.html
├── styles.css
├── cache/
│   ├── data.json
│   └── temp.txt
│
└── .gitignore


.gitignore

cache/


Результат:

cache/ → ігнорується
index.html → відстежується`,
      },

      {
        type: "heading",
        value: "Ігнорування декількох папок",
      },

      {
        type: "paragraph",
        value:
          "Щоб ігнорувати декілька папок, кожну папку потрібно записати з нового рядка:",
      },

      {
        type: "code",
        language: "text",
        value: `cache/
tmp/`,
      },

      {
        type: "heading",
        value: "Ігнорування окремого файлу",
      },

      {
        type: "paragraph",
        value:
          "Щоб не відстежувати конкретний файл, потрібно вказати його назву:",
      },

      {
        type: "code",
        language: "text",
        value: `err.txt`,
      },

      {
        type: "paragraph",
        value: "Також можна одночасно ігнорувати файл та папку:",
      },

      {
        type: "code",
        language: "text",
        value: `err.txt
tmp/`,
      },

      {
        type: "heading",
        value: "Корисний синтаксис .gitignore",
      },

      {
        type: "table",
        value: [
          ["Правило", "Що ігнорується", "Приклад"],
          ["/file.txt", "Файл тільки в корені", "/debug.log"],
          ["file.txt", "Файл у будь-якій папці", "debug.log"],
          ["folder/", "Тільки папка", "logs/"],
          ["*.log", "Усі файли з розширенням", "*.log"],
          ["!file.log", "Виключення з ігнорування", "!important.log"],
          ["?", "Один будь-який символ", "debug?.log"],
          ["[0-9]", "Діапазон символів", "debug[0-9].log"],
        ],
      },

      {
        type: "heading",
        value: "Перевірка ігнорування",
      },

      {
        type: "paragraph",
        value:
          "Після створення або зміни .gitignore перевірити стан файлів можна командою:",
      },

      {
        type: "code",
        language: "bash",
        value: "git status",
      },

      {
        type: "note",
        value:
          "Файл, який вже був доданий до Git, не перестане відстежуватися після додавання його у .gitignore. Спочатку потрібно видалити його з індексу командою git rm --cached.",
      },

      {
        type: "heading",
        value: "Завдання",
      },

      {
        type: "task",
        value: [
          "Створіть файл .gitignore у корені проєкту.",
          "Додайте правило, щоб ігнорувати папку cache.",
          "Додайте правило, щоб ігнорувати папки cache та tmp.",
          "Додайте правило для ігнорування файлу err.txt та папки tmp.",
          "Перевірте результат командою git status.",
        ],
      },

      {
        type: "hint",
        value:
          "У .gitignore кожне правило пишеться з нового рядка. Для папок зазвичай використовують символ / у кінці назви.",
      },

      {
        type: "answer",
        value: `Відповідь:

1. Ігнорування папки cache:

cache/


2. Ігнорування папок cache та tmp:

cache/
tmp/


3. Ігнорування файлу err.txt та папки tmp:

err.txt
tmp/


Перевірка:

git status`,
      },
    ],
  },
  {
    id: "diff",
    title: "Перегляд змін",
    description: "Перегляд змін у файлах за допомогою команди git diff.",
    content: [
      {
        type: "heading",
        value: "Перегляд змін файлів у Git",
      },

      {
        type: "paragraph",
        value:
          "Іноді потрібно побачити, які саме зміни були зроблені у файлі після останнього додавання до області підготовки (git add). Для цього використовується команда git diff.",
      },

      {
        type: "code",
        language: "bash",
        value: "git diff",
      },

      {
        type: "paragraph",
        value:
          "Команда git diff показує різницю між поточним станом файлів у робочій директорії та останньою підготовленою версією.",
      },

      {
        type: "heading",
        value: "Як працює git diff",
      },

      {
        type: "diagram",
        value: `Останній коміт
      │
      ▼
Staged
      │
      git add
      │
      ▼
Робоча директорія
      │
      ▼
Зміни файлу

git diff показує ці зміни`,
      },

      {
        type: "heading",
        value: "Приклад роботи",
      },

      {
        type: "paragraph",
        value: "Створіть файл text.txt та додайте в нього текст:",
      },

      {
        type: "code",
        language: "text",
        value: `Hello Git`,
      },

      {
        type: "paragraph",
        value: "Додайте файл до Git та створіть коміт:",
      },

      {
        type: "code",
        language: "bash",
        value: `git add text.txt
git commit -m "Add text file"`,
      },

      {
        type: "paragraph",
        value: "Тепер змініть файл:",
      },

      {
        type: "code",
        language: "text",
        value: `Hello Git
New line`,
      },

      {
        type: "paragraph",
        value: "Перевірте зміни:",
      },

      {
        type: "code",
        language: "bash",
        value: "git diff",
      },

      {
        type: "code",
        language: "text",
        value: `+New line`,
      },

      {
        type: "paragraph",
        value:
          "Символ + показує додані рядки, а символ - показує видалені рядки.",
      },

      {
        type: "heading",
        value: "Завдання",
      },

      {
        type: "task",
        value: [
          "Створіть новий файл text.txt.",
          "Додайте у файл будь-який текст.",
          "Додайте файл командою git add text.txt.",
          "Створіть коміт командою git commit -m.",
          "Змініть текст у файлі.",
          "Виконайте git diff.",
          "Перегляньте, які рядки були додані або видалені.",
        ],
      },

      {
        type: "hint",
        value:
          "Якщо git diff нічого не показує — перевірте, чи є незбережені зміни після останнього git add.",
      },

      {
        type: "answer",
        value: `Відповідь:

Створити файл:

text.txt


Додати файл:

git add text.txt


Створити коміт:

git commit -m "Add text file"


Змінити файл та перевірити:

git diff


Git покаже різницю між старою і новою версією файлу.`,
      },
    ],
  },
  {
    id: "skip-worktree",
    title: "Пропуск індексації змінених файлів",
    description:
      "Автоматичне додавання змінених відстежуваних файлів до коміту за допомогою git commit -a.",
    content: [
      {
        type: "heading",
        value: "Пропуск індексації змінених файлів у Git",
      },

      {
        type: "paragraph",
        value:
          "У Git є можливість однією командою виконати індексацію змінених файлів та створити коміт. Це дозволяє об'єднати кроки git add і git commit.",
      },

      {
        type: "paragraph",
        value:
          "Для цього до команди commit додається параметр -a, а окрему команду git add виконувати не потрібно.",
      },

      {
        type: "code",
        language: "bash",
        value: "git commit -a",
      },

      {
        type: "paragraph",
        value:
          "Після виконання цієї команди всі вже відстежувані файли, які були змінені, автоматично потраплять до коміту.",
      },

      {
        type: "diagram",
        value: `Зміна файлу

      │
      ▼

Modified

      │
      │ git commit -a
      ▼

Committed`,
      },

      {
        type: "note",
        value:
          "Команда git commit -a працює тільки з файлами, які Git вже відстежує. Нові файли (Untracked) потрібно спочатку додати через git add.",
      },

      {
        type: "heading",
        value: "Приклад",
      },

      {
        type: "code",
        language: "bash",
        value: `git commit -a -m "Оновлено файл"`,
      },

      {
        type: "paragraph",
        value:
          "У цьому випадку Git автоматично додасть зміни у відстежуваних файлах та створить новий коміт.",
      },

      {
        type: "heading",
        value: "Завдання",
      },

      {
        type: "task",
        value: [
          "Змініть файл, який вже відстежується Git.",
          "Виконайте команду git commit -a.",
          "Перевірте, що зміни були додані до нового коміту.",
        ],
      },

      {
        type: "hint",
        value:
          "Перед використанням git commit -a перевірте зміни командою git status, щоб випадково не закомітити зайві файли.",
      },

      {
        type: "answer",
        value: `Відповідь:

Змінити відстежуваний файл.

Виконати:

git commit -a -m "Оновлення файлу"

Перевірити результат:

git log`,
      },
    ],
  },
  {
    id: "remove-file",
    title: "Видалення файлів у Git",
    description:
      "Коректне видалення файлів з проєкту та індексу за допомогою команди git rm.",
    content: [
      {
        type: "heading",
        value: "Видалення файлів у Git",
      },

      {
        type: "paragraph",
        value:
          "Під час роботи з Git не рекомендується просто видаляти файли вручну з папки проєкту. Якщо зробити це через файловий менеджер, Git побачить файл як змінений, але ще не підготовлений до коміту.",
      },

      {
        type: "code",
        language: "text",
        value: "Changes not staged for commit:\n  deleted: text.txt",
      },

      {
        type: "paragraph",
        value:
          "Щоб правильно видалити файл з проєкту та одразу додати це видалення до області підготовки (Staging Area), використовується команда git rm.",
      },

      {
        type: "code",
        language: "bash",
        value: "git rm text.txt",
      },

      {
        type: "paragraph",
        value:
          "Після виконання команди Git видалить файл з робочої папки та підготує зміни до наступного коміту.",
      },

      {
        type: "code",
        language: "text",
        value: "deleted: text.txt",
      },

      {
        type: "diagram",
        value: `text.txt

      │
      │ git rm text.txt
      ▼

Файл видалено

      │
      ▼

Staged

      │
      │ git commit
      ▼

Committed`,
      },

      {
        type: "note",
        value:
          "Команда git rm виконує одразу дві дії: видаляє файл з робочої директорії та додає це видалення до індексу.",
      },

      {
        type: "heading",
        value: "Приклад",
      },

      {
        type: "code",
        language: "bash",
        value: `git rm old.txt
git commit -m "Видалено непотрібний файл"`,
      },

      {
        type: "heading",
        value: "Завдання",
      },

      {
        type: "task",
        value: [
          "Створіть файл у вашому Git-проєкті.",
          "Додайте його до репозиторію та створіть коміт.",
          "Видаліть файл командою git rm.",
          "Перевірте стан репозиторію командою git status.",
        ],
      },

      {
        type: "hint",
        value:
          "Після git rm команда git status покаже видалений файл у розділі Changes to be committed.",
      },

      {
        type: "answer",
        value: `Відповідь:

Видалити файл:

git rm text.txt

Перевірити стан:

git status

Створити коміт:

git commit -m "Видалено файл"`,
      },
    ],
  },
  {
    id: "rename-file",
    title: "Перейменування файлів у Git",
    description:
      "Правильне перейменування файлів у Git за допомогою команди git mv.",
    content: [
      {
        type: "heading",
        value: "Перейменування файлів у Git",
      },

      {
        type: "paragraph",
        value:
          "Для перейменування файлів у Git використовується команда git mv. Вона дозволяє змінити назву файлу та одразу повідомити Git про цю зміну.",
      },

      {
        type: "code",
        language: "bash",
        value: "git mv old.txt new.txt",
      },

      {
        type: "paragraph",
        value:
          "Команда git mv приймає два параметри: спочатку стару назву файлу, а потім нову.",
      },

      {
        type: "diagram",
        value: `old.txt

      │
      │ git mv old.txt new.txt
      ▼

new.txt

      │
      ▼

Renamed`,
      },

      {
        type: "paragraph",
        value:
          "Після виконання команди Git автоматично підготує перейменування файлу до наступного коміту.",
      },

      {
        type: "code",
        language: "text",
        value: `Changes to be committed:

  renamed: old.txt -> new.txt`,
      },

      {
        type: "heading",
        value: "Приклад",
      },

      {
        type: "code",
        language: "bash",
        value: `git mv index.html main.html
git status`,
      },

      {
        type: "paragraph",
        value:
          "Після перевірки статусу Git покаже, що файл був перейменований.",
      },

      {
        type: "note",
        value:
          "Не рекомендується просто перейменовувати файли через файловий менеджер. Git може не одразу визначити зміну як перейменування. Команда git mv робить це правильно.",
      },

      {
        type: "heading",
        value: "Завдання",
      },

      {
        type: "task",
        value: [
          "Виберіть будь-який файл у вашому Git-репозиторії.",
          "Перейменуйте його за допомогою команди git mv.",
          "Перевірте результат командою git status.",
          "Переконайтеся, що Git визначив зміну як renamed.",
        ],
      },

      {
        type: "hint",
        value:
          "Після виконання git mv перевірте статус. Git повинен показати renamed: старе_ім'я -> нове_ім'я.",
      },

      {
        type: "answer",
        value: `Відповідь:

Перейменування файлу:

git mv old.txt new.txt

Перевірка:

git status

Результат:

renamed: old.txt -> new.txt`,
      },
    ],
  },
  {
    id: "move-file",
    title: "Переміщення файлів у Git",
    description: "Переміщення файлів між папками за допомогою команди git mv.",
    content: [
      {
        type: "heading",
        value: "Переміщення файлів у Git",
      },

      {
        type: "paragraph",
        value:
          "У Git для переміщення файлів між папками використовується та сама команда git mv, яка також використовується для перейменування файлів.",
      },

      {
        type: "code",
        language: "bash",
        value: "git mv old/file.txt new/file.txt",
      },

      {
        type: "paragraph",
        value:
          "Перший параметр — поточний шлях до файлу, другий — нове місце розташування файлу.",
      },

      {
        type: "diagram",
        value: `old/
└── file.txt

      │
      │ git mv old/file.txt new/file.txt
      ▼

new/
└── file.txt`,
      },

      {
        type: "paragraph",
        value:
          "Після переміщення Git покаже цю операцію як перейменування файлу, оскільки для операційної системи переміщення та перейменування є однаковою зміною шляху до файлу.",
      },

      {
        type: "code",
        language: "text",
        value: `Changes to be committed:

  renamed: old/file.txt -> new/file.txt`,
      },

      {
        type: "heading",
        value: "Приклад",
      },

      {
        type: "code",
        language: "bash",
        value: `git mv images/logo.png assets/logo.png
git status`,
      },

      {
        type: "paragraph",
        value:
          "Після перевірки статусу Git покаже, що файл був переміщений шляхом renamed.",
      },

      {
        type: "note",
        value:
          "Не переміщуйте файли вручну через файловий менеджер, якщо хочете коректно відстежувати зміни в Git. Використовуйте git mv.",
      },

      {
        type: "heading",
        value: "Завдання",
      },

      {
        type: "task",
        value: [
          "Створіть у вашому репозиторії нову папку.",
          "Перемістіть будь-який файл у цю папку за допомогою git mv.",
          "Перевірте результат командою git status.",
          "Переконайтеся, що Git показує зміну як renamed.",
        ],
      },

      {
        type: "hint",
        value:
          "Git може показати переміщення як renamed: стара_папка/файл -> нова_папка/файл.",
      },

      {
        type: "answer",
        value: `Відповідь:

Переміщення файлу:

git mv old/file.txt new/file.txt

Перевірка:

git status

Результат:

renamed: old/file.txt -> new/file.txt`,
      },
    ],
  },

  {
    id: "history",
    title: "Перегляд історії комітів у Git",
    description:
      "Перегляд історії створених комітів за допомогою команди git log.",
    content: [
      {
        type: "heading",
        value: "Перегляд історії комітів у Git",
      },

      {
        type: "paragraph",
        value:
          "Під час роботи над проєктом часто потрібно переглянути попередні зміни та дізнатися, які коміти були створені раніше.",
      },

      {
        type: "paragraph",
        value:
          "Для перегляду історії комітів у Git використовується команда git log.",
      },

      {
        type: "code",
        language: "bash",
        value: "git log",
      },

      {
        type: "paragraph",
        value:
          "Після виконання команди Git покаже список комітів. Для кожного коміту відображається його ідентифікатор, автор, дата створення та повідомлення коміту.",
      },

      {
        type: "code",
        language: "text",
        value: `commit 3a4f6d2
Author: Andrii
Date: Mon Aug 3 2026

Оновлено index.html`,
      },

      {
        type: "heading",
        value: "Обмеження кількості комітів",
      },

      {
        type: "paragraph",
        value:
          "За замовчуванням git log показує всю історію комітів. Якщо потрібно переглянути лише останні коміти, можна вказати їх кількість після команди.",
      },

      {
        type: "code",
        language: "bash",
        value: "git log -3",
      },

      {
        type: "paragraph",
        value: "Команда вище покаже тільки три останні коміти.",
      },

      {
        type: "heading",
        value: "Приклад",
      },

      {
        type: "code",
        language: "bash",
        value: "git log -5",
      },

      {
        type: "paragraph",
        value: "Ця команда виведе останні п'ять комітів із вашої історії.",
      },

      {
        type: "diagram",
        value: `Історія Git

commit 5
   │
commit 4
   │
commit 3
   │
commit 2
   │
commit 1


git log -3

▼

commit 5
commit 4
commit 3`,
      },

      {
        type: "note",
        value:
          "Команда git log не змінює історію проєкту. Вона лише показує інформацію про створені коміти.",
      },

      {
        type: "heading",
        value: "Завдання",
      },

      {
        type: "task",
        value: [
          "Виконайте команду git log у вашому репозиторії.",
          "Перегляньте список створених комітів.",
          "Обмежте виведення історії останніми п'ятьма комітами за допомогою git log -5.",
        ],
      },

      {
        type: "hint",
        value:
          "Якщо у репозиторії ще немає комітів, Git повідомить, що історія порожня.",
      },

      {
        type: "answer",
        value: `Відповідь:

Перегляд історії:

git log


Останні п'ять комітів:

git log -5`,
      },
    ],
  },
  {
    id: "history-flags",
    title: "Параметри git log",
    description:
      "Корисні параметри команди git log для зміни формату та деталізації історії комітів.",
    content: [
      {
        type: "heading",
        value: "Параметри git log",
      },

      {
        type: "paragraph",
        value:
          "Команда git log має багато параметрів, які дозволяють змінювати вигляд історії комітів та отримувати тільки потрібну інформацію.",
      },

      {
        type: "heading",
        value: "Основні параметри історії комітів",
      },

      {
        type: "table",
        value: [
          ["Параметр", "Опис"],
          ["-p", "Показує детальні зміни (diff) для кожного коміту."],
          ["--stat", "Показує статистику змін у коміті."],
          [
            "--shortstat",
            "Показує коротку статистику: кількість файлів, вставок та видалень.",
          ],
          ["--name-only", "Показує назви файлів, які були змінені."],
          ["--name-status", "Показує список змінених файлів із їх статусами."],
          [
            "--relative-date",
            "Показує дату у відносному форматі, наприклад 2 days ago.",
          ],
          ["--pretty", "Змінює формат відображення комітів."],
          ["--graph", "Показує граф гілок та злиттів Git."],
        ],
      },

      {
        type: "heading",
        value: "Формат в один рядок",
      },

      {
        type: "paragraph",
        value:
          "Щоб переглянути коротку історію комітів, де кожен коміт займає один рядок, використовується параметр --pretty=oneline.",
      },

      {
        type: "code",
        language: "bash",
        value: "git log --pretty=oneline",
      },

      {
        type: "paragraph",
        value: "Також існує скорочений варіант цієї команди:",
      },

      {
        type: "code",
        language: "bash",
        value: "git log --oneline",
      },

      {
        type: "code",
        language: "text",
        value: `3a4f6d2 Оновлено index.html
8b7c1a4 Додано стилі
1d2e3f5 Створено проєкт`,
      },

      {
        type: "heading",
        value: "Приклади використання",
      },

      {
        type: "code",
        language: "bash",
        value: `git log --stat

git log --name-only

git log --graph`,
      },

      {
        type: "diagram",
        value: `git log

Повна історія
      │
      ▼

git log --oneline

Короткий список комітів
      │
      ▼

3a4f6d2 Оновлення
8b7c1a4 Стилі`,
      },

      {
        type: "note",
        value:
          "Для щоденної роботи найчастіше використовують git log --oneline, оскільки він швидко показує коротку історію комітів.",
      },

      {
        type: "heading",
        value: "Завдання",
      },

      {
        type: "task",
        value: [
          "Виконайте команду git log у вашому репозиторії.",
          "Виведіть історію комітів у короткому форматі однією командою.",
          "Перевірте результат за допомогою git log --oneline.",
        ],
      },

      {
        type: "hint",
        value:
          "Параметр --oneline показує скорочений SHA коміту та його повідомлення в одному рядку.",
      },

      {
        type: "answer",
        value: `Відповідь:

Короткий перегляд історії:

git log --oneline

Або:

git log --pretty=oneline`,
      },
    ],
  },
  {
    id: "history-filter",
    title: "Обмеження історії комітів",
    description:
      "Фільтрація історії Git за кількістю, датою, автором та повідомленням коміту.",
    content: [
      {
        type: "heading",
        value: "Обмеження історії комітів у Git",
      },

      {
        type: "paragraph",
        value:
          "Команда git log дозволяє не тільки переглядати всю історію комітів, а й обмежувати результат за різними параметрами.",
      },

      {
        type: "paragraph",
        value:
          "Можна отримати тільки останні коміти, коміти за певний період, коміти конкретного автора або коміти, у повідомленні яких є певний текст.",
      },

      {
        type: "heading",
        value: "Основні параметри обмеження",
      },

      {
        type: "table",
        value: [
          ["Параметр", "Опис"],
          ["-(n)", "Показує останні n комітів."],
          ["--since / --after", "Показує коміти після вказаної дати."],
          ["--until / --before", "Показує коміти до вказаної дати."],
          ["--author", "Показує коміти певного автора."],
          [
            "--committer",
            "Показує коміти певного користувача, який створив коміт.",
          ],
          ["--grep", "Шукає коміти за текстом у повідомленні коміту."],
        ],
      },

      {
        type: "heading",
        value: "Останні коміти",
      },

      {
        type: "paragraph",
        value:
          "Щоб показати тільки певну кількість останніх комітів, використовується число після git log.",
      },

      {
        type: "code",
        language: "bash",
        value: "git log -5",
      },

      {
        type: "paragraph",
        value: "Команда покаже останні п'ять комітів у репозиторії.",
      },

      {
        type: "heading",
        value: "Коміти після певної дати",
      },

      {
        type: "code",
        language: "bash",
        value: 'git log --since="2026-01-01"',
      },

      {
        type: "paragraph",
        value: "Буде показано всі коміти, створені після вказаної дати.",
      },

      {
        type: "heading",
        value: "Коміти до певної дати",
      },

      {
        type: "code",
        language: "bash",
        value: 'git log --until="2026-01-01"',
      },

      {
        type: "paragraph",
        value: "Команда показує коміти, створені до зазначеної дати.",
      },

      {
        type: "heading",
        value: "Пошук за автором",
      },

      {
        type: "code",
        language: "bash",
        value: 'git log --author="Andrii"',
      },

      {
        type: "paragraph",
        value:
          "Git покаже тільки ті коміти, автором яких є вказаний користувач.",
      },

      {
        type: "heading",
        value: "Пошук за коммітером",
      },

      {
        type: "code",
        language: "bash",
        value: 'git log --committer="Andrii"',
      },

      {
        type: "paragraph",
        value:
          "Автор змін і користувач, який створив коміт, можуть бути різними людьми.",
      },

      {
        type: "heading",
        value: "Пошук за текстом коміту",
      },

      {
        type: "paragraph",
        value:
          "Якщо потрібно знайти коміти за повідомленням, використовується параметр --grep.",
      },

      {
        type: "code",
        language: "bash",
        value: 'git log --grep="update"',
      },

      {
        type: "diagram",
        value: `git log

        │
        ├── -5
        │     ▼
        │  Останні 5 комітів
        │
        ├── --since
        │     ▼
        │  Після дати
        │
        ├── --author
        │     ▼
        │  Автор
        │
        └── --grep
              ▼
          Пошук тексту`,
      },

      {
        type: "note",
        value:
          "Параметри git log можна комбінувати. Наприклад: git log -5 --author='Andrii' покаже останні п'ять комітів конкретного автора.",
      },

      {
        type: "heading",
        value: "Завдання",
      },

      {
        type: "task",
        value: [
          "Перегляньте останні три коміти командою git log -3.",
          "Виведіть коміти, створені після певної дати.",
          "Знайдіть коміти певного автора.",
          "Знайдіть коміт за текстом у повідомленні за допомогою git log --grep.",
        ],
      },

      {
        type: "hint",
        value:
          "Для швидкого пошуку в історії найчастіше використовують параметри -n, --author та --grep.",
      },

      {
        type: "answer",
        value: `Відповідь:

Останні 3 коміти:

git log -3


Після дати:

git log --since="2026-01-01"


За автором:

git log --author="Andrii"


За текстом:

git log --grep="update"`,
      },
    ],
  },
  {
    id: "amend",
    title: "Редагування останнього коміту",
    description:
      "Виправлення останнього коміту за допомогою команди git commit --amend.",
    content: [
      {
        type: "heading",
        value: "Редагування останнього коміту в Git",
      },

      {
        type: "paragraph",
        value:
          "Під час роботи з Git іноді виникають ситуації, коли останній коміт був створений неправильно: наприклад, залишилось додати файл або було вказано неправильне повідомлення.",
      },

      {
        type: "paragraph",
        value:
          "Git дозволяє виправити останній коміт без створення нового окремого коміту. Для цього використовується параметр --amend.",
      },

      {
        type: "heading",
        value: "Команда git commit --amend",
      },

      {
        type: "code",
        language: "bash",
        value: "git commit --amend",
      },

      {
        type: "paragraph",
        value:
          "Команда замінює останній коміт новою версією, додаючи до нього поточні підготовлені зміни.",
      },

      {
        type: "heading",
        value: "Виправлення файлів у коміті",
      },

      {
        type: "paragraph",
        value:
          "Спочатку потрібно внести необхідні зміни у файли та додати їх до області підготовки.",
      },

      {
        type: "code",
        language: "bash",
        value: `git add .
git commit --amend`,
      },

      {
        type: "paragraph",
        value:
          "Після виконання команди Git відкриє редактор повідомлення коміту. Можна залишити старий текст або змінити його.",
      },

      {
        type: "heading",
        value: "Зміна тільки повідомлення коміту",
      },

      {
        type: "paragraph",
        value:
          "Якщо потрібно лише виправити назву коміту, можна використати параметр -m разом з --amend.",
      },

      {
        type: "code",
        language: "bash",
        value: 'git commit --amend -m "Нове повідомлення"',
      },

      {
        type: "diagram",
        value: `Неправильний коміт

        │
        ▼

   git add

        │
        ▼

git commit --amend

        │
        ▼

Виправлений коміт`,
      },

      {
        type: "note",
        value:
          "Команда git commit --amend змінює тільки останній коміт. Старі коміти в історії не редагуються.",
      },

      {
        type: "heading",
        value: "Приклад",
      },

      {
        type: "paragraph",
        value: "Створили коміт із неправильною назвою:",
      },

      {
        type: "code",
        language: "bash",
        value: 'git commit -m "Fix bug"',
      },

      {
        type: "paragraph",
        value: "Після цього зрозуміли, що повідомлення потрібно змінити:",
      },

      {
        type: "code",
        language: "bash",
        value: 'git commit --amend -m "Fixed login bug"',
      },

      {
        type: "paragraph",
        value:
          "У результаті в історії залишиться один коміт із новим повідомленням.",
      },

      {
        type: "heading",
        value: "Завдання",
      },

      {
        type: "task",
        value: [
          "Створіть тестовий коміт із неправильним повідомленням.",
          "Внесіть зміни у файл.",
          "Додайте зміни командою git add.",
          "Виправте останній коміт за допомогою git commit --amend.",
          "Перевірте результат командою git log.",
        ],
      },

      {
        type: "hint",
        value:
          "Команда git commit --amend найчастіше використовується для виправлення останнього коміту перед відправкою у віддалений репозиторій.",
      },

      {
        type: "answer",
        value: `Відповідь:

Створити неправильний коміт:

git commit -m "Wrong message"


Додати виправлення:

git add .


Замінити останній коміт:

git commit --amend -m "Correct message"


Перевірити:

git log`,
      },
    ],
  },
  {
    id: "unstage",
    title: "Скасування індексації файлу",
    description:
      "Видалення файлу з області підготовки (Staging Area) за допомогою git restore --staged.",
    content: [
      {
        type: "heading",
        value: "Скасування індексації файлу в Git",
      },

      {
        type: "paragraph",
        value:
          "Іноді потрібно прибрати файл з області підготовки (Staging Area), але залишити всі внесені зміни у самому файлі.",
      },

      {
        type: "paragraph",
        value:
          "Для цього використовується команда git restore з параметром --staged.",
      },

      {
        type: "heading",
        value: "Команда git restore --staged",
      },

      {
        type: "code",
        language: "bash",
        value: "git restore --staged file.txt",
      },

      {
        type: "paragraph",
        value:
          "Після виконання команди файл буде видалений зі Staging Area, але зміни у ньому не втратяться.",
      },

      {
        type: "diagram",
        value: `Modified

   │
   │ git add
   ▼

Staged

   │
   │ git restore --staged
   ▼

Modified`,
      },

      {
        type: "heading",
        value: "Приклад",
      },

      {
        type: "paragraph",
        value: "Спочатку додаємо файл до області підготовки:",
      },

      {
        type: "code",
        language: "bash",
        value: "git add file.txt",
      },

      {
        type: "paragraph",
        value: "Перевіряємо стан репозиторію:",
      },

      {
        type: "code",
        language: "bash",
        value: "git status",
      },

      {
        type: "code",
        language: "text",
        value: `Changes to be committed:
  modified: file.txt`,
      },

      {
        type: "paragraph",
        value: "Тепер скасовуємо індексацію файлу:",
      },

      {
        type: "code",
        language: "bash",
        value: "git restore --staged file.txt",
      },

      {
        type: "paragraph",
        value:
          "Після цього Git покаже, що файл змінений, але не підготовлений до коміту:",
      },

      {
        type: "code",
        language: "text",
        value: `Changes not staged for commit:
  modified: file.txt`,
      },

      {
        type: "note",
        value:
          "git restore --staged не видаляє зміни з файлу. Він тільки прибирає файл із області підготовки.",
      },

      {
        type: "heading",
        value: "Завдання",
      },

      {
        type: "task",
        value: [
          "Змініть будь-який файл у вашому Git-репозиторії.",
          "Додайте файл до області підготовки командою git add.",
          "Перевірте статус командою git status.",
          "Скасуйте індексацію файлу командою git restore --staged.",
          "Перевірте, що файл залишився зміненим, але не підготовленим до коміту.",
        ],
      },

      {
        type: "hint",
        value:
          "Якщо потрібно тільки прибрати файл зі Staging Area, використовуйте git restore --staged. Дані файлу при цьому не змінюються.",
      },

      {
        type: "answer",
        value: `Відповідь:

Додати файл:

git add file.txt


Перевірити:

git status


Скасувати індексацію:

git restore --staged file.txt


Перевірити результат:

git status

Файл повинен бути у стані:

Changes not staged for commit`,
      },
    ],
  },
  {
    id: "restore",
    title: "Скасування змін у файлі",
    description:
      "Повернення файлу до попереднього стану за допомогою команди git restore.",
    content: [
      {
        type: "heading",
        value: "Скасування змін у файлі в Git",
      },

      {
        type: "paragraph",
        value:
          "Під час роботи над проєктом іноді потрібно відмінити зміни у файлі та повернути його до останньої збереженої версії.",
      },

      {
        type: "paragraph",
        value:
          "Для цього використовується команда git restore. Вона замінює поточний файл версією з останнього коміту.",
      },

      {
        type: "heading",
        value: "Команда git restore",
      },

      {
        type: "code",
        language: "bash",
        value: "git restore file.txt",
      },

      {
        type: "paragraph",
        value:
          "Після виконання команди всі незбережені зміни у файлі будуть видалені, а файл повернеться до стану останнього коміту.",
      },

      {
        type: "heading",
        value: "Приклад",
      },

      {
        type: "paragraph",
        value: "Спочатку внесемо зміни у файл file.txt:",
      },

      {
        type: "code",
        language: "bash",
        value: "git status",
      },

      {
        type: "code",
        language: "text",
        value: `Changes not staged for commit:
  modified: file.txt`,
      },

      {
        type: "paragraph",
        value: "Тепер скасуємо всі зміни у файлі:",
      },

      {
        type: "code",
        language: "bash",
        value: "git restore file.txt",
      },

      {
        type: "paragraph",
        value: "Після повторної перевірки статусу Git покаже, що змін немає:",
      },

      {
        type: "code",
        language: "bash",
        value: "git status",
      },

      {
        type: "code",
        language: "text",
        value: "nothing to commit, working tree clean",
      },

      {
        type: "diagram",
        value: `Committed

    │
    │ Редагування файлу
    ▼

Modified

    │
    │ git restore file.txt
    ▼

Committed`,
      },

      {
        type: "note",
        value:
          "Будьте обережні з git restore. Команда видаляє всі незбережені зміни у файлі, і повернути їх після виконання буде складно.",
      },

      {
        type: "heading",
        value: "Завдання",
      },

      {
        type: "task",
        value: [
          "Відкрийте будь-який файл у вашому Git-репозиторії.",
          "Внесіть зміни у цей файл.",
          "Перевірте стан файлу командою git status.",
          "Поверніть файл до попереднього стану командою git restore.",
          "Перевірте, що Git більше не показує змін.",
        ],
      },

      {
        type: "hint",
        value:
          "Перед використанням git restore переконайтеся, що у файлі немає важливих незбережених змін.",
      },

      {
        type: "answer",
        value: `Відповідь:

Перевірити зміни:

git status


Скасувати зміни:

git restore file.txt


Перевірити результат:

git status

Результат:

nothing to commit, working tree clean`,
      },
    ],
  },
  {
    id: "aliases",
    title: "Псевдоніми команд у Git",
    description:
      "Створення власних скорочень для Git-команд за допомогою git config --global alias.",
    content: [
      {
        type: "heading",
        value: "Псевдоніми команд у Git",
      },

      {
        type: "paragraph",
        value:
          "У Git можна створювати власні короткі назви для команд. Це дозволяє швидше виконувати часто використовувані команди.",
      },

      {
        type: "paragraph",
        value:
          "Для створення псевдоніма використовується команда git config з параметром --global та ключем alias.",
      },

      {
        type: "heading",
        value: "Створення псевдоніма",
      },

      {
        type: "code",
        language: "bash",
        value: "git config --global alias.com commit",
      },

      {
        type: "paragraph",
        value:
          "Після цього замість git commit можна використовувати коротшу команду:",
      },

      {
        type: "code",
        language: "bash",
        value: "git com",
      },

      {
        type: "heading",
        value: "Приклад",
      },

      {
        type: "paragraph",
        value:
          "Створимо псевдонім для перегляду історії комітів. Команду git log замінимо на git lg:",
      },

      {
        type: "code",
        language: "bash",
        value: "git config --global alias.lg log",
      },

      {
        type: "paragraph",
        value: "Тепер для перегляду історії комітів можна використовувати:",
      },

      {
        type: "code",
        language: "bash",
        value: "git lg",
      },

      {
        type: "diagram",
        value: `Звичайна команда

git log

      │
      │ alias.lg
      ▼

Псевдонім

git lg`,
      },

      {
        type: "heading",
        value: "Перегляд створених псевдонімів",
      },

      {
        type: "code",
        language: "bash",
        value: "git config --global --get-regexp alias",
      },

      {
        type: "note",
        value:
          "Параметр --global створює псевдонім для всіх Git-репозиторіїв користувача.",
      },

      {
        type: "heading",
        value: "Завдання",
      },

      {
        type: "task",
        value: [
          "Створіть псевдонім для команди git log.",
          "Назвіть псевдонім будь-яким коротким ім'ям.",
          "Викличте створений псевдонім у терміналі.",
          "Перевірте, що команда показує історію комітів.",
        ],
      },

      {
        type: "hint",
        value:
          "Наприклад: git config --global alias.lg log створить скорочення git lg для команди git log.",
      },

      {
        type: "answer",
        value: `Відповідь:

Створити псевдонім:

git config --global alias.lg log


Використати:

git lg

У терміналі повинна відобразитися історія комітів.`,
      },
    ],
  },
];
