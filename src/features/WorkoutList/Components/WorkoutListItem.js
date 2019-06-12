import React, {Component} from 'react';
import PropTypes from 'prop-types'
import {StyledPagination} from '../StyledComponents/StyledPagination'

export class WorkoutListItem extends Component{

    static get PropTypes() {
        return {
            rows: PropTypes.object.isRequired,
            rowsPerPage: PropTypes.number.isRequired,
            page: PropTypes.number.isRequired
        }
    }

    render(){
        return(
             <div>
                <StyledPagination rows={this.props.rows} rowsPerPage={this.props.rowsPerPage} page={this.props.page}/>     
             </div>
        )
    }
}