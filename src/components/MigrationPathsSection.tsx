import { motion } from "framer-motion";
import { ArrowRightLeft, Cloud, Layers } from "lucide-react";

const MigrationPathsSection = () => (
  <section className="section-padding section-alt">
    <div className="container-narrow">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="text-3xl md:text-4xl font-bold font-display mb-8 text-foreground">
          Supported Migration Paths
        </h2>
        <div className="grid sm:grid-cols-3 gap-5">
          {[
            { icon: ArrowRightLeft, label: "BI platform to BI platform migrations" },
            { icon: Cloud, label: "Cloud and enterprise BI tools" },
            { icon: Layers, label: "Multi-platform coexistence strategies" },
          ].map((p, i) => (
            <motion.div
              key={p.label}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
              className="border rounded-xl p-5 bg-card shadow-sm flex items-start gap-4"
            >
              <p.icon className="w-5 h-5 text-primary mt-0.5 shrink-0" />
              <p className="text-sm text-muted-foreground font-medium">{p.label}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  </section>
);

export default MigrationPathsSection;
