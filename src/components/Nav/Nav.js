import './Nav.css';
import {
        BrowserRouter as Router,
        Route,Switch,Link,Redirect
        } from "react-router-dom";

function Nav() {
  return (
 <Router>
    <div className="Nav">
       
       <ul >

           <li id="menu_nav"><Link to='/Habilidades'> HABILIDADES </Link></li>

       </ul>

    </div>
</Router>
        


    );
}
export default Nav;