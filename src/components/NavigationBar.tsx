import React from "react";
import { useHistory } from "react-router-dom";
import { AppBar, Box, Button, createStyles, Toolbar } from "@material-ui/core";
import TotalOfCharacters from "./TotalOfCharacters";
import { makeStyles } from "@material-ui/styles";

const NavigationBar = () => {

  const history = useHistory();
  const classes = useStyles();
  return (
    <AppBar position="static" style={{ marginBottom: "2rem" }}>
      <Toolbar>
        <Box>
          <Button
            className={classes.button}
            onClick={() => history.push("/")}
            color="inherit"
          >
            Home
          </Button>
        </Box>
        <Box>
          <Button
            className={classes.button}
            onClick={() => history.push("/anti-heroes")}
            color="inherit"
          >
            Anti Heroes
          </Button>
          <TotalOfCharacters
            collection={[]}
            role={"total-anti-heroes"}
          />
        </Box>
        <Box>
          <Button
            className={classes.button}
            onClick={() => history.push("/heroes")}
            color="inherit"
          >
            Heroes
          </Button>
          <TotalOfCharacters
            collection={[]}
            role={"total-heroes"}
          />
        </Box>
        <Box>
          <Button
            className={classes.button}
            onClick={() => history.push("/villains")}
            color="inherit"
          >
            Villains
          </Button>
          <TotalOfCharacters
            collection={[]}
            role={"total-villains"}
          />
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default NavigationBar;

const useStyles = makeStyles(() =>
  createStyles({
    button: {
      margin: "0 0.5rem",
      "&:focus": {
        outline: "none",
      },
    },
  })
);
