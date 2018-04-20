import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

class ToDoList extends Component{
  render() {
    return(
      <div className="myList">
        <div className="header">
          <form>
            <input placeholder="enter task">
            </input>
            <button type="submit">Add</button>
            <button type="submit">Delete</button>
          </form>
        </div>
      </div>
    )
  }
}


const things = ['react', 'buy groceries', 'pay bill'];


ReactDOM.render(<ToDoList/>, document.getElementById('root'));
registerServiceWorker();
