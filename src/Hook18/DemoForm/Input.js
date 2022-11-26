import React, {useId} from 'react'

const Input = React.forwardRef(({name, label}) => {
  const id = useId()
  return (
    <div>
        <label htmlFor={id}>{label}</label>
        <input type={'text'} name={name} id={id} placeholder={label}/>
    </div>
  )
})

export default Input



