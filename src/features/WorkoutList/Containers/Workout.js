import React, { Component } from "react";
import PropTypes from "prop-types";
import { isEmpty, isEqual } from "lodash";
import { WorkoutListItem } from "../StyledComponents/WorkoutListItem";
import { getConfigProperty } from "../../../settings";

const ROWS_PER_PAGE = getConfigProperty("rowsPerPage");
const PAGE = getConfigProperty("page");

/**
 * @desc Workout class
 * @extends (React.Component)
 * @example class Workout extends Component
 */
export default class Workout extends Component {
  /**
   * @desc constructor
   * @param {object} {props} - Props for the component
   * @param {object} {context} - context object inherits from the parent component
   */

  constructor(props) {
    super(props);

    /**
     * @desc initialState
     */

    this.state = {
      // eslint-disable-next-line react/no-unused-state
      workoutListData: []
    };
  }

  /**
   * @desc componentWillMount - called before mounting the component
   * @abstract
   */

  componentWillMount() {
    const { workoutListData, workoutActions } = this.props;
    if (isEmpty(workoutListData)) {
      workoutActions.getWorkoutList();
    }
  }

  /**
   * @desc componentWillReceiveProps - will call the respective function depending on the change in the props
   * @param {object} nextProps - Received or updated props from parent component
   * @abstract
   */

  componentWillReceiveProps(nextProps) {
    const { workoutListData } = this.props;
    if (!isEqual(workoutListData, nextProps.workoutListData)) {
      // do something
    }
  }

  loadWorkoutListItem = () => {
    const { workoutListData } = this.props;
    return (
      <WorkoutListItem
        rows={workoutListData}
        rowsPerPage={ROWS_PER_PAGE}
        page={PAGE}
      />
    );
  };

  render() {
    const { workoutListData } = this.props;
    return (
      <div>{!isEmpty(workoutListData) ? this.loadWorkoutListItem() : ""}</div>
    );
  }
}

/**
 * @desc Proptypes
 * @property {array} workoutListData - Array of workout data objects
 */

Workout.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  workoutListData: PropTypes.array.isRequired,
  // eslint-disable-next-line react/forbid-prop-types
  workoutActions: PropTypes.object.isRequired
};
