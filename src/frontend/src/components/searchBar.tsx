import React, { useState } from 'react';
import searchIcon from "../assets/search.svg"

interface SearchBarProps {
    category: string;
    width: string;
    setSearchResults: Function;
    onSearch: (query: string) => Promise<SearchResult[]>;
    
}

interface SearchResult {
    id: string;
    title: string;
    description: string;
    
}

const SearchBar: React.FC<SearchBarProps> = ({ category, width, onSearch, setSearchResults }) => {
    const [searchInput, setSearchInput] = useState("");
    const [loading, setLoading] = useState(false);

    const handleChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
        const query = e.target.value;
        setSearchInput(query);
        
            setLoading(true);
            try {
                const results = await onSearch(query);
                setSearchResults(results);
            } catch (error) {
                console.error("Erro ao buscar resultados:", error);
            }
            setLoading(false);
    }


    return (
        <div>
            <div className="flex justify-center">
                <div className={`flex w-[${width}] px-2 py-1 text-gray-4 bg-white border-box rounded-2xl shadow-shadow-25`}>
                    <img src={searchIcon} alt="" className="w-[20px] h-[20px] self-center" />
                    <input type="search" placeholder="" className="focus:outline-none w-[100%] mx-3 rounded-2xl" onChange={handleChange} value={searchInput}></input>
                </div>
            </div>
        </div>
    )
}

export default SearchBar;

