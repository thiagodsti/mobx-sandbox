import { configure } from '@storybook/react';

import '../src/index.css';

function requireAll(requireContext) {
    return requireContext.keys().map(requireContext);
  }

function loadStories() {
  //require('../stories/index.js');
  requireAll(require.context("../src", true, /.stories.jsx?$/));  
  // You can require as many stories as you need.
}

configure(loadStories, module);