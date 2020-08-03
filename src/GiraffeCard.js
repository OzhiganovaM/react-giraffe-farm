import React from 'react';
import {ReactComponent as Sex} from './Assets/icons/sex.svg';
import {ReactComponent as Weight} from './Assets/icons/weight.svg';
import {ReactComponent as Height} from './Assets/icons/height.svg';
import Popover from './Popover';

export default function GiraffeCard ( giraffeData ) {
    const data = giraffeData.card;

    return (
        <div>
            <div id="1" className="card ">
                <div className="card_wrapper">
                    <Popover />
                    <div className="giraffe-photo_edit"><img src={require(`${data.photo}`)} alt={data.name}/>
                    </div>
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