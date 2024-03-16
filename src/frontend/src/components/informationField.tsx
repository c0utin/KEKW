import React, { useRef, useEffect, useState } from "react";

interface Props {
    title: string;
    value: string;
    paddingY: string;
}

// Component that represents a field with information
const InformationField: React.FC<Props> = ({title, value, paddingY}) =>{

    // Create a reference to the value element and a state to check if the value has overflow
    const valueRef = useRef<HTMLParagraphElement>(null);
    const [hasOverflow, setOverflow] = useState(false);

    // Check if the value has overflow
    useEffect(() => {
        const element = valueRef.current;
        if(element){
            setOverflow(element.clientWidth < element.scrollWidth);
        }
    }, [value]);


    // Styles for the padding
    const padding = {
        py2: 'py-2',
        py4: 'py-4',
      };

    // Return the information field
    return(
        <>
            <div className={`flex border border-gray-3 rounded-full px-3 ${(padding as { [key : string]: string })[paddingY]} w-[100%] h-[25px] items-center`}>
                <p className="font-semibold w-[40%] text-[14px]">{title}</p>
                <p ref={valueRef} title={hasOverflow ? value :""} className={`w-[60%] text-[13px] cursor-default text-center overflow-hidden text-ellipsis whitespace-nowrap`}>{value}</p>
            </div>
        </>
    )
}

export default InformationField;