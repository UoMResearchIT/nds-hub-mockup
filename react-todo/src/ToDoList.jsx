const ToDoList = (props) => { 
  
    return ( 
      
        <ul>
        {
          props.todoList.map((i) => {
            return <li>{i}</li>
          })
        }
      </ul>
      
    ); 
    
  }; 
  
  export {ToDoList};