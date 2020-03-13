import React from 'react'
import RoutesSteps from '../../routing/routes.js'
import { Link } from "react-router-dom";
import {store} from "../../store/store";
import { saveToStorage } from "../../saveMethods/saveMethods.js";
import './nav.scss'

export default class Nav extends React.Component{
    constructor(){
        super();
        this.state = {
            currentIndex:'',
            previousStep:'',
            nextStep:'',
        };
        this.countStepsOnload = this.countStepsOnload.bind(this);
        this.countSteps = this.countSteps.bind(this);
    }
    countStepsOnload(){
        let locationPathName = window.location.pathname;
        for(let i = 0; i < RoutesSteps.length; i++){
           if(locationPathName === RoutesSteps[i]){
              this.setState({
                  previousStep: RoutesSteps[i - 1],
                  nextStep: RoutesSteps[i + 1],
                  currentIndex: i
              })
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
        this.countStepsOnload()
    }

    render(){
        return(
            <div className="navi">
                <div className="row">
                    <div className="col-lg-6" >
                        {this.state.previousStep === undefined ?
                            null
                            :
                            <Link
                                className="btn btn-primary"
                                onClick={() => {
                                    this.countSteps(this.state.previousStep)
                                }}
                                to={this.state.previousStep}>
                                Powrót
                            </Link>
                        }
                    </div>
                    <div className={this.state.previousStep === undefined ? 'col-lg-12' : 'col-lg-6'}>
                        {this.state.nextStep === undefined ?
                            <button
                                className="btn btn-success"
                                onClick={() => {
                                    saveToStorage('cv-data',store.getState())
                                }}>
                                Zapisz
                            </button>
                            :
                            <Link
                                className="btn btn-success"
                                onClick={() => {
                                    this.countSteps(this.state.nextStep)
                                }}
                                to={this.state.nextStep}>
                                Dalej
                            </Link>
                        }
                        </div>
                    </div>
            </div>
        )
    }
}