import React, { useState } from "react";
import DatePicker from "react-datepicker";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import "react-datepicker/dist/react-datepicker-min.module.css";

const TodoForm = (props) => {
  const initialDateState = (dueDate) => {
    return dueDate ? new Date(dueDate) : new Date();
  };
  const [dueDate, setDueDate] = useState(() => {
    const initialState = initialDateState(props.todo.dueDate);
    return initialState;
  });
  const [title, setTitle] = useState(props.todo.title || "");
  const [description, setDescription] = useState(props.todo.description || "");
  const [completed, setCompleted] = useState(props.todo.completed || false);

  const handleSubmitForm = (dueDate, title, description) => {
    const formData = {
      id: props.todo.id || undefined,
      title: title,
      description: description,
      completed: completed,
      dueDate: dueDate.toLocaleDateString(),
    };

    props.onSubmitForm(formData);
  };

  return (
    <Form onSubmit={handleSubmitForm}>
      <Form.Group>
        <Form.Label>Title:</Form.Label>
        <Form.Control
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        ></Form.Control>
      </Form.Group>
      <Form.Group>
        <Form.Label>Due Date:</Form.Label>
        <div>
          <DatePicker
            selected={dueDate || new Date()}
            onSelect={(date) => setDueDate(date)}
          />
        </div>
      </Form.Group>
      <Form.Group>
        <Form.Check
          type="checkbox"
          checked={completed}
          onChange={(e) => setCompleted(e.target.checked)}
          label="Completed:"
        ></Form.Check>
      </Form.Group>
      <Form.Group>
        <Form.Label>Description:</Form.Label>
        <Form.Control
          as="textarea"
          rows={3}
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        ></Form.Control>
      </Form.Group>

      <Button variant="secondary" onClick={props.onCloseForm}>
        Cancel
      </Button>
      <Button
        onClick={() => handleSubmitForm(dueDate, title, description)}
        variant="secondary"
      >
        Submit
      </Button>
    </Form>
  );
};

export default TodoForm;
