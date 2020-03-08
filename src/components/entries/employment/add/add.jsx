import React from 'react';
import CompanyName from '../company-name/company-name.jsx';
import Position from '../position/position.jsx';
import Adress from '../adress/adress.jsx';
import Time from '../time/time.jsx';
import Description from '../description/description.jsx';

export default class Add extends React.Component{
    constructor(){
        super()
    }
    render() {
        return(
            <div>
                <div>
                    <button>Dodaj</button>
                </div>
                <div>
                    {/*<CompanyName/>*/}
                    {/*<Position/>*/}
                    {/*<Adress/>*/}
                    {/*<Time/>*/}
                    {/*<Description/>*/}
                </div>
            </div>
        )
    }
}

