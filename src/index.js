import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import './App.css';
import App from './App';
import DarkModeTheme from './contexts/DarkModeTheme';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
        <DarkModeTheme>
                <App />
        </DarkModeTheme>
);

