import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const CTASection = () => {
  return (
    <section className="section-padding bg-gradient-to-br from-primary/5 via-accent/30 to-background">
      <div className="container-narrow text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold font-display mb-4 text-foreground">
            Ready to Modernize Your Analytics?
          </h2>
          <p className="text-muted-foreground mb-8 max-w-xl mx-auto leading-relaxed">
            Join the webinar to understand how enterprises are modernizing
            analytics through governed, intelligence-driven BI migrations.
          </p>
          <Link to="/registration">
            <Button
              size="lg"
              className="text-base px-10 py-6 rounded-lg shadow-lg shadow-primary/20"
            >
              Save Your Seat
            </Button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default CTASection;
