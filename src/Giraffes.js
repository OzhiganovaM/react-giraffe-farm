import React, { useState, useEffect  } from 'react';
import GiraffesMenu from './GiraffesMenu';
import Tab from './Tab';
import data from './Data.json'

export default function Giraffes () {    

    return(
    <div className="giraffes_container">
        <GiraffesMenu />
        <div className="giraffes_wrapper">
            {
                data.cages.map( (cage, key) => {
                    return <Tab 
                    id={"tab"+(key+1)} 
                    cards={cage.cards} 
                    key={key}/>
                } )
            }
            
        </div>
    </div> 
    );
}