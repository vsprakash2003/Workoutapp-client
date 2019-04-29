import React, { Component } from 'react'
import { Route} from 'react-router'
import About from '../Home/About'
import WorkoutList from '../features/WorkoutList/Containers/Workout'

export default class Root extends Component {

    render() {
        return (
            <div>
                <Route exact path="/" component={WorkoutList} />
                <Route path="/about" component={About} />
            </div>
        ) 
    }

}