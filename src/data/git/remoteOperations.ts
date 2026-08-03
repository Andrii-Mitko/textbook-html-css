import type { Lesson } from "../types";

export const remoteOperations: Lesson[] = [
  {
    id: "remote-operations-intro",
    title: "Основні операції з віддаленими репозиторіями Git.",
    description: "Вступ",
    content: [
      {
        type: "heading",
        text: "Операції з віддаленими репозиторіями в Git",
      },

      {
        type: "paragraph",
        text: "У цьому розділі ми почнемо вивчати роботу з віддаленими репозиторіями Git.",
      },

      {
        type: "paragraph",
        text: "Віддалений репозиторій використовується для обміну даними між локальним комп'ютером та сервером, наприклад GitHub.",
      },

      {
        type: "heading",
        text: "Основні операції з віддаленими репозиторіями",
      },

      {
        type: "paragraph",
        text: "Під час роботи з віддаленими репозиторіями найчастіше потрібно виконувати дві основні дії: відправляти свої зміни та отримувати зміни інших учасників проєкту.",
      },

      {
        type: "list",
        items: [
          "Відправлення змін у віддалений репозиторій.",
          "Отримання нових змін із віддаленого репозиторію.",
          "Синхронізація локального та віддаленого репозиторіїв.",
          "Робота з віддаленими гілками.",
        ],
      },

      {
        type: "heading",
        text: "Відправлення даних у репозиторій",
      },

      {
        type: "paragraph",
        text: "Коли ви створили нові коміти у локальному репозиторії, їх можна відправити на GitHub. Для цього використовується команда git push.",
      },

      {
        type: "code",
        language: "bash",
        code: "git push",
      },

      {
        type: "paragraph",
        text: "Команда git push передає локальні коміти у віддалений репозиторій.",
      },

      {
        type: "heading",
        text: "Отримання змін із репозиторію",
      },

      {
        type: "paragraph",
        text: "Якщо у віддаленому репозиторії з'явилися нові зміни, їх можна отримати у локальний репозиторій.",
      },

      {
        type: "code",
        language: "bash",
        code: "git pull",
      },

      {
        type: "paragraph",
        text: "Команда git pull завантажує нові зміни з віддаленого репозиторію та об'єднує їх із локальною гілкою.",
      },

      {
        type: "diagram",
        text: `Локальний репозиторій

        │
        │ git push
        ▼

Віддалений репозиторій GitHub


Віддалений репозиторій GitHub

        │
        │ git pull
        ▼

Локальний репозиторій`,
      },

      {
        type: "note",
        text: "Перед виконанням git push необхідно мати коміти у локальному репозиторії. Git не відправляє незбережені зміни автоматично.",
      },

      {
        type: "task",
        text: [
          "Згадайте, для чого використовується віддалений репозиторій.",
          "Назвіть команду для відправлення змін у GitHub.",
          "Назвіть команду для отримання змін із GitHub.",
        ],
      },

      {
        type: "hint",
        text: "Пригадайте попередні уроки: git push використовується для відправлення змін, а git pull — для отримання змін із віддаленого репозиторію.",
      },

      {
        type: "answer",
        text: `Приклад відповіді:

Віддалений репозиторій використовується для обміну кодом між розробниками.

Відправлення змін:

git push


Отримання змін:

git pull`,
      },
    ],
  },
  {
    id: "push",
    title: "Відправлення даних у репозиторій",
    description:
      "Відправлення локальних комітів у віддалений репозиторій за допомогою команди git push.",
    content: [
      {
        type: "heading",
        text: "Відправлення даних у віддалений репозиторій у Git",
      },

      {
        type: "paragraph",
        text: "Після підключення віддаленого репозиторію можна відправляти свої локальні коміти на GitHub.",
      },

      {
        type: "paragraph",
        text: "Для цього використовується команда git push. Вона передає коміти з локального репозиторію у віддалений репозиторій.",
      },

      {
        type: "heading",
        text: "Підготовка файлу до коміту",
      },

      {
        type: "paragraph",
        text: "Спочатку створимо новий файл у проєкті та додамо його до області підготовки Git.",
      },

      {
        type: "code",
        language: "bash",
        code: "git add test.txt",
      },

      {
        type: "heading",
        text: "Створення коміту",
      },

      {
        type: "paragraph",
        text: "Після додавання файлу потрібно створити коміт, який збереже зміни в локальній історії Git.",
      },

      {
        type: "code",
        language: "bash",
        code: 'git commit -m "first commit"',
      },

      {
        type: "heading",
        text: "Відправлення коміту у GitHub",
      },

      {
        type: "paragraph",
        text: "Тепер можна відправити створений коміт у віддалений репозиторій за допомогою команди git push.",
      },

      {
        type: "code",
        language: "bash",
        code: "git push -u origin main",
      },

      {
        type: "paragraph",
        text: "У команді origin — це ім'я віддаленого репозиторію, а main — назва гілки, яку ми відправляємо.",
      },

      {
        type: "paragraph",
        text: "Параметр -u встановлює зв'язок між локальною гілкою та віддаленою гілкою. Після цього у майбутньому достатньо буде використовувати команду git push без додаткових параметрів.",
      },

      {
        type: "heading",
        text: "Авторизація GitHub",
      },

      {
        type: "paragraph",
        text: "Під час першого відправлення Git може попросити ввести логін GitHub та токен доступу.",
      },

      {
        type: "paragraph",
        text: "Замість звичайного пароля потрібно використовувати GitHub токен, який був створений у попередньому уроці.",
      },

      {
        type: "diagram",
        text: `Локальний репозиторій

        │
        │ git commit
        ▼

Історія комітів

        │
        │ git push
        ▼

GitHub`,
      },

      {
        type: "heading",
        text: "Перевірка результату",
      },

      {
        type: "paragraph",
        text: "Після успішного виконання git push відкрийте свій репозиторій на GitHub. У ньому з'являться відправлені файли та коміти.",
      },

      {
        type: "note",
        text: "Команда git push відправляє тільки створені коміти. Якщо файл змінений, але не був доданий через git add та не потрапив у коміт, він не буде відправлений.",
      },

      {
        type: "heading",
        text: "Приклад повного процесу",
      },

      {
        type: "code",
        language: "bash",
        code: `Створити файл:

test.txt


Додати файл:

git add test.txt


Створити коміт:

git commit -m "first commit"


Відправити у GitHub:

git push -u origin main`,
      },

      {
        type: "heading",
        text: "Завдання №1",
      },

      {
        type: "task",
        text: [
          "Створіть новий файл у своєму проєкті.",
          "Додайте файл командою git add.",
          "Створіть перший коміт.",
          "Відправте коміт у GitHub за допомогою git push.",
          "Перевірте зміни у своєму репозиторії GitHub.",
        ],
      },

      {
        type: "hint",
        text: "Послідовність команд: git add → git commit → git push. Після відправлення відкрийте сторінку свого репозиторію GitHub та перевірте нові файли.",
      },

      {
        type: "answer",
        text: `Приклад виконання:

Створити файл:

test.txt


Додати:

git add test.txt


Створити коміт:

git commit -m "first commit"


Відправити:

git push -u origin main


Після цього файл test.txt з'явиться у репозиторії GitHub.`,
      },

      {
        type: "heading",
        text: "Завдання №2",
      },

      {
        type: "task",
        text: [
          "Внесіть зміни у файли проєкту.",
          "Створіть декілька нових комітів.",
          "Відправте зміни у віддалений репозиторій.",
          "Перевірте історію змін на GitHub.",
        ],
      },

      {
        type: "hint",
        text: "Після першого налаштування зв'язку з GitHub достатньо виконувати git add, git commit та git push.",
      },

      {
        type: "answer",
        text: `Приклад виконання:

Додати зміни:

git add .


Створити коміт:

git commit -m "Update project"


Відправити зміни:

git push


Перевірити результат у GitHub.`,
      },
    ],
  },
  {
    id: "push-short",
    title: "Коротка команда відправлення даних",
    description:
      "Використання скороченої команди git push для відправлення поточної гілки.",
    content: [
      {
        type: "heading",
        text: "Коротка команда відправлення даних у Git",
      },

      {
        type: "paragraph",
        text: "У попередньому уроці ми використовували повну команду для відправлення змін у віддалений репозиторій:",
      },

      {
        type: "code",
        language: "bash",
        code: "git push -u origin main",
      },

      {
        type: "paragraph",
        text: "Параметр -u створює зв'язок між локальною гілкою та віддаленою гілкою. Після першого відправлення Git запам'ятовує цей зв'язок.",
      },

      {
        type: "heading",
        text: "Скорочена команда git push",
      },

      {
        type: "paragraph",
        text: "Після налаштування зв'язку можна використовувати коротку форму команди без вказування імені репозиторію та гілки.",
      },

      {
        type: "code",
        language: "bash",
        code: "git push",
      },

      {
        type: "paragraph",
        text: "Команда git push автоматично визначає, яку локальну гілку потрібно відправити, використовуючи раніше встановлений зв'язок.",
      },

      {
        type: "heading",
        text: "Приклад роботи",
      },

      {
        type: "code",
        language: "bash",
        code: `Перший раз:

git push -u origin main


Наступні рази:

git push`,
      },

      {
        type: "paragraph",
        text: "Якщо ви працюєте в іншій гілці та для неї ще не встановлено зв'язок із віддаленим репозиторієм, потрібно знову використати параметр -u.",
      },

      {
        type: "code",
        language: "bash",
        code: "git push -u origin feature",
      },

      {
        type: "diagram",
        text: `Перше відправлення

git push -u origin main

        │
        ▼

Створення зв'язку


Наступні відправлення

git push

        │
        ▼

Відправлення поточної гілки`,
      },

      {
        type: "note",
        text: "Команда git push без параметрів працює тільки для гілок, у яких вже налаштований зв'язок із віддаленим репозиторієм.",
      },

      {
        type: "heading",
        text: "Завдання №1",
      },

      {
        type: "task",
        text: [
          "Внесіть зміни у свій проєкт.",
          "Створіть новий коміт.",
          "Виконайте коротку команду git push.",
          "Перевірте зміни у GitHub.",
        ],
      },

      {
        type: "hint",
        text: "Якщо ви вже виконували git push -u origin main раніше, зараз достатньо виконати тільки git push.",
      },

      {
        type: "answer",
        text: `Приклад виконання:

Додати зміни:

git add .


Створити коміт:

git commit -m "Update project"


Відправити:

git push


Після цього зміни з'являться у репозиторії GitHub.`,
      },

      {
        type: "heading",
        text: "Завдання №2",
      },

      {
        type: "task",
        text: [
          "Перейдіть у іншу гілку.",
          "Внесіть зміни у файли.",
          "Створіть коміт.",
          "Виконайте коротку команду git push.",
          "Перевірте, яка гілка з'явилася у GitHub.",
        ],
      },

      {
        type: "hint",
        text: "Якщо Git повідомить, що для гілки немає зв'язку з віддаленим репозиторієм, використайте git push -u origin назва-гілки.",
      },

      {
        type: "answer",
        text: `Приклад виконання:

Створити гілку:

git switch -c feature


Додати зміни:

git add .


Створити коміт:

git commit -m "Add feature"


Перше відправлення гілки:

git push -u origin feature


Після цього наступного разу можна використовувати:

git push`,
      },
    ],
  },
  {
    id: "push-other-branch",
    title: "Відправлення в іншу гілку",
    description:
      "Відправлення локальної гілки у віддалену гілку з іншою назвою за допомогою git push.",
    content: [
      {
        type: "heading",
        text: "Відправлення у іншу гілку в Git",
      },

      {
        type: "paragraph",
        text: "У Git локальна гілка та віддалена гілка можуть мати різні назви. Під час відправлення змін можна вказати, у яку саме віддалену гілку потрібно передати дані.",
      },

      {
        type: "paragraph",
        text: "Для цього у команді git push спочатку вказується назва локальної гілки, а після двокрапки — назва віддаленої гілки.",
      },

      {
        type: "heading",
        text: "Формат команди",
      },

      {
        type: "code",
        language: "bash",
        code: "git push origin local_branch:remote_branch",
      },

      {
        type: "paragraph",
        text: "У цій команді local_branch — це гілка на вашому комп'ютері, а remote_branch — гілка, яка буде створена або оновлена у віддаленому репозиторії.",
      },

      {
        type: "heading",
        text: "Приклад",
      },

      {
        type: "code",
        language: "bash",
        code: "git push origin main:production",
      },

      {
        type: "paragraph",
        text: "У цьому прикладі дані з локальної гілки main будуть відправлені у віддалену гілку production.",
      },

      {
        type: "diagram",
        text: `Локальний репозиторій

main

 │
 │ git push origin main:production
 ▼

Віддалений репозиторій

production`,
      },

      {
        type: "heading",
        text: "Коли це може знадобитися",
      },

      {
        type: "list",
        items: [
          "Коли потрібно мати різні назви локальних та віддалених гілок.",
          "Під час розгортання проєкту на сервері.",
          "Під час роботи з різними середовищами: development, test, production.",
        ],
      },

      {
        type: "heading",
        text: "Приклад із GitHub",
      },

      {
        type: "code",
        language: "bash",
        code: `Є локальна гілка:

git branch

* feature


Відправити її у гілку develop:

git push origin feature:develop`,
      },

      {
        type: "paragraph",
        text: "Після виконання команди у GitHub з'явиться гілка develop з даними з локальної гілки feature.",
      },

      {
        type: "note",
        text: "Команда git push origin local_branch:remote_branch не перейменовує локальну гілку. Вона лише копіює її зміни у вказану віддалену гілку.",
      },

      {
        type: "task",
        text: [
          "Створіть нову локальну гілку.",
          "Зробіть у ній декілька змін.",
          "Створіть коміт.",
          "Відправте цю гілку у віддалену гілку з іншою назвою.",
          "Перевірте результат у GitHub.",
        ],
      },

      {
        type: "hint",
        text: "У команді git push після двокрапки вкажіть назву нової віддаленої гілки. Наприклад: git push origin feature:test.",
      },

      {
        type: "answer",
        text: `Приклад виконання:

Створити локальну гілку:

git switch -c feature


Створити коміт:

git add .
git commit -m "Add feature"


Відправити у іншу віддалену гілку:

git push origin feature:develop


У GitHub з'явиться гілка develop із кодом із локальної гілки feature.`,
      },
    ],
  },
  {
    id: "fetch",
    title: "Отримання змін із репозиторію",
    description:
      "Отримання змін із віддаленого репозиторію за допомогою команд git fetch та git merge.",
    content: [
      {
        type: "heading",
        text: "Отримання змін із віддаленого репозиторію в Git",
      },

      {
        type: "paragraph",
        text: "У попередніх уроках ми навчилися відправляти свої зміни у віддалений репозиторій за допомогою команди git push.",
      },

      {
        type: "paragraph",
        text: "Але у реальній роботі часто виникає протилежна ситуація: у віддаленому репозиторії з'явилися нові зміни, які потрібно отримати у свій локальний проєкт.",
      },

      {
        type: "paragraph",
        text: "Це може відбуватися, коли над одним проєктом працюють декілька розробників або коли ви працюєте з різних комп'ютерів.",
      },

      {
        type: "heading",
        text: "Команда git fetch",
      },

      {
        type: "paragraph",
        text: "Для отримання інформації про нові зміни у віддаленому репозиторії використовується команда git fetch.",
      },

      {
        type: "code",
        language: "bash",
        code: "git fetch origin",
      },

      {
        type: "paragraph",
        text: "Команда git fetch завантажує нові коміти з віддаленого репозиторію, але не змінює поточні файли у вашій робочій папці.",
      },

      {
        type: "heading",
        text: "Куди потрапляють отримані зміни",
      },

      {
        type: "paragraph",
        text: "Після виконання git fetch зміни зберігаються у спеціальній віддаленій гілці.",
      },

      {
        type: "paragraph",
        text: "Назва такої гілки складається з імені віддаленого репозиторію та назви гілки через символ /.",
      },

      {
        type: "code",
        language: "bash",
        code: "origin/main",
      },

      {
        type: "paragraph",
        text: "Наприклад, origin/main — це копія стану гілки main із віддаленого репозиторію origin.",
      },

      {
        type: "heading",
        text: "Об'єднання змін із локальною гілкою",
      },

      {
        type: "paragraph",
        text: "Після отримання змін через git fetch потрібно об'єднати їх зі своєю локальною гілкою.",
      },

      {
        type: "code",
        language: "bash",
        code: "git merge origin/main",
      },

      {
        type: "paragraph",
        text: "Команда git merge додає отримані зміни до поточної локальної гілки.",
      },

      {
        type: "diagram",
        text: `GitHub

origin/main

        │
        │ git fetch origin
        ▼

Локальна копія

origin/main

        │
        │ git merge origin/main
        ▼

Поточна гілка main`,
      },

      {
        type: "heading",
        text: "Приклад роботи",
      },

      {
        type: "code",
        language: "bash",
        code: `Отримати зміни:

git fetch origin


Перейти у main:

git switch main


Об'єднати зміни:

git merge origin/main`,
      },

      {
        type: "heading",
        text: "Різниця між fetch та pull",
      },

      {
        type: "paragraph",
        text: "Команда git fetch тільки завантажує інформацію про зміни. Вона не змінює ваші файли автоматично.",
      },

      {
        type: "paragraph",
        text: "Команда git pull виконує отримання змін та їх об'єднання автоматично.",
      },

      {
        type: "code",
        language: "bash",
        code: "git pull = git fetch + git merge",
      },

      {
        type: "note",
        text: "Команда git fetch є безпечним способом перевірити нові зміни перед їх об'єднанням у свій код.",
      },

      {
        type: "task",
        text: [
          "Відкрийте свій репозиторій на GitHub.",
          "Змініть будь-який файл через веб-інтерфейс GitHub.",
          "Виконайте git fetch origin у локальному проєкті.",
          "Об'єднайте отримані зміни командою git merge origin/main.",
          "Перевірте результат у файлах проєкту.",
        ],
      },

      {
        type: "hint",
        text: "Після git fetch зміни ще не з'являться у файлах. Спочатку потрібно виконати git merge origin/main.",
      },

      {
        type: "answer",
        text: `Приклад виконання:

Отримати зміни:

git fetch origin


Перейти у головну гілку:

git switch main


Об'єднати зміни:

git merge origin/main


Після цього зміни з GitHub з'являться у локальному проєкті.`,
      },
    ],
  },
  {
    id: "pull",
    title: "Отримання змін із одночасним злиттям",
    description:
      "Отримання змін із віддаленого репозиторію та автоматичне об'єднання їх із локальною гілкою за допомогою git pull.",
    content: [
      {
        type: "heading",
        text: "Отримання змін із віддаленого репозиторію в Git",
      },

      {
        type: "paragraph",
        text: "У попередньому уроці ми розглянули команду git fetch, яка отримує зміни з віддаленого репозиторію, але не додає їх автоматично до поточної гілки.",
      },

      {
        type: "paragraph",
        text: "Це означає, що після git fetch потрібно додатково виконувати git merge для об'єднання змін.",
      },

      {
        type: "heading",
        text: "Команда git pull",
      },

      {
        type: "paragraph",
        text: "Git має команду, яка виконує отримання змін та їх об'єднання автоматично. Для цього використовується git pull.",
      },

      {
        type: "code",
        language: "bash",
        code: "git pull origin main",
      },

      {
        type: "paragraph",
        text: "У команді origin — це ім'я віддаленого репозиторію, а main — гілка, з якої потрібно отримати зміни.",
      },

      {
        type: "heading",
        text: "Як працює git pull",
      },

      {
        type: "paragraph",
        text: "Команда git pull фактично поєднує дві команди: спочатку отримує нові дані з віддаленого репозиторію, а потім об'єднує їх із поточною локальною гілкою.",
      },

      {
        type: "code",
        language: "bash",
        code: "git pull = git fetch + git merge",
      },

      {
        type: "diagram",
        text: `GitHub

origin/main

        │
        │ git pull origin main
        ▼

git fetch

        │
        ▼

git merge origin/main

        │
        ▼

Локальна гілка main`,
      },

      {
        type: "heading",
        text: "Приклад роботи",
      },

      {
        type: "paragraph",
        text: "Уявимо, що інший розробник змінив файл на GitHub. Щоб отримати ці зміни у свій проєкт, достатньо виконати:",
      },

      {
        type: "code",
        language: "bash",
        code: "git pull origin main",
      },

      {
        type: "paragraph",
        text: "Після успішного виконання команди нові зміни з GitHub з'являться у ваших локальних файлах.",
      },

      {
        type: "heading",
        text: "Різниця між git fetch та git pull",
      },

      {
        type: "table",
        headers: ["Команда", "Що робить"],
        rows: [
          ["git fetch", "Отримує зміни, але не об'єднує їх автоматично."],
          ["git pull", "Отримує зміни та одразу об'єднує їх."],
        ],
      },

      {
        type: "note",
        text: "Команда git pull зручна для швидкого отримання змін. Якщо потрібно спочатку перевірити зміни перед об'єднанням, краще використовувати git fetch.",
      },

      {
        type: "heading",
        text: "Можливі конфлікти",
      },

      {
        type: "paragraph",
        text: "Якщо у вас і у віддаленому репозиторії змінено один і той самий фрагмент файлу, Git може створити конфлікт злиття.",
      },

      {
        type: "paragraph",
        text: "У такому випадку потрібно вручну виправити конфлікт, додати файл та створити новий коміт.",
      },

      {
        type: "task",
        text: [
          "Відкрийте свій репозиторій GitHub.",
          "Змініть будь-який файл через веб-інтерфейс GitHub.",
          "Отримайте зміни у локальний репозиторій за допомогою git pull.",
          "Перевірте, що зміни з'явилися у ваших файлах.",
        ],
      },

      {
        type: "hint",
        text: "Для отримання змін та автоматичного злиття використовуйте команду git pull origin main.",
      },

      {
        type: "answer",
        text: `Приклад виконання:

Отримати зміни:

git pull origin main


Після виконання команди Git:

1. Завантажить нові коміти з GitHub.
2. Об'єднає їх із локальною гілкою.
3. Оновить файли проєкту.`,
      },
    ],
  },
  {
    id: "pull-short",
    title: "Коротка команда pull",
    description:
      "Використання скороченої команди git pull для отримання змін із віддаленого репозиторію.",
    content: [
      {
        type: "heading",
        text: "Коротка команда отримання змін у Git",
      },

      {
        type: "paragraph",
        text: "У попередньому уроці ми використовували повну форму команди для отримання змін із віддаленого репозиторію:",
      },

      {
        type: "code",
        language: "bash",
        code: "git pull origin main",
      },

      {
        type: "paragraph",
        text: "Після першого налаштування зв'язку між локальною та віддаленою гілкою Git запам'ятовує, звідки потрібно отримувати зміни.",
      },

      {
        type: "heading",
        text: "Скорочена команда git pull",
      },

      {
        type: "paragraph",
        text: "Після цього можна використовувати коротку форму команди без вказування репозиторію та гілки.",
      },

      {
        type: "code",
        language: "bash",
        code: "git pull",
      },

      {
        type: "paragraph",
        text: "Команда git pull автоматично визначає пов'язаний віддалений репозиторій та гілку, з якої потрібно отримати зміни.",
      },

      {
        type: "heading",
        text: "Приклад роботи",
      },

      {
        type: "code",
        language: "bash",
        code: `Перше отримання:

git pull origin main


Наступні рази:

git pull`,
      },

      {
        type: "paragraph",
        text: "Коротка команда працює завдяки налаштованому зв'язку між локальною гілкою та віддаленою гілкою.",
      },

      {
        type: "heading",
        text: "Перевірка зв'язку гілок",
      },

      {
        type: "paragraph",
        text: "Інформацію про зв'язок локальної гілки з віддаленою можна переглянути за допомогою команди git branch.",
      },

      {
        type: "code",
        language: "bash",
        code: "git branch -vv",
      },

      {
        type: "paragraph",
        text: "У результаті Git покаже, яка локальна гілка пов'язана з віддаленою гілкою.",
      },

      {
        type: "diagram",
        text: `Локальна гілка main

        │
        │ upstream
        ▼

origin/main


git pull

        │
        ▼

Отримання змін`,
      },

      {
        type: "note",
        text: "Команда git pull без параметрів працює тільки для гілок, у яких вже налаштовано зв'язок із віддаленим репозиторієм.",
      },

      {
        type: "task",
        text: [
          "Внесіть зміни у репозиторій через GitHub.",
          "Перейдіть у локальний проєкт.",
          "Отримайте зміни короткою командою git pull.",
          "Перевірте оновлення у файлах.",
        ],
      },

      {
        type: "hint",
        text: "Якщо раніше ви виконували git pull origin main, тепер достатньо виконати тільки git pull.",
      },

      {
        type: "answer",
        text: `Приклад виконання:

Отримати зміни:

git pull


Git автоматично:

1. Знайде пов'язаний віддалений репозиторій.
2. Завантажить нові зміни.
3. Об'єднає їх із поточною гілкою.`,
      },
    ],
  },
  {
    id: "push-pull-info",
    title: "Інформація про короткі команди push та pull",
    description:
      "Перегляд зв'язку локальних та віддалених гілок для команд git push і git pull.",
    content: [
      {
        type: "heading",
        text: "Інформація про короткі команди в Git",
      },

      {
        type: "paragraph",
        text: "У попередніх уроках ми розглянули короткі форми команд git push та git pull.",
      },

      {
        type: "paragraph",
        text: "Після першого налаштування зв'язку Git запам'ятовує, з яким віддаленим репозиторієм та гілкою потрібно працювати.",
      },

      {
        type: "heading",
        text: "Перегляд зв'язку локальних та віддалених гілок",
      },

      {
        type: "paragraph",
        text: "Щоб переглянути інформацію про налаштовані зв'язки, використовується команда git remote show.",
      },

      {
        type: "code",
        language: "bash",
        code: "git remote show origin",
      },

      {
        type: "paragraph",
        text: "У результаті Git покаже інформацію про віддалений репозиторій, а також локальні гілки, які з ним пов'язані.",
      },

      {
        type: "heading",
        text: "Інформація про git pull",
      },

      {
        type: "code",
        language: "bash",
        code: `Local branch configured for 'git pull':
  main merges with remote main`,
      },

      {
        type: "paragraph",
        text: "Це означає, що локальна гілка main отримує зміни з віддаленої гілки main.",
      },

      {
        type: "heading",
        text: "Інформація про git push",
      },

      {
        type: "code",
        language: "bash",
        code: `Local ref configured for 'git push':
  main pushes to main`,
      },

      {
        type: "paragraph",
        text: "Це означає, що коміти з локальної гілки main будуть відправлятися у віддалену гілку main.",
      },

      {
        type: "diagram",
        text: `Локальна гілка main

        │
        │ git push
        ▼

Віддалена гілка origin/main


Віддалена гілка origin/main

        │
        │ git pull
        ▼

Локальна гілка main`,
      },

      {
        type: "heading",
        text: "Приклад результату",
      },

      {
        type: "code",
        language: "bash",
        code: `git remote show origin


Local branch configured for 'git pull':
  main merges with remote main


Local ref configured for 'git push':
  main pushes to main`,
      },

      {
        type: "note",
        text: "Якщо локальна гілка не має зв'язку з віддаленою, Git не зможе виконати короткі команди git push та git pull без додаткових параметрів.",
      },

      {
        type: "task",
        text: [
          "Виконайте команду git remote show origin.",
          "Знайдіть інформацію про git pull.",
          "Знайдіть інформацію про git push.",
          "Перевірте, з якою віддаленою гілкою пов'язана ваша локальна гілка.",
        ],
      },

      {
        type: "hint",
        text: "Команда git remote show origin покаже всі налаштування віддаленого репозиторію, включаючи зв'язки гілок для push та pull.",
      },

      {
        type: "answer",
        text: `Приклад виконання:

Команда:

git remote show origin


Результат:

Local branch configured for 'git pull':
  main merges with remote main


Local ref configured for 'git push':
  main pushes to main


Це означає:

git push → main → origin/main

git pull ← origin/main → main`,
      },
    ],
  },
  {
    id: "delete-remote-branch",
    title: "Видалення віддалених гілок",
    description:
      "Видалення непотрібних гілок у віддаленому репозиторії за допомогою git push --delete.",
    content: [
      {
        type: "heading",
        text: "Видалення віддалених гілок у Git",
      },

      {
        type: "paragraph",
        text: "Під час роботи над проєктом часто створюється багато тимчасових гілок. Після завершення роботи деякі з них більше не потрібні, тому їх можна видалити.",
      },

      {
        type: "paragraph",
        text: "Важливо розуміти, що локальна гілка та віддалена гілка — це різні об'єкти. Видалення однієї з них не видаляє іншу автоматично.",
      },

      {
        type: "heading",
        text: "Команда видалення віддаленої гілки",
      },

      {
        type: "paragraph",
        text: "Для видалення гілки у віддаленому репозиторії використовується команда git push з параметром --delete.",
      },

      {
        type: "code",
        language: "bash",
        code: "git push origin --delete branch_name",
      },

      {
        type: "paragraph",
        text: "origin — це ім'я віддаленого репозиторію, а branch_name — назва гілки, яку потрібно видалити.",
      },

      {
        type: "heading",
        text: "Приклад",
      },

      {
        type: "code",
        language: "bash",
        code: "git push origin --delete test",
      },

      {
        type: "paragraph",
        text: "У цьому прикладі з віддаленого репозиторію origin буде видалена гілка test.",
      },

      {
        type: "heading",
        text: "Перевірка результату",
      },

      {
        type: "paragraph",
        text: "Після видалення можна перевірити список віддалених гілок за допомогою команди git branch -r.",
      },

      {
        type: "code",
        language: "bash",
        code: "git branch -r",
      },

      {
        type: "paragraph",
        text: "Якщо видалена гілка більше не відображається у списку, її успішно видалено з віддаленого репозиторію.",
      },

      {
        type: "heading",
        text: "Видалення локальної та віддаленої гілки",
      },

      {
        type: "paragraph",
        text: "Якщо потрібно видалити і локальну гілку, це робиться окремою командою.",
      },

      {
        type: "code",
        language: "bash",
        code: `Видалити віддалену гілку:

git push origin --delete test


Видалити локальну гілку:

git branch -d test`,
      },

      {
        type: "diagram",
        text: `До видалення:

Локальна гілка

test

        │
        │ push
        ▼

GitHub

test


Видалення:

git push origin --delete test


Після видалення:

Локальна гілка

test


GitHub

(гілки test немає)`,
      },

      {
        type: "note",
        text: "Команда git push --delete видаляє тільки віддалену гілку. Локальна гілка на вашому комп'ютері залишиться без змін.",
      },

      {
        type: "task",
        text: [
          "Створіть тестову гілку у своєму репозиторії.",
          "Відправте її у GitHub.",
          "Перевірте, що гілка з'явилася у віддаленому репозиторії.",
          "Видаліть віддалену гілку командою git push --delete.",
          "Перевірте результат у GitHub.",
        ],
      },

      {
        type: "hint",
        text: "Для видалення віддаленої гілки потрібно вказати її назву після параметра --delete. Наприклад: git push origin --delete test.",
      },

      {
        type: "answer",
        text: `Приклад виконання:

Створити гілку:

git switch -c test


Відправити у GitHub:

git push -u origin test


Видалити віддалену гілку:

git push origin --delete test


Перевірити:

git branch -r`,
      },
    ],
  },
  {
    id: "clone",
    title: "Клонування репозиторію",
    description:
      "Клонування віддаленого репозиторію GitHub на локальний комп'ютер за допомогою команди git clone.",
    content: [
      {
        type: "heading",
        text: "Клонування віддаленого репозиторію Git",
      },

      {
        type: "paragraph",
        text: "Проєкти, які розміщені на GitHub, можна скопіювати на свій комп'ютер. Такий процес називається клонуванням репозиторію.",
      },

      {
        type: "paragraph",
        text: "Після клонування ви отримуєте повну копію проєкту разом з файлами, історією комітів та налаштуваннями Git.",
      },

      {
        type: "paragraph",
        text: "Клонувати можна як власний репозиторій, так і чужий відкритий проєкт. Після цього можна працювати з кодом локально та створювати власні зміни.",
      },

      {
        type: "heading",
        text: "Команда git clone",
      },

      {
        type: "paragraph",
        text: "Для клонування використовується команда git clone, після якої вказується посилання на віддалений репозиторій.",
      },

      {
        type: "code",
        language: "bash",
        code: "git clone https://github.com/user/project.git",
      },

      {
        type: "paragraph",
        text: "Git завантажить файли проєкту, створить локальний репозиторій та налаштує зв'язок із віддаленим репозиторієм.",
      },

      {
        type: "heading",
        text: "Що відбувається під час клонування",
      },

      {
        type: "list",
        items: [
          "Створюється папка з назвою проєкту.",
          "Ініціалізується папка .git.",
          "Копіюються всі файли проєкту.",
          "Завантажується історія комітів.",
          "Створюється зв'язок із віддаленим репозиторієм origin.",
        ],
      },

      {
        type: "diagram",
        text: `GitHub

Репозиторій project

        │
        │ git clone
        ▼

Локальний комп'ютер

project/

 ├── файли проєкту
 └── .git`,
      },

      {
        type: "heading",
        text: "Клонування з іншою назвою папки",
      },

      {
        type: "paragraph",
        text: "За замовчуванням Git створює папку з назвою репозиторію. Якщо потрібно використати іншу назву, її можна вказати в кінці команди.",
      },

      {
        type: "code",
        language: "bash",
        code: "git clone https://github.com/user/project.git my-project",
      },

      {
        type: "paragraph",
        text: "У цьому прикладі репозиторій project буде скопійований у папку my-project.",
      },

      {
        type: "heading",
        text: "Перевірка після клонування",
      },

      {
        type: "paragraph",
        text: "Після клонування можна перейти у створену папку та перевірити налаштування віддаленого репозиторію.",
      },

      {
        type: "code",
        language: "bash",
        code: `cd my-project

git remote -v`,
      },

      {
        type: "paragraph",
        text: "Команда git remote -v покаже адресу GitHub-репозиторію, з якого був зроблений клон.",
      },

      {
        type: "heading",
        text: "Робота після клонування",
      },

      {
        type: "paragraph",
        text: "Після клонування можна працювати з проєктом так само, як зі своїм локальним репозиторієм.",
      },

      {
        type: "code",
        language: "bash",
        code: `Створити зміни:

git add .


Створити коміт:

git commit -m "Update project"


Відправити зміни:

git push`,
      },

      {
        type: "note",
        text: "Після git clone Git автоматично створює віддалений репозиторій з ім'ям origin. Додатково виконувати git remote add не потрібно.",
      },

      {
        type: "task",
        text: [
          "Скопіюйте посилання на свій репозиторій GitHub.",
          "Створіть нову папку для тестування.",
          "Клонуйте свій репозиторій за допомогою git clone.",
          "Перейдіть у створену папку.",
          "Перевірте віддалений репозиторій командою git remote -v.",
        ],
      },

      {
        type: "hint",
        text: "Для клонування потрібне тільки посилання на GitHub-репозиторій. Команда git clone сама створить папку та налаштує Git.",
      },

      {
        type: "answer",
        text: `Приклад виконання:

Клонувати репозиторій:

git clone https://github.com/user/project.git


Перейти у папку:

cd project


Перевірити зв'язок:

git remote -v


Результат покаже:

origin https://github.com/user/project.git (fetch)

origin https://github.com/user/project.git (push)`,
      },
    ],
  },
];
