import { motion } from "framer-motion";
import { 
  Brain, 
  Palette, 
  Globe, 
  Clock, 
  Database, 
  TrendingUp,
  CheckCircle,
  BarChart3,
  PieChart
} from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import marketShareChart from "@assets/image_1747989931646.png";
import marketGrowthChart from "@assets/image_1747989909113.png";
import timeAiChatImage from "@assets/image_1748149837192.png";
import leadCaptureImage from "@assets/image_1748227418105.png";
import voiceflowImage from "@assets/image_1748227433700.png";
import calendlyImage from "@assets/image_1748227468430.png";

export default function AISupportSection() {
  const features = [
    {
      icon: Brain,
      title: "Real-Time Intelligence",
      description: "Powered by OpenAI's GPT-4o API for instant, accurate responses with advanced natural language processing capabilities.",
      color: "text-primary"
    },
    {
      icon: Palette,
      title: "Brand Alignment",
      description: "Fully customizable agents that match your brand voice, tone, and standards while adapting to customer context.",
      color: "text-success"
    },
    {
      icon: Globe,
      title: "Global Reach",
      description: "Support for 10+ major languages enabling businesses to serve diverse global audiences effectively.",
      color: "text-primary"
    },
    {
      icon: Clock,
      title: "24/7 Operations",
      description: "Handle unlimited inquiries simultaneously with no wait times, providing scalable solutions around the clock.",
      color: "text-success"
    },
    {
      icon: Database,
      title: "CRM Integration",
      description: "Seamless integration with Airtable, Calendly, and other business platforms for streamlined workflows.",
      color: "text-primary"
    },
    {
      icon: TrendingUp,
      title: "Continuous Improvement",
      description: "Agents learn from interactions and performance metrics to enhance engagement and response quality over time.",
      color: "text-success"
    }
  ];

  const timeAiFeatures = [
    {
      title: "Real-Time Info",
      description: "Always current product and service details."
    },
    {
      title: "Customizable",
      description: "Match your brand's voice and standards."
    },
    {
      title: "24/7 Service",
      description: "No wait times, anytime support."
    },
    {
      title: "Scalable",
      description: "Manage many queries at once."
    },
    {
      title: "Learning AI",
      description: "Improves with each interaction."
    },
    {
      title: "Multilingual",
      description: "Serve a global audience."
    },
    {
      title: "Easy Integration",
      description: "Fits into your existing systems."
    }
  ];

  const whyChooseUs = [
    {
      title: "Cost-Effective",
      description: "Reduce support costs."
    },
    {
      title: "Satisfaction",
      description: "Quick, accurate responses enhance customer loyalty."
    },
    {
      title: "Insights",
      description: "Learn from customer interactions."
    },
    {
      title: "Reliability",
      description: "99.9% uptime ensures consistent service availability."
    },
    {
      title: "Expertise",
      description: "Advanced AI trained on industry best practices."
    },
    {
      title: "Growth",
      description: "Scale effortlessly as your business expands."
    },
    {
      title: "Innovation",
      description: "Cutting-edge technology keeps you ahead of competitors."
    }
  ];

  return (
    <section id="ai-support" className="py-12 bg-secondary/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          viewport={{ amount: 0.05, margin: "0px 0px -200px 0px" }}
        >
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            AI Customer Support <span className="text-primary">Agents</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Leveraging advanced GPT-4o technology to create intelligent, multilingual customer support agents that operate 24/7 and integrate seamlessly with your business systems.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 mb-16">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ amount: 0.05, margin: "0px 0px -200px 0px" }}
            >
              <Card className="bg-secondary hover:bg-secondary/80 transition-colors border border-primary/10 h-full">
                <CardContent className="p-8">
                  <feature.icon className={`${feature.color} h-8 w-8 mb-4`} />
                  <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
                  <p className="text-muted-foreground">{feature.description}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Time AI Customer Support Agents Section */}
        <motion.div 
          className="bg-gradient-to-br from-primary/10 to-blue-600/10 rounded-2xl p-8 border border-primary/20"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ amount: 0.05, margin: "0px 0px -200px 0px" }}
        >
          <div className="text-center mb-8">
            <h3 className="text-3xl font-bold mb-4">Deploy Your Custom ChatGPT-4o Customer Support Agent for Your Business</h3>
            <h4 className="text-2xl text-primary font-semibold mb-6">Introducing Time AI Customer Support Agents</h4>
            
            <div className="max-w-md mx-auto mb-8">
              <img 
                src={timeAiChatImage} 
                alt="Time AI Chat Interface"
                className="w-full rounded-xl shadow-2xl border border-gray-600"
              />
            </div>
            
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              Transform customer service with our AI Agents, powered by Chat GPT 4o for instant, accurate support.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-8">
            <div>
              <h5 className="text-xl font-bold mb-6 text-center">Features:</h5>
              <div className="space-y-4">
                {timeAiFeatures.map((feature, index) => (
                  <motion.div 
                    key={feature.title}
                    className="bg-white/5 p-4 rounded-lg border border-gray-700"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                    viewport={{ amount: 0.05, margin: "0px 0px -200px 0px" }}
                  >
                    <h6 className="font-semibold text-primary mb-2">{feature.title}:</h6>
                    <p className="text-sm text-muted-foreground">{feature.description}</p>
                  </motion.div>
                ))}
              </div>
            </div>

            <div>
              <h5 className="text-xl font-bold mb-6 text-center">Why Choose Us?</h5>
              <div className="space-y-4">
                {whyChooseUs.map((reason, index) => (
                  <motion.div 
                    key={reason.title}
                    className="bg-white/5 p-4 rounded-lg border border-gray-700"
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                    viewport={{ amount: 0.05, margin: "0px 0px -200px 0px" }}
                  >
                    <h6 className="font-semibold text-primary mb-2">{reason.title}:</h6>
                    <p className="text-sm text-muted-foreground">{reason.description}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>

          <div className="text-center">
            <p className="text-lg font-semibold text-primary">
              Elevate support with Time AI, where tech meets empathy.
            </p>
          </div>
        </motion.div>

        {/* Advanced Capabilities Section */}
        <motion.div 
          className="mt-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ amount: 0.05, margin: "0px 0px -200px 0px" }}
        >
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold mb-4">Advanced Integration Capabilities</h3>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Seamlessly integrate with your existing business systems for comprehensive customer support automation
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
            {/* Lead Capture and CRM Integration */}
            <motion.div 
              className="bg-white/5 rounded-xl p-6 border border-gray-700"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ amount: 0.05, margin: "0px 0px -200px 0px" }}
            >
              <div className="mb-6">
                <img 
                  src={leadCaptureImage} 
                  alt="Lead Capture and CRM Integration"
                  className="w-full h-64 object-cover rounded-lg shadow-lg border border-gray-600"
                />
              </div>
              <h4 className="text-xl font-bold text-primary mb-3">Lead Capture & CRM Integration</h4>
              <div className="space-y-2 text-sm text-muted-foreground h-44">
                <p>• Collects users' names and email addresses automatically</p>
                <p>• Feeds user data into an Airtable funnel for CRM outreach</p>
                <p>• Automatic lead qualification and scoring system</p>
                <p>• Real-time sync with your existing sales pipeline</p>
              </div>
            </motion.div>

            {/* Voiceflow Flow Diagram */}
            <motion.div 
              className="bg-white/5 rounded-xl p-6 border border-gray-700"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ amount: 0.05, margin: "0px 0px -200px 0px" }}
            >
              <div className="mb-6">
                <img 
                  src={voiceflowImage} 
                  alt="Voiceflow Flow Diagram"
                  className="w-full h-64 object-cover rounded-lg shadow-lg border border-gray-600"
                />
              </div>
              <h4 className="text-xl font-bold text-primary mb-3">Intelligent Conversation Flow</h4>
              <div className="space-y-2 text-sm text-muted-foreground h-44">
                <p>• Customizable agent instructions and knowledge base</p>
                <p>• Integrated with Chat GPT-4o for intelligent responses</p>
                <p>• Scans website URLs for accurate, current information</p>
                <p>• Adds conversational tone and personality naturally</p>
              </div>
            </motion.div>

            {/* Calendly Appointment Setting */}
            <motion.div 
              className="bg-white/5 rounded-xl p-6 border border-gray-700"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              viewport={{ amount: 0.05, margin: "0px 0px -200px 0px" }}
            >
              <div className="mb-6">
                <img 
                  src={calendlyImage} 
                  alt="Calendly Appointment Setting Capabilities"
                  className="w-full h-64 object-cover rounded-lg shadow-lg border border-gray-600"
                />
              </div>
              <h4 className="text-xl font-bold text-primary mb-3">Appointment Setting Capabilities</h4>
              <div className="space-y-2 text-sm text-muted-foreground h-44">
                <p>• Set appointments directly with the Time AI Agent</p>
                <p>• Appointments managed through Calendly integration</p>
                <p>• Automatic timezone detection and scheduling system</p>
                <p>• Seamless calendar sync and confirmation emails</p>
              </div>
            </motion.div>
          </div>
        </motion.div>

        {/* Market Data Section */}
        <motion.div 
          className="mt-20"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ amount: 0.05, margin: "0px 0px -200px 0px" }}
        >
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold mb-4">The AI Revolution is Here</h3>
            <p className="text-xl text-muted-foreground">
              Join the $7.5+ billion chatbot market that's transforming customer service across every industry
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Market Share Chart */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ amount: 0.05, margin: "0px 0px -200px 0px" }}
            >
              <Card className="bg-secondary border-primary/20">
                <CardContent className="p-8">
                  <div className="flex items-center mb-6">
                    <PieChart className="text-primary h-8 w-8 mr-3" />
                    <h4 className="text-xl font-bold">Global Market Share by Industry</h4>
                  </div>
                  
                  <img 
                    src={marketShareChart} 
                    alt="Global Chatbot Market Share by Vertical 2022"
                    className="w-full rounded-lg mb-6"
                  />
                  
                  <div className="space-y-4">
                    <p className="text-sm text-muted-foreground">
                      <strong>Global Chatbot Market Share by Vertical (2022)</strong>
                    </p>
                    <p className="text-sm text-muted-foreground">
                      Overview: The chart shows the chatbot market distribution by industry in 2022, with a total value of <strong>$5.1 billion</strong>.
                    </p>
                    
                    <div className="space-y-3">
                      <h5 className="text-sm font-semibold">Key Verticals:</h5>
                      
                      <div className="space-y-2 text-sm">
                        <div><strong>Retail & E-commerce (25%):</strong> Largest segment, focused on customer engagement and sales automation.</div>
                        <div><strong>Healthcare (20%):</strong> Used for telehealth, scheduling, and patient support.</div>
                        <div><strong>BFSI (15%):</strong> Aids in banking queries and fraud detection.</div>
                        <div><strong>Media & Entertainment (10%):</strong> Supports content recommendations and engagement.</div>
                        <div><strong>Travel & Tourism (10%):</strong> Streamlines booking and itinerary management.</div>
                        <div><strong>Transportation & Logistics (10%):</strong> Enhances tracking and delivery updates.</div>
                        <div><strong>Others (10%):</strong> Includes education and government services.</div>
                      </div>
                    </div>
                    
                    <div className="bg-primary/10 p-4 rounded-lg">
                      <p className="text-sm font-semibold">
                        <strong>Insights:</strong> Retail leads due to its focus on customer experience, while BFSI and Healthcare see strong adoption for automation and cost reduction. Chatbots' adaptability fuels their growth across sectors.
                      </p>
                    </div>
                    
                    <p className="text-xs text-muted-foreground">
                      Source: Grand View Research. Chatbot Market Size, Share & Trends Analysis Report By Type (Rule Based, AI Based), By Application, By Vertical (Retail, BFSI, Healthcare), By Region, And Segment Forecasts, 2023 - 2030. www.grandviewresearch.com/industry-analysis/chatbot-market. Accessed 24 Nov. 2024.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            {/* Growth Projections Chart */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ amount: 0.05, margin: "0px 0px -200px 0px" }}
            >
              <Card className="bg-secondary border-primary/20">
                <CardContent className="p-8">
                  <div className="flex items-center mb-6">
                    <BarChart3 className="text-primary h-8 w-8 mr-3" />
                    <h4 className="text-xl font-bold">North America Growth Trajectory</h4>
                  </div>
                  
                  <img 
                    src={marketGrowthChart} 
                    alt="North America Chatbot Market Size 2020-2030"
                    className="w-full rounded-lg mb-6"
                  />
                  
                  <div className="space-y-4">
                    <p className="text-sm text-muted-foreground">
                      <strong>North America Chatbot Market Size and Market Projections (2020 - 2030)</strong>
                    </p>
                    <p className="text-sm text-muted-foreground">
                      The chart illustrates rapid growth in North America from 2020 to 2030. Key factors driving this growth include:
                    </p>
                    
                    <div className="space-y-3">
                      <div className="text-sm">
                        <strong>Increased Demand for Automation:</strong> Businesses adopt chatbots for 24/7 customer service and reduced operational costs, meeting customer demand for self-service options.
                      </div>
                      
                      <div className="text-sm">
                        <strong>Preference for Messaging Applications:</strong> Individuals increasingly prefer messaging platforms over social networking sites, enhancing integration opportunities.
                      </div>
                      
                      <div className="text-sm">
                        <strong>Advancements in NLP and AI:</strong> Developments in natural language processing enable smoother human-bot interactions, improving user experience and expanding use cases.
                      </div>
                      
                      <div className="text-sm">
                        <strong>Pandemic Acceleration:</strong> COVID-19 accelerated chatbot adoption in healthcare, financial services, and retail for managing queries and supporting essential services.
                      </div>
                      
                      <div className="text-sm">
                        <strong>Diverse Applications:</strong> Chatbots operate across websites, standalone apps, and third-party platforms, handling customer complaints, sales automation, and personalized assistance.
                      </div>
                    </div>
                    
                    <div className="bg-primary/10 p-4 rounded-lg">
                      <p className="text-sm font-semibold">
                        The market is further boosted by voice recognition and analytics integration, providing deeper insights into customer behavior. Chatbot adoption continues growing due to their ability to deliver timely, cost-effective, and scalable solutions.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
