import React from 'react';
import Header from "../layout/Header";
import Footer from "../layout/Footer";
import {NavLink} from "react-router-dom";

const ErrorPage = () => {
    return (
        <>
        <div className='container'>
            <Header/>
            <section className="error-page">
                <h1 className="error-code">404</h1>
                <p className="error-message">Oups! La page que vous demandez n'existe pas.</p>
                <NavLink className="error-link" to={'/'}>Retourner sur la page d’accueil</NavLink>
            </section>
        </div>
        <Footer/>
        </>
    );
};

export default ErrorPage;
