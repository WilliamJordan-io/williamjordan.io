import { motion } from "framer-motion";

export default function IDEShowcase() {
  return (
    <motion.div 
      className="mt-20"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
    >
      <div className="text-center mb-8">
        <h3 className="text-2xl font-bold mb-4">Development in Action</h3>
        <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
          Professional full-stack development with modern tools and frameworks
        </p>
      </div>

      <motion.div 
        className="bg-secondary/30 rounded-lg p-6 border border-gray-800"
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        viewport={{ once: true }}
      >
        <div className="bg-gray-900 rounded-lg overflow-hidden shadow-2xl border border-gray-700">
          {/* IDE Header */}
          <motion.div 
            className="bg-gray-800 px-4 py-2 flex items-center justify-between border-b border-gray-700"
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center space-x-2">
              <div className="flex space-x-1">
                <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                <div className="w-3 h-3 bg-green-500 rounded-full"></div>
              </div>
              <span className="text-gray-300 text-sm ml-4">Integrated Development Environment - Full-Stack Project</span>
            </div>
            <div className="text-gray-400 text-xs">TypeScript • React • Node.js</div>
          </motion.div>

          <div className="flex">
            {/* Sidebar */}
            <motion.div 
              className="bg-gray-850 w-64 border-r border-gray-700"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              viewport={{ once: true }}
            >
              <div className="p-3">
                <div className="text-gray-300 text-xs font-semibold mb-2">EXPLORER</div>
                <div className="space-y-1 text-xs">
                  <div className="flex items-center text-gray-300">
                    <span className="mr-1">📁</span> src
                  </div>
                  <div className="flex items-center text-gray-400 ml-4">
                    <span className="mr-1">📁</span> components
                  </div>
                  <div className="flex items-center text-blue-400 ml-8">
                    <span className="mr-1">⚛️</span> UserDashboard.tsx
                  </div>
                  <div className="flex items-center text-blue-400 ml-8">
                    <span className="mr-1">⚛️</span> ApiClient.tsx
                  </div>
                  <div className="flex items-center text-gray-400 ml-4">
                    <span className="mr-1">📁</span> api
                  </div>
                  <div className="flex items-center text-green-400 ml-8">
                    <span className="mr-1">🚀</span> server.ts
                  </div>
                  <div className="flex items-center text-green-400 ml-8">
                    <span className="mr-1">🗄️</span> database.ts
                  </div>
                  <div className="flex items-center text-gray-400 ml-4">
                    <span className="mr-1">📄</span> package.json
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Main Editor */}
            <motion.div 
              className="flex-1 bg-gray-900"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              viewport={{ once: true }}
            >
              {/* Tabs */}
              <div className="bg-gray-800 border-b border-gray-700 flex">
                <div className="bg-gray-900 px-4 py-2 text-sm text-gray-300 border-r border-gray-700">
                  UserDashboard.tsx
                </div>
                <div className="px-4 py-2 text-sm text-gray-500">
                  server.ts
                </div>
              </div>

              {/* Code Editor */}
              <div className="p-4 font-mono text-sm leading-relaxed h-96 overflow-hidden">
                <motion.div 
                  className="flex space-y-1"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ duration: 0.8, delay: 1.0 }}
                  viewport={{ once: true }}
                >
                  {/* Line Numbers */}
                  <div className="text-gray-500 text-right pr-4 select-none">
                    <div>1</div>
                    <div>2</div>
                    <div>3</div>
                    <div>4</div>
                    <div>5</div>
                    <div>6</div>
                    <div>7</div>
                    <div>8</div>
                    <div>9</div>
                    <div>10</div>
                    <div>11</div>
                    <div>12</div>
                    <div>13</div>
                    <div>14</div>
                    <div>15</div>
                  </div>

                  {/* Code Content */}
                  <motion.div 
                    className="flex-1 space-y-1"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 1.0, delay: 1.2 }}
                    viewport={{ once: true }}
                  >
                    <div><span className="text-purple-400">import</span> <span className="text-blue-400">React</span><span className="text-gray-300">,</span> <span className="text-gray-300">&#123;</span> <span className="text-blue-400">useState</span><span className="text-gray-300">,</span> <span className="text-blue-400">useEffect</span> <span className="text-gray-300">&#125;</span> <span className="text-purple-400">from</span> <span className="text-green-300">'react'</span><span className="text-gray-300">;</span></div>
                    <div><span className="text-purple-400">import</span> <span className="text-blue-400">&#123; apiClient &#125;</span> <span className="text-purple-400">from</span> <span className="text-green-300">'../api/client'</span><span className="text-gray-300">;</span></div>
                    <div></div>
                    <div><span className="text-purple-400">interface</span> <span className="text-yellow-400">UserData</span> <span className="text-gray-300">&#123;</span></div>
                    <div className="ml-4"><span className="text-blue-400">id</span><span className="text-gray-300">:</span> <span className="text-yellow-400">number</span><span className="text-gray-300">;</span></div>
                    <div className="ml-4"><span className="text-blue-400">name</span><span className="text-gray-300">:</span> <span className="text-yellow-400">string</span><span className="text-gray-300">;</span></div>
                    <div className="ml-4"><span className="text-blue-400">email</span><span className="text-gray-300">:</span> <span className="text-yellow-400">string</span><span className="text-gray-300">;</span></div>
                    <div><span className="text-gray-300">&#125;</span></div>
                    <div></div>
                    <div><span className="text-purple-400">export</span> <span className="text-purple-400">const</span> <span className="text-yellow-400">UserDashboard</span><span className="text-gray-300">:</span> <span className="text-blue-400">React.FC</span> <span className="text-gray-300">=</span> <span className="text-gray-300">()</span> <span className="text-purple-400">=&gt;</span> <span className="text-gray-300">&#123;</span></div>
                    <div className="ml-4"><span className="text-purple-400">const</span> <span className="text-gray-300">[</span><span className="text-blue-400">users</span><span className="text-gray-300">,</span> <span className="text-blue-400">setUsers</span><span className="text-gray-300">]</span> <span className="text-gray-300">=</span> <span className="text-yellow-400">useState</span><span className="text-gray-300">&lt;</span><span className="text-yellow-400">UserData</span><span className="text-gray-300">[]&gt;([]);</span></div>
                    <div className="ml-4"><span className="text-purple-400">const</span> <span className="text-gray-300">[</span><span className="text-blue-400">loading</span><span className="text-gray-300">,</span> <span className="text-blue-400">setLoading</span><span className="text-gray-300">]</span> <span className="text-gray-300">=</span> <span className="text-yellow-400">useState</span><span className="text-gray-300">(</span><span className="text-orange-400">true</span><span className="text-gray-300">);</span></div>
                    <div></div>
                    <div className="ml-4"><span className="text-yellow-400">useEffect</span><span className="text-gray-300">(()</span> <span className="text-purple-400">=&gt;</span> <span className="text-gray-300">&#123;</span></div>
                    <div className="ml-8"><span className="text-blue-400">fetchUsers</span><span className="text-gray-300">();</span></div>
                    <div className="ml-4"><span className="text-gray-300">&#125;,</span> <span className="text-gray-300">[]);</span></div>
                  </motion.div>
                </motion.div>
              </div>
            </motion.div>
          </div>

          {/* Terminal */}
          <motion.div 
            className="bg-gray-950 border-t border-gray-700 h-32"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 1.4 }}
            viewport={{ once: true }}
          >
            <div className="bg-gray-800 px-4 py-1 text-xs text-gray-300 border-b border-gray-700">
              TERMINAL
            </div>
            <div className="p-3 font-mono text-xs leading-relaxed">
              <div className="mb-1">
                <span className="text-blue-400">williamjordan@dev</span>
                <span className="text-white">:</span>
                <span className="text-yellow-400">~/full-stack-project</span>
                <span className="text-white">$ </span>
                <span className="text-gray-300">npm run dev</span>
              </div>
              <div className="text-gray-400 mb-1">
                {'>'} full-stack-app@1.0.0 dev
              </div>
              <div className="text-gray-400 mb-1">
                {'>'} concurrently "npm run server" "npm run client"
              </div>
              <div className="text-green-400 mb-1">
                ✓ Server running on http://localhost:3001
              </div>
              <div className="text-blue-400 mb-1">
                ✓ Client running on http://localhost:3000
              </div>
              <div className="text-yellow-400 mb-1">
                ✓ Database connected successfully
              </div>
              <div className="flex items-center">
                <span className="text-blue-400">williamjordan@dev</span>
                <span className="text-white">:</span>
                <span className="text-yellow-400">~/full-stack-project</span>
                <span className="text-white">$ </span>
                <span className="animate-pulse text-white">|</span>
              </div>
            </div>
          </motion.div>


        </div>

        <motion.div 
          className="mt-4 text-center"
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 1.6 }}
          viewport={{ once: true }}
        >
          <p className="text-sm text-muted-foreground">
            <span className="text-white font-semibold">Live Development Environment:</span> Professional full-stack development with TypeScript, React, and modern tooling
          </p>
        </motion.div>
      </motion.div>
    </motion.div>
  );
}