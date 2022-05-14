import { useState, useEffect } from "react";
import { validate } from "../../Functions/validacionesForm/validationForm";
import { Container, Form, Button} from 'semantic-ui-react';
import '../Form/Form.css';
import { useNavigate } from "react-router-dom";

const FormAdmin = () => {
    const [error, setError] = useState({});
    const navigate = useNavigate();

    const [input, setInput] = useState({
        email: "",
        password: "", 
    })

    useEffect(() => {
        setError(validate(input))
    }, [input])

    // useEffect(()=>{
    //     setTimeout(() => {
    //     dispatch(getAdmin(user?.email))
    //     }, 5000)
        
    // }, [dispatch, user]);

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
        setInput({
            email: "",
            password: "",
        })
        navigate('/admin')
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
            <h1>LOGIN ADMIN</h1>
            <Form style={{ width:"30%"}} onSubmit={handleSubmit} >
                <div>
                    <label>Email*:</label>
                    <input
                        type="email"
                        placeholder="Email"
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
                <br/>
                <div>
                    <Button
                        type="submit"
                        onChange={handleChange}>
                        Register
                    </Button>
                </div>
            </Form>
        </Container>
    )
}

export default FormAdmin