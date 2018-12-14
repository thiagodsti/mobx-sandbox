import React from 'react';
import { storiesOf } from '@storybook/react';
import { Provider } from 'mobx-react';
import store from 'stores';
import LoginContainer from './loginContainer';


storiesOf('LoginContainer', module)
	.addDecorator(story => <Provider authStore={store.authStore}>{story()}</Provider>)
	.add('with text', () => (
  <LoginContainer />
	));
