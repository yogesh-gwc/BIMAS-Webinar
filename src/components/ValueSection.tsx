import { motion } from "framer-motion";
import { Zap, DollarSign, BookOpen } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "./ui/button";

const pillars = [
  {
    icon: Zap,
    title: "Faster Time-to-Value",
    items: [
      "Automated asset discovery",
      "Pre-defined migration workflows",
      "Assisted dashboard and logic reconstruction",
    ],
  },
  {
    icon: DollarSign,
    title: "Reduced Total Cost of Ownership",
    items: [
      "Shorter parallel license periods",
      "Lower manual rebuild effort",
      "Faster legacy platform retirement",
    ],
  },
  {
    icon: BookOpen,
    title: "Knowledge Abstraction",
    items: [
      "Business logic automatically documented",
      "Migration becomes repeatable and auditable",
      "Process-driven instead of people-driven",
    ],
  },
];

const ValueSection = () => (
  <section className="section-padding">
    <div className="container-narrow">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="text-3xl md:text-4xl font-bold font-display mb-10 text-foreground">
          Value Proposition
        </h2>
      </motion.div>
      <div className="grid md:grid-cols-3 gap-6">
        {pillars.map((p, i) => (
          <motion.div
            key={p.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: i * 0.1 }}
            className="border rounded-xl p-6 bg-card shadow-sm"
          >
            <div className="w-10 h-10 rounded-lg bg-secondary flex items-center justify-center mb-4">
              <p.icon className="w-5 h-5 text-secondary-foreground" />
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
      <div className="flex justify-center mt-12">
        <Link to="/registration">
          <Button
            size="lg"
            className="text-base px-8 py-6 rounded-lg shadow-lg shadow-primary/20"
          >
            Register for the Webinar
          </Button>
        </Link>
      </div>
    </div>
  </section>
);

export default ValueSection;
