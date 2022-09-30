import { motion } from "framer-motion"
import React from "react"
import styled from "styled-components"
import { Facebook, Github, LinkedIn, WhatsApp } from "../components/AllSvgs"
import { darkTheme } from "../components/Themes"

const Icons = styled(motion.div)`
  display: flex;
  flex-direction: column;
  align-items: center;
  z-index: 999;
  position: fixed;
  bottom: 0;
  left: 2rem;

  & > * > * {
    color: inherit;
  }

  & > *:not(:last-child) {
    margin: 0.5rem 0;
  }
`

const Line = styled.span`
  width: 2px;
  height: 8rem;
  background-color: ${(props) =>
    props.themecolor === "dark"
      ? props.theme.text
      : props.themecolor === "light"
      ? props.theme.text
      : ""};
`

function SocialIcons({ themecolor }) {
  return (
    <Icons
      initial={{
        y: 550,
        transition: { type: "spring", duration: 1.5, delay: 1 },
      }}
      animate={{
        y: 0,
        transition: { type: "spring", duration: 1.5, delay: 1 },
      }}
    >
      <motion.div
        initial={{ transform: "scale(0)" }}
        animate={{ scale: [0, 1, 1.5, 1] }}
        transitionion={{ type: "spring", duration: 1, delay: 1.8 }}
      >
        <a
          target="_blank"
          href="https://github.com/ziad-amer-1"
          rel="noreferrer"
        >
          <Github
            width={25}
            height={25}
            fill={themecolor === "dark" ? darkTheme.text : darkTheme.body}
          />
        </a>
      </motion.div>
      <motion.div
        initial={{ transform: "scale(0)" }}
        animate={{ scale: [0, 1, 1.5, 1] }}
        transition={{ type: "spring", duration: 1, delay: 2.2 }}
      >
        <a
          target="_blank"
          href="https://www.linkedin.com/in/ziad-amer-278394252/"
          rel="noreferrer"
        >
          <LinkedIn
            width={25}
            height={25}
            fill={themecolor === "dark" ? darkTheme.text : darkTheme.body}
          />
        </a>
      </motion.div>
      <motion.div
        initial={{ transform: "scale(0)" }}
        animate={{ scale: [0, 1, 1.5, 1] }}
        transition={{ type: "spring", duration: 1, delay: 2.4 }}
      >
        <a target="_blank" href="https://wa.me/+201093694586" rel="noreferrer">
          <WhatsApp
            width={25}
            height={25}
            fill={themecolor === "dark" ? darkTheme.text : darkTheme.body}
          />
        </a>
      </motion.div>

      <Line themecolor={themecolor} />
    </Icons>
  )
}

export default SocialIcons
