import React from 'react';
import { connect } from 'react-redux';
import { handleUniversityNameInput } from '../../../../actions/education/university-name-actions/university-name-actions.jsx';
import '../../assets/common.scss';
import {store} from "../../../../store/store";

export default class UniversityName extends React.Component{
    render(){
        const { handleUniversityNameInput } = this.props;
        return(
            <div className="row universityName">
                <label className="simpleInput-label form-group col-lg-12">
                    <span className="title">Nazwa szkoły</span>
                    <input
                        className="simpleInput form-control"
                        type="email"
                        placeholder="Wpisz nazwę szkoły"
                        onChange={(evt) => {handleUniversityNameInput(evt); console.log(store.getState())}}/>
                </label>
            </div>
        )
    }
}
const mapDispatchToProps = { handleUniversityNameInput };
UniversityName = connect(null, mapDispatchToProps)(UniversityName)