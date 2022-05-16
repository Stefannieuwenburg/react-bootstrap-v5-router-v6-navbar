import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";

import "./App.css";

import About from "./components/about";
import Contact from "./components/contact";
import Home from "./components/home";
import NavBar from "./components/Navbar";

function App() {
    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<NavBar />}>
                        <Route index element={<Home />} />
                        <Route path="about" element={<About />} />
                        <Route path="contact" element={<Contact />} />
                        <Route path="*" element={<Navigate replace to="/" />} />
                    </Route>
                </Routes>
            </BrowserRouter>
        </>
    );
}

export default App;
