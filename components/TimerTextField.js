import { useState } from "react";
import InputAdornment from "@material-ui/core/InputAdornment";
import InputBase from "@material-ui/core/InputBase";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => {
  return {
    inputBase: {
      alignItems: "baseline",
    },
    input: {
      width: "100%",
      ...theme.typography.h2,
      fontWeight: 400,
    },
    disabled: {
      color: "black",
    },
  };
});

export default function TimerTextField(props) {
  const { /*defaultValue = "00",*/ unit = "s", onChange = null, time } = props;
  const classes = useStyles();
  const [value, setValue] = useState(0);

  return (
    <InputBase
      // defaultValue={defaultValue}
      value={time}
      className={classes.inputBase}
      classes={{
        input: classes.input,
        disabled: classes.disabled,
      }}
      onChange={(event) => {
        setValue(25 + event.target.value.length * 35);
        onChange(event.target.value);
      }}
      disabled={onChange ? false : true}
      endAdornment={
        <InputAdornment position="end">
          <Typography className={classes.disabled} variant="h5">
            {unit}
          </Typography>
        </InputAdornment>
      }
      style={{ minWidth: 96, width: value }}
    />
  );
}
