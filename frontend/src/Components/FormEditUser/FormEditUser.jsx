import { useEffect, useState } from "react";
import { useDispatch } from 'react-redux';
import { setUserByEmail } from "../../Redux/Actions/actions";
import { Container, Form, Button} from 'semantic-ui-react';
import { useNavigate, Link } from 'react-router-dom';
import { validate } from "../../Functions/validacionesForm/validationForm";
import { useSelector } from "react-redux";

import Navbar from '../Navbar/Navbar';

const FormEditUser = () => {
    const navigate= useNavigate(); 
    const dispatch = useDispatch();
    const [error, setError] = useState({});
    
    const log = useSelector((state) => state.ComicsReducer.user);
    console.log(log)

    const [input, setInput] = useState({
       	nickname: log.nickname,
    	name: log.name,
    	picture: log.picture,
    	updated_at: log.name,
    	email_verified: log.email_verified,
    	sub: log.sub,   
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

    function handleSubmit(e, name, picture, nickname) {
        e.preventDefault();
        dispatch(setUserByEmail(log.email, input));
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
        <Navbar/>
            <h1>Edit Data</h1>
            <Form style={{ width:"30%"}} onSubmit={handleSubmit} >
           
                <div>
                    <label>Name</label>
                    <input
                        type="text"
                        placeholder="Your Name"
                        name="name"
                        onChange={handleChange}
                    />
                    {error.name && <p style={{ color:"red"}} >{error.name}</p>}
                </div>
  
                <div>
                    <label>Picture</label>
                    <input
                        type="url"
                        placeholder="picture"
                        name="picture"
                        onChange={handleChange}
                    />
                    {error.picture && <p style={{ color:"red"}} > {error.picture} </p>}
                </div>
                {/* agrego salto página para presentar */}
                <br/>
                <br/>
                <br/>
                <div>
                   
                    <Link to="/profile">
                        <Button onClick={handleSubmit} type="submit"> Confirm </Button>
                    </Link>
                    
                </div>
            </Form>
        </Container>
    )
}

export default FormEditUser;