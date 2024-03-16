import React from "react";
import { Link } from 'react-router-dom';
import pencilSVG from '../assets/lapis.svg'

interface Props {
    scale: string;
    route: string;
}

// Component that represents the edit button
const EditButton: React.FC<Props> = ({ scale, route }) => {
    return (
        <button className={`flex justify-evenly w-[80px] h-auto border border-gray-4 rounded-2xl text-gray-4 text-[14px] scale-[${scale}]`}>
            <img src={pencilSVG} alt="Ícone" className='w-[14px] h-[14px] self-center pr-[0px] opacity-75' />
            <Link to={route}>Editar</Link>
        </button>
    );
}

export default EditButton;