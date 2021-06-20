import React from 'react';
import ReactDOM from 'react-dom';
import Header2 from '../components/Header2/Header2';
import Body2 from '../components/Body2/Body2';
import Nav2 from '../components/Nav2/Nav2';
import Footer from '../components/Footer/Footer';
import reportWebVitals from '../reportWebVitals';
import '../index.css';
function Skills() {
  return (  
    <div>
    <Header2/>
    <section id="informacion">
      <Body2 />
    </section>

    <section>
      <Nav2 />
   </section>

  
    <section >
      <Footer />
    </section>
    </div>
   );
}

export default Skills;