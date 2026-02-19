// src/components/HeroSection.tsx
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import heroBg from "@/assets/hero-bg.jpg";
import { CalendarDays, Clock } from "lucide-react";

const HeroSection = () => {
  const navigate = useNavigate();

  return (
    <section className="relative overflow-hidden min-h-[90vh] flex items-center">
      <div
        className="absolute inset-0 bg-cover bg-center opacity-40"
        style={{ backgroundImage: `url(${heroBg})` }}
      />
      <div className="absolute inset-0 bg-gradient-to-br from-background via-background/80 to-accent/30" />
      <div className="container-narrow relative z-10 section-padding">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="max-w-4xl mx-auto text-center flex flex-col items-center"
        >
          <span className="inline-block px-4 py-1.5 rounded-full bg-accent text-accent-foreground text-sm font-medium mb-6 tracking-wide">
            Upcoming Webinar
          </span>

          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold font-display leading-tight mb-4 text-foreground">
            BIMAS – BI Migration{" "}
            <span className="gradient-text">Accelerator as a Service</span>
          </h1>
          <p className="text-mg md:text-lg text-muted-foreground font-medium mb-6 leading-relaxed">
            Accelerating BI Migrations with Confidence, Accuracy, and Speed
          </p>
          <p className="text-base md:text-lg text-muted-foreground mb-10 max-w-2xl mx-auto leading-relaxed">
            A structured, AI-assisted framework for migrating analytics across
            BI platforms. BIMAS enables organizations to modernize analytics
            safely by reducing migration effort, cost, and operational risk
            without locking into a single BI tool.
          </p>

          {/* Date and Time Display */}
          <div className="flex justify-center gap-6 mb-10">
            <div className="flex items-center gap-2 text-accent-foreground bg-accent backdrop-blur-sm px-4 py-2 rounded-full">
              <CalendarDays className="w-4 h-4" />
              <span className="text-sm font-medium">March 4, 2026</span>
            </div>
            <div className="flex items-center gap-2 text-accent-foreground bg-accent backdrop-blur-sm px-4 py-2 rounded-full">
              <Clock className="w-4 h-4" />
              <span className="text-sm font-medium">3:30 PM IST</span>
            </div>
          </div>
          <Button
            size="lg"
            className="text-base px-8 py-6 rounded-lg shadow-lg shadow-primary/20"
            onClick={() => navigate("/registration")}
          >
            Register for the Webinar
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
