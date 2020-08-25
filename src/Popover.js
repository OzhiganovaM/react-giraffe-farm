import React from 'react';
import {ReactComponent as Edit} from './Assets/icons/edit.svg';
import {ReactComponent as Delete} from './Assets/icons/delete.svg';
import {ReactComponent as Options} from './Assets/icons/options.svg';
import scrollBar from './ScrollBar';

class Popover extends React.Component {
    editCard(e) {
    e.currentTarget.parentElement.parentElement.parentElement.parentElement.parentElement.classList.add("edit")
    // let cardEdit =  e.currentTarget.querySelector('.card.edit')
    // e.currentTarget.querySelector('.card.edit')

    // document.addEventListener('click', function (event) {
    //     if (!event.target.matches('.card.edit')) document.querySelector('.card.edit').classList.remove('edit')
    //     }, true);
    }

    deleteCard(e) {
        console.log(e.currentTarget.parentElement.parentElement.parentElement.parentElement.parentElement.remove())
        scrollBar.updateScroll()
    }
    
    showPopover(e) {
        let modal = e.currentTarget.querySelector('.card-options_modal')
    
        if (modal.classList.contains('active')) modal.classList.remove('active')
        else modal.classList.add('active')
        
        document.addEventListener('click', function (event) {
            if (!event.target.matches('.card-options_modal.active')) modal.classList.remove('active')
            }, true);
    }

    render() {
        const onDelete = this.props.onDelete
        const deleteCard = this.deleteCard

        const completeDelition = e => {
            deleteCard(e)
            onDelete()
        };
        
        return (
        <div onClick={this.showPopover} className="card-options_popover">
            <Options className="card-options_trigger" />
            <ul className="card-options_modal">
                <li>
                    <button onClick={this.editCard} className="card-options_modal__button">
                        <Edit />
                        <p>Редактировать</p>
                    </button>
                </li>
                <li>
                    <button onClick={completeDelition} className="card-options_modal__button">
                        <Delete />
                        <p>Удалить</p>
                    </button>
                </li>
            </ul>
        </div>
        )
    }
}

export default Popover
