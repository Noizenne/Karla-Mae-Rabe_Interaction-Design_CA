const form = document.querySelector("#contactForm");
const name = document.querySelector("#name");
const nameError = document.querySelector("#nameError");
const subject = document.querySelector("#subject");
const subjectError = document.querySelector("#subjectError");
const email = document.querySelector("#email");
const emailError = document.querySelector("#emailError");
const address = document.querySelector("#address");
const addressError = document.querySelector("#addressError");

const loading = document.querySelector(".loader");
loading.classList.remove("loader");

function validateForm(event) {
    event.preventDefault();

    if(checkLength(name.value, 0) === true) {
        nameError.style.display = "none";
    } 
    else {
        nameError.style.display = "block";
    }
    if(checkLength(subject.value, 9) === true) {
        subjectError.style.display = "none";
    } 
    else {
        subjectError.style.display = "block";
    }
    if(validateEmail(email.value) === true) {
        emailError.style.display = "none";
    } 
    else {
        emailError.style.display = "block";
    }
    if(checkLength(message.value, 24) === true) {
        messageError.style.display = "none";
    } 
    else {
        messageError.style.display = "block";
    }
}

form.addEventListener("submit", validateForm);

function checkLength(value, len) {
    if(value.trim().length > len) {
        return true;
    }
    else {
        return false;
    }
}

function validateEmail(email) {
    const regEx = /\S+@\S+\.\S+/;
    const patternMatches = regEx.test(email);
    return patternMatches;
}