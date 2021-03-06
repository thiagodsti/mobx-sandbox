import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'mobx-react';
import { MemoryRouter } from 'react-router-dom';
import App from './App';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(
    <Provider authStore={{}}>
      <MemoryRouter>
        <App />
      </MemoryRouter>
    </Provider>, div,
  );
  ReactDOM.unmountComponentAtNode(div);
});
