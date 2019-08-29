import styled from "styled-components";
import TableCell from "@material-ui/core/TableCell";
import { withStyles } from "@material-ui/core/styles";

/**
 * @desc create custom theme for wrapping the StyledTableCell component
 * @example tableCellStyles = theme => ({ # styles go here })
 */

const tableCellStyles = theme => ({
  head: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
    fontWeight: "bold",
    fontSize: 16
  }
});

/**
 * @desc wrap the component inside withStyles high order component and apply the custom theme
 * @example StyledTableCellWrapped = withStyles(tableCellStyles, { withTheme: true })(DefaultStyledTableCell)
 */

const StyledTableCellWrapped = withStyles(tableCellStyles)(TableCell);
// eslint-disable-next-line import/prefer-default-export
export const StyledTableCell = styled(StyledTableCellWrapped)``;
