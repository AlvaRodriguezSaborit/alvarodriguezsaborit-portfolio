import yo from "../assets/yo.png";
import { motion } from "motion/react";
import { ArrowUpRight, MapPin, ContactRound } from "lucide-react";
import SocialLinksList from "../components/SocialLinksList";
import { useTranslation } from "react-i18next";

export default function Hero() {
  const { t } = useTranslation();
  const year = new Date().getFullYear();

  return (
    <section className="w-full h-screen relative bg-linear-to-b from-[#FDFBF7] to-[#D5F899] flex flex-col overflow-hidden mb-36">
      <div className="z-10 flex flex-col items-center text-center max-w-[75%] mx-auto w-full h-full justify-between pt-24">
        <div className="flex flex-col items-center">
          <span className="mb-8 text-xs font-semibold tracking-[0.2em] text-gray-600 uppercase">
            PORTFOLIO · {year}
          </span>

          <motion.h1
            className="text-6xl font-bold tracking-tight text-black md:text-9xl"
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            {t("hero.greeting")} <br />
            <span className="font-serif italic font-normal tracking-normal">
              {t("hero.role")}
            </span>
          </motion.h1>
        </div>

        <div className="grid grid-cols-3 gap-4 w-full">
          {/* Ubication */}
          <div className="flex flex-col justify-between items-start p-8">
            <div></div>
            <SocialLinksList iconSize="size-14" />
            <div className="self-start">
              <motion.div
                className="flex flex-row gap-2 font-semibold bg-white border-[#d9d7d1] w-fit p-2 rounded-2xl"
                initial={{ opacity: 0, x: -25 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
              >
                <MapPin className="size-5" />
                <span>{t("hero.location")}</span>
              </motion.div>
            </div>
          </div>
          {/* Image */}
          <motion.img
            src={yo}
            alt="Profile picture"
            className="p-0! object-cover h-auto grayscale hover:grayscale-0 transition-all duration-300 relative w-full max-w-md mt-0 shadow-xl self-end"
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            whileHover={{ y: -25 }}
            transition={{ duration: 0.2 }}
          />
          {/* Buttons */}
          <div className="p-8 h-full">
            <motion.div
              className="h-full flex flex-col items-start justify-between"
              initial={{ opacity: 0, x: 25 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
            >
              <div></div>
              <p className="text-start font-normal text-2xl leading-relaxed text-black">
                {t("hero.bio")}
              </p>
              <div className="flex flex-row gap-4 items-center">
                <a href="#projects">
                  <button className="group items-center font-semibold w-fit inline-flex gap-2 bg-black text-white cursor-pointer border border-black hover:bg-gray-950 px-4 py-2 rounded-lg transition-colors">
                    {t("hero.viewProjects")}
                    <ArrowUpRight className="size-5 transition-transform duration-200 group-hover:translate-x-1 group-hover:-translate-y-1" />
                  </button>
                </a>
                <a href="#contact">
                  <button className="font-semibold inline-flex gap-2 bg-white text-black cursor-pointer border border-gray-300 hover:bg-gray-200 p-2 rounded-lg transition-colors">
                    {t("hero.contact")}
                    <ContactRound />
                  </button>
                </a>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
