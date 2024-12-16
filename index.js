const submitButton = document.getElementById("submit-btn");
const dismissButton = document.getElementById("dismiss-btn");
const formContainer = document.querySelector(".form-container");
const successContainer = document.querySelector(".success-container");
const emailInputField = document.getElementById("email-input");


function validateEmail(email) {
    if(!email){
        return 'Email is Required';
    }

    const isValidEmail = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if(!isValidEmail.test(email)){
        return 'Please enter a valid email';
    }

    return '';
}


submitButton.addEventListener("click", (e) => {
    e.preventDefault();

    const inputField = document.getElementById("email-input");
    const userEmail = inputField.value;
    
    const emailErrorMessage = validateEmail(userEmail);

    if(emailErrorMessage){
        const emailError = document.getElementById('email-error');

        emailError.innerText = emailErrorMessage;
        emailInputField.classList.add("email-input-error");
    } else {
        formContainer.classList.toggle("hidden");
        successContainer.classList.toggle("hidden");
    }

})

dismissButton.addEventListener("click", ()=>{
    successContainer.classList.toggle("hidden");
    formContainer.classList.toggle("hidden");
    
    document.querySelector("#email-input").value = '';
    document.getElementById('email-error').innerText = '';
})

emailInputField.addEventListener("input", () => {
    emailInputField.classList.remove("email-input-error");
    document.getElementById('email-error').innerText = ''
})