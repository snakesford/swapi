import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import 'tachyons';
import CardList from './CardList.js';
import reportWebVitals from './reportWebVitals';
import { robots } from './robots';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <CardList robots={robots}/>
  </React.StrictMode>
);

reportWebVitals();
