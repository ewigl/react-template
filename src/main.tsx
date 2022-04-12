import React from 'react'
import ReactDOM from 'react-dom/client'
import { HashRouter } from "react-router-dom";

import './styles/index.less'
import App from './App'

const rootElement = document.getElementById('root');
if (!rootElement) throw new Error('Failed to find the root element');

ReactDOM.createRoot(rootElement).render(
  <React.StrictMode>
    <HashRouter>
      <App />
    </HashRouter>
  </React.StrictMode>
)
