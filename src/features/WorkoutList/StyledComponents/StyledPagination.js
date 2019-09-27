import styled from "styled-components";
import { withStyles } from "@material-ui/core/styles";
import { createMuiTheme } from "@material-ui/core";
// eslint-disable-next-line import/extensions
import { StyledPagination as DefaultStyledPagination } from "../Components/StyledPagination";

const theme = createMuiTheme({
  overrides: {
    MuiGridItem: {
      root: {
        paddingTop: 0
      }
    }
  }
});

const customPaginationStyles = () => ({
  root: {
    width: "100%",
    marginTop: theme.spacing.unit * 3
  },
  table: {
    minWidth: 500
  },
  tableWrapper: {
    overflowX: "auto"
  }
});

const StyledPaginationWrapped = withStyles(customPaginationStyles)(
  DefaultStyledPagination
);

// eslint-disable-next-line import/prefer-default-export
export const StyledPagination = styled(StyledPaginationWrapped)`
  .customDefaultColumnStyle {
    width: "2px";
    align: "left";
  }

  customActivityColumnStyle {
    width: "3px";
  }
`;
