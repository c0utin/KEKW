import React, { useState } from "react";
import NavBar from "@/components/navBar";
import Avatar from "@/components/avatar";
import InformationField from "@/components/informationField";
import EditIcon from "../assets/lapis.svg";
import { Table, TableBody, TableCaption, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import ArrowDown from "@/components/arrowDown";
import CreationButton from "@/components/creationButton";
import HistoricalModal from "../components/HistoricalModal"
import StatusDropdown from "@/components/statusDropdown";
import ResponsibleModal from "../components/ResponsibleModal"
import ClassModal from "@/components/ClassModal";

export default function Course() {

    const [selectedStudent, setSelectedStudent] = useState<string | null>(null);

    const arrowColor = '#686868';

    const handleStudentClick = (studentName: string) => {
        setSelectedStudent(studentName);
    };

    const handleBackButtonClick = () => {
        setSelectedStudent(null);
    };

    const renderOriginalContent = () => {
        return (
            <div>
                <header>
                    <NavBar name={'Nome'} role={'líder'} avatar={<Avatar defaultImage="" profileImage={'imagem'} widthImage={'30px'} heightImage={'30px'} />} />
                </header>
                <main className="flex px-24 pt-14 pb-8 h-full gap-14">
                    <section className="mt-8 flex flex-col bg-white shadow-shadow-10 w-[40%] rounded-[20px] p-6 items-center gap-4">
                        <Avatar defaultImage="" profileImage={''} widthImage={'80px'} heightImage={'80px'} />
                        <div className="flex flex-col items-center">
                            <p className="text-[28px] font-medium">Teto</p>
                            <p className="text-[16px]">Catarina de Oliveira</p>
                        </div>
                        <div className="border border-gray-3 w-[90%] h-[1px]"></div>
                        <div className="flex flex-col gap-2 w-[90%]">
                            <InformationField paddingY="" title={'E-mail:'} value={'teto@teto.com.br'} />
                            <InformationField paddingY="" title={'CNPJ:'} value={'00000000/0001-00'} />
                            <InformationField paddingY="" title={'Celular/Telefone:'} value={'(11) 90000-0000'} />
                            <InformationField paddingY="" title={'Fundação:'} value={'01/01/2001'} />
                            <InformationField paddingY="" title={'Endereço:'} value={'Rua Gen. Jardim, 660 - Vila Buarque'} />
                            <InformationField paddingY="" title={'Membros:'} value={'240'} />
                        </div>
                        <div className="w-[90%]">
                            <button className="flex border border-gray-3 text-gray-3 text-[14px] rounded-2xl px-4 gap-2 items-start">
                                <img src={EditIcon} alt="" className="w-[16px] h-[16px] self-center opacity-40" />
                                <p>Editar</p>
                            </button>
                        </div>
                    </section>


                    <section className="mt-8 flex flex-col bg-white shadow-shadow-10 w-[60%] rounded-[20px] py-6 px-16 items-center gap-4">
                        <p className="font-medium text-[28px] self-start">Membros</p>
                        <div className="flex justify-end gap-2 w-[100%]">
                            {/* <SearchBar category="page" width="90%" /> */}
                            <div className="w-[40%]">
                                <CreationButton name="Cadastrar membro" route="cadastrar-membro" />
                            </div>
                        </div>
                        <div className="flex gap-2 justify-end w-[100%]">
                            <button className="flex border border-gray-4 text-gray-4 text-[14px] rounded-2xl px-2 gap-2">
                                <p>Status</p>
                                <div className=' scale-75'>
                                    <ArrowDown fill={arrowColor} />
                                </div>
                            </button>
                            <button className="flex border border-gray-4 text-gray-4 text-[14px] rounded-2xl px-3 gap-2">
                                <p>Cargo</p>
                                <div className='flex justify-item-center scale-75'>
                                    <ArrowDown fill={arrowColor} />
                                </div>
                            </button>
                            <button className="flex border border-gray-4 text-gray-4 text-[14px] rounded-2xl px-3 gap-2">
                                <p>Oficina</p>
                                <div className=' scale-75'>
                                    <ArrowDown fill={arrowColor} />
                                </div>
                            </button>
                        </div>
                        <div className="h-[100%] w-[100%] max-h-[300px] overflow-y-scroll">
                            <Table >
                                <TableCaption>Essas são todos os membros da Teto!</TableCaption>
                                <TableHeader>
                                    <TableRow>
                                        <TableHead className='text-center text-black'>Nome</TableHead>
                                        <TableHead className='text-center text-black'>Cargo</TableHead>
                                        <TableHead className='text-center text-black'>Oficina</TableHead>
                                    </TableRow>
                                </TableHeader>
                                <TableBody>
                                    <TableRow>
                                        <TableCell className="text-center" onClick={() => handleStudentClick("Sofia Silva")}>Sofia Silva</TableCell>
                                        <TableCell className='text-center'>Aluno</TableCell>
                                        <TableCell className='text-center'>Pintura</TableCell>
                                    </TableRow>
                                    <TableRow>
                                        <TableCell className="text-center" onClick={() => handleStudentClick("Mariana")}>Sofia Silva</TableCell>
                                        <TableCell className='text-center'>Aluno</TableCell>
                                        <TableCell className='text-center'>Pintura</TableCell>
                                    </TableRow>
                                    <TableRow>
                                        <TableCell className="text-center" onClick={() => handleStudentClick("Sofia Silva")}>Sofia Silva</TableCell>
                                        <TableCell className='text-center'>Aluno</TableCell>
                                        <TableCell className='text-center'>Pintura</TableCell>
                                    </TableRow>
                                    <TableRow>
                                        <TableCell className="text-center" onClick={() => handleStudentClick("Sofia Silva")}>Sofia Silva</TableCell>
                                        <TableCell className='text-center'>Aluno</TableCell>
                                        <TableCell className='text-center'>Pintura</TableCell>
                                    </TableRow>
                                    <TableRow>
                                        <TableCell className="text-center" onClick={() => handleStudentClick("Sofia Silva")}>Sofia Silva</TableCell>
                                        <TableCell className='text-center'>Aluno</TableCell>
                                        <TableCell className='text-center'>Pintura</TableCell>
                                    </TableRow>
                                    <TableRow>
                                        <TableCell className="text-center" onClick={() => handleStudentClick("Sofia Silva")}>Sofia Silva</TableCell>
                                        <TableCell className='text-center'>Aluno</TableCell>
                                        <TableCell className='text-center'>Pintura</TableCell>
                                    </TableRow>
                                </TableBody>
                            </Table>
                        </div>
                    </section>
                </main>
            </div>
        );
    };

    const renderStudentContent = (studentName: string) => {
        return (
            <div>
                <header>
                    <NavBar name={'Nome'} role={'líder'} avatar={<Avatar defaultImage="" profileImage={'imagem'} widthImage={'30px'} heightImage={'30px'} />} />
                </header>
                <main className="flex px-24 pt-14 pb-8 h-full gap-14">
                    <section className="mt-8 flex flex-col bg-white shadow-shadow-10 w-[40%] rounded-[20px] p-6 items-center gap-4">
                        <div className="ml-48">
                            <StatusDropdown linkGet="" linkPut="" context={'courses'} optionTextSize={'12px'} titleTextSize={'14px'} isDropdown={true} />
                        </div>
                        <Avatar defaultImage="" profileImage={''} widthImage={'80px'} heightImage={'80px'} />
                        <div className="flex flex-col items-center">
                            <p className="text-[28px] font-medium">{studentName}</p>
                        </div>
                        <div className="flex gap-2">
                            <HistoricalModal/>
                            <button className="flex border border-gray-4 text-gray-4 text-[14px] rounded-2xl px-6 gap-2">
                                <img src={EditIcon} alt="" className="w-[16px] h-[16px] self-center" />
                                <p>Editar</p>
                            </button>

                        </div>
                        <div className="border border-gray-3 w-[90%] h-[1px]"></div>
                        <div className="flex flex-col gap-2 w-[90%] max-h-[150px] overflow-y-scroll">
                            <InformationField paddingY="" title={'E-mail:'} value={'sofia.silva@gmail.com'} />
                            <InformationField paddingY="" title={'CPF:'} value={'000.000.000-00'} />
                            <InformationField paddingY="" title={'RG:'} value={'0000000000'} />
                            <InformationField paddingY="" title={'Cidade/Estado:'} value={'São Paulo, SP'} />
                            <InformationField paddingY="" title={'Nascimento:'} value={'01/01/2001'} />
                            <InformationField paddingY="" title={'Celular:'} value={'(11) 90000-0000'} />
                            <InformationField paddingY="" title={'Endereço:'} value={'Rua Almeida, 56'} />
                            <InformationField paddingY="" title={'Última Visita:'} value={'01/01/2002'} />
                            <InformationField paddingY="" title={'Idade:'} value={'18 anos'} />
                            <InformationField paddingY="" title={'Raça:'} value={'Branca'} />
                            <InformationField paddingY="" title={'Gênero:'} value={'Feminino'} />
                            <InformationField paddingY="" title={'Estado Civil:'} value={'Solteiro'} />
                            <div className="flex items-center justify-center border border-gray-3 text-[14px] rounded-2xl px-4 gap-2">
                            <ResponsibleModal/>
                            </div>
                        </div>
                        <div className="w-[90%]">
                            <button className="flex border border-gray-3 text-gray-3 text-[14px] rounded-2xl px-4 gap-2 items-start" onClick={handleBackButtonClick}>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-3 h-3 mt-1">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 19.5 8.25 12l7.5-7.5" />
                                </svg>
                                <p>Voltar</p>
                            </button>
                        </div>
                    </section>


                    <section className="mt-8 flex flex-col bg-white shadow-shadow-10 w-[60%] rounded-[20px] py-6 px-16 items-center gap-4">
                        <p className="font-medium text-[28px] self-start">Membros</p>
                        <div className="flex justify-end gap-2 w-[100%]">
                            {/* <SearchBar category="page" width="90%" /> */}
                            <div className="w-[40%]">
                                <CreationButton name="Cadastrar membro" route="cadastrar-membro" />
                            </div>
                        </div>
                        <div className="flex gap-2 justify-end w-[100%]">
                            <button className="flex border border-gray-4 text-gray-4 text-[14px] rounded-2xl px-2 gap-2">
                                <p>Status</p>
                                <div className=' scale-75'>
                                    <ArrowDown fill={arrowColor} />
                                </div>
                            </button>
                            <button className="flex border border-gray-4 text-gray-4 text-[14px] rounded-2xl px-3 gap-2">
                                <p>Cargo</p>
                                <div className='flex justify-item-center scale-75'>
                                    <ArrowDown fill={arrowColor} />
                                </div>
                            </button>
                            <button className="flex border border-gray-4 text-gray-4 text-[14px] rounded-2xl px-3 gap-2">
                                <p>Oficina</p>
                                <div className=' scale-75'>
                                    <ArrowDown fill={arrowColor} />
                                </div>
                            </button>
                        </div>
                        <div className="h-[100%] w-[100%] max-h-[300px] overflow-y-scroll">
                            <Table >
                                <TableCaption>Essas são todos os membros da Teto!</TableCaption>
                                <TableHeader>
                                    <TableRow>
                                        <TableHead className='text-center text-black'>Nome</TableHead>
                                        <TableHead className='text-center text-black'>Cargo</TableHead>
                                        <TableHead className='text-center text-black'>Oficina</TableHead>
                                    </TableRow>
                                </TableHeader>
                                <TableBody>
                                    <TableRow>
                                        <TableCell className="text-center" onClick={() => handleStudentClick("Sofia Silva")}>Sofia Silva</TableCell>
                                        <TableCell className='text-center'>Aluno</TableCell>
                                        <TableCell className='text-center'>Pintura</TableCell>
                                    </TableRow>
                                    <TableRow>
                                        <TableCell className="text-center" onClick={() => handleStudentClick("Mariana")}>Sofia Silva</TableCell>
                                        <TableCell className='text-center'>Aluno</TableCell>
                                        <TableCell className='text-center'>Pintura</TableCell>
                                    </TableRow>
                                    <TableRow>
                                        <TableCell className="text-center" onClick={() => handleStudentClick("Sofia Silva")}>Sofia Silva</TableCell>
                                        <TableCell className='text-center'>Aluno</TableCell>
                                        <TableCell className='text-center'>Pintura</TableCell>
                                    </TableRow>
                                    <TableRow>
                                        <TableCell className="text-center" onClick={() => handleStudentClick("Sofia Silva")}>Sofia Silva</TableCell>
                                        <TableCell className='text-center'>Aluno</TableCell>
                                        <TableCell className='text-center'>Pintura</TableCell>
                                    </TableRow>
                                    <TableRow>
                                        <TableCell className="text-center" onClick={() => handleStudentClick("Sofia Silva")}>Sofia Silva</TableCell>
                                        <TableCell className='text-center'>Aluno</TableCell>
                                        <TableCell className='text-center'>Pintura</TableCell>
                                    </TableRow>
                                    <TableRow>
                                        <TableCell className="text-center" onClick={() => handleStudentClick("Sofia Silva")}>Sofia Silva</TableCell>
                                        <TableCell className='text-center'>Aluno</TableCell>
                                        <TableCell className='text-center'>Pintura</TableCell>
                                    </TableRow>
                                </TableBody>
                            </Table>
                        </div>
                    </section>
                </main>
            </div>
        );
    };


    return (
        <div>
            {selectedStudent === null ? renderOriginalContent() : renderStudentContent(selectedStudent)}
        </div>
    );
}