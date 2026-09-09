import React, { useState } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";
import TiltCard from "./TiltCard";
import { Send, CheckCircle2, Copy, Mail, MapPin, Linkedin, Github } from "lucide-react";

const SERVICE_ID  = import.meta.env.VITE_EMAILJS_SERVICE_ID;
const TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
const PUBLIC_KEY  = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [status, setStatus]   = useState("idle"); // idle | submitting | success | error
  const [errorMsg, setErrorMsg] = useState("");
  const [copied, setCopied]   = useState(false);

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;

    setStatus("submitting");
    setErrorMsg("");

    try {
      await emailjs.send(
        SERVICE_ID,
        TEMPLATE_ID,
        {
          from_name:    formData.name,
          from_email:   formData.email,
          subject:      formData.subject || `Portfolio Inquiry from ${formData.name}`,
          message:      formData.message,
          reply_to:     formData.email,
        },
        PUBLIC_KEY
      );
      setStatus("success");
    } catch (err) {
      console.error("EmailJS error:", err);
      setStatus("error");
      setErrorMsg("Failed to send message. Please check your EmailJS setup or try again.");
    }
  };

  const handleCopyEmail = () => {
    navigator.clipboard.writeText("anugrahkariyatt@gmail.com");
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    show: { opacity: 1, transition: { staggerChildren: 0.12, delayChildren: 0.05 } },
  };

  return (
    <motion.section
      id="contact"
      className="py-20 px-4 sm:px-8 md:px-12 bg-[#080B12] text-[#F1F3F5] min-h-screen flex flex-col justify-center"
      variants={containerVariants}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true }}
    >
      <div className="text-center mb-12">
        <h2 className="text-3xl sm:text-5xl font-extrabold text-[#F1F3F5]">
          Send Me A Message
        </h2>
        <p className="text-[#8B93A1] text-sm sm:text-base mt-2 max-w-xl mx-auto">
          Have a project, job opportunity, or inquiry? Send a message directly to my inbox.
        </p>
      </div>

      <div className="max-w-6xl mx-auto w-full grid grid-cols-1 lg:grid-cols-5 gap-8">

        {/* LEFT — Contact Details */}
        <TiltCard className="lg:col-span-2 p-6 sm:p-8 flex flex-col justify-between bg-[#10141D] border border-[#202632]">
          <div>
            <h3 className="text-xl font-bold text-[#F1F3F5] mb-2">Let's Connect</h3>
            <p className="text-sm text-[#8B93A1] leading-relaxed mb-6">
              I'm a backend-focused Full Stack Developer interested in building reliable web applications and backend systems.
              Feel free to reach out through email or social networks.
            </p>

            <div className="space-y-4 mb-8">
              <div className="flex items-center gap-4 p-3.5 bg-[#080B12] border border-[#202632] rounded-xl">
                <div className="p-2.5 bg-[#7C6CFF]/10 text-[#7C6CFF] rounded-lg shrink-0">
                  <Mail size={18} />
                </div>
                <div className="overflow-hidden">
                  <p className="text-[11px] font-semibold text-[#8B93A1] uppercase">Direct Email</p>
                  <p className="text-xs sm:text-sm font-semibold text-[#F1F3F5] truncate">anugrahkariyatt@gmail.com</p>
                </div>
              </div>

              <div className="flex items-center gap-4 p-3.5 bg-[#080B12] border border-[#202632] rounded-xl">
                <div className="p-2.5 bg-[#7C6CFF]/10 text-[#7C6CFF] rounded-lg shrink-0">
                  <MapPin size={18} />
                </div>
                <div>
                  <p className="text-[11px] font-semibold text-[#8B93A1] uppercase">Location</p>
                  <p className="text-xs sm:text-sm font-semibold text-[#F1F3F5]">Kozhikode, Kerala, India</p>
                </div>
              </div>
            </div>
          </div>

          <div className="space-y-3 pt-4 border-t border-[#202632]">
            <button
              onClick={handleCopyEmail}
              className="w-full py-2.5 px-4 bg-[#080B12] hover:bg-[#161c29] border border-[#202632] text-xs font-semibold rounded-xl text-[#F1F3F5] transition flex items-center justify-center gap-2"
            >
              {copied ? <CheckCircle2 size={15} className="text-[#7C6CFF]" /> : <Copy size={15} />}
              <span>{copied ? "Email Address Copied!" : "Copy Email Address"}</span>
            </button>

            <div className="grid grid-cols-2 gap-3">
              <a
                href="https://www.linkedin.com/in/anugrahkariyatt/"
                target="_blank"
                rel="noopener noreferrer"
                className="py-2.5 px-4 bg-[#080B12] hover:bg-[#161c29] border border-[#202632] text-xs font-semibold rounded-xl text-[#F1F3F5] hover:text-[#7C6CFF] transition flex items-center justify-center gap-2"
              >
                <Linkedin size={15} /> LinkedIn
              </a>
              <a
                href="https://github.com/anugrahkariyatt"
                target="_blank"
                rel="noopener noreferrer"
                className="py-2.5 px-4 bg-[#080B12] hover:bg-[#161c29] border border-[#202632] text-xs font-semibold rounded-xl text-[#F1F3F5] transition flex items-center justify-center gap-2"
              >
                <Github size={15} /> GitHub
              </a>
            </div>
          </div>
        </TiltCard>

        {/* RIGHT — Send Email Form */}
        <TiltCard className="lg:col-span-3 p-6 sm:p-10 bg-[#10141D] border border-[#202632]">
          <h3 className="text-xl font-bold text-[#F1F3F5] mb-6">Send an Email Message</h3>

          {status === "success" ? (
            <div className="py-12 text-center flex flex-col items-center justify-center">
              <div className="w-16 h-16 bg-[#7C6CFF]/20 text-[#7C6CFF] rounded-full flex items-center justify-center mb-4 border border-[#7C6CFF]/30">
                <CheckCircle2 size={32} />
              </div>
              <h4 className="text-xl font-bold text-[#F1F3F5] mb-2">Message Sent!</h4>
              <p className="text-xs sm:text-sm text-[#8B93A1] max-w-md mx-auto mb-6">
                Your message was delivered directly to <strong>anugrahkariyatt@gmail.com</strong>. I'll get back to you soon!
              </p>
              <button
                onClick={() => {
                  setStatus("idle");
                  setFormData({ name: "", email: "", subject: "", message: "" });
                }}
                className="px-6 py-2.5 bg-[#080B12] hover:bg-[#161c29] text-[#F1F3F5] text-xs font-bold rounded-xl border border-[#202632] transition"
              >
                Send Another Message
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label className="block text-xs font-semibold text-[#8B93A1] uppercase mb-2">Your Name</label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    placeholder="John Doe"
                    className="w-full bg-[#080B12] border border-[#202632] rounded-xl px-4 py-3 text-sm text-[#F1F3F5] placeholder-gray-600 outline-none focus:border-[#7C6CFF]/70 transition"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-[#8B93A1] uppercase mb-2">Your Email</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    placeholder="john@example.com"
                    className="w-full bg-[#080B12] border border-[#202632] rounded-xl px-4 py-3 text-sm text-[#F1F3F5] placeholder-gray-600 outline-none focus:border-[#7C6CFF]/70 transition"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-[#8B93A1] uppercase mb-2">Subject</label>
                <input
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  placeholder="Job Opportunity / Full Stack Developer Role"
                  className="w-full bg-[#080B12] border border-[#202632] rounded-xl px-4 py-3 text-sm text-[#F1F3F5] placeholder-gray-600 outline-none focus:border-[#7C6CFF]/70 transition"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-[#8B93A1] uppercase mb-2">Message</label>
                <textarea
                  name="message"
                  rows={4}
                  value={formData.message}
                  onChange={handleChange}
                  required
                  placeholder="Hi Anugrah, we reviewed your portfolio and would like to discuss..."
                  className="w-full bg-[#080B12] border border-[#202632] rounded-xl px-4 py-3 text-sm text-[#F1F3F5] placeholder-gray-600 outline-none focus:border-[#7C6CFF]/70 transition resize-none"
                />
              </div>

              {status === "error" && (
                <p className="text-xs text-red-400 bg-red-500/10 border border-red-500/20 rounded-xl px-4 py-3">
                  {errorMsg}
                </p>
              )}

              <button
                type="submit"
                disabled={status === "submitting"}
                className="w-full py-3.5 px-6 bg-[#7C6CFF] hover:bg-[#6b59ff] text-white hover:text-white font-bold rounded-xl shadow-lg transition flex items-center justify-center gap-2 text-sm disabled:opacity-50"
              >
                <Send size={16} />
                <span>{status === "submitting" ? "Sending..." : "Send Email Message"}</span>
              </button>
            </form>
          )}
        </TiltCard>

      </div>
    </motion.section>
  );
};

export default Contact;
