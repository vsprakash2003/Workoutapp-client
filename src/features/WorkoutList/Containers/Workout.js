import React, {Component} from 'react'
import PropTypes from 'prop-types'
import {WorkoutListItem} from './../StyledComponents/WorkoutListItem'
import {isEmpty, isEqual} from 'lodash'
import {getConfigProperty} from "../../../settings"
const ROWS_PER_PAGE = getConfigProperty("rowsPerPage")
const PAGE = getConfigProperty("page")


/** 
 * @desc Workout class
 * @extends (React.Component)
 * @example class Workout extends Component
 */
export default class Workout extends Component {

    /** 
     * @desc Proptypes
     * @property {array} workoutListData - Array of workout data objects
     */

    static get PropTypes() {
        return {
            workoutListData: PropTypes.array.isRequired
        }
    }

    /**
     * @desc constructor
     * @param {object} {props} - Props for the component
     * @param {object} {context} - context object inherits from the parent component
     */

    constructor(props){
        super(props)
        
    /**
     * @desc initialState
     */
    
     this.state = {
        workoutListData: []
     }
    }

    /**
     * @desc componentWillMount - called before mounting the component
     * @abstract 
     */

    componentWillMount(){
        if(isEmpty(this.props.workoutListData)){
            this.props.workoutActions.getWorkoutList()
        }     
    } 

    /**
     * @desc componentWillReceiveProps - will call the respective function depending on the change in the props
     * @param {object} nextProps - Received or updated props from parent component
     * @abstract
     */

    componentWillReceiveProps(nextProps) {
        //let {workoutListData} = nextProps
        if(!isEqual(this.props.workoutListData, nextProps.workoutListData)){
            //do something
        }
    }

    loadWorkoutListItem = () => {
        return <WorkoutListItem rows={this.props.workoutListData} rowsPerPage={ROWS_PER_PAGE}  page={PAGE}/ >
    }

    render() {
        return (
            <div>
                {!isEmpty(this.props.workoutListData)? this.loadWorkoutListItem():" "}
            </div>)
    }
}