import React from "react";
import Button from "react-bootstrap/Button";
import TodoModalButton from "./todoModalButton";

function TodoItem({ todo, onEditTodo, onDeleteTodo }) {
  const handleDelete = () => {
    onDeleteTodo(todo.id);
  };

  return (
    <tr>
      <td>{todo.title}</td>
      <th>{todo.completed ? "Done" : "Pending"}</th>
      <th>{todo.description}</th>
      <th>{todo.dueDate}</th>
      <th>
        <TodoModalButton onEditTodo={onEditTodo} formType="Edit" todo={todo} />
        <Button onClick={handleDelete} variant="danger">
          Delete
        </Button>
      </th>
    </tr>
  );
}

export default TodoItem;
