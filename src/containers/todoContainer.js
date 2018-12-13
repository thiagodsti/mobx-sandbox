import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import TodoList from '../components/todoList';
import { inject, observer } from 'mobx-react';

@inject('todoStore')
@observer
class TodoContainer extends Component {


    addTodo = () => {
      const msg = prompt('Type what you should do?')
      const todo = {
        msg: msg,
        status: 'TODO'
      }
      this.props.todoStore.add(todo);

    }

    handleRemoveItem = (item) => {
      this.props.todoStore.remove(item);
    }

    render() {
        return (
          <div>
            <header className="App-header">

            <Link to="/">Back</Link>

            <p>Welcome to Todo APP</p>

            <button onClick={this.addTodo}>Add TODO</button>

            { this.props.todoStore.list.length === 0 ?
              <p>List is Empty!</p>
              : <TodoList list={this.props.todoStore.list} handleRemove={this.handleRemoveItem} />  
            }

            </header>

          </div>
        );
      }

}

export default TodoContainer;
