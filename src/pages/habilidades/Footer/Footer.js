import footer from "./imagen1.svg";
import linkedin from "./linkedin.png"
import github from "./github.png"

import './Footer.css';

function Footer() {
  return (

    <footer>
    		<div>
    			<h3 id="Contacto"> Contacto </h3>
    		</div>
    	<section className="footer">


    		<div id="caja1">	
            	<div className="info">
            		<i class="fas fa-envelope"></i>valeriahostosalvarez@gmail.com
            	</div>
            
            	<div className="info">
            		<i class="fas fa-phone-alt"></i>3209560740
            	</div>

                <div className="info">
                    <i class="fas fa-map-marker-alt  ">
                </i> Bogotá D.C, Colombia
                 </div>
            </div>

    		<div id="caja2">	
                <div className="info">
                    <i class="fab fa-linkedin "></i>
                    <a href="https://www.linkedin.com/checkpoint/lg/login?trk=reset_password">
                        <img src={linkedin} alt="imagen linkedin" width="100px"></img>
                    </a>

                    <i class="fab fa-github"></i>
                    <a href="https://github.com/">
                        <img src={github} alt="imagen github" width="100px"></img>
                    </a>

               </div>

           </div>
	
            	
    	</section>
    </footer>

    );
}

export default Footer;