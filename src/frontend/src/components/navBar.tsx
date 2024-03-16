import React, { ReactNode }from "react";
import { Link } from 'react-router-dom';
import logoTest from '../assets/logoTest.svg';

interface Props {
    avatar: ReactNode;
    name: string;
    role: string;
}

// Component that represents the navigation bar
const NavBar: React.FC<Props> = ({ avatar, name, role }) => {

    // Define an array with dictionaries that contain the title, link and the roles that can access each item
    const NavBarItems = [
        { title: 'Página Inicial', link: '/', roles: ['líder', 'professor'] },
        { title: 'Membros', link: '/members', roles: ['líder'] },
        { title: 'Dados', link: '#', roles: ['líder', 'professor', 'gestor'] }
    ];

    // Filter the items that will be displayed according to the user's role
    const filterItems = NavBarItems.filter(item => item.roles.includes(role));

    // Return the navigation bar
    return (
        <>
            <div className='fixed z-40 shadow-shadow-10 w-[100%] h-[50px] bg-white p-[10px] flex'>
                <div className='w-[5%] ml-5'>
                    <img src={logoTest} alt="Logo" className='w-[30px] h-[30px]' />
                </div>
                <div className='w-[85%] flex justify-end'>
                    <ul className='flex align-middle text-center'>
                        {/*Creates a list element for each filter item */}
                        {filterItems.map((item) => (
                            <li className='mr-10 font-normal flex height-[15px]'><Link to={item.link}>{item.title}</Link></li>
                        ))}
                    </ul>
                </div>
                <div className='ml-5 mr-5 w-[10%] flex'>
                    {avatar}
                    <div className='ml-5 flex flex-col justify-center'>
                        <p className='text-[15px]'>
                            {name}
                        </p>
                        <p className='text-[12px]'>
                            {role}
                        </p>
                    </div>
                </div>
            </div>
        </>
    );
}

export default NavBar;