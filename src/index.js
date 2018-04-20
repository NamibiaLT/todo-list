import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
// import ToDoList from './ToDoList';

class ToDoList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      tasks: ['Laundry', 'Grocery Shopping', 'Cook dinner'],
    };
  }
  handleAdd(event) {
    this.setState(previousState => ({
      tasks: [...previousState.tasks, 'Have Amazon ship something'],
    }));
  }
  handleDelete(deletedTask) {
    var list = this.state.tasks;
    this.setState({
      tasks: list.filter(task => {
        return task !== deletedTask;
      }),
    });
  }
  render() {
    return (
      <div className="myList">
        <h4> Tasks: </h4>
        <ul>
          {this.state.tasks.map(task => (
            <li key={task}>
              {task}
              <button
                className="deleteButton"
                onClick={() => {
                  this.handleDelete(task);
                }}
              >
                Delete
              </button>
            </li>
          ))}
        </ul>

        <input placeholder="enter task" />
        <button className="addButton" onClick={this.handleAdd.bind(this)}>
          Add
        </button>
        <button className="clearAllButton">Clear all</button>
      </div>
    );
  }
}

ReactDOM.render(<ToDoList />, document.getElementById('root'));
registerServiceWorker();
