import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import LoginContextProvider from './store/Login-Context';
import { BrowserRouter } from 'react-router-dom'
import CandidatContextProvider from './store/Candidat-Context';
import RecruresContextProvider from './store/Recrures-Context';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <RecruresContextProvider>
  <CandidatContextProvider>
  <LoginContextProvider>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </LoginContextProvider>
  </CandidatContextProvider>
  </RecruresContextProvider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
