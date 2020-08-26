import React, { useState, useEffect  } from 'react';
import {ReactComponent as Add} from './Assets/icons/add.svg';
import {ReactComponent as Close} from './Assets/icons/close.svg';
import GiraffeCard from './GiraffeCard';
import GiraffeCardActive from './GiraffeCardActive';
import scrollBar from './ScrollBar';

let isInit = false
const MAX_CARDS_AMOUNT = 8

export default function Tab(atts) {
    // logic for progress bar %
    let cards = document.querySelectorAll('.card')
    let cardsAmount = cards.length
    const [percentValue, setPercentValue] = useState(  )
    // logic for progress bar width
    const [progressWidth, setProgressWidth] = useState(  )

    function updatePercent() {
        let cards = document.querySelectorAll('#'+atts.id+' .card')
        let cardsAmount = cards.length
        setPercentValue( ((cardsAmount / MAX_CARDS_AMOUNT)*100) + '%' )
        //  if (progressWidth === '100%') setProgressWidth (percentValue - 3)
        if (percentValue === '100%') setProgressWidth(((cardsAmount / MAX_CARDS_AMOUNT)*100 - 3) + '%')
        else setProgressWidth(percentValue)
    }

    useEffect (() => {  
        updatePercent()
     })

    // logic for adding new cards
    const [newCards, setNewCards] = useState(0);
    function addNewCard () {
        if (cardsAmount === 8) return;
        setNewCards(newCards + 1)
    }

    useEffect(()=>{
        scrollBar.init()
        scrollBar.updateScroll()
    })

    let className = "tab" + ( (atts.id==='tab1') ? " active" : "" )

    return ( 
    <div className={className} id={atts.id}>
        <div className="giraffe-window_header">
            <h1>Жирафы</h1>
            <button onClick={addNewCard}><Add className="giraffe-window_header__add-new"/></button>
        </div>
        <div className="giraffe-scroll-content">
            {Array(newCards).fill(<GiraffeCardActive onDelete={updatePercent}/>)}
            {atts.cards.map((card, key) =>{
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
                <p className="info-section_percent">{percentValue}</p>
                <p>Заполнение вольера</p>
            </div>
            <div className="info-section_progress-bar">
                <div className="progress-container">
                    <div style={{width: progressWidth}} className="progressBar"></div>
                </div>
                <button>Информация</button>
            </div>
        </div>
    </div>
    ) 
}