"use client";
import { useState } from "react";
import Button from "./button";
import styles from "./style.module.scss";
import { AnimatePresence, motion } from "framer-motion";
import Nav from "./nav";
import { sizeVariants } from "./anim";

function Header() {
  const [active, setActive] = useState(false);
  return (
    <header className={styles.header}>
      <motion.div
        initial="closed"
        variants={sizeVariants}
        animate={active ? "open" : "closed"}
        className={styles.menu}>
        <AnimatePresence>{active && <Nav key="nav" />}</AnimatePresence>
      </motion.div>

      <Button
        active={active}
        setActive={setActive}
      />
    </header>
  );
}
export default Header;
