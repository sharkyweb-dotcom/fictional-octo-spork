let selectedAccount='';
// Block DevTools(It can be used for seeinng login information)
document.onkeydown=function(key) {
    if (key.shiftKey && key.ctrlKey &&key.keyCode==='I'.charCodeAt(0)) {
        return false;
    }
}