import React, {useState} from "react";
import { useDispatch } from 'react-redux';
import {getCharacterByName} from "../../../Redux/Actions/actions"
import swal from 'sweetalert';

const SearchBarCharacter= () => {
    const dispatch = useDispatch();
    const [name, setName] = useState('');

    function handleChange(e) {
        e.preventDefault();
        
        setName(e.target.value);
    }

    function handleSubmit(e) {
        e.preventDefault();

        if (!name) {
            swal({
                title:"Comic's title not found",
                icon: "error",
            });
        }
        
        dispatch(getCharacterByName(name));
        setName('');   
    }
    return (
        <div>
            <input
                type="text"
                value={name}
                placeholder="Search character name"
                onChange={e => { handleChange(e) }}
            />
            
            <button
                onClick={e => { handleSubmit(e) }}
            >
                Search
            </button>
        </div>
    )
}


export default SearchBarCharacter