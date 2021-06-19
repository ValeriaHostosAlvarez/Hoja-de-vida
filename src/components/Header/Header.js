import foto from "./fotovaleria.png";
import './Header.css';

function Header() {
  return (
      <header>
          <div id="titulo_tecnico">
            <h1> Técnico en Desarrollo Front-End </h1>
          </div>

          <div className="foto">
            <img src={foto} alt="foto Valeria" />
          </div>
          
      </header>
    
  );
}

export default Header;