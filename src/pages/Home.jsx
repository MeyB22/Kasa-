import React, {useEffect, useState} from 'react';
import Header from "../layout/Header";
import Footer from "../layout/Footer";
import Banner from "../components/Banner";
import homebanner from  "../asset/images/homebanner.png"
import lodgingsList from  "../database/database.json"
import Card from "../components/Card";
import ErrorPage from "./ErrorPage";

const Home = () => {
    const [lodgings,setLodgings] = useState([])

    useEffect(() =>{
        setLodgings(lodgingsList)
    },[])

    if (lodgings.length === 0) {
        return <ErrorPage/>
    }

    return (
        <>
        <div className='container'>
          <Header/>
            <Banner bannerImage={homebanner} bannerTitle={'Chez vous,\npartout et ailleurs'} className="banner--wide"/>
            <div className="cards">
                {lodgings.map((lodging)=>(
                    <Card key={lodging.id} lodging={lodging} />
                ))}
            </div>
        </div>
            <Footer/>
        </>
    );
};

export default Home;