import { makeStyles } from "@material-ui/core/styles";
import { Divider } from "@material-ui/core";
import Grid from "@material-ui/core/Grid";

import TimerTextField from "./TimerTextField";

import { /*timeState,*/ splitTimeState } from "../utils/stateStore";
import { /*RecoilRoot, useRecoilState,*/ useRecoilValue } from "recoil";

const useStyles = makeStyles((theme) => {
  return {
    root: {
      display: "inline-block",
      "&:hover": {
        "&> .MuiDivider-root": {
          background: theme.palette.primary.main,
        },
      },
    },
  };
});

export default function TimerContent() {
  const classes = useStyles();
  // const [time, setTime] = useRecoilState(timeState);
  const splitTime = useRecoilValue(splitTimeState);
  console.log(splitTime);

  return (
    <div className={classes.root}>
      <Grid container spacing={1}>
        <Grid item>
          <TimerTextField time={splitTime.minute} unit="m" />
        </Grid>
        <Grid item>
          <TimerTextField time={splitTime.second} unit="s" />
        </Grid>
      </Grid>
      <Divider />
    </div>
  );
}
