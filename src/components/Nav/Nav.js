import './Nav.css';
import Skills from '../../pages/Skills'
import {
        BrowserRouter as Router,
        Route,Switch,Link,Redirect
        } from "react-router-dom";

function Nav() {
  return (
 <Router>
    <div className="Nav">
       
       <ul >

           <li id="menu_nav"><Link to='/Habilidades' onClick={() => {window.location.href="/Habilidades"}}> HABILIDADES </Link></li>

       </ul>

    </div>
</Router>
        


    );
}
export default Nav;