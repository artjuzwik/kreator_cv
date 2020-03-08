import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    useRouteMatch,
    useParams
} from "react-router-dom";

import RoutesSteps from '../../routing/routes.js'
import BasicsContainer from '../entries/basics/basics-container/basics-container.jsx'
import EmploymentContainer from '../entries/employment/employment-container/employment-container.jsx'
import EducationContainer from '../entries/education/education-container/education-container.jsx'
import Nav from '../nav/nav.jsx'

import './container.scss'

export default function Container(){
    return(
        <div className="container main">
            <div className="row">
                <div className="col-lg-5 action">
                    <Router>
                        <Switch>
                            <Route path={RoutesSteps[0]}>
                                <BasicsContainer />
                            </Route>
                            <Route path={RoutesSteps[1]}>
                                <EmploymentContainer />
                            </Route>
                            <Route path={RoutesSteps[2]}>
                                <EducationContainer />
                            </Route>
                        </Switch>


                        <Nav />
                    </Router>
                </div>
            </div>
        </div>
    )
}