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
    linkedinUrl: "https://linkedin.com/in/",
    imageUrl: host1,
  },
  {
    name: "Srinath Raja",
    title: "Chief Data Officer",
    role: "GWC Data.AI",
    description: "At GWC Data.AI, data is truly the cornerstone of everything we do. Without solid data, no decision can be fully trusted. In my role as Chief Data Officer, I focus on turning complex data into clear, actionable insights that empower our clients to make confident, data-driven choices. My goal is to ensure that every piece of information we provide translates into real business value.",
    linkedinUrl: "https://linkedin.com/in/",
    imageUrl: host2,
  },
];

const HostsSession = () => {
  return (
    <section className="py-20 px-4 bg-gradient-to-b from-background via-background to-accent/5 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-40 left-20 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-40 right-20 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          {/* <span className="inline-block px-4 py-1.5 rounded-full bg-accent/20 text-accent-foreground text-sm font-medium mb-4 tracking-wide">
            Expert Speakers
          </span> */}
          <h2 className="text-4xl md:text-5xl font-bold font-display mb-4">
            Meet Your <span className="gradient-text">Hosts</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-accent mx-auto rounded-full" />
        </motion.div>

        {/* Hosts Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 xl:gap-12">
          {hosts.map((host, index) => (
            <motion.div
              key={host.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="group h-full"
            >
              <div className="bg-card rounded-2xl shadow-xl overflow-hidden border border-border hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 h-full flex flex-col">
                {/* Card Header with Square Image */}
                <div className="flex flex-col md:flex-row items-start gap-4 p-6">
                  {/* Square Image Container - No blur, no overlays */}
                  <div className="w-full md:w-40 h-40 md:h-50 flex-shrink-0 rounded-lg overflow-hidden border border-border">
                    <img 
                      src={host.imageUrl} 
                      alt={host.name}
                      className="w-full object-cover object-center"
                    />
                  </div>

                  {/* Name, Title, and LinkedIn Icon */}
                  <div className="flex-1">
                    <div className="flex items-start justify-between mt-8">
                      <div className="flex flex-col ">
                        <h3 className="text-2xl font-bold text-foreground mb-1">
                          {host.name}
                        </h3>
                        <p className="text-lg font-semibold text-primary">
                          {host.title}
                        </p>
                        <p className="text-sm text-muted-foreground">
                          {host.role}
                        </p>
                      </div>
                      
                      {/* LinkedIn Icon - Outside image */}
                      <a
                        href={host.linkedinUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-muted-foreground hover:text-primary transition-colors ml-4"
                        aria-label={`${host.name}'s LinkedIn profile`}
                      >
                        <Linkedin className="w-6 h-6" />
                      </a>
                    </div>
                  </div>
                </div>

                {/* Card Body with Description */}
                <div className="px-6 pb-6 pt-0 flex-grow">
                  <p className="text-foreground/80 leading-relaxed">
                    "{host.description}"
                  </p>
                </div>

                {/* Decorative bottom gradient line */}
                <div className="h-1 w-full bg-gradient-to-r from-primary/50 via-accent/50 to-primary/50 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-700 origin-left" />
              </div>
            </motion.div>
          ))}
        </div>

      
      </div>
    </section>
  );
};

export default HostsSession;