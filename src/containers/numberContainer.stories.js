import React from 'react';
import { storiesOf } from '@storybook/react';
import { Provider } from 'mobx-react';
import store from 'stores';
import NumberContainer from './numberContainer';
import { MemoryRouter } from 'react-router-dom'


storiesOf('NumberContainer', module)
  .addDecorator(story => <Provider numberStore={store.numberStore}>{story()}</Provider>)
  .add('increase number', () => (
    <MemoryRouter initialEntries={['/number']}>
        <NumberContainer/>
    </MemoryRouter>
  ))
  .add('decrease number', () => (
    <MemoryRouter initialEntries={['/number/decrease']}>
        <NumberContainer/>
    </MemoryRouter>
  ));