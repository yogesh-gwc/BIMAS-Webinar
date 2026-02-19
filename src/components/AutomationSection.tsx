import { motion } from "framer-motion";
import { TrendingUp, Shield, ArrowRightLeft, CheckCircle2, BarChart3 } from "lucide-react";

const AutomationSection = () => (
  <section className="section-padding section-lavender">
    <div className="container-narrow">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="grid md:grid-cols-2 gap-12 items-center"
      >
        <div>
          <h2 className="text-3xl md:text-4xl font-bold font-display mb-4 text-foreground">
            Automation & Efficiency
          </h2>
          <p className="text-muted-foreground mb-6 leading-relaxed">
            Automation evolved from ~40% to ~70%. The system builds datasets,
            calculations, and dashboards. Human effort focused on validation and
            sign-off.
          </p>
          <div className="flex items-center gap-3 bg-card border rounded-lg px-5 py-4 shadow-sm">
            <TrendingUp className="w-8 h-8 text-primary shrink-0" />
            <div>
              <p className="font-semibold text-foreground text-lg">~70%</p>
              <p className="text-sm text-muted-foreground">Automation maturity achieved</p>
            </div>
          </div>
        </div>
        <div>
          <h2 className="text-3xl md:text-4xl font-bold font-display mb-4 text-foreground">
            Governance & Trust
          </h2>
          <ul className="space-y-3">
            {[
              { icon: Shield, text: "Deterministic extraction" },
              { icon: CheckCircle2, text: "Controlled AI usage" },
              { icon: BarChart3, text: "Full documentation" },
              { icon: ArrowRightLeft, text: "Human-in-the-loop validation" },
            ].map((item) => (
              <li key={item.text} className="flex items-center gap-3 text-muted-foreground">
                <item.icon className="w-4 h-4 text-primary shrink-0" />
                <span className="text-sm">{item.text}</span>
              </li>
            ))}
          </ul>
          <p className="mt-4 text-sm font-medium text-accent-foreground bg-accent inline-block px-3 py-1.5 rounded-md">
            No black-box migrations
          </p>
        </div>
      </motion.div>
    </div>
  </section>
);

export default AutomationSection;
