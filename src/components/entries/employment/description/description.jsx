import React from 'react';
import '../../assets/common.scss';

export default function Adress(){
    return(
        <div className="row Adress">
            <label className="simpleInput-label form-group col-lg-12">
                <span className="title">Adres WWW</span>
                <textarea className="form-control">
                    opis
                </textarea>
            </label>
        </div>
    )
}