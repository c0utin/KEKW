import React, { useEffect, useState } from 'react';
import ArrowUp from './arrowUp';
import ArrowDown from './arrowDown';
import Calendar from 'react-calendar';
import 'react-datepicker/dist/react-datepicker.css';
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuLabel,
    DropdownMenuRadioGroup,
    DropdownMenuRadioItem,
    DropdownMenuSeparator,
    DropdownMenuTrigger
} from "@/components/ui/dropdown-menu";

const InformationDropdown = ({ type }) => {
    const [itemSelected, setItemSelected] = useState<string>(type == 'calendar' ? 'Selecione a data' : 'Selecione o facilitador');    
    const [isOpen, setIsOpen] = useState<boolean>(false);
    const [position, setPosition] = useState("Professor");
    const onDateChange = (date: Date) => {
        const dateString = date.toLocaleDateString('pt-BR');
        setItemSelected(dateString);
    }

    const [allClasses, setAllClasses] = useState([]);

    useEffect(() => {
        fetch('http://localhost:3000/api/professors')
          .then(response => response.json())
          .then(data => {
            setAllClasses(data.map(professor => professor.name));
          })
          .catch(error => {
            console.error('Error fetching professors:', error);
          });
      }, []);

    if (type !== 'calendar') {
        return (
            <DropdownMenu onOpenChange={setIsOpen}>
                <DropdownMenuTrigger>
                    <div className="flex items-center border border-gray-3 rounded-full px-3 w-[100%] h-[33px]" onClick={() => setIsOpen(!isOpen)}>
                        <p className='font-semibold text-[14px] w-[40%] text-start'>Facilitador:</p>
                        <p className='text-[14px] text-center w-[60%] cursor-default overflow-hidden text-ellipsis whitespace-nowrap'>{itemSelected}</p>
                        <div className=''>
                            {isOpen ? <ArrowUp fill={'#686868'} width={12} height={12} /> : <ArrowDown fill={'#686868'} width={12} height={12} />}
                        </div>
                    </div>
                </DropdownMenuTrigger>
 
                <DropdownMenuContent className="bg-white shadow-shadow-10">
                    <div className='w-[430px] max-h-[120px] overflow-y-scroll overflow-x-hidden'>
                        <DropdownMenuLabel>Turmas</DropdownMenuLabel>
                        <DropdownMenuSeparator />
                        <DropdownMenuRadioGroup value={position} onValueChange={(value) => { setPosition(value); setItemSelected(value); }}>
                            {allClasses.map((item, index) => (
                                <DropdownMenuRadioItem key={index} className='hover:bg-gray-1' value={item}>{item}</DropdownMenuRadioItem>
                            ))}
                        </DropdownMenuRadioGroup>
                    </div>
                </DropdownMenuContent>
            </DropdownMenu>
        );
    } else {
        return (
            <DropdownMenu onOpenChange={setIsOpen}>
                <DropdownMenuTrigger>
                    <div className="flex items-center border border-gray-3 rounded-full px-3 w-[100%] h-[33px]" onClick={() => setIsOpen(!isOpen)}>
                        <p className='font-semibold text-[14px] w-[40%] text-start'>Data:</p>
                        <p className='text-[14px] text-center w-[60%] cursor-default overflow-hidden text-ellipsis whitespace-nowrap'>{itemSelected}</p>
                        <div className=''>
                            {isOpen ? <ArrowUp fill={'#686868'} width={12} height={12} /> : <ArrowDown fill={'#686868'} width={12} height={12} />}
                        </div>
                    </div>
                </DropdownMenuTrigger>
                <DropdownMenuContent>
                    <div className="bg-white shadow-shadow-10 w-[100%]">
                        <Calendar onChange={onDateChange}/>
                    </div>
                </DropdownMenuContent>
            </DropdownMenu>
        );
    }
};

export default InformationDropdown;
