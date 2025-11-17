import { useState } from "react";
import Modal from "../components/Modal";
import pin from "../assets/imgs/modal/pin.png";
import maleta from "../assets/imgs/modal/maleta.png";

export default function Card({nome, foto, cargo, resumo, localizacao, formacao, habilidadesTecnicas, experiencias, softSkills}){

    const [aberto, setAberto] = useState(false);

    return (
        <div className="p-5 flex flex-col items-center justify-center bg-white shadow-md gap-5 rounded-lg h-full">
            <img src={foto} alt={foto} className="rounded-full h-20 w-20" />
            <p className="text-2xl text-center font-bold text-rose-600">{nome}</p>
            <p className="text-lg text-center font-bold text-gray-800">{cargo}</p>
            <p className="text-md text-center font-bold text-gray-800">{resumo}</p>

            <button
                className="text-white px-4 py-2 bg-rose-600 rounded-lg w-full hover:bg-rose-600/80"
                onClick={() => setAberto(true)}
            >
                Detalhes
            </button>

            <Modal aberto={aberto} fechar={() => setAberto(false)}>
                <div className="flex flex-col justify-center items-center gap-4 w-full">
                    <img
                        src={foto}
                        alt={foto}
                        className="rounded-full h-28 w-28 border-2 border-rose-600"
                    />

                    <h2 className="text-xl text-rose-600 font-bold text-center">
                        Mais Detalhes sobre {nome}
                    </h2>
                    <ul className="flex flex-wrap justify-center items-center gap-3 text-sm sm:text-base">
                        <li className="flex justify-center items-center gap-2">
                            <img src={maleta} alt="maleta" className="w-5 h-5" />
                            {cargo}
                        </li>
                        <span className="hidden sm:block">|</span>
                        <li className="flex justify-center items-center gap-2">
                            <img src={pin} alt="pin" className="w-5 h-5" />
                            {localizacao}
                        </li>
                    </ul>
                    <h1 className="self-start text-xl">Formação</h1>

                    <div className="w-full overflow-x-auto">
                        <table className="table-auto border border-gray-200 w-full text-sm sm:text-base">
                            <thead>
                                <tr>
                                    <th className="border border-gray-300 px-3 py-1">Curso</th>
                                    <th className="border border-gray-300 px-3 py-1">Instituição</th>
                                    <th className="border border-gray-300 px-3 py-1">Ano</th>
                                </tr>
                            </thead>
                            <tbody>
                                {formacao.map((curso, index) => (
                                    <tr key={index}>
                                        <td className="border border-gray-300 px-3 py-1 text-center">{curso.curso}</td>
                                        <td className="border border-gray-300 px-3 py-1 text-center">{curso.instituicao}</td>
                                        <td className="border border-gray-300 px-3 py-1 text-center">{curso.ano}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                    <h1 className="text-xl text-rose-600">Habilidades</h1>

                    <div className="flex flex-wrap justify-center gap-3 w-full">
                        {habilidadesTecnicas.map((habilidade, index) => (
                            <span key={index} className="text-lg px-2">
                                {habilidade}
                            </span>
                        ))}
                    </div>
                    <h1 className="text-xl text-rose-600 mt-2">Experiências</h1>

                    <div className="flex flex-col w-full gap-4 mt-2">
                        {experiencias.map((trab, index) => (
                            <div
                                key={index}
                                className="bg-gray-100 rounded-lg px-5 py-4 w-full text-center flex flex-col gap-2 shadow-sm"
                            >
                                <h1 className="text-lg font-bold">
                                    Empresa: {trab.empresa}
                                </h1>
                                <h1 className="text-lg font-bold">
                                    Cargo: {trab.cargo}
                                </h1>

                                <p>
                                    <span className="font-bold">Entrada: </span>
                                    {trab.inicio}
                                </p>

                                <p className="font-bold">
                                    {trab.fim !== "Atualmente" && "Saída: "}
                                    <span className={trab.fim !== "Atualmente" ? "font-normal" : ""}>
                                        {trab.fim}
                                    </span>
                                    {trab.fim === "Atualmente" && " na empresa"}
                                </p>

                                <div className="flex flex-col mt-1">
                                    <p className="font-bold text-lg">Descrição</p>
                                    <p className="text-md font-medium">{trab.descricao}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                    <h1 className="text-xl text-rose-600 mt-2">Soft-Skills</h1>

                    <div className="flex flex-wrap justify-center w-full gap-3">
                        {softSkills.map((skill, index) => (
                            <span key={index} className="text-lg text-center">
                                {skill}
                            </span>
                        ))}
                    </div>
                    <div className="flex flex-col sm:flex-row w-full justify-center items-center gap-4 mt-4">
                        <button
                            className="w-full sm:w-1/2 px-4 py-2 bg-rose-600 text-white rounded-lg hover:bg-rose-600/80 transition"
                            onClick={() => prompt("Digite a mensagem: ")}
                        >
                            Enviar Mensagem
                        </button>

                        <button
                            className="w-full sm:w-1/2 px-4 py-2 bg-rose-600 text-white rounded-lg hover:bg-rose-600/80 transition"
                            onClick={() => alert("Profissional Recomendado com sucesso!")}
                        >
                            Recomendar Profissional
                        </button>
                    </div>
                </div>
            </Modal>
        </div>
    );
}