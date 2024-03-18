import '../../styles/styles.css'
export default function Header() {
    return (
        <nav className="navbar navbar-expand-lg mx-0 " style={{backgroundColor:'rgba(0, 0, 73, 0.84)'}}>
        <div className="container-fluid">
            <a className="navbar-brand " href="#" style={{color:"#d4dade"}}>Navbar</a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                <span  className="navbar-toggler-icon"></span>
            </button>

            
            <div className="collapse navbar-collapse" id="navbarNavDropdown">
            <ul className="navbar-nav">
                <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#" style={{color:"#d4dade"}}>Home</a>
                </li>
                <li className="nav-item">
                <a className="nav-link" href="#" style={{color:"#d4dade"}}>Features</a>
                </li>
                <li className="nav-item">
                <a className="nav-link " href="#" style={{color:"#d4dade"}}>Pricing</a>
                </li>
                <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false" style={{color:"#d4dade"}}>
                    Dropdown link
                </a>
                <ul className="dropdown-menu">
                    <li><a className="dropdown-item" href="#">Action</a></li>
                    <li><a className="dropdown-item" href="#">Another action</a></li>
                    <li><a className="dropdown-item" href="#">Something else here</a></li>
                </ul>
                </li>
            </ul>
            </div>
        </div>
        </nav>
    )
}