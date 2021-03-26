import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";

import TimerTextField from "./TimerTextField";

const useStyles = makeStyles((theme) => {
  console.log(theme);
  return {
    ms: {
      fontWeight: 500,
    },
  };
});

export default function StopWatchContent() {
  const classes = useStyles();

  return (
    <Grid container spacing={1} alignItems="baseline">
      <Grid item>
        <TimerTextField defaultValue={"00"} unit="s" />
      </Grid>
      <Grid item>
        <Typography className={classes.ms} variant="h4">
          00
        </Typography>
      </Grid>
    </Grid>
  );
}
