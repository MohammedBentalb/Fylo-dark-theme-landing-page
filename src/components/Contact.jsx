import { motion, useAnimation } from 'framer-motion';
import { useEffect } from 'react';
import { useInView } from 'react-intersection-observer';

function Contact() {
  const mainController = useAnimation();
  const [inViewRef, inView] = useInView({ triggerOnce: true });

  useEffect(() => {
    if (inView) mainController.start('visible');
  }, [mainController, inView]);

  return (
    <motion.section
      variants={{
        hidden: { scale: 0.3, y: 100 },
        visible: { scale: 1, y: 0 },
      }}
      initial="hidden"
      transition={{ duration: 0.5 }}
      animate={mainController}
      ref={inViewRef}
      className=" max-content relative flex items-center justify-center py-24"
    >
      <div className="email flex max-w-[900px] flex-col items-center justify-center gap-6 rounded-lg bg-signBg px-4 py-10 shadow-xl max-lg:w-[80%] max-min:w-[300px] max-min:gap-3 max-ssm:w-full">
        <h1 className="sub-title font-semibold max-ssm:text-[22px]">
          Get early access today
        </h1>
        <p className="w-[70%] text-center text-[15px] max-sm:w-[90%] max-min:text-[14px] max-ssm:w-full">
          It only takes a minute to sign up and our free starter tier is
          extremely generous. If you have any questions, our support team would
          be happy to help you.
        </p>
        <form
          action="POST"
          className="flex items-center justify-center gap-3 max-lg:flex-wrap lg:gap-10 "
        >
          <input
            type="email"
            name="email"
            id="email"
            required
            className="h-[50px] w-[500px] min-w-[270px] rounded-full px-4 py-2 max-lg:w-min max-sm:h-[40px] max-sm:w-[90%]"
            placeholder="example@Fylo.com"
          />
          <input
            type="submit"
            value="Get started for free"
            className="email-btn"
          />
        </form>
      </div>
    </motion.section>
  );
}

export default Contact;
