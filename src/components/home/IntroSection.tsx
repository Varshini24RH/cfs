"use client";

import { motion } from "framer-motion";

export default function IntroSection() {
  return (
    <section className="relative py-24 md:py-32 overflow-hidden bg-background" id="about">
      {/* Background Image */}
      <div className="absolute inset-0 z-0" style={{
        backgroundImage: "url('/gym-illustration.svg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat"
      }}>
        {/* Dark overlays for text readability */}
        <div className="absolute inset-0 bg-gradient-to-b from-background/95 via-background/85 to-background/95" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/30 via-transparent to-black/30" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-primary font-semibold tracking-[0.2em] uppercase text-lg md:text-xl mb-6"
          style={{ fontFamily: "var(--font-oswald)" }}
        >
          Who We Are
        </motion.p>

        {/* 3D Barbell with heading on the bar */}
        <motion.div
          initial={{ opacity: 0, scaleX: 0 }}
          whileInView={{ opacity: 1, scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.15, duration: 0.8, ease: "easeOut" }}
          className="flex items-center justify-center mx-auto mb-8 w-full -mx-4 sm:-mx-6 lg:-mx-8"
          style={{ perspective: "1200px", width: "calc(100% + 2rem)" }}
        >
          {/* Left plates (outer to inner: small → medium → large) */}
          <div className="flex items-center flex-shrink-0">
            {/* Left Collar Knob */}
            <motion.div
              initial={{ opacity: 0, x: -10 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.7, duration: 0.3 }}
              className="w-[14px] h-[32px] rounded-l-[4px]"
              style={{
                background: "linear-gradient(180deg, #b91c1c 0%, #7f1d1d 50%, #b91c1c 100%)",
                boxShadow: "0 3px 8px rgba(0,0,0,0.5)",
              }}
            />
            {/* Plate L3 — smallest outer */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.6, duration: 0.3 }}
              className="w-[30px] h-[110px] rounded-[5px]"
              style={{
                background: "linear-gradient(180deg, #ef4444 0%, #dc2626 18%, #991b1b 38%, #450a0a 55%, #991b1b 72%, #dc2626 88%, #ef4444 100%)",
                boxShadow: "inset 0 3px 4px rgba(255,255,255,0.22), inset 0 -3px 4px rgba(0,0,0,0.35), 0 5px 14px rgba(0,0,0,0.55), 0 0 18px rgba(239,68,68,0.18)",
                transform: "rotateY(-10deg)",
              }}
            />
            {/* Plate L2 — medium */}
            <motion.div
              initial={{ opacity: 0, x: -22 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5, duration: 0.3 }}
              className="w-[34px] h-[155px] rounded-[6px] -ml-[2px]"
              style={{
                background: "linear-gradient(180deg, #ef4444 0%, #dc2626 22%, #b91c1c 35%, #7f1d1d 50%, #b91c1c 65%, #dc2626 78%, #ef4444 100%)",
                boxShadow: "inset 0 4px 6px rgba(255,255,255,0.2), inset 0 -4px 6px rgba(0,0,0,0.4), 0 6px 16px rgba(0,0,0,0.55), 0 0 22px rgba(239,68,68,0.14)",
                transform: "rotateY(-6deg)",
              }}
            />
            {/* Plate L1 — largest inner */}
            <motion.div
              initial={{ opacity: 0, x: -15 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4, duration: 0.3 }}
              className="w-[38px] h-[200px] rounded-[7px] -ml-[2px]"
              style={{
                background: "linear-gradient(180deg, #f87171 0%, #ef4444 12%, #dc2626 25%, #991b1b 40%, #450a0a 55%, #991b1b 68%, #dc2626 80%, #ef4444 90%, #f87171 100%)",
                boxShadow: "inset 0 5px 8px rgba(255,255,255,0.22), inset 0 -5px 8px rgba(0,0,0,0.45), 0 8px 24px rgba(0,0,0,0.6), 0 0 30px rgba(239,68,68,0.12)",
                transform: "rotateY(-3deg)",
              }}
            />
          </div>

          {/* Bar with heading text overlay */}
          <div className="relative flex-1 flex items-center justify-center mx-0">
            {/* Bar background */}
            <motion.div
              className="absolute left-0 right-0 top-1/2 -translate-y-1/2 h-[12px]"
              style={{
                background: "linear-gradient(180deg, #dc2626 0%, #b91c1c 25%, #991b1b 42%, #7f1d1d 55%, #991b1b 68%, #b91c1c 82%, #dc2626 100%)",
                boxShadow: "inset 0 2px 3px rgba(255,255,255,0.18), 0 3px 12px rgba(0,0,0,0.5), 0 0 35px rgba(220,38,38,0.25)",
                borderRadius: "4px",
              }}
            >
              {/* Shimmer animation on the bar */}
              <motion.div
                className="absolute inset-0 rounded-[4px] overflow-hidden"
                style={{
                  background: "linear-gradient(90deg, transparent 0%, rgba(255,255,255,0.08) 30%, rgba(255,255,255,0.25) 50%, rgba(255,255,255,0.08) 70%, transparent 100%)",
                }}
                animate={{ x: ["-100%", "200%"] }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  repeatDelay: 2,
                  ease: "easeInOut",
                }}
              />
              {/* Knurling texture */}
              <div
                className="absolute inset-0 opacity-[0.05]"
                style={{
                  backgroundImage: "repeating-linear-gradient(90deg, transparent, transparent 5px, rgba(255,255,255,0.5) 5px, rgba(255,255,255,0.5) 6px)",
                }}
              />
            </motion.div>

            {/* Heading text on the bar */}
            <motion.h2
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3, duration: 0.5 }}
              className="relative z-10 font-heading text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold uppercase leading-none whitespace-nowrap py-2"
              style={{
                textShadow: "0 0 20px rgba(0,0,0,0.9), 0 0 40px rgba(0,0,0,0.7), 0 2px 8px rgba(0,0,0,0.8)",
              }}
            >
              Built for Results.{" "}
              <span className="text-primary" style={{ textShadow: "0 0 20px rgba(220,38,38,0.4), 0 0 40px rgba(0,0,0,0.7), 0 2px 8px rgba(0,0,0,0.8)" }}>Built for You.</span>
            </motion.h2>
          </div>

          {/* Right plates (inner to outer: large → medium → small) */}
          <div className="flex items-center flex-shrink-0">
            {/* Plate R1 — largest inner */}
            <motion.div
              initial={{ opacity: 0, x: 15 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4, duration: 0.3 }}
              className="w-[38px] h-[200px] rounded-[7px] -mr-[2px]"
              style={{
                background: "linear-gradient(180deg, #f87171 0%, #ef4444 12%, #dc2626 25%, #991b1b 40%, #450a0a 55%, #991b1b 68%, #dc2626 80%, #ef4444 90%, #f87171 100%)",
                boxShadow: "inset 0 5px 8px rgba(255,255,255,0.22), inset 0 -5px 8px rgba(0,0,0,0.45), 0 8px 24px rgba(0,0,0,0.6), 0 0 30px rgba(239,68,68,0.12)",
                transform: "rotateY(3deg)",
              }}
            />
            {/* Plate R2 — medium */}
            <motion.div
              initial={{ opacity: 0, x: 22 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5, duration: 0.3 }}
              className="w-[34px] h-[155px] rounded-[6px] -mr-[2px]"
              style={{
                background: "linear-gradient(180deg, #ef4444 0%, #dc2626 22%, #b91c1c 35%, #7f1d1d 50%, #b91c1c 65%, #dc2626 78%, #ef4444 100%)",
                boxShadow: "inset 0 4px 6px rgba(255,255,255,0.2), inset 0 -4px 6px rgba(0,0,0,0.4), 0 6px 16px rgba(0,0,0,0.55), 0 0 22px rgba(239,68,68,0.14)",
                transform: "rotateY(6deg)",
              }}
            />
            {/* Plate R3 — smallest outer */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.6, duration: 0.3 }}
              className="w-[30px] h-[110px] rounded-[5px]"
              style={{
                background: "linear-gradient(180deg, #ef4444 0%, #dc2626 18%, #991b1b 38%, #450a0a 55%, #991b1b 72%, #dc2626 88%, #ef4444 100%)",
                boxShadow: "inset 0 3px 4px rgba(255,255,255,0.22), inset 0 -3px 4px rgba(0,0,0,0.35), 0 5px 14px rgba(0,0,0,0.55), 0 0 18px rgba(239,68,68,0.18)",
                transform: "rotateY(10deg)",
              }}
            />
            {/* Right Collar Knob */}
            <motion.div
              initial={{ opacity: 0, x: 10 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.7, duration: 0.3 }}
              className="w-[14px] h-[32px] rounded-r-[4px]"
              style={{
                background: "linear-gradient(180deg, #b91c1c 0%, #7f1d1d 50%, #b91c1c 100%)",
                boxShadow: "0 3px 8px rgba(0,0,0,0.5)",
              }}
            />
          </div>
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="text-muted text-base md:text-lg leading-relaxed"
        >
          Central Fitness Station (CFS9) is a premium fitness brand built for individuals who
          value results, quality training, and a refined workout experience.
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="text-muted text-base md:text-lg leading-relaxed mt-4"
        >
          Whether your goal is fat loss, strength, performance, or lifestyle fitness, CFS9
          provides expert coaching, structured programs, and a motivating environment to help
          you achieve{" "}
          <span className="text-white font-semibold">sustainable results</span>.
        </motion.p>
      </div>
    </section>
  );
}
