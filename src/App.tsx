import { Header } from "./components/Header"
import WelcomeModal from "./components/WelcomeModal"

import "./App.css"
import SliderComponent  from "./components/SliderComponent"
import { AsMaisPedidas } from "./components/AsMaisPedidas"
import { TipBar } from "./components/TipBar"
import { MarcasParceiras } from "./components/MarcasParceiras"
import { NovaColecao } from "./components/NovaColecao"
import { Newsletter } from "./components/Newsletter"
import Institucional from "./components/Institucional"


function App() {


  return (
    <>
    <WelcomeModal></WelcomeModal>
    <Header></Header>
    <SliderComponent></SliderComponent>
    <TipBar></TipBar>
    <MarcasParceiras></MarcasParceiras>
    <AsMaisPedidas></AsMaisPedidas>
    <NovaColecao></NovaColecao>
    <Newsletter></Newsletter>
    <Institucional></Institucional>
    </>
    
  )
}

export default App
