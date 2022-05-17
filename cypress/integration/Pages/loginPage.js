import config from '../utils/config';


class LoginPage {
    navigateToURL = ()=> cy.visit(config.getBaseURL);
    waitLandingPage = () => cy.wait(2000);
}

export default new LoginPage
