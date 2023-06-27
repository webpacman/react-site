import { createRoot } from 'react-dom/client';
import React from 'react';
import { App } from './App';

import './style.scss';

const domNode = document.getElementById('root');
if (domNode) {
  const root = createRoot(domNode);

  root.render(<App />);
}
