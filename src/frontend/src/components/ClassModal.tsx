import React from "react";
import { AlertDialog, AlertDialogCancel, AlertDialogContent, AlertDialogDescription, AlertDialogHeader, AlertDialogTitle, AlertDialogTrigger } from "@/components/ui/alert-dialog"
import { Table, TableBody, TableCell, TableCaption, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import ExitButton from "./exitButton";
import ArrowDown from "@/components/arrowDown";
import StatusDropdown from "@/components/statusDropdown";
import InformationField from "./informationField";
import EditIcon from "../assets/lapis.svg";
import Avatar from "./avatar";
import CreationButton from "./creationButton";
import SwitchFilter from "./SwitchFilter";
import ClassCard from "./ClassCard";


const arrowColor = '#686868';

const ClassModal = () => {

    return (
        <AlertDialog>
            <AlertDialogTrigger>
                <button className="flex border border-gray-400 text-gray-400 text-[14px] rounded-2xl px-6 gap-2">
    
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-4 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M15 19.128a9.38 9.38 0 0 0 2.625.372 9.337 9.337 0 0 0 4.121-.952 4.125 4.125 0 0 0-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 0 1 8.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0 1 11.964-3.07M12 6.375a3.375 3.375 0 1 1-6.75 0 3.375 3.375 0 0 1 6.75 0Zm8.25 2.25a2.625 2.625 0 1 1-5.25 0 2.625 2.625 0 0 1 5.25 0Z" />
                    </svg>
                    Turmas
                </button>
            </AlertDialogTrigger>
            <AlertDialogContent>
                <AlertDialogHeader>
                <div className="border border-gray-400 rounded-2xl pb-2">
                        <div className="flex flex-row justify-end w-[98%]">
                            <AlertDialogCancel className="w-[10px] hover:bg-transparent border-transparent mb-4"> <ExitButton /> </AlertDialogCancel>
                        </div>
                        <div className="flex justify-between mr-8 ml-8">
                            <AlertDialogTitle>Turmas</AlertDialogTitle>
                        </div>
                        <div>
                            <p className="text-[12px] text-gray-300 ml-8">Teatro</p>
                        </div>
                        <div className="flex gap-2 justify-end ml-auto w-40 mr-8"> 
                            <CreationButton name="Cadastrar turma" route="/cadastrar-turma"/>
                        </div>
                        <div>
                        </div>
                        <div className="max-h-[350px] overflow-y-scroll mt-4 mr-4 text-ellipsis justify-self-center">
                        </div>
                        <AlertDialogDescription className="flex flex-col items-center">
                            <div className="flex flex-col gap-2 w-[90%] max-h-[250px] overflow-y-scroll">
                                <ClassCard/>
                            </div>
                        </AlertDialogDescription>
                    </div>
                </AlertDialogHeader>
            </AlertDialogContent>
        </AlertDialog>
    )}

export default ClassModal;