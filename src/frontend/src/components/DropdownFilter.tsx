import React, { useState } from 'react';
import ArrowUp from './arrowUp';
import ArrowDown from './arrowDown';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuLabel,
    DropdownMenuRadioGroup,
    DropdownMenuRadioItem,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

interface DropdownFilterProps {
    placeholder: string;
    data: any[];
    onFilterChange: (value: string) => void;
}

const DropdownFilter: React.FC<DropdownFilterProps> = ({ placeholder, data, onFilterChange }) => {
    const [filterPlaceholder, setFilterPlaceholder] = useState<string>(placeholder);
    const [isOpen, setIsOpen] = useState<boolean>(false);
    const [position, setPosition] = useState<string>("");
    const [selectedDate, setSelectedDate] = useState<Date>(new Date());

    const placeholderToKey: { [key: string]: string } = {
        "Turma": "class",
        "Data": "date",
        "Situação": "status",
        "Cargo": "role",
        "Oficina": "workshop",
    };

    let filterValues: string[] = [];
    if (Array.isArray(data)) {
        const allValues = data.map(item => item[placeholderToKey[placeholder]]);
        const allValuesSorted = [...new Set(allValues)].sort();
        filterValues = ['Sem filtro', ...allValuesSorted];
    }

    const onDateChange = (date: Date) => {
        const dateString = date.toLocaleDateString('pt-BR');
        setSelectedDate(date);
        setFilterPlaceholder(dateString);
        setNewFilter(dateString);
    }

    const resetDate = () => {
        setSelectedDate(new Date());
        setFilterPlaceholder(placeholder);
        setNewFilter("");
    }

    const setNewFilter = (value: string) => {
        if (value === 'Sem filtro') {
            onFilterChange('');
            setFilterPlaceholder(placeholder);
        } else {
            onFilterChange(value);
        }
    }

    const isFiltered = position !== "" && position !== "Sem filtro" || selectedDate.toLocaleDateString('pt-BR') !== new Date().toLocaleDateString('pt-BR');

    return (
        <DropdownMenu onOpenChange={setIsOpen}>
            <DropdownMenuTrigger>
                <button className={`flex items-center justify-center w-[100%] gap-2 rounded-2xl border px-2 text-[14px] ${isFiltered ? 'border-[#00B094] text-[#00B094]' : 'border-gray-3 text-gray-4'}`} onClick={() => setIsOpen(!isOpen)}>
                    {filterPlaceholder}
                    <div className='mt-[2px]'>
                        {isOpen ? <ArrowUp fill={isFiltered ? '#00b094' : '#686868'} width={12} height={12} /> : <ArrowDown fill={isFiltered ? '#00b094' : '#686868'} width={12} height={12} />}
                    </div>
                </button>
            </DropdownMenuTrigger>

            <DropdownMenuContent className={`bg-white shadow-shadow-10 ${placeholder === 'Data' ? 'w-[290px]' : 'w-12'}`}>
                <DropdownMenuLabel>{placeholder}</DropdownMenuLabel>
                <DropdownMenuSeparator />
                {placeholder === 'Data' ? (
                    <div>
                        <Calendar
                            onChange={onDateChange}
                            value={selectedDate}
                            className={''}
                        />
                        <button className='m-2 rounded-2xl px-2 bg-gray-1 hover:bg-gray-2' onClick={resetDate}>Sem filtro</button>
                    </div>
                ) : (
                    <DropdownMenuRadioGroup value={position} onValueChange={(selectedValue) => { setPosition(selectedValue); setFilterPlaceholder(selectedValue); setNewFilter(selectedValue) }}>
                        {filterValues.map((item, index) => (
                            <DropdownMenuRadioItem key={index} className='hover:bg-gray-1' value={item}>{item}</DropdownMenuRadioItem>
                        ))}
                    </DropdownMenuRadioGroup>
                )}
            </DropdownMenuContent>
        </DropdownMenu>
    )
}

export default DropdownFilter;
