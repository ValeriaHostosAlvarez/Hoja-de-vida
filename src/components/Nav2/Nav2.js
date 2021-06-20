import './Nav2.css';
import {
        BrowserRouter as Router,
        Route,Switch,Link,Redirect
        } from "react-router-dom";

function Nav2() {
  return (
 <Router>
    <div className="Nav2">
       
       <ul >

           <li id="menu_nav"><Link to='/' onClick={() => {window.location.href="/"}}> VOLVER AL INCIO </Link></li>

       </ul>

    </div>
</Router>
        


    );
}
export default Nav2;