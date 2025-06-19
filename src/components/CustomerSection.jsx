"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const customersSlide1 = [
  "Zomato",
  "Swiggy",
  "Meesho",
  "Flipkart",
  "Tata 1mg",
  "Zepto",
];

const customersSlide2 = [
  "Paytm",
  "Nykaa",
  "CRED",
  "Groww",
  "Amazon",
  "PhonePe",
];

export default function CustomerSection() {
  const [slideIndex, setSlideIndex] = useState(0);
  const slides = [customersSlide1, customersSlide2];

  return (
    <section className="w-full py-16 px-6 bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl font-bold text-white mb-10">Our Customers</h2>

        <AnimatePresence mode="wait">
          <motion.div
            key={slideIndex}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
            className="grid grid-cols-2 md:grid-cols-3 gap-6"
          >
            {slides[slideIndex].map((name, index) => (
              <div
                key={index}
                className="p-6 rounded-xl bg-gray-800 text-lg font-semibold text-white shadow hover:shadow-lg transition"
              >
                {name}
              </div>
            ))}
          </motion.div>
        </AnimatePresence>

        <div className="mt-8 flex justify-center gap-4">
          {[0, 1].map((i) => (
            <button
              key={i}
              onClick={() => setSlideIndex(i)}
              className={`w-3 h-3 rounded-full ${
                slideIndex === i ? "bg-white" : "bg-gray-600"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
