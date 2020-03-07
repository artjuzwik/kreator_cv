import React from 'react';
import BasicsContainer from '../entries/basics/basics-container/basics-container.jsx'

import './container.scss'

export default function Container(){
    return(
        <div className="container main">
            <div className="row">
                <div className="col-lg-5">
                    <BasicsContainer />
                </div>
            </div>
        </div>
    )
}