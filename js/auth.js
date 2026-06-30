const loginBtn = document.getElementById("loginBtn");
const registerBtn = document.getElementById("registerBtn");

const loginForm = document.getElementById("loginForm");
const registerForm = document.getElementById("registerForm");

loginBtn.addEventListener("click", () => {

    loginBtn.classList.add("active");
    registerBtn.classList.remove("active");

    loginForm.classList.add("active-form");
    registerForm.classList.remove("active-form");

});

registerBtn.addEventListener("click", () => {

    registerBtn.classList.add("active");
    loginBtn.classList.remove("active");

    registerForm.classList.add("active-form");
    loginForm.classList.remove("active-form");

});