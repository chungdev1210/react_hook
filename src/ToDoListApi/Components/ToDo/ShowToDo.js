import React, { Fragment, useContext } from 'react'
import { StateContext } from '../../Context/StateProvider';
import clsx from "clsx";
import { ToastContainer, toast } from "react-toastify";
import Swal from "sweetalert2";

export default function ShowToDo() {
   const { data, removeToDo, completeToDo } = useContext(StateContext);

   const handleDelete = (id) => {
      if (id !== undefined) {
         Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!",
         }).then((result) => {
            if (result.isConfirmed) {
               removeToDo(id)
               toast('Xoá thành công 💖💖💖')
            }
         });
      }
   }

   
   const handleCompleted = (id) => {
      const index = data.findIndex((todo) => todo.id == id);
      const isCompleted = data[index].isCompleted ? false : true;
      completeToDo(id, isCompleted)
   }

   return (
      data?.length ? (
         <div className='todo-lists p-3 mt-3 border border-light'>
            {
               data.map(({ id, name, isCompleted }, index) => {
                  return (
                     <Fragment key={index}>
                        <div style={{position: 'relative'}} className={clsx(`px-2 d-flex justify-content-between ${isCompleted ? 'completed' : ''}`)}>
                           <input
                              style={{position: 'absolute', top: '5px'}}
                              type={"checkbox"}
                              className="me-2"
                              onChange={ () => {
                                 handleCompleted(id)
                              }}
                           />
                           <h6 className='title'>{name}</h6>
                           <span><i onClick={(e) => {
                              e.preventDefault();
                              handleDelete(id)
                           }} className="fa-solid fa-trash delele_todo"></i></span>
                        </div>
                        <hr />
                     </Fragment>
                  )
               })
            }
            <ToastContainer />
         </div>
      ) : null
   )
}
