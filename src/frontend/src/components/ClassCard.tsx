import React from "react";
import StatusDropdown from "./statusDropdown";
import InformationField from "./informationField";
import EditIcon from "../assets/lapis.svg";

const ClassCard = () => {
    return (

        <div className="bg-gray-100 p-6 rounded-lg shadow-md w-85 ml-2 mr-2 justify-center">
            <div className="flex justify-between items-center mb-4">
                <div className="flex gap-2">
                    <span className="font-bold text-lg">Turma 1</span>
                    <span className="text-gray-3 mt-1">47 alunos</span>
                </div>
                <div className="flex justify-end">
                    <StatusDropdown linkGet="" linkPut="" context={'courses'} optionTextSize={'12px'} titleTextSize={'14px'} isDropdown={true} />
                </div>
            </div>
            <div className="grid grid-cols-2 gap-4 mb-4 justify-end">
                <div className="w-full">
                    <InformationField paddingY="" title={'Período:'} value={'20 Abr 24 - 20 Mai 24'} />
                </div>
                <div className="w-full">
                    <InformationField paddingY="" title={'Duração:'} value={'sofia.silva@gmail.com'} />
                </div>
                <div className="w-full">
                    <InformationField paddingY="" title={'E-mail:'} value={'sofia.silva@gmail.com'} />
                </div>
                <div className="w-full">
                    <InformationField paddingY="" title={'E-mail:'} value={'sofia.silva@gmail.com'} />
                </div>
                <div className="w-full">
                    <InformationField paddingY="" title={'E-mail:'} value={'sofia.silva@gmail.com'} />
                </div>
                <div className="w-full">
                    <InformationField paddingY="" title={'E-mail:'} value={'sofia.silva@gmail.com'} />
                </div>
            </div>
            <div className="flex justify-end">
            <button className="flex border border-gray-4 text-gray-4 text-[14px] rounded-2xl px-6 gap-2 justify-end">
                <img src={EditIcon} alt="" className="w-[16px] h-[16px] self-center" />
                <p>Editar</p>
            </button>
            </div>
        </div>
    )

}

export default ClassCard