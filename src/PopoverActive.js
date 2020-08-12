import React from 'react';
import {ReactComponent as Delete} from './Assets/icons/delete.svg';
import {ReactComponent as Options} from './Assets/icons/options.svg';
import scrollBar from './ScrollBar';

export default function PopoverActive () {
    const deleteCard = function (e) {
        e.currentTarget.parentElement.parentElement.parentElement.parentElement.parentElement.remove()
        
        scrollBar.updateScroll()
    }
    
    function showPopover(e) {
        let modal = e.currentTarget.querySelector('.card-options_modal-edit')
    
        if (modal.classList.contains('active')) modal.classList.remove('active')
        else modal.classList.add('active')

        document.addEventListener('click', function (event) {
            if (!event.target.matches('.card-options_modal-edit.active')) modal.classList.remove('active')
            }, true);
    }

    return (
    <div onClick={showPopover} className="card-options_popover">
        <Options className="card-options_trigger" />
        <ul className="card-options_modal-edit">
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