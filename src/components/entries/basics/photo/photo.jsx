import React from 'react';
import '../../assets/common.scss';

export default function Photo(){
    return(
        <div className="row photo">
            <label className="simpleInput-label form-group col-lg-12">
                <span className="title">Twoje zdjęcie</span>
                <input
                    className="simpleInput form-control"
                    type="file"
                    accept="image/jpeg,image/png,image/bmp"
                     />
            </label>
        </div>
    )
}