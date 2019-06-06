import { connect } from 'react-redux'
import {withRouter} from 'react-router'
import {bindActionCreators} from 'redux'
import Root from './Root'
import * as RootAction from './Root.Action'

export default withRouter(connect(
    (state)=>({
        ...state
    }), 
    (dispatch) => ({
        actions:bindActionCreators(RootAction, dispatch)
    })
)(Root))


