import React from 'react';
import {NavLink} from "react-router-dom";

const Card = ({lodging}) => {
    return (

        <NavLink className="card" to={`/logements/${lodging.id}`}>
          <h1>{lodging.title}</h1>
            <img src={lodging.cover} alt="image du logement"/>
        </NavLink>
    );
};

export default Card;
