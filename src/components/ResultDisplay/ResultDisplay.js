import React from "react";
import TextField from "@material-ui/core/TextField";
import { withStyles } from "@material-ui/core/styles";
import styles from "./styles";

function ResultDisplay({ classes }) {
  const result = "result";
  return (
    <div className={classes.root}>
      <TextField
        id="outlined-multiline-static"
        label="Result"
        multiline
        rows="10"
        value={result}
        className={classes.resultField}
        variant="outlined"
      />
    </div>
  );
}
export default withStyles(styles)(ResultDisplay);
