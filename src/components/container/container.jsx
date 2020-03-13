import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route
} from "react-router-dom";
import RoutesSteps from '../../routing/routes.js'
import BasicsContainer from '../entries/basics/basics-container/basics-container.jsx'
import EmploymentContainer from '../entries/employment/employment-container/employment-container.jsx'
import EducationContainer from '../entries/education/education-container/education-container.jsx'
import SkillsContainer from '../entries/skills/skills-container/skills-container.jsx'
import CvPreview from "../cv-preview/cv-preview.jsx";
import './container.scss'

export default class Container extends React.Component{
    render(){
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
                                <Route path={RoutesSteps[3]}>
                                    <SkillsContainer />
                                </Route>
                            </Switch>

                        </Router>
                    </div>
                    <div className="col-lg-7 cv-view">
                        <CvPreview />
                    </div>
                </div>
            </div>
        )
    }
}