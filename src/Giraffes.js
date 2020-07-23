import React from 'react';
import {ReactComponent as Add} from './Assets/icons/add.svg';
import {ReactComponent as Notification} from './Assets/icons/notification.svg';
import {ReactComponent as Logo2} from './Assets/logo2.svg';
import {ReactComponent as Close} from './Assets/icons/close.svg';
import GiraffeCard from './GiraffeCard';
import GiraffeCardActive from './GiraffeCardActive';
import data from './Data.json'

export default function Giraffes () {
    return(
    <div className="giraffes_container">
        <div className="giraffes_wrapper">
            <div className="giraffes_tabs">
                <div className="giraffes_tabs__pane">
                    <div className="giraffes_tab active"><p>Вольер 1</p><hr/></div>
                    <div className="giraffes_tab"><p>Вольер 2</p><hr/></div>
                    <div className="giraffes_tab"><p>Вольер 3</p><hr/></div>
                    <Add />
                </div>
                <div className="giraffes_tabs__notifications">
                    <Notification className="giraffes_tabs__notifications-icon"/>
                    <Logo2 />
                    <p>hello@giraffe.com</p>
                </div>
                <hr />
            </div>
            <div className="giraffe-window_header">
                <h1>Жирафы</h1> 
                <Add className="giraffe_header__add-new"/>
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
                    <div class="w3-light-grey w3-round-xlarge">
                        <div class="w3-container w3-blue w3-round-xlarge"></div>
                    </div>
                    <button>Информация</button>
                </div>
            </div>
        </div> 
    </div>
    );
}
