import React from 'react';
import '../index.css'
//import axios from 'axios';

function DogInfo({ breed, origin, imageLink }) {

    return(
        <div>
            <i>{breed}</i>
            <i> {origin}</i>
            <img src={imageLink} />
        </div>
    )
}


export default DogInfo