import React from 'react';

const TodoList = props => (
  <div>
    <p>Todo List!</p>

     <ul>
      {
        props.list.map((item, index) => <li key={index}>{item.status} - {item.msg} - <button onClick={() => props.handleRemove(item)}> X </button></li>)
      }
    </ul>
    
  </div>
)

export default TodoList;