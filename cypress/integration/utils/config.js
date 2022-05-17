

class Config {
    getValue = (name) => Cypress.env(name);
    getBaseURL = () => this.getValue("baseUrl");

}
export default new Config();