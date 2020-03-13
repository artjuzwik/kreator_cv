import React from 'react';
import { connect } from 'react-redux';
import { handleFieldInput } from '../../../../actions/education/field-actions/field-actions.jsx';
import '../../assets/common.scss';

export default class Field extends React.Component{
    render(){
        const { handleFieldInput } = this.props;
        return(
            <div className="row field">
                <label className="simpleInput-label form-group col-lg-12">
                    <span className="title">Kierunek</span>
                    <input
                        className="simpleInput form-control"
                        type="email"
                        placeholder="Wpisz kierunek nauki"
                        onChange={(evt) => {handleFieldInput(evt)}}/>
                </label>
            </div>
        )
    }
}
const mapDispatchToProps = { handleFieldInput };
Field = connect(null, mapDispatchToProps)(Field);

