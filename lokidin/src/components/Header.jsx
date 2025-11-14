import { useState } from "react"
import logo from "../assets/imgs/logo.png"
import menu from "../assets/imgs/menu.png"

export default function Header(){

    const [aberto, setAberto] = useState(false)

    return (
        <div className="w-full bg-white grid grid-cols-2 shadow-lg py-5">
            <div className="flex items-center justify-center">
                <a href="#"><img src={logo} alt="Logo" className="w-15 h-15"/></a>
            </div>
            <div className="sm:flex justify-start items-center gap-10 hidden">
                <a className="text-gray-800 text-lg hover:text-rose-600 transition duration-200 ease-in-out" href="#">Home</a>
                <a className="text-gray-800 text-lg hover:text-rose-600 transition duration-200 ease-in-out" href="#">Minha Rede</a>
                <a className="text-gray-800 text-lg hover:text-rose-600 transition duration-200 ease-in-out" href="#">Vagas</a>
            </div>
            <div className="sm:hidden flex items-end justify-end mr-10">
                <button onClick={() => setAberto(!aberto)}><img src={menu} alt="Menu" className="w-15 h-15"/></button>
            </div>
            <div className={aberto ? "flex flex-col w-full items-center absolute top-25 bg-white" : "hidden"}>
                <a className="text-gray-800 text-lg text-center py-4 shadow-sm w-full" href="#">Home</a>
                <a className="text-gray-800 text-lg text-center py-4 shadow-sm w-full" href="#">Minha Rede</a>
                <a className="text-gray-800 text-lg text-center py-4 shadow-sm w-full" href="#">Vagas</a>
            </div>
        </div>
    )
}