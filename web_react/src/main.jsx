
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './base.css';
import './common.css';
import './responsive.css';
import App from './App.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
);
