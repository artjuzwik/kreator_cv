import React from 'react';

import Name from '../name/name.jsx';
import Photo from '../photo/photo.jsx';
import Email from '../email/email.jsx';
import Number from '../number/number.jsx';
import Nav from "../../../nav/nav";


export default function BasicsContainer(){
    return(
        <div className="container basics">
            <h2 className="mainTitle">Wpisz swoje dane kontaktowe</h2>
            <p className="mainP">Aby pracodawca mógł się z Tobą skontaktować</p>
            <Name />
            <Photo />
            <Email />
            <Number />
            <Nav />
        </div>
    )
}