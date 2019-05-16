import { connect } from 'react-redux'
import {withRouter} from 'react-router'
import {bindActionCreators} from 'redux'
import Workout from '../Workout'
import * as workoutAction from './Workout.Action'

export default withRouter(connect(
    (state)=>({
        workoutListData: state.workoutReducer.workoutListData
    }), 
    (dispatch) => ({
        workoutActions:bindActionCreators(workoutAction, dispatch)
    })
)(Workout))