
import useForm from './customHooks/useForm';
import Form from './components/Form'

const formConfig= {
  title: 'Título de formulario',
  fields: [
    {
      inputType: 'input',
      name: 'email',
      type: 'email',
      placeholder: 'Ej: correo@correo.com',
      label: 'Correo electrónico'      
    },
    {
      inputType: 'input',
      name: 'name',
      type: 'text',
      placeholder: 'Ej: Cecam 3',
      label: 'Nombre'      
    },
    {
      inputType: 'input',
      name: 'age',
      type: 'number',
      placeholder: '0',
      label: 'Edad'      
    },
    {
      inputType: 'textarea',
      name: 'description',
      placeholder: 'Ej. La mejor descripción del mundo',
      label: 'Descripción de... algo'      
    },
  ]
}

function App() {
  const formState = useForm({
    email: '',
    name: '',
    age: 0,
    description: ''
  })

  return (
    <div>
      <Form formState={formState} config={formConfig} />
      <p>{JSON.stringify(formState.state)}</p>
    </div>
  )
}

export default App;
