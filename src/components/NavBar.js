import CartWidget from "./CartWidget"

const NavBar = () => {
    return <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container-fluid">
            <a className="navbar-brand" href="#">LosPaseos</a>
            <nav className="navbar bg-light rounded-circle">
                <a className="navbar-brand " href="#">
                    <img src="./logolp.png" alt="Bootstrap" width="50" height="50" className='rounded-5' />
                </a>
            </nav>
            <div className="collapse navbar-collapse d-flex       justify-content-center" id="navbarNav">
                <ul className="navbar-nav">
                    <li className="nav-item">
                        <a className="nav-link active" aria-current="page" href="#">Inicio</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">Productos</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">Servicios</a>
                    </li>
                </ul>
            </div>
            <CartWidget />
        </div>
    </nav>
}

export default NavBar;