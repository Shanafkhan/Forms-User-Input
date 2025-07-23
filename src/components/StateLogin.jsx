import { useState } from "react";
import { isEmail, isNotEmpty, hasMinLength } from "../util/validation.js";
import Input from "./Input.jsx";
import { useInput } from "../hooks/useInput.js";
export default function Login() {
  const {
    value: emailValue,
    handleInputChange: handleEmailChange,
    handleInputBlur: handleEmailBlur,
    hasError : emailHasError,
  } = useInput("", (value) => isEmail(value) && isNotEmpty(value));

  const {
    value: passwordValue,
    handleInputChange: handlePasswordChange,
    handleInputBlur: handlePasswordBlur,
    hasError : passwordHasError,
  } = useInput("", (value) => hasMinLength(value,6));


  function handleSubmit(event) {
    event.preventDefault(); // To prevent the default submission action
    if(emailHasError || passwordHasError){
      return;
    }
    console.log(enteredValue);
  }

  return (
    <form onSubmit={handleSubmit}>
      <h2>Login</h2>

      <div className='control-row'>
        <Input
          label='Email'
          id='email'
          type='email'
          name='email'
          onBlur={handleEmailBlur}
          onChange={handleEmailChange}
          value={emailValue}
          error={emailHasError && "email is invalid"}
        />
        <Input
          label='password'
          id='password'
          type='password'
          name='password'
          onChange={handlePasswordChange}
          onBlur={handlePasswordBlur}
          value={passwordValue}
          error={passwordHasError && "password is invalid"}
        />
      </div>

      <p className='form-actions'>
        <button className='button button-flat'>Reset</button>
        <button className='button'>Login</button>
      </p>
    </form>
  );
}
