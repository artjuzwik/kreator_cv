import React from 'react';
import '../../assets/common.scss';

export default function Field(){
    return(
        <div className="row field">
            <label className="simpleInput-label form-group col-lg-12">
                <span className="title">Kierunek</span>
                <input
                    className="simpleInput form-control"
                    type="email"
                    placeholder="Wpisz kierunek nauki" />
            </label>
        </div>
    )
}