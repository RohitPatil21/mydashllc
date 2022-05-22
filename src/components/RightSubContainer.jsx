import React from 'react';
import "../Scss_Styles/Main.scss";
import { useState } from 'react';
import FormInput from './FormInput';


const RightSubContainer = () => {

  const [values, setValues] = useState({
    email: "",
    password: "",
    confirmPassword: "",
    fullName: "",
    phoneNumber: "",
    checked : false,
  });

  const [checked, setChecked] = useState(false);

  const inputs = [
    {
      id: 1,
      className: "inputBox",
      name: "email",
      type: "email",
      errorMessage: "It should be a valid email address!",
      label: "Your email address",
      required: true,
    },
    {
      id: 2,
      className: "inputBox",
      name: "password",
      type: "password",
      errorMessage:
        "Password should be 8-20 characters and include at least 1 letter, 1 number and 1 special character!",
      label: "Your password",
      pattern: `^(?=.*[0-9])(?=.*[a-zA-Z])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,20}$`,
      required: true,
    },
    {
      id: 3,
      className: "inputBox",
      name: "confirmPassword",
      type: "password",
      errorMessage: "Passwords don't match!",
      label: "Confirm your password",
      pattern: values.password,
      required: true,
    },
    {
      id: 4,
      className: "inputBox",
      name: "fullName",
      type: "text",
      errorMessage:
        "Username should be 3-16 characters and shouldn't include any special character!",
      label: "Your full name",
      pattern: "^.* .*$",
      required: true,
    },

    {
      id: 5,
      className: "phoneInputBox",
      name: "phoneNumber",
      type: "phone",
      errorMessage: "Incorrect phone number",
      label: "Your phone Number",
      pattern: "[7-9]{1}[0-9]{9}",
      required: true,
    }
  ];

  const handleSubmit = (e) => {
    e.preventDefault();

    if(values.email!=="" && values.password!=="" && values.password === values.confirmPassword && values.fullName!=="" && values.phoneNumber!=="" && checked == true) {
      alert("success");
    }

    setValues({
      email: "",
      password: "",
      confirmPassword: "",
      fullName: "",
      phoneNumber: "",
    });
  };

  const onChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
    setValues(values.checked = !checked)
  };

 


  return (
    <div className='sub-container right-container'>

      <div className='form-container'>

        <form onSubmit={handleSubmit}>

          <h2> Create an account </h2>

          {inputs.map((input) => (
            <FormInput
              key={input.id}
              {...input}
              value={values[input.name]}
              onChange={onChange}
              className={input.className}
            />
          ))}

          <input type="checkbox" className='checkBox' checked={values.checked} onChange={onChange} />
          <p className='terms-conditons'> I read and agree Terms and Conditions</p>

          <button type="submit" className='btn btn-create-account'> Create account </button>

        </form>

      </div>

    </div>
  )
}

export default RightSubContainer