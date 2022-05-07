import { useEffect, useState } from "react";
import { useDispatch } from 'react-redux';
import { userEdit } from "../../Redux/Actions/actions";
import { Container, Form, Button} from 'semantic-ui-react';
import { useNavigate} from 'react-router-dom';
import { validate } from "../../Functions/validacionesForm/validationForm";

const FormEditUser = ({ handleClose}) => {
    const dispatch = useDispatch();
    const [error, setError] = useState({});
    const navigate= useNavigate(); 

    const [input, setInput] = useState({
        email: "",
        password: "", 
        password2: "", 
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

    function handleSubmit(e, email, password, password2) {
        e.preventDefault();
        setInput ({
            email,
            password,
            password2,
        })
        dispatch(userEdit()).then(handleClose());
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
            <h1>EDITAR DATOS</h1>
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
                        autocomplete="current-password"
                    />
                    {error.password && <p style={{ color:"red"}} > {error.password} </p>}
                </div>
                <div>
                    <label>Repeat password*:</label>
                    <input
                        type="new-password"
                        placeholder="Repeat password"
                        name="password2"
                        onChange={handleChange}
                        autocomplete="new-password"
                    />
                    {error.password2 && <p style={{ color:"red"}} > {error.password2} </p>}
                </div>
                {/* agrego salto página para presentar */}
                <br/>
                <br/>
                <br/>
                <div>
                    <Button onClick={handleClose}> Back </Button>
                    <Button type="submit"> Confirm </Button>
                </div>
            </Form>
        </Container>
    )
}

export default FormEditUser;
