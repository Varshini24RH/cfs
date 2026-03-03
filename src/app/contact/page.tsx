"use client";

import { useState, FormEvent } from "react";
import { MapPin, Phone, Clock, Mail, Send } from "lucide-react";
import { motion } from "framer-motion";

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);
  const [whatsappBranch, setWhatsappBranch] = useState<"kondapur" | "madhapur" | "">("");

  const whatsappNumber = "918886564999";

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // In production, connect to a backend/email service
    setSubmitted(true);
  };

  const handleWhatsAppChat = () => {
    if (!whatsappBranch) return;

    const branchLabel = whatsappBranch === "kondapur" ? "CFS9 Kondapur" : "CFS9 Madhapur";
    const message = encodeURIComponent(`Hi! I want to enquire about ${branchLabel}.`);
    window.open(`https://wa.me/${whatsappNumber}?text=${message}`, "_blank", "noopener,noreferrer");
  };

  return (
    <main>
      {/* Hero */}
      <section className="relative min-h-[60vh] md:min-h-[70vh] flex items-center justify-center overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1526506118085-60ce8714f8c5?w=1920&q=80"
          alt=""
          className="absolute inset-0 w-full h-full object-cover object-[center_7%]"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/35 to-black/70" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/20 via-transparent to-black/20" />
        <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center pt-20">
          <p
            className="text-sm sm:text-base tracking-[0.3em] uppercase text-primary font-medium mb-5"
            style={{ fontFamily: "var(--font-oswald)" }}
          >
            We&apos;re Here For You
          </p>
          <h1 className="font-heading text-5xl sm:text-6xl md:text-7xl font-bold uppercase mb-4 text-white drop-shadow-[0_4px_30px_rgba(0,0,0,0.6)]">
            Get In <span className="text-accent">Touch</span>
          </h1>
          <div className="mx-auto w-28 h-1 bg-primary rounded-full mb-6" />
          <div id="whatsapp-chat" className="mt-6 flex flex-col sm:flex-row items-center justify-center gap-3">
            <select
              value={whatsappBranch}
              onChange={(e) => setWhatsappBranch(e.target.value as "kondapur" | "madhapur" | "")}
              className="w-full sm:w-auto min-w-[220px] px-4 py-4 bg-surface border border-white/20 rounded-lg text-white focus:outline-none focus:border-accent transition-colors"
              aria-label="Select WhatsApp branch"
            >
              <option value="">Select branch</option>
              <option value="kondapur">CFS9 Kondapur</option>
              <option value="madhapur">CFS9 Madhapur</option>
            </select>
            <button
              type="button"
              onClick={handleWhatsAppChat}
              disabled={!whatsappBranch}
              className="inline-flex items-center gap-2 px-8 py-4 bg-primary hover:bg-primary-dark disabled:bg-primary/50 disabled:cursor-not-allowed text-white font-bold text-sm tracking-widest rounded-lg transition-all duration-200 hover:scale-105 disabled:hover:scale-100"
              style={{ fontFamily: "var(--font-oswald)" }}
            >
              💬 CHAT WITH US ON WHATSAPP
            </button>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Form */}
            <div>
              <h2 className="font-heading text-2xl md:text-3xl font-bold uppercase mb-6">
                Send Us a <span className="text-accent">Message</span>
              </h2>

              {submitted ? (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="bg-accent/10 border border-accent/30 rounded-lg p-8 text-center"
                >
                  <div className="w-16 h-16 bg-accent/20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Send className="w-8 h-8 text-accent" />
                  </div>
                  <h3 className="font-heading text-xl font-bold uppercase mb-2">
                    Message Sent!
                  </h3>
                  <p className="text-muted">
                    Thanks for reaching out. Our team will get back to you within 24 hours.
                  </p>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium mb-2">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        required
                        className="w-full px-4 py-3 bg-surface border border-white/10 rounded-lg text-white placeholder:text-muted/50 focus:outline-none focus:border-accent transition-colors"
                        placeholder="John Doe"
                      />
                    </div>
                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium mb-2">
                        Phone Number *
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        required
                        className="w-full px-4 py-3 bg-surface border border-white/10 rounded-lg text-white placeholder:text-muted/50 focus:outline-none focus:border-accent transition-colors"
                        placeholder="+91 98765 43210"
                      />
                    </div>
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium mb-2">
                      Email Address
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      className="w-full px-4 py-3 bg-surface border border-white/10 rounded-lg text-white placeholder:text-muted/50 focus:outline-none focus:border-accent transition-colors"
                      placeholder="john@example.com"
                    />
                  </div>
                  <div>
                    <label htmlFor="interest" className="block text-sm font-medium mb-2">
                      Interested In
                    </label>
                    <select
                      id="interest"
                      name="interest"
                      className="w-full px-4 py-3 bg-surface border border-white/10 rounded-lg text-white focus:outline-none focus:border-accent transition-colors"
                    >
                      <option value="">Select a program</option>
                      <option value="strength">Strength Training</option>
                      <option value="bodybuilding">Bodybuilding</option>
                      <option value="crossfit">CrossFit</option>
                      <option value="cardio">Cardio & HIIT</option>
                      <option value="personal">Personal Training</option>
                      <option value="yoga">Yoga & Flexibility</option>
                      <option value="general">General Fitness</option>
                    </select>
                  </div>
                  <div>
                    <label htmlFor="branch" className="block text-sm font-medium mb-2">
                      Preferred Branch
                    </label>
                    <select
                      id="branch"
                      name="branch"
                      className="w-full px-4 py-3 bg-surface border border-white/10 rounded-lg text-white focus:outline-none focus:border-accent transition-colors"
                    >
                      <option value="">Select a branch</option>
                      <option value="kondapur">CFS9 Kondapur</option>
                      <option value="madhapur">CFS9 Madhapur</option>
                    </select>
                  </div>
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium mb-2">
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={4}
                      className="w-full px-4 py-3 bg-surface border border-white/10 rounded-lg text-white placeholder:text-muted/50 focus:outline-none focus:border-accent transition-colors resize-none"
                      placeholder="Tell us about your fitness goals..."
                    />
                  </div>
                  <button
                    type="submit"
                    className="w-full sm:w-auto bg-accent hover:bg-accent-hover text-white font-heading font-bold uppercase tracking-wider px-8 py-3.5 rounded-lg transition-colors flex items-center justify-center gap-2"
                  >
                    <Send className="w-4 h-4" />
                    Send Message
                  </button>
                </form>
              )}
            </div>

            {/* Info */}
            <div className="space-y-8 lg:pl-8">
              <div>
                <h2 className="font-heading text-2xl md:text-3xl font-bold uppercase mb-6">
                  Visit <span className="text-accent">Us</span>
                </h2>
              </div>

              {/* Kondapur */}
              <div className="bg-surface border border-white/5 rounded-lg p-6">
                <h3 className="font-heading text-lg font-bold uppercase text-accent mb-4">
                  CFS9 Kondapur
                </h3>
                <div className="space-y-3 text-muted text-sm">
                  <div className="flex items-start gap-3">
                    <MapPin className="w-4 h-4 text-accent mt-0.5 flex-shrink-0" />
                    <span>Plot 42, Botanical Garden Road, Kondapur, Hyderabad 500084</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Phone className="w-4 h-4 text-accent flex-shrink-0" />
                    <a href="tel:+919000190009" className="hover:text-accent transition-colors">
                      +91 90001 90009
                    </a>
                  </div>
                  <div className="flex items-start gap-3">
                    <Clock className="w-4 h-4 text-accent mt-0.5 flex-shrink-0" />
                    <span>5 AM – 11 PM (Mon–Sat) · 6 AM – 10 AM (Sun)</span>
                  </div>
                </div>
              </div>

              {/* Madhapur */}
              <div className="bg-surface border border-white/5 rounded-lg p-6">
                <h3 className="font-heading text-lg font-bold uppercase text-accent mb-4">
                  CFS9 Madhapur
                </h3>
                <div className="space-y-3 text-muted text-sm">
                  <div className="flex items-start gap-3">
                    <MapPin className="w-4 h-4 text-accent mt-0.5 flex-shrink-0" />
                    <span>Durgam Cheruvu Road, Near Inorbit Mall, Madhapur, Hyderabad 500081</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Phone className="w-4 h-4 text-accent flex-shrink-0" />
                    <a href="tel:+919000290009" className="hover:text-accent transition-colors">
                      +91 90002 90009
                    </a>
                  </div>
                  <div className="flex items-start gap-3">
                    <Clock className="w-4 h-4 text-accent mt-0.5 flex-shrink-0" />
                    <span>5 AM – 11 PM (Mon–Sat) · 6 AM – 10 AM (Sun)</span>
                  </div>
                </div>
              </div>

              {/* Email */}
              <div className="bg-surface border border-white/5 rounded-lg p-6">
                <div className="flex items-center gap-3">
                  <Mail className="w-5 h-5 text-accent" />
                  <a
                    href="mailto:info@cfs9gym.com"
                    className="font-medium hover:text-accent transition-colors"
                  >
                    info@cfs9gym.com
                  </a>
                </div>
              </div>

              {/* Social */}
              <div>
                <h3 className="font-heading text-lg font-bold uppercase mb-3">Follow Us</h3>
                <div className="flex gap-4">
                  {["Instagram", "Facebook", "YouTube"].map((platform) => (
                    <a
                      key={platform}
                      href="#"
                      className="px-4 py-2 bg-surface border border-white/10 rounded-lg text-sm font-medium text-muted hover:text-accent hover:border-accent/30 transition-colors"
                    >
                      {platform}
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
