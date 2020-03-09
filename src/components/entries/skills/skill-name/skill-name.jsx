import React from 'react';
// import { connect } from 'react-redux';
// import { handleAdressInput } from '../../../../actions/employment/www-actions/www-actions.js';
import 'bootstrap/dist/css/bootstrap.min.css';
import { StarFill, Star } from 'react-bootstrap-icons';
import '../../assets/common.scss';
import './skill-name.scss';
// import {store} from "../../../../store/store";

export default class SkillName extends React.Component{
    constructor(){
        super();
        this.state = {
            'check-1':'',
            'check-2':'',
            'check-3':''
        }
        this.handleStars = this.handleStars.bind(this);
    }
    handleStars(evt){
        console.log(evt,evt.target.checked)
    }
    render(){
        // const { handleAdressInput } = this.props;
        return (
            <div className="row skillName">
                <div className="col-lg-8">
                    <label className="simpleInput-label form-group">
                        <span className="title">Umiejętność</span>
                        <input
                            className="simpleInput form-control"
                            type="text"
                            placeholder="Wpisz swoją umiejętność"
                            // onChange={(evt) => {handleAdressInput(evt); console.log(store.getState())}}
                        />

                    </label>
                </div>
                <div className="col-lg-4 d-flex align-items-center">
                    <label className="styled-checkbox-input">
                        <input
                            type="checkbox"
                            name='check-1'
                            onChange={(evt) => {this.handleStars(evt)}}
                        />
                        <Star className="star-unchecked" />
                        <StarFill className="star-checked" />
                    </label>
                    <label className="styled-checkbox-input">
                        <input type="checkbox" name='check-2'/>
                        <Star className="star-unchecked" />
                        <StarFill className="star-checked" />
                    </label>
                    <label className="styled-checkbox-input">
                        <input type="checkbox" name='check-3'/>
                        <Star className="star-unchecked" />
                        <StarFill className="star-checked" />
                    </label>
                </div>
            </div>
        )
    }
}

// const mapDispatchToProps = { handleAdressInput }
// Adress = connect(null, mapDispatchToProps)(Adress)