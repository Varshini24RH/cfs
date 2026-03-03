"use client";

import { motion } from "framer-motion";
import Button from "@/components/Button";

export default function CTASection() {
  return (
    <section className="relative py-24 md:py-32 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1526506118085-60ce8714f8c5?w=1920&q=80"
          alt=""
          className="w-full h-full object-cover opacity-15"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/90 to-red-900/40" />
      </div>

      {/* Decorative line */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-accent to-transparent" />

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-accent font-semibold tracking-[0.2em] uppercase text-sm mb-4"
        >
          Your Transformation Starts Now
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="font-heading text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold uppercase leading-[1.05] mb-6"
        >
          Ready to Begin Your{" "}
          <span className="text-accent">Transformation</span>{" "}
          Journey?
        </motion.h2>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="flex items-center justify-center"
        >
          <Button href="/contact#whatsapp-chat" size="lg" arrow>
            Chat with us on WhatsApp
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
