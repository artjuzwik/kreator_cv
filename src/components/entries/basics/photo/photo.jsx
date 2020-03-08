import React from 'react';
import '../../assets/common.scss';
import { store } from '../../../../store/store.js';
import {connect} from "react-redux";
import { handlePhotoInput } from '../../../../actions/basics/photo-actions/photo-actions.js';

export default class Photo extends React.Component{
    render(){
        const { basic, handlePhotoInput } = this.props;
        return(
            <div className="row photo">
                <label className="simpleInput-label form-group col-lg-12">
                    <span className="title">Twoje zdjęcie</span>
                    <input
                        className="simpleInput form-control"
                        type="file"
                        accept="image/jpeg,image/png,image/bmp"
                        onChange={(evt) => { handlePhotoInput(evt); console.log(store.getState(), evt.target.value)}}
                         />
                </label>
            </div>
        )
    }
}
const mapStateToProps = (state) => {
    return { basic: state.basic };
};
const mapDispatchToProps = { handlePhotoInput };
Photo = connect(mapStateToProps, mapDispatchToProps)(Photo);