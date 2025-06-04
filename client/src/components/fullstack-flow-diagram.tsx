import { motion } from "framer-motion";

export default function FullStackFlowDiagram() {
  return (
    <motion.div 
      className="py-12"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ amount: 0.05, margin: "0px 0px -200px 0px" }}
    >
      <div className="text-center mb-12">
        <h3 className="text-3xl font-bold mb-4">Full-Stack Development Architecture</h3>
        <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
          Complete development workflow from user interaction to deployment - showcasing enterprise-grade architecture and modern development practices
        </p>
      </div>

      <div className="bg-secondary/30 rounded-lg p-8 border border-gray-800">
        <div className="font-mono text-sm leading-relaxed space-y-3">
          {/* User Interaction */}
          <motion.div 
            className="text-center"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ amount: 0.05, margin: "0px 0px -200px 0px" }}
          >
            <div className="inline-block bg-blue-600 text-white px-4 py-2 rounded-lg font-semibold">
              [User Interaction]
            </div>
          </motion.div>

          <div className="text-center text-gray-400">|</div>
          <div className="text-center text-gray-400">↓</div>

          {/* Load Balancer */}
          <motion.div 
            className="text-center"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ amount: 0.05, margin: "0px 0px -200px 0px" }}
          >
            <div className="inline-block bg-green-600 text-white px-4 py-2 rounded-lg font-semibold">
              [Load Balancer: Vercel]
            </div>
            <div className="text-gray-400 mt-1">| Route Traffic</div>
          </motion.div>

          <div className="text-center text-gray-400">↓</div>

          {/* Frontend */}
          <motion.div 
            className="text-center"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            viewport={{ amount: 0.05, margin: "0px 0px -200px 0px" }}
          >
            <div className="inline-block bg-cyan-600 text-white px-4 py-2 rounded-lg font-semibold">
              [Frontend: React + Next.js + TypeScript + Tailwind CSS]
            </div>
            <div className="text-gray-400 mt-1">| SSR/SSG, Client-Side Rendering</div>
            <div className="text-gray-400">| Zustand for State Management</div>
            <div className="text-red-400 ml-8">|→ [Error: Client-Side Validation Fails]</div>
            <div className="text-gray-400 ml-16">| Log to Sentry</div>
          </motion.div>

          <div className="text-center text-gray-400">↓</div>

          {/* API Gateway */}
          <motion.div 
            className="text-center"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            viewport={{ amount: 0.05, margin: "0px 0px -200px 0px" }}
          >
            <div className="inline-block bg-purple-600 text-white px-4 py-2 rounded-lg font-semibold">
              [API Gateway: GraphQL + REST]
            </div>
            <div className="text-gray-400 mt-1">| Cache Requests (Redis)</div>
            <div className="text-gray-400">| Authentication (JWT/OAuth)</div>
          </motion.div>

          <div className="text-center text-gray-400">↓</div>

          {/* Microservices */}
          <motion.div 
            className="text-center"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            viewport={{ amount: 0.05, margin: "0px 0px -200px 0px" }}
          >
            <div className="inline-block bg-orange-600 text-white px-4 py-2 rounded-lg font-semibold">
              [Microservices Layer]
            </div>
            <div className="grid md:grid-cols-3 gap-4 mt-4">
              <div className="bg-gray-800 p-3 rounded-lg">
                <div className="text-yellow-400">|→ [Service 1: Node.js + Express.js]</div>
                <div className="text-gray-400 text-xs mt-1">| Business Logic</div>
                <div className="text-gray-400 text-xs">| Async Tasks → [Message Queue: RabbitMQ]</div>
              </div>
              <div className="bg-gray-800 p-3 rounded-lg">
                <div className="text-yellow-400">|→ [Service 2: FastAPI]</div>
                <div className="text-gray-400 text-xs mt-1">| ML Model Inference</div>
                <div className="text-gray-400 text-xs">| Rate Limiting</div>
              </div>
              <div className="bg-gray-800 p-3 rounded-lg">
                <div className="text-yellow-400">|→ [Service 3: Authentication Service]</div>
                <div className="text-gray-400 text-xs mt-1">| OAuth2 Token Management</div>
              </div>
            </div>
          </motion.div>

          <div className="text-center text-gray-400">↓</div>

          {/* Database Layer */}
          <motion.div 
            className="text-center"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            viewport={{ amount: 0.05, margin: "0px 0px -200px 0px" }}
          >
            <div className="inline-block bg-indigo-600 text-white px-4 py-2 rounded-lg font-semibold">
              [Database Layer]
            </div>
            <div className="grid md:grid-cols-3 gap-4 mt-4">
              <div className="bg-gray-800 p-3 rounded-lg">
                <div className="text-blue-400">|→ [Primary DB: PostgreSQL]</div>
                <div className="text-gray-400 text-xs mt-1">| ACID Transactions</div>
                <div className="text-gray-400 text-xs">| Sharding for Scalability</div>
              </div>
              <div className="bg-gray-800 p-3 rounded-lg">
                <div className="text-red-400">|→ [Cache: Redis]</div>
                <div className="text-gray-400 text-xs mt-1">| Store Session Data</div>
              </div>
              <div className="bg-gray-800 p-3 rounded-lg">
                <div className="text-green-400">|→ [File Storage: S3]</div>
                <div className="text-gray-400 text-xs mt-1">| Store User Uploads</div>
              </div>
            </div>
          </motion.div>

          <div className="text-center text-gray-400">↓</div>

          {/* Backend Response */}
          <motion.div 
            className="text-center"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.7 }}
            viewport={{ amount: 0.05, margin: "0px 0px -200px 0px" }}
          >
            <div className="inline-block bg-teal-600 text-white px-4 py-2 rounded-lg font-semibold">
              [Backend Response]
            </div>
            <div className="text-gray-400 mt-1">| Aggregate Data</div>
            <div className="text-gray-400">| Cache Response (Redis)</div>
          </motion.div>

          <div className="text-center text-gray-400">↓</div>

          {/* Frontend Update */}
          <motion.div 
            className="text-center"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.8 }}
            viewport={{ amount: 0.05, margin: "0px 0px -200px 0px" }}
          >
            <div className="inline-block bg-cyan-600 text-white px-4 py-2 rounded-lg font-semibold">
              [Frontend]
            </div>
            <div className="text-gray-400 mt-1">| Update UI</div>
            <div className="text-red-400 ml-8">|→ [Error: API Failure]</div>
            <div className="text-gray-400 ml-16">| Display Error Message</div>
            <div className="text-gray-400 ml-16">| Log to Sentry</div>
          </motion.div>

          <div className="text-center text-gray-400">↓</div>

          {/* Deployment Pipeline */}
          <motion.div 
            className="text-center"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.9 }}
            viewport={{ amount: 0.05, margin: "0px 0px -200px 0px" }}
          >
            <div className="inline-block bg-pink-600 text-white px-4 py-2 rounded-lg font-semibold">
              [Deployment Pipeline]
            </div>
            <div className="grid md:grid-cols-3 gap-4 mt-4">
              <div className="bg-gray-800 p-3 rounded-lg">
                <div className="text-blue-400">|→ [Containerization: Docker]</div>
                <div className="text-gray-400 text-xs mt-1">| Build Images</div>
              </div>
              <div className="bg-gray-800 p-3 rounded-lg">
                <div className="text-purple-400">|→ [Orchestration: Kubernetes]</div>
                <div className="text-gray-400 text-xs mt-1">| Manage Containers</div>
              </div>
              <div className="bg-gray-800 p-3 rounded-lg">
                <div className="text-green-400">|→ [CI/CD: GitHub Actions + Vercel]</div>
                <div className="text-gray-400 text-xs mt-1">| Run Tests (Jest + Cypress)</div>
                <div className="text-gray-400 text-xs">| Deploy to Production</div>
              </div>
            </div>
          </motion.div>

          <div className="text-center text-gray-400">↓</div>

          {/* Monitoring */}
          <motion.div 
            className="text-center"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 1.0 }}
            viewport={{ amount: 0.05, margin: "0px 0px -200px 0px" }}
          >
            <div className="inline-block bg-yellow-600 text-white px-4 py-2 rounded-lg font-semibold">
              [Monitoring & Logging]
            </div>
            <div className="grid md:grid-cols-3 gap-4 mt-4">
              <div className="bg-gray-800 p-3 rounded-lg">
                <div className="text-orange-400">|→ [Prometheus + Grafana]</div>
                <div className="text-gray-400 text-xs mt-1">| Track Performance Metrics</div>
              </div>
              <div className="bg-gray-800 p-3 rounded-lg">
                <div className="text-red-400">|→ [Sentry]</div>
                <div className="text-gray-400 text-xs mt-1">| Error Tracking</div>
              </div>
              <div className="bg-gray-800 p-3 rounded-lg">
                <div className="text-blue-400">|→ [ELK Stack]</div>
                <div className="text-gray-400 text-xs mt-1">| Log Aggregation</div>
              </div>
            </div>
          </motion.div>

          <div className="text-center text-gray-400">↓</div>

          {/* Final User */}
          <motion.div 
            className="text-center"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 1.1 }}
            viewport={{ amount: 0.05, margin: "0px 0px -200px 0px" }}
          >
            <div className="inline-block bg-green-600 text-white px-4 py-2 rounded-lg font-semibold">
              [User]
            </div>
            <div className="text-gray-400 mt-1">| Sees Updated Application</div>
          </motion.div>
        </div>

        {/* Summary */}
        <motion.div 
          className="mt-8 bg-primary/10 p-6 rounded-lg text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 1.2 }}
          viewport={{ amount: 0.05, margin: "0px 0px -200px 0px" }}
        >
          <p className="text-lg">
            <span className="text-white font-semibold">Enterprise-Grade Architecture:</span> Complete full-stack development workflow featuring modern microservices, cloud deployment, comprehensive monitoring, and bulletproof error handling for scalable, production-ready applications.
          </p>
        </motion.div>
      </div>
    </motion.div>
  );
}