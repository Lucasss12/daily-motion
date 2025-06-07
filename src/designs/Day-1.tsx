import { Box, ShoppingCart, Tag, User } from "lucide-react";
import { motion } from "framer-motion";
import ferrari from "../assets/ferrari.webp";

export default function Day1() {
  const imgVariants = {
    initial: { left: "-50%" },
    hover: { left: "50%", transition: { duration: 0.45, ease: "easeInOut" } },
  };

  const buttonVariants = {
    initial: { color: "#FFFFFF" },
    hover: { backgroundColor: "#FFFFFF", color: "#0c0a09", transition: { duration: 0.45, ease: "easeInOut"  } },
  };

  const textButtonVariants = {
    initial: {
      opacity: 0,
    },
    hover: {
      opacity: 1,
      transition: { duration: 0.45, ease: "easeInOut"  }
    },
  };

  const iconVariants = {
    initial: {
      x: 0,
      transition: { duration: 0.45, ease: "easeInOut" }  
    },
    hover: {
      x: 60,
      transition: { duration: 0.45, ease: "easeInOut" }
    }
  };

  const infos = [
    {
      icon: <Tag className="h-4 w-4"/>,
      text: "$449.99",
      color: "bg-white text-stone-700"
    },
    {
      icon: <User className="w-4 h-4"/>,
      text: "+18",
      color: "bg-stone-700 text-white"
    },
    {
      icon: <Box className="w-4 h-4"/>,
      text: "3778",
      color: "bg-stone-700 text-white"
    }
  ]

  return (
    <div className="flex flex-col justify-center items-center h-screen">

      <motion.div
        className="border w-[320px] rounded-3xl bg-black flex flex-col justify-between relative overflow-hidden"
        initial="initial"
        whileHover="hover"
      >
        <motion.img
          src={ferrari}
          alt="Ferrari Lego"
          variants={imgVariants}
          style={{
            transform: "scaleX(-1) scale(1.9)",
            clipPath: "inset(0 0 8% 0)",
            WebkitMaskImage: "linear-gradient(to bottom, black 75%, transparent 100%)",
            maskImage: "linear-gradient(to bottom, black 75%, transparent 100%)"
          }}
          className="absolute z-0 top-[12%]"
        />

        <div className="flex gap-2 p-5 z-10">
          {infos.map((info, index) => (
            <p key={index} className={`${info.color} rounded-2xl text-sm px-1.5 py-1 flex items-center gap-1`}>
              {info.icon}
              {info.text}
            </p>
          ))}
        </div>

        <div className="h-[170px] z-10"></div>

        <div className="text-white text-4xl font-semibold px-5 my-2 z-10">
          <p>Ferrari</p>
          <p className="text-stone-700">Daytona SP3</p>
        </div>

        <div className="px-5 pb-5 z-10">
         <motion.button 
            variants={buttonVariants}
            className="relative overflow-hidden border border-stone-700 rounded-3xl w-full py-2 flex items-center justify-center cursor-pointer"
          >
            {/* Texte au centre, caché par défaut */}
            <motion.p
              variants={textButtonVariants}
              className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
            >
              Add to cart
            </motion.p>

            {/* Icône déplacée avec animation */}
            <motion.span
              variants={iconVariants}
              className="z-10" 
            >
              <ShoppingCart className="w-5 h-5" />
            </motion.span>
          </motion.button>
        </div>
      </motion.div>

      <p className="mt-4 bg-blue-200 text-blue-500 font-bold px-3 py-1 rounded-xl">inspired by <span className="underline">@markoilico</span></p>
    </div>
  );
}