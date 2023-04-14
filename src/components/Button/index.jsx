import React from 'react'
import './Button.scss'
import { motion } from 'framer-motion'

const Button = ({state, setState}) => {

    const toggleSwitch = () => setState(!state);
  return (
    <div className="switch" data-ison={state} onClick={toggleSwitch}>
      <motion.div className="handle" layout transition={spring} />
    </div>
  )
}

const spring = {
    type: "spring",
    stiffness: 700,
    damping: 30
  };

export default Button
