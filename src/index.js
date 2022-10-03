import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Route, Router, Routes } from "react-router-dom";

// import App from './App';
import Apps from './assets/Router/Apps';
import Expenses from './assets/Router/Expenses';
import Invoice from './assets/Router/Invoice';
import Invoices from './assets/Router/Invoices';
import Home from './Home';

import './index.css'


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Home />
    {/* <BrowserRouter>
      <Routes>
        <Route path='/' element={<Apps />} >
          <Route path='invoices' element={<Invoices />} >
          <Route
            index
            element={
              <main style={{ padding: "1rem" }}>
                <p>Select an invoice</p>
              </main>
            }
          />
          </Route>  
          <Route path='invoices/:Id' element={<Invoice />} />          
          <Route path='expenses' element={<Expenses />} />
          <Route 
            path='*'
            element={ <main style={{padding: '1rem'}} >
              <p>There's nothing here...</p>
            </main> }
          />
        </Route>
      </Routes>
    </BrowserRouter> */}
    
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
