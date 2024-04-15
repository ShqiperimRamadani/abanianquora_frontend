import React from 'react';
import '../../styles/component_Style/pytje.css';
import pergjigjeIcon from '../assets/pergjigje_solid_icon.svg';
import votaIcon from '../assets/vota_icon.svg';

const Pytje_Feed = ({ title, numPergjigje, numVota }) => {
    return (
        <a href="#">
            <div className="pytje">
                <h2>{title}</h2>
                <div className="flexBox">
                    <img src="../assets/pergjigje_solid_icon.svg" alt="Pergjigje Icon" />
                    <span>{numPergjigje} Pergjigje</span>
                    <img src="../assets/vota_icon.svg" alt="Vota Icon" />
                    <span>{numVota} Vota</span>
                </div>
            </div>
        </a>
    );
};

export default Pytje_Feed;
