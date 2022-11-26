import React, {useRef, useEffect, useState} from 'react'

export default function DemoRef() {
    const inputRef = useRef();
    useEffect (() => {
        console.log(inputRef.current.focus())
    })
  return (
    <div>
        <h2>Waitting for you</h2>
        <input ref={inputRef} placeholder='Please fill...'/>
    </div>
  )
}
