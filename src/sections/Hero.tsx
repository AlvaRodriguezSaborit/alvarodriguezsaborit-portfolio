import yo from "../assets/yo.png";
import { motion } from "motion/react";
import { ArrowUpRight, MapPin } from "lucide-react";

export default function Hero() {
  return (
    <motion.div
      className="flex flex-col gap-2"
      initial={{ opacity: 0, y: 25 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="flex flex-row justify-center items-center">
        <span className="text-6xl">
          Soy Mateo Ríos, desarrollador de software que construye productos web
          rápidos y con código mantenible.
        </span>
        <img src={yo} alt="yo"></img>
      </div>
      <p className="max-w-[50%] text-gray-700">
        Full-stack con foco en frontend. Me gusta convertir problemas complejos
        en interfaces claras, cuidar los detalles y escribir código que otras
        personas puedan leer sin dolor. Trabajo con React, TypeScript y Node en
        el día a día.
      </p>
      <div className="flex flex-row gap-4">
        <button className="group items-center w-fit inline-flex gap-2 bg-black text-white cursor-pointer border border-black hover:bg-gray-950 px-4 py-2 rounded-lg transition-colors">
          Ver proyectos
          <ArrowUpRight className="size-5 transition-transform duration-200 group-hover:translate-x-1 group-hover:-translate-y-1" />
        </button>
        <button className="bg-gray-100 text-black cursor-pointer border border-gray-300 hover:bg-gray-200 p-2 rounded-lg transition-colors">
          Contáctame
        </button>
        <div className="flex flex-row gap-2 items-center">
          <MapPin className="text-gray-400 size-5" />
          <span className="text-gray-700">Vila-real, Castellón, España</span>
        </div>
      </div>
    </motion.div>
  );
}
