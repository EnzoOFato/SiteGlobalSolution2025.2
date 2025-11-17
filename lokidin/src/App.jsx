import { useEffect, useState } from "react"
import Footer from "./components/Footer"
import Header from "./components/Header"
import Card from "./components/Card"
import seta from "./assets/imgs/seta.png"
import lupa from "./assets/imgs/lupa.png"

function App() {

  const [usuarios, setUsuarios] = useState([])
  const [mostrados, setMostrados] = useState(10)
  const [busca, setBusca] = useState("")
  const [filtro, setFiltro] = useState("habilidadesTecnicas")

  useEffect(() => {
    fetch("../usuarios.json")
    .then(res => res.json())
    .then(data => {
      setUsuarios(data)
      console.log(data)
    })
  }, [])

  const usuariosFiltrados = usuarios.filter((usuario) => {
    if(!filtro) return true

    if(filtro != "habilidadesTecnicas"){
      return usuario[filtro].toLowerCase().includes(busca.toLocaleLowerCase())
    }
    return usuario.habilidadesTecnicas.some(habilidade =>
      habilidade.toLowerCase().includes(busca.toLowerCase())
    )
  })


  return (
    <>
      <div className="min-h-screen flex items-center flex-col bg-amber-50">
        <Header></Header>
        <div className="w-9/10 flex sm:flex-row flex-col justify-end items-center mt-5 gap-5">
          <div className="flex justify-center items-center relative sm:w-auto w-full">
            <img src={lupa} alt="Lupa" className="w-5 h-5 absolute left-2"/>
            <input type="text" 
              className="pr-2 pl-8 sm:text-lg text-md bg-white rounded border border-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 w-full" 
              value={busca} 
              placeholder="Pesquisa" 
              onChange={(e) => setBusca(e.target.value)}
            />
          </div>
          <select 
            className="bg-white pr-5 pl-1 sm:text-lg text-md rounded border border-gray-800 sm:w-auto w-full" 
            id="select" name="selected" 
            onChange={(e) => setFiltro(e.target.value)}
          >
            <option value="habilidadesTecnicas">Tecnologia</option>
            <option value="area">Área</option>
            <option value="localizacao">Cidade</option>
          </select>
        </div>
        <div className={`w-9/10 grid lg:grid-cols-5 md:grid-cols-3 grid-cols-1 gap-10 mt-8 items-stretch auto-rows-fr`}>
          {
            usuariosFiltrados.length === 0 ? (
            <p className="col-span-full relative top-50 text-center text-lg text-gray-800">Nenhum usuário encontrado</p>
            ) : ( 
              usuariosFiltrados.slice(0, mostrados).map((usuario) => 
              (<Card key={usuario.id} {...usuario}></Card>)
              )
            )
          }
        </div>
        <button className={`${usuariosFiltrados.length === 0 ? "hidden" : "flex"} flex-col justify-center items-center mt-5 px-4 py-2 hover:scale-125 trasition-all duration-200`} onClick={() => {usuariosFiltrados.length > mostrados ? setMostrados(mostrados + 10) : setMostrados(10)}}>
          <span>{usuariosFiltrados.length > mostrados ? "Mostrar mais" : "Mostrar Menos"}</span>
          <img src={seta} alt="Seta" className={`w-5 h-5 ${usuariosFiltrados.length > mostrados ? "" : "rotate-180"}`}/>
        </button>
        <Footer></Footer>
      </div>
    </>
  )
}

export default App