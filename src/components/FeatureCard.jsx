import { useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

function FeatureCard({ feat, index }) {
  const mainController = useAnimation();
  const [inViewRef, inView] = useInView({ triggerOnce: true });

  useEffect(() => {
    if (inView) mainController.start('visible');
  }, [mainController, inView]);
  return (
    <motion.div
      variants={{
        hidden: { y: 100, opacity: 0 },
        visible: { y: 0, opacity: 1 },
      }}
      transition={{ duration: 0.4, delay: index * 0.15 }}
      initial="hidden"
      animate={mainController}
      ref={inViewRef}
      className="card  m-5 flex h-[250px] w-[350px] flex-col items-center justify-center gap-2 max-min:mx-0 max-min:w-[300px] max-ssm:w-full "
    >
      <img
        src={feat.img}
        alt="feature"
        loading="lazy"
        className="mb-3"
        width={80}
        height={80}
      />
      <h2 className=" text-[20px] font-semibold leading-8 text-white max-ssm:w-full max-ssm:text-center max-ssm:text-[17px]">
        {feat.title}
      </h2>
      <p className="w-[360px]  text-center text-[14px] text-white max-min:w-[300px] max-ssm:w-[98%] max-ssm:text-[12px]">
        {feat.desc}
      </p>
    </motion.div>
  );
}

export default FeatureCard;
