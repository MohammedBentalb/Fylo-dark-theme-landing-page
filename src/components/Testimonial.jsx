import { motion, useAnimation } from 'framer-motion';
import { useEffect } from 'react';
import { useInView } from 'react-intersection-observer';

function Testimonial({ data }) {
  const mainController = useAnimation();
  const [inViewRef, inView] = useInView({ triggerOnce: true });

  useEffect(() => {
    if (inView) mainController.start('visible');
  }, [mainController, inView]);

  return (
    <motion.div
      variants={{
        hidden: { opacity: 0, y: 100 },
        visible: { opacity: 1, y: 0 },
      }}
      initial="hidden"
      transition={{ duration: 0.5 }}
      animate={mainController}
      ref={inViewRef}
      className=" relative flex w-[350px] flex-col items-center justify-center gap-5 rounded-sm bg-testimonial py-8  max-min:w-[300px] max-min:py-6"
    >
      <p className="w-[36ch] text-[14px] max-min:w-[35ch]">
        {data.message}
      </p>
      <div className="flex w-[81%]  items-center gap-3 max-min:w-[91%]">
        <img
          src={data.img}
          alt="fylo user"
          width={25}
          height={25}
          className="rounded-full"
        />
        <div className="flex flex-col  justify-start">
          <h4 className="text-[10px] font-semibold">{data.name}</h4>
          <p className="text-[10px]">{data.job}</p>
        </div>
      </div>
    </motion.div>
  );
}

export default Testimonial;
