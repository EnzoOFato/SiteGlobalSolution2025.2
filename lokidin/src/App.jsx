import { useEffect, useState } from "react"
import Footer from "./components/Footer"
import Header from "./components/Header"
import Card from "./components/Card"
import seta from "./assets/imgs/seta.png"

function App() {

  const [usuarios, setUsuarios] = useState([])
  const [mostrados, setMostrados] = useState(10)

  useEffect(() => {
    fetch("../usuarios.json")
    .then(res => res.json())
    .then(data => {
      setUsuarios(data)
      console.log(data)
    })
  }, [])

  return (
    <>
      <div className="min-h-screen flex items-center flex-col bg-amber-50">
        <Header></Header>
        <div className="w-9/10 grid lg:grid-cols-5 md:grid-cols-3 grid-cols-1 gap-10 mt-15 items-stretch auto-rows-fr">
          {
            usuarios.map((usuario, index) => 
              index < mostrados && (<Card key={usuario.id} {...usuario}></Card>)
            )
          }
        </div>
        <button className="flex flex-col justify-center items-center mt-5 px-4 py-2 hover:scale-125 trasition-all duration-200" onClick={() => {usuarios.length > mostrados ? setMostrados(mostrados + 10) : setMostrados(10)}}>
          <span>{usuarios.length > mostrados ? "Mostrar mais" : "Mostrar Menos"}</span>
          <img src={seta} alt="Seta" className={`w-5 h-5 ${usuarios.length > mostrados ? "" : "rotate-180"}`}/>
        </button>
        <Footer></Footer>
      </div>
    </>
  )
}

export default App