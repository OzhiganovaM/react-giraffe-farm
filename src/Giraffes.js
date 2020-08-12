import React, { useState, useEffect  } from 'react';
import {ReactComponent as Close} from './Assets/icons/close.svg';
import GiraffeCard from './GiraffeCard';
import GiraffeCardActive from './GiraffeCardActive';
import data from './Data.json'
import {ReactComponent as Add} from './Assets/icons/add.svg';
import GiraffesMenu from './GiraffesMenu';

let isInit = false

export default function Giraffes () {    
    let percentValue = '50%'

  // logic for adding new cards
    const [newCards1, setNewCards1] = useState(0);
    function addNewCard1 () {
        setNewCards1(newCards1 + 1)
        percentValue = percentValue + 12.5 + '%'
    }
    
    const [newCards2, setNewCards2] = useState(0);
    function addNewCard2 () {
        setNewCards2(newCards2 + 1)
    }

    const [newCards3, setNewCards3] = useState(0);
    function addNewCard3 () {
        setNewCards3(newCards3 + 1)

    }

    // logic for % in progress bar
    //  useEffect (() => {
        //  let cards = document.querySelectorAll('.card')
        // let cardsAmount = Array.from(cards)
        // console.log(cardsAmount.length)
    // })
    
    // Scroll logic

    function updateScroll() {
        let maxScrollTranslate = document.querySelector('.giraffe-scroll-content').scrollWidth - document.querySelector('.giraffe-scroll-content').offsetWidth

        document.querySelector('#slider').style.width = maxScrollTranslate < (document.querySelector('#scrollbar').offsetWidth - 20) ? document.querySelector('#scrollbar').offsetWidth - maxScrollTranslate + 'px' : '20px'
        document.querySelector('#scrollbar').style.visibility = maxScrollTranslate <= 1 ? 'hidden' : 'visible'
    }

    useEffect(()=>{
        updateScroll()

    //  next 2 lines - not to make action repeat
      if ( isInit ) return
      isInit = true
      let isDrag = false
      let previousX = 0
      let slider = document.querySelector('#slider')
      
      let content = document.querySelector('.giraffe-scroll-content')

      slider.addEventListener('mousedown', e=>{
        isDrag = true
        previousX = e.x
      })

      document.addEventListener('mouseup', e=>{
        isDrag = false
      })

      document.addEventListener('mousemove', e=>{
        if (isDrag) {
          // disable another mouse activity
          e.preventDefault()
          e.stopPropagation()

          let maxWidth = document.querySelector('#scrollbar').offsetWidth - slider.offsetWidth - 4

          if ( e.x > previousX ) {
            // move slider right
            let delta = (e.x - previousX)
            let currentLeftValue = slider.style.left ? parseInt(slider.style.left) : 0
            let newLeftValue = currentLeftValue + delta
            if (newLeftValue > maxWidth) newLeftValue = maxWidth

            slider.style.left = newLeftValue  + 'px'
            previousX = e.x
          } else if ( e.x < previousX ) {   
            // move slider left 
            let delta = (previousX - e.x)
            let currentLeftValue = slider.style.left ? parseInt(slider.style.left) : 0
            let newLeftValue = currentLeftValue - delta
            if ( newLeftValue < 0 ) newLeftValue = 0

            slider.style.left = newLeftValue + 'px'
            previousX = e.x
          }
          // move content
          let maxScrollTranslate = document.querySelector('.giraffe-scroll-content').scrollWidth - document.querySelector('.giraffe-scroll-content').offsetWidth
          let leftValue = parseInt(slider.style.left)/maxWidth
          content.style.transform = 'translateX(' + (-maxScrollTranslate*leftValue) + 'px)'
          // change slider width
          updateScroll()
        }
      })
    })

    return(
    <div className="giraffes_container">
        <GiraffesMenu />
        <div className="giraffes_wrapper">
          <div id="anchor"/>
            <div className="tab active" id="tab1">
                <div className="giraffe-window_header">
                    <h1>Жирафы</h1>
                    <button onClick={addNewCard1}><Add className="giraffe-window_header__add-new"/></button>
                </div>
                <div className="giraffe-scroll-content">
                    {Array(newCards1).fill(<GiraffeCardActive />)}
                    {data.cards.map((card, key) =>{
                        return <GiraffeCard card={card} key={key} />
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