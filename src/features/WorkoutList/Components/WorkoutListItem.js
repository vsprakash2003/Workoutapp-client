import React, {Component} from 'react';
import {StyledTable} from '../StyledComponents/StyledTable'
import {StyledPagination} from '../StyledComponents/StyledPagination'

export class WorkoutListItem extends Component{
    render(){
        return(
             <div>
                <StyledTable/>
                <StyledPagination/>     
             </div>
        )
    }
}