import Colaborador from "../Colaborador/colaborador"
import "./time.css"

const Time = (props) => {

    const css = {
        backgroundColor: props.corSecundaria
    }

    const corBorda = {
        backgroundColor: props.corPrimaria
    }

    return (
    (props.colaboradores.length > 0) ?
        <section className='time' style={css}>
            <h3>{props.nome}</h3>
            <div className='colaboradores'>
            {props.colaboradores.map(colaborador => 
            <Colaborador 
            key={colaborador.name} 
            name={colaborador.name} 
            corDeFundo={props.corPrimaria} 
            club={colaborador.club} 
            image={colaborador.image}
            id={colaborador.id}
            favorito={colaborador.favorito}
            aoDeletar={props.aoDeletar}
            aoFavoritar={props.aoFavoritar}
            />)}
            </div>
        </section>: ''
    )
}

export default Time