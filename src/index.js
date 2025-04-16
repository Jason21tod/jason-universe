import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom/client';
import WhoIam from './components/sections/who_iam/WhoIam.jsx';
import Projects from './components/sections/projects/Projects.jsx';
import Header from './components/sections/header/Header.jsx';
import LetsWorkTogether from './components/sections/work_together/LetsWorkTogether.jsx';
import Footer from './components/sections/footer/Footer.jsx';
import { Navigation, NavBarOclusion } from './components/sections/navigation/Navigation.jsx';

import WhereFindMe from './components/sections/where_find_me/WhereFindMe.jsx';
import reportWebVitals from './reportWebVitals.js';
import { ScrollAnimation } from './components/utils/text_animations.jsx';

import { LanguageProvider } from './languageContext';

import './reset.css';
import './components/index.css';
import './generics.css';

function MainSection () {
  const [isOcluded, setOclusion] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const oclusionThreshold = 2500;
      var oclused = scrollPosition > oclusionThreshold;
      setOclusion(oclused);
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <main className='main_section'>
      {isOcluded ? <NavBarOclusion /> : <Navigation />}
      <Header />
        <WhoIam />
        <Projects />
        <ScrollAnimation>
          <LetsWorkTogether />
        </ScrollAnimation>
    </main>
  );
}


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <LanguageProvider>
      <MainSection />
      <footer className='footer-container'>
        <WhereFindMe />
        <Footer />
      </footer>
    </LanguageProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
