// index.tsx
import React from 'react';
import ReactDOM from 'react-dom/client'; // Ensure correct import
import './theme/index.css'; // Make sure the path is correct
import App from './ui/App'; // Import as default export

const container = document.getElementById('root');
if (container) {
  const root = ReactDOM.createRoot(container);
  root.render(<App />);
}
