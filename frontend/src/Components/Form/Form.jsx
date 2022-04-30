import { useState, useMemo, useEffect } from "react";
import { useDispatch } from 'react-redux';
import { postUser } from "../../Redux/Actions/actions";
import { validate } from "../../Functions/validacionesForm/validacionFormLog";

export const Form = () => {
    const dispatch = useDispatch();
    const [error, setError] = useState({});


    const disable = useMemo(() => {
        if (error.firstName || error.lastName || error.age || error.userName || error.email || error.password || error.password2 || error.picture) {
            return true;
        }
        return false;
    }, [error])

    const [input, setInput] = useState({
        firstName: "",
        lastName: "",
        age: "",
        userName: "",
        email: "",
        password: "",
        password2: "",
        picture: "",
        plan: "standar"
    })

    useEffect(() => {
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
            plan: "standar"
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
