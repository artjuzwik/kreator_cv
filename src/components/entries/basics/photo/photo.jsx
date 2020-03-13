import React from 'react';
import '../../assets/common.scss';
import {connect} from "react-redux";
import { handlePhotoInput } from '../../../../actions/basics/photo-actions/photo-actions.js';
import './photo.scss';

export default class Photo extends React.Component{
    render(){
        const { handlePhotoInput } = this.props;
        return(
            <div className="row photo">
                <label className="simpleInput-label form-group col-lg-12">
                    <span className="title">Twoje zdjęcie</span>
                    <input
                        className="simpleInput form-control inputPhoto"
                        type="file"
                        accept="image/jpeg,image/png,image/bmp"
                        onChange={(evt) => { handlePhotoInput(evt)}}
                         />
                </label>
            </div>
        )
    }
}
const mapDispatchToProps = { handlePhotoInput };
Photo = connect(null, mapDispatchToProps)(Photo);