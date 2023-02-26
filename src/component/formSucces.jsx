import React from 'react'
import imag from '../assets/img/success.jpeg'
import "../styles/formStyle.css"

const FormSucces = () => {
  return (
    <div className='form-content-success'>
      <div className="form-success">
        your request was submit successfully !
      </div>
      <img src={imag} alt="success-image" className='succes-image' />

    </div>
  )
}

export default FormSucces