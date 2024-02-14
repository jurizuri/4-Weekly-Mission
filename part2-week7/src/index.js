import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import Header from './component/Header';
import Footer from './component/Footer';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>
    <App/>
    <Header />
    <Footer />
  </>
);