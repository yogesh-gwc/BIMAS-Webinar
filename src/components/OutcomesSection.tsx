import { motion } from "framer-motion";

const outcomes = [
  { metric: "50–70%", label: "Reduction in migration effort" },
  { metric: "Faster", label: "Analytics modernization" },
  { metric: "Lower", label: "Migration risk" },
  { metric: "Reduced", label: "License overlap cost" },
  { metric: "Scalable", label: "Enterprise framework" },
];

const OutcomesSection = () => (
  <section className="section-padding section-alt">
    <div className="container-narrow">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="text-3xl md:text-4xl font-bold font-display mb-10 text-foreground">
          Business Outcomes
        </h2>
      </motion.div>
      <div className="grid grid-cols-2 md:grid-cols-5 gap-5">
        {outcomes.map((o, i) => (
          <motion.div
            key={o.label}
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: i * 0.06 }}
            className="text-center border rounded-xl p-5 bg-card shadow-sm"
          >
            <p className="text-2xl font-bold gradient-text mb-1">{o.metric}</p>
            <p className="text-xs text-muted-foreground font-medium">{o.label}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default OutcomesSection;
