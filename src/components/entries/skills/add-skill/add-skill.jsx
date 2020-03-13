import React from 'react';
import { connect } from 'react-redux';
import { handleSkillObj } from '../../../../actions/skills/add-skills-actions/add-skills-actions.jsx';
import SkillList from '../skill-list/skill-list.jsx';
import './add-skill.scss'
import Nav from "../../../nav/nav";
export default class AddSkill extends React.Component{
    render() {
        const { handleSkillObj } = this.props;
        let skillList = this.props.skillArr.map((item,index) => {
            return (
                item !== undefined ?
                    <SkillList item={item} key={index} index={index} />
                    :
                    null
            )
        });
        return(
            <div className="add-skill">
                <div className="add-skill-container d-flex">
                    <button
                        className="btn add-skill-button btn-success"
                        onClick={() => {handleSkillObj(this.props.skill)} }>
                        Dodaj
                    </button>
                </div>
                <Nav />
                <div>
                    {skillList}
                </div>
            </div>
        )
    }
}
const mapStateToProps = state => {
    return {
        skill: state.SkillsReducer.skill,
        skillArr: state.SkillsReducer.skillArr
    }
};
const mapDispatchToProps = { handleSkillObj }
AddSkill = connect(mapStateToProps, mapDispatchToProps)(AddSkill);
