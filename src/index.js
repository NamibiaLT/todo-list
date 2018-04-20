import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

class ToDoList extends Component{
  function toDo(props) {
    const things = props.things;
    const listItems = things.map((chore) =>
      <li key={chore}>
        {item}
      </li>
    );
    return (
      <ul>{listItems}</ul>
    );
  }
}


const things = ['react', 'buy groceries', 'pay bill'];


ReactDOM.render(<App things={things}/>, document.getElementById('root'));
registerServiceWorker();
