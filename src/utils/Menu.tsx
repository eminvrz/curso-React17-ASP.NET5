import { NavLink } from "react-router-dom"
import Autorizado from "../auth/Autorizado"

function Menu() {

    // Nav link para impedir hacer un full refresh 
    const claseActiva = "active"

    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container-fluid">
                <NavLink to="/" className="navbar-brand"
                    activeClassName={claseActiva}
                > React Peliculas</NavLink>
                <div className="collapse navbar-collapse">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <NavLink className="nav-link" activeClassName={claseActiva}
                                to="/peliculas/filtrar">
                                Filtrar Peliculas
                            </NavLink>
                        </li>
                        <Autorizado role="admin"
                            autorizado={
                                <>
                                    <li className="nav-item">
                                        <NavLink className="nav-link" activeClassName={claseActiva}
                                            to="/generos">
                                            Generos
                                        </NavLink>
                                    </li>
                                    <li className="nav-item">
                                        <NavLink className="nav-link" activeClassName={claseActiva}
                                            to="/actores">
                                            Actores
                                        </NavLink>
                                    </li>

                                    <li className="nav-item">
                                        <NavLink className="nav-link" activeClassName={claseActiva}
                                            to="/cines">
                                            Cines
                                        </NavLink>
                                    </li>

                                    <li className="nav-item">
                                        <NavLink className="nav-link" activeClassName={claseActiva}
                                            to="/peliculas/crear">
                                            Crear Peliculas
                                        </NavLink>
                                    </li>
                                </>
                            }

                        />
                        

                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default Menu