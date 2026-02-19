import { motion } from "framer-motion";
import { Briefcase, BarChart3, Network, Building2 } from "lucide-react";

const audiences = [
  { icon: Briefcase, label: "CIOs and Analytics Leaders" },
  { icon: BarChart3, label: "BI Platform Owners" },
  { icon: Network, label: "Enterprise Architects" },
  { icon: Building2, label: "Organizations planning BI modernization" },
];

const AudienceSection = () => (
  <section className="section-padding">
    <div className="container-narrow">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="text-3xl md:text-4xl font-bold font-display mb-8 text-foreground">
          Who Should Attend
        </h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {audiences.map((a, i) => (
            <motion.div
              key={a.label}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
              className="flex items-center gap-3 border rounded-xl p-4 bg-card shadow-sm"
            >
              <a.icon className="w-5 h-5 text-primary shrink-0" />
              <span className="text-sm font-medium text-foreground">{a.label}</span>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  </section>
);

export default AudienceSection;
