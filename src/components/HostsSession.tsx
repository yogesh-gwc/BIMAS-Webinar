// src/components/HostsSession.tsx
import { motion } from "framer-motion";
import { Linkedin } from "lucide-react";
import host1 from "../assets/host1-CEN3weqv.png";
import host2 from "../assets/host2-CJnOYPrv.png";

interface HostProps {
  name: string;
  title: string;
  role: string;
  description: string;
  linkedinUrl?: string;
  imageUrl: string;
}

const hosts: HostProps[] = [
  {
    name: "Dhanavijhaj Jayasathiyan",
    title: "Associate Vice President",
    role: "GWC Data.AI",
    description: "At GWC DATA.AI, I oversee delivery across analytics, AI, and digital transformation programs, where speed, structure, and clarity drive outcomes. From strategy blueprint to operational adoption, I build scalable systems, empower teams, and drive programs that sustain performance not just complete projects. For me, excellence is not only delivery it's alignment, accountability, and impact at scale.",
    linkedinUrl: "https://www.linkedin.com/in/dhana-vijhay-a37a803b/",
    imageUrl: host1,
  },
  {
    name: "Subash Ramu",
    title: "Chief Technology Officer",
    role: "GWC Data.AI",
    description: 'I help enterprises evolve from being data-aware to becoming AI-driven, transforming raw information into a real competitive advantage. My work is driven by one belief  "when technology is built right, it doesn’t just move data; it moves people and businesses forward." Through 200+ successful implementations using DOMO, Snowflake, and GCP, I’ve seen how clarity replaces complexity when data becomes truly usable. The goal has always been the same — simplify technology so teams can focus on impact, not infrastructure. Because the future belongs to those who can see smarter, decide faster, and act confidently.',
    linkedinUrl: "https://www.linkedin.com/in/subash-ramu-92553784/",
    imageUrl: host2,
  },
];

const HostsSession = () => {
  return (
    <section className="py-12 md:py-20 px-4 bg-gradient-to-b from-background via-background to-accent/5 relative overflow-hidden">
      {/* Background decorative elements - reduced size on mobile */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-20 left-10 md:top-40 md:left-20 w-48 h-48 md:w-96 md:h-96 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 md:bottom-40 md:right-20 w-48 h-48 md:w-96 md:h-96 bg-accent/5 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-10 md:mb-16"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold font-display mb-4">
            Meet Your <span className="gradient-text">Hosts</span>
          </h2>
          <div className="w-20 md:w-24 h-1 bg-gradient-to-r from-primary to-accent mx-auto rounded-full" />
        </motion.div>

        {/* Hosts Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8 xl:gap-12">
          {hosts.map((host, index) => (
            <motion.div
              key={host.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="group h-full"
            >
              <div className="bg-card rounded-xl md:rounded-2xl shadow-lg md:shadow-xl overflow-hidden border border-border hover:shadow-2xl transition-all duration-500 hover:-translate-y-1 md:hover:-translate-y-2 h-full flex flex-col">
                {/* Card Header with Square Image - Optimized for mobile */}
                <div className="flex flex-col md:flex-row items-start gap-3 md:gap-4 p-4 md:p-6">
                  {/* Square Image Container - Smaller on mobile */}
                  <div className="w-24 h-24 md:w-40 md:h-40 flex-shrink-0 rounded-lg overflow-hidden border border-border mx-auto md:mx-0">
                    <img 
                      src={host.imageUrl} 
                      alt={host.name}
                      className="w-full  object-cover object-center"
                    />
                  </div>

                  {/* Name, Title, and LinkedIn Icon - Adjusted spacing for mobile */}
                  <div className="flex-1 w-full md:w-auto">
                    <div className="flex items-start justify-between mt-0 md:mt-8">
                      <div className="flex-1">
                        <h3 className="text-xl md:text-2xl font-bold text-foreground mb-1 text-center md:text-left">
                          {host.name}
                        </h3>
                        <p className="text-base md:text-lg font-semibold text-primary text-center md:text-left">
                          {host.title}
                        </p>
                        <p className="text-xs md:text-sm text-muted-foreground text-center md:text-left">
                          {host.role}
                        </p>
                      </div>
                      
                      {/* LinkedIn Icon - Repositioned for mobile */}
                      <a
                        href={host.linkedinUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-muted-foreground hover:text-primary transition-colors ml-2 md:ml-4 mt-1 md:mt-0"
                        aria-label={`${host.name}'s LinkedIn profile`}
                      >
                        <Linkedin className="w-5 h-5 md:w-6 md:h-6" />
                      </a>
                    </div>
                  </div>
                </div>

                {/* Card Body with Description - Adjusted text size for mobile */}
                <div className="px-4 md:px-6 pb-4 md:pb-6 pt-0 flex-grow">
                  <p className="text-sm md:text-base text-foreground/80 leading-relaxed">
                    "{host.description}"
                  </p>
                </div>

                {/* Decorative bottom gradient line */}
                <div className="h-0.5 md:h-1 w-full bg-gradient-to-r from-primary/50 via-accent/50 to-primary/50 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-700 origin-left" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HostsSession;