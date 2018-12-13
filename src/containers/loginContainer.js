import React, { Component } from 'react';
import { inject, observer } from 'mobx-react';
import styled from 'styled-components';


const Input = styled.input`
    margin-left: 10px;
    margin-top: 2px;
    padding: 10px;
    float: right;
`

const FormGroup = styled.div`
    flex-direction: row;
`

const Label = styled.label`
    float: left;
`

const FormGroupButtons = styled.div`
    flex-direction: row;
    float: right;
    width: 100%;
`

const Button = styled.button`
    float: right;
    padding: 10px;
    margin-top: 10px;
`

@inject('authStore')
@observer
class LoginContainer extends Component {

    state = {
        username: '',
        password: ''
    }


    login = (e) => {
        e.preventDefault();
        const isSuccess = this.props.authStore.authenticate(this.state.username, this.state.password);
        if (!isSuccess) {
            alert('Login wrong');
        } else {
            this.props.history.replace('/')
        }
    }

    handleChange = (event) => {
        const target = event.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;
    
        this.setState({
          [name]: value
        });
    }

    render() {
        return (
          <div>
            <header className="App-header">

                <p>Welcome</p>

                <form onSubmit={this.login}>
                    <FormGroup>
                        <Label htmlFor="username"><b>Username</b></Label>
                        <Input type="text" placeholder="Enter Username" name="username" value={this.state.username} onChange={this.handleChange} required />
                    </FormGroup>

                    <FormGroup>
                        <Label htmlFor="password"><b>Password</b></Label>
                        <Input type="password" placeholder="Enter Password" name="password" value={this.state.password} onChange={this.handleChange} required />
                    </FormGroup>
                
                    <FormGroupButtons>
                        <Button type="submit">Login</Button>
                    </FormGroupButtons>
                </form>

            </header>

          </div>
        );
      }

}

export default LoginContainer;
