import React from 'react';
import {connect} from "react-redux";
import StarRatings from 'react-star-ratings';
import './cv-preview.scss';
export default class CvPreview extends React.Component{
    render(){
        let skills = this.props.data.SkillsReducer.skillArr.map((item,index) => {
            return (
                item !== undefined && item !== null ?
                    <div key={index}>
                        <p>{item.name}</p>
                        <StarRatings
                            rating={item.mark}
                            starRatedColor="blue"
                            numberOfStars={3}
                            name='rating'/>
                    </div>
                    :
                    null
            )
        });
        let employmentSorting = this.props.data.EmploymentReducers.employmentArr.sort((a, b)=>{
            if(a !== undefined && a !== null && b !== undefined && b !== null){
                a = new Date(a.timeFrom)
                b = new Date(b.timeFrom)
                return a<b ? 1 : a>b ? -1 : 0;
            }
        });
        let employment = employmentSorting.map((item, index) => {
            return (
                    item !== undefined && item !== null ?
                    <div
                        key={index}
                        className="container job-container">
                        <div className="row">
                            <div className="col-lg-3 date-box">
                                <p>{item.timeFrom}</p>
                                <p>{item.timeTo}</p>
                            </div>
                            <div className="col-lg-9 description-box">
                                <p>{item.position}</p>
                                <p>{item.company}</p>
                                <p>{item.description}</p>
                                <p>{item.www}</p>
                            </div>
                        </div>
                    </div>
                    :
                    null
            )
        });
        let educationSorting = this.props.data.EducationReducer.educationArr.sort((a, b)=>{
            if(a !== undefined && a !== null && b !== undefined && b !== null) {
                a = new Date(a.timeFrom)
                b = new Date(b.timeFrom)
                return a < b ? 1 : a > b ? -1 : 0;
            }
        });
        let education = educationSorting.map((item,index) => {
            return(
                item !== undefined && item !== null ?
                <div
                    key={index} className="container school-container">
                    <div className="row">
                        <div className="col-lg-3">
                            <p>{item.timeFrom} - {item.timeTo}</p>
                        </div>
                        <div className="col-lg-9">
                            <p>{item.school}</p>
                            <p>{item.direction}</p>
                            <p>{item.level}</p>
                        </div>
                    </div>
                </div>
                    :
                    null
            )
        });
        return(
            <div className="cv-preview">
                <div className="container">
                    <div className="row">
                        <div>
                            <h2 className="main-title">{this.props.data.BasicsReducer.basic.name} {this.props.data.BasicsReducer.basic.secondName}</h2>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-8">
                            <h3>Doświadczenie</h3>
                            {employment}

                            <h3>Wykształcenie</h3>
                            {education}
                        </div>
                        <div className="col-lg-4">
                            <h3>Dane osobowe</h3>
                            <div>
                                <h4 className="subheader">Email</h4>
                                <p>{this.props.data.BasicsReducer.basic.email}</p>
                            </div>
                            <div>
                                <h4 className="subheader">Numer Telefonu</h4>
                                <p>{this.props.data.BasicsReducer.basic.phoneNumber}</p>
                            </div>
                            <div>
                                <h4>Umiejętności</h4>
                                {skills}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
const mapStateToProps = (state) => {
    return {
        data: state
    }
};
CvPreview = connect(mapStateToProps, null)(CvPreview);