import React, { Component } from 'react'
import { Route} from 'react-router'
import About from '../Home/About'
import WorkoutList from '../features/WorkoutList/Containers/Workout'
import SideNav from '../features/SideNavBar/Containers/SideNav'

export default class Root extends Component {

    render() {
        return (
            <div>
                <Route exact path="/" component={SideNav} />
                <Route path="/about" component={About} />
            </div>
        ) 
    }

}