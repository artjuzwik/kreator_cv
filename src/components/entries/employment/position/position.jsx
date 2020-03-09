import React from 'react';
import { connect } from 'react-redux';
import { handlePositionInput } from '../../../../actions/employment/position-actions/positions-actions.js';
import '../../assets/common.scss';
import {store} from "../../../../store/store";

export default class Position extends React.Component{
    render(){
        const { handlePositionInput  } = this.props;
        return(
            <div className="row position">
                <label className="simpleInput-label form-group col-lg-12">
                    <span className="title">Pozycja</span>
                    <input
                        className="simpleInput form-control"
                        type="text"
                        placeholder="Wpisz pozycję"
                        onChange={(evt) => {handlePositionInput(evt); console.log(store.getState())}} />
                </label>
            </div>
        )
    }
}
const mapDispatchToProps = { handlePositionInput };
Position = connect(null, mapDispatchToProps)(Position);