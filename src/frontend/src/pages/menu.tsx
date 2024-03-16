import React from "react";
import NavBar from "../components/navBar";
import Avatar from "../components/avatar.tsx";
import CourseCard from "../components/CourseCard.tsx";
import CreationButton from "../components/creationButton.tsx";
import SearchBar from "../components/searchBar.tsx";
import SwitchFilter from "@/components/SwitchFilter.tsx";
import { useState } from "react";
import { useEffect } from "react";
import Footer from "@/components/footer.tsx";
import ShortcutBox from "@/components/ShortcutBox.tsx";

// page home screen
export default function Menu() {


  const [workshopData, setWorkshopData] = useState([]);
  const [filteredCards, setFilteredCards] = useState([]);

  const onSearch = async (query: string) => {
    const url = 'http://localhost:3000/api/classes'

    let response = await fetch(url)
    let data = await response.json()
    if (!query.trim()) {
      return data
    }
    return data.filter((workshop: any) => {
      if (workshop.workshop) {
        return workshop.workshop.toLowerCase().search(query.toLowerCase()) != -1
      }
    })
  }


  useEffect(() => {
    const fetchData = async () => {
      const url = 'http://localhost:3000/api/classes'

      fetch(url)
        .then(response => response.json())
        .then(data => setWorkshopData(data))
        .catch((error) => {
          console.error('Erro:', error);
        });
    }

    fetchData();
  }, []);

  // return the home screen
  return (
    <div>
      <header>
        <NavBar name={'Nome'} role={'líder'} avatar={<Avatar defaultImage="" profileImage={'imagem'} widthImage={'30px'} heightImage={'30px'} />} />
      </header>
      <main className="flex flex-col px-14 pt-12 pb-8 h-full items-center">
        <div className="w-[70%]">
          <ShortcutBox role={'líder'} gender={'masculino'} />
        </div>

        <section className="flex flex-col bg-white shadow-shadow-10 w-[70%] h-auto mt-8 rounded-[20px] p-8 gap-8">
          <div className='flex w-[100%] h-auto justify-between pl-3'>
            <p className='text-[24px] font-medium'>Oficinas</p>
            <div className='w-[50%]'>
              <SearchBar setSearchResults={setWorkshopData} onSearch={onSearch} category={"page"} width={"90%"} />
            </div>
            <div className="w-[20%]">
              <CreationButton name={'Criar oficina'} route={'new/class'} />
            </div>
          </div>
          <div className='flex justify-end gap-4'>
            <SwitchFilter data={workshopData} onFilterChange={setFilteredCards} />
          </div>
          <div className='flex flex-wrap gap-10 justify-center'>
            {filteredCards.map((card: { id: string, status: string, workshop: string, category: string }) => (
              <CourseCard key={card.id} data={card} />
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}