import { motion } from 'framer-motion';
import illustration from '../assets/images/illustration-intro.png';
import pcWave from '../assets/images/bg-curvy-desktop.svg';
import mobileWave from '../assets/images/bg-curvy-mobile.svg';
function HeroSection() {
  const duration = 0.3;
  return (
    <motion.section className=" relative flex flex-col items-center justify-center bg-signBg  pt-12  max-min:pb-0 sm:pb-20">
      <div className="relative z-20 flex h-fit w-full flex-col items-center justify-center gap-8 py-8">
        <motion.img
          initial={{ opacity: 0, y: -50 }}
          animate={{
            opacity: 1,
            y: 0,
            transition: { duration: 0.7, delay: 0.3 },
          }}
          src={illustration}
          alt="Fylo hero image"
          width={700}
          height={700}
          className="max-min:w-[270px]"
        />
        <motion.h1
          variants={{
            hidden: { y: 50, opacity: 0 },
            visible: { y: 0, opacity: 1, transition: { duration } },
          }}
          initial="hidden"
          animate="visible"
          className="title w-[30ch] text-center font-raleway text-[42px] font-bold text-white"
        >
          All your files in one secure location, accessible anywhere.
        </motion.h1>
        <motion.p
          variants={{
            hidden: { y: 50, opacity: 0 },
            visible: { y: 0, opacity: 1, transition: { duration } },
          }}
          initial="hidden"
          animate="visible"
          className="desc w-[54ch] text-center text-white max-min:w-[290px]"
        >
          Fylo stores all your most important files in one secure location.
          Access them wherever you need, share and collaborate with friends
          family, and co-workers.
        </motion.p>
        <motion.button
          variants={{
            hidden: { y: 50, opacity: 0 },
            visible: { y: 0, opacity: 1, transition: { duration } },
          }}
          initial="hidden"
          animate="visible"
          className="button"
        >
          Get starteed
        </motion.button>
      </div>
      <picture className="max-content bg-signBg">
        <source media="(min-width: 1036px)" srcSet={pcWave} />
        <source srcSet={mobileWave} />
        <img
          src={mobileWave}
          className="wave"
          width={1920}
          height={700}
          alt="Your image description"
        />
      </picture>
    </motion.section>
  );
}

export default HeroSection;
