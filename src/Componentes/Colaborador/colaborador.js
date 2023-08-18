import "./colaborador.css"

const Colaborador = (props) => {
    return (
        <div className="colaborador">
        <div className="cabecalho" style={{backgroundColor: props.corDeFundo}}>
            <img src={props.image} alt={props.name} />
        </div>
        <div className="rodape-colaborador">
            <h4>{props.name}</h4>
            <h5 style={{color: props.corDeFundo}}>{props.club}</h5>
        </div>
    </div>
    )
}

export default Colaborador