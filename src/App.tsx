import React, { useState } from "react";
import "./App.css";
import InputField from "./components/InputField";
import TodoList from "./components/TodoList";
import { DragDropContext, DropResult } from "react-beautiful-dnd";
import { Todo } from "./models/models";

const App: React.FC = () => {
  const [todo, setTodo] = useState<string>("");
  const [todos, setTodos] = useState<Array<Todo>>([]);
  const [CompletedTodos, setCompletedTodos] = useState<Array<Todo>>([]);

  const handleAdd = (e: React.FormEvent) => {
    e.preventDefault();

    if (todo) {
      setTodos([...todos, { id: Date.now(), todo, isDone: false }]);
      setTodo("");
    }
  };

  const onDragEnd = (result: DropResult) => {
    const { destination, source } = result;
  
    console.log(result);
  
    if (!destination) {
      return;
    }
  
    if (destination.droppableId === source.droppableId && destination.index === source.index) {
      return;
    }
  
    let add;
    let active = [...todos];
    let complete = [...CompletedTodos];
  
    // Source Logic
    if (source.droppableId === "todosList") {
      add = active[source.index];
      active = [...active.slice(0, source.index), ...active.slice(source.index + 1)];
    } else {
      add = complete[source.index];
      complete = [...complete.slice(0, source.index), ...complete.slice(source.index + 1)];
    }
  
    // Destination Logic
    if (destination.droppableId === "todosList") {
      active = [...active.slice(0, destination.index), add, ...active.slice(destination.index)];
    } else {
      complete = [...complete.slice(0, destination.index), add, ...complete.slice(destination.index)];
    }
  
    setCompletedTodos(complete);
    setTodos(active);
  };
  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <div className="App">
        <div className="heading">Taskify</div>
        <InputField todo={todo} setTodo={setTodo} handleAdd={handleAdd} />
        <TodoList
          todos={todos}
          setTodos={setTodos}
          CompletedTodos={CompletedTodos}
          setCompletedTodos={setCompletedTodos}
        />
      </div>
    </DragDropContext>
  );
};

export default App;