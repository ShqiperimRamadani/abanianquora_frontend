import React from 'react';
import Image from 'next/image';
import '../../styles/component_Style/pytje.css';
import pergjigjeIcon from '../assets/pergjigje_solid_icon.svg';
import votaIcon from '../assets/vota_icon.svg';

const Pytje_Feed = ({ title, numPergjigje, numVota }) => {
    return (
        <a href="#">
            <div className="pytje">
                <h2>{title}</h2>
                <div className="flexBox">
                    <Image src={pergjigjeIcon} alt="Pergjigje Icon" height={20} width={20}/>
                    <span>{numPergjigje} Pergjigje</span>
                    <Image src={votaIcon} alt="Vota Icon" height={20} width={20}/>
                    <span>{numVota} Vota</span>
                </div>
            </div>
        </a>
    );
};

export default Pytje_Feed;
