import React, { forwardRef } from "react";

const Input = React.forwardRef(({name}, ref) => {
    return (
        <>
            <h2>{name}</h2>
            <input type='text' ref={ref} placeholder='Vui lòng nhập' />
        </>
    )
})

export default Input;