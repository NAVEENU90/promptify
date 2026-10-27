import { useContext } from "react";
import { assets } from "../assets/assets";
import { motion } from "framer-motion";
import { AppContext } from "../context/AppContext";
import { useNavigate } from "react-router-dom";

const galleryImages = [
  assets.sample_img_1,
  assets.sample_img_2,
  assets.sample_img_1,
  assets.sample_img_2,
  assets.sample_img_1,
];

const Header = () => {
  const { user, setShowLogin } = useContext(AppContext);
  const navigate = useNavigate();

  const onclickHandler = () => {
    if (user) {
      navigate("/result");
    } else {
      setShowLogin(true);
    }
  };

  return (
    <motion.div
      className="relative flex flex-col items-center justify-center overflow-hidden py-12 text-center sm:py-16 lg:py-20"
      initial={{ opacity: 0, y: 36 }}
      transition={{ duration: 0.8 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
    >
      <div className="pointer-events-none absolute left-1/2 top-10 -z-10 h-64 w-64 -translate-x-1/2 rounded-full bg-linear-to-br from-sky-300/40 via-violet-300/35 to-fuchsia-300/40 blur-3xl sm:h-80 sm:w-80" />

      <motion.div
        className="inline-flex items-center gap-2 rounded-full border border-blue-100 bg-white/80 px-4 py-2 text-sm font-medium text-blue-700 shadow-sm shadow-blue-900/5 backdrop-blur"
        initial={{ opacity: 0, y: -12 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.15, duration: 0.6 }}
        viewport={{ once: true }}
      >
        <img src={assets.star_icon} alt="" className="h-4 w-4" />
        <p>Your ideas, brought to life with AI</p>
      </motion.div>

      <motion.h1
        className="mx-auto mt-7 max-w-4xl text-4xl font-semibold leading-tight tracking-tight text-zinc-900 sm:mt-8 sm:text-6xl lg:text-7xl"
        initial={{ opacity: 0, y: 14 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.25, duration: 0.65 }}
        viewport={{ once: true }}
      >
        Your imagination,
        <br className="hidden sm:block" />{" "}
        <span className="bg-linear-to-r from-sky-500 via-indigo-600 to-fuchsia-600 bg-clip-text text-transparent">
          beautifully rendered.
        </span>
      </motion.h1>

      <motion.p
        className="mx-auto mt-5 max-w-2xl px-2 text-base leading-7 text-zinc-600 sm:mt-6 sm:text-lg"
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.35, duration: 0.6 }}
        viewport={{ once: true }}
      >
        Turn a simple description into original AI artwork. Dream it up, type it
        in, and let Promptify create something extraordinary.
      </motion.p>

      <motion.button
        onClick={onclickHandler}
        className="mt-8 inline-flex cursor-pointer items-center gap-3 rounded-full bg-linear-to-r from-blue-600 via-indigo-600 to-violet-600 px-7 py-3.5 text-base font-medium text-white shadow-lg shadow-indigo-900/20 transition duration-200 hover:from-blue-700 hover:via-indigo-700 hover:to-violet-700 sm:px-9"
        whileHover={{ scale: 1.04 }}
        whileTap={{ scale: 0.95 }}
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.45, duration: 0.55 }}
        viewport={{ once: true }}
      >
        Create your image
        <img className="h-5 w-5" src={assets.star_group} alt="" />
      </motion.button>

      <p className="mt-3 text-xs font-medium tracking-wide text-zinc-500">
        No design skills needed
        <span className="mx-2 text-blue-400" aria-hidden="true">
          •
        </span>
        Made from your words
      </p>

      <motion.div
        className="mt-12 flex items-center justify-center gap-2.5 sm:mt-16 sm:gap-4"
        initial={{ opacity: 0, y: 18 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.55, duration: 0.7 }}
        viewport={{ once: true }}
      >
        {galleryImages.map((image, index) => (
          <motion.div
            key={index}
            className={`overflow-hidden rounded-2xl border-4 border-white shadow-lg shadow-zinc-900/10 ${
              index === 2
                ? "h-28 w-24 sm:h-40 sm:w-36"
                : "h-20 w-16 sm:h-32 sm:w-24"
            } ${index % 2 === 0 ? "rotate-[-4deg]" : "rotate-[4deg]"}`}
            whileHover={{ y: -8, rotate: 0, scale: 1.04 }}
            transition={{ duration: 0.2 }}
          >
            <img
              src={image}
              alt={`Example AI-generated artwork ${index + 1}`}
              className="h-full w-full object-cover"
            />
          </motion.div>
        ))}
      </motion.div>

      <p className="mt-5 text-sm font-medium text-zinc-500">
        A little inspiration from Promptify
      </p>
    </motion.div>
  );
};

export default Header;
