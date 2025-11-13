import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const ContactMe = () => {
  const [result, setResult] = useState("");
  const [status, setStatus] = useState("idle");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    setResult("");
    const formData = new FormData(event.target);

    formData.append("access_key", "664c69f8-13b9-4345-935d-736d85f8b618");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });

    const data = await response.json();

    if (data.success) {
      setStatus("success");
      setResult("Message sent!");
      event.target.reset();
      setTimeout(() => setStatus("idle"), 2000);
    } else {
      setStatus("idle");
      console.log("Error", data);
      setResult(data.message);
    }
  };
  return (
    <>
      <section className="relative z-0 bg-white bg-[#f8f8f8] text-black text-center px-4 sm:px-10 md:px-20 pt-20 sm:pt-24 mt-12 sm:mt-0">
        <h2 className="section-title text-3xl sm:text-4xl md:text-5xl text-center mb-4 mt-2 font-bold">
          Contact <span className="text-[#333]">Me</span>
        </h2>

        <p className="text-center mb-12 text-gray-600">
          I'd love to hear from you! If you have any questions, comments, or
          <br />
          feedback, please use the form below.
        </p>

        <form onSubmit={onSubmit} className="flex items-center justify-center">
          <div className="flex flex-col w-full max-w-lg gap-4">
            <div className="flex flex-col sm:flex-row gap-4">
              <input
                type="text"
                placeholder="Enter Your Name"
                name="name"
                className="w-full border border-gray-300 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-black/40"
              />
              <input
                type="email"
                placeholder="Enter Your Email"
                name="email"
                className="w-full border border-gray-300 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-black/40"
              />
            </div>

            <textarea
              placeholder="Enter Your Message"
              name="message"
              className="w-full border border-gray-300 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-black/40"
              rows="5"
            ></textarea>

            <motion.button
              type="submit"
              disabled={status === "loading"}
              className={`relative overflow-hidden flex items-center justify-center gap-2 font-medium py-3 px-6 rounded-lg text-white transition
    ${
      status === "success"
        ? "bg-green-500 hover:bg-green-600"
        : "bg-blue-500 hover:bg-blue-600"
    }
    ${status === "loading" ? "opacity-80 cursor-not-allowed" : ""}
  `}
              whileTap={{ scale: status === "idle" ? 0.95 : 1 }}
            >
              <AnimatePresence mode="wait">
                {status === "loading" && (
                  <motion.div
                    key="loading"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.2 }}
                    className="flex items-center gap-2"
                  >
                    <motion.div
                      className="h-5 w-5 border-2 border-white border-t-transparent rounded-full"
                      animate={{ rotate: 360 }}
                      transition={{
                        repeat: Infinity,
                        duration: 0.8,
                        ease: "linear",
                      }}
                    />
                    Sending...
                  </motion.div>
                )}

                {status === "success" && (
                  <motion.div
                    key="success"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.2 }}
                    className="flex items-center gap-2"
                  >
                    <span className="text-xl">✔</span> Sent!
                  </motion.div>
                )}

                {status === "idle" && (
                  <motion.div
                    key="idle"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.2 }}
                  >
                    Submit
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.button>

            {result && (
              <p className="text-center text-sm text-gray-700 mt-1">{result}</p>
            )}
          </div>
        </form>
      </section>
    </>
  );
};

export default ContactMe;
