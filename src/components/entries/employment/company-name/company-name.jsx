import React from 'react';
import '../../assets/common.scss';

export default function CompanyName(){
    return(
        <div className="row companyName">
            <label className="simpleInput-label form-group col-lg-12">
                <span className="title">Nazwa firmy</span>
                <input
                    className="simpleInput form-control"
                    type="text"
                    placeholder="Wpisz nazwę firmy" />
            </label>
        </div>
    )
}