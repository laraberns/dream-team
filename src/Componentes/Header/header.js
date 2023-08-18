import "./header.css"

const Header = () => {
    return(
        <header className="banner">
        <div className="container">
      <img className="logo" src="/football-club-logo-football-club-emblem-design-template-dark-background_630259-306.avif"></img>
        <ul className="lista"></ul>
        <li className="categoria">NEWS</li>
        <li className="categoria">TICKETS</li>
        <li className="categoria">FANS</li>
        </div>

        <div className="container">
        <a href="#">
                <img src="./Favoritos.svg" alt="logo favoritos" className="container__imagem favoritos"/>
                </a>
            <a href="#">
                <img src="./Usuario.svg" alt="logo usuario" className="container__imagem"/>
            </a>
        </div>
    </header>
    )
}

export default Header