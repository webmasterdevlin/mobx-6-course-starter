import React, { useState } from "react";
import TitleBar from "components/TitleBar";
import UpdateUiLabel from "components/UpdateUiLabel";

import {
  Box,
  Button,
  createStyles,
  Typography,
  useMediaQuery,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";
import FormSubmission from "components/FormSubmission";

const HeroesPage = () => {
  const loading = false;
  const heroes = [];

  const smallScreen = useMediaQuery("(max-width:600px)");
  const classes = useStyles();

  /*local state*/
  const [counter, setCounter] = useState("0");

  return (
    <div>
      <TitleBar title={"Super HeroesPage"} />
      <FormSubmission />
      <UpdateUiLabel />
      <>
        {loading ? (
          <Typography variant={"h2"}>Loading.. Please wait..</Typography>
        ) : (
          heroes.map((h) => (
            <Box
              key={h.id}
              role={"card"}
              mb={2}
              display={"flex"}
              flexDirection={smallScreen ? "column" : "row"}
              justifyContent={"space-between"}
            >
              <Typography>
                <span>{`${h.firstName} ${h.lastName} is ${h.knownAs}`}</span>
                {counter === h.id && <span> - marked</span>}
              </Typography>
              <div>
                <Button
                  className={classes.button}
                  onClick={() => setCounter(h.id)}
                  variant={"contained"}
                  color={"default"}
                >
                  Mark
                </Button>{" "}
                <Button
                  className={classes.button}
                  variant={"contained"}
                  color={"secondary"}
                >
                  Remove
                </Button>{" "}
                <Button
                  className={classes.button}
                  variant={"outlined"}
                  color={"secondary"}
                >
                  DELETE in DB
                </Button>
              </div>
            </Box>
          ))
        )}
      </>
      {heroes.length === 0 && !loading && (
        <Button
          className={classes.button}
          variant={"contained"}
          color={"primary"}
        >
          Re-fetch
        </Button>
      )}
    </div>
  );
};

export default HeroesPage;

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
