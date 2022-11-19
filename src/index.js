import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Route } from 'react-router-dom'
import ScrollToTop from './ScrollToTop'
import './reset.css'
import './bg.css'



ReactDOM.render(

    <BrowserRouter>
      <ScrollToTop>
      <div class="bg">
        <Route path="/" component={App} />
      </div>
      </ScrollToTop>
    </BrowserRouter>
,
  document.getElementById('root')
);


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
