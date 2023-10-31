import productivity from '../assets/images/illustration-stay-productive.png';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import arrow from '../assets/images/icon-arrow.svg';
import { useEffect } from 'react';
function Productive() {
  const [inViewRef, inView] = useInView({ triggerOnce: true });
  const [inViewRef2, inView2] = useInView({ triggerOnce: true });
  const mainController = useAnimation();
  const mainController2 = useAnimation();

  useEffect(() => {
    if (inView) mainController.start('visible');
    if (inView2) mainController2.start('visible');
  }, [mainController, inView, inView2, mainController2]);

  return (
    <section className=" max-content flex items-center justify-around gap-10 py-10 max-lg:flex-col max-lg:justify-center max-min:pb-0 lg:px-10">
      <motion.div
        variants={{
          hidden: { opacity: 0, x: -100 },
          visible: { opacity: 1, x: 0 },
        }}
        initial="hidden"
        transition={{ duration: 0.5, delay: 0.5 }}
        animate={mainController}
        className=""
      >
        <img
          ref={inViewRef}
          src={productivity}
          width={600}
          height={600}
          alt="Fylo Productivity"
          loading="lazy"
          className="w-auto"
        />
      </motion.div>
      <motion.div
        ref={inViewRef2}
        variants={{
          hidden: { opacity: 0, y: 30 },
          visible: { opacity: 1, y: 0 },
        }}
        initial="hidden"
        transition={{ duration: 0.5, delay: 0.5 }}
        animate={mainController2}
        className="flex max-w-[600px] flex-col items-start gap-4 sm:w-fit"
      >
        <h1 className="sub-title font-semibold leading-tight">
          Stay productive,
          <br /> wherever you are
        </h1>
        <p className="desc-pro">
          Never let location be an issue when accessing your files. Fylo has you
          covered for all of your file storage needs.
        </p>
        <p className="desc-pro">
          Securely share files and folders with friends, family and colleagues
          for live collaboration. No email attachments required.
        </p>
        <a
          href="#"
          className="flex items-center gap-3 border-b-2 border-cyan text-cyan"
        >
          See how Fylo works
          <img
            src={arrow}
            width={19}
            height={19}
            alt="Fylo Arrow"
            loading="lazy"
          />
        </a>
      </motion.div>
    </section>
  );
}

export default Productive;
