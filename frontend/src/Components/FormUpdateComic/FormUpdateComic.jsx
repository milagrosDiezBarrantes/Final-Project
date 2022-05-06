import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux';
import { getById, updateComic } from '../../Redux/Actions/actions';
import { validation } from './Validation';
import { Container, Form, Button} from 'semantic-ui-react';
import { FaTimesCircle } from 'react-icons/fa';
import AlertPopUp from '../AlertPop/AlertPop';

export const FormUpdateComic = (handleClose, id) => {
    const dispatch = useDispatch();
    const comic = useState(state => state.ComicReducer.copyComics);
    const [comicDetail, setcomicDetail] = useState({
        title: '',
        description: '',
        image: '',
    });

    const [err, setErr] = useState({});
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

        setErr(validation({ ...comicDetail, [name]: value }));
    }

    const [activeAlertUpgrade, setActiveAlertUpgrade] = useState(false);
    
    const handleOpenAlert = () => {
        setActiveAlertUpgrade(!activeAlertUpgrade)
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        handleOpenAlert()
    }

    useEffect(() => {
        dispatch(updateComic(id));
        setcomicDetail({
            title:'',
            description: '',
            image:'',   
        })

        handleClose()
    }, [dispatch, id])

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
            <h1 style={{textAlign: "center"}}> UPDATE THE COMIC</h1>
            <Form style={{ width:"30%"}} onSubmit={handleSubmit}>
                <Button 
                    onClick={() => {
                        handleClose()
                        setcomicDetail({
                            name: '',
                            description: '',
                            image: '',
                        })
                    }}
                >
                <FaTimesCircle />     
                </Button>
                <div>
                <label>Title:</label>
                    <input
                        type="text"
                        placeholder="Title comic"
                        name={title}
                        value={title}
                        onChange={handleChange}
                    />
                    {err.title && <p style={{ color:"red"}}> {err.title}</p>}
                </div>
                <div>
                    <label>Description:</label>
                    <textarea 
                        name={description}
                        value={description} 
                        placeholder='Description comic'
                        onChange={handleChange}
                    />
                </div>
                <div>
                    <label>Image:</label>
                    <input
                        name={image}
                        value={image}
                        onChange={handleChange}
                        placeholder='Image comic'
                    />
                    {err.image && <p style={{ color:"red"}}> {err.image}</p>}
                </div>
            </Form>
            <AlertPopUp
                activeAlert = {activeAlertUpgrade}
                actionAlert ='update'
                handleOpenAlert = {handleOpenAlertUpgrade}
                handleSuccess = {handlUpgradeSuccesForm}

            />
        </Container>
    )
}
