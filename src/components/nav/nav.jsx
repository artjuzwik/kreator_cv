import React from 'react'
import RoutesSteps from '../../routing/routes.js'
import {
    Link,
    useHistory,
    useLocation
} from "react-router-dom";

import './nav.scss'

export default class Nav extends React.Component{
    constructor(){
        super()
        this.state = {
            oneButton: false,
            currentIndex:'',
            previousStep:'',
            nextStep:'',
        }
        this.setInitoneButton = this.setInitoneButton.bind(this);
        this.countStepsOnload = this.countStepsOnload.bind(this);
        this.countSteps = this.countSteps.bind(this);
    }
    setInitoneButton(){
        if(window.location.pathname === '/personalne'){
            this.setState({
                oneButton: true
            })
        }else{
            this.setState({
                oneButton: false
            })
        }
    }
    countStepsOnload(){
        let locationPathName = window.location.pathname;
        for(let i = 0; i < RoutesSteps.length; i++){
           if(locationPathName == RoutesSteps[i]){
              this.setState({
                  previousStep: RoutesSteps[i - 1],
                  nextStep: RoutesSteps[i + 1],
                  currentIndex: i
              }, () => {console.log(this.state, 'the state', i);})
           }
        }
    }

    countSteps(arg){
        let currentIndex = this.state.currentIndex;
        let calledIndex = RoutesSteps.indexOf(arg);

        if(calledIndex < currentIndex){
            this.setState({
                previousStep: RoutesSteps[calledIndex - 1],
                nextStep: RoutesSteps[calledIndex + 1],
                currentIndex: currentIndex--
            })
        }
        if(calledIndex > currentIndex){
            this.setState({
                previousStep: RoutesSteps[calledIndex + 1],
                nextStep: RoutesSteps[calledIndex - 1],
                currentIndex: currentIndex++
            })
        }
        if(calledIndex === currentIndex){
            this.setState({
                previousStep: RoutesSteps[calledIndex - 1],
                nextStep: RoutesSteps[calledIndex + 1],
                currentIndex: currentIndex++
            })
        }

    }

    componentDidMount(){
        this.setInitoneButton()
        this.countStepsOnload()
    }

    render(){
        return(
            <div className="navi container">
                <div className="row">
                    <div className="col-lg-6" >
                        <Link
                            className="btn btn-primary"
                            onClick={() => {this.countSteps(this.state.previousStep)}}
                            to={this.state.previousStep}>
                                Powrót
                        </Link>
                    </div>
                    <div className="col-lg-6">
                        <Link
                            className="btn btn-success"
                            onClick={() => {this.countSteps(this.state.nextStep)}}
                            to={this.state.nextStep}>
                                Dalej
                        </Link>
                        </div>
                    </div>
            </div>
        )
    }
}