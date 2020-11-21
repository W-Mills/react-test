import React, { useReducer } from "react";
import TodoItem from "./todoItem";
import Table from "react-bootstrap/Table";
import TodoModalButton from "./todoModalButton";

function TodoList() {
  const initialTodos = [];

  function nextTodoId(todos) {
    const maxId = todos.reduce((maxId, todo) => Math.max(todo.id, maxId), 0);
    return maxId + 1;
  }

  const [state, dispatch] = useReducer(reducer, initialTodos, init);

  const handleAddTodo = (newTodo) => {
    return dispatch({ type: "addTodo", payload: newTodo });
  };

  const handleEditTodo = (editedTodo) => {
    return dispatch({ type: "editTodo", payload: editedTodo });
  };

  const handleDeleteTodo = (todoId) => {
    return dispatch({ type: "deleteTodo", payload: todoId });
  };

  function reducer(state, action) {
    switch (action.type) {
      case "addTodo":
        const newTodo = action.payload;
        newTodo.id = nextTodoId(state.todos);
        return { todos: [...state.todos, newTodo] };
      case "editTodo":
        const editedTodo = action.payload;
        return {
          todos: [...state.todos].map((todo) => {
            if (todo.id === editedTodo.id) {
              return editedTodo;
            } else {
              return todo;
            }
          }),
        };
      case "deleteTodo":
        return {
          todos: [...state.todos].filter((todo) => {
            return todo.id !== action.payload;
          }),
        };
      default:
        throw new Error();
    }
  }

  function init(initialTodos) {
    return { todos: initialTodos };
  }

  const todoItems = state.todos.map((todo) => {
    return (
      <TodoItem
        todo={todo}
        key={todo.id}
        onEditTodo={handleEditTodo}
        onDeleteTodo={handleDeleteTodo}
      />
    );
  });

  return (
    <div>
      <h1>Tasks To Do</h1>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Title</th>
            <th>Status</th>
            <th>Description</th>
            <th>Due Date</th>
            <th></th>
          </tr>
        </thead>
        <tbody>{todoItems}</tbody>
      </Table>
      <TodoModalButton onAddTodo={handleAddTodo} formType="Add" todo={{}} />
    </div>
  );
}

export default TodoList;
