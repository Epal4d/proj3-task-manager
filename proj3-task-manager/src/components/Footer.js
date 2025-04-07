import { Link } from "react-router-dom"

const Footer = (props) =>
    {
        return (
        <>
        <p>{props.title} @ {props.year}</p>
        </>
        )
    }

export default Footer;