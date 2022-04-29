import { useState, useMemo, useEffect } from "react";
import { useDispatch } from 'react-redux';
import { postUser } from "../../Redux/Actions/actions";

export const Form = () => {
    const dispatch = useDispatch();
    const [error, setError] = useState({});

    function validate (input) {
        const validName = /^[a-zA-z]*[a-zA-Z\\-_@&$%#\s]{3,18}$/; // Letras y espacios, pueden llevar acentos.
        const validUser = /^[a-zA-Z0-9_.\-.]{4,16}$/; // Letras, numeros, guion y guion_bajo
        const validEmail = /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/;
        const validPassword = /^.{4,12}$/; // 4 a 12 digitos.
        const validPicture = /(http(s?):)([/|.|\w|\s|-])*\.(?:jpg)/ ;

        let error= {};
        if(!input.firstName) {
            error.firstName = 'This field cannot be empty';
        }
        else if(!validName.test(input.firstName)) {
            error.firstName = 'Special characters or numbers are not allowed';
        }
        if(!input.lastName) {
            error.lastName = 'This field cannot be empty';
        }
        else if(!validName.test(input.lastName)) {
            error.lastName = 'Special characters or numbers are not allowed';
        }
        else if(!input.age) {
            error.age = 'This field cannot be empty'
        }
        else if(input.age <= 16) {
            error.age = 'You must be over 16 years old';
        }
        else if(!input.userName) {
            error.userName = 'This field cannot be empty';
        }
        else if(!validUser.test(input.userName)) {
            error.userName = 'The user must have 4 to 10 digits';
        }
        else if(!input.email.length) {
            error.email = 'This field cannot be empty';
        }
        else if(!validEmail.test(input.email)) {
            error.email = 'Special characters or numbers are not allowed';
        }
        else if(!input.password) {
            error.password = 'This field cannot be empty';
        }
        else if(!validPassword.test(input.password)) {
            error.password = 'The password must have 4 to 10 digits';
        }
        else if(input.password !== input.password2) {
            error.password2 = 'Both passwords must be the same';
        }
        else if(input.picture && !validPicture.test(input.picture)) {
            error.picture = 'This is not a valid URL'
        }
        return error;
    }
    const disable = useMemo(() => {
        if( error.firstName || error.lastName || error.age || error.userName|| error.email || error.password || error.password2 || error.picture ) {
            return true;
        }
        return false;
    }, [error])   

    const [input, setInput] = useState({
        firstName:"",
        lastName: "",
        age: "",
        userName: "",
        email: "",
        password: "",
        password2:"",
        picture:"",
        plan:"standar"
    })

    useEffect(() =>  {
        setError(validate(input))
    }, [input])

    function handleChange(e) {
        e.preventDefault();
        setInput({
            ...input,
            [e.target.name]: e.target.value
        });
        setError(validate({
            ...input,
            [e.target.name]: e.target.value
        }))
    }
    
    function handleSubmit(e) {
        e.preventDefault();
        dispatch(postUser(input))
        alert('User created successfully!')
        setInput({
            firstName: "",
            lastName: "",
            age: "",
            userName: "",
            email: "",
            password: "",
            password2: "",
            picture: "",
            plan:"standar"
        })
    }

    return (
        <>
            <h1>Sign up</h1>
            <form onSubmit={handleSubmit}> 
                <div>
                    <label>First name*:</label>
                    <input   
                    type="text"
                    placeholder="First name"
                    name="firstName"
                    onChange={handleChange}
                    />
                    {
                        error.firstName && 
                        <p>
                            {error.firstName}
                        </p>
                    }
                </div>
                <div>
                    <label>Last name*:</label>
                    <input   
                    type="text"
                    placeholder="Last name"
                    name="lastName"
                    onChange={handleChange}
                    />
                    {
                        error.lastName && 
                        <p>
                            {error.lastName}
                        </p>
                    }
                </div>
                <div>
                    <label>Age*:</label>
                    <input 
                    type="number"
                    placeholder="Age"
                    name="age"
                    onChange={handleChange}
                    />
                    {
                        error.age && 
                        <p>
                            {error.age}
                        </p>
                    }
                </div>
                <div>
                    <label>User name*:</label>
                    <input 
                    type="text"
                    placeholder="User name"
                    name="userName"
                    onChange={handleChange}
                    />
                    {
                        error.userName && 
                        <p>
                            {error.userName}
                        </p>
                    }
                </div>
                <div>
                    <label>Email*:</label>
                    <input 
                    type="email"
                    placeholder="email"
                    name="email"
                    onChange={handleChange}
                    />
                    {
                        error.email && 
                        <p>
                            {error.email}
                        </p>
                    }
                </div>
                <div>
                    <label>Password*:</label>
                    <input 
                        type="password"
                        placeholder="Password"
                        name="password"
                        onChange={handleChange}
                    />
                    {
                        error.password && 
                        <p>
                            {error.password}
                        </p>
                    }
                </div>
                <div>
                    <label>Repeat password*:</label>
                    <input 
                    type="password"
                    placeholder="Repeat password"
                    name="password2"
                    onChange={handleChange}
                    />
                    {
                        error.password2 && 
                        <p>
                            {error.password2}
                        </p>
                    }
                </div>
                <div>
                    <label>Picture:</label>
                    <input 
                        type="url"
                        alt="img not found"
                        placeholder="Picture"
                        name="picture"
                        onChange={handleChange}
                    />
                    {
                        error.picture && 
                        <p>
                            {error.picture}
                        </p>
                    }
                </div>
                <div>
                    <label>
                    <input 
                        type="checkbox"
                        name="terminos"
                        id="terminos"
                    />
                    Acepto los Terminos y Condiciones
                    </label>
                </div>
                <div>
                    <button 
                        type="submit"
                        disabled={disable}
                        onChange={handleChange}>
                        Sign up
                    </button>
                </div>
            </form> 
        </>
    )
}
