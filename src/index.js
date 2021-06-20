import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Header from './components/Header/Header';
import Body from './components/Body/Body';
import Nav from './components/Nav/Nav';
import Footer from './components/Footer/Footer';
import reportWebVitals from './reportWebVitals';


ReactDOM.render(
  <React.StrictMode>
    
    <Header />
    
    <section id="informacion">
      <Body />
    </section>

    <section>
      <Nav />
   </section>

  
    <section >
      <Footer />
    </section>

    

  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

//<section id="experiencia">
   // <Educacion />
  //  </section>

