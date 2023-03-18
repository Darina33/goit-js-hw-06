const form = document.querySelector('.login-form');
const submit = form.lastElementChild;

form.addEventListener("submit", onFormSubmit);

function onFormSubmit(event) {
    event.preventDefault();
    const email = event.currentTarget.elements.email;
    const password = event.currentTarget.elements.password;

    if (email.value.trim() === "" || password.value.trim() === "") {
        alert("Всі поля повинні бути заповнені.")
    } else {
        const formElements = event.currentTarget.elements;

    const emailValue = formElements.email.value;
    const passwordValue = formElements.password.value;

    const formData = {
        emailValue,
        passwordValue,
    }

        console.log(formData);
        event.currentTarget.reset();
    }
}