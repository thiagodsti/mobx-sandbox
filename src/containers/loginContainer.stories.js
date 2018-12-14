import React from 'react';
import { storiesOf } from '@storybook/react';
import LoginContainer from './loginContainer';
import { Provider } from 'mobx-react';

const store = {
  isAuthenticated: false
};

storiesOf('LoginContainer', module)
  .addDecorator(story => <Provider store={store}>{story}</Provider>)
  .add('with text', () => (
    <LoginContainer/>
  ));