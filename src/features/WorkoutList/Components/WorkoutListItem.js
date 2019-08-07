import React, { Component } from "react";
import PropTypes from "prop-types";
import { StyledPagination } from "../StyledComponents/StyledPagination";

// eslint-disable-next-line import/prefer-default-export
export class WorkoutListItem extends Component {
  static get PropTypes() {
    return {
      rows: PropTypes.object.isRequired,
      rowsPerPage: PropTypes.number.isRequired,
      page: PropTypes.number.isRequired
    };
  }

  render() {
    const { rows, rowsPerPage, page } = this.props;
    return (
      <div>
        <StyledPagination rows={rows} rowsPerPage={rowsPerPage} page={page} />
      </div>
    );
  }
}

WorkoutListItem.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  rows: PropTypes.object.isRequired,
  rowsPerPage: PropTypes.number.isRequired,
  page: PropTypes.number.isRequired
};
