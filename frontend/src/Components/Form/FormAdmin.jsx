import { useState, useEffect } from "react";
import { validate } from "../../Functions/validacionesForm/validationForm";
import { Container, Form, Button} from 'semantic-ui-react';
import '../Form/Form.css';
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { getAdmin } from "../../Redux/Actions/actions";
import { useMemo } from "react";

const FormAdmin = () => {

    const[ email, setEmail] = useState ('');
    const [ password, setPassword] = useState ( '');
    
    // const handleLoginSubmit = (e) => {
    
    //     e.preventDefault();
    //     console.log("ACA HANDLESUBMIT DEL POST ADMIN");
    
    // }


    const [error, setError] = useState({});
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const [input, setInput] = useState({
        email: "",
        password: "", 
    })

    useEffect(() => {
        setError(validate(input))
    }, [input])

    const disable = useMemo(() => {
        if(error.password) {
            return true;
        }
        return false;
    }, [error]);

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
        if( input.password === "admin123" ) {
            dispatch(getAdmin(input.email));
        }
        else {
            navigate('/admin')
        }
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
{/*<form onSubmit={handleLoginSubmit}>
<input type="text" name="email" value={email} onChange={({e}) => setEmail(e.target.value)} placeholder= 'email'/>
<input type="password" name="password" value={password} onChange={({e}) => setPassword(e.target.value)} placeholder= 'password'/>
<button>
    Login
</button> */}




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
                    disabled= {disable}
                        type="submit"
                    >
                        Register
                    </Button>
                </div>
            </Form>





        </Container>
    )
}

export default FormAdmin