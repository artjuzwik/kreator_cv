import React from 'react';
import { connect } from 'react-redux';
import { handleEducationObj } from '../../../../actions/education/add-school-actions/add-school-actions.jsx';
import SchoolList from '../school-list/school-list.jsx';
import './add-school.scss'
import Nav from "../../../nav/nav";
export default class AddSchool extends React.Component{
    render() {
        const { handleEducationObj  } = this.props;
        let schoolList = this.props.educationArr.map((item,index) => {
            return (
                item !== undefined ?
                    <SchoolList item={item} key={index} index={index} />
                    :
                    null
            )
        });
        return(
            <div className="add-school">
                <div className="add-school-container d-flex">
                    <button
                        className="btn add-company-button btn-success"
                        onClick={() => {
                            handleEducationObj(this.props.education)
                        }
                        }>Dodaj</button>
                </div>
                <Nav />
                <div>
                    {schoolList}
                </div>
            </div>
        )
    }
}
const mapStateToProps = state => {
    return {
        education: state.EducationReducer.education,
        educationArr: state.EducationReducer.educationArr
    }
};
const mapDispatchToProps = { handleEducationObj };
AddSchool = connect(mapStateToProps, mapDispatchToProps)(AddSchool);
