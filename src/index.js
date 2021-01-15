import 'antd/dist/antd.css';
import React from 'react';
import ReactDOM from 'react-dom';
// import { Provider } from 'react-redux';
import { BrowserRouter } from "react-router-dom";
import MainApp from './MainApp';
// import store from './store';
ReactDOM.render(
  <BrowserRouter> 
  {/* <Provider store={store}> */}
     <MainApp/>
  {/* </Provider> */}
  </BrowserRouter>,
  document.getElementById('root')
);


