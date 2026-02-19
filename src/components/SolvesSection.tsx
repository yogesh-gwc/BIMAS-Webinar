import { motion } from "framer-motion";
import { Target, TrendingDown, Users, Zap } from "lucide-react";

const outcomes = [
  { icon: Target, label: "Predictable migration timelines" },
  { icon: TrendingDown, label: "Reduced effort and cost" },
  { icon: Users, label: "Lower people dependency" },
  { icon: Zap, label: "Faster platform transitions" },
];

const SolvesSection = () => (
  <section className="section-padding section-lavender">
    <div className="container-narrow">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="text-3xl md:text-4xl font-bold font-display mb-3 text-foreground">
          What BIMAS Solves
        </h2>
        <p className="text-muted-foreground mb-10 max-w-2xl text-base">
          BIMAS eliminates uncertainty in BI migrations by combining automation,
          selective AI, and human validation into a governed execution framework.
        </p>
      </motion.div>
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
        {outcomes.map((o, i) => (
          <motion.div
            key={o.label}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: i * 0.08 }}
            className="bg-card border rounded-xl p-5 text-center shadow-sm"
          >
            <div className="w-12 h-12 rounded-full bg-accent flex items-center justify-center mx-auto mb-3">
              <o.icon className="w-5 h-5 text-accent-foreground" />
            </div>
            <p className="text-sm font-medium text-foreground">{o.label}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default SolvesSection;
