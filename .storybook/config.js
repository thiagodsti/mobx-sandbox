import { configure, addDecorator } from '@storybook/react';
import React from 'react';

import '../src/index.css';


const LayoutDecorator = (storyFn) => (
  <div className="App">
    <header className="App-header">
      { storyFn() }
    </header>
  </div> 
);
addDecorator(LayoutDecorator);

function requireAll(requireContext) {
    return requireContext.keys().map(requireContext);
  }

function loadStories() {
  requireAll(require.context("../src", true, /.stories.jsx?$/));  
}

configure(loadStories, module);