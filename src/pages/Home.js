import React from 'react';
import ReactDOM from 'react-dom';
import Header from '../components/Header/Header';
import Body from '../components/Body/Body';
import Nav from '../components/Nav/Nav';
import Footer from '../components/Footer/Footer';
import reportWebVitals from '../reportWebVitals';
import '../index.css';
function Home() {
  return (  
    <div>
    <Header/>
    <section id="informacion">
      <Body />
    </section>

    <section>
      <Nav />
   </section>

  
    <section >
      <Footer />
    </section>
    </div>
   );
}

export default Home;
