import { useState } from 'react';
import Botao from "../Botao/botao"
import CampoTexto from "../CampoTexto/campotexto"
import ListaSuspensa from "../ListaSuspensa/listasuspensa"
import "./formulario.css"


const Formulario = (props) => {

  const [name, setName] = useState('')
  const [club, setClub] = useState('')
  const [image, setImage] = useState('')
  const [position, setPosition] = useState('')

  const aoSalvar = (evento) => {
    evento.preventDefault()
      props.aoColaboradorCadastrado({
          name,
          club,
          image,
          position
      })
      setName("")
      setClub("")
      setImage("")
      setPosition("")
  }

    return(
        <section className="formulario">
         <form onSubmit={aoSalvar}>
            <CampoTexto 
             label="Name"
             obrigatorio={true}
             placeholder="name of the player"
             valor={name}
             aoAlterado={valor => setName(valor)}
             />
            <CampoTexto 
             label="Current Club"
             obrigatorio={true}
             placeholder="name of the player's club"
             valor={club}
             aoAlterado={valor => setClub(valor)}
             />
            <CampoTexto 
              label="Photo"
              obrigatorio={true}
              placeholder="URL link (JPEG or JPG)"
              valor={image}
              aoAlterado={valor => setImage(valor)}
              />
              <ListaSuspensa
                 obrigatorio={true}
                 label="Position/Manager"
                 itens={props.times}
                 valor={position}
                 aoAlterado={valor => setPosition(valor)}
              />
              <Botao>
                SUBMIT
              </Botao>
         </form>
        </section>
    )
}

export default Formulario

