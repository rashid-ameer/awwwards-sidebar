import { menuVariants, slideInVariants } from "../anim";
import { LINKS, SOCIAL_LINKS } from "./data";
import styles from "./style.module.scss";
import { motion } from "framer-motion";

function Nav() {
  return (
    <nav className={styles.nav}>
      <ul className={styles.body}>
        {LINKS.map((link, index) => (
          <motion.li key={link.title}>
            <motion.div
              variants={menuVariants}
              initial="initial"
              animate={"animate"}
              exit={"exit"}
              className={styles.link}
              custom={index}>
              {link.title}
            </motion.div>
          </motion.li>
        ))}
      </ul>

      <motion.ul className={styles.footer}>
        {SOCIAL_LINKS.map((link, index) => (
          <motion.li
            key={link.title}
            variants={slideInVariants}
            initial="initial"
            animate="animate"
            exit="exit"
            custom={index}>
            <a href={link.href}>{link.title}</a>
          </motion.li>
        ))}
      </motion.ul>
    </nav>
  );
}
export default Nav;
