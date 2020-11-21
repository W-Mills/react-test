import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import TodoForm from "./todoForm";

const TodoModalButton = ({ formType, todo, onAddTodo, onEditTodo }) => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleSubmitForm = (todo) => {
    if (formType === "Add") {
      onAddTodo(todo);
    } else if (formType === "Edit") {
      onEditTodo(todo);
    }
    handleClose();
  };

  return (
    <div>
      <Button
        variant={formType === "Add" ? "primary" : "warning"}
        onClick={handleShow}
      >
        {`${formType} Task`}
      </Button>

      <Modal show={show} onHide={handleClose} animation={false}>
        <Modal.Header closeButton>
          <Modal.Title>{`${formType} Task`}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <TodoForm
            onSubmitForm={handleSubmitForm}
            onCloseForm={handleClose}
            todo={todo || undefined}
          />
        </Modal.Body>
      </Modal>
    </div>
  );
};

export default TodoModalButton;
