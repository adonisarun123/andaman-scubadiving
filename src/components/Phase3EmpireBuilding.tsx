"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { 
  Globe,
  MapPin,
  Award,
  Briefcase,
  Cpu,
  TrendingUp,
  Users,
  Crown,
  Building,
  Star
} from 'lucide-react';

export default function Phase3EmpireBuilding() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const expansionPlan = [
    {
      location: "Neil Island",
      timeline: "Months 18-20",
      investment: "₹8 lakhs",
      revenue: "₹2-2.5 crores/year",
      focus: "Budget backpackers, different segment",
      icon: <MapPin className="w-5 h-5" />
    },
    {
      location: "Port Blair",
      timeline: "Months 21-24",
      investment: "₹10 lakhs",
      revenue: "₹1.5-3 crores/year",
      focus: "Corporate & government clients",
      icon: <Building className="w-5 h-5" />
    },
    {
      location: "Franchise Network",
      timeline: "Months 28-36",
      investment: "Franchise model",
      revenue: "₹50L-1Cr royalties",
      focus: "Goa, Lakshadweep, Kerala expansion",
      icon: <Briefcase className="w-5 h-5" />
    }
  ];

  const authorityBuilding = [
    {
      title: "World Record Attempts",
      description: "Largest marine life database, coral restoration records",
      impact: "₹50L-2Cr PR value",
      icon: <Award className="w-6 h-6" />
    },
    {
      title: "Industry Conference",
      description: "Host annual Indian Ocean Diving Conference",
      impact: "Thought leadership status",
      icon: <Users className="w-6 h-6" />
    },
    {
      title: "Government Partnerships",
      description: "Official diving partner for Coast Guard, Navy training",
      impact: "₹10-50L annual contracts",
      icon: <Crown className="w-6 h-6" />
    }
  ];

  const technologyLicensing = [
    {
      product: "VR Diving Platform",
      target: "Aquariums, museums, schools worldwide",
      revenue: "₹2-8L per license",
      licenses: "20-30 by Month 36"
    },
    {
      product: "AI Marine Recognition",
      target: "Dive centers, marine researchers",
      revenue: "₹299-5,000/year subscriptions",
      licenses: "500+ users"
    },
    {
      product: "Safety Monitoring Tech",
      target: "Diving operators globally",
      revenue: "₹1-5L per system",
      licenses: "10-20 installations"
    }
  ];

  const empireMetrics = {
    locations: "5-8",
    annualRevenue: "₹15-25 Crores",
    marketShare: "40-60%",
    employees: "50-100",
    businessValue: "₹75-150 Crores"
  };

  return (
    <section id="phase-3" className="section-padding relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `linear-gradient(45deg, transparent 48%, rgba(255,255,255,.05) 49%, rgba(255,255,255,.05) 51%, transparent 52%),
                           linear-gradient(-45deg, transparent 48%, rgba(255,255,255,.05) 49%, rgba(255,255,255,.05) 51%, transparent 52%)`,
          backgroundSize: '20px 20px'
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
              className="inline-flex items-center justify-center p-3 bg-sunset-orange/20 rounded-full mb-6"
            >
              <Globe className="w-8 h-8 text-sunset-orange" />
            </motion.div>
            <h2 className="text-4xl md:text-5xl font-bold gradient-text mb-6">
              Phase 3: Empire Building & Market Dominance
            </h2>
            <p className="text-xl text-foam-white/80 max-w-3xl mx-auto mb-8">
              Transform into a ₹20+ crore regional empire with technology leadership and industry authority
            </p>
            
            {/* Phase 3 Summary */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="grid md:grid-cols-5 gap-4 max-w-5xl mx-auto"
            >
              {Object.entries(empireMetrics).map(([key, value], index) => (
                <motion.div
                  key={key}
                  initial={{ opacity: 0, y: 20 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                  className="metric-card"
                >
                  <div className="text-2xl font-bold gradient-text">{value}</div>
                  <p className="text-foam-white/70 text-sm capitalize">
                    {key.replace(/([A-Z])/g, ' $1').trim()}
                  </p>
                </motion.div>
              ))}
            </motion.div>
          </div>

          {/* Geographic Expansion */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="mb-16"
          >
            <h3 className="text-2xl font-bold text-center gradient-text mb-8">
              Geographic Expansion Strategy
            </h3>
            <div className="grid md:grid-cols-3 gap-6">
              {expansionPlan.map((location, index) => (
                <motion.div
                  key={location.location}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={inView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
                  className="glass-morphism p-6 rounded-2xl card-hover"
                >
                  <div className="flex items-center gap-3 mb-4">
                    <div className="p-2 bg-gradient-to-r from-sunset-orange to-coral-accent rounded-lg">
                      {location.icon}
                    </div>
                    <h4 className="text-xl font-bold text-foam-white">{location.location}</h4>
                  </div>
                  
                  <div className="space-y-3">
                    <div className="flex justify-between text-sm">
                      <span className="text-foam-white/60">Timeline</span>
                      <span className="text-surface-blue">{location.timeline}</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-foam-white/60">Investment</span>
                      <span className="text-coral-accent">{location.investment}</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-foam-white/60">Revenue</span>
                      <span className="text-seaweed-green font-semibold">{location.revenue}</span>
                    </div>
                    <p className="text-foam-white/70 text-sm pt-3 border-t border-white/10">
                      {location.focus}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Authority Building */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.7 }}
            className="mb-16"
          >
            <h3 className="text-2xl font-bold text-center gradient-text mb-8">
              Industry Authority & Recognition
            </h3>
            <div className="space-y-6">
              {authorityBuilding.map((item, index) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, x: -30 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.8 + index * 0.1 }}
                  className="glass-morphism p-6 rounded-2xl flex items-center gap-6 card-hover"
                >
                  <div className="p-4 bg-gradient-to-r from-surface-blue to-reef-blue rounded-xl">
                    {item.icon}
                  </div>
                  <div className="flex-1">
                    <h4 className="text-xl font-bold text-foam-white mb-2">{item.title}</h4>
                    <p className="text-foam-white/70 mb-2">{item.description}</p>
                    <p className="text-seaweed-green font-semibold">{item.impact}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Technology Licensing */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.9 }}
            className="mb-16"
          >
            <h3 className="text-2xl font-bold text-center gradient-text mb-8">
              Technology Licensing Revenue
            </h3>
            <div className="glass-morphism p-8 rounded-2xl">
              <div className="grid md:grid-cols-3 gap-8">
                {technologyLicensing.map((tech, index) => (
                  <motion.div
                    key={tech.product}
                    initial={{ opacity: 0, y: 20 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.5, delay: 1 + index * 0.1 }}
                    className="text-center"
                  >
                    <div className="w-16 h-16 bg-gradient-to-r from-coral-accent to-sunset-orange rounded-full flex items-center justify-center mx-auto mb-4">
                      <Cpu className="w-8 h-8 text-white" />
                    </div>
                    <h4 className="font-semibold text-foam-white mb-2">{tech.product}</h4>
                    <p className="text-foam-white/60 text-sm mb-3">{tech.target}</p>
                    <p className="text-surface-blue font-semibold mb-1">{tech.revenue}</p>
                    <p className="text-seaweed-green text-sm">{tech.licenses}</p>
                  </motion.div>
                ))}
              </div>
              
              <motion.div
                initial={{ opacity: 0 }}
                animate={inView ? { opacity: 1 } : {}}
                transition={{ duration: 0.8, delay: 1.3 }}
                className="mt-8 pt-6 border-t border-white/20 text-center"
              >
                <p className="text-foam-white/60 mb-2">Total Technology Licensing Revenue</p>
                <p className="text-3xl font-bold gradient-text">₹95L - 3.25Cr annually</p>
              </motion.div>
            </div>
          </motion.div>

          {/* Empire Vision */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={inView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.8, delay: 1.1 }}
            className="glass-morphism p-8 rounded-2xl bg-gradient-to-br from-sunset-orange/10 to-surface-blue/10"
          >
            <h3 className="text-2xl font-bold text-foam-white mb-6 text-center">
              Your Empire Status by Month 36
            </h3>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h4 className="font-semibold text-foam-white mb-4 flex items-center gap-2">
                  <Star className="w-5 h-5 text-sunset-orange" />
                  Business Empire
                </h4>
                <ul className="space-y-2 text-foam-white/80">
                  <li>• #1 diving operator in Andaman</li>
                  <li>• 5-8 locations across Indian Ocean</li>
                  <li>• 50-100 employees across operations</li>
                  <li>• Multiple revenue streams & recurring income</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-foam-white mb-4 flex items-center gap-2">
                  <TrendingUp className="w-5 h-5 text-seaweed-green" />
                  Financial Achievement
                </h4>
                <ul className="space-y-2 text-foam-white/80">
                  <li>• ₹15-25 crore annual revenue</li>
                  <li>• ₹75-150 crores business valuation</li>
                  <li>• 45%+ profit margins</li>
                  <li>• Multiple exit opportunities</li>
                </ul>
              </div>
            </div>
            
            <motion.div
              initial={{ opacity: 0 }}
              animate={inView ? { opacity: 1 } : {}}
              transition={{ duration: 0.8, delay: 1.3 }}
              className="mt-8 pt-6 border-t border-white/20 text-center"
            >
              <p className="text-xl gradient-text font-bold">
                From ₹50 lakhs to ₹20+ crores in 36 months
              </p>
              <p className="text-foam-white/60 mt-2">
                A 400x growth story and industry leadership position
              </p>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
} 