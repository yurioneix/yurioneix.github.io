import { Link } from "react-router-dom";

function Header() {
    return ( 
        <nav>
            <ul>
                <li>
                    <Link to="/">Sobre mim</Link>
                </li>
                <li>
                    <Link to="/projects">Projetos</Link>
                </li>
                <li>
                    <Link to="#contato">Contato</Link>
                </li>
            </ul>
        </nav>
     );
}

export default Header;