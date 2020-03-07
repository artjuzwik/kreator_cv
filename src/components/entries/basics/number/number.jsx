import React from 'react';
import '../../assets/common.scss';

export default function Number(){
    return(
        <div className="row number">
            <label className="simpleInput-label form-group col-lg-12">
                <span className="title">Twój numer telefonu</span>
                <input
                    className="simpleInput form-control"
                    type="text"
                    placeholder="Numer" />
            </label>
        </div>
    )
}