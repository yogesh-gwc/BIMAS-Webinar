import { motion } from "framer-motion";
import { Brain, LayoutTemplate, Scale } from "lucide-react";

const aiFeatures = [
  {
    icon: Brain,
    title: "AI-Assisted Calculation Conversion",
    desc: "Translates source logic into target-platform equivalents. Logic documented and validated.",
  },
  {
    icon: LayoutTemplate,
    title: "AI-Driven Layout Interpretation",
    desc: "Dashboard layouts analyzed. Structure recreated in the target platform.",
  },
  {
    icon: Scale,
    title: "Balanced Automation",
    desc: "AI used where it adds value. Deterministic logic where precision matters. Human validation for enterprise trust.",
  },
];

const AISection = () => (
  <section className="section-padding">
    <div className="container-narrow">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="text-3xl md:text-4xl font-bold font-display mb-3 text-foreground">
          Intelligent Use of AI
        </h2>
        <p className="text-muted-foreground mb-10 max-w-2xl">
          Selective, governed AI applied where it creates the most impact.
        </p>
      </motion.div>
      <div className="grid md:grid-cols-3 gap-6">
        {aiFeatures.map((f, i) => (
          <motion.div
            key={f.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: i * 0.1 }}
            className="border rounded-xl p-6 bg-card shadow-sm"
          >
            <div className="w-10 h-10 rounded-lg bg-accent flex items-center justify-center mb-4">
              <f.icon className="w-5 h-5 text-accent-foreground" />
            </div>
            <h3 className="text-lg font-semibold font-display mb-2 text-foreground">
              {f.title}
            </h3>
            <p className="text-sm text-muted-foreground leading-relaxed">{f.desc}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default AISection;
