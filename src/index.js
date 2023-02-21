import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import {Header, Main, Footer, About, Portfolio} from './components';

const HomeP = () => {
    return (
        <BrowserRouter>
            <body id="main-body">
                <Header /> 
                <Routes>
                    <Route path="/" element={ <Main /> }/>
                    <Route path="/About" element={ <About /> }/>
                    <Route path="/Portfolio" element={ <Portfolio /> }/>
                </Routes>
                <Footer />
            </body>
        </BrowserRouter>
    )
};

let homePage = document.getElementById("home-page");
const root = createRoot(homePage);
root.render(<HomeP />)
