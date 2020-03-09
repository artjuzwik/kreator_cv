import React from 'react';
import { connect } from 'react-redux';
import { handleDescriptionInput } from '../../../../actions/employment/description-actions/description-actions.js';
import {store} from "../../../../store/store";
import '../../assets/common.scss';
import './description.scss';

export default class Adress extends React.Component{
    render(){
        const { handleDescriptionInput } = this.props
        return(
            <div className="row adress">
                <label className="simpleInput-label form-group col-lg-12">
                    <span className="title">Adres WWW</span>
                    <textarea
                        className="form-control"
                        onChange={(evt) => {handleDescriptionInput(evt); console.log(store.getState())}}>
                        opis
                    </textarea>
                </label>
            </div>
        )
    }
}
const mapDispatchToProps = { handleDescriptionInput }
Adress = connect(null, mapDispatchToProps)(Adress)