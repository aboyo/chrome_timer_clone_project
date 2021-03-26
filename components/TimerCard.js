// import { useEffect } from "react";

import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";

import { makeStyles } from "@material-ui/core/styles";

import TabPanel from "../components/TabPanel";
import { Divider } from "@material-ui/core";

import { timeState } from "../utils/stateStore";
import { /*RecoilRoot,*/ useRecoilState } from "recoil";

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
  console.log(time);

  function testTime() {
    setTime((prev) => prev - 1);
  }
  return (
    // <RecoilRoot>
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
                setTime(320);
                setInterval(testTime, 1000);
              }}
            >
              START+1
            </Button>
          </Grid>
          <Grid item>
            <Button
              className={classes.button}
              size="small"
              variant="outlined"
              onClick={() => {}}
            >
              RESET-1
            </Button>
          </Grid>
        </Grid>
      </CardActions>
    </Card>
    // </RecoilRoot>
  );
}
