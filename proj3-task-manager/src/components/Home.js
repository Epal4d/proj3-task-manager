import { Link } from "react-router-dom"
import {useEffect} from "react"
import Header from "./Header"
import Footer from "./Footer"

const Home = () =>  
{
    useEffect(()=>{ 
        console.log("#App::Home page load")
    }  ,[])

    return(
        <>
        <Header title="Project 3 Task Manager"> </Header>
        <p>Home Page Task Manager</p>


        <Footer title="Footer" year={2025}> </Footer>

        </>
    )
}
export default Home;


