import { useEffect, useState } from "react"
import Footer from "./components/Footer"
import Header from "./components/Header"

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
        <Footer></Footer>
      </div>
    </>
  )
}

export default App