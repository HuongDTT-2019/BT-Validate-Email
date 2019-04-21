function validateEmail(str) {
    regexp = /^[A-Za-z0-9]+[A-Za-z0-9]*@[A-Za-z0-9]+(\.[A-Za-z0-9]+)$/;
    if (regexp.test(str)) {
        return true;
    }
    return false;
}
function checkEmail() {
    let txt_email=document.getElementById('inp_email').value;
    console.log(validateEmail(txt_email));
}
// console.log(validateEmail('abc@gmail.com'));
// console.log(validateEmail('@gmail.com'));


