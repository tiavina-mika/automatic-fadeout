import React, { useEffect } from "react";
import { useState } from "react";
import { AnimatePresence } from "framer-motion";


import AnimatedText from './AnimatedText';
import "./styles.css";

const App = () => {
  const [night, setNight] = useState(false);

  useEffect(() => {
    const timeoutId = setInterval(() => {
      setNight(prev => !prev);
    }, night ? 4000 : 8000);
    return () => clearInterval(timeoutId);
  }, [night])

  return (
    <div>
      <AnimatePresence exitBeforeEnter>
        {!night && <AnimatedText text="DAY" />}
        {night && <AnimatedText text="NIGHT" />}
      </AnimatePresence>
    </div>
  );
}

export default App;