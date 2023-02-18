import { createRoot } from 'react-dom/client'
import Header from "./components/Header";
import Main from "./components/Main";
import Footer from "./components/Footer";

const HomeP = () => {
    return (
        <body id="main-body">
            <Header />
            <Main />
            <Footer />
        </body>
    )
};

let homePage = document.getElementById("home-page");
const root = createRoot(homePage);
root.render(<HomeP />)
