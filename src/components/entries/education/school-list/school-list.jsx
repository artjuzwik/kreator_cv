import React from 'react';
import {connect} from 'react-redux';
import { removeSchoolListItem  } from '../../../../actions/education/school-list-actions/school-list-actions.jsx';
import { XCircle } from 'react-bootstrap-icons';
import './school-list.scss';

export default class SchoolList extends React.Component{
    render(){
        const { removeSchoolListItem } = this.props;
        const propsItem = this.props.item;
        return(
            <div>
                {this.props.item !== null && this.props.item !== undefined ?
                <div className="company-list">
                    <XCircle
                        className="close"
                        onClick={() => {
                            removeSchoolListItem(this.props.index)
                        }}
                    />
                    <div>
                        <h3 className="title">Nazwa szkoły</h3>
                        <p className="paragraph">{this.props.item ? this.props.item.school : null}</p>
                    </div>
                    <div>
                        <h3 className="title">Kierunek</h3>
                        <p className="paragraph">{this.props.item ? this.props.item.direction : null}</p>
                    </div>
                    <div>
                        <h3 className="title">Poziom</h3>
                        <p className="paragraph">{this.props.item ? this.props.item.level : null}</p>
                    </div>
                    <div>
                        <h3 className="title">Czas od</h3>
                        <p className="paragraph">{this.props.item ? this.props.item.timeFrom : null}</p>
                    </div>
                    <div>
                        <h3 className="title">Czas do</h3>
                        <p className="paragraph">{this.props.item ? this.props.item.timeTo : null}</p>
                    </div>
                </div>
                    :
                    null
                }
            </div>
        )
    }
}
const mapDispatchToProps = { removeSchoolListItem };
SchoolList = connect(null, mapDispatchToProps)(SchoolList);