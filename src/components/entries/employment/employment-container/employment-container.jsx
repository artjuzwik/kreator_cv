import React from 'react';
import CompanyName from '../company-name/company-name.jsx';
import Position from '../position/position.jsx';
import Adress from '../adress/adress.jsx';
import Time from '../time/time.jsx';
import Description from '../description/description.jsx';
import AddCompany from '../add-company/add-company.jsx';



export default function EmploymentContainer(){
    return(
        <div className="container employment">
            <h2 className="mainTitle">Twoje doświadczenie zawodowe</h2>
            <p className="mainP">Najlepiej zacznij od najnowszego, do najstarszego</p>
            <CompanyName />
            <Position />
            <Adress />
            <Time />
            <Description />
            <AddCompany />
        </div>
    )
}