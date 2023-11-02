import logo from '../assets/images/logo.svg';
import location from '../assets/images/icon-location.svg';
import instagram from '../assets/images/instagram.png';
import twitter from '../assets/images/twitter.png';
import facebook from '../assets/images/facebook.png';
import { footerInfo, footerLink1, footerLink2 } from '../constant';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useEffect } from 'react';

function Footer() {
  const mainController = useAnimation();
  const [inViewRef, inView] = useInView({ triggerOnce: true });
  const mainController2 = useAnimation();
  const [inViewRef2, inView2] = useInView({ triggerOnce: true });
  useEffect(() => {
    if (inView) mainController.start('visible');
    if (inView2) mainController2.start('visible');
  }, [mainController, inView, inView2, mainController2]);
  return (
    <footer className="min-h-[550px] bg-darkBlue pb-[30px] pt-[150px]">
      <section className="max-content flex flex-col items-start py-10 max-lg:mt-[50px] max-min:w-[300px]">
        <motion.div
          variants={{ hidden: { opacity: 0 }, visible: { opacity: 1 } }}
          initial="hidden"
          animate={mainController}
          transition={{ duration: 1 }}
          className=" flex w-full flex-col items-start gap-10 px-16 max-lg:items-center max-sm:px-0"
        >
          <img
            src={logo}
            alt="Fylo"
            width={170}
            height={150}
            loading="lazy"
            className="max-sm:pl-4 max-min:pl-0"
          />
          <div
            ref={inViewRef}
            className=" flex w-full items-start justify-between gap-5 max-lg:flex-wrap max-sm:w-[300px] max-sm:flex-col max-sm:justify-start"
          >
            <ul className="flex items-start justify-start gap-4 max-sm:pl-4 max-min:pl-0">
              <li>
                <img
                  src={location}
                  width={15}
                  height={15}
                  alt="Fylo location"
                />
              </li>
              <li className="w-[30ch] text-[15px] max-sm:w-[250px]">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua
              </li>
            </ul>
            <ul className="flex flex-col justify-start gap-5 max-sm:pl-4 max-min:pl-0">
              {footerInfo.map((link, index) => (
                <li key={index} className="line flex items-center gap-3">
                  <img
                    src={link.img}
                    alt="Fylo contact"
                    width={20}
                    height={20}
                  />{' '}
                  <span>{link.text}</span>
                </li>
              ))}
            </ul>

            <nav className="flex flex-col items-start gap-5 max-sm:pl-4 max-min:pl-0">
              {footerLink1.map((link, index) => (
                <a href="#" key={index} className="line">
                  {link}
                </a>
              ))}
            </nav>

            <nav className="flex flex-col items-start gap-5 max-sm:pl-4 max-min:pl-0">
              {footerLink2.map((link, index) => (
                <a href="#" key={index} className="line">
                  {link}
                </a>
              ))}
            </nav>

            <ul className="flex items-center justify-center gap-4 max-lg:w-full max-sm:pl-4 max-min:pl-0">
              <li>
                <img
                  src={facebook}
                  alt="Fylo socials"
                  width={20}
                  height={20}
                  className="filter-icon h-[30px] w-[30px]"
                />
              </li>
              <li>
                <img
                  src={twitter}
                  alt="Fylo socials"
                  width={20}
                  height={20}
                  className="filter-icon h-[30px] w-[30px]"
                />
              </li>
              <li>
                <img
                  src={instagram}
                  alt="Fylo socials"
                  width={20}
                  height={20}
                  className="filter-icon h-[30px] w-[30px]"
                />
              </li>
            </ul>
          </div>
        </motion.div>
      </section>
      <motion.h1
        variants={{ hidden: { opacity: 0 }, visible: { opacity: 1 } }}
        initial="hidden"
        animate={mainController}
        ref={inViewRef2}
        transition={{ duration: 1, delay: 1 }}
        className="text-center text-[14px] max-sm:text-[11px]"
      >
        Challenge by{' '}
        <a
          href="https://www.frontendmentor.io"
          rel="noopener noreferrer"
          target="_blank"
          className="font-semibold hover:text-cyan"
        >
          Frontend Mentor
        </a>
        .Coded by{' '}
        <a
          href="https://github.com/MohammedBentalb"
          rel="noopener noreferrer"
          target="_blank"
          className="font-semibold hover:text-cyan"
        >
          {' '}
          Mohammed Bentalb
        </a>
      </motion.h1>
    </footer>
  );
}

export default Footer;
