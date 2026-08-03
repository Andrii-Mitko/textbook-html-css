import type { Lesson } from "../types";

export const operations: Lesson[] = [
  {
    id: "advanced",
    title: "Просунуті операції в Git",
    description:
      "Робота з історією змін, скасуванням операцій, порівнянням версій та іншими можливостями Git.",
    content: [
      {
        type: "heading",
        text: "Просунуті операції в Git",
      },

      {
        type: "paragraph",
        text: "Після вивчення основ настав час перейти до більш просунутих можливостей Git.",
      },

      {
        type: "paragraph",
        text: "У цьому розділі ви навчитеся працювати зі станами файлів, переглядати історію змін, скасовувати зміни, порівнювати версії та використовувати інші корисні інструменти Git у повсякденній роботі.",
      },

      {
        type: "note",
        text: "Перед переходом до цього розділу переконайтеся, що ви вже розумієте основи Git: репозиторій, add, commit та статус файлів.",
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
        text: "Коротка форма статусу Git",
      },

      {
        type: "paragraph",
        text: "Команда git status показує багато інформації про стан репозиторію. Для швидкого перегляду можна використовувати скорочену форму статусу.",
      },

      {
        type: "paragraph",
        text: "У короткому форматі Git показує спеціальні літери перед назвами файлів, які допомагають швидко визначити їхній стан.",
      },

      {
        type: "heading",
        text: "Команда короткого статусу",
      },

      {
        type: "code",
        language: "bash",
        code: "git status -s",
      },

      {
        type: "paragraph",
        text: "Також існує повний запис команди:",
      },

      {
        type: "code",
        language: "bash",
        code: "git status --short",
      },

      {
        type: "heading",
        text: "Позначення станів файлів",
      },

      {
        type: "table",
        headers: ["Позначення", "Стан", "Опис"],
        rows: [
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
        text: `Зміна файлу

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
        text: "Приклади",
      },

      {
        type: "code",
        language: "text",
        code: `M text.txt
A index.html
D old.txt`,
      },

      {
        type: "paragraph",
        text: "Літера перед назвою файлу показує, що саме відбулося з файлом.",
      },

      {
        type: "note",
        text: "Команда git status -s зручна під час щоденної роботи, коли потрібно швидко перевірити зміни у великому проєкті.",
      },

  

      {
        type: "task",
        text: [
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
        text: "Запам'ятайте основні скорочення: M — modified, A — added, D — deleted, R — renamed, C — copied.",
      },

      {
        type: "answer",
        text: `Відповідь:

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
        text: "Ігнорування файлів у Git",
      },

      {
        type: "paragraph",
        text: "У реальних проєктах є файли, які не потрібно додавати до Git. Це можуть бути кеш, тимчасові файли, конфіденційні дані або службові файли програм.",
      },

      {
        type: "paragraph",
        text: "Щоб Git не відстежував такі файли, використовується спеціальний файл .gitignore.",
      },

      {
        type: "code",
        language: "text",
        code: ".gitignore",
      },

      {
        type: "paragraph",
        text: "Файл .gitignore створюється у корені проєкту. Кожен рядок у ньому містить правило для файлів або папок, які потрібно ігнорувати.",
      },

      {
        type: "heading",
        text: "Ігнорування папки",
      },

      {
        type: "paragraph",
        text: "Щоб Git ігнорував усі файли з папки cache, додайте її у .gitignore:",
      },

      {
        type: "code",
        language: "text",
        code: `cache/`,
      },

      {
        type: "diagram",
        text: `Проєкт

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
        text: "Ігнорування декількох папок",
      },

      {
        type: "paragraph",
        text: "Щоб ігнорувати декілька папок, кожну папку потрібно записати з нового рядка:",
      },

      {
        type: "code",
        language: "text",
        code: `cache/
tmp/`,
      },

      {
        type: "heading",
        text: "Ігнорування окремого файлу",
      },

      {
        type: "paragraph",
        text: "Щоб не відстежувати конкретний файл, потрібно вказати його назву:",
      },

      {
        type: "code",
        language: "text",
        code: `err.txt`,
      },

      {
        type: "paragraph",
        text: "Також можна одночасно ігнорувати файл та папку:",
      },

      {
        type: "code",
        language: "text",
        code: `err.txt
tmp/`,
      },

      {
        type: "heading",
        text: "Корисний синтаксис .gitignore",
      },

      {
        type: "table",
        headers: ["Правило", "Що ігнорується", "Приклад"],
        rows: [
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
        text: "Перевірка ігнорування",
      },

      {
        type: "paragraph",
        text: "Після створення або зміни .gitignore перевірити стан файлів можна командою:",
      },

      {
        type: "code",
        language: "bash",
        code: "git status",
      },

      {
        type: "note",
        text: "Файл, який вже був доданий до Git, не перестане відстежуватися після додавання його у .gitignore. Спочатку потрібно видалити його з індексу командою git rm --cached.",
      },



      {
        type: "task",
        text: [
          "Створіть файл .gitignore у корені проєкту.",
          "Додайте правило, щоб ігнорувати папку cache.",
          "Додайте правило, щоб ігнорувати папки cache та tmp.",
          "Додайте правило для ігнорування файлу err.txt та папки tmp.",
          "Перевірте результат командою git status.",
        ],
      },

      {
        type: "hint",
        text: "У .gitignore кожне правило пишеться з нового рядка. Для папок зазвичай використовують символ / у кінці назви.",
      },

      {
        type: "answer",
        text: `Відповідь:

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
        text: "Перегляд змін файлів у Git",
      },

      {
        type: "paragraph",
        text: "Іноді потрібно побачити, які саме зміни були зроблені у файлі після останнього додавання до області підготовки (git add). Для цього використовується команда git diff.",
      },

      {
        type: "code",
        language: "bash",
        code: "git diff",
      },

      {
        type: "paragraph",
        text: "Команда git diff показує різницю між поточним станом файлів у робочій директорії та останньою підготовленою версією.",
      },

      {
        type: "heading",
        text: "Як працює git diff",
      },

      {
        type: "diagram",
        text: `Останній коміт
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
        text: "Приклад роботи",
      },

      {
        type: "paragraph",
        text: "Створіть файл text.txt та додайте в нього текст:",
      },

      {
        type: "code",
        language: "text",
        code: `Hello Git`,
      },

      {
        type: "paragraph",
        text: "Додайте файл до Git та створіть коміт:",
      },

      {
        type: "code",
        language: "bash",
        code: `git add text.txt
git commit -m "Add text file"`,
      },

      {
        type: "paragraph",
        text: "Тепер змініть файл:",
      },

      {
        type: "code",
        language: "text",
        code: `Hello Git
New line`,
      },

      {
        type: "paragraph",
        text: "Перевірте зміни:",
      },

      {
        type: "code",
        language: "bash",
        code: "git diff",
      },

      {
        type: "code",
        language: "text",
        code: `+New line`,
      },

      {
        type: "paragraph",
        text: "Символ + показує додані рядки, а символ - показує видалені рядки.",
      },



      {
        type: "task",
        text: [
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
        text: "Якщо git diff нічого не показує — перевірте, чи є незбережені зміни після останнього git add.",
      },

      {
        type: "answer",
        text: `Відповідь:

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
        text: "Пропуск індексації змінених файлів у Git",
      },

      {
        type: "paragraph",
        text: "У Git є можливість однією командою виконати індексацію змінених файлів та створити коміт. Це дозволяє об'єднати кроки git add і git commit.",
      },

      {
        type: "paragraph",
        text: "Для цього до команди commit додається параметр -a, а окрему команду git add виконувати не потрібно.",
      },

      {
        type: "code",
        language: "bash",
        code: "git commit -a",
      },

      {
        type: "paragraph",
        text: "Після виконання цієї команди всі вже відстежувані файли, які були змінені, автоматично потраплять до коміту.",
      },

      {
        type: "diagram",
        text: `Зміна файлу

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
        text: "Команда git commit -a працює тільки з файлами, які Git вже відстежує. Нові файли (Untracked) потрібно спочатку додати через git add.",
      },

      {
        type: "heading",
        text: "Приклад",
      },

      {
        type: "code",
        language: "bash",
        code: `git commit -a -m "Оновлено файл"`,
      },

      {
        type: "paragraph",
        text: "У цьому випадку Git автоматично додасть зміни у відстежуваних файлах та створить новий коміт.",
      },


      {
        type: "task",
        text: [
          "Змініть файл, який вже відстежується Git.",
          "Виконайте команду git commit -a.",
          "Перевірте, що зміни були додані до нового коміту.",
        ],
      },

      {
        type: "hint",
        text: "Перед використанням git commit -a перевірте зміни командою git status, щоб випадково не закомітити зайві файли.",
      },

      {
        type: "answer",
        text: `Відповідь:

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
        text: "Видалення файлів у Git",
      },

      {
        type: "paragraph",
        text: "Під час роботи з Git не рекомендується просто видаляти файли вручну з папки проєкту. Якщо зробити це через файловий менеджер, Git побачить файл як змінений, але ще не підготовлений до коміту.",
      },

      {
        type: "code",
        language: "text",
        code: "Changes not staged for commit:\n  deleted: text.txt",
      },

      {
        type: "paragraph",
        text: "Щоб правильно видалити файл з проєкту та одразу додати це видалення до області підготовки (Staging Area), використовується команда git rm.",
      },

      {
        type: "code",
        language: "bash",
        code: "git rm text.txt",
      },

      {
        type: "paragraph",
        text: "Після виконання команди Git видалить файл з робочої папки та підготує зміни до наступного коміту.",
      },

      {
        type: "code",
        language: "text",
        code: "deleted: text.txt",
      },

      {
        type: "diagram",
        text: `text.txt

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
        text: "Команда git rm виконує одразу дві дії: видаляє файл з робочої директорії та додає це видалення до індексу.",
      },

      {
        type: "heading",
        text: "Приклад",
      },

      {
        type: "code",
        language: "bash",
        code: `git rm old.txt
git commit -m "Видалено непотрібний файл"`,
      },

 

      {
        type: "task",
        text: [
          "Створіть файл у вашому Git-проєкті.",
          "Додайте його до репозиторію та створіть коміт.",
          "Видаліть файл командою git rm.",
          "Перевірте стан репозиторію командою git status.",
        ],
      },

      {
        type: "hint",
        text: "Після git rm команда git status покаже видалений файл у розділі Changes to be committed.",
      },

      {
        type: "answer",
        text: `Відповідь:

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
        text: "Перейменування файлів у Git",
      },

      {
        type: "paragraph",
        text: "Для перейменування файлів у Git використовується команда git mv. Вона дозволяє змінити назву файлу та одразу повідомити Git про цю зміну.",
      },

      {
        type: "code",
        language: "bash",
        code: "git mv old.txt new.txt",
      },

      {
        type: "paragraph",
        text: "Команда git mv приймає два параметри: спочатку стару назву файлу, а потім нову.",
      },

      {
        type: "diagram",
        text: `old.txt

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
        text: "Після виконання команди Git автоматично підготує перейменування файлу до наступного коміту.",
      },

      {
        type: "code",
        language: "text",
        code: `Changes to be committed:

  renamed: old.txt -> new.txt`,
      },

      {
        type: "heading",
        text: "Приклад",
      },

      {
        type: "code",
        language: "bash",
        code: `git mv index.html main.html
git status`,
      },

      {
        type: "paragraph",
        text: "Після перевірки статусу Git покаже, що файл був перейменований.",
      },

      {
        type: "note",
        text: "Не рекомендується просто перейменовувати файли через файловий менеджер. Git може не одразу визначити зміну як перейменування. Команда git mv робить це правильно.",
      },



      {
        type: "task",
        text: [
          "Виберіть будь-який файл у вашому Git-репозиторії.",
          "Перейменуйте його за допомогою команди git mv.",
          "Перевірте результат командою git status.",
          "Переконайтеся, що Git визначив зміну як renamed.",
        ],
      },

      {
        type: "hint",
        text: "Після виконання git mv перевірте статус. Git повинен показати renamed: старе_ім'я -> нове_ім'я.",
      },

      {
        type: "answer",
        text: `Відповідь:

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
        text: "Переміщення файлів у Git",
      },

      {
        type: "paragraph",
        text: "У Git для переміщення файлів між папками використовується та сама команда git mv, яка також використовується для перейменування файлів.",
      },

      {
        type: "code",
        language: "bash",
        code: "git mv old/file.txt new/file.txt",
      },

      {
        type: "paragraph",
        text: "Перший параметр — поточний шлях до файлу, другий — нове місце розташування файлу.",
      },

      {
        type: "diagram",
        text: `old/
└── file.txt

      │
      │ git mv old/file.txt new/file.txt
      ▼

new/
└── file.txt`,
      },

      {
        type: "paragraph",
        text: "Після переміщення Git покаже цю операцію як перейменування файлу, оскільки для операційної системи переміщення та перейменування є однаковою зміною шляху до файлу.",
      },

      {
        type: "code",
        language: "text",
        code: `Changes to be committed:

  renamed: old/file.txt -> new/file.txt`,
      },

      {
        type: "heading",
        text: "Приклад",
      },

      {
        type: "code",
        language: "bash",
        code: `git mv images/logo.png assets/logo.png
git status`,
      },

      {
        type: "paragraph",
        text: "Після перевірки статусу Git покаже, що файл був переміщений шляхом renamed.",
      },

      {
        type: "note",
        text: "Не переміщуйте файли вручну через файловий менеджер, якщо хочете коректно відстежувати зміни в Git. Використовуйте git mv.",
      },



      {
        type: "task",
        text: [
          "Створіть у вашому репозиторії нову папку.",
          "Перемістіть будь-який файл у цю папку за допомогою git mv.",
          "Перевірте результат командою git status.",
          "Переконайтеся, що Git показує зміну як renamed.",
        ],
      },

      {
        type: "hint",
        text: "Git може показати переміщення як renamed: стара_папка/файл -> нова_папка/файл.",
      },

      {
        type: "answer",
        text: `Відповідь:

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
        text: "Перегляд історії комітів у Git",
      },

      {
        type: "paragraph",
        text: "Під час роботи над проєктом часто потрібно переглянути попередні зміни та дізнатися, які коміти були створені раніше.",
      },

      {
        type: "paragraph",
        text: "Для перегляду історії комітів у Git використовується команда git log.",
      },

      {
        type: "code",
        language: "bash",
        code: "git log",
      },

      {
        type: "paragraph",
        text: "Після виконання команди Git покаже список комітів. Для кожного коміту відображається його ідентифікатор, автор, дата створення та повідомлення коміту.",
      },

      {
        type: "code",
        language: "text",
        code: `commit 3a4f6d2
Author: Andrii
Date: Mon Aug 3 2026

Оновлено index.html`,
      },

      {
        type: "heading",
        text: "Обмеження кількості комітів",
      },

      {
        type: "paragraph",
        text: "За замовчуванням git log показує всю історію комітів. Якщо потрібно переглянути лише останні коміти, можна вказати їх кількість після команди.",
      },

      {
        type: "code",
        language: "bash",
        code: "git log -3",
      },

      {
        type: "paragraph",
        text: "Команда вище покаже тільки три останні коміти.",
      },

      {
        type: "heading",
        text: "Приклад",
      },

      {
        type: "code",
        language: "bash",
        code: "git log -5",
      },

      {
        type: "paragraph",
        text: "Ця команда виведе останні п'ять комітів із вашої історії.",
      },

      {
        type: "diagram",
        text: `Історія Git

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
        text: "Команда git log не змінює історію проєкту. Вона лише показує інформацію про створені коміти.",
      },

  

      {
        type: "task",
        text: [
          "Виконайте команду git log у вашому репозиторії.",
          "Перегляньте список створених комітів.",
          "Обмежте виведення історії останніми п'ятьма комітами за допомогою git log -5.",
        ],
      },

      {
        type: "hint",
        text: "Якщо у репозиторії ще немає комітів, Git повідомить, що історія порожня.",
      },

      {
        type: "answer",
        text: `Відповідь:

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
        text: "Параметри git log",
      },

      {
        type: "paragraph",
        text: "Команда git log має багато параметрів, які дозволяють змінювати вигляд історії комітів та отримувати тільки потрібну інформацію.",
      },

      {
        type: "heading",
        text: "Основні параметри історії комітів",
      },

      {
        type: "table",
        headers: ["Параметр", "Опис"],
        rows: [
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
        text: "Формат в один рядок",
      },

      {
        type: "paragraph",
        text: "Щоб переглянути коротку історію комітів, де кожен коміт займає один рядок, використовується параметр --pretty=oneline.",
      },

      {
        type: "code",
        language: "bash",
        code: "git log --pretty=oneline",
      },

      {
        type: "paragraph",
        text: "Також існує скорочений варіант цієї команди:",
      },

      {
        type: "code",
        language: "bash",
        code: "git log --oneline",
      },

      {
        type: "code",
        language: "text",
        code: `3a4f6d2 Оновлено index.html
8b7c1a4 Додано стилі
1d2e3f5 Створено проєкт`,
      },

      {
        type: "heading",
        text: "Приклади використання",
      },

      {
        type: "code",
        language: "bash",
        code: `git log --stat

git log --name-only

git log --graph`,
      },

      {
        type: "diagram",
        text: `git log

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
        text: "Для щоденної роботи найчастіше використовують git log --oneline, оскільки він швидко показує коротку історію комітів.",
      },

      {
        type: "task",
        text: [
          "Виконайте команду git log у вашому репозиторії.",
          "Виведіть історію комітів у короткому форматі однією командою.",
          "Перевірте результат за допомогою git log --oneline.",
        ],
      },

      {
        type: "hint",
        text: "Параметр --oneline показує скорочений SHA коміту та його повідомлення в одному рядку.",
      },

      {
        type: "answer",
        text: `Відповідь:

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
        text: "Обмеження історії комітів у Git",
      },

      {
        type: "paragraph",
        text: "Команда git log дозволяє не тільки переглядати всю історію комітів, а й обмежувати результат за різними параметрами.",
      },

      {
        type: "paragraph",
        text: "Можна отримати тільки останні коміти, коміти за певний період, коміти конкретного автора або коміти, у повідомленні яких є певний текст.",
      },

      {
        type: "heading",
        text: "Основні параметри обмеження",
      },

      {
        type: "table",
        headers: ["Параметр", "Опис"],
        rows: [
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
        text: "Останні коміти",
      },

      {
        type: "paragraph",
        text: "Щоб показати тільки певну кількість останніх комітів, використовується число після git log.",
      },

      {
        type: "code",
        language: "bash",
        code: "git log -5",
      },

      {
        type: "paragraph",
        text: "Команда покаже останні п'ять комітів у репозиторії.",
      },

      {
        type: "heading",
        text: "Коміти після певної дати",
      },

      {
        type: "code",
        language: "bash",
        code: 'git log --since="2026-01-01"',
      },

      {
        type: "paragraph",
        text: "Буде показано всі коміти, створені після вказаної дати.",
      },

      {
        type: "heading",
        text: "Коміти до певної дати",
      },

      {
        type: "code",
        language: "bash",
        code: 'git log --until="2026-01-01"',
      },

      {
        type: "paragraph",
        text: "Команда показує коміти, створені до зазначеної дати.",
      },

      {
        type: "heading",
        text: "Пошук за автором",
      },

      {
        type: "code",
        language: "bash",
        code: 'git log --author="Andrii"',
      },

      {
        type: "paragraph",
        text: "Git покаже тільки ті коміти, автором яких є вказаний користувач.",
      },

      {
        type: "heading",
        text: "Пошук за коммітером",
      },

      {
        type: "code",
        language: "bash",
        code: 'git log --committer="Andrii"',
      },

      {
        type: "paragraph",
        text: "Автор змін і користувач, який створив коміт, можуть бути різними людьми.",
      },

      {
        type: "heading",
        text: "Пошук за текстом коміту",
      },

      {
        type: "paragraph",
        text: "Якщо потрібно знайти коміти за повідомленням, використовується параметр --grep.",
      },

      {
        type: "code",
        language: "bash",
        code: 'git log --grep="update"',
      },

      {
        type: "diagram",
        text: `git log

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
        text: "Параметри git log можна комбінувати. Наприклад: git log -5 --author='Andrii' покаже останні п'ять комітів конкретного автора.",
      },

      {
        type: "task",
        text: [
          "Перегляньте останні три коміти командою git log -3.",
          "Виведіть коміти, створені після певної дати.",
          "Знайдіть коміти певного автора.",
          "Знайдіть коміт за текстом у повідомленні за допомогою git log --grep.",
        ],
      },

      {
        type: "hint",
        text: "Для швидкого пошуку в історії найчастіше використовують параметри -n, --author та --grep.",
      },

      {
        type: "answer",
        text: `Відповідь:

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
        text: "Редагування останнього коміту в Git",
      },

      {
        type: "paragraph",
        text: "Під час роботи з Git іноді виникають ситуації, коли останній коміт був створений неправильно: наприклад, залишилось додати файл або було вказано неправильне повідомлення.",
      },

      {
        type: "paragraph",
        text: "Git дозволяє виправити останній коміт без створення нового окремого коміту. Для цього використовується параметр --amend.",
      },

      {
        type: "heading",
        text: "Команда git commit --amend",
      },

      {
        type: "code",
        language: "bash",
        code: "git commit --amend",
      },

      {
        type: "paragraph",
        text: "Команда замінює останній коміт новою версією, додаючи до нього поточні підготовлені зміни.",
      },

      {
        type: "heading",
        text: "Виправлення файлів у коміті",
      },

      {
        type: "paragraph",
        text: "Спочатку потрібно внести необхідні зміни у файли та додати їх до області підготовки.",
      },

      {
        type: "code",
        language: "bash",
        code: `git add .
git commit --amend`,
      },

      {
        type: "paragraph",
        text: "Після виконання команди Git відкриє редактор повідомлення коміту. Можна залишити старий текст або змінити його.",
      },

      {
        type: "heading",
        text: "Зміна тільки повідомлення коміту",
      },

      {
        type: "paragraph",
        text: "Якщо потрібно лише виправити назву коміту, можна використати параметр -m разом з --amend.",
      },

      {
        type: "code",
        language: "bash",
        code: 'git commit --amend -m "Нове повідомлення"',
      },

      {
        type: "diagram",
        text: `Неправильний коміт

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
        text: "Команда git commit --amend змінює тільки останній коміт. Старі коміти в історії не редагуються.",
      },

      {
        type: "heading",
        text: "Приклад",
      },

      {
        type: "paragraph",
        text: "Створили коміт із неправильною назвою:",
      },

      {
        type: "code",
        language: "bash",
        code: 'git commit -m "Fix bug"',
      },

      {
        type: "paragraph",
        text: "Після цього зрозуміли, що повідомлення потрібно змінити:",
      },

      {
        type: "code",
        language: "bash",
        code: 'git commit --amend -m "Fixed login bug"',
      },

      {
        type: "paragraph",
        text: "У результаті в історії залишиться один коміт із новим повідомленням.",
      },

      {
        type: "task",
        text: [
          "Створіть тестовий коміт із неправильним повідомленням.",
          "Внесіть зміни у файл.",
          "Додайте зміни командою git add.",
          "Виправте останній коміт за допомогою git commit --amend.",
          "Перевірте результат командою git log.",
        ],
      },

      {
        type: "hint",
        text: "Команда git commit --amend найчастіше використовується для виправлення останнього коміту перед відправкою у віддалений репозиторій.",
      },

      {
        type: "answer",
        text: `Відповідь:

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
        text: "Скасування індексації файлу в Git",
      },

      {
        type: "paragraph",
        text: "Іноді потрібно прибрати файл з області підготовки (Staging Area), але залишити всі внесені зміни у самому файлі.",
      },

      {
        type: "paragraph",
        text: "Для цього використовується команда git restore з параметром --staged.",
      },

      {
        type: "heading",
        text: "Команда git restore --staged",
      },

      {
        type: "code",
        language: "bash",
        code: "git restore --staged file.txt",
      },

      {
        type: "paragraph",
        text: "Після виконання команди файл буде видалений зі Staging Area, але зміни у ньому не втратяться.",
      },

      {
        type: "diagram",
        text: `Modified

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
        text: "Приклад",
      },

      {
        type: "paragraph",
        text: "Спочатку додаємо файл до області підготовки:",
      },

      {
        type: "code",
        language: "bash",
        code: "git add file.txt",
      },

      {
        type: "paragraph",
        text: "Перевіряємо стан репозиторію:",
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
  modified: file.txt`,
      },

      {
        type: "paragraph",
        text: "Тепер скасовуємо індексацію файлу:",
      },

      {
        type: "code",
        language: "bash",
        code: "git restore --staged file.txt",
      },

      {
        type: "paragraph",
        text: "Після цього Git покаже, що файл змінений, але не підготовлений до коміту:",
      },

      {
        type: "code",
        language: "text",
        code: `Changes not staged for commit:
  modified: file.txt`,
      },

      {
        type: "note",
        text: "git restore --staged не видаляє зміни з файлу. Він тільки прибирає файл із області підготовки.",
      },

      {
        type: "task",
        text: [
          "Змініть будь-який файл у вашому Git-репозиторії.",
          "Додайте файл до області підготовки командою git add.",
          "Перевірте статус командою git status.",
          "Скасуйте індексацію файлу командою git restore --staged.",
          "Перевірте, що файл залишився зміненим, але не підготовленим до коміту.",
        ],
      },

      {
        type: "hint",
        text: "Якщо потрібно тільки прибрати файл зі Staging Area, використовуйте git restore --staged. Дані файлу при цьому не змінюються.",
      },

      {
        type: "answer",
        text: `Відповідь:

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
        text: "Скасування змін у файлі в Git",
      },

      {
        type: "paragraph",
        text: "Під час роботи над проєктом іноді потрібно відмінити зміни у файлі та повернути його до останньої збереженої версії.",
      },

      {
        type: "paragraph",
        text: "Для цього використовується команда git restore. Вона замінює поточний файл версією з останнього коміту.",
      },

      {
        type: "heading",
        text: "Команда git restore",
      },

      {
        type: "code",
        language: "bash",
        code: "git restore file.txt",
      },

      {
        type: "paragraph",
        text: "Після виконання команди всі незбережені зміни у файлі будуть видалені, а файл повернеться до стану останнього коміту.",
      },

      {
        type: "heading",
        text: "Приклад",
      },

      {
        type: "paragraph",
        text: "Спочатку внесемо зміни у файл file.txt:",
      },

      {
        type: "code",
        language: "bash",
        code: "git status",
      },

      {
        type: "code",
        language: "text",
        code: `Changes not staged for commit:
  modified: file.txt`,
      },

      {
        type: "paragraph",
        text: "Тепер скасуємо всі зміни у файлі:",
      },

      {
        type: "code",
        language: "bash",
        code: "git restore file.txt",
      },

      {
        type: "paragraph",
        text: "Після повторної перевірки статусу Git покаже, що змін немає:",
      },

      {
        type: "code",
        language: "bash",
        code: "git status",
      },

      {
        type: "code",
        language: "text",
        code: "nothing to commit, working tree clean",
      },

      {
        type: "diagram",
        text: `Committed

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
        text: "Будьте обережні з git restore. Команда видаляє всі незбережені зміни у файлі, і повернути їх після виконання буде складно.",
      },

      {
        type: "task",
        text: [
          "Відкрийте будь-який файл у вашому Git-репозиторії.",
          "Внесіть зміни у цей файл.",
          "Перевірте стан файлу командою git status.",
          "Поверніть файл до попереднього стану командою git restore.",
          "Перевірте, що Git більше не показує змін.",
        ],
      },

      {
        type: "hint",
        text: "Перед використанням git restore переконайтеся, що у файлі немає важливих незбережених змін.",
      },

      {
        type: "answer",
        text: `Відповідь:

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
        text: "Псевдоніми команд у Git",
      },

      {
        type: "paragraph",
        text: "У Git можна створювати власні короткі назви для команд. Це дозволяє швидше виконувати часто використовувані команди.",
      },

      {
        type: "paragraph",
        text: "Для створення псевдоніма використовується команда git config з параметром --global та ключем alias.",
      },

      {
        type: "heading",
        text: "Створення псевдоніма",
      },

      {
        type: "code",
        language: "bash",
        code: "git config --global alias.com commit",
      },

      {
        type: "paragraph",
        text: "Після цього замість git commit можна використовувати коротшу команду:",
      },

      {
        type: "code",
        language: "bash",
        code: "git com",
      },

      {
        type: "heading",
        text: "Приклад",
      },

      {
        type: "paragraph",
        text: "Створимо псевдонім для перегляду історії комітів. Команду git log замінимо на git lg:",
      },

      {
        type: "code",
        language: "bash",
        code: "git config --global alias.lg log",
      },

      {
        type: "paragraph",
        text: "Тепер для перегляду історії комітів можна використовувати:",
      },

      {
        type: "code",
        language: "bash",
        code: "git lg",
      },

      {
        type: "diagram",
        text: `Звичайна команда

git log

      │
      │ alias.lg
      ▼

Псевдонім

git lg`,
      },

      {
        type: "heading",
        text: "Перегляд створених псевдонімів",
      },

      {
        type: "code",
        language: "bash",
        code: "git config --global --get-regexp alias",
      },

      {
        type: "note",
        text: "Параметр --global створює псевдонім для всіх Git-репозиторіїв користувача.",
      },

      {
        type: "task",
        text: [
          "Створіть псевдонім для команди git log.",
          "Назвіть псевдонім будь-яким коротким ім'ям.",
          "Викличте створений псевдонім у терміналі.",
          "Перевірте, що команда показує історію комітів.",
        ],
      },

      {
        type: "hint",
        text: "Наприклад: git config --global alias.lg log створить скорочення git lg для команди git log.",
      },

      {
        type: "answer",
        text: `Відповідь:

Створити псевдонім:

git config --global alias.lg log


Використати:

git lg

У терміналі повинна відобразитися історія комітів.`,
      },
    ],
  },
];
