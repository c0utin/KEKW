import React from 'react';

    interface Props {
        imageUrl: string;
    }

    const Card: React.FC<Props> = ({ imageUrl }) => {

    return (

        <div className='bg-gray-3 w-44 h-20 rounded-2xl shadow-25 shadow-gray-4'>
            <img src={imageUrl} alt="Imagem do Card" className="w-full h-full object-cover rounded-2xl" />
        </div>

    )
    }

export default Card;
