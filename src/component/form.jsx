import React , {useState} from 'react'
import FormSignUp from './formSignUp'
import "../styles/formStyle.css"
import FormSucces from './formSucces'

const Form = () => {

  const [isSubmitted, setIsSubmitted] = useState(false)

  const submitForm = () =>{
    setIsSubmitted(true)
  }

  return (
    <div className='form-container'>
        {!isSubmitted? 
          (<FormSignUp submitForm = {submitForm} />):
          (<FormSucces/>)}
    </div>
  )
}

export default Form