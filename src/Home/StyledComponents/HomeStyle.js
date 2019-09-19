/* eslint-disable import/prefer-default-export */
import { makeStyles } from "@material-ui/styles";
import { theme } from "./HomeTheme";

export const useStyles = makeStyles({
  paper: {
    padding: theme.spacing,
    color: theme.palette
  }
});
