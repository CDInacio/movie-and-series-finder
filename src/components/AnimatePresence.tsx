import { motion, AnimatePresence as Animate, Variants } from "framer-motion";

interface Props {
  children: React.ReactNode;
}

export function AnimatePresence({ children }: Props) {
  const variants: Variants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  };

  return (
    <Animate>
      <motion.div
        className="w-full"
        variants={variants}
        initial="hidden"
        animate="visible"
        exit="hidden"
      >
        {children}
      </motion.div>
    </Animate>
  );
}
