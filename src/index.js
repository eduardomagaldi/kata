/**
 * This is the entry point of the application.
 * You don't need to keep the current code, feel free to modify it.
 * Default output of this code is 'Hello world!' in console.
 */
import App from './App';
import ReactDOM from 'react-dom';
import React from 'react';

// App();

ReactDOM.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>,
    document.getElementById('app')
);