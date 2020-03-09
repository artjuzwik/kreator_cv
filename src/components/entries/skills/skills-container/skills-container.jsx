import React from 'react';
import SkillName from '../skill-name/skill-name.jsx';




export default function EmploymentContainer(){
    return(
        <div className="container employment">
            <h2 className="mainTitle">Twoje Umiejętności</h2>
            <p className="mainP">Oceń je w skali 1-3</p>
            <SkillName />
        </div>
    )
}