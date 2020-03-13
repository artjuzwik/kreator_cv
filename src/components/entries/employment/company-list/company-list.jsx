import React from 'react';
import {connect} from 'react-redux';
import { removeCompanyListItem  } from '../../../../actions/employment/company-list-actions/company-list-actions.jsx';
import { XCircle } from 'react-bootstrap-icons';
import './company-list.scss';

export default class CompanyList extends React.Component{
    render(){
        const { removeCompanyListItem } = this.props;
        return(
            <div>
                {this.props.item !== null && this.props.item !== undefined ?
                <div className="company-list">
                    <XCircle
                        className="close"
                        onClick={() => {
                            removeCompanyListItem(this.props.index)
                        }}
                    />
                    <div>
                        <h3 className="title">Nazwa firmy</h3>
                        <p className="paragraph">{this.props.item.company}</p>
                    </div>
                    <div>
                        <h3 className="title">Pozycja</h3>
                        <p className="paragraph">{this.props.item.position}</p>
                    </div>
                    <div>
                        <h3 className="title">Adres WWW</h3>
                        <p className="paragraph">{this.props.item.www}</p>
                    </div>
                    <div>
                        <h3 className="title">Czas od</h3>
                        <p className="paragraph">{this.props.item.timeFrom}</p>
                    </div>
                    <div>
                        <h3 className="title">Czas do</h3>
                        <p className="paragraph">{this.props.item.timeTo}</p>
                    </div>
                    <div>
                        <h3 className="title">Opis</h3>
                        <p className="paragraph">{this.props.item.description}</p>
                    </div>
                </div>
                    :
                    null
                }
            </div>
        )
    }
}
const mapDispatchToProps = { removeCompanyListItem };
CompanyList = connect(null, mapDispatchToProps)(CompanyList);