import './Educacion.css';

function Educacion() {
  return (

    <div className="educacion">
        <div className="educacionx3"><h2 className="skills"><i class="fas fa-user-graduate"> EDUCACIÓN</i></h2>
            <p className="year">2021 Ingeniero de Sistemas</p>
            <p className="parrafo">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
            tempor incididunt ut labore et dolore magna aliqua. </p>

            <p>2012 Bachiller</p>
            <p className="parrafo">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
            tempor incididunt ut labore et dolore magna aliqua.</p>
        </div>

        <div className="educacionx3"><h2 className="skills"><i class="fas fa-user-tie"> EXPERIENCIA LABORAL</i></h2>
            <p className="year">2021 Ingeniero de Sistemas</p>
                <p className="parrafo">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                tempor incididunt ut labore et dolore magna aliqua.</p>

                <p>2012 Bachiller</p>
                <p className="parrafo">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                tempor incididunt ut labore et dolore magna aliqua.</p>
        </div>

        <div><h2 className="skills" ><i class="fas fa-user-graduate"> HABILIDADES</i></h2>
            <p className="cursos">Diseno UX </p>
            <progress class="progress is-primary" value="70" max="100"></progress>
            <p className="cursos">Diseno IU</p>
            <progress class="progress is-primary" value="70" max="100"></progress>
            <p className="cursos">HTML Y CSS</p>
            <progress class="progress is-primary" value="80" max="100"></progress>
            <p className="cursos">JavaScript</p>
            <progress class="progress is-primary" value="60" max="100"></progress>
        </div>

    </div>
    );
}
export default Educacion;