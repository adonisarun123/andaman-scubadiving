"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Briefcase, ChartBar, Users, Globe } from 'lucide-react';

export default function ExecutiveSummary() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const strategies = [
    {
      icon: <ChartBar className="w-8 h-8" />,
      title: "Revenue Diversification",
      description: "Expand from 2-3 to 15+ revenue streams through strategic service additions",
      color: "from-surface-blue to-reef-blue"
    },
    {
      icon: <Globe className="w-8 h-8" />,
      title: "Digital Domination",
      description: "Capture 60%+ customers online before they reach Andaman",
      color: "from-reef-blue to-coral-accent"
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Strategic Partnerships",
      description: "Build ecosystem of hotels, operators, and government agencies",
      color: "from-coral-accent to-sunset-orange"
    },
    {
      icon: <Briefcase className="w-8 h-8" />,
      title: "Geographic Expansion",
      description: "Multi-location presence across Andaman and beyond",
      color: "from-sunset-orange to-seaweed-green"
    }
  ];

  const phaseOverview = [
    { phase: "Phase 1", duration: "0-6 Months", target: "₹2 Crores", focus: "Quick Wins & Immediate Revenue" },
    { phase: "Phase 2", duration: "6-18 Months", target: "₹7 Crores", focus: "Digital Marketing & Technology" },
    { phase: "Phase 3", duration: "18-36 Months", target: "₹20+ Crores", focus: "Empire Building & Dominance" }
  ];

  return (
    <section id="summary" className="section-padding relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="wave-pattern"></div>
      </div>
      
      <div className="relative z-10 max-w-7xl mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          {/* Section Header */}
          <div className="text-center mb-16">
            <motion.div
              initial={{ scale: 0 }}
              animate={inView ? { scale: 1 } : {}}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="inline-flex items-center justify-center p-3 bg-coral-accent/20 rounded-full mb-6"
            >
              <Briefcase className="w-8 h-8 text-coral-accent" />
            </motion.div>
            <h2 className="text-4xl md:text-5xl font-bold gradient-text mb-6">
              Executive Summary
            </h2>
            <p className="text-xl text-foam-white/80 max-w-3xl mx-auto">
              A proven 3-year transformation strategy to build Andaman's largest diving empire
            </p>
          </div>

          {/* Core Strategies */}
          <div className="grid md:grid-cols-2 gap-8 mb-16">
            {strategies.map((strategy, index) => (
              <motion.div
                key={strategy.title}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.8, delay: 0.3 + index * 0.1 }}
                className="glass-morphism p-8 rounded-2xl card-hover"
              >
                <div className={`w-16 h-16 rounded-2xl bg-gradient-to-r ${strategy.color} flex items-center justify-center mb-6`}>
                  {strategy.icon}
                </div>
                <h3 className="text-2xl font-bold text-foam-white mb-3">{strategy.title}</h3>
                <p className="text-foam-white/70">{strategy.description}</p>
              </motion.div>
            ))}
          </div>

          {/* Phase Timeline */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.7 }}
            className="glass-morphism p-8 rounded-2xl"
          >
            <h3 className="text-2xl font-bold gradient-text mb-8 text-center">3-Year Growth Timeline</h3>
            <div className="space-y-6">
              {phaseOverview.map((phase, index) => (
                <motion.div
                  key={phase.phase}
                  initial={{ opacity: 0, x: -30 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.8 + index * 0.1 }}
                  className="flex flex-col md:flex-row md:items-center md:justify-between p-6 bg-white/5 rounded-xl"
                >
                  <div className="mb-4 md:mb-0">
                    <h4 className="text-xl font-bold text-foam-white">{phase.phase}</h4>
                    <p className="text-foam-white/60">{phase.duration}</p>
                  </div>
                  <div className="text-left md:text-center">
                    <p className="text-2xl font-bold gradient-text">{phase.target}</p>
                    <p className="text-foam-white/70">{phase.focus}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Key Metrics */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={inView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.8, delay: 1 }}
            className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6"
          >
            <div className="metric-card">
              <div className="text-3xl font-bold gradient-text">₹48L</div>
              <p className="text-foam-white/70 text-sm">Total Investment</p>
            </div>
            <div className="metric-card">
              <div className="text-3xl font-bold gradient-text">36</div>
              <p className="text-foam-white/70 text-sm">Months to ₹20Cr</p>
            </div>
            <div className="metric-card">
              <div className="text-3xl font-bold gradient-text">40-60%</div>
              <p className="text-foam-white/70 text-sm">Market Share</p>
            </div>
            <div className="metric-card">
              <div className="text-3xl font-bold gradient-text">5-8</div>
              <p className="text-foam-white/70 text-sm">Locations</p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
} 