import React from 'react'
import useForm from './useForm'
import validate from "./validateInfo"
import "./Form.css"

const Signup = ({ submitForm }) => {
  const { handleChange, values, handleSubmit, errors } = useForm(
    submitForm,
    validate
  );
  return (
    //#1
    <div className="form-content-right">
      
      <form classname="form" onSubmit={handleSubmit}>
        <h1> Registration Form</h1>
        <div className="form-inputs">
          <label htmlFor="username"
            className="form-label">Username: </label>
          <input
            id="username"
            type="text"
            name="username"
            className="form-input"
            placeHolder="Enter your username"
            value={values.username}
            onChange={handleChange}
          />
          {errors.username && <p>{errors.username}</p>}
        </div>
        <div className="form-inputs">
          <label htmlFor="username"
            className="form-label">Email: </label>
          <input
            id="email"
            type="email"
            name="email"
            className="form-input"
            placeHolder="Enter your email"
            value={values.email}
            onChange={handleChange}
          />
          {errors.email && <p>{errors.email}</p>}
        </div>
        <div className="form-inputs">
          <label htmlFor="username"
            className="form-label">Password: </label>
          <input
            id="password"
            type="password"
            name="password"
            className="form-input"
            placeHolder="Enter your password"
            value={values.password}
            onChange={handleChange}
          />
          {errors.password && <p>{errors.password}</p>}
        </div>
        <div className="form-inputs">
          <label htmlFor="username"
            className="form-label">Confirm Password: </label>
          <input
            id="password2"
            type="password"
            name="password2"
            className="form-input"
            placeHolder="Enter your password to confirm"
            value={values.password2}
            onChange={handleChange}
          />
          {errors.password2 && <p>{errors.password2}</p>}
        </div>
        <button className="form-input-btn"
          type="submit">
          Sign Up
        </button>
        <span className="form-input-login">
          Already have an account? Login <a href="#">here</a>
        </span>
      </form>
    </div>
  );
};

export default Signup
