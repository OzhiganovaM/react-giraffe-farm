import React, { useState } from 'react';
import {ReactComponent as Close} from './Assets/icons/close.svg';
import GiraffeCard from './GiraffeCard';
import GiraffeCardActive from './GiraffeCardActive';
import data from './Data.json'
import {ReactComponent as Add} from './Assets/icons/add.svg';
import GiraffesMenu from './GiraffesMenu';

export default function Giraffes () {

    const [newCards1, setNewCards1] = useState(0);
    function addNewCard1 () {
        setNewCards1(newCards1 + 1)
    }
    
    const [newCards2, setNewCards2] = useState(0);
    function addNewCard2 () {
        setNewCards2(newCards2 + 1)
    }

    const [newCards3, setNewCards3] = useState(0);
    function addNewCard3 () {
        setNewCards3(newCards3 + 1)
    }

    return(
    <div className="giraffes_container">
        <GiraffesMenu />
        <div className="giraffes_wrapper">
            <div className="tab active" id="tab1">
                <div className="giraffe-window_header">
                    <h1>Жирафы</h1>
                    <button onClick={addNewCard1}><Add className="giraffe-window_header__add-new"/></button>
                </div>
                <div className="giraffe-window__wrapper">
                    {Array(newCards1).fill(<GiraffeCardActive />)}
                    {data.cards.map((card, key) =>{
                        return <GiraffeCard card={card} key={key} />
                    }
                    )}
                </div>
                <div className="info-section">
                    <Close className="close-icon"/>
                    <div className="info-section_progress-percent">
                        <p className="info-section_percent">75%</p>
                        <p>Заполнение вольера</p>
                    </div>
                    <div className="info-section_progress-bar">
                        <div className="w3-light-grey w3-round-xlarge">
                            <div className="w3-container w3-blue w3-round-xlarge"></div>
                        </div>
                        <button>Информация</button>
                    </div>
                </div>
            </div>
            <div className="tab" id="tab2">
                <div className="giraffe-window_header">
                    <h1>Жирафы</h1>
                    <button onClick={addNewCard2}><Add className="giraffe-window_header__add-new"/></button>
                </div>
                <div className="giraffe-window__wrapper">
                {Array(newCards2).fill(<GiraffeCardActive />)}
                </div>
            </div>
            <div className="tab" id="tab3">
                <div className="giraffe-window_header">
                    <h1>Жирафы</h1>
                    <button onClick={addNewCard3}><Add className="giraffe-window_header__add-new"/></button>
                </div>
                <div className="giraffe-window__wrapper">
                {Array(newCards3).fill(<GiraffeCardActive />)}
                </div>
            </div>
        </div>
    </div> 
    );
}