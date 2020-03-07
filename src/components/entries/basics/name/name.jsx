import React from 'react';
import '../../assets/common.scss';

export default function Name(){
    return(
        <div className="row name">
            <label className="simpleInput-label form-group col-lg-12">
                <span className="title">Imię</span>
                <input
                    className="simpleInput form-control"
                    type="text"
                    placeholder="Jan" />
            </label>
            <label className="simpleInput-label form-group col-lg-12">
                <span className="title">Nazwisko</span>
                <input
                    className="simpleInput form-control"
                    type="text"
                    placeholder="Kowalski" />
            </label>
        </div>
    )
}