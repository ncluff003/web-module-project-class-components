import React from "react";
import Todo from "./Todo";

export default class TodoList extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        {this.props.todos &&
          this.props.todos.map((task, i) => {
            return <Todo task={task} completeTodo={this.props.completeTodo} key={i} />;
          })}
      </div>
    );
  }
}
