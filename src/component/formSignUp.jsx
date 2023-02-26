import React, {useState, useEffect} from 'react'
import validateInformation from '../hook/validateInformation'
// import useForm from './useForm';
import "../styles/formStyle.css"

const FormSignUp = ({submitForm}) => {
  // const {handleChange, values} = useForm();

  const [values , setValues] = useState({
    username:'',
    email:'',
    password:'',
    password2:''
  })

  const [errors, setErrors] = useState({})

  const [dataisCorrect, setDataisCorrect] = useState(false)
  
  const handleChange = (event) =>{

    setValues({
      ...values,
      [event.target.name]:event.target.value
    })
  }

  const handleSubmit = (event) =>{
    event.preventDefault();

    setErrors(validateInformation(values));
    setDataisCorrect(true); 
  }

  useEffect( () =>{
    if(Object.keys(errors).length === 0 && dataisCorrect){
      submitForm(true);
    }
  },
   [errors]
  )
  return (
    <div className='form-content'>
      <form action="" className="formElement" onSubmit={handleSubmit} noValidate>
        <h2>
          Get started with React Form. Create your account by filling out the information below
        </h2>
        <div className="form-inputs">
          <label htmlFor="userName" className="form-labels">
            Username
          </label>
          <input 
              id="username "
              type="text"  
              name="username" 
              className='form-input' 
              placeholder='enter your username'
              value ={values.username}
              onChange={handleChange}/>
          {errors.username && <p> {errors.username} </p> }
        </div>
        <div className="form-inputs">
          <label htmlFor="email" className="form-labels">
            Email
          </label>
          <input 
              id="email"
              type="email"  
              name="email" 
              className='form-input' 
              placeholder='enter your email'
              value ={values.email}
              onChange={handleChange}/>
              {errors.email && <p> {errors.email} </p> }
        </div>
        <div className="form-inputs">
          <label htmlFor="password" className="form-labels">
            password
          </label>
          <input 
              id="password"
              type="password"  
              name="password" 
              className='form-input' 
              placeholder='enter your password'
              value ={values.password}
              onChange={handleChange}/>
          {errors.password && <p> {errors.password} </p> }
        </div>
        <div className="form-inputs">
          <label htmlFor="password2" className="form-labels">
            confirm your password
          </label>
          <input 
              id="password2"
              type="password"  
              name="password2" 
              className='form-input' 
              placeholder='conrfirm your password'
              value ={values.password2}
              onChange={handleChange}/>
          {errors.password2 && <p> {errors.password2} </p> }
        </div>
        <button className="form-btn">
          Sign Up
        </button>
        <span className="form-login">
          Already have an account? Login <a href="#">Here</a>
        </span>
      </form>

    </div>
  )
}

export default FormSignUp