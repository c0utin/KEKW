import React, { useState, useEffect } from "react";
import NavBar from "@/components/navBar";
import Avatar from "@/components/avatar";
import turmaImage from "../assets/turma.svg";
import InformationField from "@/components/informationField";
import StatusDropdown from "@/components/statusDropdown";
import EditIcon from "../assets/lapis.svg";
import { Table, TableBody, TableCaption, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Link } from "react-router-dom";
import StudentsModal from "../components/StudentsModal";
import DropdownFilter from "../components/DropdownFilter"
import CourseHeader from "../components/CourseHeader";
import artsIcon from '../assets/artsIcon.svg';
import sportsIcon from '../assets/sportsIcon.svg';
import { useParams } from 'react-router-dom';


export default function Course() {
    const [filterClass, setFilterClass] = useState('')
    const [filterDate, setFilterDate] = useState('')
    const [filterStatus, setFilterStatus] = useState('')
    const [data, setData] = useState<{ class: string; date: string; time: string; status: string; }[]>([]);

    const { id } = useParams();
    const courseId = parseInt(id);

    useEffect(() => {
        const fetchData = async () => {
            const urlClasses = 'http://localhost:3000/api/classes'
            const urlStudents = 'http://localhost:3000/api/student-classes'

            const responseClasses = await fetch(urlClasses);
            const dataClasses = await responseClasses.json();

            const responseStudents = await fetch(urlStudents);
            const dataStudents = await responseStudents.json();

            const courseData = dataClasses.find(item => item.id == courseId);
            const studentsInClass = dataStudents.filter(item => item.class_id == courseId);
            
            courseData.students = studentsInClass.length;

            setData(courseData);
        }

        fetchData();
    }, [courseId]);

    const classData = [
        { id: 1, class: 'Turma 1', date: '13/03/2024', time: '14:00', status: 'Agendada' },
        { id: 2, class: 'Turma 2', date: '06/03/2024', time: '16:00', status: 'Agendada' },
        { id: 3, class: 'Turma 3', date: '18/03/2024', time: '16:00', status: 'Agendada' },
        { id: 4, class: 'Turma 1', date: '20/03/2024', time: '14:00', status: 'Agendada' },
        { id: 5, class: 'Turma 1', date: '27/03/2024', time: '14:00', status: 'Agendada' },
        { id: 6, class: 'Turma 2', date: '30/03/2024', time: '16:00', status: 'Agendada' },
    ];

    const translator = [
        { portuguese: 'Oficina', english: 'workshop' },
        { portuguese: 'Categoria', english: 'category' },
        { portuguese: 'Local', english: 'local' },
        { portuguese: 'Alunos', english: 'students' },
    ];

    const dictCategory = [
        { id: '0', category: "Artes" },
        { id: '1', category: "Esporte" },
        { id: '2', category: "Dança" },
        { id: '3', category: "Música" },
        { id: '4', category: "Cultura" },
    ];

    const translatedCategory = dictCategory.find(item => item.id == data.category);

    const filteredData = classData.filter(item => {
        return (filterClass ? item.class === filterClass : true)
            && (filterDate ? item.date === filterDate : true)
            && (filterStatus ? item.status === filterStatus : true);
    });

    function translate(key) {
        const item = translator.find(item => item.english === key);
        return item ? item.portuguese : key;
    }
    const excludeKeys = ["id", "status", "ong_id", "createdAt", "updatedAt"];

    return (
        <div>
            <header>
                <NavBar name={'Nome'} role={'líder'} avatar={<Avatar defaultImage="" profileImage={'imagem'} widthImage={'30px'} heightImage={'30px'} />} />
            </header>
            <main className="flex px-24 pt-14 pb-8 h-full gap-14">
                <section className="mt-8 flex flex-col bg-white shadow-shadow-10 w-[40%] h-[450px] rounded-[20px] p-6 items-center justify-evenly gap-4">
                    <div className=" ml-56 ">
                        <StatusDropdown data={data} context={'courses'} optionTextSize={'12px'} titleTextSize={'14px'} isDropdown={true} />
                    </div>
                    <CourseHeader data={data} />
                    <div className="flex gap-2">
                        <button className="flex border border-gray-4 text-gray-4 text-[14px] rounded-2xl px-6 gap-2">
                            <img src={turmaImage} alt="" className="w-[16px] h-[16px] self-center" />
                            <p>Turmas</p>
                        </button>
                        <StudentsModal data={data}/>
                    </div>
                    <div className="border border-gray-3 w-[90%] h-[1px]"></div>
                    <div className="flex flex-col gap-2 justify-between w-[90%] h-[auto] max-h-[150px] overflow-y-auto">
                        {Object.keys(data).map(key => {
                            if (!excludeKeys.includes(key)) {
                                let value = data[key];
                                if (key === 'category') {
                                    const translatedCategory = dictCategory.find(item => item.id == data.category);
                                    value = translatedCategory ? translatedCategory.category : value;
                                }
                                return <InformationField paddingY="" title={translate(key)} value={value} />
                            }
                        })}

                    </div>
                    <div className="w-[90%]">
                        <button className="flex border border-gray-3 text-gray-3 text-[14px] rounded-2xl px-4 gap-2 items-start">
                            <img src={EditIcon} alt="" className="w-[16px] h-[16px] self-center opacity-40" />
                            <p>Editar</p>
                        </button>
                    </div>
                </section>


                <section className="mt-8 flex flex-col bg-white shadow-shadow-10 w-[60%] h-[450px] rounded-[20px] py-6 px-16 items-center gap-4">
                    <p className="font-medium text-[28px] self-start">Aulas</p>
                    <div className="flex justify-end w-[100%] gap-2">
                        <DropdownFilter placeholder={'Turma'} data={classData} onFilterChange={setFilterClass} />
                        <DropdownFilter placeholder={'Data'} data={classData} onFilterChange={setFilterDate}/>
                        <DropdownFilter placeholder={'Situação'} data={classData} onFilterChange={setFilterStatus} />
                    </div>
                    <div className="h-[100%] w-[100%] max-h-[300px] overflow-y-scroll">
                        <Table >
                            <TableCaption>Essas são todas as aulas para esta oficina!</TableCaption>
                            <TableHeader>
                                <TableRow>
                                    <TableHead className='text-center text-black'>Turma</TableHead>
                                    <TableHead className='text-center text-black'>Dia</TableHead>
                                    <TableHead className='text-center text-black'>Horário</TableHead>
                                    <TableHead className='text-center text-black'>Situação</TableHead>
                                </TableRow>
                            </TableHeader>
                            <TableBody>
                                {filteredData.map((item, index) => (
                                    <TableRow key={index}>
                                        <TableCell className="font-medium text-center">
                                            <Link to="/class">{item.class}</Link>
                                        </TableCell>
                                        <TableCell className='text-center'>{item.date}</TableCell>
                                        <TableCell className='text-center'>{item.time}</TableCell>
                                        <TableCell className='flex justify-center'>
                                            <StatusDropdown optionTextSize="" context="" titleTextSize={'12px'} isDropdown={false} />
                                        </TableCell>
                                    </TableRow>
                                ))}
                            </TableBody>
                        </Table>
                    </div>
                </section>
            </main>
        </div>
    );
}