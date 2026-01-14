// import * as data from "../helpers/default_data.json"


describe('Покупка нового автара для своего тренера', function () {

   it('Покупка нового автара для своего тренера', function () {
    cy.visit('https://pokemonbattle.ru/login'); // зашла на сайт
    cy.get('#k_email').type(Cypress.env("USER_LOGIN")); // ввела верный логин
    cy.get('#k_password').type(Cypress.env("USER_PASSWORD"));   // ввела верный пароль
    cy.get('.MuiButton-root').click(); // нажала войти
    cy.wait(2000);
    cy.get('.header_card_trainer').click(); // нажала войти в свой профиль
    cy.wait(2000);
    cy.get('[data-qa="shop"]').click(); // нажала кнопку сменить аватар
    cy.get('.available > button').first().click(); // нажимаем Купить у первого доступного аватара
    cy.get('.payment_form_card_form > :nth-child(2) > .style_1_base_input').type('5469670026596588'); //ввела номер карты
    cy.wait(500);
    cy.get(':nth-child(1) > .style_1_base_input').type('08/26'); //ввела срок карты
    cy.wait(500);
    cy.get('.payment_form_card_form_inputs > :nth-child(2) > .style_1_base_input').type('125');// ввела cvv карты
    cy.wait(500);
    cy.get('.payment_form_card_form_input_last > .style_1_base_input').type('Name')//ввела имя
    cy.wait(500);
    cy.get('.style_1_base_button_payment_body > .style_1_base_button_payment').click(); // нажимаем оплатить
    cy.get('.style_1_base_input').type('56456'); //ввела код из пуша или смс
    cy.get('.style_1_base_button_payment_body > .style_1_base_button_payment').click(); // нажимаю оплатить
    cy.get('.payment_status_top_title').contains('Покупка прошла успешно'); // проверка текста
    cy.get('.payment_status_top_title').should('be.visible');// проверка что текст виден пользователю
    })

})