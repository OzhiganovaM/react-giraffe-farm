import React from 'react';
 import {ReactComponent as Logo} from './Assets/logo.svg';
 import {ReactComponent as Home} from './Assets/icons/home.svg';
 import {ReactComponent as Tasks} from './Assets/icons/tasks.svg';
 import {ReactComponent as Giraffes} from './Assets/icons/giraffes.svg';
 import {ReactComponent as Staff} from './Assets/icons/staff.svg';
 import {ReactComponent as Settings} from './Assets/icons/settings.svg';
 import {ReactComponent as Support} from './Assets/icons/support.svg';


export default function Sidebar() {
    return (
      <aside className="sidebar_container">
        <div className="profile">
            <Logo />
            <p><b>Ферма Заслуженных Жирафов </b><br/>
            России и СНГ
            </p>  
        </div>
        <div className="sidebar_wrapper">
          <div className="sidebar_item">
          <p>Главная</p>
          <Home className="sidebar_item__icon"/>
          </div>
          <div className="sidebar_item">
          <p>Управление</p>
          <Tasks className="sidebar_item__icon"/>
          </div>
          <div className="sidebar_item active">
          <p>Жирафы</p>
          <Giraffes className="sidebar_item__icon"/>
          </div>
          <div className="sidebar_item">
          <p>Сотрудники</p>
          <Staff className="sidebar_item__icon"/>
          </div>
          <div className="sidebar_item">
          <p>Настройки</p>
          <Settings className="sidebar_item__icon"/>
          </div>
          <div className="sidebar_item">
          <p>Поддержка</p>
          <Support className="sidebar_item__icon"/>
          </div>
        </div>
      </aside>
    );
  }

