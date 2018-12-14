import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { inject, observer, PropTypes } from 'mobx-react';
import TodoList from '../components/todoList';

@inject('todoStore')
@observer
class TodoContainer extends Component {
    addTodo = () => {
      const { todoStore } = this.props;
      const msg = prompt('Type what you should do?');
      const todo = {
        msg,
        status: 'TODO',
      };
      todoStore.add(todo);
    }

    handleRemoveItem = (item) => {
      const { todoStore } = this.props;
      todoStore.remove(item);
    }

    render() {
      const { todoStore } = this.props;
      return (
        <div>
          <header className="App-header">

            <Link to="/">Back</Link>

            <p>Welcome to Todo APP</p>

            <button type="button" onClick={this.addTodo}>Add TODO</button>

            { todoStore.list.length === 0
              ? <p>List is Empty!</p>
              : <TodoList list={todoStore.list} handleRemove={this.handleRemoveItem} />
            }

          </header>

        </div>
      );
    }
}

TodoContainer.propTypes = {
  todoStore: PropTypes.object.isRequired,
};

export default TodoContainer;
