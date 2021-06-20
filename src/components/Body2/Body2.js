//import rueda1 from "./rueda1.png";
import {
        BrowserRouter as Router,
        Route,Switch,Link,Redirect
        } from "react-router-dom";

import {
  CircularProgressbar,
  CircularProgressbarWithChildren,
  buildStyles
} from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

import './Body2.css';

function Body2() {
  return (
    <Router>
          <section className="Body2">

            <div className="row">
               <div>
                 <CircularProgressbar  value={80} text={`${80}%`} />
                   <h3> HTML5 </h3>
               </div>

               <div>
                 <CircularProgressbar value={80} text={`${75}%`} />
                  <h3> CSS3 </h3>
               </div>

               <div>    
                 <CircularProgressbar value={80} text={`${80}%`} />
                 <h3> BOOTSTRAP</h3>
               </div>
               
           </div> 
             <div className="row">

              <div>
                 <CircularProgressbar value={80} text={`${75}%`} />
                 <h3> GIT </h3>
              </div>

              
              <div>
                 <CircularProgressbar value={80} text={`${80}%`} />
                 <h3> REACT </h3>
              </div>

             
              <div>    
                 <CircularProgressbar value={80} text={`${80}%`} />
                 <h3> GIT-HUB</h3>

              </div>
             
             </div>              


         </section>
</Router>


   );
}

export default Body2;