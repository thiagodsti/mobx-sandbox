import React, { Component } from 'react';
import {
  Route, withRouter, Link, Redirect,
} from 'react-router-dom';
import './index.css';
import { inject, observer } from 'mobx-react';
import { Switch } from 'react-router';
import TodoContainer from './containers/todoContainer';
import NumberContainer from './containers/numberContainer';
import LoginContainer from './containers/loginContainer';
import logo from './logo.svg';


@inject('authStore')
@withRouter
@observer
class App extends Component {
  render() {
    const { history, authStore } = this.props;

    const changePage = (place) => {
      history.replace(place);
    };

    const isTokenVerified = authStore.isAuthenticated;

    const ProtectedRoute = ({ isAllowed, ...props }) => (isAllowed
      ? <Route {...props} />
      : <Redirect to="/login" />);

    return (
      <div className="App">
        <header className="App-header">


          <Switch>
            <Route exact path="/login" component={LoginContainer} />
            <ProtectedRoute
              isAllowed={isTokenVerified}
              exact
              path="/"
              render={() => (
                <div>
                  <img src={logo} className="App-logo" alt="logo" />

                  <br />
                  <Link to="/todo">Go to TODO Example</Link>
                  <br />
                  <Link to="/number">Go to Number Example</Link>

                </div>
              )}
            />
            <ProtectedRoute
              isAllowed={isTokenVerified}
              path="/number"
              render={() => <NumberContainer changePage={changePage} />}
            />
            <ProtectedRoute
              isAllowed={isTokenVerified}
              path="/todo"
              render={() => <TodoContainer changePage={changePage} />}
            />
            <ProtectedRoute
              exact
              isAllowed={isTokenVerified}
              path="/login"
              render={() => <LoginContainer />}
            />

          </Switch>
        </header>
      </div>
    );
  }
}

export default App;
