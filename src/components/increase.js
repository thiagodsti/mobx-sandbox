import React from 'react';

const Increase = props => (
  <div>
    <p>Increase value!</p>

    <button onClick={() => props.changePage('/number/decrease')}>Go to decrease value</button>
    <br ></br>
    <button onClick={() => props.increase()}>Increase Value</button>
  </div>
)

export default Increase;