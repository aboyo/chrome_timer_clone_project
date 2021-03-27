import { makeStyles } from "@material-ui/core/styles";
import { Divider } from "@material-ui/core";
import Grid from "@material-ui/core/Grid";

import TimerTextField from "./TimerTextField";

import {
  /*timeState,*/ splitTimeState,
  minState,
  secState,
} from "../utils/stateStore";
import { /*RecoilRoot,*/ useRecoilState, useRecoilValue } from "recoil";

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
  const [min, setMin] = useRecoilState(minState);
  const [sec, setSec] = useRecoilState(secState);

  console.log(min, sec);

  return (
    <div className={classes.root}>
      <Grid container spacing={1}>
        <Grid item>
          <TimerTextField
            time={min}
            unit="m"
            onChange={(value) => {
              setMin(value);
            }}
          />
        </Grid>
        <Grid item>
          <TimerTextField
            time={sec}
            unit="s"
            onChange={(value) => {
              setSec(value);
            }}
          />
        </Grid>
      </Grid>
      <Divider />
    </div>
  );
}
