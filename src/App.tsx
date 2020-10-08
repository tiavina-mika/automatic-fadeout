import React, { useEffect } from "react";
import { useState } from "react";
import { AnimatePresence } from "framer-motion";

import FadeoutContainer from "./FadeoutContainer";
import "./styles.css";
import { createUseStyles } from "react-jss";
import clsx from "clsx";

const useStyles = createUseStyles({
  root: {
    composes: 'flexRow stretchSelf flex1 alignCenter justifyCenter',
    // backgroundColor: 'yellow',
    height: '100vh',
    // width: '100%'
  },
  main: {
    width: 600,
    height: 400,
    composes: 'flexRow alignCenter justifyCenter',
  },
  day: {
    // backgroundColor: "red"
  },
  night: {
    // backgroundColor: "green"
  }
});
const App = () => {
  const classes = useStyles();
  const [night, setNight] = useState(false);

  useEffect(() => {
    const timeoutId = setInterval(
      () => {
        setNight((prev) => !prev);
      },
      night ? 4000 : 8000
    );
    return () => clearInterval(timeoutId);
  }, [night]);

  return (
    <div className={classes.root}>
      <AnimatePresence exitBeforeEnter>
        {!night && (
          <FadeoutContainer
            text="DAY"
            className={clsx(classes.day, classes.main)}
          />
        )}
        {night && (
          <FadeoutContainer
            text="NIGHT"
            className={clsx(classes.night, classes.main)}
          />
        )}
      </AnimatePresence>
    </div>
  );
};

export default App;
