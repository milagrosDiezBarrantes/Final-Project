export function validate(input) {

    const validName = /^[a-zA-z]*[a-zA-Z\\-_@&$%#\s]{3,18}$/; // Letras y espacios, pueden llevar acentos.
    const validUser = /^[a-zA-Z0-9_.\-.]{4,16}$/; // Letras, numeros, guion y guion_bajo
    const validEmail = /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/;
    const validPassword = /^.{4,12}$/; // 4 a 12 digitos.
    const validPicture = /(http(s?):)([/|.|\w|\s|-])*\.(?:jpg)/;

    let error = {};
    if (!input.firstName) {
        error.firstName = 'This field cannot be empty';
    }
    else if (!validName.test(input.firstName)) {
        error.firstName = 'Special characters or numbers are not allowed';
    }
    if (!input.lastName) {
        error.lastName = 'This field cannot be empty';
    }
    else if (!validName.test(input.lastName)) {
        error.lastName = 'Special characters or numbers are not allowed';
    }
    else if (!input.age) {
        error.age = 'This field cannot be empty'
    }
    else if (input.age <= 16) {
        error.age = 'You must be over 16 years old';
    }
    else if (!input.userName) {
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
    else if (input.picture && !validPicture.test(input.picture)) {
        error.picture = 'This is not a valid URL'
    }
    return error;
}