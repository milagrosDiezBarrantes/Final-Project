import { useState, useEffect } from "react";
import { validate } from "../../Functions/validacionesForm/validationForm";
import { Container, Form, Button} from 'semantic-ui-react';
import '../Form/Form.css';
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { getAdmin } from "../../Redux/Actions/actions";
import { ImportsNotUsedAsValues } from "typescript";

const FormAdmin = (email) => {
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

    // useEffect(()=>{
    //     setTimeout(() => {
    //     dispatch(getAdmin(user?.email))
    //     }, 5000)
        
    // }, [dispatch, user]);

    // const userAdmin = useSelector(state => state.ComicsReducer.loginUser)
    // const role = userAdmin.user ? userAdmin.user[0]?.role : null

    // useEffect(()=>{
    //     setTimeout(() => {
    //     
    //     }, 5000)
        
    //   }, []);


    // useEffect(() => {
    //     console.log('dispatch action in formAdmin? ',email)
       
    // }, [dispatch, email]);

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
        if(input.password === "admin1234") {
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
                    >
                        Register
                    </Button>
                </div>
            </Form>
        </Container>
    )
}

export default FormAdmin