export function validate(input) {
    const validFirstName = /^[a-zA-Z\s]+$/
    const validLastName = /^[a-zA-Z\s]+$/
    const validUser = /^[a-zA-Z0-9_.\-.]{4,16}$/; // Letras, numeros, guion y guion_bajo
    const validEmail = /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/;
    const validPassword = /^.{4,12}$/; // 4 a 12 digitos.
    const validPicture= /(http(s?):)([/|.|\w|\s|-])*\.(?:jpg|gif|png)/ ;
    const validTitle = /^[a-zA-Z\s]+$/
    
    let error = {};
    
    if (!input.validFirstName.length) {
        error.firstName = 'This field cannot be empty';
    }
    if (!validFirstName.test(input.firstName)) {
        error.firstName = 'Special characters or numbers are not allowed';
    }
    if (!input.validLastName.length) {
        error.lastName = 'This field cannot be empty';
    }
    if (!validLastName.test(input.lastName)) {
        error.lastName = 'Special characters or numbers are not allowed';
    }
    if (!input.userName) {
        error.userName = 'This field cannot be empty';
    }
    if (!validUser.test(input.userName)) {
        error.userName = 'The user must have 4 to 10 digits';
    }
    if (!input.description) {
        error.description = 'This field cannot be empty';
    }
    if (!input.email.length) {
        error.email = 'This field cannot be empty';
    }
    if (!validEmail.test(input.email)) {
        error.email = 'Special characters or numbers are not allowed';
    }
    if (!input.password) {
        error.password = 'This field cannot be empty';
    }
    if (!validPassword.test(input.password)) {
        error.password = 'The password must have 4 to 10 digits';
    }
    if (input.password !== input.password2) {
        error.password2 = 'Both passwords must be the same';
    }
    if(input.picture && !validPicture.test(input.picture)) {
        error.picture = 'This is not a valid URL'
    }
    if (!input.validTitle.length) {
        error.title = 'This field cannot be empty';
    }
    if (!validTitle.test(input.title)) {
        error.title = 'Special characters or numbers are not allowed';
    }
    return error;
}