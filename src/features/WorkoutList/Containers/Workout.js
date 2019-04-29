import React from 'react'
import {WorkoutListItem} from './../StyledComponents/WorkoutListItem'

export default class Workout extends React.Component {

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