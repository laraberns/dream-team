import { useState } from 'react';
import Banner from "./Componentes/Banner/banner";
import Footer from "./Componentes/Footer/footer";
import Formulario from "./Componentes/Formulario/formulario";
import Header from "./Componentes/Header/header";
import Time from "./Componentes/Time/time";
import { v4 as uuidv4 } from 'uuid';


function App() {
  const times = [
    {
      nome: "Goalkeeper",
      corPrimaria: "#393939",
      corSecundaria: "#DDDDDD",
      id: uuidv4()
    },
    {
      nome: "Defender",
      corPrimaria: "#1414CB",
      corSecundaria: "#E8F8FF",
      id: uuidv4()
    },
    {
      nome: "Midfielder",
      corPrimaria: "#17652E",
      corSecundaria: "#F0F8E2",
      id: uuidv4()
    },
    {
      nome: "Forward",
      corPrimaria: "#8E0C17",
      corSecundaria: "#FDE7E8",
      id: uuidv4()
    },
    {
      nome: "Manager",
      corPrimaria: "#DB6EBF",
      corSecundaria: "#FAE9F5",
      id: uuidv4()
    }
  ]

  const inicial = [
    {
      name: 'José Mourinho',
      club: 'Roma',
      image: 'https://upload.wikimedia.org/wikipedia/commons/7/79/FC_Salzburg_gegen_AS_Roma_%28UEFA_Euroleague_play-off%2C_2023-02-16%29_41.jpg',
      position: times[4].nome,
      id: uuidv4(),
      favorito: false
    },
    {
      name: 'Lionel Messi',
      club: 'Inter Miami',
      image: 'https://www.eluniversal.com.mx/resizer/yeplseS72Ngme6GXDJVL5t1D0tA=/1100x666/cloudfront-us-east-1.images.arcpublishing.com/eluniversal/GIDP5DS5YZD3VOPDXJVXX7GM24.jpg',
      position: times[3].nome,
      id: uuidv4(),
      favorito: true
    },
    {
      name: 'Neymar Jr',
      club: 'Al Hilal',
      image: 'https://s2-techtudo.glbimg.com/IUv-NQvFAdhU_avnApvf3rxz4_Q=/0x0:1000x644/984x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_08fbf48bc0524877943fe86e43087e7a/internal_photos/bs/2023/r/O/erJJK4TA6NN9CY8hZaAw/neymar-al-hilal.jpg',
      position: times[3].nome,
      id: uuidv4(),
      favorito: false
    }
  ]

  const [colaboradores, setColaboradores] = useState(inicial)

  const aoNovoColaboradorAdicionado = (colaborador) => {
    setColaboradores([...colaboradores, {
      ...colaborador,
      id: uuidv4(),
      favorito: false
    }])
    console.log(colaboradores)
  }

  function aoDeletar(id) {
    setColaboradores(colaboradores.filter(colaborador => colaborador.id !== id))
  }

  function aoFavoritar(id){
    setColaboradores(colaboradores.map( 
      colaborador => {
        if(colaborador.id === id){
          colaborador.favorito = !colaborador.favorito
        }
          return colaborador
        }
    ))
  }

  return (
    <div className="App">
      <div className='Main'>
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
          aoDeletar={aoDeletar}
          aoFavoritar={aoFavoritar}
        />)}
      </div>
      <Footer />
    </div>
  );
}

export default App;
