/* eslint-disable import/prefer-default-export */

import { createMuiTheme } from "@material-ui/core";

export const theme = createMuiTheme({
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
