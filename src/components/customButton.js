import React from "react";

import Button from "@material-ui/core/Button";
import ArrowRightIcon from "@material-ui/icons/ArrowRight";

//Button Customization Start //
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  root: {
    background: "linear-gradient(45deg, #FE6B8B, #FF8E53)",
    border: 0,
    borderRadius: 5,
    margin: 10,
    color: "#fff",
    padding: "15px 30px",
  },
});
//Button Customization Start //

function ButtonStyled({ title }) {
  const classes = useStyles();
  return (
    <Button className={classes.root}>
      {title}
      <ArrowRightIcon />
    </Button>
  );
}

export default ButtonStyled;
