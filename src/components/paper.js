import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";

//Paper Custom Style Start //
const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexWrap: "wrap",
    "& > *": {
      margin: theme.spacing(1),
      width: theme.spacing(30),
      height: theme.spacing(10),
    },
  },
}));
//Paper Custom Style End //

export default function SimplePaper() {
  const classes = useStyles();
  const [over, setOver] = useState(3);
  return (
    <div className={classes.root}>
      <Paper
        onMouseOver={() => setOver(20)}
        onMouseOut={() => setOver(3)}
        elevation={over}
      >
        <Typography variant="overline">Paper-1</Typography>
      </Paper>
      <Paper
        onMouseOver={() => setOver(20)}
        onMouseOut={() => setOver(3)}
        elevation={over}
      >
        <Typography variant="overline">Paper-2</Typography>
      </Paper>
    </div>
  );
}
