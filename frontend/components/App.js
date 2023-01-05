import React from "react";
import Form from "./Form";
import TodoList from "./TodoList";

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: [],
      todo: {
        name: "",
        id: Date.now(),
        completed: false,
      },
    };
  }

  completeTodo = (e, id) => {
    e.preventDefault();
    this.setState({
      ...this.state,
      ["todos"]: this.state.todos.map((task) => {
        return task.id === id ? { ...task, ["completed"]: !task.completed } : task;
      }),
    });
  };

  addTodo = (e) => {
    e.preventDefault();
    let todo = {
      name: e.target.closest("form").firstChild.value,
      id: Date.now(),
      completed: false,
    };
    this.setState({ ...this.state, ["todos"]: [...this.state.todos, todo] });
  };

  clearCompleted = (e) => {
    e.preventDefault();
    this.setState({ ...this.state, ["todos"]: this.state.todos.filter((task) => task.completed !== true) });
  };

  handleChange = (e) => {
    // Update on each keystroke
    e.preventDefault();
    const { name, value } = e.target;
    this.setState({ ...this.state, todo: { ...this.state.todo, [name]: value } });
  };

  render() {
    return (
      <div>
        <TodoList todos={this.state.todos} completeTodo={this.completeTodo} />
        <Form handleChange={this.handleChange} addTodo={this.addTodo} clearCompleted={this.clearCompleted} />
      </div>
    );
  }
}
