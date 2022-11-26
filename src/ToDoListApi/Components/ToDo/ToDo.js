import React, { useContext } from 'react'
import "bootstrap/dist/css/bootstrap.min.css";
import { StateContext } from '../../Context/StateProvider'
import './ToDo.scss'
import AddToDo from './AddToDo';
import ShowToDo from './ShowToDo';

export default function ToDo() {
    const { data } = useContext(StateContext);

  return (
    <div className='container'>
         <div className='row justify-content-center'>
            <div className='col-5'>
               <h1 className='text-center py-5'>Todo Lists</h1>
               <AddToDo />
               <ShowToDo />
            </div>
         </div>
      </div>
  )
}
