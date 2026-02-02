<h2>UI Автотесты на фреймворке Cypress</h2>

> **Статус проекта:**
> Публичный проект: https://login.qa.studio/
> 
> 🟢 Поддерживается (активный) 

## Описание проекта и задачи
Автоматизировать часть проверок регресса с помощью Cypress

## Тест-кейсы, которые автоматизировали
* Авторизация с верным паролем и верным логином
* Проверка флоу восстановления пароля
* Авторизация c верным логином и неверным паролем
* Авторизация c неверным логином и верным паролем
* Проверка работы валиадации на наличие @ в логине
* Приведение к строчным буквам в логине (тест должен упасть)


## Детали реализации

1. baseUrl вынесен в переменные конфига
![image](https://raw.githubusercontent.com/AnnaLyapisova-QA/cypress.js/refs/heads/main/base_url.png)

2. Применение хуков beforeEach и afterEach
![image](https://raw.githubusercontent.com/AnnaLyapisova-QA/cypress.js/refs/heads/main/befor_after.png)

3. Переменные данные для авторизации вынесены в отдельный файл. Перед запуском нужно переименовать файл cypress.env.json.dist в cypress.env.json и указать свои данные в файле
![image](https://raw.githubusercontent.com/AnnaLyapisova-QA/cypress.js/refs/heads/main/login_password.png)

4. Каждая страница описана в формате объекта с локаторами
![image](https://raw.githubusercontent.com/AnnaLyapisova-QA/cypress.js/refs/heads/main/locators.png)

## Локальный запуск тестов (из терминала)
1. Скачать проект
2. Перейти в терминале в директорию проекта
2. Выполнить команду:
```
npx cypress run 
```
Ожидаемый результат: получим отчет о прохождении тестов. Последний тест должен упасть
![image](https://raw.githubusercontent.com/AnnaLyapisova-QA/cypress.js/refs/heads/main/terminal.png)


## Локальный запуск через Cypress UI
1. Скачать проект и открыть в терминале.
2. Перейти в директорию проекта.
3. В терминале в папке с проектом запустить `npm install --save-dev cypress@12.7.0`
4. В терминале в папке с проектом запустить `npm i`
5. В терминале в папке с проектом запустить `npx cypress open`
6. Выбрать в Cypress UI E2E тестирование и браузер Google Chrome
7. Выбрать спеку registration

Ожидаемый результат: получим отчет о прохождении тестов. Последний тест должен упасть.
![image](https://raw.githubusercontent.com/AnnaLyapisova-QA/cypress.js/refs/heads/main/testing.png)
