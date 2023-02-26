import React, {useState, useEffect} from 'react'
import "../styles/formStyle.css"

const FormSignUp = () => {

  const [values , setValues] = useState({
    username:'',
    email:'',
    password:'',
    password2:''
  })

  const [errors, setErrors] = useState({})
  
  const handleChange = (e) =>{
    const [name, value] = e.target 

    setValues({
      ...values,
      [name]:value
    })
  }
  return (
    <div className='form-content'>
      <form action="" className="formElement">
        <h1>
          Get started with React Form. Create your account by filling out the information below
        </h1>
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
              onChange={handleChange}/>
        </div>
        <div className="form-inputs">
          <label htmlFor="email" className="form-labels">
            Email
          </label>
          <input 
              id="email"
              type="text"  
              name="email" 
              className='form-input' 
              placeholder='enter your email'
              onChange={handleChange}/>
        </div>
        <div className="form-inputs">
          <label htmlFor="password" className="form-labels">
            password
          </label>
          <input 
              id="password"
              type="text"  
              name="password" 
              className='form-input' 
              placeholder='enter your password'
              onChange={handleChange}/>
        </div>
        <div className="form-inputs">
          <label htmlFor="password2" className="form-labels">
            confirm your password
          </label>
          <input 
              id="password2"
              type="text"  
              name="password2" 
              className='form-input' 
              placeholder='conrfirm your password'
              onChange={handleChange}/>
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