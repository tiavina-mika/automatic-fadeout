import React, { FC } from "react";
import { motion } from "framer-motion";
import { createUseStyles } from "react-jss";

const variants = {
  show: {
    opacity: 1,
    transition: {
      duration: 1,
      ease: [0.83, 0, 0.17, 1]
    }
  },
  hidden: {
    opacity: 0,
    transition: {
      ease: [0.83, 0, 0.17, 1]
    }
  },
}
const useStyles = createUseStyles({
  block: {
    fontSize: 32,
    fontFamily: 'sans-serif',
    letterSpacing: 10,
  }
})

type Props = { text: string };
const Block: FC<Props> = ({ text }) => {
  const classes = useStyles();
  return (
      <motion.span
        variants={variants}
        initial="hidden"
        animate="show"
        exit="hidden"
        transition={{ duration: 1 }}
        className={classes.block}
        key={text}
        // key="logoText"
      >
        {text}
      </motion.span>
    )
}

export default Block;