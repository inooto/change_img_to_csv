import React from 'react';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ReactDOM from 'react-dom/client';
import './scss/index.scss';
import { Home } from './pages/Home';
import { AfterRead } from './pages/AfterRead';
import { Edit } from './pages/Edit';
import { History } from './pages/History';
import { Detail } from './pages/Detail';
import { NotFound } from './pages/NotFound';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path='/home' element={<Home />} />
        <Route path='/read' element={<AfterRead />} />
        <Route path='edit' element={<Edit />} />
        <Route path='/history' element={<History />} />
        <Route path='detail' element={<Detail />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
