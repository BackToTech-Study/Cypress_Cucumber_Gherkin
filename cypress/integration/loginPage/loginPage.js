import {Given, When, And, Then} from 'cypress-cucumber-preprocessor/steps';
import loginPage from '../Pages/loginPage';



Given ("The user navigate to the website",()=>{ 
    loginPage.navigateToURL();
    loginPage.waitLandingPage();
});

When ("The user click on Intra in cont Button",()=>{
    cy.get('div.col-md-5.col-sm-5.acount-section > ul > li.-g-user-icon > a').click();
    loginPage.waitLandingPage();
});

And("Validate the page title",()=>{
    cy.get('#register-page > div > div.old-client-section.col-sm-5.pull-right > div > div.title-carousel > h1')
             .should('be.visible')
            .contains('Contul tau');
});

And("The user enter valid account details",()=>{
    cy.get('#_loginEmail').type('c_oniga@yahoo.com');
    cy.get('#_loginPassword').type('i0eod4');
    cy.wait(2000);
});

And("The user click on Intra in cont Button to login",()=>{
    cy.get('#doLogin').click({force: true});
    loginPage.waitLandingPage();
});

Then("Validate the page url",()=>{
    cy.url('/').should('include', '/contul-meu')
})

And ("The user enter wrong account details",()=>{
    cy.get('#_loginEmail').type('Coniga@yahoo.com');
    cy.get('#_loginPassword').type('mere');
    cy.wait(2000)
})

Then ("The error message is visible",()=>{
    cy.get('.error').should('be.visible')
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

