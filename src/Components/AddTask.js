import React, { useState } from "react";

const AddTask = ({ addTask }) => {
  const [term, setTerm] = useState("");

  const onTermSubmit = (event) => {
    event.preventDefault();
    setTerm("");
    addTask(term);
  };

  return (
    <form onSubmit={onTermSubmit}>
      <div className="form-group">
        <label>Add Tasks</label>
        <input
          type="text"
          term={term}
          placeholder="Add a new task"
          onChange={(event) => setTerm(event.target.value)}
        />
      </div>
      <button type="submit" className="btn btn-primary">
        Submit
      </button>
    </form>
  );
};

export default AddTask;
