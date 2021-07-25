accountList=[]
let loginRequire=true;
let loggedIn=false;
let selectedAccount=false;
class Account {
    constructor(username,password) {
        this._username=username;
        this._password=password;
        this._formsSubmitted=0;
        this._badWords=0;
        this._randomUsed=0;
        this._fairUsed=0;
        this._compromised=false;
        accountList.push(this);
    }
    static login() {
        if (loginRequire) {
        if (window.confirm('Would you like to login?')===true) {
            let selectedUsername=window.prompt('Username: ');
            console.log(selectedUsername);
            let selectedPassword=window.prompt('Password: ');
            console.log(selectedPassword);
            accountList.forEach(account=>{
            if (account._username===selectedUsername.toLowerCase() & account._password===selectedPassword.toLowerCase()) {
                alert('You have been logged in.');
                loggedIn=true;
                selectedAccount=account._username;
                document.getElementById('inputUser').value=selectedAccount;
            } 
            })
            if (loggedIn===false) {
                alert('This login information is not valid.');
                location.replace('../index.html');
            } 
        } else {
            alert('Unable to rate without a login.')
            location.replace('../index.html')
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
const duck=new Account('Catanian','Seafarer')