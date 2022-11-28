import React, { useState, useContext } from 'react'
import { StateContext } from '../../Context/StateProvider';
import "react-toastify/dist/ReactToastify.css";
import { v4 as uniqueId } from "uuid";
import { ToastContainer, toast } from "react-toastify";

export default function AddToDo() {
   const { addTodo } = useContext(StateContext)

   const [jobName, setJobName] = useState({});

   const [doName, setDoName] = useState("")

   const handleAddToDo = (e) => {
      e.preventDefault();
      if (doName.trim() === '') {
         toast.error('Please fill input 🚫🚫🚫')
      } else {
         addTodo(jobName)
         setDoName('')
         toast.success('Thêm thành công 💚💚💚')
      }
   }

   const handleChangeValue = (e) => {
      const doName = e.target.value
      setDoName(doName);
      if (doName !== "") {
         setJobName({
            name: doName,
            isCompleted: false
         })
      }
   }

   return (
      <>
         <div>
            <form className='d-flex' onSubmit={handleAddToDo}>
               <input type='text' className='form-control me-2' name='name' placeholder='Vui lòng nhập...' value={doName} onChange={handleChangeValue} />
               <button type='submit' className='btn btn-primary'>Add</button>
            </form>
         </div>
         <ToastContainer />
      </>
   )
}
