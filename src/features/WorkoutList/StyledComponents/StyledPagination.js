import styled from 'styled-components';
import { StyledPagination as DefaultStyledPagination } from '../Components/StyledPagination';
import { withStyles} from '@material-ui/core/styles';

const customPaginationStyles = theme => ({
    root: {
      width: '100%',
      marginTop: theme.spacing.unit * 3,
    },
    table: {
      minWidth: 500,
    },
    tableWrapper: {
      overflowX: 'auto',
    },
  });

const StyledPaginationWrapped = withStyles(customPaginationStyles)(DefaultStyledPagination)
export const StyledPagination = styled(StyledPaginationWrapped)`
`;