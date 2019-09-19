import React, { Component } from "react";
import PropTypes from "prop-types";
import Table from "@material-ui/core/Table";
import TableHead from "@material-ui/core/TableHead";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableFooter from "@material-ui/core/TableFooter";
import TablePagination from "@material-ui/core/TablePagination";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import map from "lodash/map";
import omit from "lodash/omit";

// eslint-disable-next-line prettier/prettier
import {StyledTable} from "../StyledComponents/StyledTable";
// eslint-disable-next-line prettier/prettier
import {StyledTableCell} from "../StyledComponents/StyledTableCell";

// eslint-disable-next-line import/prefer-default-export
export class StyledPagination extends Component {
  dropId = rows => {
    return map(rows, entry => {
      const row = omit(entry, "id");
      return row;
    });
  };

  handleChangePage = (event, page) => {
    // eslint-disable-next-line react/no-unused-state
    this.setState({ page });
  };

  handleChangeRowsPerPage = event => {
    // eslint-disable-next-line react/no-unused-state
    this.setState({ page: 0, rowsPerPage: event.target.value });
  };

  render() {
    const { classes } = this.props;
    const { rows, rowsPerPage, page } = this.props;
    const rowsSansId = this.dropId(rows);
    const emptyRows =
      rowsPerPage - Math.min(rowsPerPage, rows.length - page * rowsPerPage);
    return (
      <Paper className={classes.root}>
        <div className={classes.tableWrapper}>
          <Table className={classes.table}>
            <TableHead>
              <TableRow>
                <StyledTableCell align="left">Date</StyledTableCell>
                <StyledTableCell align="left">Activity</StyledTableCell>
                <StyledTableCell align="left">Duration</StyledTableCell>
                <StyledTableCell align="left">Calories</StyledTableCell>
                <StyledTableCell align="left">Distance</StyledTableCell>
                <StyledTableCell align="left">Notes</StyledTableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {rowsSansId
                .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                .map(row => (
                  <TableRow key={row.id}>
                    {map(row, item => {
                      return (
                        <TableCell className="customDefaultColumnStyle">
                          {item}
                        </TableCell>
                      );
                    })}
                  </TableRow>
                ))}
              {emptyRows > 0 && (
                <TableRow style={{ height: 48 * emptyRows }}>
                  <TableCell colSpan={6} />
                </TableRow>
              )}
            </TableBody>
            <TableFooter>
              <TableRow>
                <TablePagination
                  rowsPerPageOptions={[5, 10, 25]}
                  colSpan={3}
                  count={rows.length}
                  rowsPerPage={rowsPerPage}
                  page={page}
                  SelectProps={{
                    native: true
                  }}
                  onChangePage={this.handleChangePage}
                  onChangeRowsPerPage={this.handleChangeRowsPerPage}
                  ActionsComponent={StyledTable}
                />
              </TableRow>
            </TableFooter>
          </Table>
        </div>
      </Paper>
    );
  }
}

StyledPagination.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  classes: PropTypes.object.isRequired,
  // eslint-disable-next-line react/forbid-prop-types
  rows: PropTypes.array.isRequired,
  rowsPerPage: PropTypes.number.isRequired,
  page: PropTypes.number.isRequired
};
