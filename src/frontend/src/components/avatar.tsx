import React from "react";
import defaultImage from '../assets/logoTest.svg';

interface AvatarProps {
    profileImage: string;
    defaultImage: string;
    widthImage: string;
    heightImage: string;
}

const Avatar: React.FC<AvatarProps> = ({profileImage, widthImage, heightImage}) =>{
    return(
        <>
            <div className={`bg-white rounded-full w-[${widthImage}] h-[${heightImage}] shadow-shadow-25 overflow-hidden flex align-middle`}>
                <img src={profileImage} alt="Foto de Perfil" onError={(e: React.SyntheticEvent<HTMLImageElement, Event>)=>{const target = e.target as HTMLImageElement; target.onerror = null; target.src=defaultImage}}/>
            </div>
        </>
    )
}

export default Avatar;