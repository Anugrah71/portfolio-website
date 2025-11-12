import React from "react";
import { motion } from "framer-motion";
import {
  GithubIcon,
  LinkedInIcon,
  LocationIcon,
  PhoneIcon,
  EmailIcon,
} from "../assets/icons";

const contactData = [
  {
    icon: <EmailIcon className="w-6 h-6 text-blue-500" />,
    title: "Email",
    value: "anugrahk2025@gmail.com",
  },
  {
    icon: <PhoneIcon className="w-6 h-6 text-green-500" />,
    title: "Phone",
    value: "+91 8136942178",
  },
  {
    icon: <LocationIcon className="w-8 h-8 text-orange-500" />,
    title: "Location",
    value: "Kerala, India",
  },
  {
    icon: <LinkedInIcon className="w-6 h-6 text-blue-700" />,
    title: "LinkedIn",
    value: "linkedin.com/in/anugrah-k78",
    href: "https://www.linkedin.com/in/anugrah-k78/",
  },
  {
    icon: <GithubIcon className="w-6 h-6 text-gray-800" />,
    title: "GitHub",
    value: "github.com/Anugrah71",
    href: "https://github.com/Anugrah71",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.05,
    },
  },
};

const cardVariant = {
  hidden: { opacity: 0, y: 30 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.3, ease: "easeOut" },
  },
};

const Contact = () => {
  return (
    <motion.section
      variants={containerVariants}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.2 }}
    >
      <motion.h2
        variants={cardVariant}
        className="section-title text-center text-3xl sm:text-4xl md:text-5xl font-bold mb-12"
      >
        Get in <span className="text-[#333]">Touch</span>
      </motion.h2>

      <motion.div
        className="max-w-3xl mx-auto bg-white p-10 sm:p-12 rounded-[10px] shadow-[0_5px_20px_rgba(0,0,0,0.1)]"
        variants={containerVariants}
      >
        <motion.p
          variants={cardVariant}
          className="text-center mb-12 text-[#666]"
        >
          Let's connect! Here's how you can reach me.
        </motion.p>

        <motion.div
          className="flex flex-col gap-[1.5rem]"
          variants={containerVariants}
        >
          {contactData.map((item, index) => (
            <motion.div
              key={index}
              variants={cardVariant}
              whileHover={{ scale: 1.02 }}
              transition={{ type: "spring", stiffness: 220, damping: 14 }}
              className="flex items-center gap-4 p-4 border-b border-[#eee] rounded-md cursor-pointer transition-all"
              onClick={() => {
                if (item.href) window.open(item.href, "_blank");
              }}
            >
              <div className="text-2xl w-10 flex justify-center">
                {item.icon}
              </div>
              <div className="text-sm text-[#666] font-medium">
                <h3 className="text-gray-700 font-semibold">{item.title}</h3>
                {item.href ? (
                  <a
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:underline"
                  >
                    <p className="text-[#333]">{item.value}</p>
                  </a>
                ) : (
                  <p className="text-[#333]">{item.value}</p>
                )}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </motion.section>
  );
};

export default Contact;
