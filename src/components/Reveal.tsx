import React, { useEffect, useRef } from "react";
import { useInView, motion, useAnimation } from "framer-motion";

interface Props {
  children: JSX.Element;
  width?: "fit-content" | "100%";
}

export const Reveal = ({ children, width = "fit-content" }) => {
  const ref = useRef(null);
  const isInview = useInView(ref, { once: true });

  const mainControls = useAnimation();
  const slideControls = useAnimation();

  useEffect(() => {
    if (isInview) {
      mainControls.start("visible");
      slideControls.start("visible");
    }
  }, [isInview]);

  return (
    <div ref={ref} style={{ position: "relative", width, overflow: "hidden" , zIndex: 2}}>
      <motion.div
        variants={{
          hidden: { opacity: 0, y: 75 },
          visible: { opacity: 1, y: 0 },
        }}
        initial="hidden"
        animate={mainControls}
        transition={{ duration: 1, delay: 0.4 }}
      >
        {children}
      </motion.div>
      <motion.div
      variants={{
        hidden: {left: 0},
        visible: { left: '100%'},
      }}
      initial= 'hidden'
      animate={slideControls}
      transition={{
        duration: 0.5,
        ease: 'easeIn'
      }}
      style={{
        position: 'absolute',
        top: 4,
        bottom: 4,
        left: 0,
        right: 0,
        background: '#4c00c7',
        zIndex: 20,
      }}
      />
    </div>
  );
};

export const Reveal2 = ({ children, width = "fit-content" }) => {
  const ref = useRef(null);
  const isInview = useInView(ref, { once: true });

  const mainControls = useAnimation();
  const slideControls = useAnimation();

  useEffect(() => {
    if (isInview) {
      mainControls.start("visible");
      slideControls.start("visible");
    }
  }, [isInview]);

  return (
    <div ref={ref} style={{ position: "relative", width, overflow: "hidden" , zIndex: 2}}>
      <motion.div
        variants={{
          hidden: { opacity: 0, y: 75 },
          visible: { opacity: 1, y: 0 },
        }}
        initial="hidden"
        animate={mainControls}
        transition={{ duration: 1, delay: 0.5 }}
      >
        {children}
      </motion.div>
      <motion.div
      variants={{
        hidden: {left: 0},
        visible: { left: '100%'},
      }}
      initial= 'hidden'
      animate={slideControls}
      transition={{
        duration: 0.5,
        delay: 0.2,
        ease: 'easeIn'
      }}
      style={{
        position: 'absolute',
        top: 4,
        bottom: 4,
        left: 0,
        right: 0,
        background: '#fff',
        zIndex: 20,
      }}
      />
    </div>
  );
};