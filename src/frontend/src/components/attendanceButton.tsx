import React, {useState} from 'react';


interface Props {}

const AttendanceButton: React.FC<Props> = () => {

        const [backgroundColor, setBackgroundColor] = useState<string>('red-1');
        const [text, setText] = useState<string>('Ausente');
        const [textColor, setTextColor] = useState<string>('red-2');


    const handleClick = () => { 
        
        if (backgroundColor === "red-1") {
            setBackgroundColor('green-2');
            setText('Presente');
            setTextColor('green-4');
        } else {
            setBackgroundColor('red-1');
            setText('Ausente');
            setTextColor('red-2');
        }
    };

    return (

        <button onClick={handleClick}>
        <div className={`bg-${backgroundColor} text-${textColor} rounded-2xl py-1 w-[80px] shadow-shadow-25`}>{text}</div>
        </button>
    )
}

export default AttendanceButton