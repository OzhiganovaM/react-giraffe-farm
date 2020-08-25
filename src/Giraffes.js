import React, { useState, useEffect  } from 'react';
import {ReactComponent as Close} from './Assets/icons/close.svg';
import GiraffeCard from './GiraffeCard';
import GiraffeCardActive from './GiraffeCardActive';
import data from './Data.json'
import {ReactComponent as Add} from './Assets/icons/add.svg';
import GiraffesMenu from './GiraffesMenu';
import scrollBar from './ScrollBar';
import Popover from './Popover';

let isInit = false
const MAX_CARDS_AMOUNT = 8

export default function Giraffes () {    
    // logic for progress bar %
    let cards = document.querySelectorAll('.card')
    let cardsAmount = cards.length
    const [percentValue1, setPercentValue1] = useState(  )
    const [percentValue2, setPercentValue2] = useState(  )
    const [percentValue3, setPercentValue3] = useState(  )
    // logic for progress bar width
    const [progressWidth1, setProgressWidth1] = useState(  )
    const [progressWidth2, setProgressWidth2] = useState(  )
    const [progressWidth3, setProgressWidth3] = useState(  )

    function updatePercent() {
        let cards1 = document.querySelectorAll('#tab1 .card')
        let cardsAmount1 = cards1.length
        let cards2 = document.querySelectorAll('#tab2 .card')
        let cardsAmount2 = cards2.length
        let cards3 = document.querySelectorAll('#tab3 .card')
        let cardsAmount3 = cards3.length
        setPercentValue1( ((cardsAmount1 / MAX_CARDS_AMOUNT)*100) + '%' )
        setPercentValue2( ((cardsAmount2 / MAX_CARDS_AMOUNT)*100) + '%' )
        setPercentValue3( ((cardsAmount3 / MAX_CARDS_AMOUNT)*100) + '%' )
        //  if (progressWidth === '100%') setProgressWidth (percentValue - 3)
        if (percentValue1 === '100%') setProgressWidth1(((cardsAmount1 / MAX_CARDS_AMOUNT)*100 - 3) + '%')
        else setProgressWidth1(percentValue1)
        if (percentValue2 === '100%') setProgressWidth2(((cardsAmount2 / MAX_CARDS_AMOUNT)*100 - 3) + '%')
        else setProgressWidth2(percentValue2)
        if (percentValue3 === '100%') setProgressWidth3(((cardsAmount3 / MAX_CARDS_AMOUNT)*100 - 3) + '%')
        else setProgressWidth3(percentValue3)
    }
    useEffect (() => {  
        updatePercent()
     })

  // logic for adding new cards
    const [newCards1, setNewCards1] = useState(0);
    function addNewCard1 () {
        if (cardsAmount === 8) return;
        setNewCards1(newCards1 + 1)
    }
    
    const [newCards2, setNewCards2] = useState(0);
    function addNewCard2 () {
        if (cardsAmount === 8) return;
        setNewCards2(newCards2 + 1)
    }

    const [newCards3, setNewCards3] = useState(0);
    function addNewCard3 () {
        if (cardsAmount === 8) return;
        setNewCards3(newCards3 + 1)
    }
    
    // Scroll logic
    useEffect(()=>{
        scrollBar.init()
        scrollBar.updateScroll()
    })

    return(
    <div className="giraffes_container">
        <GiraffesMenu />
        <div className="giraffes_wrapper">
            <div className="tab active" id="tab1">
                <div className="giraffe-window_header">
                    <h1>Жирафы</h1>
                    <button onClick={addNewCard1}><Add className="giraffe-window_header__add-new"/></button>
                </div>
                <div className="giraffe-scroll-content">
                    {Array(newCards1).fill(<GiraffeCardActive onDelete={updatePercent}/>)}
                    {data.cards.map((card, key) =>{
                        return <GiraffeCard card={card} key={key} onDelete={updatePercent} />
                    }
                    )}
                </div>
                <div id="scrollbar">
                    <span id="slider" />
                </div>
                <div className="info-section">
                    <Close className="close-icon"/>
                    <div className="info-section_progress-percent">
                        <p className="info-section_percent"  >{percentValue1}</p>
                        <p>Заполнение вольера</p>
                    </div>
                    <div className="info-section_progress-bar">
                        <div className="progress-container">
                            <div style={{width: progressWidth1}} className="progressBar"></div>
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
                <div className="giraffe-scroll-content">
                {Array(newCards2).fill(<GiraffeCardActive onDelete={updatePercent}/>)}
                </div>
                <div id="scrollbar">
                    <span id="slider" />
                </div>
                <div className="info-section">
                    <Close className="close-icon"/>
                    <div className="info-section_progress-percent">
                        <p className="info-section_percent"  >{percentValue2}</p>
                        <p>Заполнение вольера</p>
                    </div>
                    <div className="info-section_progress-bar">
                        <div className="progress-container">
                            <div style={{width: progressWidth2}} className="progressBar"></div>
                        </div>
                        <button>Информация</button>
                    </div>
                </div>
            </div>
            <div className="tab" id="tab3">
                <div className="giraffe-window_header">
                    <h1>Жирафы</h1>
                    <button onClick={addNewCard3}><Add className="giraffe-window_header__add-new"/></button>
                </div>
                <div className="giraffe-scroll-content">
                {Array(newCards3).fill(<GiraffeCardActive onDelete={updatePercent}/>)}
                </div>
                <div id="scrollbar">
                    <span id="slider" />
                </div>
                <div className="info-section">
                    <Close className="close-icon"/>
                    <div className="info-section_progress-percent">
                        <p className="info-section_percent"  >{percentValue3}</p>
                        <p>Заполнение вольера</p>
                    </div>
                    <div className="info-section_progress-bar">
                        <div className="progress-container">
                            <div style={{width: progressWidth3}} className="progressBar"></div>
                        </div>
                        <button>Информация</button>
                    </div>
                </div>
            </div>
        </div>
    </div> 
    );
}