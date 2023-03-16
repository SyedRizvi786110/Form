const form=document.getElementById('form');
const username=
document.getElementById('username');
const email=
document.getElementById('email');
const password=
document.getElementById('passwrod');
const password2=
document.getElementById('password2');

form.addEventListener('submit', e => {
    e.preventDefault();
    validateInputs()
});

const setError=(element,message) => {
    const inputControl=
    inputControl.querySelector('.error');
    errorDisplay.innerText=message;
    inputControl.classList.add('error');
    inputControl.classList.remove('sucess');

}
const setSucess = element => {
    const inputControl=
    element.parentElement;
    const errorDisplay=
    inputControl.querySelector('.error');
    errorDisplay.innerText='';
    inputControl.classList.add('sucess');
    inputControl.classList.remove('error');

};
const isValidEmail= email =>{
    const re = /^(([^<>()[/]\\.,;:\s@"]+(\.
        [^<>()[/]\\.,;:\s@']+ )*)|('.+''))@((\[[0-9]
        {1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|
        (([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2}))$/;
        return
        re.test(string(email).toLowerCase());
        </>
}
const validateInputs=()=>{
    const usernameValue=
    username.value.trim();
    const emailValue=email.value.trim();
    const passwordValue=
    password.value.trim();
    const password2Value=
    password2.value.trim();
    if(usernameValue === '') {
        setError(username, 'Username is required');
} else {
    setSucess(username);
}
if (emailValue ==='') {
    setError (email, 'Email is required');
} else if (!isValidEmail(emailValue)) {
    setError (email, 'Provide a valid email address');
    } else {
        setSucess(email);
    }
    if (passwordValue === '') {
        setError(password, 'Password is required');
} else if (passwordValue.length < 8) {
    setError (password, 'Password must be atleast 8 characters')
} else {
    setSucess(password);
}if (password2Value ==='') {
    setError(password2, 'Please confirm your password');

} else if (password2Value !== passwordValue){
    setError (password2,"Password doesnot match");

} else {
    setSucess(password2);
}
};
