import React from "react";

export default class Todo extends React.Component {
  constructor(props) {
    super(props);
    this.name = this.props.task.name;
    this.completed = false;
  }
  render() {
    return (
      <div onClick={(e) => this.props.completeTodo(e, this.props.task.id)}>
        <p>
          {this.name}
          {this.props.task.completed ? "✔" : ""}
        </p>
      </div>
    );
  }
}
