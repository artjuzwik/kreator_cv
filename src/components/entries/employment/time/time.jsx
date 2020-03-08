import React from 'react';
import '../../assets/common.scss';

export default function Time(){
    return(
        <div className="row name">
            <label className="simpleInput-label form-group col-lg-6">
                <span className="title">Czas</span>
                <input
                    className="simpleInput form-control"
                    type="date"
                    placeholder="" />
            </label>
        </div>
    )
}