import React, { Fragment, useContext, useState } from 'react'
import "@fortawesome/fontawesome-free/css/all.min.css";
import { StateContext } from '../StateProvider/StateProvider';
import { deleteToDo, completedToDo } from '../StateProvider/Actions/toDoActions';
import { ToastContainer, toast } from "react-toastify";
import Swal from "sweetalert2";
import clsx from "clsx";
import './ToDo.scss'

export default function ShowToDo() {
   const { state, dispatch } = useContext(StateContext)
   const { todos } = state;

   const getIndex = (id) => {
      return todos.findIndex((todo) => todo.id == id);
   };

   const handleDelete = (id) => {
      const index = getIndex(id);
      if (index !== undefined) {
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
               dispatch(deleteToDo(index))
               toast('Xoá thành công 💖💖💖')
            }
         });
      }
   }

   const handleCompleted = (id) => {
      const index = getIndex(id);
      const todoCompleted = {
         index: index,
         status: todos[index].isCompleted ? false : true
      };

      dispatch(completedToDo(todoCompleted));
   }

   return (
      todos?.length ? (
         <div className='todo-lists p-3 mt-3 border border-light'>
            {
               todos.map(({ id, name, isCompleted }, index) => {
                  return (
                     <Fragment key={index}>
                        <div className={clsx(`px-2 d-flex justify-content-between ${isCompleted ? 'completed' : ''}`)}>
                           <h6 style={{ width: '80%' }} onClick={(e) => {
                              e.preventDefault()
                              handleCompleted(id)
                           }} className='title'>{name}</h6>
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
