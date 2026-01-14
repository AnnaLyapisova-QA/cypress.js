import * as data from "../helpers/default_data.json"

import * as main_page from "../locators/main_page.json"
import * as recovery_password_page from "../locators/recovery_password_page.json"
import * as result_page from "../locators/result_page.json"

describe('Проверка авторизации', function () {
    
    beforeEach('Начало теста', function () {
        cy.visit('/');
        cy.get(main_page.fogot_pass_btn).should('have.css', 'color', 'rgb(0, 85, 152)');
           });
    afterEach('Конец теста', function () {
        cy.get(result_page.close).should('be.visible');
        });

    it('Верный пароль и верный логин', function () {
        cy.get(main_page.email).type(data.login); // ввела верный логин
        cy.get(main_page.password).type(data.password);   // ввела верный пароль
        cy.get(main_page.login_button).click(); // нажала войти
        cy.get(result_page.title).contains('Авторизация прошла успешно'); // проверяю что после авторизации вижу текст
        cy.get(result_page.title).should('be.visible'); // проверка что текст авторизации виден пользователю
       
    })

    it('Восстановление пароля', function () {
        cy.get(main_page.fogot_pass_btn).click();// нажала на кнопку "забыли пароль?"
        cy.get(recovery_password_page.email).type(data.login);// ввела почту
        cy.get(recovery_password_page.send_button).click(); // нажала отправить код
        cy.get(result_page.title).contains('Успешно отправили пароль на e-mail'); // проверяю что после авторизации вижу текст
        cy.get(result_page.title).should('be.visible'); // проверка что текст авторизации виден пользователю
       
    })
    it('Неверный пароль и верный логин', function () {
        cy.get(main_page.email).type(data.login); // ввела верный логин
        cy.get(main_page.password).type('qa_one_loveda');   // ввела неверный пароль
        cy.get(main_page.login_button).click(); // нажала войти
        cy.get(result_page.title).contains('Такого логина или пароля нет'); // проверяю что после авторизации вижу текст
        cy.get(result_page.title).should('be.visible'); // проверка что текст авторизации виден пользователю
    })
    it('Верный пароль и неверный логин', function () {
        cy.get(main_page.email).type('german@dolniko.ru'); // ввела неверный логин
        cy.get(main_page.password).type(data.password);   // ввела верный пароль
        cy.get(main_page.login_button).click(); // нажала войти
        cy.get(result_page.title).contains('Такого логина или пароля нет'); // проверяю что после авторизации вижу текст
        cy.get(result_page.title).should('be.visible'); // проверка что текст авторизации виден пользователю
    })
    it('Проверка логина на ошибку валидации', function () {
        cy.get(main_page.email).type('germandolnikov.ru'); // ввела логин без @
        cy.get(main_page.password).type(data.password);   // ввела верный пароль
        cy.get(main_page.login_button).click(); // нажала войти
        cy.get(result_page.title).contains('Нужно исправить проблему валидации'); // проверяю что после авторизации вижу текст
        cy.get(result_page.title).should('be.visible'); // проверка что текст авторизации виден пользователю
    })
    it('Приведение к строчным буквам в логине', function () {
        cy.get(main_page.email).type('GerMan@Dolnikov.ru'); // ввела логин с заглавными буквами
        cy.get(main_page.email)
        .invoke('val')
        .then((value) => {
        expect(value.toLowerCase()).to.equal('german@dolnikov.ru');
  });// преобразование в логина в нижний регистр
        cy.get(main_page.password).type(data.password);   // ввела верный пароль
        cy.get(main_page.login_button).click(); // нажала войти
        cy.get(result_page.title).contains('Авторизация прошла успешно'); // проверяю что после авторизации вижу текст
        cy.get(result_page.title).should('be.visible'); // проверка что текст авторизации виден пользователю
    })
})

