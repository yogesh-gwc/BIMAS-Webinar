import { motion } from "framer-motion";

const OverviewSection = () => (
  <section className="section-padding section-alt">
    <div className="container-narrow">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="text-3xl md:text-4xl font-bold font-display mb-6 text-foreground">
          Webinar Overview
        </h2>
        <div className="bg-card rounded-xl border p-8 md:p-10 shadow-sm">
          <p className="text-muted-foreground leading-relaxed text-base md:text-lg">
            BIMAS is an AI-assisted migration framework built by GWC to help
            enterprises migrate analytics assets across BI platforms with speed,
            accuracy, and governance. Rather than treating migration as a
            one-time technical exercise, BIMAS introduces a repeatable,
            auditable, and intelligence-driven approach that preserves business
            logic, calculations, and dashboard intent across platforms.
          </p>
        </div>
      </motion.div>
    </div>
  </section>
);

export default OverviewSection;
