import React from 'react'
import "react-toastify/dist/ReactToastify.css";
import { v4 as uniqueId } from "uuid";
import { ToastContainer, toast } from "react-toastify";

export default function AddToDo() {
    const handleAddToDo = () => {

    }

    const handleChangeValue = () => {

    }

  return (
      <>
          <div>
              <form className='d-flex' onSubmit={handleAddToDo}>
                  <input type='text' className='form-control me-2' name='name' placeholder='Vui lòng nhập...' value={''} onChange={handleChangeValue} />
                  <button type='submit' className='btn btn-primary'>Add</button>
              </form>
          </div>
          <ToastContainer />
      </>
  )
}
