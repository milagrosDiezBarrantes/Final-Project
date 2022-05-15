export function validate(input) {
    const validFirstName = /^[a-zA-Z\s]+$/
    const validLastName = /^[a-zA-Z\s]+$/
    const validUser = /^[a-zA-Z0-9_.\-.]{4,16}$/; // Letras, numeros, guion y guion_bajo
    const validEmail = /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/;
    const validPassword = /^.{4,12}$/; // 4 a 12 digitos.
    const validPicture= /(http(s?):)([/|.|\w|\s|-])*\.(?:jpg|gif|png)/ ;
    const validTitle = /^[a-zA-Z\s]+$/
    
    let error = {};
    
    if (input.firstName && !validFirstName.test(input.firstName)) {
        error.firstName = 'Special characters or numbers are not allowed';
    }
    if (input.lastName && !validLastName.test(input.lastName)) {
        error.lastName = 'Special characters or numbers are not allowed';
    }
    if (input.nickname && !validUser.test(input.userName)) {
        error.nickname = 'The user must have 4 to 10 digits';
    }
    if(input.age  && (input.age <= 16 || input.age >= 99) ) {
        error.age = 'Must be 16 years';
    }
    if (input.description) {
        error.description = 'This field cannot be empty';
    }
    if (input.email && !validEmail.test(input.email)) {
        error.email = 'Special characters or numbers are not allowed';
    }
    if (input.password && !validPassword.test(input.password)) {
        error.password = 'The password must have 4 to 10 digits';
    }
    if (input.password !== input.password2) {
        error.password2 = 'Both passwords must be the same';
    }
    if(input.picture && !validPicture.test(input.picture)) {
        error.picture = 'This is not a valid URL'
    }
    if (!input.title) {
        error.title = 'This field cannot be empty';
    }
    if (!validTitle.test(input.title)) {
        error.title = 'Special characters or numbers are not allowed';
    }
    return error;
}