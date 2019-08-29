import React from "react";
import PropTypes from "prop-types";
import { StyledPagination } from "../StyledComponents/StyledPagination";

// eslint-disable-next-line import/prefer-default-export
export const WorkoutListItem = props => {
  const { rows, rowsPerPage, page } = props;
  return (
    <div>
      <StyledPagination rows={rows} rowsPerPage={rowsPerPage} page={page} />
    </div>
  );
};

WorkoutListItem.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  rows: PropTypes.array.isRequired,
  rowsPerPage: PropTypes.number.isRequired,
  page: PropTypes.number.isRequired
};
