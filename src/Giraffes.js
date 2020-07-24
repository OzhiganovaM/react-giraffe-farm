import React from 'react';
import {ReactComponent as Add} from './Assets/icons/add.svg';
import {ReactComponent as Notification} from './Assets/icons/notification.svg';
import {ReactComponent as Logo2} from './Assets/logo2.svg';
import {ReactComponent as Close} from './Assets/icons/close.svg';
import GiraffeCard from './GiraffeCard';
import GiraffeCardActive from './GiraffeCardActive';
import data from './Data.json'

export default function Giraffes () {
    function showTab(e){
        console.log(e.currentTarget.dataset.tab)
        document.querySelector(".tab.active").classList.remove("active")
        document.querySelector("#"+e.currentTarget.dataset.tab).classList.add("active")
        document.querySelector(".giraffes_tab.active").classList.remove("active")
        e.currentTarget.parentElement.classList.add("active")
    }
    return(
    <div className="giraffes_container">
        <div className="giraffes_wrapper">
            <div className="giraffes_header">
                <div className="giraffes_header__notifications">
                    <Notification className="giraffes_header__notifications-icon"/>
                    <Logo2 />
                    <p>hello@giraffe.com</p>
                </div>
                <div className="giraffes_header__tabs">
                    <div className="giraffes_tab active"><button data-tab="tab1" onClick={showTab}>Вольер 1</button><hr/></div>
                    <div className="giraffes_tab"><button data-tab="tab2" onClick={showTab}>Вольер 2</button><hr/></div>
                    <div className="giraffes_tab"><button data-tab="tab3" onClick={showTab}>Вольер 3</button><hr/></div>
                    <Add />
                </div>
                <hr />
            </div>
            <div className="tab active" id="tab1">
                <div className="giraffe-window_header">
                    <h1>Жирафы</h1>
                    <Add className="giraffe-window_header__add-new"/>
                </div>
                <div className="giraffe-window__wrapper">
                    <GiraffeCardActive />
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
            <div className="tab" id="tab2">Содержимое 2...</div>
            <div className="tab" id="tab3">Содержимое 3...</div>
        </div>
    </div> 
    );
}
