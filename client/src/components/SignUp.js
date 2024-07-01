import './SignUp.css'
import React from 'react'
import { Formik, Form, Field, ErrorMessage} from 'formik';
import * as Yup from 'yup';
import axios from 'axios';

function SignUp() {
  const initialValues = {
    username: "",
    password: "",
  };

  const validationSchema = Yup.object().shape({
    username: Yup.string().min(3).max(15).required(),
    password: Yup.string().min(4).max(20).required(),
  });

  const onSubmit = (data) => {
    axios.post("http://localhost:3001/auth", data).then(() => {
      console.log(data);
    })
  };

  return (
    <div>
      <Formik
      initialValues={initialValues}
      onSubmit={onSubmit}
      validationSchema={validationSchema}
      >
        <Form className='formContainer'>
          <label>Username:</label>
          <ErrorMessage name='username' component="span"></ErrorMessage>
          <Field
            autoComplete="off"
            name="username"
            placeholder="Ex. Masako8901"
            className="signUpFormField"
          />

          <label>Password:</label>
          <ErrorMessage name='password' component="span"></ErrorMessage>
          <Field
            autoComplete="off"
            type="password"
            name="password"
            placeholder="Your Password..."
            className="signUpFormField"
          />

          <button type='submit' className='signUpButton'>Register</button>
        </Form>

      </Formik>
    </div>
  )
}

export default SignUp