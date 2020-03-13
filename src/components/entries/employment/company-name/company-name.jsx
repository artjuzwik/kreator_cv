import React from 'react';
import { connect } from 'react-redux';
import { handleCompanyInput } from '../../../../actions/employment/company-name-actions/company-name-actions.js';
import '../../assets/common.scss';

export default class CompanyName extends React.Component{
    render(){
        const { handleCompanyInput } = this.props;
        return(
            <div className="row companyName">
                <label className="simpleInput-label form-group col-lg-12">
                    <span className="title">Nazwa firmy</span>
                    <input
                        className="simpleInput form-control"
                        type="text"
                        placeholder="Wpisz nazwę firmy"
                        onChange={(evt) => {handleCompanyInput(evt)}}/>
                </label>
            </div>
        )
    }
};
const mapDispatchToProps = { handleCompanyInput };
CompanyName = connect(null, mapDispatchToProps)(CompanyName)