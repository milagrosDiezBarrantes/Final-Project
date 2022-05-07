import React, { useEffect, useMemo, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { Container, Form, Button } from 'semantic-ui-react';
import { validate } from '../../Functions/validacionesForm/validationForm';
import { postUser } from '../../Redux/Actions/actions';

export const FormSubscribeUser = () => {

    const dispatch = useDispatch();
    const [error, setError] = useState({});
    const navigate= useNavigate(); 

    const disable = useMemo(() => {
        if(error.firstName || error.lastName || error.userName || error.password || error.password2 || error.email || error.picture) {
            return true;
        }
        return false;
    }, [error])

    const [input, setInput] = useState({
        firstName: '',
        lastName: '',
        userName:'',
        password: '',
        password2: '',
        email:'',
        picture:'',
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

    function handleSubmit(e, email, password) {
        e.preventDefault();
        dispatch(postUser(input));
        setInput({
            firstName: '',
            lastName: '',
            userName:'',
            password: '',
            password2: '',
            email:'',
            picture:'',
        })
        navigate('/paypal');
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
            <h1>Subscribe</h1>
            <Form style={{ width:"30%"}} onSubmit={handleSubmit} >
                <div>
                    <label>Email:</label>
                    <input
                        type="email"
                        placeholder="Email"
                        name="email"
                        onChange={handleChange}
                    />
                    {error.email && <p style={{ color:"red"}} >{error.email}</p>}
                </div>
                <div>
                    <label>Password*:</label>
                    <input
                        type="password"
                        placeholder="Password"
                        name="password"
                        onChange={handleChange}
                    />
                    {error.password && <p style={{ color:"red"}} > {error.password} </p>}
                </div>
                {/* agrego salto página para presentar */}
                <br/>
                <br/>
                <br/>
                <div>
                    <Button onChange={handleChange} type='submit' disabled={disable}> Sign up </Button>
                </div>
            </Form>
        </Container>
    )
}
