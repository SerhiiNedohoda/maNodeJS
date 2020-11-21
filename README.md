# maNodeJS

<details>
<summary><b> Test Task </b></summary>
<p>
Hi!
Here is your test task for MA Node.js course. It's not very complicated, but may be a bit tricky. It only tests your basic knowledge of JavaScript language that is needed for completing our course successfully.

Create a function that receives an array of goods and returns cost that should be paid for all these goods.
Your code should:
- Print to the console the total quantity of pairs of socks (`Socks - ${quantity}`);
- Print to the console the total quantity of the hats of red color (`Red Hats - ${quantity}`);
- Print to the console the cost of the goods by colors (`Red - ${costRed}, Green - ${costGreen}, Blue - ${costBlue}`);
- Print to the console the result of the execution of this function.

Note: Try to minimize your code.
Input array in JSON format:
```
[
    {"type": "socks", "color": "red", "quantity": 10, "priceForPair": "$3"},
    {"type": "socks", "color": "green", "quantity": 5, "priceForPair": "$10"},
    {"type": "socks", "color": "blue", "quantity": 8, "priceForPair": "$6"},
    {"type": "hat", "color": "red", "quantity": 7, "price": "$5"},
    {"type": "hat", "color": "green", "quantity": 0, "price": "$6"},
    {"type": "socks", "color": "blue", "priceForPair": "$6"},
    {"type": "socks", "color": "red", "quantity": 10, "priceForPair": "$3"},
    {"type": "socks", "color": "white", "quantity": 3, "priceForPair": "$4"},
    {"type": "socks", "color": "green", "priceForPair": "$10"},
    {"type": "socks", "color": "blue", "quantity": 2, "priceForPair": "$6"},
    {"type": "hat", "color": "green", "quantity": 3, "price": "$5"},
    {"type": "hat", "color": "red", "quantity": 1, "price": "$6"},
    {"type": "socks", "color": "blue", "priceForPair": "$6"}
]
```
Completed tast should be uploaded to github as your own repository. Please insert the link to the repository containing your completed test task below in this form.
</p>
</details>

<details>
<summary><b> Homework1 </b></summary>
<p>
Ось така структура повинна бути у вашої homework-01

Через декілька днів ми повідомимо хто з менторів закріплений за ким з вас. Потрібно буде додати ментора в колаборатори вашого репозиторію.
Створіть окрему гілку та реалізовуйте в ній це завдання, далі створіть пуллреквест та очікуйте перевірки ментором.

Завдання:

task1.js Cтворити функцію, яка прийматиме на вхід масив даних формату тестового завдання, параметр-рядок, за яким відфільтрувати товари, та параметр значення, на яке перевірятиметься попередній параметр, і повертатиме відфільтрований масив. Заекспортити цю функцію через module.exports.

task2.js Створити функцію, яка прийматиме на вхід масив даних формату тестового завдання, і повертатиме запис товару з найбільшою вартістю, враховуючи кількість товарів в запису. Заекспортити виклик цієї функції через module.exports.

task3.js Створити функцію, яка прийматиме на вхід масив даних формату тестового завдання, і повертатиме модифікований масив, що приводить кожний запис товару до єдиного формату, тобто кожен з елементів масиву має мати однакову кількість і назви всіх полів. Заекспортити цю функцію через module.exports.

В файлі index.js підключити всі 3 модулі (task1, task2, task3) та експортнути їх одним об'єктом, використовуючи module.exports

В файлі app.js, використовуючи деструктуризацію, підключити папку task та змінити назву для task1 та task2 на інші довільні назви. 

Масив даних з тестового завдання зберегти як JSON файл на кореневому рівні проекту та підключити в app.js та в task2.js.

Створити функцію boot, яка приймає параметри необхідні для виконання функції task1, і виконує в своєму тілі послідовно такі дії:
    - Отримання результатів виконання для переназваної функції task1 та виведення їх через console.log;
    - Прокидування цих результатів виконання в функцію з модуля task3 та виведення їх через console.log;
    - Виведення результату виконання функції task2 через console.log

Викликати функцію boot з масивом даних та 'type' і 'socks'.

Запустити проект через npm start

Поради: робіть все поступово та будьте обачні. Відповімо на будь-які запитання стосовно умови тут в чатіку.

Той, хто зможе самотужки вирішити цю домашку, отримає круті та необхідні скіли, які однозначно будуть використанні у подальшому! Успіхів!
</p>
</details>

<details>
<summary><b> Homework2 </b></summary>
1. Налаштувати Debug за прикладом доки по VS Code https://code.visualstudio.com/docs/editor/debugging (опціонально)

