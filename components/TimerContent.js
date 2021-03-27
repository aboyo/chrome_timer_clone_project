import { useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Divider } from "@material-ui/core";
import Grid from "@material-ui/core/Grid";

import TimerTextField from "./TimerTextField";

import { mState, sState } from "../utils/stateStore";
import { useRecoilState } from "recoil";

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
  const [min, setMin] = useRecoilState(mState);
  const [sec, setSec] = useRecoilState(sState);

  return (
    <div className={classes.root}>
      <Grid container spacing={1}>
        <Grid item>
          <TimerTextField
            time={min}
            unit="m"
            onChange={(value) => {
              console.log("min onChange:", value);
              setMin(value);
            }}
          />
        </Grid>
        <Grid item>
          <TimerTextField
            time={sec}
            unit="s"
            onChange={(value) => {
              console.log("sec onChange:", value);
              setSec(value);
            }}
          />
        </Grid>
      </Grid>
      <Divider />
    </div>
  );
}
