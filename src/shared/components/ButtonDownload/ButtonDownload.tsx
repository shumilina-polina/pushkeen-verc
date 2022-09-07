import s from "./ButtonDownload.module.scss";
import { motion } from "framer-motion";
import { buttonVariants, buttonViewPort } from "shared/constants/framer";

export const ButtonDownload = ({ text }: { text: string }) => {
  return (
    <motion.button
      className={s.button}
      transition={{ duration: 0.3 }}
      initial="offscreen"
      whileInView="onscreen"
      viewport={buttonViewPort}
      variants={buttonVariants}
    >
      {text}
    </motion.button>
  );
};
