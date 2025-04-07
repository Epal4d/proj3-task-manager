import { link } from "react-router-dom"

const NavBar = () => {
    return (
        <div>
            <nav>
                <link to="/"> Home </link>
                <link to="/">About</link>
                <link to="/">Contact Us</link>
            </nav>
        </div>
    )
}

export default NavBar;