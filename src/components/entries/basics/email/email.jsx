import React from 'react';
import '../../assets/common.scss';

export default function Email(){
    return(
        <div className="row email">
            <label className="simpleInput-label form-group col-lg-12">
                <span className="title">E-mail</span>
                <input
                    className="simpleInput form-control"
                    type="email"
                    placeholder="Twój adres e-mail" />
            </label>
        </div>
    )
}