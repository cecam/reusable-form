
const Form = ({formState, config}) => {
    const { state, onFormChange } = formState;

    const renderForm = (field) => {
        switch(field.inputType) {
            case 'input':
                return (
                    <div key={field.name}>
                        <label htmlFor={field.name}>{field.label}</label>
                        <input 
                            {...field} 
                            value={state[field.name]}
                            onChange={onFormChange}
                        />
                    </div>
                )
            case 'textarea':
                return (
                    <div key={field.name}>
                        <label htmlFor={field.name}>{field.label}</label>
                        <textarea 
                            {...field} 
                            rows="4"
                            cols="20"
                            value={state[field.name]}
                            onChange={onFormChange}
                        />
                    </div>
                )
            default:
                return <p>ese no te lo manejo... aún</p>
        }
    }

    return (
        <>
            <h1>{config.title}</h1>
            {config.fields.map((field) => renderForm(field))}

        </>

    )    
}

export default Form;