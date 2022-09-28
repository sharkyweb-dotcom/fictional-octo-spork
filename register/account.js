
let loginRequire=true;
let loggedIn=false;
let selectedAccount=false;
let tryAgain;
class Account {
    constructor(username,password) {
        this._username=username;
        this._password=password;
        this._formsSubmitted=0;
        this._badWords=0;
        this._randomUsed=0;
        this._fairUsed=0;
        this._compromised=false;
    } 
    static login() {
        if (loginRequire) {
        if (window.confirm('Would you like to login?')===true) {
            let selectedUsername=window.prompt('Username: ');
            let selectedPassword=window.prompt('Password: ');
            console.log(typeof selectedUsername,typeof selectedPassword)
            if (selectedUsername===null || selectedPassword===null) {
                alert('Must enter username and password')
                if (page==='rate') {
                    location.replace('../index.html');
                } else {
                    tryAgain=confirm('Would you like to try again?')
                    if (tryAgain) {
                        Account.login();
                    }
                }
            }
            accountList.forEach(account=>{

            if (account._username===selectedUsername.toLowerCase() & account._password===selectedPassword.toLowerCase()) {
                alert('You have been logged in.');
                loggedIn=true;
                selectedAccount=account._username;
                if (page==='rate') {
                    document.getElementById('inputUser').value=selectedAccount;
                }
            } 
            })

            if (loggedIn===false) {
                alert('This login information is not valid.');
                if (page==='rate') {
                    location.replace('../index.html');
                } else {
                    tryAgain=confirm('Would you like to try again?')
                    if (tryAgain) {
                        Account.login();
                    }
                }
            } 
        } else {
            if (page==='rate') {
                alert('Unable to rate without a login.')
                location.replace('../index.html')
            } 
        }
        }
    }
    static register() {
        if (document.getElementById('username').value && document.getElementById('password').value) {
            let confirmation=window.confirm(`Are you sure you would like to register with this username and password?\n
        Username:${document.getElementById('username').value}\n
        Password:${document.getElementById('password').value}`)
            if(confirmation===true) {
                document.getElementById('registerForm').submit();
                alert('Your account will be added in one day\'s time.')
            }
        } else {
            alert('Cannot submit empty forms.')
        }
    }
    static blockDevTools() {
        document.onkeydown=(e)=>{
            if (e.ctrlKey&&e.shiftKey&&e.key==='I') {
                console.log('blocked');
                return false;
            }
        }
    }
}
function random() {
    if (selectedAccount) {
        selectedAccount._randomUsed++;
        console.log('BB '+selectedAccount._randomUsed)
    }
}
accountList=[new Account("Finn's Best Friend","123456789"),new Account('catanian', 'seafarer'),new Account('daemon', 'poiuyt'), new Account('rkaiii', 'rkaiii'),new Account("bram","grundel13")]
