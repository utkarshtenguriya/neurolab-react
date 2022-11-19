import React, { useState } from "react";

export const AddTodos = (props) => {
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const submit = (e) => {
    e.preventDefault();
    if (!title || !desc) {
      alert("title or desc is empty");
    } else {
      props.AddTodo(title, desc);
      setTitle("");
      setDesc("");
    }
  };
  return (
    <div className="container">
      <h3 className="my-3"> Add Todos</h3>

      <form onSubmit={submit}>
        <div className="mb-3">
          <label htmlFor="exampleInputEmail1" className="form-label">
            Todo Title
          </label>
          <input
            type="text"
            value={title}
            onChange={(e) => {
              setTitle(e.target.value);
            }}
            className="form-control"
            id="title"
            aria-describedby="emailHelp"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputPassword1" className="form-label">
            Todo Description
          </label>

          <input
            type="text"
            value={desc}
            onChange={(e) => {
              setDesc(e.target.value);
            }}
            className="form-control"
            id="desc"
          />
        </div>

        <button type="submit" className="btn btn-success btn-sm ">
          Add Todo
        </button>
      </form>
    </div>
  );
};
