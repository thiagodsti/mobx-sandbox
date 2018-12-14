import React from 'react';
import { PropTypes } from 'mobx-react';

const TodoList = (props) => {
  const { list, handleRemove } = props;
  return (
    <div>
      <p>Todo List!</p>

      <ul>
        {
        /*eslint-disable*/
        list.map((item, index) => (
          <li key={index}>
            {item.status} - {item.msg} - <button type="button" onClick={() => handleRemove(item)}> X </button>
        </li>
        ))
        /* eslint-enable */
      }
      </ul>

    </div>
  );
};

TodoList.propTypes = {
  list: PropTypes.arrayOf(PropTypes.shape({
    status: PropTypes.string,
    msg: PropTypes.string,
  })).isRequired,
  handleRemove: PropTypes.func.isRequired,
};

export default TodoList;
