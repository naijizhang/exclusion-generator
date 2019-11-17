import React from "react";
import { withStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import styles from "./styles";

function ConditionCard({ classes, condition, note }) {
  return (
    <Grid item className={classes.gridItem}>
      <Card className={classes.card}>
        <CardContent>
          <Typography
            // className={classes.title}
            color="textPrimary"
            gutterBottom
          >
            {condition}
          </Typography>
          <Typography color="textSecondary">{note}</Typography>
        </CardContent>
      </Card>
    </Grid>
  );
}

export default withStyles(styles)(ConditionCard);
