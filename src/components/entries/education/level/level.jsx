import React from 'react';
import { connect } from 'react-redux';
import { handleLevelInput  } from '../../../../actions/education/level-actions/level-actions.jsx';
import '../../assets/common.scss';
import {store} from "../../../../store/store";

export default class Level extends React.Component{
    render(){
        const { handleLevelInput } = this.props;
        return(
            <div className="row Level">
                <label className="simpleInput-label form-group col-lg-12">
                    <span className="title">Poziom</span>
                    <input
                        className="simpleInput form-control"
                        type="email"
                        placeholder="Wpisz poziom"
                        onChange={(evt) => {handleLevelInput(evt); console.log(store.getState())}}/>
                </label>
            </div>
        )
    }
}
const mapDispatchToProps = { handleLevelInput };
Level = connect(null, mapDispatchToProps)(Level);