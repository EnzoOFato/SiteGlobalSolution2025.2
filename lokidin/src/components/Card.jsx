export default function Card({nome, foto, cargo, resumo}){
    return (
        <div className="p-5 flex flex-col items-center justify-center bg-white shadow-md gap-5 rounded-lg h-full flex-grow">
            <img src={foto} alt={foto} className="rounded-full h-20 w-20"/>
            <p className="text-2xl text-center font-bold text-rose-600 flex-grow">{nome}</p>
            <p className="text-lg text-center font-bold text-gray-800 flex-grow">{cargo}</p>
            <p className="text-md text-center font-bold text-gray-800 flex-grow">{resumo}</p>
            <button className="text-white px-4 py-2 bg-rose-600 rounded-lg w-8/10 hover:bg-rose-600/80">Detalhes</button>
        </div>
    )
}