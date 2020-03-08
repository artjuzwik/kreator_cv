import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { store } from '../../../../store/store.js';
import { handleEmailInput } from '../../../../actions/basics/email-actions/email-actions.js'
import '../../assets/common.scss';

export default class Email extends React.Component{
    render(){
        const { basic, handleEmailInput } = this.props;
        return(
            <div className="row email">
                <label className="simpleInput-label form-group col-lg-12">
                    <span className="title">E-mail</span>
                    <input
                        className="simpleInput form-control"
                        type="email"
                        placeholder="Twój adres e-mail"
                        onChange={(evt) => {handleEmailInput(evt); console.log(store.getState())}}/>
                </label>
            </div>
        )
    }
}
const mapStateToProps = (state) => {
    return { basic: state.basic };
};
const mapDispatchToProps = { handleEmailInput };
Email = connect(mapStateToProps, mapDispatchToProps)(Email);