// server/index.ts
import express2 from "express";

// server/routes.ts
import { createServer } from "http";

// server/email.ts
import nodemailer from "nodemailer";
var transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: "williamjordan@time-ai.agency",
    pass: process.env.GMAIL_APP_PASSWORD
  }
});
async function sendContactEmail(data) {
  try {
    const htmlTemplate = `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; background-color: #f9f9f9;">
        <div style="background-color: #000000; color: white; padding: 20px; text-align: center;">
          <h1 style="margin: 0;">New Contact Form Submission</h1>
          <p style="margin: 10px 0 0 0; color: #cccccc;">williamjordan.io</p>
        </div>
        
        <div style="background-color: white; padding: 30px; border-radius: 0 0 8px 8px;">
          <h2 style="color: #333; margin-top: 0;">Contact Details</h2>
          
          <div style="margin-bottom: 20px;">
            <strong style="color: #333;">Name:</strong>
            <p style="margin: 5px 0; color: #666;">${data.name}</p>
          </div>
          
          <div style="margin-bottom: 20px;">
            <strong style="color: #333;">Email:</strong>
            <p style="margin: 5px 0; color: #666;"><a href="mailto:${data.email}" style="color: #0066cc;">${data.email}</a></p>
          </div>
          
          ${data.company ? `
          <div style="margin-bottom: 20px;">
            <strong style="color: #333;">Company:</strong>
            <p style="margin: 5px 0; color: #666;">${data.company}</p>
          </div>
          ` : ""}
          
          <div style="margin-bottom: 20px;">
            <strong style="color: #333;">Message:</strong>
            <div style="margin: 10px 0; padding: 15px; background-color: #f8f9fa; border-left: 4px solid #000000; color: #333;">
              ${data.message.replace(/\n/g, "<br>")}
            </div>
          </div>
          
          <div style="margin-top: 30px; padding-top: 20px; border-top: 1px solid #eee; color: #888; font-size: 12px;">
            <p>This email was sent from the contact form on williamjordan.io</p>
            <p>Sent on: ${(/* @__PURE__ */ new Date()).toLocaleString()}</p>
          </div>
        </div>
      </div>
    `;
    const textTemplate = `
New Contact Form Submission from williamjordan.io

Name: ${data.name}
Email: ${data.email}
${data.company ? `Company: ${data.company}` : ""}

Message:
${data.message}

---
Sent on: ${(/* @__PURE__ */ new Date()).toLocaleString()}
    `;
    const info = await transporter.sendMail({
      from: '"William Jordan Website" <williamjordan@time-ai.agency>',
      to: "williamjordan@time-ai.agency",
      subject: `New Contact Form Submission from ${data.name}`,
      text: textTemplate,
      html: htmlTemplate,
      replyTo: data.email
    });
    console.log("Email sent successfully:", info.messageId);
    return true;
  } catch (error) {
    console.error("Email sending failed:", error);
    return false;
  }
}

// server/routes.ts
import { z } from "zod";
var contactFormSchema = z.object({
  name: z.string().min(1, "Name is required").max(100),
  email: z.string().email("Invalid email address"),
  company: z.string().max(100).optional(),
  message: z.string().min(1, "Message is required").max(1e3)
});
async function registerRoutes(app2) {
  app2.post("/api/contact", async (req, res) => {
    try {
      const validatedData = contactFormSchema.parse(req.body);
      const emailSent = await sendContactEmail(validatedData);
      if (emailSent) {
        res.status(200).json({
          success: true,
          message: "Thank you for your message! I'll get back to you soon."
        });
      } else {
        res.status(500).json({
          success: false,
          message: "Failed to send message. Please try again later."
        });
      }
    } catch (error) {
      if (error instanceof z.ZodError) {
        res.status(400).json({
          success: false,
          message: "Please check your form data.",
          errors: error.errors
        });
      } else {
        console.error("Contact form error:", error);
        res.status(500).json({
          success: false,
          message: "An error occurred. Please try again later."
        });
      }
    }
  });
  const httpServer = createServer(app2);
  return httpServer;
}

// server/vite.ts
import express from "express";
import fs from "fs";
import path2 from "path";
import { createServer as createViteServer, createLogger } from "vite";

