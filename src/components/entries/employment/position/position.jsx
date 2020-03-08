import React from 'react';
import '../../assets/common.scss';

export default function Position(){
    return(
        <div className="row position">
            <label className="simpleInput-label form-group col-lg-12">
                <span className="title">Pozycja</span>
                <input
                    className="simpleInput form-control"
                    type="text"
                    placeholder="Wpisz pozycję" />
            </label>
        </div>
    )
}