2. Встановити та спробувати Nodemon для автоматичного перезапуску вашої програми після збереження коду https://www.npmjs.com/package/nodemon (опціонально)

3. Налаштувати Debug + Nodemon (опціонально, це для вашої зручності)

4. Створити HTTP server за прикладом: https://github.com/GavukaAlexandr/Node.js_HTTP_without_frameworks 

5. Підключити сервер до задач з ДЗ №1

6. Створити роутинг, в якому додати окремі роути для кожного таска із ДЗ №1

7. Створити файл контроллер, в якому реалізувати функції для опрацювання кожного роута

8. Параметри-аргументи для роботи функцій із попередніх задач передавати через Query параметри URL. У якості вхідного масиву даних для всіх тасків брати збережений раніше масив даних.

9. Створити роут + контроллер для завантаження нового масиву даних. Дані приймати в request.body в форматі JSON, як показано в репозиторії, та зберігати в глобальну змінну store

10. Створити роут який буде переключати джерело даних ( JSON || store )

11. Задачою із зірочкою буде редагування JSON файлу за інструкцією https://www.codegrepper.com/code-examples/delphi/how+to+edit+local+json+files+using+node , в такому випадку пункт 10 не потрібен
<p>

</p>
</details>

<details>
<summary><b> Homework3 </b></summary>
<p>
1. Створити функцію myMap яка буде повторювати функціонал методу масиву .map
Допускається першим елементом передавати масив.
Опціонально, створити myMap як метод класу Array який буде працювати аналогічно map.

2. Створити функцію з колбеком для генерування знижки, яка поверне свій результат в колбек через 50мс.
Згенерувати знижку випадковим чином в діапазоні від 1 до 99%.
Оскільки магазин не може собі дозволити великі знижки, то якщо знижка буде більше 20 (включно), функція поверне помилку, інакше поверне значення знижки.
Створити обгортки над функцією з колбеком для полегшення роботи з асинхронними функціями. Обгортки мають бути реалізовані двома способами.

3. Створити роут та відповідний контролер для розрахунку знижки для кожного товару, що знаходиться в файлі json та вивести товари в однаковому для всіх вигляді разом зі знижкою, використовуючи myMap.
Знижка повинна бути для всіх товарів.
Для товарів типу “hat” діє подвійна знижка (згенерувати двічі, знижка множиться).
Для товарів типу “hat” і кольору “red” – потрійна знижка (згенерувати тричі, знижка перемножується). 

4. Реалізувати пункт 3. трьома способами( callback, promise, async/await), відповідно на кожен окремий роут.
Для callback способу викликати функцію написану як callback.
Для Promise та Async/Await способу викликати функцію - обгортку для callback.

Примеры CSV файлов (.csv.gzip) для загрузки:
https://t.me/c/1341673203/344
</p>
</details>

<details>
<summary><b> Homework4 </b></summary>
<p>

1. Добавить Graceful Shutdown для сервера в случае непредвиденных ошибок.

2. Создать эндпоинт для загрузки CSV в архиве (*.csv.gzip). При отправке файла он должен одновременно (в потоке) распаковываться, превращаться в JSON и сохраняться в папку /uploads. Имя файла должно быть уникальным, поэтому для генерации уникального имени можно придумать свой алгоритм или воспользоваться сторонними модулями: nanoid, uuid. Формат сохраняемого JSON файла должен быть единым (как после task3)

3. Создать эндпоинт который выведет список всех файлов из папки /uploads

4. Создать эндпоинт который запускает оптимизацию JSON файла. Имя файла для оптимизации передавать как часть пути эндпоинта (напр.: POST /uploads/optimize/a1b2-f0d2-3418.json). В конвертированном CSV много продуктов у которых повторяются type, price, color. Необходимо сложить quantity для всех таких продуктов и оставить только одну запись с общим количеством. (должно получиться 4800 уникальных товаров для большого файла. В среднем quantity должно получиться от 19 000 до 22 000, для каждого товара). Этот эндпоинт должен возвращать общее количество товаров в файле после оптимизации (сумму всех quantity).

! Все операции должны быть неблокирующими. Сервер должен обрабатывать другие запросы в любой момент времени, даже если в данный момент он загружает или оптимизирует огромный файл.

5. (Опционально) * Создать автоматическую оптимизацию, которая будет постоянно запускаться через определённый промежуток времени. Например через каждые 10 минут. Время должно быть задано переменной в конфигурации, через .env (переменной окружения).

6. (Опционально) * Оптимизированные файлы перекладывать в отдельную папку, напр. /uploads/optimized

7. (Опционально) * Добавить оптимизированные файлы к эндпоинту который выводит список всех файлов. При выводе списка разделить его на две категории, а также добавить в список время создания и размер каждого файла.
</p>
</details>