import React from 'react';
import { connect } from 'react-redux';
import { handleEmailInput } from '../../../../actions/basics/email-actions/email-actions.js';
import '../../assets/common.scss';

export default class Email extends React.Component{
    render(){
        const { handleEmailInput } = this.props;
        return(
            <div className="row email">
                <label className="simpleInput-label form-group col-lg-12">
                    <span className="title">E-mail</span>
                    <input
                        className="simpleInput form-control"
                        type="email"
                        placeholder="Twój adres e-mail"
                        onChange={(evt) => {handleEmailInput(evt)}}/>
                </label>
            </div>
        )
    }
}
const mapDispatchToProps = { handleEmailInput };
Email = connect(null, mapDispatchToProps)(Email);