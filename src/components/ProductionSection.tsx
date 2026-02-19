import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";

const adoptionPoints = [
  "Implemented across multiple enterprise customers",
  "Proven production migrations",
  "Active modernization programs in progress",
  "Strong inbound interest from BI transformation initiatives",
];

const ProductionSection = () => (
  <section className="section-padding">
    <div className="container-narrow">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="text-3xl md:text-4xl font-bold font-display mb-8 text-foreground">
          Production Adoption
        </h2>
        <div className="bg-card border rounded-xl p-8 shadow-sm">
          <ul className="space-y-4">
            {adoptionPoints.map((point) => (
              <li key={point} className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-primary mt-0.5 shrink-0" />
                <span className="text-muted-foreground">{point}</span>
              </li>
            ))}
          </ul>
        </div>
      </motion.div>
    </div>
  </section>
);

export default ProductionSection;
