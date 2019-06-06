import React, {Component} from 'react';
import PropTypes from 'prop-types'
import {StyledTable} from '../StyledComponents/StyledTable'
import {StyledPagination} from '../StyledComponents/StyledPagination'

export class WorkoutListItem extends Component{

    static get PropTypes() {
        return {
            data: PropTypes.object.isRequired
        }
    }

    render(){
        return(
             <div>
                <StyledTable/>
                <StyledPagination/>     
             </div>
        )
    }
}