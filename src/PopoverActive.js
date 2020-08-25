import React from 'react';
import {ReactComponent as Delete} from './Assets/icons/delete.svg';
import {ReactComponent as Options} from './Assets/icons/options.svg';
import scrollBar from './ScrollBar';

class PopoverActive extends React.Component {
    deleteCard(e) {
        console.log(e.currentTarget.parentElement.parentElement.parentElement.parentElement.parentElement.remove())
        scrollBar.updateScroll()
    }
    
    showPopover(e) {
        let modal = e.currentTarget.querySelector('.card-options_modal-edit')
    
        if (modal.classList.contains('active')) modal.classList.remove('active')
        else modal.classList.add('active')

        document.addEventListener('click', function (event) {
            if (!event.target.matches('.card-options_modal-edit.active')) modal.classList.remove('active')
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
        <ul className="card-options_modal-edit">
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

export default PopoverActive