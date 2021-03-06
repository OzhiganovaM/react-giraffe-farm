import React from 'react';
import {ReactComponent as Photo} from './Assets/icons/photo.svg';
import {ReactComponent as Sex} from './Assets/icons/sex.svg';
import {ReactComponent as Weight} from './Assets/icons/weight.svg';
import {ReactComponent as Height} from './Assets/icons/height.svg';
import PopoverActive from './PopoverActive';

export default function GiraffeCardActive ( attr ){
    const data = attr.card;
    return (
        <div className="card edit new">
            <div className="card_wrapper">
                <PopoverActive onDelete={attr.onDelete}/>
                <div className="giraffe-photo_edit">
                    <label for="giraffe-photo new"><Photo /></label>
                    <input id="giraffe-photo new" type="file" accept="image/*"></input>
                </div>
                <p className="giraffe-name">Имя</p>
                <div className="giraffe-parameters">
                    <Sex />
                    <Weight />
                    <Height />
                </div>
                <form>
                    <div className="giraffe-parameters_edit active">
                    <select className="sex">
                        <option value="" hidden disabled selected>-</option>
                        <option>М</option>
                        <option>Ж</option>
                    </select>
                    <input className="weight" type="text" defaultValue="" placeholder="-"></input>
                    <input className="height" type="text" defaultValue="" placeholder="-"></input>
                    </div>
                    <div className="giraffe-description_edit">
                        <div className="enter-giraffe-description"><p>Цвет:</p><input className="color" type="text" placeholder=""></input></div>
                        <div className="enter-giraffe-description"><p>Диета:</p><input className="diet" type="text" placeholder=""></input></div>
                        <div className="enter-giraffe-description"><p>Характер:</p><input className="character" type="text" placeholder=""></input></div> 
                    </div>
                </form>
                <button className="save new" type="submit">Сохранить</button>
            </div>
        </div>
      )
}