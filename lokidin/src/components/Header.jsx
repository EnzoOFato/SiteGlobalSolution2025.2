import { useState } from "react"
import logo from "../assets/imgs/logo.png"
import { GoSun } from "react-icons/go";
import { GoMoon } from "react-icons/go";
import { HiOutlineMenu } from "react-icons/hi"

export default function Header({modo, setModo}){

    const [aberto, setAberto] = useState(false)

    return (
        <div className="w-full bg-white dark:bg-black grid md:grid-cols-3 grid-cols-2 place-items-center shadow-lg py-5 text-black dark:text-gray-200 transition transition-all duration-200">
            <div className="flex items-center justify-center">
                <a href="#"><img src={logo} alt="Logo" className="w-15 h-15"/></a>
            </div>
            <div className="md:flex justify-center items-center gap-10 hidden">
                <a className="lg:text-lg md:text-md hover:text-rose-600 transition duration-200 ease-in-out" href="#">Home</a>
                <a className="lg:text-lg md:text-md hover:text-rose-600 transition duration-200 ease-in-out" href="#">Minha Rede</a>
                <a className="lg:text-lg md:text-md hover:text-rose-600 transition duration-200 ease-in-out" href="#">Vagas</a>
            </div>
            <div className="md:hidden flex items-end justify-end">
                <button onClick={() => setAberto(!aberto)} className="text-4xl"><HiOutlineMenu /></button>
            </div>
            <div className={aberto ? "flex flex-col w-full items-center absolute top-25 bg-white dark:bg-black z-10 text-rose-600" : "hidden"}>
                <a className="text-lg text-center py-4 shadow-sm dark:shadow-white w-full" href="#">Home</a>
                <a className="text-lg text-center py-4 shadow-sm dark:shadow-white w-full" href="#">Minha Rede</a>
                <a className="text-lg text-center py-4 shadow-sm dark:shadow-white w-full" href="#">Vagas</a>
                <div className="py-4 flex justify-center gap-10 dark:text-white text-black">
                    <button onClick={() => setModo("")}>
                        <GoSun />
                    </button>
                    <button onClick={() => setModo("dark")}>
                        <GoMoon />
                    </button>
                </div>
            </div>
            <div className="md:flex justify-center items-center hidden gap-10 lg:w-3/10 md:w-5/10 bg-amber-50 dark:bg-gray-900 rounded-full py-2 text-xl transition transition-all duration-400">
                <button onClick={() => setModo("")} className={`${modo === "dark" ? "hover:scale-120 transition duration-200" : "text-rose-600 text-4xl"}`}>
                    <GoSun />
                </button>
                <button onClick={() => setModo("dark")} className={`${modo != "dark" ? "hover:scale-120 transition duration-200" : "text-rose-600 text-4xl"}`}>
                    <GoMoon />
                </button>
            </div>
        </div>
    )
}