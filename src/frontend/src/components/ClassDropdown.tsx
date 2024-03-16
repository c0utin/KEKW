import React, { useEffect, useState } from 'react';
import ArrowUp from './arrowUp';
import ArrowDown from './arrowDown';
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuLabel,
    DropdownMenuRadioGroup,
    DropdownMenuRadioItem,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

const ClassDropdown = () => {

    const [classNumber, setClassNumber] = useState<string>('Sem turma');
    const [isOpen, setIsOpen] = useState<boolean>(false);
    const [position, setPosition] = useState("Turma 1")
    const allClasses = ['Turma 1', 'Turma 2', 'Turma 3', 'Turma 4', 'Turma 5', 'Sem turma'];
    return (







        <DropdownMenu onOpenChange={setIsOpen}>
            <DropdownMenuTrigger>
                <button className="flex items-center justify-evenly rounded-2xl font-normal bg-gray-2 text-gray-4 w-[100px]" onClick={() => setIsOpen(!isOpen)}>
                    {classNumber}
                    <div className='mt-[2px]'>
                        {isOpen ? <ArrowUp fill={'#686868'} width={12} height={12} /> : <ArrowDown fill={'#686868'} width={12} height={12} />}
                    </div>
                </button>
            </DropdownMenuTrigger>

            <DropdownMenuContent className="bg-white shadow-shadow-10 w-12">
                <DropdownMenuLabel>Turmas</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuRadioGroup value={position} onValueChange={(value) => {setPosition(value); setClassNumber(value);}}>
                    {allClasses.map((item) => (
                        <DropdownMenuRadioItem className='hover:bg-gray-1' value={item}>{item}</DropdownMenuRadioItem>
                    ))}
                </DropdownMenuRadioGroup>
            </DropdownMenuContent>
        </DropdownMenu>
    )
}

export default ClassDropdown
