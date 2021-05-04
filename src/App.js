import './App.css';
import React,{useState,useEffect} from 'react';
import TodoList from './Components/TodoList'
import Form from './Components/TodoForm'
function App() {
  const [state,setstate]=useState([])
  const [input,setinput]=useState('')
  const [Filter,setFilter]=useState('')

const test=(e)=>{
  e.preventDefault()
  if(input===""){
    alert("label is empty")
  }
  else{
    setstate([...state,{text:input,id:Math.floor(Math.random()*10000)}])
  setinput('')
  }
  }

  const DeleteHandelleer=(e,handel)=>{
    const handleDelete=state.filter((el,inedx)=>inedx!==handel )
    setstate(handleDelete)
    
  }
  const filterration=(name)=>{
    setFilter(name)
  }
  const ShowByFilterName=()=>{
    if(Filter.length!==0){
      return state.filter((el)=>el.text.includes(Filter))
    }
    return state;
  }
useEffect(() => {
  
  console.log('new staet=>',state)
  
},[state])
 
  return (
    <div className="App" >
     <h2 style={{color:'black',fontWeight:"bold",fontStyle:'italic'}}> What is the plane for to day!</h2>
     <hr/>
     <Form filtere={filterration}/>
      <form onSubmit={test}>
        <input type="text" value={input} onChange={e=>setinput(e.target.value)}/>

  <button type='submit'>Submit</button>
      </form>
       <TodoList deleteHandle={DeleteHandelleer} list={ShowByFilterName()}/>
  </div>
  );

}
export default App;
