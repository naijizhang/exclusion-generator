import React from "react";
import { withStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";
import ConditionCard from "../ConditionCard";
import styles from "./styles";

function ConditionInput({ classes }) {
  const conditionList = [{ condition: "123", note: "abc" },{ condition: "456", note: "abc" }];
  return (
    <div className={classes.root}>
      <TextField
        id="condition-input"
        label="Condition"
        multiline
        //rows="4"
        //defaultValue="Default Value"
        className={classes.conditionInput}
        margin="normal"
        variant="outlined"
      />
      <TextField
        id="note-input"
        label="Note"
        multiline
        rows="2"
        //defaultValue=""
        className={classes.noteInput}
        margin="normal"
        variant="outlined"
      />
      <Button variant="contained" color="primary" className={classes.addButton}>
        ADD
      </Button>
      <Grid container spacing={1} className={classes.gridContainer}>
        {conditionList.map(item => (
          <ConditionCard condition={item.condition} note={item.note} />
        ))}
      </Grid>
    </div>
  );
}

export default withStyles(styles)(ConditionInput);
