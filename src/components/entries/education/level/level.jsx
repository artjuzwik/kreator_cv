import React from 'react';
import '../../assets/common.scss';

export default function Level(){
    return(
        <div className="row Level">
            <label className="simpleInput-label form-group col-lg-12">
                <span className="title">Poziom</span>
                <input
                    className="simpleInput form-control"
                    type="email"
                    placeholder="Wpisz poziom" />
            </label>
        </div>
    )
}