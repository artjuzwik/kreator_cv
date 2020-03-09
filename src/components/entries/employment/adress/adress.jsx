import React from 'react';
import { connect } from 'react-redux';
import { handleAdressInput } from '../../../../actions/employment/www-actions/www-actions.js';
import '../../assets/common.scss';
import {store} from "../../../../store/store";

export default class Adress extends React.Component{
    render(){
        const { handleAdressInput } = this.props;
        return (
            <div className="row Adress">
                <label className="simpleInput-label form-group col-lg-12">
                    <span className="title">Adres WWW</span>
                    <input
                        className="simpleInput form-control"
                        type="text"
                        placeholder="Wpisz adres witryny"
                        onChange={(evt) => {handleAdressInput(evt); console.log(store.getState())}}/>
                </label>
            </div>
        )
    }
}
const mapDispatchToProps = { handleAdressInput }
Adress = connect(null, mapDispatchToProps)(Adress)