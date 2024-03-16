import React from "react";
import exitIcon from "../assets/exit.svg";

interface Props {
    componentAction: () => void;
}


const ExitButton: React.FC<Props> = ({ componentAction }) => {

    const onButtonClick = () => {
        if (typeof componentAction === 'function') {
            componentAction();
        } else {
            console.error("componentAction is not a function");
        }
    }

    return (
        <div onClick={onButtonClick}>
            <div className="bg-gray-1 flex justify-center items-center w-[24px] h-[24px] border-2 border-gray-3 rounded-full">
               <img src={exitIcon} alt="" />
            </div>
        </div>
    )
} 

export default ExitButton