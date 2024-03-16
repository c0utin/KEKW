import React from "react";
import { Link } from 'react-router-dom';

interface CardProps {
    data: {
        id: string;
        workshop: string;
        category: string;
    }
}

// component that represents a course card
const CourseCard: React.FC<CardProps> = ({data}) =>{

    // array with the colors of the categories
    const categoryColors = [
        {id: '0', category: 'Artes', color: 'bg-[#00B094]', pattern: 'bg-arts'},
        {id: '1', category: 'Esporte', color: 'bg-[#F5821E]', pattern: 'bg-sports'},
        {id: '2', category: 'Dança', color: 'bg-[#63236F]', pattern: 'bg-arts'},
        {id: '3', category: 'Música', color: 'bg-[#EB1C68]', pattern: 'bg-arts'},
        {id: '4', category: 'Cultura', color: 'bg-[#FABE28]', pattern: 'bg-arts'}
    ];

    // find the color and pattern for the current category
    const currentCategory = categoryColors.find(item => item.id == data.category);

    // return the course card
    return (
        <button className='flex bg-white shadow-shadow-25 rounded-3xl w-[200px] h-[100px]'>
                <div className={`${currentCategory?.color} ${currentCategory?.pattern} rounded-l-3xl w-[100px] h-[100px]`}/>
                <div className='flex flex-col rounded-r-3xl w-[100px] h-[100px] self-end justify-center p-2'>
                    <Link to={"/course/" + data.id}>
                        <p className='mb-1'>{data.workshop}</p>
                        <p className='text-[12px]'>{currentCategory?.category}</p>
                    </Link>
                </div>
        </button>
    );
}

export default CourseCard;