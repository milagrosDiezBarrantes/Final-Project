export const validation = (input) => {
    let err = {}

    if(!input.name || /^([0-9])*$/.test(input.name)) err.name = "Name is required and it can't be just numbers"

    if(!input.description || /^([0-9])*$/.test(input.description)) err.description = "Description is required and it can't be just numbers"

    if(!input.image || /^.+\.(([pP][dD][fF])|([jJ][pP][gG]))$/.test(input.image)) err.image = "Image is invalided"

    return err;
}