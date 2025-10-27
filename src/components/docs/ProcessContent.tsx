const ProcessContent = () => {
    return (
         <div className="space-y-6 text-left">
            <h1 className="text-4xl font-bold mb-4">Our Process</h1>

            <div className="space-y-8 leading-relaxed">
              <section>
                <h2 className="text-2xl text-white mb-4">Initial Discovery</h2>
                <p>
                  At Talkvera, we see ourselves not just as service providers—but as long-term
                  strategic partners in your AI transformation journey. We take a deeply consultative
                  approach to ensure every system we build aligns with your broader vision, scales with
                  your business, and drives measurable impact across departments.
                </p>
                <p>
                  Our goal is to go far beyond the surface-level use case and instead uncover where AI
                  can create true, compounding value in your organization.
                </p>
              </section>

              <section>
                <h2 className="text-2xl text-white mb-4">Organizational Understanding</h2>
                <p>
                  We begin by immersing ourselves in your team's world—learning how your company operates
                  today and where you're heading tomorrow. We spend time understanding:
                </p>
                <ul className="list-disc list-inside space-y-1 mt-2">
                  <li>Your core business model and revenue streams</li>
                  <li>Internal workflows and decision-making processes</li>
                  <li>Existing pain points and inefficiencies</li>
                  <li>Departments where AI can have immediate impact</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl text-white mb-4">Strategic Roadmapping</h2>
                <p>
                  With a deep understanding of your org structure, we help chart a high-leverage AI
                  roadmap. This ensures your short-term wins are built on top of systems that are
                  flexible, extendable, and aligned with future use cases.
                </p>
                <p>The roadmap helps answer:</p>
                <ul className="list-disc list-inside space-y-1 mt-2">
                  <li>What can we build today that generates ROI in &lt;90 days?</li>
                  <li>
                    What foundational systems do we need for long-term automation and intelligence?
                  </li>
                  <li>Where will AI create the most measurable business impact?</li>
                  <li>
                    How do we ensure interoperability, governance, and observability from day one?
                  </li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl text-white mb-4">Security & Compliance</h2>
                <p>
                  Trust is foundational in AI systems—especially when handling sensitive data, customer
                  communication, or proprietary workflows. During discovery, we assess:
                </p>
                <ul className="list-disc list-inside space-y-1 mt-2">
                  <li>Data classification and handling requirements</li>
                  <li>Access control and permissions</li>
                  <li>Infrastructure constraints and compliance needs</li>
                  <li>Auditability and traceability requirements</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl text-white mb-4">Rapid Iteration & Continuous Delivery</h2>
                <p>
                  At Talkvera, we believe the real power of AI lies in its ability to evolve. That's
                  why our development methodology is built around agility, modularity, and frequent
                  iteration. Every system we build is custom, and we co-create it with your team in
                  fast-moving, feedback-driven cycles.
                </p>
              </section>

              <section>
                <h3 className="text-xl text-white mb-2">Agile Development Framework</h3>
                <ul className="list-disc list-inside space-y-1">
                  <li>Agile sprints (1–2 weeks) with demoable deliverables</li>
                  <li>Sprint planning and retro calls to align expectations</li>
                  <li>Kanban or Jira-based task management for transparency</li>
                  <li>Embedded client feedback built into every iteration</li>
                </ul>
              </section>

              <section>
                <h3 className="text-xl text-white mb-2">Modular Architecture</h3>
                <ul className="list-disc list-inside space-y-1">
                  <li>Independent microservices and agents</li>
                  <li>Swappable foundation models or RAG layers</li>
                  <li>API-first infrastructure for external integrations</li>
                  <li>Easily replaceable vector stores, LLMs, and pipelines</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl text-white mb-4">Quality Assurance & Deployment</h2>
                <p>
                  At Talkvera, the final stage of our three-step AI lifecycle focuses on rigorous
                  testing, secure deployment, and long-term reliability. We combine automated pipelines
                  with human evaluation to ensure your system performs consistently, safely, and scalably
                  in production.
                </p>
              </section>

              <section>
                <h3 className="text-xl text-white mb-2">Quality Assurance Process</h3>
                <ul className="list-disc list-inside space-y-1">
                  <li>Automated testing pipelines with CI/CD integration</li>
                  <li>Comprehensive test coverage across critical functionalities</li>
                  <li>Hallucination detection and prevention</li>
                  <li>Prompt injection defense and security testing</li>
                  <li>Toxicity and bias checks with industry-specific thresholds</li>
                  <li>RAG evaluation and retrieval accuracy validation</li>
                </ul>
              </section>

              <section>
                <h3 className="text-xl text-white mb-2">Deployment Workflows</h3>
                <ul className="list-disc list-inside space-y-1">
                  <li>Staging and production environment setup</li>
                  <li>Automated deployment pipelines</li>
                  <li>Monitoring and alerting configuration</li>
                  <li>Security and compliance validation</li>
                  <li>Performance optimization and scaling</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl text-white mb-4">Ongoing Support & Optimization</h2>
                <p>
                  AI systems are never "done." We provide continuous oversight and enhancement through:
                </p>
                <ul className="list-disc list-inside space-y-1 mt-2">
                  <li>Live system monitoring and performance tracking</li>
                  <li>Scheduled QA cycles and prompt refreshes</li>
                  <li>Regular re-embedding or retraining if needed</li>
                  <li>Direct support channels with optional SLAs</li>
                </ul>
              </section>
            </div>
          </div>
    );
};  
export default ProcessContent;