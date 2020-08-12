import React from 'react';
import {ReactComponent as Add} from './Assets/icons/add.svg';
import {ReactComponent as Notification} from './Assets/icons/notification.svg';
import {ReactComponent as Logo2} from './Assets/logo2.svg';


export default function GiraffesMenu () {
    function showTab(e){
        console.log(e.currentTarget.dataset.tab)
        document.querySelector(".tab.active").classList.remove("active")
        document.querySelector("#"+e.currentTarget.dataset.tab).classList.add("active")
        document.querySelector(".giraffes_tab.active").classList.remove("active")
        e.currentTarget.parentElement.classList.add("active")
    }

    return (
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
    )
}