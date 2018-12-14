import React from 'react';
import PropTypes from 'prop-types';

const Increase = props => (
  <div>
    <p>Increase value!</p>

    <button type="button" onClick={() => props.changePage('/number/decrease')}>Go to decrease value</button>
    <br />
    <button type="button" onClick={() => props.increase()}>Increase Value</button>
  </div>
);

Increase.propTypes = {
  changePage: PropTypes.func.isRequired,
  increase: PropTypes.func.isRequired,
};

export default Increase;
