export function validate(input) {

    const validUser = /^[a-zA-Z0-9_.\-.]{4,16}$/; // Letras, numeros, guion y guion_bajo
    const validEmail = /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/;
    const validPassword = /^.{4,12}$/; // 4 a 12 digitos.

    let error = {};
    
    if (!input.userName) {
        error.userName = 'This field cannot be empty';
    }
    else if (!validUser.test(input.userName)) {
        error.userName = 'The user must have 4 to 10 digits';
    }
    else if (!input.email.length) {
        error.email = 'This field cannot be empty';
    }
    else if (!validEmail.test(input.email)) {
        error.email = 'Special characters or numbers are not allowed';
    }
    else if (!input.password) {
        error.password = 'This field cannot be empty';
    }
    else if (!validPassword.test(input.password)) {
        error.password = 'The password must have 4 to 10 digits';
    }
    else if (input.password !== input.password2) {
        error.password2 = 'Both passwords must be the same';
    }
    return error;
}