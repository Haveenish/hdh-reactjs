import { Grid, makeStyles } from "@material-ui/core";
import React from "react";

interface Props {
  children: React.ReactNode;
}

const useStyles = makeStyles({
  root: {
    height: "100vh",
    backgroundColor: "lightgray",
  },
  container: {
    margin: "16px",
    padding: "24px 50px 50px",
    backgroundColor: "white",
  },
});

const AppContainer = (props: Props) => {
  const classes = useStyles();

  return (
    <Grid container justify="center" className={classes.root}>
      <Grid item md={6} sm={8} xs={12} className={classes.container}>
        {props.children}
      </Grid>
    </Grid>
  );
};

export default AppContainer;
