import React from 'react';
import ReactDOM from 'react-dom/client';
import WhoIam from './components/sections/who_iam/WhoIam.jsx';
import Projects from './components/sections/projects/Projects.jsx';
import Header from './components/sections/header/Header.jsx';
import LetsWorkTogether from './components/sections/work_together/LetsWorkTogether.jsx';
import Footer from './components/sections/footer/Footer.jsx';
import Navigation from './components/sections/navigation/Navigation.jsx';

import WhereFindMe from './components/sections/where_find_me/WhereFindMe.jsx';
import reportWebVitals from './reportWebVitals.js';

import './reset.css';
import './components/index.css';
import './generics.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Navigation/>
    <Header />
    <main>
      <WhoIam />
      <Projects />
      <LetsWorkTogether/>
    </main>
    <footer className='footer-container'>
      <WhereFindMe />
      <Footer/>
    </footer>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
