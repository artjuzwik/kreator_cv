import React from 'react';
import '../../assets/common.scss';

export default function UniversityName(){
    return(
        <div className="row universityName">
            <label className="simpleInput-label form-group col-lg-12">
                <span className="title">Nazwa szkoły</span>
                <input
                    className="simpleInput form-control"
                    type="email"
                    placeholder="Wpisz nazwę szkoły" />
            </label>
        </div>
    )
}