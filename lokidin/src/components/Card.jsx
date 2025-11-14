import { useState } from "react"
import Modal from "../components/Modal"
import pin from "../assets/imgs/modal/pin.png"
import maleta from "../assets/imgs/modal/maleta.png"

export default function Card({nome, foto, cargo, resumo, localizacao, formacao, habilidadesTecnicas, experiencias, softSkills}){

    const [aberto, setAberto] = useState(false)

    return (
        <div className="p-5 flex flex-col items-center justify-center bg-white shadow-md gap-5 rounded-lg h-full flex-grow">
            <img src={foto} alt={foto} className="rounded-full h-20 w-20"/>
            <p className="text-2xl text-center font-bold text-rose-600 flex-grow">{nome}</p>
            <p className="text-lg text-center font-bold text-gray-800 flex-grow">{cargo}</p>
            <p className="text-md text-center font-bold text-gray-800 flex-grow">{resumo}</p>
            <button className="text-white px-4 py-2 bg-rose-600 rounded-lg w-8/10 hover:bg-rose-600/80" onClick={() => setAberto(true)}>Detalhes</button>
            <Modal aberto={aberto} fechar={() => setAberto(false)}>
                <div className="flex flex-col justify-center items-center gap-3">
                    <img src={foto} alt={foto} className="rounded-full h-25 w-25 border-2 border-rose-600"/>
                    <h2 className="text-xl text-rose-600 font-bold text-center">Mais Detalhes sobre {nome}</h2>
                    <ul className="flex justify-center items-center gap-5">
                        <li className="flex justify-center items-center gap-2"><img src={maleta} alt="maleta" className="w-5 h-5"/>{cargo}</li>
                        <span>|</span>
                        <li className="flex justify-center items-center gap-2"><img src={pin} alt="pin" className="w-5 h-5"/>{localizacao}</li>
                    </ul>
                    <h1 className="self-start relative top-3 text-xl">Formação</h1>
                    <table className="table-auto border border-gray-200 border-separate w-full">
                        <thead>
                            <th className="border border-gray-300 px-5">Curso</th>
                            <th className="border border-gray-300 px-5">Instituição</th>
                            <th className="border border-gray-300 px-5">Ano Conclusão</th>
                        </thead>
                        <tbody>
                            {
                                formacao.map((curso) => (
                                    <tr>
                                        <td className="border border-gray-300 px-5 text-center">{curso.curso}</td>
                                        <td className="border border-gray-300 px-5 text-center">{curso.instituicao}</td>
                                        <td className="border border-gray-300 px-5 text-center">{curso.ano}</td>
                                    </tr>
                                ))
                            }
                        </tbody>
                    </table>
                    <h1 className="self-center relative top-3 text-xl text-rose-600">Habilidades</h1>
                    <div className="flex justify-evenly items-center w-full">
                        {
                            habilidadesTecnicas.map((habilidade) => (
                                <h1 className="text-lg px-2">{habilidade}</h1>
                            ))
                        }
                    </div>
                    <h1 className="self-center relative top-3 text-xl text-rose-600">Experiências</h1>
                    <div className="flex w-full justify-center items-center mt-5 gap-3">
                        {
                            experiencias.map((trablho) => (
                                <div className="grid grid-cols-2 grid-rows-3 bg-gray-100 rounded-lg px-10 py-5 w-full text-center">
                                    <h1 className="text-lg font-bold">Empresa: {trablho.empresa}</h1>
                                    <h1 className="text-lg font-bold">Cargo: {trablho.cargo}</h1>
                                    <h1><span className="text-lg font-bold">Entrada: </span>{trablho.inicio}</h1>
                                    <h1 className="text-lg font-bold">{trablho.fim !== "Atualmente" && "Saída: "}
                                        <span className={trablho.fim != "Atualmente" ? "text-sm font-normal" : ""}>{trablho.fim}</span>{trablho.fim === "Atualmente" && " na empresa"}
                                    </h1>
                                    <div className="col-span-2 flex flex-col">
                                        <p className="text-lg font-bold">Descrição</p>
                                        <p className="text-lg font-bold">{trablho.descricao}</p>
                                    </div>
                                </div>
                            ))
                        }
                    </div>
                    <h1 className="self-center relative top-3 text-xl text-rose-600">Soft-Skills</h1>
                    <div className={`grid grid-cols-${softSkills.length} w-full`}>
                        {
                            softSkills.map((skill) => (
                                <h1 className="text-lg px-2 text-center">{skill}</h1>
                            ))
                        }
                    </div>
                    <div className="flex w-9/10 justify-center items-center gap-5">
                        <button className="w-1/2 px-4 py-2 bg-rose-600 text-white rounded-lg hover:bg-rose-600/80 transition duration-400" onClick={() => prompt("Digite a mensagem: ")}>Enviar Mensagem</button>
                        <button className="w-1/2 px-4 py-2 bg-rose-600 text-white rounded-lg hover:bg-rose-600/80 transition duration-400" onClick={() => alert("Profissional Recomendado com sucesso!")}>Recomendar Profissional</button>
                    </div>
                </div>
            </Modal>
        </div>
    )
}