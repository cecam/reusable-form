import { useState } from 'react'

const useForm = (initialState = {}) => {
    let [ state, setState ] = useState(initialState);

    const onFormChange = (event) => {
        setState({
            ...state,
            [event.target.name] : event.target.value
        })
    }

    return { state, onFormChange }
}

export default useForm;