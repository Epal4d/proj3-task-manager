import { link } from "react-router-dom"

const NavBar = () => {
    return (
        <>
        <div>
            <nav>
                <Link to="/"> Home </Link>
                <Link to="/About">About</Link>
                <Link to="/Contact">Contact Us</Link>
            </nav>
        </div>
        </>
    )
}

export default NavBar;