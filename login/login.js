accountList=[]
let loggedIn=false;
class Account {
    constructor(username,password) {
        this._username=username;
        this._password=password;
        this._formsSubmitted=0;
        this._badWords=0;
        this._randomUsed=0;
        this._fairUsed=0;
        accountList.push(this);
    }
    static login() {
        let selectedUsername=document.getElementById('username').value;
        console.log(selectedUsername);
        let selectedPassword=document.getElementById('password').value;
        console.log(selectedPassword);
        accountList.forEach(account=>{
            if (account._username===selectedUsername & account._password===selectedPassword) {
                alert('You have been logged in.');
                document.getElementById('loginForm').reset()
                loggedIn=true;
                selectedAccount=account;
            } 
        })
        if (loggedIn===false) {
            alert('This login information is not valid.')
            document.getElementById('loginForm').reset()
        } 
    }
    static register() {
        if (document.getElementById('username').value && document.getElementById('password').value) {
            let confirmation=window.confirm(`Are you sure you would like to register with this username and password?\n
        Username:${document.getElementById('username').value}\n
        Password:${document.getElementById('password').value}`)
            if(confirmation===true) {
                document.getElementById('registerForm').submit();
            }
        } else {
            alert('Cannot submit empty forms.')
        }
    }
}
const duck=new Account('DuckyMoMo','Wittrock')