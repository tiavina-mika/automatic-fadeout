import React, { useEffect } from "react";
import { useState } from "react";
import { AnimatePresence } from "framer-motion";

import FadeoutContainer from "./FadeoutContainer";
import "./styles.css";
import { createUseStyles } from "react-jss";
import clsx from "clsx";
import Dots from "./Dots";

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
  },
  top: {
    // transform: 'translateX(210px) translateY(-58px) rotate(42deg)',
    backgroundColor: 'yellow',
    postion: 'absolute',
    left: 10,
    top: 10,
    height: 100,
    // width: 15,
    // composes: 'flexRow alignCenter justifyCenter',
  },
  left: {
    // transform: 'translateX(210px) translateY(-58px) rotate(42deg)',
    backgroundColor: 'green',
    postion: 'absolute',
    left: 100,
    top: 10,
    height: 100,
    transform: 'translateX(-220px) rotate(42deg)'
    // width: 15,
    // composes: 'flexRow alignCenter justifyCenter',
  },

});

const top = [0, 1, 2, 3, 4, 5, 6, 7, 8];
const left = [0, 1, 2, 3, 4, 5, 6, 7, 8];
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
          {/* <FadeoutContainer
            text="DAY"
            className={clsx(classes.day, classes.main)}
          /> */}
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
        {!night && (
          <Dots
            data={top} 
            className={classes.top} 
            coeff={6} 
          />
        )}
        {night && (
          <Dots
            data={left} 
            className={classes.left} 
            coeff={6} 
            // startAnimation={startAnimation} 
          />
        )}
    </div>
  );
};

export default App;
