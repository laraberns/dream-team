import "./colaborador.css"
import { IoIosCloseCircleOutline } from "react-icons/io"
import { AiFillStar, AiOutlineStar } from "react-icons/ai"

const Colaborador = (props) => {
    return (
        <div className="colaborador">
            <IoIosCloseCircleOutline
                className="deletar"
                size={30}
                color="white"
                onClick={() => props.aoDeletar(props.id)}
            />
            <div className="cabecalho" style={{ backgroundColor: props.corDeFundo }}>
            </div>
            <div className="image-container">
                <img src={props.image} alt={props.name} className="image" />
            </div>
            <div className="rodape-colaborador">
                <h4>{props.name}</h4>
                <h5 style={{ color: props.corDeFundo }}>{props.club}</h5>
                <div className="favoritar">
                    {props.favorito ?
                        <AiFillStar
                            onClick={() => props.aoFavoritar(props.id)}
                            size={35}
                            color="yellow"
                        /> :
                        <AiOutlineStar
                            onClick={() => props.aoFavoritar(props.id)}
                            size={35}
                        />}

                </div>
            </div>
        </div>
    )
}

export default Colaborador