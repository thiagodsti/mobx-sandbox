import React, { Component } from 'react';
import { Route, withRouter, Link } from 'react-router-dom';
import '../App.css';
import { inject, observer } from 'mobx-react';
import Increase from '../components/increase';
import Decrease from '../components/decrease';

@inject('numberStore')
@withRouter
@observer
class NumberContainer extends Component {
	render() {
		const {
			increase: increaseNumber,
			decrease: decreaseNumber,
		} = this.props.numberStore;

		return (
  <div>
  <div>
  <Link to="/">Back</Link>
  <div>
Value:
						{this.props.numberStore.value}
</div>
				</div>

  <br />

				<Route
					exact path="/number"
      render={() => <Increase {...this.props} increase={increaseNumber} />}
				/>
  <Route
					exact path="/number/decrease"
  render={() => <Decrease {...this.props} decrease={decreaseNumber} />}
				/>
			</div>
		);
	}
}

export default NumberContainer;
