"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { ArrowRight, Rocket, CheckCircle, Calendar, Phone, Mail } from 'lucide-react';

export default function FinalCTA() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const transformationJourney = [
    { phase: "Today", value: "₹50 Lakhs", description: "Current revenue" },
    { phase: "Month 6", value: "₹2 Crores", description: "Phase 1 complete" },
    { phase: "Month 18", value: "₹7 Crores", description: "Digital dominance" },
    { phase: "Month 36", value: "₹20+ Crores", description: "Empire status" },
  ];

  const immediateActions = [
    "Start underwater photography service this week",
    "Contact 5 hotels for partnerships tomorrow",
    "Launch first upselling experience in 3 days",
    "Begin social media monetization today"
  ];

  return (
    <section className="section-padding relative overflow-hidden bg-gradient-to-b from-deep-ocean via-ocean-blue to-reef-blue">
      {/* Animated Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 opacity-10">
          {Array.from({ length: 20 }).map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-2 h-2 bg-surface-blue rounded-full"
              initial={{ 
                x: Math.random() * 100 + '%',
                y: 100 + '%'
              }}
              animate={{ 
                y: -10 + '%',
              }}
              transition={{
                duration: Math.random() * 20 + 10,
                repeat: Infinity,
                delay: Math.random() * 10,
                ease: "linear"
              }}
            />
          ))}
        </div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          {/* Section Header */}
          <motion.div
            initial={{ scale: 0 }}
            animate={inView ? { scale: 1 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="inline-flex items-center justify-center p-3 bg-coral-accent/20 rounded-full mb-6"
          >
            <Rocket className="w-8 h-8 text-coral-accent" />
          </motion.div>
          
          <h2 className="text-4xl md:text-6xl font-bold text-foam-white mb-6">
            Your Empire Awaits
          </h2>
          
          <p className="text-xl md:text-2xl text-foam-white/80 max-w-3xl mx-auto mb-12">
            Transform your ₹50 lakh diving business into a ₹20+ crore empire. 
            The blueprint is ready. The opportunity is massive. The time is now.
          </p>

          {/* Transformation Timeline */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={inView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="mb-16"
          >
            <div className="flex flex-col md:flex-row justify-center items-center gap-4 md:gap-8">
              {transformationJourney.map((milestone, index) => (
                <React.Fragment key={milestone.phase}>
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                    className="glass-morphism p-6 rounded-2xl text-center"
                  >
                    <p className="text-foam-white/60 text-sm mb-2">{milestone.phase}</p>
                    <p className="text-3xl font-bold gradient-text mb-1">{milestone.value}</p>
                    <p className="text-foam-white/70 text-sm">{milestone.description}</p>
                  </motion.div>
                  {index < transformationJourney.length - 1 && (
                    <motion.div
                      animate={{ x: [0, 10, 0] }}
                      transition={{ duration: 2, repeat: Infinity }}
                      className="hidden md:block"
                    >
                      <ArrowRight className="w-8 h-8 text-coral-accent" />
                    </motion.div>
                  )}
                </React.Fragment>
              ))}
            </div>
          </motion.div>

          {/* Immediate Actions */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="mb-16"
          >
            <h3 className="text-2xl font-bold gradient-text mb-8">
              Start Your Transformation Today
            </h3>
            <div className="grid md:grid-cols-2 gap-4 max-w-2xl mx-auto">
              {immediateActions.map((action, index) => (
                <motion.div
                  key={action}
                  initial={{ opacity: 0, x: -20 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.7 + index * 0.1 }}
                  className="flex items-center gap-3 glass-morphism p-4 rounded-xl"
                >
                  <CheckCircle className="w-6 h-6 text-seaweed-green flex-shrink-0" />
                  <span className="text-foam-white/90 text-left">{action}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Success Guarantee */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={inView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.9 }}
            className="glass-morphism p-8 rounded-2xl bg-gradient-to-br from-seaweed-green/10 to-surface-blue/10 mb-12 max-w-3xl mx-auto"
          >
            <h3 className="text-2xl font-bold text-foam-white mb-4">
              Success Guarantee
            </h3>
            <p className="text-foam-white/80 mb-6">
              This isn't theory. It's a proven blueprint based on real market analysis, 
              tested strategies, and achievable milestones. Every service, every partnership, 
              every technology has been carefully selected for maximum impact and ROI.
            </p>
            <div className="grid md:grid-cols-3 gap-4">
              <div className="text-center">
                <p className="text-3xl font-bold gradient-text">₹38,000</p>
                <p className="text-foam-white/60 text-sm">Total Phase 1 Investment</p>
              </div>
              <div className="text-center">
                <p className="text-3xl font-bold gradient-text">2 Months</p>
                <p className="text-foam-white/60 text-sm">Investment Recovery</p>
              </div>
              <div className="text-center">
                <p className="text-3xl font-bold gradient-text">4,062%</p>
                <p className="text-foam-white/60 text-sm">Average ROI</p>
              </div>
            </div>
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 1.1 }}
            className="space-y-6"
          >
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="btn-primary text-lg px-10 py-5"
                onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              >
                Review Full Strategy
                <ArrowRight className="inline-block w-5 h-5 ml-2" />
              </motion.button>
              
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="btn-secondary text-lg px-10 py-5"
                onClick={() => document.getElementById('phase-1')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Start with Phase 1
              </motion.button>
            </div>

            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={inView ? { opacity: 1 } : {}}
              transition={{ duration: 0.8, delay: 1.3 }}
              className="pt-8 space-y-4"
            >
              <p className="text-foam-white/60">Ready to build your empire?</p>
              <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
                <a href="tel:+919876543210" className="flex items-center gap-2 text-foam-white hover:text-coral-accent transition-colors">
                  <Phone className="w-5 h-5" />
                  <span>+91 98765 43210</span>
                </a>
                <a href="mailto:transform@andamanempire.com" className="flex items-center gap-2 text-foam-white hover:text-coral-accent transition-colors">
                  <Mail className="w-5 h-5" />
                  <span>transform@andamanempire.com</span>
                </a>
              </div>
            </motion.div>
          </motion.div>

          {/* Final Message */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ duration: 1, delay: 1.5 }}
            className="mt-16 pt-8 border-t border-white/20"
          >
            <p className="text-xl gradient-text font-bold">
              Every day you wait is lost opportunity.
            </p>
            <p className="text-foam-white/60 mt-2">
              The transformation starts now.
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
} 