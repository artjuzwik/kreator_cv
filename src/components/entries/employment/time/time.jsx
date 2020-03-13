import React from 'react';
import { connect } from 'react-redux';
import { handleTimeFromInput , handleTimeToInput, handleTimeToNowInput } from '../../../../actions/employment/time-actions/time-actions.js';
import '../../assets/common.scss';
import './time.scss';

export default class Time extends React.Component{
    constructor(){
        super();
        this.state = {
            toNow: false
        };
        this.checkCheckboxValue = this.checkCheckboxValue.bind(this)
    }
    checkCheckboxValue(evt){
        this.setState({
            toNow: evt.target.checked
        })
    }
    render(){
        const { handleTimeFromInput, handleTimeToInput,handleTimeToNowInput } = this.props;
        if(this.state.toNow === true){
            handleTimeToNowInput('do teraz')
        }else{
            handleTimeToNowInput('')
        }
        return(
            <div className="row time">
                    <label className="datepicker-label form-group col-lg-6">
                        <span className="title">Czas od</span>
                        <input
                            className="simpleInput form-control"
                            type="date"
                            placeholder=""
                            onChange={(evt) => {handleTimeFromInput(evt)}}/>
                    </label>
                    <div className="col-lg-6 time-to">
                    {this.state.toNow === false ?
                        <label className="datepicker-label form-group">
                            <span className="title">Czas do</span>
                            <input
                                className="simpleInput form-control"
                                type="date"
                                placeholder=""
                                onChange={(evt) => {handleTimeToInput(evt)}}/>
                        </label>
                        :
                        null
                    }
                    <label className="checkbox-label form-group d-flex align-items-center">
                        <input
                            className="checkboxInput"
                            type="checkbox"
                            placeholder=""
                            onChange={(evt) => {this.checkCheckboxValue(evt)}}/>
                        <span className="">pracuje do teraz</span>
                        </label>
                    </div>
            </div>
        )
    }
};
const mapDispatchToProps = { handleTimeFromInput, handleTimeToInput,handleTimeToNowInput }
Time = connect(null,mapDispatchToProps)(Time);