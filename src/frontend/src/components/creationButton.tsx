import React from "react";
import { Link } from 'react-router-dom';
import addIcon from '../assets/add.svg';

interface Props {
    name: string;
    route: string;
}

const CreationButton: React.FC<Props> = ({ name, route }) => {
    
    const nameButton = [
        { name: "Criar oficina", route: "new/class" },
        { name: "Cadastrar membro", route: "/cadastrar-membro" },
        { name: "Observações", route: "/observacoes" },
        { name: "Registrar foto", route: "/registrar-foto" },
        { name: "Cadastrar aluno", route: "/cadastrar-aluno" },
        { name: "Cadastrar turma", route: "/cadastrar-turma" }
    ];

    let filteredButton = nameButton.find(button => button.name === name);

    return (
        <div className="flex bg-white w-[100%] text-gray-4 rounded-2xl shadow-shadow-25 items-center text-nowrap py-1">
            {filteredButton?.route && (
            <Link to={filteredButton.route} className="flex justify-evenly gap-2 px-4">
                <img src={addIcon} alt="ícone de adição" className="w-[18px] h-[18px] self-center" />
                <span className="flex">{filteredButton?.name}</span>
            </Link>)}
        </div>
    );
}

export default CreationButton;
