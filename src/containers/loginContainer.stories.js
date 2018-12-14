import React from 'react';
import { storiesOf } from '@storybook/react';
import LoginContainer from './loginContainer';

const store = {
  getState: () => {
    return {
    };
  },
};

storiesOf('LoginContainer', module)
  .addDecorator(story => <Provider store={store}>story()</Provider>)
  .add('with text', () => (
    <LoginContainer>Hello Button</LoginContainer>
  ));