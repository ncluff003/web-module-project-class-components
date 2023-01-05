import React from "react";

export default class Form extends React.Component {
  constructor(props) {
    super(props);
  }

  submitForm = (e) => {
    e.preventDefault();
    this.props.addTask(e);
  };

  render() {
    return (
      <>
        <form onSubmit={(e) => this.props.addTodo(e)}>
          <input type="text" name="name" onChange={(e) => this.props.handleChange(e)} />
          <button type="submit">Add Task</button>
        </form>
        <button onClick={(e) => this.props.clearCompleted(e)}>Clear Completed</button>
      </>
    );
  }
}
