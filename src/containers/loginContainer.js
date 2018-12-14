import React, { Component } from 'react';
import { inject, observer } from 'mobx-react';
import styled from 'styled-components';
import PropTypes from 'prop-types';


const Input = styled.input`
    margin-left: 10px;
    margin-top: 2px;
    padding: 10px;
    float: right;
`;

const FormGroup = styled.div`
    flex-direction: row;
`;

const Label = styled.label`
    float: left;
`;

const FormGroupButtons = styled.div`
    flex-direction: row;
    float: right;
    width: 100%;
`;

const Button = styled.button`
    float: right;
    padding: 10px;
    margin-top: 10px;
`;

@inject('authStore')
@observer
class LoginContainer extends Component {
    state = {
      username: '',
      password: '',
    }


    login = (e) => {
      const { authStore, history } = this.props;
      const { username, password } = this.state;
      e.preventDefault();
      const isSuccess = authStore.authenticate(username, password);
      if (!isSuccess) {
        alert('Login wrong');
      } else {
        history.replace('/');
      }
    }

    handleChange = (event) => {
      const { target } = event;
      const { name } = target;
      const value = target.type === 'checkbox' ? target.checked : target.value;

      this.setState({
        [name]: value,
      });
    }

    render() {
      const { username, password } = this.state;
      return (
        <div>

          <p>Welcome</p>

          <form onSubmit={this.login}>
            <FormGroup>
              <Label htmlFor="username"><b>Username</b></Label>
              <Input type="text" placeholder="Enter Username" name="username" value={username} onChange={this.handleChange} required />
            </FormGroup>

            <FormGroup>
              <Label htmlFor="password"><b>Password</b></Label>
              <Input type="password" placeholder="Enter Password" name="password" value={password} onChange={this.handleChange} required />
            </FormGroup>

            <FormGroupButtons>
              <Button type="submit">Login</Button>
            </FormGroupButtons>
          </form>

        </div>
      );
    }
}

LoginContainer.propTypes = {
  authStore: PropTypes.object.isRequired,
  history: PropTypes.object.isRequired,
};

export default LoginContainer;
