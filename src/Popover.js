import React from 'react';
import {ReactComponent as Edit} from './Assets/icons/edit.svg';
import {ReactComponent as Delete} from './Assets/icons/delete.svg';
import {ReactComponent as Options} from './Assets/icons/options.svg';
import scrollBar from './ScrollBar';

export default function Popover () {

function editCard (e) {
    e.currentTarget.parentElement.parentElement.parentElement.parentElement.parentElement.classList.add("edit")
    // let cardEdit =  e.currentTarget.querySelector('.card.edit')
    // e.currentTarget.querySelector('.card.edit')

    // document.addEventListener('click', function (event) {
    //     if (!event.target.matches('.card.edit')) document.querySelector('.card.edit').classList.remove('edit')
    //     }, true);
    }


    const deleteCard = function (e) {
        console.log(e.currentTarget.parentElement.parentElement.parentElement.parentElement.parentElement.remove())
        //scrollBar.init()
        scrollBar.updateScroll()
        //let slider = document.querySelector('#slider')
        //let maxScrollTranslate = document.querySelector('.giraffe-scroll-content').scrollWidth - document.querySelector('.giraffe-scroll-content').offsetWidth

        //document.querySelector('#slider').style.width = maxScrollTranslate < (document.querySelector('#scrollbar').offsetWidth - 20) ? document.querySelector('#scrollbar').offsetWidth - maxScrollTranslate + 'px' : '20px'
        //document.querySelector('#scrollbar').style.visibility = maxScrollTranslate <= 1 ? 'hidden' : 'visible'
    }

function showPopover(e) {
    let modal = e.currentTarget.querySelector('.card-options_modal')

    if (modal.classList.contains('active')) modal.classList.remove('active')
    else modal.classList.add('active')
    
    document.addEventListener('click', function (event) {
        if (!event.target.matches('.card-options_modal.active')) modal.classList.remove('active')
        }, true);
    }


return (
<div onClick={showPopover} className="card-options_popover">
    <Options className="card-options_trigger" />
    <ul className="card-options_modal">
        <li>
            <button onClick={editCard} className="card-options_modal__button">
                <Edit />
                <p>Редактировать</p>
            </button>
        </li>
        <li>
            <button onClick={deleteCard} className="card-options_modal__button">
                <Delete />
                <p>Удалить</p>
            </button>
        </li>
    </ul>
</div>
)
}
