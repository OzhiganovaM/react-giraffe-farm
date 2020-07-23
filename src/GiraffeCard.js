import React from 'react';
import {ReactComponent as Sex} from './Assets/icons/sex.svg';
import {ReactComponent as Weight} from './Assets/icons/weight.svg';
import {ReactComponent as Height} from './Assets/icons/height.svg';
import {ReactComponent as Options} from './Assets/icons/options.svg';
import {ReactComponent as Edit} from './Assets/icons/edit.svg';
import {ReactComponent as Delete} from './Assets/icons/delete.svg';

export default function GiraffeCard ( giraffeData ) {
    const data = giraffeData.card;
    return (
        <div>
            <div id="1" className="card">
                <div className="card_wrapper">
                    <div className="card-options_popover">
                        <Options className="card-options_trigger" />
                        <ul className="card-options_modal">
                            <li>
                                <button className="card-options_modal__edit active">
                                    <Edit />
                                    <p>Редактировать</p>
                                </button>
                            </li>
                            <li>
                                <button className="card-options_modal__edit">
                                    <Delete />
                                    <p>Удалить</p>
                                </button>
                            </li>
                        </ul>
                    </div>
                    <div className="giraffe-photo_edit"></div>
                    <p className="giraffe-name">{data.name}</p>
                    <div className="giraffe-parameters">
                        <Sex />
                        <Weight />
                        <Height />
                    </div>
                    <div className="giraffe-parameters_edit">
                        <p className="sex">{data.sex}</p>
                        <p className="weight">{data.weight}</p>
                        <p className="height">{data.height}</p>
                    </div>
                    <div className="giraffe-description_edit">
                        <p>Цвет: <span className="color">{data.color}</span></p>
                        <p>Диета: <span className="diet">{data.diet}</span></p>
                        <p>Характер: <span className="character">{data.character}</span></p>
                    </div>
                </div>
            </div>
        </div>
    )
}