import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDoubleDown } from '@fortawesome/free-solid-svg-icons';


const Hero = props => {
    return (
        <section id="hero" className="hero">
            <div className="opacity">
                <div className="hero-info">
                    <h1>Más de 30 años de trayectoria en ingeniería electromecánica</h1>
                    <a href="#contact" className="hero-button">
                        Contactanos
                        </a>
                    <button className="arrow-button">
                        <a href="#about">
                            <FontAwesomeIcon className="hero-arrow" icon={faAngleDoubleDown} />
                        </a>
                    </button>
                </div>
            </div>
        </section>
    )
};

export default Hero;
