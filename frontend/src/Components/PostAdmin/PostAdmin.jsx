import React, { useState } from 'react';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { Container, Form, Button } from 'semantic-ui-react';
import { validate } from '../../Functions/validacionesForm/validationForm';
import { postComic } from '../../Redux/Actions/actions';

const PostAdmin = () => {
    const dispatch = useDispatch();
    const [error, setError] = useState({});
    const navigate = useNavigate();

    // const disable = useMemo(() => {
    //     if(error.title || error.img ) {
    //         return true;
    //     }
    //     return false;
    // }, [error])

    const [input, setInput] = useState({
        title: '',
        img: '',
        description:'',
        pages:'',
        creators:[],
    })

    useEffect(() => {
        setError(validate(input))
    },[input])

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
        console.log('ACA HANDLESUBMIT DEL POST ADMIN', input)
            dispatch(postComic(input))
            alert('Post created successfully!')
            setInput({
                title: '',
                img: '',
                description:'',
                pages:'',
                creators:[],
            })
            navigate('/homeComics');
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
            <h1 style={{textAlign: "center"}}> Create Post</h1>
            <Form style={{ width:"30%"}} onSubmit={handleSubmit}>
                <div>
                    <label>Title:</label>
                        <input
                            type="text"
                            placeholder="Title comic"
                            name='title'
                            value={input.title}
                            onChange={handleChange}
                        />
                    {error.title && <p style={{ color:"red"}}> {error.title}</p>}
                </div>
                <div>
                    <label>Description:</label>
                    <textarea 
                        type="text"
                        name='description'
                        value={input.description} 
                        placeholder='Description Comic'
                        onChange={handleChange}
                    />
                </div>
                <div>
                    <label>Image:</label>
                    <input
                        type="url"
                        name='img'
                        value={input.img}
                        onChange={handleChange}
                        placeholder='Image Comic'
                    />
                    {error.picture && <p style={{ color:"red"}}> {error.picture}</p>}
                </div>
                <div>
                    <Button 
                        onChange={handleChange} 
                        // disabled={disable} 
                        type='submit'
                    >
                        Create Post
                    </Button>
                </div>
            </Form>
        </Container>
    )
}

export default PostAdmin