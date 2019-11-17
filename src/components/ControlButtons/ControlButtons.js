import React from "react";
import { withStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import styles from "./styles";

function ControlButtons({classes}) {
  return (
    <div className={classes.root}>
      
      <Button variant="contained" color="primary" className={[classes.button, classes.generate]}>
        Generate
      </Button>
      <Button variant="contained"  color="secondary" className={[classes.button, classes.reset]}>
        Reset
      </Button>
      <Button variant="contained"  className={[classes.button, classes.backup]}>
        Backup
      </Button>
      <Button variant="contained"  className={[classes.button, classes.load]}>
        Load
      </Button>
      
    </div>
  );
}
export default withStyles(styles)(ControlButtons);
