"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { 
  Camera, 
  Users, 
  Handshake, 
  Wrench, 
  Smartphone,
  TrendingUp,
  DollarSign,
  Clock,
  CheckCircle
} from 'lucide-react';

export default function Phase1QuickWins() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const quickWins = [
    {
      title: "Underwater Photography Services",
      icon: <Camera className="w-6 h-6" />,
      investment: "₹0",
      monthlyRevenue: "₹8-10 lakhs",
      implementation: "Week 1",
      description: "Use existing underwater camera to capture professional photos for customers",
      steps: [
        "Create 3 package tiers (₹800-2,500)",
        "Train 1 staff member on photography",
        "Show samples at reception",
        "Deliver via WhatsApp/USB"
      ],
      color: "from-surface-blue to-reef-blue"
    },
    {
      title: "Experience Upselling",
      icon: <Users className="w-6 h-6" />,
      investment: "₹5,000",
      monthlyRevenue: "₹3-5 lakhs",
      implementation: "Week 1-2",
      description: "Add fun activities to regular diving experiences",
      steps: [
        "Marine Life Bingo (₹500/person)",
        "Underwater Treasure Hunts (₹800/person)",
        "Dive Master for a Day (₹2,500/person)",
        "Create laminated cards and props"
      ],
      color: "from-reef-blue to-coral-accent"
    },
    {
      title: "Partnership Revenue",
      icon: <Handshake className="w-6 h-6" />,
      investment: "₹10,000",
      monthlyRevenue: "₹4-6 lakhs",
      implementation: "Week 2-3",
      description: "Earn commissions from hotels, restaurants, and tour operators",
      steps: [
        "Partner with 5 hotels (20% commission)",
        "Create Dive & Dine packages",
        "Join tour operator networks",
        "Train partners on your services"
      ],
      color: "from-coral-accent to-sunset-orange"
    },
    {
      title: "Equipment Optimization",
      icon: <Wrench className="w-6 h-6" />,
      investment: "₹15,000",
      monthlyRevenue: "₹3-4 lakhs",
      implementation: "Week 3-4",
      description: "Maximize revenue from equipment and gear",
      steps: [
        "Equipment customization service",
        "Premium equipment rental tier",
        "Maintenance & repair services",
        "Equipment storage service"
      ],
      color: "from-sunset-orange to-seaweed-green"
    },
    {
      title: "Social Media Monetization",
      icon: <Smartphone className="w-6 h-6" />,
      investment: "₹0",
      monthlyRevenue: "₹2-3 lakhs",
      implementation: "Week 4",
      description: "Turn social media presence into revenue",
      steps: [
        "Content creation packages",
        "Sponsored posts & partnerships",
        "Online diving consultations",
        "Affiliate marketing revenue"
      ],
      color: "from-seaweed-green to-surface-blue"
    }
  ];

  const monthlyProjection = [
    { month: "Month 1", revenue: 8.3, cumulative: 8.3 },
    { month: "Month 2", revenue: 10.9, cumulative: 19.2 },
    { month: "Month 3", revenue: 14.5, cumulative: 33.7 },
    { month: "Month 4", revenue: 18.0, cumulative: 51.7 },
    { month: "Month 5", revenue: 21.1, cumulative: 72.8 },
    { month: "Month 6", revenue: 24.2, cumulative: 97.0 },
  ];

  return (
    <section id="phase-1" className="section-padding relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `repeating-conic-gradient(from 45deg at 50% 50%, transparent 0deg, rgba(255,255,255,.05) 90deg, transparent 180deg)`
        }}></div>
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
              className="inline-flex items-center justify-center p-3 bg-seaweed-green/20 rounded-full mb-6"
            >
              <TrendingUp className="w-8 h-8 text-seaweed-green" />
            </motion.div>
            <h2 className="text-4xl md:text-5xl font-bold gradient-text mb-6">
              Phase 1: Quick Wins Strategy
            </h2>
            <p className="text-xl text-foam-white/80 max-w-3xl mx-auto mb-8">
              Double your revenue to ₹2 Crores in just 6 months with services you can start this week
            </p>
            
            {/* Phase 1 Summary */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="grid md:grid-cols-4 gap-6 max-w-4xl mx-auto"
            >
              <div className="metric-card">
                <DollarSign className="w-6 h-6 text-coral-accent mx-auto mb-2" />
                <div className="text-2xl font-bold gradient-text">₹38,000</div>
                <p className="text-foam-white/70 text-sm">Total Investment</p>
              </div>
              <div className="metric-card">
                <TrendingUp className="w-6 h-6 text-coral-accent mx-auto mb-2" />
                <div className="text-2xl font-bold gradient-text">400%</div>
                <p className="text-foam-white/70 text-sm">Revenue Growth</p>
              </div>
              <div className="metric-card">
                <Clock className="w-6 h-6 text-coral-accent mx-auto mb-2" />
                <div className="text-2xl font-bold gradient-text">2 Months</div>
                <p className="text-foam-white/70 text-sm">Payback Period</p>
              </div>
              <div className="metric-card">
                <CheckCircle className="w-6 h-6 text-coral-accent mx-auto mb-2" />
                <div className="text-2xl font-bold gradient-text">5,263%</div>
                <p className="text-foam-white/70 text-sm">ROI</p>
              </div>
            </motion.div>
          </div>

          {/* Quick Win Services */}
          <div className="space-y-8 mb-16">
            {quickWins.map((win, index) => (
              <motion.div
                key={win.title}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.8, delay: 0.4 + index * 0.1 }}
                className="glass-morphism p-8 rounded-2xl card-hover"
              >
                <div className="flex flex-col md:flex-row gap-8">
                  {/* Left Side - Overview */}
                  <div className="md:w-1/2">
                    <div className="flex items-start gap-4 mb-6">
                      <div className={`p-3 rounded-xl bg-gradient-to-r ${win.color}`}>
                        {win.icon}
                      </div>
                      <div>
                        <h3 className="text-2xl font-bold text-foam-white mb-2">{win.title}</h3>
                        <p className="text-foam-white/70">{win.description}</p>
                      </div>
                    </div>
                    
                    <div className="grid grid-cols-2 gap-4">
                      <div className="bg-white/5 p-4 rounded-xl">
                        <p className="text-sm text-foam-white/60 mb-1">Investment Required</p>
                        <p className="text-xl font-bold text-coral-accent">{win.investment}</p>
                      </div>
                      <div className="bg-white/5 p-4 rounded-xl">
                        <p className="text-sm text-foam-white/60 mb-1">Monthly Revenue</p>
                        <p className="text-xl font-bold text-seaweed-green">{win.monthlyRevenue}</p>
                      </div>
                      <div className="bg-white/5 p-4 rounded-xl">
                        <p className="text-sm text-foam-white/60 mb-1">Implementation</p>
                        <p className="text-xl font-bold text-surface-blue">{win.implementation}</p>
                      </div>
                      <div className="bg-white/5 p-4 rounded-xl">
                        <p className="text-sm text-foam-white/60 mb-1">ROI Period</p>
                        <p className="text-xl font-bold text-sunset-orange">2-3 months</p>
                      </div>
                    </div>
                  </div>
                  
                  {/* Right Side - Implementation Steps */}
                  <div className="md:w-1/2">
                    <h4 className="text-lg font-semibold text-foam-white mb-4">Implementation Steps:</h4>
                    <ul className="space-y-3">
                      {win.steps.map((step, stepIndex) => (
                        <motion.li
                          key={stepIndex}
                          initial={{ opacity: 0, x: -20 }}
                          animate={inView ? { opacity: 1, x: 0 } : {}}
                          transition={{ duration: 0.5, delay: 0.5 + index * 0.1 + stepIndex * 0.05 }}
                          className="flex items-start gap-3"
                        >
                          <CheckCircle className="w-5 h-5 text-seaweed-green mt-0.5 flex-shrink-0" />
                          <span className="text-foam-white/80">{step}</span>
                        </motion.li>
                      ))}
                    </ul>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Revenue Projection Chart */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="mb-16"
          >
            <h3 className="text-2xl font-bold text-center gradient-text mb-8">
              6-Month Revenue Projection
            </h3>
            <div className="glass-morphism p-8 rounded-2xl">
              <div className="space-y-6">
                {monthlyProjection.map((month, index) => (
                  <motion.div
                    key={month.month}
                    initial={{ opacity: 0, x: -30 }}
                    animate={inView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.5, delay: 0.9 + index * 0.1 }}
                  >
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-foam-white/90 font-medium">{month.month}</span>
                      <div className="text-right">
                        <span className="text-foam-white mr-4">₹{month.revenue}L monthly</span>
                        <span className="text-seaweed-green font-bold">(₹{month.cumulative}L total)</span>
                      </div>
                    </div>
                    <div className="relative h-8 bg-white/10 rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        animate={inView ? { width: `${(month.revenue / 25) * 100}%` } : {}}
                        transition={{ duration: 1, delay: 1 + index * 0.1 }}
                        className="absolute h-full bg-gradient-to-r from-surface-blue to-coral-accent"
                      />
                    </div>
                  </motion.div>
                ))}
              </div>
              
              <div className="mt-8 pt-6 border-t border-white/20 grid md:grid-cols-3 gap-4">
                <div className="text-center">
                  <p className="text-foam-white/60 mb-2">Starting Revenue</p>
                  <p className="text-2xl font-bold text-foam-white">₹4.5L/month</p>
                </div>
                <div className="text-center">
                  <p className="text-foam-white/60 mb-2">Month 6 Revenue</p>
                  <p className="text-2xl font-bold gradient-text">₹24.2L/month</p>
                </div>
                <div className="text-center">
                  <p className="text-foam-white/60 mb-2">Growth Achieved</p>
                  <p className="text-2xl font-bold text-seaweed-green">438%</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Success Tips */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={inView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.8, delay: 1.2 }}
            className="glass-morphism p-8 rounded-2xl bg-gradient-to-br from-seaweed-green/10 to-surface-blue/10"
          >
            <h3 className="text-2xl font-bold text-foam-white mb-6 text-center">
              Keys to Phase 1 Success
            </h3>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="w-16 h-16 bg-coral-accent/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Clock className="w-8 h-8 text-coral-accent" />
                </div>
                <h4 className="font-semibold text-foam-white mb-2">Start Fast</h4>
                <p className="text-foam-white/70 text-sm">Begin with zero-investment opportunities in Week 1</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-seaweed-green/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="w-8 h-8 text-seaweed-green" />
                </div>
                <h4 className="font-semibold text-foam-white mb-2">Train Team</h4>
                <p className="text-foam-white/70 text-sm">Get staff excited and skilled in new services</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-surface-blue/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <TrendingUp className="w-8 h-8 text-surface-blue" />
                </div>
                <h4 className="font-semibold text-foam-white mb-2">Track Progress</h4>
                <p className="text-foam-white/70 text-sm">Monitor daily revenue and adjust strategies</p>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
} 