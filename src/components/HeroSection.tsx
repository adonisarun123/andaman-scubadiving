"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, TrendingUp, DollarSign, Target } from 'lucide-react';

export default function HeroSection() {
  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated Ocean Background */}
      <div className="absolute inset-0 ocean-gradient">
        <div className="absolute inset-0 bg-gradient-to-b from-deep-ocean via-ocean-blue to-reef-blue opacity-90"></div>
        <motion.div
          animate={{
            backgroundPosition: ['0% 0%', '100% 100%'],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            repeatType: 'reverse',
          }}
          className="absolute inset-0 opacity-30"
          style={{
            backgroundImage: 'url("data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%239C92AC" fill-opacity="0.1"%3E%3Cpath d="M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")',
            backgroundSize: '60px 60px',
          }}
        />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <h1 className="text-5xl md:text-7xl font-bold text-foam-white mb-6">
            From ₹50 Lakhs to{' '}
            <span className="gradient-text">₹20+ Crores</span>
          </h1>
          <p className="text-xl md:text-2xl text-foam-white/80 mb-8 max-w-3xl mx-auto">
            Transform your Andaman scuba diving business into a regional empire in just 36 months
          </p>

          {/* Key Metrics */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto mb-12"
          >
            <div className="glass-morphism p-6 rounded-2xl">
              <DollarSign className="w-10 h-10 text-coral-accent mx-auto mb-3" />
              <h3 className="text-3xl font-bold text-foam-white mb-2">400x</h3>
              <p className="text-foam-white/70">Revenue Growth</p>
            </div>
            <div className="glass-morphism p-6 rounded-2xl">
              <TrendingUp className="w-10 h-10 text-coral-accent mx-auto mb-3" />
              <h3 className="text-3xl font-bold text-foam-white mb-2">4,062%</h3>
              <p className="text-foam-white/70">Average ROI</p>
            </div>
            <div className="glass-morphism p-6 rounded-2xl">
              <Target className="w-10 h-10 text-coral-accent mx-auto mb-3" />
              <h3 className="text-3xl font-bold text-foam-white mb-2">15+</h3>
              <p className="text-foam-white/70">Revenue Streams</p>
            </div>
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => document.getElementById('summary')?.scrollIntoView({ behavior: 'smooth' })}
              className="btn-primary"
            >
              See The Plan
              <ArrowRight className="inline-block w-5 h-5 ml-2" />
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => document.getElementById('phase-1')?.scrollIntoView({ behavior: 'smooth' })}
              className="btn-secondary"
            >
              Start Quick Wins
            </motion.button>
          </motion.div>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <div className="w-6 h-10 border-2 border-foam-white/30 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-foam-white/50 rounded-full mt-2"></div>
          </div>
        </motion.div>
      </div>
    </section>
  );
} 