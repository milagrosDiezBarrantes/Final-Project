import React, {useState} from "react";
import { useDispatch } from 'react-redux';
import {getCharacterByName} from "../../../Redux/Actions/actions"

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
            alert("Comic's title not found");
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