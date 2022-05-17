import {Given, When, And, Then} from 'cypress-cucumber-preprocessor/steps';
import {loginPage} from '../Pages/loginPage';



Given ("The user navigate to the website",()=>{ 
    cy.visit('https://www.e-minu.ro/') ;
    // loginPage.doLogin();
    // loginPage.navigateToURL();
    // loginPage.waitLandingPage();
});

When ("The user click on Intra in cont Button",()=>{
    cy.get('div.col-md-5.col-sm-5.acount-section > ul > li.-g-user-icon > a').click();
    cy.wait(2000);
});

And("Validate the page title",()=>{
    cy.get('#register-page > div > div.old-client-section.col-sm-5.pull-right > div > div.title-carousel > h1')
             .should('be.visible')
            .contains('Contul tau');
});

And("The user enter account details",()=>{
    cy.get('#_loginEmail').type('c_oniga@yahoo.com');
    cy.get('#_loginPassword').type('1234Casian');
});

And("The user click on Intra in cont Button to login",()=>{
    cy.get('#doLogin').click({force: true});
    cy.wait(5000);
});

Then("Validate the page url",()=>{
    cy.url('/').should('include', '/contul-meu')
})


// Tests without Cucumber & Gherkin
// describe('Check the Login feature', () => {

//     before('Visit website', () => {
//         cy.visit('/');
//     })

//     it('The user click on Intra in cont Button', () => {
//         cy.get('div.col-md-5.col-sm-5.acount-section > ul > li.-g-user-icon > a')
//             .click();
//         cy.wait(2000);
//     })

//     it('Validate the page title', () => {
//         cy.get('#register-page > div > div.old-client-section.col-sm-5.pull-right > div > div.title-carousel > h1')
//             .should('be.visible')
//             .contains('Contul tau');
//     })

//     it('The user enter account details', () => {
//         cy.get('#_loginEmail').type('c_oniga@yahoo.com');
//         cy.get('#_loginPassword').type('1234Casian');
//     })

//     it('The user click on Intra in cont Button', () => {
//         cy.get('#doLogin').click({force: true});
//         cy.wait(5000);
//     })

//     it('Validate the page url',()=>{
//         cy.url('/').should('include', '/contul-meu')
//     })

// })

