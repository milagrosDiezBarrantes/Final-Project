import './Publicidad.scss';
import avengers from '../Publicidad/imag/Avengers.png';
import avengersLogo from '../Publicidad/imag/Avengers_logo.png';

const AppBanner = () => {
    return (
        <div className="app__banner">
            <img src={avengers} alt="Avengers"/>
            <div className="app__banner-text">
                ¡Todo lo que buscas<br/>
                en un solo lugar!
            </div>
            <img src={avengersLogo} alt="Avengers logo"/>
        </div>
    )
}

export default AppBanner;