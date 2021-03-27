import { useEffect, useState } from "react";

import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";

import { makeStyles } from "@material-ui/core/styles";

import TabPanel from "../components/TabPanel";
import { Divider } from "@material-ui/core";

import { timeState, mState, sState /*actionState*/ } from "../utils/stateStore";
import { useRecoilState } from "recoil";

const useStyles = makeStyles((theme) => {
  return {
    root: {
      minWidth: 275,
      "&> .MuiCardContent-root": {
        padding: 0,
      },
    },
    button: {
      "& .MuiButton-label": {
        color: theme.palette.primary.main,
      },
      "&:hover": {
        background: theme.palette.primary.main,
        "& .MuiButton-label": {
          color: theme.palette.getContrastText(theme.palette.primary.main),
        },
      },
    },
    action: {
      padding: theme.spacing(2),
    },
  };
});

export default function TimerCard() {
  const classes = useStyles();
  const [time, setTime] = useRecoilState(timeState);
  // const [action, setAction] = useRecoilState(actionState);

  const [min, setMin] = useRecoilState(mState);
  const [sec, setSec] = useRecoilState(sState);

  const [play, setPlay] = useState(false);
  const [intervalObj, setIntervalObj] = useState();

  useEffect(() => {
    if (time > 0 && !play) {
      setPlay(true);
      let interval = setInterval(tick, 1000);
      setIntervalObj(interval);
    }
    setMin(Math.floor(time / 60));
    setSec(time % 60);
  }, [time]);

  function tick() {
    setTime((prevTotalsecs) => {
      if (prevTotalsecs === 0) {
        clearInterval(intervalObj);
        return prevTotalsecs;
      } else {
        return prevTotalsecs - 1;
      }
    });
  }

  return (
    <Card className={classes.root} variant="outlined">
      <CardContent>
        <TabPanel />
      </CardContent>
      <Divider />
      <CardActions classes={{ spacing: classes.action }}>
        <Grid container spacing={2}>
          <Grid item>
            <Button
              className={classes.button}
              size="small"
              variant="outlined"
              onClick={() => {
                // set total time
                setTime(Number(min) * 60 + Number(sec));
              }}
            >
              START
            </Button>
          </Grid>
          <Grid item>
            <Button
              className={classes.button}
              size="small"
              variant="outlined"
              onClick={() => {}}
            >
              RESET
            </Button>
          </Grid>
        </Grid>
      </CardActions>
    </Card>
  );
}
