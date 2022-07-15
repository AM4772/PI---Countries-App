import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals'; 
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux'; // imported to handle store
import store from './redux/store';
import axios from 'axios'; // to deploy
// require('dotenv').config(); // to deploy
// dotenv.config(); // to deploy 

axios.defaults.baseURL = process.env.REACT_APP_API || 'http://localhost:3001'; // to deploy

ReactDOM.render( // only one ReactDOM per app
  <Provider store = { store }>  
    <BrowserRouter>
      <App />
    </BrowserRouter>    
  </Provider>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
