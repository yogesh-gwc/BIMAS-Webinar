import { motion } from "framer-motion";
import { Link, LayoutGrid, Puzzle } from "lucide-react";

const steps = [
  {
    num: "01",
    icon: Link,
    title: "Secure Source Platform Connection",
    desc: "Connects to leading BI platforms such as Tableau, Power BI, Sigma, QuickSight, and others.",
  },
  {
    num: "02",
    icon: LayoutGrid,
    title: "Asset Inventory & Tracking",
    desc: "Dashboards, datasets, prep flows, and calculations. Acts as a migration control plane and progress tracker.",
  },
  {
    num: "03",
    icon: Puzzle,
    title: "Asset Decomposition & Blueprint Creation",
    desc: "Dataset requirements, visual definitions, calculations and metrics, asset relationships. Creates a precise migration blueprint.",
  },
];

const HowItWorksSection = () => (
  <section className="section-padding section-alt">
    <div className="container-narrow">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="text-3xl md:text-4xl font-bold font-display mb-3 text-foreground">
          How BIMAS Works — End-to-End
        </h2>
        <p className="text-muted-foreground mb-10 max-w-2xl">
          A structured, three-step flow from connection to blueprint.
        </p>
      </motion.div>
      <div className="space-y-6">
        {steps.map((s, i) => (
          <motion.div
            key={s.num}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: i * 0.12 }}
            className="flex gap-5 items-start bg-card border rounded-xl p-6 shadow-sm"
          >
            <div className="shrink-0 w-12 h-12 rounded-full bg-primary flex items-center justify-center">
              <span className="text-sm font-bold text-primary-foreground">{s.num}</span>
            </div>
            <div>
              <h3 className="text-lg font-semibold font-display mb-1 text-foreground">
                {s.title}
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {s.desc}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default HowItWorksSection;
