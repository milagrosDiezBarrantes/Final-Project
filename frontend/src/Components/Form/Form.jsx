import { useState, useMemo, useEffect } from "react";
import { useDispatch } from 'react-redux';
import { postUser } from "../../Redux/Actions/actions";
import { validate } from "../../Functions/validacionesForm/validacionFormLog";
import '../../Components/Form/Form.css';

const Form = () => {
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
        <div>
            
            <form onSubmit={handleSubmit} className="formSign">
                <h1 className="form-title">Sign up</h1>
                <div>
                    <label>First name*:</label>
                    <input
                        type="text"
                        placeholder="First name"
                        name="firstName"
                        onChange={handleChange}
                    />
                    {error.firstName && <p className='err-color'> {error.firstName}</p>}
                </div>
                <div>
                    <label>Last name*:</label>
                    <input
                        type="text"
                        placeholder="Last name"
                        name="lastName"
                        onChange={handleChange}
                    />
                    {error.lastName && <p className='err-color'>{error.lastName} </p>}
                </div>
                <div>
                    <label>Age*:</label>
                    <input
                        type="number"
                        placeholder="Age"
                        name="age"
                        onChange={handleChange}
                    />
                    {error.age && <p className='err-color'>{error.age}</p>}
                </div>
                <div>
                    <label>User name*:</label>
                    <input
                        type="text"
                        placeholder="User name"
                        name="userName"
                        onChange={handleChange}
                    />
                    {error.userName && <p className='err-color'>{error.userName}</p>}
                </div>
                <div>
                    <label>Email*:</label>
                    <input
                        type="email"
                        placeholder="email"
                        name="email"
                        onChange={handleChange}
                    />
                    {error.email && <p className='err-color'>{error.email}</p>}
                </div>
                <div>
                    <label>Password*:</label>
                    <input
                        type="password"
                        placeholder="Password"
                        name="password"
                        onChange={handleChange}
                    />
                    {error.password && <p className='err-color'> {error.password} </p>}
                </div>
                <div>
                    <label>Repeat password*:</label>
                    <input
                        type="password"
                        placeholder="Repeat password"
                        name="password2"
                        onChange={handleChange}
                    />
                    {error.password2 && <p className='err-color'>{error.password2}</p>}
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
                    {error.picture && <p className='err-color'>{error.picture}</p>}
                </div>
                <div>
                    <label>
                        <input
                            className="input-accept"
                            type="checkbox"
                            name="terminos"
                            id="terminos"
                        />
                        I accept the terms and conditions
                    </label>
                </div>
                <div>
                    <button
                        className="btn-form"
                        type="submit"
                        disabled={disable}
                        onChange={handleChange}>
                        Sign up
                    </button>
                </div>
            </form>
        </div>
    )
}

export default Form