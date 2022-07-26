import React, {useState} from 'react'
import Signup from './Signup'
import Success from "./Success"
import "./Form.css"

const Form = () => {
  const [isSubmitted, setIsSubmitted] = useState(false)

  function submitForm() {
    setIsSubmitted(true);
  }
  return (
    <div>
        {!isSubmitted ? <Signup submitForm = {submitForm} /> : (<Success />)}
      </div>
      
  )
}

export default Form
