import logo from "../assets/imgs/logo.png"

export default function Header(){
    return (
        <div className="w-full bg-white grid grid-cols-2 shadow-lg py-5">
            <div className="flex items-center justify-center">
                <a href="#"><img src={logo} alt="Logo" className="w-15 h-15"/></a>
            </div>
            <div className="flex justify-start items-center gap-10">
                <a className="text-gray-800 text-lg" href="#">Home</a>
                <a className="text-gray-800 text-lg" href="#">Minha Rede</a>
                <a className="text-gray-800 text-lg" href="#">Vagas</a>
            </div>
        </div>
    )
}