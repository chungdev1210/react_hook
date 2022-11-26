import React, {useRef} from 'react'
import Input from './Input'

export default function DemoForm() {

    const usernameRef = useRef();
    const emailRef = useRef();
    const passwordRef = useRef();


    const handleSubmit = (e) => {
        e.preventDefault();
        const name = usernameRef.current.value;
        const email = emailRef.current.value;
        const password = passwordRef.current.value;
        console.log(name, email, password)
    }

  return (
    <form style={{margin: '20px'}} onSubmit={handleSubmit}>
        <Input name='usename' label={'User Name'} ref={usernameRef}/>
        <Input name='email' label={'Email'} ref={emailRef}/>
        <Input name='password' label={'Password'} ref={passwordRef}/>
        <button type='submit'>Submit</button>
    </form>
  )
}
