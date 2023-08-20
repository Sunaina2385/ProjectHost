import React from 'react';

const ToDoList=(props)=>{
  return ( 
    <>
      <div className="ToDoListStyle">
      <i className="fa-regular fa-circle-xmark" 
          onClick={()=>{props.onSelect(props.id)}}
      />
      <li>{props.text}</li>
      </div>
    </>
  );
}

export default ToDoList;