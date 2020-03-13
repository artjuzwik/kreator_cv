import React from 'react';
import { connect } from 'react-redux';
import StarRatings from 'react-star-ratings';
import { handleSkillInput,handleMarkInput  } from '../../../../actions/skills/skill-name-actions/skill-name-actions.jsx';
import '../../assets/common.scss';
import './skill-name.scss';

export default class SkillName extends React.Component{
    constructor(){
        super();
        this.state = {
            rating:0
        };
        this.changeRating = this.changeRating.bind(this);
    }
    changeRating( newRating, name ) {
        this.setState({
            rating: newRating
        });
        this.props.handleMarkInput(newRating)
    }
    render(){
        const { handleSkillInput,handleMarkInput } = this.props;
        return (
            <div className="row skillName">
                <div className="col-lg-8">
                    <label className="simpleInput-label form-group">
                        <span className="title">Umiejętność</span>
                        <input
                            className="simpleInput form-control"
                            type="text"
                            placeholder="Wpisz swoją umiejętność"
                            onChange={(evt) => {handleSkillInput(evt)}}
                        />

                    </label>
                </div>
                <div className="col-lg-4 d-flex align-items-center rating justify-content-center">
                    <StarRatings
                        rating={this.state.rating}
                        starRatedColor="blue"
                        changeRating={this.changeRating}
                        numberOfStars={3}
                        name='rating'
                    />
                </div>
            </div>
        )
    }
}

const mapDispatchToProps = { handleSkillInput,handleMarkInput};
SkillName = connect(null, mapDispatchToProps)(SkillName);