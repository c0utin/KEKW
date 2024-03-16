import React, { useState, ChangeEvent } from 'react';
import addIcon from '../assets/add.svg';

function TextInput() {
  const [isEditable, setIsEditable] = useState(false);
  const [text, setText] = useState('Escreva algo aqui!');

  const handleEdit = () => {
    setIsEditable(true);
  };

  const handleChange = (event: ChangeEvent<HTMLTextAreaElement>) => {
    setText(event.target.value);
  };

  const handleBlur = () => {
    setIsEditable(false);
  };

  return (
    <div className="flex flex-col items-start">
      <button onClick={handleEdit} className="flex justify-center gap-2 py-1 w-[16%] text-[14px] rounded-3xl shadow-shadow-25 mb-4">
        <img src={addIcon} className='w-[16px] h-[16px] self-center' />
        Observações
      </button>
      {isEditable ? (
        <textarea 
          maxLength={1000}
          value={text} 
          onChange={handleChange} 
          onBlur={handleBlur} 
          className={`w-full border-2 ${isEditable ? 'border-gray-4' : 'border-gray-2'}`}
        />
      ) : (
        <div className="w-full max-h-[80px] border-b-2 mb-2 border-gray-2 whitespace-pre-line text-wrap overflow-y-scroll">
          {text}
        </div>
      )}
    </div>
  );
}

export default TextInput;