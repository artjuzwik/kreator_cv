import React from 'react';
import { connect } from 'react-redux';
import { handleCompanyObj } from '../../../../actions/employment/add-company-actions/add-company-actions.jsx';
import CompanyList from '../company-list/company-list.jsx';
import './add-company.scss'
import Nav from "../../../nav/nav";
export default class AddCompany extends React.Component{
    render() {
        const { handleCompanyObj } = this.props;
        let companyList = this.props.employmentArr.map((item,index) => {
            return (
                item !== undefined ?
                <CompanyList item={item} key={index} index={index} />
                :
                null
            )
        });
        return(
            <div className="add-company">
                <div className="add-company-container d-flex ">
                    <button
                        className="btn add-company-button btn-success"
                        onClick={() => {handleCompanyObj(this.props.employment)}}>Dodaj</button>
                </div>
                <Nav />
                <div>
                    {companyList}
                </div>
            </div>
        )
    }
}
const mapStateToProps = state => {
    return {
        employment: state.EmploymentReducers.employment,
        employmentArr: state.EmploymentReducers.employmentArr
    }
};
const mapDispatchToProps = { handleCompanyObj }
AddCompany = connect(mapStateToProps, mapDispatchToProps)(AddCompany);
