import { useEffect, useState } from "react"
import Footer from "./components/Footer"
import Header from "./components/Header"
import Card from "./components/Card"

function App() {

  const [usuarios, setUsuarios] = useState([])

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
            usuarios.map((usuario) => (
              <Card key={usuario.id} {...usuario}></Card>
            ))
          }
        </div>
        <Footer></Footer>
      </div>
    </>
  )
}

export default App