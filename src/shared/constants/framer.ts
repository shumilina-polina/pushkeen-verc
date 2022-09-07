import { Variants } from "framer-motion";

export const titleVariants: Variants = {
  offscreen: {
    y: -90,
    opacity: 0,
  },
  onscreen: {
    y: 0,
    opacity: 1,
  },
};

export const viewPort: any = {
  once: false,
  amount: "some",
  margin: "-80px 0px -80px 0px",
};

export const CardVariants: Variants = {
  offscreen: {
    scale: 0.5,
    opacity: 0,
    x: -150,
  },
  onscreen: {
    scale: 1,
    opacity: 1,
    x: 0,
  },
};
export const cardViewPort: any = {
  once: true,
  amount: "some",
  margin: "-80px 0px -80px 0px",
};

export const buttonVariants: Variants = {
  offscreen: {
    opacity: 0,
    x: 50,
  },
  onscreen: {
    opacity: 1,
    x: 0,
  },
};
export const buttonViewPort: any = {
  once: false,
};
