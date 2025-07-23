import { useState } from "react";
import Input from "./Input.jsx";
export default function Login() {
  // const [enteredEmail, setEnteredEmail] = useState("");
  // const [enteredPassword, setEnteredPassword] = useState("");

  const [enteredValue, setEnteredValue] = useState({
    email: "",
    password: "",
  });

  const [didEdit, setDidEdit] = useState({
    email: false,
    password: false,
  });

  const emailIsInvalid = didEdit.email && !enteredValue.email.includes("@");
  const passwordIsInvalid = didEdit.password && enteredValue.password.trim().length<6;

  function handleSubmit(event) {
    event.preventDefault(); // To prevent the default submission action
    console.log(enteredValue);
  }

  function handleInputChange(identifier, event) {
    setEnteredValue((prevValues) => ({
      ...prevValues,
      [identifier]: event,
    }));
    setDidEdit((prevEdit) => ({
      ...prevEdit,
      [identifier]: false,
    }));
  }

  function handleInputBlur(identifier) {
    setDidEdit((prevEdit) => ({
      ...prevEdit,
      [identifier]: true,
    }));
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
          onBlur={() => handleInputBlur("email")}
          onChange={(event) => {
            handleInputChange("email", event.target.value);
          }}
          value={enteredValue.email}
          error={emailIsInvalid && "email is invalid"}
        />
        <Input
          label='password'
          id='password'
          type='password'
          name='password'
          onChange={(event) => {
            handleInputChange("password", event.target.value);
          }}
          onBlur={()=>handleInputBlur("password")}
          value={enteredValue.password}
          error={passwordIsInvalid && "password is invalid"}
        />
      </div>

      <p className='form-actions'>
        <button className='button button-flat'>Reset</button>
        <button className='button'>Login</button>
      </p>
    </form>
  );
}
