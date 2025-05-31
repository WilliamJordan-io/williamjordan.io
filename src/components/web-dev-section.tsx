import { motion } from "framer-motion";
import { 
  Code, 
  Smartphone, 
  Server, 
  Cloud, 
  Shield,
  GitBranch 
} from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";



export default function WebDevSection() {
  const techStacks = [
    {
      category: "Frontend Development",
      color: "text-primary",
      technologies: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Vue.js"]
    },
    {
      category: "Backend Development", 
      color: "text-success",
      technologies: ["Node.js", "Python", "Express.js", "FastAPI", "PostgreSQL"]
    },
    {
      category: "Development Tools",
      color: "text-primary",
      technologies: ["VS Code", "GitHub", "Replit", "Docker", "Vercel"]
    }
  ];

  const services = [
    {
      icon: Code,
      title: "Custom Web Applications",
      description: "Scalable, high-performance applications tailored to business requirements",
      color: "text-primary"
    },
    {
      icon: Smartphone,
      title: "Responsive Design",
      description: "Mobile-first, cross-platform compatible designs and implementations",
      color: "text-success"
    },
    {
      icon: Server,
      title: "API Development",
      description: "RESTful and GraphQL APIs with comprehensive documentation",
      color: "text-primary"
    },
    {
      icon: Cloud,
      title: "Cloud Deployment",
      description: "Scalable cloud infrastructure and DevOps implementation",
      color: "text-success"
    },
    {
      icon: Shield,
      title: "Security & Performance",
      description: "Advanced security measures and performance optimization",
      color: "text-primary"
    }
  ];



  return (
    <section id="web-dev" className="py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ amount: 0.05, margin: "0px 0px -200px 0px" }}
        >
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            Full-Stack Web <span className="text-primary">Development</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Building robust, scalable web applications and websites using cutting-edge technologies and modern development practices.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          {/* Technical Expertise */}
          <motion.div 
            className="space-y-8"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ amount: 0.05, margin: "0px 0px -200px 0px" }}
          >
            <h3 className="text-2xl font-bold mb-6">Technical Expertise</h3>
            
            <div className="space-y-6">
              {techStacks.map((stack, index) => (
                <motion.div 
                  key={stack.category}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  viewport={{ amount: 0.05, margin: "0px 0px -200px 0px" }}
                >
                  <Card className="bg-secondary p-6">
                    <CardContent className="p-0">
                      <h4 className={`text-lg font-semibold mb-3 ${stack.color}`}>
                        {stack.category}
                      </h4>
                      <div className="flex flex-wrap gap-3">
                        {stack.technologies.map((tech) => (
                          <Badge 
                            key={tech} 
                            variant="secondary" 
                            className="bg-background text-foreground"
                          >
                            {tech}
                          </Badge>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Development Services */}
          <motion.div 
            className="space-y-8"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ amount: 0.05, margin: "0px 0px -200px 0px" }}
          >
            <h3 className="text-2xl font-bold mb-6">Development Services</h3>
            
            <div className="space-y-4">
              {services.map((service, index) => (
                <motion.div 
                  key={service.title}
                  className="flex items-start space-x-4 p-4 bg-secondary/50 rounded-lg"
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  viewport={{ amount: 0.05, margin: "0px 0px -200px 0px" }}
                >
                  <service.icon className={`${service.color} h-6 w-6 mt-1 flex-shrink-0`} />
                  <div>
                    <h4 className="font-semibold mb-2">{service.title}</h4>
                    <p className="text-muted-foreground text-sm">{service.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

      </div>
    </section>
  );
}
