import React from "react";
import turmaImage from "../assets/turma.svg";
import { AlertDialog, AlertDialogCancel, AlertDialogContent, AlertDialogDescription, AlertDialogHeader, AlertDialogTitle, AlertDialogTrigger } from "@/components/ui/alert-dialog"
import { Table, TableBody, TableCell, TableCaption, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import ClassDropdown from "./ClassDropdown";
import ExitButton from "./exitButton";

const StudentsModal = () => {

    return (
        <AlertDialog>
            <AlertDialogTrigger>
                <button className="flex border border-gray-4 text-gray-4 text-[14px] rounded-2xl px-6 gap-2">
                    <img src={turmaImage} alt="" className="w-[16px] h-[16px] self-center" />
                    Alunos
                </button>
            </AlertDialogTrigger>
            <AlertDialogContent>
                <AlertDialogHeader>
                    <div className="border border-gray-4 rounded-2xl pl-8 pb-8 mx-4">
                        <div className="flex flex-row justify-end w-[98%]">
                            <AlertDialogCancel className="w-[10px] hover:bg-transparent border-transparent mb-4"> <ExitButton/> </AlertDialogCancel>
                        </div>
                        <div className="flex justify-between mr-8">
                            <AlertDialogTitle>Alunos</AlertDialogTitle>
                            {/* <SearchBar category="page" cards={}/> */}
                        </div>
                        <div className="max-h-[350px] overflow-y-scroll mt-4 mr-8 text-ellipsis">
                            <AlertDialogDescription>
                                <Table>
                                    <TableCaption>Esses são todos os alunos na oficina!</TableCaption>
                                    <TableHeader>
                                        <TableRow>
                                            <TableHead className=' text-black'>Nome</TableHead>
                                            <TableHead className='text-black text-center'> Situação </TableHead>
                                        </TableRow>
                                    </TableHeader>
                                    <TableBody>
                                        <TableRow>
                                            <TableCell className="font-medium">Ana Vieira</TableCell>
                                            <TableCell> <ClassDropdown />  </TableCell>
                                        </TableRow>
                                        <TableRow>
                                            <TableCell className="font-medium">Ana Clara Visconde Bispo</TableCell>
                                            <TableCell> <ClassDropdown /> </TableCell>
                                        </TableRow>
                                        <TableRow>
                                            <TableCell className="font-medium">André Souza</TableCell>
                                            <TableCell> <ClassDropdown /> </TableCell>
                                        </TableRow>
                                        <TableRow>
                                            <TableCell className="font-medium">Catharina Nogueira Milano</TableCell>
                                            <TableCell> <ClassDropdown /> </TableCell>
                                        </TableRow>
                                        <TableRow>
                                            <TableCell className="font-medium">Igor Ferreira</TableCell>
                                            <TableCell> <ClassDropdown /> </TableCell>
                                        </TableRow>
                                        <TableRow>
                                            <TableCell className="font-medium">João Motta</TableCell>
                                            <TableCell> <ClassDropdown /> </TableCell>
                                        </TableRow>
                                        <TableRow>
                                            <TableCell className="font-medium">Kellen Maria Rodrigues Vasconcellos</TableCell>
                                            <TableCell> <ClassDropdown /> </TableCell>
                                        </TableRow>
                                        <TableRow>
                                            <TableCell className="font-medium">Mário Paiva Pessoa</TableCell>
                                            <TableCell> <ClassDropdown /> </TableCell>
                                        </TableRow>
                                    </TableBody>
                                </Table>
                            </AlertDialogDescription>
                        </div>
                    </div>
                </AlertDialogHeader>
            </AlertDialogContent>
        </AlertDialog>
    )
}

export default StudentsModal;