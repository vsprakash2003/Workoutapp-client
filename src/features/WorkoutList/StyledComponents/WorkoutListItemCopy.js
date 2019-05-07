import styled from 'styled-components';
import { WorkoutListItem as DefaultWorkoutListItem } from '../Components/WorkoutListItem';
import { withStyles} from '@material-ui/core/styles';

const tableStyles = theme => ({
    root: {
      flexShrink: 0,
      color: theme.palette.text.secondary,
      marginLeft: theme.spacing.unit * 2.5,
    },
  });

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

const StyledTable = withStyles(tableStyles)(DefaultWorkoutListItem)
const StyledPagination = withStyles(customPaginationStyles)(DefaultWorkoutListItem)

export const WorkoutListItem = styled(StyledTable, StyledPagination)`
`;
