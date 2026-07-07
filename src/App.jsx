import React from 'react';
import { BrowserRouter,Routes,Route} from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Lodging from "./pages/Lodging";
import ErrorPage from "./pages/ErrorPage";
import "./styles/main.scss";

const App = () => {
    return (
       <BrowserRouter>
           <Routes>
               <Route path="/" element={<Home/>}/>
               <Route path="/a-propos" element={<About/>}/>
               <Route path="/logements/:id" element={<Lodging/>}/>
               <Route path="*" element={<ErrorPage/>}/>
           </Routes>
       </BrowserRouter>
    );
};

export default App;



