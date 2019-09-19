import React from "react";
import PropTypes from "prop-types";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import SideNav from "../../features/SideNavBar/Containers/SideNav";
import { useStyles } from "../StyledComponents/HomeStyle";
/**
 * @desc App Layout Component
 * @param {object} props - Props from the parent for this stateless component
 * @return {ReactElement} Home component markup
 */

export default function HomePage(props) {
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

HomePage.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  content: PropTypes.object.isRequired
};
