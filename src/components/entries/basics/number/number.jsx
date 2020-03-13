import React from 'react';
import {connect} from "react-redux";
import { handleNumberInput } from '../../../../actions/basics/number-actions/number-actions.js';
import '../../assets/common.scss';

export default class Number extends React.Component{
    render(){
        const { handleNumberInput } = this.props
        return(
            <div className="row number">
                <label className="simpleInput-label form-group col-lg-12">
                    <span className="title">Twój numer telefonu</span>
                    <input
                        className="simpleInput form-control"
                        type="text"
                        placeholder="Numer"
                        onChange={(evt) =>{ handleNumberInput(evt)}}/>
                </label>
            </div>
        )
    }
}
const mapDispatchToProps = { handleNumberInput };
Number = connect(null, mapDispatchToProps)(Number);