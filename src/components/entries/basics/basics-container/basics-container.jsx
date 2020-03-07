import React from 'react';
import Name from '../name/name.jsx'
import Photo from '../photo/photo.jsx'
import Email from '../email/email.jsx'
import Number from '../number/number.jsx'

export default function BasicsContainer(){
    return(
        <div className="container">
            basics container
            <Name />
            <Photo />
            <Email />
            <Number />
        </div>
    )
}