// vite.config.ts
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";
import runtimeErrorOverlay from "@replit/vite-plugin-runtime-error-modal";
var vite_config_default = defineConfig({
  plugins: [
    react(),
    runtimeErrorOverlay(),
    ...process.env.NODE_ENV !== "production" && process.env.REPL_ID !== void 0 ? [
      await import("@replit/vite-plugin-cartographer").then(
        (m) => m.cartographer()
      )
    ] : []
  ],
  resolve: {
    alias: {
      "@": path.resolve(import.meta.dirname, "src"),
      // Ensure this points to the new src at root
      "@shared": path.resolve(import.meta.dirname, "shared"),
      "@assets": path.resolve(import.meta.dirname, "attached_assets")
    }
  },
  root: path.resolve(import.meta.dirname),
  // Set to project root
  build: {
    outDir: path.resolve(import.meta.dirname, "dist"),
    // Output directly to 'dist'
    emptyOutDir: true
  }
});

// server/vite.ts
import { nanoid } from "nanoid";
var viteLogger = createLogger();
function log(message, source = "express") {
  const formattedTime = (/* @__PURE__ */ new Date()).toLocaleTimeString("en-US", {
    hour: "numeric",
    minute: "2-digit",
    second: "2-digit",
    hour12: true
  });
  console.log(`${formattedTime} [${source}] ${message}`);
}
async function setupVite(app2, server) {
  const serverOptions = {
    middlewareMode: true,
    hmr: { server },
    allowedHosts: true
  };
  const vite = await createViteServer({
    ...vite_config_default,
    configFile: false,
    customLogger: {
      ...viteLogger,
      error: (msg, options) => {
        viteLogger.error(msg, options);
        process.exit(1);
      }
    },
    server: serverOptions,
    appType: "custom"
  });
  app2.use(vite.middlewares);
  app2.use("*", async (req, res, next) => {
    const url = req.originalUrl;
    try {
      const clientTemplate = path2.resolve(
        import.meta.dirname,
        "..",
        // Go up from server/ to project root
        "index.html"
        // Access index.html at project root
      );
      let template = await fs.promises.readFile(clientTemplate, "utf-8");
      template = template.replace(
        `src="/src/main.tsx"`,
        `src="/src/main.tsx?v=${nanoid()}"`
      );
      const page = await vite.transformIndexHtml(url, template);
      res.status(200).set({ "Content-Type": "text/html" }).end(page);
    } catch (e) {
      vite.ssrFixStacktrace(e);
      next(e);
    }
  });
}
function serveStatic(app2) {
  const distPath = path2.resolve(import.meta.dirname, "..", "dist");
  if (!fs.existsSync(distPath)) {
    throw new Error(
      `Could not find the build directory: ${distPath}, make sure to build the client first`
    );
  }
  app2.use(express.static(distPath));
  app2.use("*", (_req, res) => {
    res.sendFile(path2.resolve(distPath, "index.html"));
  });
}

// server/index.ts
var app = express2();
app.use(express2.json());
app.use(express2.urlencoded({ extended: false }));
app.use((req, res, next) => {
  const start = Date.now();
  const path3 = req.path;
  let capturedJsonResponse = void 0;
  const originalResJson = res.json;
  res.json = function(bodyJson, ...args) {
    capturedJsonResponse = bodyJson;
    return originalResJson.apply(res, [bodyJson, ...args]);
  };
  res.on("finish", () => {
    const duration = Date.now() - start;
    if (path3.startsWith("/api")) {
      let logLine = `${req.method} ${path3} ${res.statusCode} in ${duration}ms`;
      if (capturedJsonResponse) {
        logLine += ` :: ${JSON.stringify(capturedJsonResponse)}`;
      }
      if (logLine.length > 80) {
        logLine = logLine.slice(0, 79) + "\u2026";
      }
      log(logLine);
    }
  });
  next();
});
(async () => {
  const server = await registerRoutes(app);
  app.use((err, _req, res, _next) => {
    const status = err.status || err.statusCode || 500;
    const message = err.message || "Internal Server Error";
    res.status(status).json({ message });
    throw err;
  });
  if (app.get("env") === "development") {
    await setupVite(app, server);
  } else {
    serveStatic(app);
  }
  const port = 5e3;
  server.listen({
    port,
    host: "0.0.0.0",
    reusePort: true
  }, () => {
    log(`serving on port ${port}`);
  });
})();
