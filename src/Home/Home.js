import React from "react";
import Grid from "@material-ui/core/Grid";
/**
 * @desc App Layout Component
 * @param {object} props - Props from the parent for this stateless component
 * @return {ReactElement} Home component markup
 */

function Home(props) {
  return (
    <div>
      <Grid>{props.children}</Grid>
    </div>
  );
}

export default Home;
