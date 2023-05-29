import MainPage from "../Pages/MainPage.js";

const arrForValidation = ['Таксер Тест Тестерович', 'UA-22723472', '2015-04-08 21:00:00 UTC', '2017-04-08 21:00:00 UTC']

describe("Taxer test", () => {
    const mainPage = new MainPage();

    it("Check that the user upload the cerificate", () => {
        cy.visit('https://js-55fbfg.stackblitz.io/')
        mainPage.btnRunProject().click();
        mainPage.btnAddCertificate().click();
        mainPage.uploadCertificate()
        mainPage.validateAllTableFields(arrForValidation)
    })
})