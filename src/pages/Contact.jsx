// src/pages/Contact.jsx
import React, { useState, useRef } from "react";
import { motion } from "framer-motion";
import {
  Mail,
  Phone,
  Github,
  Linkedin,
  Loader,
  CheckCircle,
  XCircle,
} from "lucide-react";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const formRef = useRef();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [status, setStatus] = useState({
    submitting: false,
    submitted: false,
    error: null,
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus({ submitting: true, submitted: false, error: null });

    try {
      await emailjs.sendForm(
        "service_18pk1n9", // Replace with your EmailJS service ID
        "template_jqhzmzg", // Replace with your EmailJS template ID
        formRef.current,
        "rCNM3s7gln8dj2b6f" // Replace with your EmailJS public key
      );

      setStatus({
        submitting: false,
        submitted: true,
        error: null,
      });

      // Reset form
      setFormData({
        name: "",
        email: "",
        message: "",
      });

      // Clear success message after 5 seconds
      setTimeout(() => {
        setStatus((prev) => ({ ...prev, submitted: false }));
      }, 5000);
    } catch (error) {
      setStatus({
        submitting: false,
        submitted: false,
        error: "Failed to send message. Please try again.",
      });

      // Clear error message after 5 seconds
      setTimeout(() => {
        setStatus((prev) => ({ ...prev, error: null }));
      }, 5000);
    }
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  // Status message component
  const StatusMessage = () => {
    if (status.submitting) {
      return (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="flex items-center gap-2 text-[#E43D12]"
        >
          <Loader className="animate-spin" size={20} />
          <span>Sending message...</span>
        </motion.div>
      );
    }

    if (status.submitted) {
      return (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="flex items-center gap-2 text-green-600"
        >
          <CheckCircle size={20} />
          <span>Message sent successfully!</span>
        </motion.div>
      );
    }

    if (status.error) {
      return (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="flex items-center gap-2 text-red-600"
        >
          <XCircle size={20} />
          <span>{status.error}</span>
        </motion.div>
      );
    }

    return null;
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      className="min-h-screen pt-20 px-6"
    >
      <div className="max-w-7xl mx-auto py-16">
        <h1 className="text-4xl font-bold mb-8">Contact Me</h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
          {/* Contact Information */}
          <div>
            <h2 className="text-2xl font-semibold mb-6">Get in Touch</h2>
            <div className="space-y-4">
              <motion.a
                whileHover={{ x: 10 }}
                href="mailto:kristensantos.dev@gmail.com"
                className="flex items-center gap-4 text-gray-700 hover:text-[#E43D12] transition-colors"
              >
                <Mail size={24} />
                <span>KristenSantos.dev@gmail.com</span>
              </motion.a>
              <motion.a
                whileHover={{ x: 10 }}
                href="tel:385-277-7002"
                className="flex items-center gap-4 text-gray-700 hover:text-[#E43D12] transition-colors"
              >
                <Phone size={24} />
                <span>385-277-7002</span>
              </motion.a>
              <motion.a
                whileHover={{ x: 10 }}
                href="https://github.com/KristenSantos"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 text-gray-700 hover:text-[#E43D12] transition-colors"
              >
                <Github size={24} />
                <span>Github</span>
              </motion.a>
              <motion.a
                whileHover={{ x: 10 }}
                href="https://www.linkedin.com/in/kristen-i-santos/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 text-gray-700 hover:text-[#E43D12] transition-colors"
              >
                <Linkedin size={24} />
                <span>LinkedIn</span>
              </motion.a>
            </div>
          </div>

          {/* Contact Form */}
          <div>
            <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-gray-700 mb-2">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  disabled={status.submitting}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-[#E43D12] disabled:bg-gray-100 disabled:cursor-not-allowed"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-gray-700 mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  disabled={status.submitting}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-[#E43D12] disabled:bg-gray-100 disabled:cursor-not-allowed"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-gray-700 mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  disabled={status.submitting}
                  rows="5"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-[#E43D12] disabled:bg-gray-100 disabled:cursor-not-allowed"
                ></textarea>
              </div>

              {/* Status Message */}
              <div className="h-6">
                <StatusMessage />
              </div>

              <button
                type="submit"
                disabled={status.submitting}
                className="bg-[#E43D12] text-white px-8 py-3 rounded-lg hover:bg-[#D6536D] transition-colors duration-300 disabled:bg-gray-400 disabled:cursor-not-allowed"
              >
                {status.submitting ? "Sending..." : "Send Message"}
              </button>
            </form>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Contact;
