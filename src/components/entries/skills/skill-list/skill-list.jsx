import React from 'react';
import {connect} from 'react-redux';
import { removeSkillListItem  } from '../../../../actions/skills/skill-list-actions/skill-list-actions.jsx';
import StarRatings from 'react-star-ratings';
import { XCircle } from 'react-bootstrap-icons';
import './skill-list.scss';

export default class SkillList extends React.Component{
    render(){
        const { removeSkillListItem } = this.props;
        return(
            <div>
                {this.props.item !== null && this.props.item !== undefined ?
                    <div className="skill-list">
                        <XCircle
                            className="close"
                            onClick={() => {
                                removeSkillListItem(this.props.index)
                            }}
                        />
                        <div>
                            <h3 className="title">Umiejętność</h3>
                            <p className="paragraph">{this.props.item.name}</p>
                        </div>
                        <div>
                            <h3 className="title">Ocena</h3>
                            <p className="paragraph">{this.props.item.position}</p>
                            <StarRatings
                                rating={this.props.item.mark}
                                starRatedColor="blue"
                                numberOfStars={3}
                                name='rating'/>
                        </div>
                    </div>
                    :
                    null
                }
            </div>
        )
    }
}
const mapDispatchToProps = { removeSkillListItem };
SkillList = connect(null, mapDispatchToProps)(SkillList);