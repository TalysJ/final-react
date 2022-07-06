import React from 'react';
import './Firebase/Config';
import * as ReactDOMClient from 'react-dom/client';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';


const rootElement=document.getElementById('root');
const root= ReactDOMClient.createRoot(rootElement);
root.render(
<React.StrictMode>
    <App />
    </React.StrictMode>,
    
);

serviceWorker.unregister();
