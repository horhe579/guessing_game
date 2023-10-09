import React from 'react';
import '../index.css'
//import axios from 'axios';

function DogInfo({ breed, origin, imageLink }) {

    return(
        <div className='p-3 flex items-center cursor-pointer'>
            <div className="border-2 border-[#865f5f]/50 rounded-full overflow-hidden h-14 w-16">
                <img src={imageLink} alt={breed} className=" rounded-full object-cover w-full h-full hover:scale-125 transition duration-500" />
            </div>

            <div className='font-souls w-11/12 text-2xl font-semibold'>
                {breed}
            </div>
        </div>
    )
}


export default DogInfo