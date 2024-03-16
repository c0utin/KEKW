import React from "react";
import presencaIcon from "../assets/presenca.svg";
import { AlertDialog, AlertDialogAction, AlertDialogCancel, AlertDialogContent, AlertDialogDescription, AlertDialogFooter, AlertDialogHeader, AlertDialogTitle, AlertDialogTrigger } from "@/components/ui/alert-dialog"
import { Table, TableBody, TableCell, TableCaption, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import AttendanceButton from "./attendanceButton";
import ExitButton from "./exitButton";
import SearchBar from "./searchBar";

const AttendanceModal = () => {

    return (
        <AlertDialog>
            <AlertDialogTrigger>
                <button className="flex justify-center gap-4 shadow-shadow-25 rounded-3xl py-1 w-[100%]">
                    <img src={presencaIcon} className='w-[16px] h-[16px] self-center' />
                    <p>Lista de Presença</p>
                </button>
            </AlertDialogTrigger>
            <AlertDialogContent>
                <AlertDialogHeader>
                    <div className="border border-gray-4 rounded-2xl pl-8 pb-8 mt-4 mx-4">
                        <div className="flex flex-row justify-end w-[98%]">
                            <AlertDialogCancel className="w-[10px] hover:bg-transparent border-transparent mb-4"> <ExitButton /> </AlertDialogCancel>
                        </div>
                        <div className="flex justify-between mr-8">
                            <AlertDialogTitle>Presença</AlertDialogTitle>
                            {/* <SearchBar category="page" /> */}
                        </div>
                        <div className="max-h-[350px] overflow-y-scroll mt-4 mr-8 text-ellipsis">
                            <AlertDialogDescription>
                                <Table >
                                    <TableCaption>Esses são todos os alunos da turma!</TableCaption>
                                    <TableHeader>
                                        <TableRow>
                                            <TableHead className=' text-black'>Nome</TableHead>
                                            <TableHead className='text-center text-black'>Situação</TableHead>
                                        </TableRow>
                                    </TableHeader>
                                    <TableBody>
                                        <TableRow>
                                            <TableCell className="font-medium">Ana Vieira</TableCell>
                                            <TableCell> <AttendanceButton /> </TableCell>
                                        </TableRow>
                                        <TableRow>
                                            <TableCell className="font-medium">Ana Clara Visconde Bispo</TableCell>
                                            <TableCell> <AttendanceButton /> </TableCell>
                                        </TableRow>
                                        <TableRow>
                                            <TableCell className="font-medium">André Souza</TableCell>
                                            <TableCell> <AttendanceButton /> </TableCell>
                                        </TableRow>
                                        <TableRow>
                                            <TableCell className="font-medium">Catharina Nogueira Milano</TableCell>
                                            <TableCell> <AttendanceButton /> </TableCell>
                                        </TableRow>
                                        <TableRow>
                                            <TableCell className="font-medium">Igor Ferreira</TableCell>
                                            <TableCell> <AttendanceButton /> </TableCell>
                                        </TableRow>
                                        <TableRow>
                                            <TableCell className="font-medium">João Motta</TableCell>
                                            <TableCell> <AttendanceButton /> </TableCell>
                                        </TableRow>
                                        <TableRow>
                                            <TableCell className="font-medium">Kellen Maria Rodrigues Vasconcellos</TableCell>
                                            <TableCell> <AttendanceButton /> </TableCell>
                                        </TableRow>
                                        <TableRow>
                                            <TableCell className="font-medium">Mário Paiva Pessoa</TableCell>
                                            <TableCell> <AttendanceButton /> </TableCell>
                                        </TableRow>
                                    </TableBody>
                                </Table>
                            </AlertDialogDescription>
                        </div>
                    </div>
                </AlertDialogHeader>
                <AlertDialogFooter>

                </AlertDialogFooter>
            </AlertDialogContent>
        </AlertDialog>
    )
}

export default AttendanceModal;