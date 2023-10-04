import React, { useState } from 'react'


export const Todo = () => {
    const [inputText,setInputText]=useState('');
    const [todoIteam,setTodoiteam]=useState([]);
    const addTask= (e)=>{
        if(inputText!==''){
            setTodoiteam([...todoIteam,inputText])
       // console.log(todoIteam);
        setInputText('');
        
        }
        e.preventDefault()
    }
    const deleteIteam=(key)=>{
       // console.log('click')
      let newTodo = [...todoIteam];
      newTodo.splice(key,1)
      setTodoiteam([...newTodo])
    }
    const editAdd=(key)=>{
        let newTodoedit=[...todoIteam];
      const editIteam=  newTodoedit.splice(key,1);
      setTodoiteam([...newTodoedit]);
      //console.log(editIteam)
        setInputText(editIteam);
    }
  return (
    <div className="main">
         <div>TodoApp</div>
         <form onSubmit={addTask}>
            <input type='text' value={inputText} placeholder='enter your Task' onChange={(e)=>setInputText(e.target.value)} className='inputField'/>
            <input type='submit' value='+'/>
         </form>
         <h2>To-Do List</h2>
         <hr/>
         {todoIteam.map((iteam,i)=>{
            return (
                
               <div className="list-Iteam" key={i}>
                <li > {iteam}
               <button  onClick={editAdd} value='edit'>Edit</button>
               <button  onClick={deleteIteam}>-</button></li>
               </div>
            )
         })}
    </div>
    

  )
}
