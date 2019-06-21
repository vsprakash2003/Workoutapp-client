import styled from 'styled-components';
import { StyledTable as DefaultStyledTable } from '../Components/StyledTable';
import { withStyles} from '@material-ui/core/styles';

/**
 * @desc create custom theme for wrapping the StyledTable component
 * @example tableStyles = theme => ({ # styles go here })
 */

const tableStyles = theme => ({
    root: {
      flexShrink: 0,
      color: theme.palette.text.secondary,
      marginLeft: theme.spacing.unit * 2.5,
    },
  });

/**
 * @desc wrap the component inside withStyles high order component and apply the custom theme 
 * @example tyledTableWrapped = withStyles(tableStyles, { withTheme: true })(DefaultStyledTable)
 */

const StyledTableWrapped = withStyles(tableStyles, { withTheme: true })(DefaultStyledTable)
export const StyledTable = styled(StyledTableWrapped)`
`;