import React, {useState} from "react";
import { useDispatch } from 'react-redux';
import {getCharacterByName} from "../../../Redux/Actions/actions"
import { FiSearch } from "react-icons/fi";
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
                title:"Name not found",
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
                style={{
                    borderRadius: "25px",
                    border: "none",
                    width: "30%",
                    padding: "10px",
                    margin: "10px",
                  }}
                value={name}
                placeholder="Search character name"
                onChange={e => { handleChange(e) }}
            />
            
            <button
                onClick={e => { handleSubmit(e) }}
                style={{
                    background: "transparent",
                    border: "none",
                    width: "5%",
                    padding: "10px",
                    overflow: "visible",
                    /* margin: auto; */
                    position: "relative",
                    margin: "-81px",
                  }}
            >
                <FiSearch />
            </button>
        </div>
    )
}


export default SearchBarCharacter