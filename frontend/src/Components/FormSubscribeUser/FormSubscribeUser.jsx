import React, { useEffect, useMemo, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { Container, Form, Button } from 'semantic-ui-react';
import { validate } from '../../Functions/validacionesForm/validationForm';
import { createUser, getPlans } from '../../Redux/Actions/actions';

const FormSubscribeUser = () => {

    const dispatch = useDispatch();
    const [error, setError] = useState({});
    const comicsReducer = useSelector((state) => state.ComicsReducer.plans);
    console.log(comicsReducer)
    const navigate= useNavigate(); 

    const disable = useMemo(() => {
        if(error.firstName || error.lastName || error.userName || error.password || error.password2 || error.email || error.age ) {
            return true;
        }
        return false;
    }, [error])

    const [input, setInput] = useState({
        firstName: '',
        lastName: '',
        age:'',
        userName:'',
        email:'',
        password: '',
        password2: '',
        picture:'',
        plan_id:'',
    })

    useEffect(() => {
        setError(validate(input))
    }, [input])

    useEffect(() => {
        dispatch(getPlans())
    }, [dispatch])

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
        console.log(input)
        dispatch(createUser(input));
        setInput({
            firstName: '',
            lastName: '',
            age:'',
            userName:'',
            email:'',
            password: '',
            password2: '',
            picture:'',
            plan_id:'',
        })
        navigate('/profile');
    }
    return (
        <Container
            style={{
                textAlign: "center",
                display:"flex",
                alignItems:"center",
                flexDirection: "column",
                justifyContent:"center",
                height:"100vh",
            }}
        >
            <h1>Sign Up</h1>
            <Form style={{ width:"30%"}} onSubmit={handleSubmit} >
                <div>
                    <label>First name:</label>
                    <input
                        type="text"
                        placeholder="First name"
                        name="firstName"
                        value={input.firstName}
                        onChange={handleChange}
                    />
                    {error.firstName && <p style={{ color:"red"}} >{error.firstName}</p>}
                </div>
                <div>
                    <label>Last name:</label>
                    <input
                        type="text"
                        placeholder="Last name"
                        name="lastName"
                        value={input.lastName}
                        onChange={handleChange}
                    />
                    {error.lastName && <p style={{ color:"red"}} >{error.lastName}</p>}
                </div>
                <div>
                    <label>Age:</label>
                    <input
                        type="number"
                        placeholder="Age"
                        name="age"
                        value={input.age}
                        onChange={handleChange}
                    />
                    {error.age && <p style={{ color:"red"}} >{error.age}</p>}
                </div>
                <div>
                    <label>User name:</label>
                    <input
                        type="text"
                        placeholder="User name"
                        name="userName"
                        value={input.userName}
                        onChange={handleChange}
                    />
                    {error.userName && <p style={{ color:"red"}} >{error.userName}</p>}
                </div>
                <div>
                    <label>Email:</label>
                    <input
                        type="email"
                        placeholder="Email"
                        name="email"
                        value={input.email}
                        onChange={handleChange}
                        autoComplete="username"
                    />
                    {error.email && <p style={{ color:"red"}} >{error.email}</p>}
                </div>
                <div>
                    <label>Password*:</label>
                    <input
                        type="password"
                        placeholder="Password"
                        name="password"
                        value={input.password}
                        onChange={handleChange}
                        autoComplete="current-password"
                    />
                    {error.password && <p style={{ color:"red"}} > {error.password} </p>}
                </div>
                <div>
                    <label>Repeat password*:</label>
                    <input
                        type="password"
                        placeholder="Repeat password"
                        name="password2"
                        value={input.password2}
                        onChange={handleChange}
                        autoComplete="new-password"
                    />
                    {error.password2 && <p style={{ color:"red"}} > {error.password2} </p>}
                </div>
                <div>
                    <label>Image:</label>
                    <input
                        type="URL"
                        placeholder="Your image"
                        name="picture"
                        value={input.picture}
                        onChange={handleChange}
                    />
                    {error.picture && <p style={{ color:"red"}} > {error.picture} </p>}
                </div>
                <div>
                    <label>Select your plan</label>
                    <select key='plan_id' id='plan_id' name='plan_id'defaultValue='All' onChange={handleChange}> 
                        <option value='All'>Plans</option>
                            {comicsReducer && comicsReducer.map(e => ( 
                        <option key={e.name} value={e.id} name='plan_id'>{e.name}</option>))} 
                    </select>
                </div>
                <div>
                    <Button onChange={handleChange} type='submit' disabled={disable}> Sign up </Button>
                </div>
            </Form>
        </Container>
    )
}

export default FormSubscribeUser