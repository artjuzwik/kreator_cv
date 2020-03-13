import React from 'react';
import '../../assets/common.scss';
import {connect} from "react-redux";

import { handleNameInput, handleSecondNameInput } from '../../../../actions/basics/name-actions/name-actions.js';

export default class Name extends React.Component{
     render() {
         const { handleNameInput,handleSecondNameInput } = this.props;
         return (
             <div className="row name">
                 <label className="simpleInput-label form-group col-lg-6">
                     <span className="title">Imię</span>
                     <input
                         className="simpleInput form-control"
                         type="text"
                         placeholder="Jan"
                         onChange={(evt) => {handleNameInput(evt)}}/>
                 </label>
                 <label className="simpleInput-label form-group col-lg-6">
                     <span className="title">Nazwisko</span>
                     <input
                         className="simpleInput form-control"
                         type="text"
                         placeholder="Kowalski"
                         onChange={(evt) => {handleSecondNameInput(evt)}}/>
                 </label>
             </div>
         )
     }
}
const mapDispatchToProps = { handleNameInput, handleSecondNameInput };
Name = connect(null, mapDispatchToProps)(Name);