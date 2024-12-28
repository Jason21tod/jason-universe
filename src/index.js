import React from 'react';
import ReactDOM from 'react-dom/client';
import WhoIam from './components/WhoIam.jsx';
import Projects from './components/Projects.jsx';
import Header from './components/header/Header.jsx';
import WhereFindMe from './components/WhereFindMe.jsx';
import reportWebVitals from './reportWebVitals.js';
import './components/index.css'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Header />
    <main>
      <WhoIam />
      <Projects />
      <WhereFindMe />
    </main>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
