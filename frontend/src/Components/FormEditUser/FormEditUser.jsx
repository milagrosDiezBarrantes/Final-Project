import { useEffect, useState } from "react";
import { useDispatch } from 'react-redux';
import { userEdit } from "../../Redux/Actions/actions";
import { Container, Form, Button} from 'semantic-ui-react';
import { useNavigate, Link } from 'react-router-dom';
import { validate } from "../../Functions/validacionesForm/validationForm";
import { useSelector } from "react-redux";


const FormEditUser = ({ handleClose}) => {
    const dispatch = useDispatch();
    const [error, setError] = useState({});
    const navigate= useNavigate(); 
    const log = useSelector((state) => state.ComicsReducer.prueba);

    console.log(log.prueba)
    console.log('log', log)

    const [input, setInput] = useState({
        name: log.name, 
        picture: log.picture,
        nickname: log.nickname, 
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
        setInput ({
            name,
            picture,
            nickname,
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
            <h1>Edit Data</h1>
            <Form style={{ width:"30%"}} onSubmit={handleSubmit} >
                <div>
                    <label>Name:</label>
                    <input
                        type="email"
                        placeholder="Name"
                        name="name"
                        onChange={handleChange}
                    />
                    {error.email && <p style={{ color:"red"}} >{error.email}</p>}
                </div>
                <div>
                    <label>NickName*:</label>
                    <input
                        type="NickName"
                        placeholder="NickName"
                        name="nickname"
                        onChange={handleChange}
                        autocomplete="current-password"
                    />
                    {error.password && <p style={{ color:"red"}} > {error.password} </p>}
                </div>
                <div>
                    <label>Picture*:</label>
                    <input
                        type="picture"
                        placeholder="picture"
                        name="picture"
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
                    <Link to="/profile">
                        <Button> Back </Button>
                    </Link>
                    <Button type="submit"> Confirm </Button>
                </div>
            </Form>
        </Container>
    )
}

export default FormEditUser;
