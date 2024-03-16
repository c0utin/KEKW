import React from "react";
import womanAvatar from '../assets/woman.svg';
import manAvatar from  '../assets/man.svg';

interface ShortcutBoxProps {
    role: string;
    gender: string;
}

const ShortcutBox: React.FC<ShortcutBoxProps> = ({ role, gender }) => {
    const avatar = gender == 'feminino' ? womanAvatar : manAvatar;
    switch (role) {
        case 'líder':
            return (
                <div>
                    <div className="flex flex-col bg-white shadow-shadow-10 w-[100%] h-auto mt-8 rounded-[20px]">
                        <main className='flex justify-evenly'>
                            <section className='flex flex-col gap-2'>
                                <p className='text-[28px] pt-8'>Oi, Alan!</p>
                                <p className=''>Você está em Teto. O que você quer ver?</p>
                                <div className='mt-6 mb-8 flex w-[100%] h-auto gap-6'>
                                    <button className='bg-white rounded-2xl shadow-shadow-25 w-[50%] h-[60px] text-[14px] hover:bg-gray-1'>Membros <br /> da ONG</button>
                                    <button className='bg-white rounded-2xl shadow-shadow-25 w-[50%] h-[60px] text-[14px] hover:bg-gray-1'>Dados <br /> da ONG</button>
                                </div>
                            </section>
        
                            <figure className='flex flex-col'>
                                <img src={avatar} className='w-[250-px] h-[250px]' />
                            </figure>
                        </main>
                    </div>
                </div>
            );
            
        default:
            return (
                <div>
                    <div className="flex flex-col bg-white shadow-shadow-10 w-[100%] h-auto mt-8 rounded-[20px]">
                        <main className='flex justify-evenly'>
                            <section className='flex flex-col gap-3 ml-8'>
                                <p className='text-[28px] pt-8'>Oi, Alana!</p>
                                <p className=''>Você está em Teto.</p>
                                <p>Aqui você pode conferir as Oficinas que você dá aula e <br/>no menu superior, você pode verificar as estatísticas da ONG.</p>
                                <p>Vamos juntos mudar a nossa comunidade!</p>
                            </section>
            
                            <figure className='flex flex-col'>
                                <img src={avatar} className='w-[250-px] h-[250px]' />
                            </figure>
                        </main>
                    </div>
                </div>
            );
    }
}

export default ShortcutBox;
