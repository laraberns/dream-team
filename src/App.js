import { useState } from 'react';
import Banner from "./Componentes/Banner/banner";
import Footer from "./Componentes/Footer/footer";
import Formulario from "./Componentes/Formulario/formulario";
import Header from "./Componentes/Header/header";
import Time from "./Componentes/Time/time";


function App() {
  const times = [
    {
      nome: "Goalkeeper",
      corPrimaria: "#393939",
      corSecundaria: "#DDDDDD"
    },
    {
      nome: "Defender",
      corPrimaria: "#1414CB",
      corSecundaria: "#E8F8FF"
    },
    {
      nome: "Midfielder",
      corPrimaria: "#17652E",
      corSecundaria: "#F0F8E2"
    },
    {
      nome: "Forward",
      corPrimaria: "#8E0C17",
      corSecundaria: "#FDE7E8"
    },
    {
      nome: "Manager",
      corPrimaria: "#DB6EBF",
      corSecundaria: "#FAE9F5"
    }
  ]

  const [colaboradores, setColaboradores] = useState([])

  const aoNovoColaboradorAdicionado = (colaborador) => {
    setColaboradores([...colaboradores, colaborador])
    console.log(colaborador)
    console.log(colaboradores)
    
  }

  return (
    <div className="App">
      <div  className='Main'>
      <Header />
      <Banner />
      <Formulario
        times={times.map(time => time.nome)}
        aoColaboradorCadastrado={colaborador => aoNovoColaboradorAdicionado(colaborador)}
      />
      {times.map(time => <Time
        nome={time.nome}
        key={time.nome}
        corPrimaria={time.corPrimaria}
        corSecundaria={time.corSecundaria}
        colaboradores={colaboradores.filter(colaborador => colaborador.position === time.nome)}
      />)}
      </div>
      <Footer />
    </div>
  );
}

export default App;
