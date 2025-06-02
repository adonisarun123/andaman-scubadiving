"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { BarChart3, TrendingDown, AlertCircle, DollarSign, Users, Calendar } from 'lucide-react';

export default function CurrentStateAnalysis() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const revenueBreakdown = [
    { category: "Traditional Diving", amount: "₹35L", percentage: 70, color: "bg-reef-blue" },
    { category: "Equipment/Retail", amount: "₹8L", percentage: 16, color: "bg-surface-blue" },
    { category: "Food/Accommodation", amount: "₹7L", percentage: 14, color: "bg-coral-accent" },
  ];

  const monthlyRevenue = [
    { month: "Jan", revenue: 10, isPeak: true },
    { month: "Feb", revenue: 9, isPeak: true },
    { month: "Mar", revenue: 8, isPeak: true },
    { month: "Apr", revenue: 3, isPeak: false },
    { month: "May", revenue: 2, isPeak: false },
    { month: "Jun", revenue: 1, isPeak: false },
    { month: "Jul", revenue: 1, isPeak: false },
    { month: "Aug", revenue: 1, isPeak: false },
    { month: "Sep", revenue: 2, isPeak: false },
    { month: "Oct", revenue: 7, isPeak: true },
    { month: "Nov", revenue: 11, isPeak: true },
    { month: "Dec", revenue: 12, isPeak: true },
  ];

  const hiddenOpportunities = [
    { opportunity: "Photography Services", potential: "₹8L", current: "₹0" },
    { opportunity: "Corporate Programs", potential: "₹12L", current: "₹0" },
    { opportunity: "Educational Workshops", potential: "₹6L", current: "₹0" },
    { opportunity: "Partnership Commissions", potential: "₹8L", current: "₹0" },
    { opportunity: "Equipment Optimization", potential: "₹18L", current: "₹8L" },
    { opportunity: "Premium Experiences", potential: "₹10L", current: "₹0" },
    { opportunity: "Digital Marketing ROI", potential: "₹15L", current: "₹0" },
    { opportunity: "Technology Services", potential: "₹8L", current: "₹0" },
  ];

  const competitorAnalysis = [
    { name: "Dive Andaman", revenue: "₹2-3Cr", strength: "PADI 5-star", weakness: "High prices" },
    { name: "DIVEIndia", revenue: "₹3-5Cr", strength: "Multiple locations", weakness: "Old marketing" },
    { name: "Experience Scuba", revenue: "₹1-2Cr", strength: "TripAdvisor focus", weakness: "Basic services" },
    { name: "Ocean Dive", revenue: "₹80L-1.2Cr", strength: "Equipment focus", weakness: "Service gaps" },
    { name: "YOUR BUSINESS", revenue: "₹50L", strength: "Local expertise", weakness: "Limited scale" },
  ];

  return (
    <section id="current-state" className="section-padding relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `repeating-linear-gradient(-45deg, transparent, transparent 35px, rgba(255,255,255,.05) 35px, rgba(255,255,255,.05) 70px)`
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
              className="inline-flex items-center justify-center p-3 bg-coral-accent/20 rounded-full mb-6"
            >
              <BarChart3 className="w-8 h-8 text-coral-accent" />
            </motion.div>
            <h2 className="text-4xl md:text-5xl font-bold gradient-text mb-6">
              Current State Analysis
            </h2>
            <p className="text-xl text-foam-white/80 max-w-3xl mx-auto">
              Understanding your ₹50 lakh business: revenue structure, seasonal challenges, and untapped opportunities
            </p>
          </div>

          {/* Revenue Breakdown */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="mb-16"
          >
            <h3 className="text-2xl font-bold text-foam-white mb-8">Annual Revenue Breakdown</h3>
            <div className="glass-morphism p-8 rounded-2xl">
              <div className="space-y-6">
                {revenueBreakdown.map((item, index) => (
                  <motion.div
                    key={item.category}
                    initial={{ opacity: 0, x: -30 }}
                    animate={inView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                  >
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-foam-white/90">{item.category}</span>
                      <span className="font-bold text-foam-white">{item.amount} ({item.percentage}%)</span>
                    </div>
                    <div className="w-full bg-white/10 rounded-full h-4 overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        animate={inView ? { width: `${item.percentage}%` } : {}}
                        transition={{ duration: 1, delay: 0.5 + index * 0.1 }}
                        className={`h-full ${item.color}`}
                      />
                    </div>
                  </motion.div>
                ))}
              </div>
              <div className="mt-8 pt-6 border-t border-white/20">
                <div className="flex justify-between items-center">
                  <span className="text-xl font-bold text-foam-white">Total Annual Revenue</span>
                  <span className="text-2xl font-bold gradient-text">₹50 Lakhs</span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Seasonal Revenue Pattern */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="mb-16"
          >
            <h3 className="text-2xl font-bold text-foam-white mb-8">Seasonal Revenue Challenge</h3>
            <div className="glass-morphism p-8 rounded-2xl">
              <div className="grid grid-cols-12 gap-2 items-end h-64">
                {monthlyRevenue.map((month, index) => (
                  <motion.div
                    key={month.month}
                    initial={{ height: 0 }}
                    animate={inView ? { height: `${(month.revenue / 12) * 100}%` } : {}}
                    transition={{ duration: 0.5, delay: 0.6 + index * 0.05 }}
                    className="relative group"
                  >
                    <div 
                      className={`w-full ${month.isPeak ? 'bg-seaweed-green' : 'bg-coral-accent'} rounded-t-lg transition-all duration-300 group-hover:opacity-80`}
                      style={{ height: '100%' }}
                    >
                      <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity">
                        <span className="text-xs text-foam-white whitespace-nowrap">₹{month.revenue}L</span>
                      </div>
                    </div>
                    <div className="text-xs text-foam-white/60 text-center mt-2">{month.month}</div>
                  </motion.div>
                ))}
              </div>
              <div className="flex justify-between mt-8 pt-6 border-t border-white/20">
                <div className="flex items-center gap-4">
                  <div className="flex items-center gap-2">
                    <div className="w-4 h-4 bg-seaweed-green rounded"></div>
                    <span className="text-sm text-foam-white/70">Peak Season (₹40L - 80%)</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-4 h-4 bg-coral-accent rounded"></div>
                    <span className="text-sm text-foam-white/70">Off Season (₹10L - 20%)</span>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <TrendingDown className="w-5 h-5 text-coral-accent" />
                  <span className="text-sm font-bold text-coral-accent">60% Revenue Variation</span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Hidden Opportunities */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.7 }}
            className="mb-16"
          >
            <h3 className="text-2xl font-bold text-foam-white mb-8">Untapped Revenue Opportunities</h3>
            <div className="grid md:grid-cols-2 gap-4">
              {hiddenOpportunities.map((opp, index) => (
                <motion.div
                  key={opp.opportunity}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={inView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ duration: 0.3, delay: 0.8 + index * 0.05 }}
                  className="glass-morphism p-4 rounded-xl card-hover"
                >
                  <div className="flex justify-between items-center">
                    <div>
                      <h4 className="font-semibold text-foam-white">{opp.opportunity}</h4>
                      <p className="text-sm text-foam-white/60 mt-1">
                        Current: <span className="text-coral-accent">{opp.current}</span> → 
                        Potential: <span className="text-seaweed-green ml-1">{opp.potential}</span>
                      </p>
                    </div>
                    <DollarSign className="w-6 h-6 text-seaweed-green" />
                  </div>
                </motion.div>
              ))}
            </div>
            <motion.div
              initial={{ opacity: 0 }}
              animate={inView ? { opacity: 1 } : {}}
              transition={{ duration: 0.8, delay: 1.2 }}
              className="mt-6 p-4 bg-seaweed-green/20 rounded-xl border border-seaweed-green/30"
            >
              <div className="flex items-center gap-3">
                <AlertCircle className="w-6 h-6 text-seaweed-green" />
                <span className="text-foam-white">
                  <strong>Total Opportunity:</strong> ₹77 lakhs additional revenue waiting to be captured
                </span>
              </div>
            </motion.div>
          </motion.div>

          {/* Competitor Analysis */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.9 }}
            className="mb-16"
          >
            <h3 className="text-2xl font-bold text-foam-white mb-8">Competitive Landscape</h3>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-white/20">
                    <th className="text-left py-3 px-4 text-foam-white/70">Operator</th>
                    <th className="text-left py-3 px-4 text-foam-white/70">Revenue Est.</th>
                    <th className="text-left py-3 px-4 text-foam-white/70">Strengths</th>
                    <th className="text-left py-3 px-4 text-foam-white/70">Weaknesses</th>
                  </tr>
                </thead>
                <tbody>
                  {competitorAnalysis.map((comp, index) => (
                    <motion.tr
                      key={comp.name}
                      initial={{ opacity: 0, x: -20 }}
                      animate={inView ? { opacity: 1, x: 0 } : {}}
                      transition={{ duration: 0.5, delay: 1 + index * 0.1 }}
                      className={`border-b border-white/10 ${comp.name === "YOUR BUSINESS" ? 'bg-white/5' : ''}`}
                    >
                      <td className="py-3 px-4 font-medium text-foam-white">{comp.name}</td>
                      <td className="py-3 px-4 text-foam-white/80">{comp.revenue}</td>
                      <td className="py-3 px-4 text-seaweed-green">{comp.strength}</td>
                      <td className="py-3 px-4 text-coral-accent">{comp.weakness}</td>
                    </motion.tr>
                  ))}
                </tbody>
              </table>
            </div>
          </motion.div>

          {/* SWOT Summary */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={inView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.8, delay: 1.2 }}
            className="grid md:grid-cols-2 gap-6"
          >
            <div className="glass-morphism p-6 rounded-2xl">
              <h4 className="text-xl font-bold text-foam-white mb-4">Key Strengths</h4>
              <ul className="space-y-2">
                <li className="flex items-start gap-2">
                  <span className="text-seaweed-green">✓</span>
                  <span className="text-foam-white/80">Established operations and local expertise</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-seaweed-green">✓</span>
                  <span className="text-foam-white/80">Proven business model and customer base</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-seaweed-green">✓</span>
                  <span className="text-foam-white/80">Safety record and staff experience</span>
                </li>
              </ul>
            </div>
            <div className="glass-morphism p-6 rounded-2xl">
              <h4 className="text-xl font-bold text-foam-white mb-4">Major Challenges</h4>
              <ul className="space-y-2">
                <li className="flex items-start gap-2">
                  <span className="text-coral-accent">×</span>
                  <span className="text-foam-white/80">Seasonal revenue dependency (80% in 6 months)</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-coral-accent">×</span>
                  <span className="text-foam-white/80">Limited revenue streams (only 2-3)</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-coral-accent">×</span>
                  <span className="text-foam-white/80">Price competition vulnerability</span>
                </li>
              </ul>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
} 