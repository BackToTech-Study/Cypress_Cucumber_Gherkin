import config from '../utils/config';


class LoginPage {
    navigateToURL = ()=> cy.visit('https://www.e-minu.ro/');
    waitLandingPage = () => cy.wait(4000);
}

export default new LoginPage
