import React from 'react';

const Decrease = props => (
  <div>
    <p>Decrease value!</p>
    <button onClick={() => props.changePage('/number')}>Go to increase value</button>
    <br ></br>
    <button onClick={() => props.decrease()}>Decrease Value</button>
  </div>
)

export default Decrease;