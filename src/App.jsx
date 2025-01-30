import React from 'react'
import './App.css'
import TodoInput from './components/todoInput'
import TodoItem from './components/todoItem'

function App() {

  const [todoItems, setTodoItems] = React.useState(
    [ {todo: "clean", complete : false},
      {todo: "eat", complete: false},
      {todo: "sleep", complete: false}
    ]
  );
  const createTodoItem = (todo) => {

    const newTodoItems = [...todoItems,{todo,complete: false}];
    setTodoItems(newTodoItems);
  };

  const deleteTodoItem = (index) => {
    const newTodoItems = [...todoItems]
    newTodoItems.splice(index,1)
    setTodoItems(newTodoItems)
  };

  const completeTodoItem = (index) => {

    const newTodoItems = [...todoItems];
    newTodoItems[index].complete === false
    ? (newTodoItems[index].complete = true) 
    : (newTodoItems[index].complete = false);
    setTodoItems(newTodoItems)
  };

  const moveTodoItem = (index,direction) => {

    const newTodoItems = [...todoItems];
    const newIndex = index + direction;

    if (newIndex < 0 || newIndex >= newTodoItems.length) return;

    [newTodoItems[index], newTodoItems[newIndex]] = [newTodoItems[newIndex], newTodoItems[index]]
    setTodoItems(newTodoItems);
  };



  return (
    <>
      <div className="app">
        <TodoInput createTodoItem={createTodoItem} />
        {todoItems.map((item, index) => (
        <TodoItem key={index} index={index} item={item}
         deleteTodoItem={deleteTodoItem} 
         completeTodoItem={completeTodoItem}
         moveTodoItem={moveTodoItem}
          />
        ))}
      </div>
    </>
  );
}

export default App
