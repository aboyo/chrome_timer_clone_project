import { makeStyles } from "@material-ui/core/styles";
import { Divider } from "@material-ui/core";
import Grid from "@material-ui/core/Grid";

import TimerTextField from "./TimerTextField";

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

  return (
    <div className={classes.root}>
      <Grid container spacing={1}>
        <Grid item>
          <TimerTextField defaultValue={44} onChange={() => {}} unit="m" />
        </Grid>
        <Grid item>
          <TimerTextField defaultValue={55} onChange={() => {}} unit="s" />
        </Grid>
      </Grid>
      <Divider />
    </div>
  );
}
