import React from "react";
import logoTest from "../assets/logoTest.svg"
import logoInteli from "../assets/logoIntei.png"

export default function Footer() {

    return (
        <footer className="flex w-[100%] h-auto bg-white shadow-shadow-25 p-[6px]">
            <div className="w-[10%] px-5">
                <img src={logoTest} className="w-[40px] h-[40px] px-1" />
            </div>
            <div className="flex flex-col w-[80%] justify-center">
                <p className="flex justify-content self-center text-[10px]">Instituto de Tecnologia e Liderança - Inteli</p>
                <p className="flex justify-center self-center text-[8px]">Asas Solidárias</p>
            </div>
            <div className="w-[10%] flex justify-end">
                <img src={logoInteli} className="w-[50px] h-[35px]" />
            </div>
        </footer>
    )
}