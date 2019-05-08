import React, {Component} from 'react'
import {WorkoutListItem} from '../StyledComponents/WorkoutListItem'

export default class Workout extends Component {

    loadWorkoutListItem = () => {
        return <WorkoutListItem / >
    }

    render() {
        return (
            <div>
                {this.loadWorkoutListItem()}
            </div>)
    }
}