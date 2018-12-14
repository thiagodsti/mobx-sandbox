import React from 'react';
import PropTypes from 'prop-types';

const Decrease = props => (
  <div>
    <p>Decrease value!</p>
    <button type="button" onClick={() => props.changePage('/number')}>Go to increase value</button>
    <br />
    <button type="button" onClick={() => props.decrease()}>Decrease Value</button>
  </div>
);

Decrease.propTypes = {
  changePage: PropTypes.func.isRequired,
  decrease: PropTypes.func.isRequired,
};

export default Decrease;
