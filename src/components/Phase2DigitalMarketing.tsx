"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { 
  Rocket,
  Search,
  Globe,
  Monitor,
  Smartphone,
  Building2,
  TrendingUp,
  DollarSign,
  Users,
  Zap
} from 'lucide-react';

export default function Phase2DigitalMarketing() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const digitalStrategies = [
    {
      title: "SEO Domination",
      icon: <Search className="w-6 h-6" />,
      investment: "₹15,000/month",
      impact: "200+ visitors/day",
      timeline: "Results in 3-6 months",
      tactics: [
        "Rank #1 for 'Andaman scuba diving'",
        "Create 50+ SEO-optimized blog posts",
        "Build 100+ quality backlinks",
        "Local SEO optimization"
      ],
      color: "from-surface-blue to-reef-blue"
    },
    {
      title: "Paid Advertising",
      icon: <Globe className="w-6 h-6" />,
      investment: "₹40,000/month",
      impact: "40-60 bookings/month",
      timeline: "Immediate results",
      tactics: [
        "Google Ads search campaigns",
        "Facebook & Instagram targeted ads",
        "YouTube pre-roll advertising",
        "Retargeting campaigns"
      ],
      color: "from-reef-blue to-coral-accent"
    },
    {
      title: "Technology Integration",
      icon: <Monitor className="w-6 h-6" />,
      investment: "₹3 lakhs total",
      impact: "Premium pricing power",
      timeline: "3-4 months setup",
      tactics: [
        "VR diving experiences",
        "Mobile booking app",
        "Underwater communication systems",
        "AI marine life recognition"
      ],
      color: "from-coral-accent to-sunset-orange"
    },
    {
      title: "B2B Marketing",
      icon: <Building2 className="w-6 h-6" />,
      investment: "₹1.5 lakhs",
      impact: "₹18L/month revenue",
      timeline: "2-3 months to close deals",
      tactics: [
        "Corporate team building programs",
        "Educational institution partnerships",
        "Government agency contracts",
        "Professional certification courses"
      ],
      color: "from-sunset-orange to-seaweed-green"
    }
  ];

  const technologyShowcase = [
    {
      tech: "VR Experience Center",
      description: "Non-swimmers can experience diving virtually",
      revenue: "₹20,000-35,000/month",
      icon: <Monitor className="w-5 h-5" />
    },
    {
      tech: "Mobile Booking App",
      description: "40% of customers prefer mobile booking",
      revenue: "+15% conversion rate",
      icon: <Smartphone className="w-5 h-5" />
    },
    {
      tech: "Guided Commentary Dives",
      description: "Live underwater narration system",
      revenue: "₹30,000-45,000/month",
      icon: <Users className="w-5 h-5" />
    }
  ];

  const monthlyGrowth = [
    { month: "Month 6", traffic: 20, revenue: 24 },
    { month: "Month 8", traffic: 50, revenue: 35 },
    { month: "Month 10", traffic: 100, revenue: 50 },
    { month: "Month 12", traffic: 200, revenue: 65 },
    { month: "Month 15", traffic: 300, revenue: 78 },
    { month: "Month 18", traffic: 500, revenue: 89 },
  ];

  return (
    <section id="phase-2" className="section-padding relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 20% 50%, rgba(59, 130, 246, 0.1) 0%, transparent 50%), 
                           radial-gradient(circle at 80% 80%, rgba(249, 115, 22, 0.1) 0%, transparent 50%)`
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
              <Rocket className="w-8 h-8 text-coral-accent" />
            </motion.div>
            <h2 className="text-4xl md:text-5xl font-bold gradient-text mb-6">
              Phase 2: Digital Marketing Dominance
            </h2>
            <p className="text-xl text-foam-white/80 max-w-3xl mx-auto mb-8">
              Dominate Andaman diving online & reach ₹6-7 crores through digital transformation
            </p>
            
            {/* Phase 2 Summary */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="grid md:grid-cols-4 gap-6 max-w-4xl mx-auto"
            >
              <div className="metric-card">
                <DollarSign className="w-6 h-6 text-coral-accent mx-auto mb-2" />
                <div className="text-2xl font-bold gradient-text">₹8-12L</div>
                <p className="text-foam-white/70 text-sm">Total Investment</p>
              </div>
              <div className="metric-card">
                <TrendingUp className="w-6 h-6 text-coral-accent mx-auto mb-2" />
                <div className="text-2xl font-bold gradient-text">₹89L</div>
                <p className="text-foam-white/70 text-sm">Monthly Revenue</p>
              </div>
              <div className="metric-card">
                <Search className="w-6 h-6 text-coral-accent mx-auto mb-2" />
                <div className="text-2xl font-bold gradient-text">#1</div>
                <p className="text-foam-white/70 text-sm">Google Ranking</p>
              </div>
              <div className="metric-card">
                <Zap className="w-6 h-6 text-coral-accent mx-auto mb-2" />
                <div className="text-2xl font-bold gradient-text">400-600%</div>
                <p className="text-foam-white/70 text-sm">ROI</p>
              </div>
            </motion.div>
          </div>

          {/* Digital Marketing Strategies */}
          <div className="grid md:grid-cols-2 gap-8 mb-16">
            {digitalStrategies.map((strategy, index) => (
              <motion.div
                key={strategy.title}
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: 0.4 + index * 0.1 }}
                className="glass-morphism p-6 rounded-2xl card-hover"
              >
                <div className="flex items-start gap-4 mb-6">
                  <div className={`p-3 rounded-xl bg-gradient-to-r ${strategy.color}`}>
                    {strategy.icon}
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-foam-white mb-2">{strategy.title}</h3>
                    <div className="grid grid-cols-2 gap-4 text-sm">
                      <div>
                        <p className="text-foam-white/60">Investment</p>
                        <p className="text-coral-accent font-semibold">{strategy.investment}</p>
                      </div>
                      <div>
                        <p className="text-foam-white/60">Impact</p>
                        <p className="text-seaweed-green font-semibold">{strategy.impact}</p>
                      </div>
                    </div>
                    <p className="text-surface-blue text-sm mt-2">{strategy.timeline}</p>
                  </div>
                </div>
                
                <div className="space-y-2">
                  {strategy.tactics.map((tactic, tacticIndex) => (
                    <motion.div
                      key={tacticIndex}
                      initial={{ opacity: 0, x: -20 }}
                      animate={inView ? { opacity: 1, x: 0 } : {}}
                      transition={{ duration: 0.5, delay: 0.5 + index * 0.1 + tacticIndex * 0.05 }}
                      className="flex items-center gap-2"
                    >
                      <div className="w-1.5 h-1.5 bg-coral-accent rounded-full"></div>
                      <span className="text-foam-white/80 text-sm">{tactic}</span>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>

          {/* Technology Showcase */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.7 }}
            className="mb-16"
          >
            <h3 className="text-2xl font-bold text-center gradient-text mb-8">
              Technology Leadership Integration
            </h3>
            <div className="grid md:grid-cols-3 gap-6">
              {technologyShowcase.map((tech, index) => (
                <motion.div
                  key={tech.tech}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={inView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ duration: 0.5, delay: 0.8 + index * 0.1 }}
                  className="glass-morphism p-6 rounded-2xl text-center card-hover"
                >
                  <div className="w-12 h-12 bg-gradient-to-r from-surface-blue to-coral-accent rounded-full flex items-center justify-center mx-auto mb-4">
                    {tech.icon}
                  </div>
                  <h4 className="font-semibold text-foam-white mb-2">{tech.tech}</h4>
                  <p className="text-foam-white/70 text-sm mb-3">{tech.description}</p>
                  <p className="text-seaweed-green font-bold">{tech.revenue}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Growth Trajectory */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.9 }}
            className="mb-16"
          >
            <h3 className="text-2xl font-bold text-center gradient-text mb-8">
              Digital Growth Trajectory
            </h3>
            <div className="glass-morphism p-8 rounded-2xl">
              <div className="grid grid-cols-6 gap-4 mb-8">
                {monthlyGrowth.map((month, index) => (
                  <motion.div
                    key={month.month}
                    initial={{ opacity: 0, y: 20 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.5, delay: 1 + index * 0.1 }}
                    className="text-center"
                  >
                    <p className="text-foam-white/60 text-xs mb-2">{month.month}</p>
                    <div className="space-y-4">
                      <div>
                        <div className="h-20 bg-white/10 rounded-lg relative overflow-hidden">
                          <motion.div
                            initial={{ height: 0 }}
                            animate={inView ? { height: `${(month.traffic / 500) * 100}%` } : {}}
                            transition={{ duration: 0.8, delay: 1.1 + index * 0.1 }}
                            className="absolute bottom-0 w-full bg-gradient-to-t from-surface-blue to-reef-blue"
                          />
                        </div>
                        <p className="text-xs text-surface-blue mt-1">{month.traffic}/day</p>
                      </div>
                      <div>
                        <p className="text-xl font-bold gradient-text">₹{month.revenue}L</p>
                        <p className="text-xs text-foam-white/60">Revenue</p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
              
              <div className="grid md:grid-cols-3 gap-4 pt-6 border-t border-white/20">
                <div className="text-center">
                  <p className="text-foam-white/60 mb-2">Website Traffic Growth</p>
                  <p className="text-2xl font-bold text-surface-blue">25x increase</p>
                </div>
                <div className="text-center">
                  <p className="text-foam-white/60 mb-2">Digital Revenue Share</p>
                  <p className="text-2xl font-bold gradient-text">60%+ of total</p>
                </div>
                <div className="text-center">
                  <p className="text-foam-white/60 mb-2">Customer Acquisition Cost</p>
                  <p className="text-2xl font-bold text-seaweed-green">&lt;₹1,500</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Digital Marketing Advantages */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={inView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.8, delay: 1.2 }}
            className="glass-morphism p-8 rounded-2xl bg-gradient-to-br from-coral-accent/10 to-surface-blue/10"
          >
            <h3 className="text-2xl font-bold text-foam-white mb-6 text-center">
              Why Digital Marketing Now?
            </h3>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h4 className="font-semibold text-foam-white mb-4">Customer Journey Transformation</h4>
                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-0.5 bg-coral-accent"></div>
                    <span className="text-foam-white/80">Month -2: Customer plans Andaman trip</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-0.5 bg-coral-accent"></div>
                    <span className="text-foam-white/80">Month -1: Searches "Andaman diving" online</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-0.5 bg-seaweed-green"></div>
                    <span className="text-seaweed-green font-semibold">You capture them here!</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-0.5 bg-coral-accent"></div>
                    <span className="text-foam-white/80">Month 0: Arrives pre-booked with you</span>
                  </div>
                </div>
              </div>
              <div>
                <h4 className="font-semibold text-foam-white mb-4">Competitive Advantages</h4>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <Zap className="w-5 h-5 text-seaweed-green mt-0.5" />
                    <span className="text-foam-white/80">First-mover advantage in digital space</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Zap className="w-5 h-5 text-seaweed-green mt-0.5" />
                    <span className="text-foam-white/80">Technology leadership positioning</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Zap className="w-5 h-5 text-seaweed-green mt-0.5" />
                    <span className="text-foam-white/80">Premium pricing justification</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Zap className="w-5 h-5 text-seaweed-green mt-0.5" />
                    <span className="text-foam-white/80">24/7 customer acquisition system</span>
                  </li>
                </ul>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
} 