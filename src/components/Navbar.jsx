import { motion } from 'framer-motion';
import logo from '../assets/images/logo.svg';
import { links } from '../constant';

function Navbar() {
  return (
    <div className="flex h-fit w-full items-center justify-center bg-signBg">
      <motion.nav
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1, transition: { duration: 0.3 } }}
        className="max-content flex w-[100%] items-center justify-between gap-6  px-20 pt-20 max-lg:px-8 max-lg:pt-8 max-[500px]:flex-wrap max-[500px]:justify-center max-[500px]:gap-6"
      >
        <a href={'/'}>
          <img
            src={logo}
            alt="Fylo logo"
            width={180}
            height={150}
            className="max-[500px]:w-[120px]"
          />
        </a>
        <ul className="flex items-center gap-14">
          {links.map((link, index) => (
            <li key={index}>
              <a
                href="#"
                className="anchor link relative whitespace-nowrap text-white "
              >
                {link}
              </a>
            </li>
          ))}
        </ul>
      </motion.nav>
    </div>
  );
}

export default Navbar;
