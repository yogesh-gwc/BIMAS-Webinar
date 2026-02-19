import { motion } from "framer-motion";
import { Clock, DollarSign, Users } from "lucide-react";

const problems = [
  {
    icon: Clock,
    title: "Long Migration Timelines",
    items: [
      "Manual discovery of assets",
      "Rebuilding dashboards from scratch",
      "Rewriting calculations and models",
      "Repeated validation cycles",
    ],
  },
  {
    icon: DollarSign,
    title: "Parallel BI License Costs",
    items: [
      "Running multiple BI tools simultaneously",
      "Delayed decommissioning due to migration uncertainty",
    ],
  },
  {
    icon: Users,
    title: "Knowledge & Resource Dependency",
    items: [
      "Tool-specific expertise",
      "High reliance on individual contributors",
      "Institutional knowledge loss",
    ],
  },
];

const ChallengesSection = () => (
  <section className="section-padding">
    <div className="container-narrow">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="text-3xl md:text-4xl font-bold font-display mb-3 text-foreground">
          Why BI Migrations Are Hard
        </h2>
        <p className="text-muted-foreground mb-10 max-w-2xl">
          Organizations face compounding challenges that slow modernization.
        </p>
      </motion.div>
      <div className="grid md:grid-cols-3 gap-6">
        {problems.map((p, i) => (
          <motion.div
            key={p.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: i * 0.1 }}
            className="bg-card border rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow"
          >
            <div className="w-10 h-10 rounded-lg bg-accent flex items-center justify-center mb-4">
              <p.icon className="w-5 h-5 text-accent-foreground" />
            </div>
            <h3 className="text-lg font-semibold font-display mb-3 text-foreground">
              {p.title}
            </h3>
            <ul className="space-y-2">
              {p.items.map((item) => (
                <li
                  key={item}
                  className="text-sm text-muted-foreground flex items-start gap-2"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-primary mt-1.5 shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default ChallengesSection;
