import React, { useState } from 'react'
import "bootstrap/dist/css/bootstrap.min.css";
import clsx from 'clsx';

export default function Login() {

   const [form, setForm] = useState({
      email: '',
      password: ''
   });

   const [errors, setErrors] = useState({})

   const handleSubmitForm = (e) => {
      e.preventDefault();

      const { email, password } = form;

      const errors = {
         email: {},
         password: {}
      };

      const isEmail = (email) => {
         const pattern = /^\w+([\\.-]?\w+)*@\w+([\\.-]?\w+)*(\.\w{2,3})+$/;
         return pattern.test(email);
      }

      const isPasswordStrength = (password) => {
         const pattern =
            /^(?=(.*[a-z]){3,})(?=(.*[A-Z]){2,})(?=(.*[0-9]){2,})(?=(.*[!@#$%^&*()\-__+.]){1,}).{8,}$/;
         return pattern.test(password);
      };

      if (typeof email === 'string' && email.trim() === '') {
         errors.email.required = "Vui lòng nhập email";
      } else if (!isEmail(email)) {
         errors.email.email = "Vui lòng nhập email hợp lệ";

      }

      if (typeof password === 'string' && password.trim() === '') {
         errors.password.required = "Vui lòng nhập password";
      } else if (!isPasswordStrength(password)) {
         errors.password.strength = "Mật khẩu không đủ mạnh";
      }

      setErrors(errors)

   }

   const getErrors = (errors, fieldName) => {
      if (errors[fieldName] !== undefined) {
         return errors[fieldName][Object.keys(errors[fieldName])[0]];
      }
      return false;
   }

   const handleChangeValue = (e) => {
      const data = { ...form }
      data[e.target.name] = e.target.value;
      setForm(data)
   }
   return (
      <div className='container mt-3'>
         <div className='row'>
            <div className='col-7'>
               <form onSubmit={handleSubmitForm}>
                  <div className='mb-3'>
                     <label htmlFor='email'>Email</label>
                     <input type='text' placeholder='Email...' className={clsx('form-control', getErrors(errors, 'email') && 'is-invalid')} id='email' name='email' onChange={handleChangeValue}
                     ></input>
                     {getErrors(errors, "email") && (
                        <div className="invalid-feedback">
                           {getErrors(errors, "email")}
                        </div>
                     )}
                  </div>
                  <div className='mb-3'>
                     <label htmlFor='password'>Password</label>
                     <input type='password' placeholder='Password...' className={clsx('form-control', getErrors(errors, 'password') && 'is-invalid')} autoComplete="on" id='password' name='password' onChange={handleChangeValue}
                     ></input>
                     {getErrors(errors, "password") && (
                        <div className="invalid-feedback">
                           {getErrors(errors, "password")}
                        </div>
                     )}
                  </div>
                  <button type='submit' className='btn btn-primary'>Login</button>
               </form>
            </div>
         </div>
      </div>
   )
}
