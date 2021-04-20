import React,{useState} from'react'
import TodoForm from './TodoForm'
function TodoList({list,deleteHandle}) {
  
   
    
    return (
        <ul>
            
            {  list.map((el,index)=>{
                return <li style={{
                    backgroundColor:'black',
                    width:'100%',
                    marginBottom:'15px',
                    color:'white',
                    position:'relative'

                }} key={index}>{el.text}<button style={{    border: '1px solid black',
                    width:'25px',height:'5px',outline:'none',color:'red',position:'absolute',top:0,right:0,borderRadius:'12.5px'}} onClick={(e)=>deleteHandle(e,index)}>x</button></li>
            })}
        </ul>
    )
}

export default TodoList
