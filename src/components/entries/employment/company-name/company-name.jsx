import React from 'react';
import { connect } from 'react-redux';
import { handleCompanyInput } from '../../../../actions/employment/company-name-actions/company-name-actions.js'
import '../../assets/common.scss';
import {store} from "../../../../store/store";

export default class CompanyName extends React.Component{
    render(){
        const { employment, handleCompanyInput } = this.props;
        return(
            <div className="row companyName">
                <label className="simpleInput-label form-group col-lg-12">
                    <span className="title">Nazwa firmy</span>
                    <input
                        className="simpleInput form-control"
                        type="text"
                        placeholder="Wpisz nazwę firmy"
                        onChange={(evt) => {handleCompanyInput(evt); console.log(store.getState())}}/>
                </label>
            </div>
        )
    }
};
const mapStateToProps = state => {
    return { employment: state.employment }
};
const mapDispatchToProps = { handleCompanyInput };
CompanyName = connect(mapStateToProps, mapDispatchToProps)(CompanyName)