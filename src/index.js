import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import store from './store';


// ReactDOM.render(
//   <Provider store={store}>
//     <Router>
//       <Route exact path="/" component={ListPage} />
//       <Route path="/details/:id" component={DetailsPage} />
//     </Router>
//   </Provider>,
//   document.getElementById('root')
// );

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // <React.StrictMode>
  <Provider store={store}>
     <App />
    {/* <Router>
      <Routes>
        <Route exact path="/" element={<ListPage />} />
        <Route path="/details/:id" element={<DetailsPage />} />
      </Routes>
    </Router> */}
  </Provider>
  // {/* <App /> */}
  // </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
