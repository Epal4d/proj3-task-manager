import { link } from "react-dom-router"

const Footer = (props) =>{
    return (
        <>
        <p>{props.title} @ {props.year}</p>
        </>
    )
}

default export Footer;