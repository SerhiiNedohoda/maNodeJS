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

</p>
</details>