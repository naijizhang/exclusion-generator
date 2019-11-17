import React from "react";
import ConditionInput from "../../components/ConditionInput";
import ResultDisplay from "../../components/ResultDisplay";
import ControlButtons from "../../components/ControlButtons";
const Home = ({ classes }) => {
  return (
    <div className={classes.root}>
      <div className={classes.leftColumn}>
        <ConditionInput />
      </div>
      <div>
      <div className={classes.midColumn}>
        <ControlButtons />
      </div>
      </div>
      <div className={classes.rightColumn}>
        <ResultDisplay />
      </div>
    </div>
  );
};

export default Home;
