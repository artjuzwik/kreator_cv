import React from 'react';
import UniversityName from '../university-name/university-name.jsx';
import Field from '../field/field.jsx';
import Level from '../level/level.jsx';
import Time from '../time/time.jsx';


export default function EducationContainer(){
    return(
        <div className="container education">
            <h2 className="mainTitle">Opisz swoje wykształcenie</h2>
            <p className="mainP">Wymień szkoły do których uczęszczałeś</p>
            <UniversityName />
            <Field />
            <Level />
            <Time />
        </div>
    )
}