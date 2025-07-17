import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { HashRouter } from 'react-router-dom'; // ⬅️ Change this
import './index.css';
import App from './App';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <HashRouter> {/* ⬅️ Change this */}
      <App />
    </HashRouter>
  </StrictMode>,
);
