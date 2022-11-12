class Login {
    constructor(msg) {
        this.msg = msg;
        this.txtEmail = 'input[name="e.angulov@uniandes.edu.co"]';
        this.txtPassword = 'input[name="Elymary-420@"]';
        this.btnLogin = '//*[@id="ember8"]';
        this.msgError = ".main-error";
    }

}
module.exports = {
    Login,
};