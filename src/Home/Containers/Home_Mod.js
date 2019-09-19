import React from "react";
import PropTypes from "prop-types";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import { makeStyles } from "@material-ui/styles";
import { createMuiTheme } from "@material-ui/core";
import SideNav from "../../features/SideNavBar/Containers/SideNav";
/**
 * @desc App Layout Component
 * @param {object} props - Props from the parent for this stateless component
 * @return {ReactElement} Home component markup
 */

const theme = createMuiTheme({
  root: {
    flexGrow: 1
  },
  paper: {
    spacing: 25,
    textAlign: "center",
    palette: {
      text: "secondary"
    }
  }
});

const useStyles = makeStyles({
  paper: {
    padding: theme.spacing,
    color: theme.palette
  }
});

export default function Home(props) {
  const classes = useStyles();
  const { content } = props;
  return (
    <div className={classes.root}>
      <SideNav />
      <Grid container spacing={24}>
        <Grid item xs={12}>
          <Paper className={classes.paper}>{content}</Paper>
        </Grid>
      </Grid>
    </div>
  );
}

Home.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  content: PropTypes.object.isRequired
};
