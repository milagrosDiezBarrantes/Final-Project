import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux';
import { getById } from '../../Redux/Actions/actions';
import { validation } from './Validation';
import { Container, Form, Button} from 'semantic-ui-react';

export const FormUpdateComic = (id) => {
    const dispatch = useDispatch();
    const comic = useState(state => state.ComicReducer.copyComics);
    const [comicDetail, setcomicDetail] = useState({
        title: '',
        description: '',
        image: '',
    });

    const [errComic, setErrComic] = useState({});
    const {title, description, image} = comicDetail;

    useEffect(()=> {
        dispatch(getById(id))
    }, [dispatch, id]);

    useEffect(()=> {
        setcomicDetail(comic)
    }, [comic]);

    const handleChange = (e) => {
        let {name, value} = e.target;
        setcomicDetail({ ...comicDetail, [name]: value });

        setErrComic(validation({ ...comicDetail, [name]: value }));
    }

    const handleSubmit = (e) => {
        e.preventDefault();
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
            <Form style={{ width:"30%"}} onSubmit={handleSubmit}>
                <Button 
                    onClick={() => {
                        setcomicDetail({
                            name: '',
                            description: '',
                            image: '',
                        })
                    }}
                >
                        
                </Button>
            </Form>
        </Container>
    )
}
