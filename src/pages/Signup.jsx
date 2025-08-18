// src/pages/Signup.jsx
import React from "react";
import { useState } from "react";
import { motion } from "framer-motion";

export default function Signup() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    password: "",
  });
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const validate = () => {
    const newErrors = {};
    if (!formData.fullName.trim()) newErrors.fullName = "Full Name is required";
    if (!formData.email.includes("@")) newErrors.email = "Enter a valid email";
    if (formData.password.length < 6)
      newErrors.password = "Password must be at least 6 characters";
    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = validate();
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
    } else {
      alert("🎉 Form submitted successfully!");
      setErrors({});
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br bg-[#FFFDF6]">
      <motion.form
        onSubmit={handleSubmit}
        className="bg-white shadow-2xl rounded-2xl p-8 w-full max-w-md relative overflow-hidden"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        {/* Decorative circle animation */}
        <motion.div
          className="absolute top-0 -right-16 w-40 h-40 bg-pink-300 rounded-full opacity-30"
          animate={{ scale: [1, 1.2, 1] }}
          transition={{ repeat: Infinity, duration: 6 }}
        />
        <motion.div
          className="absolute -bottom-12 -left-12 w-48 h-48 bg-purple-300 rounded-full opacity-30"
          animate={{ scale: [1, 1.3, 1] }}
          transition={{ repeat: Infinity, duration: 8 }}
        />

        <h2 className="text-3xl font-extrabold text-center mb-6 bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
          Create Account
        </h2>

        {/* Full Name */}
        <div className="mb-5">
          <label className="block text-sm font-medium text-gray-700">Full Name</label>
          <input
            type="text"
            name="fullName"
            onChange={handleChange}
            className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-pink-500 focus:outline-none"
          />
          {errors.fullName && <p className="text-red-500 text-sm">{errors.fullName}</p>}
        </div>

        {/* Email */}
        <div className="mb-5">
          <label className="block text-sm font-medium text-gray-700">Email Address</label>
          <input
            type="email"
            name="email"
            onChange={handleChange}
            className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-purple-500 focus:outline-none"
          />
          {errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}
        </div>

        {/* Password */}
        <div className="mb-6">
          <label className="block text-sm font-medium text-gray-700">Password</label>
          <input
            type="password"
            name="password"
            onChange={handleChange}
            className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-red-500 focus:outline-none"
          />
          {errors.password && <p className="text-red-500 text-sm">{errors.password}</p>}
        </div>

        {/* Submit Button */}
        <motion.button
          type="submit"
          className="w-full bg-gradient-to-r from-purple-600 to-pink-600 text-white p-3 rounded-lg font-semibold hover:opacity-90 transition"
          whileTap={{ scale: 0.95 }}
          whileHover={{ scale: 1.02 }}
        >
          Sign Up
        </motion.button>
      </motion.form>
    </div>
  );
}
