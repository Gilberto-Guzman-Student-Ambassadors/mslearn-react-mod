import React from 'react';
import ReactDOM from 'react-dom/client';

// Importación del archivo jsx
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('app'));
root.render(
  <React.StrictMode>
    {/* Componente */}
    <App /> {/* Esto también es valido --> <App></App> */}
  </React.StrictMode>
);