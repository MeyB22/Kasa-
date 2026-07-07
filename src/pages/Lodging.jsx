import React, { useEffect, useState } from 'react';
import Header from "../layout/Header";
import Footer from "../layout/Footer";
import {useParams} from "react-router-dom";
import lodgingsList from  "../database/database.json"
import Collapse from "../components/Collapse";
import Slider from "../components/Slider";
import Tags from "../components/Tags";
import Rating from "../components/Rating";
import ErrorPage from './ErrorPage';

const Lodging = () => {
    const {id} = useParams()
    const [lodging, setlodging] = useState(null)
    useEffect(() => {
        const findlodging = lodgingsList.find((lodgingsList)=>lodgingsList.id === id)
      setlodging(findlodging)
      }, [lodging,id])
    if(
        !lodging
    ){
        return <ErrorPage/>
    }

    return (
        <>
        <div className='container'>
            <Header/>
            <section className="lodging">
                <Slider pictures={lodging.pictures}/>

                <div className="lodging-header">
                    <div className="lodging-info">
                        <h1>{lodging.title}</h1>
                        <p>{lodging.location}</p>
                        <Tags tags={lodging.tags}/>
                    </div>
                    <div className="lodging-host">
                        <div className="host-card">
                            <p>{lodging.host.name}</p>
                            <img src={lodging.host.picture} alt="Photos de profile du propriétaire"/>
                        </div>
                        <Rating rating={lodging.rating}/>
                    </div>
                </div>

                <div className="lodging-collapses">
                    <Collapse
                        size="small"
                        collapseTitle="Description"
                        collapseTexte={lodging.description}
                    />
                    <Collapse
                        size="small"
                        collapseTitle="Équipements"
                        collapseTexte={lodging.equipments.map((equipement) => (<div key={equipement}> {equipement} </div>))}
                    />
                </div>
            </section>
        </div>
            <Footer/>
        </>
    );
};

export default Lodging;
