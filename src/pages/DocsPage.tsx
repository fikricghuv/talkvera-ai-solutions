import { useState } from 'react';
import { Book, Bot, Network, Workflow, FileText, BookOpenText } from 'lucide-react';

function DocsPage() {
  const [activeSection, setActiveSection] = useState('introduction');
  const [openDropdown, setOpenDropdown] = useState(null);

  type DropdownId = string | null;

  const toggleDropdown = (id: string): void => {
    // cast to any to avoid changing existing useState declarations elsewhere
    (setOpenDropdown as any)(openDropdown === id ? null : id as DropdownId);
  };

  const navigation = [
    { id: 'introduction', label: 'Introduction', icon: Book },
    { id: 'tech-stack', label: 'Technology Stack', icon: Network },
    { id: 'process', label: 'Our Process', icon: Workflow },
    { id: 'resources', label: 'Resources', icon: FileText },
    {
      id: 'ai-agents',
      label: 'AI Agents',
      icon: Bot,
      children: [
        { id: 'overview', label: 'Overview' },
        { id: 'ultimate-assistant', label: 'Ultimate Assistant' },
        { id: 'rag-pipeline', label: 'RAG Pipeline' },
      ],
    },
    {
      id: 'case-studies',
      label: 'Case Studies',
      icon: BookOpenText,
      children: [
        { id: 'overview-case-studies', label: 'Overview' },
        { id: 'schedule-appointment-agent', label: 'Schedule Appointment Agent' },
        { id: 'customer-service-agent', label: 'Customer Service Agent' },
      ],
    },
  ];

  const renderContent = () => {
    switch (activeSection) {
      case 'introduction':
  return (
    <div className="space-y-8">
      <h1 className="text-4xl font-bold mb-6">Getting Started</h1>

      <p className="text-gray-400 leading-relaxed">
        Welcome to TalkVera's documentation! This section is your launchpad for getting oriented
        with our tools, services, and how we work. Our goal is to make working with TalkVera
        seamless and intuitive.
      </p>

      <div>
        <h2 className="text-2xl font-semibold mb-3">Navigating the Documentation</h2>
        <p className="text-gray-400 leading-relaxed">
          Each major category in this documentation is presented as a dropdown menu, containing
          detailed subpages for each topic. Use the sidebar or top navigation to explore areas like
          <span className="text-white font-medium"> "Technology Stack," "Our Process," </span>and
          <span className="text-white font-medium"> "AI Agents."</span> If you're searching for
          something specific, use the built-in search feature or press
          <span className="text-white font-medium"> Command + K </span>
          to activate our <span className="text-white font-medium">Ask AI</span> tool, which can
          answer questions, suggest resources, or point you directly to relevant sections of the
          documentation.
        </p>
      </div>

      <div>
        <h2 className="text-2xl font-semibold mb-3">Who This Is For</h2>
        <p className="text-gray-400 leading-relaxed">
          This documentation is designed for developers, product leaders, operations teams, and
          decision-makers who want to understand and implement AI capabilities into their workflows.
          Whether you're launching a new project or integrating one of our agents into your systems,
          this guide will help you understand what's possible and how to get there.
        </p>
      </div>

      <div>
        <h2 className="text-2xl font-semibold mb-3">How to Work With Us</h2>
        <p className="text-gray-400 leading-relaxed mb-3">
          To start working with TalkVera, visit our
          <span className="text-white font-medium"> Contact Page </span>and fill out the form with
          as much detail as possible about your project. The more context you provide, the better we
          can scope the engagement and align you with the right solutions.
        </p>
        <p className="text-gray-400 leading-relaxed">
          Currently, TalkVera works on a partnership plan that starts at
          <span className="text-white font-medium"> $20,000/month.</span> If your project is smaller
          in scope or budget, we recommend visiting our
          <span className="text-white font-medium"> Pricing Page </span>
          to explore available options.
        </p>
      </div>

      <div>
        <h2 className="text-2xl font-semibold mb-3">Documentation Tips</h2>
        <p className="text-gray-400 leading-relaxed">
          Each page in the documentation is written with clarity and speed in mind. You'll find
          headings, brief explanations, and where helpful, embedded videos, diagrams, and example
          prompts. Use these as references or templates to better understand how our tools work in
          practice.
        </p>
      </div>

      <div>
        <h2 className="text-2xl font-semibold mb-3">Feedback Welcome</h2>
        <p className="text-gray-400 leading-relaxed">
          We strive to keep our documentation current and helpful. If something's missing or unclear,
          don't hesitate to reach out. We're continuously iterating based on client feedback and
          evolving AI capabilities.
        </p>
      </div>
    </div>
  );


      case 'tech-stack':
        return (
          <div className="space-y-8 max-w-5xl mx-auto">
            <h1 className="text-4xl font-bold mb-4">Technology Stack</h1>

            <p className="text-gray-400">
              At Talkvera, we adopt a forward-looking, modular tech stack built for speed, flexibility, and 
              long-term scalability. Our tooling reflects a blend of modern cloud infrastructure, 
              developer-centric platforms, and battle-tested AI frameworks. We select technologies based on 
              performance, integration depth, 
              open-source momentum, and alignment with client-specific use cases. 
              Whether you're a technical stakeholder or completely new to AI, our stack is designed to make 
              innovation accessible and reliable.
            </p>

            <h2 className="text-3xl font-semibold mt-12 mb-4">Infrastructure</h2>
            <p className="text-gray-400">
              We operate primarily as a <strong className="text-white">full AWS shop</strong>, meaning our systems are deployed, 
              managed, and scaled using <strong className="text-white">Amazon Web Services</strong> — a trusted platform for secure, 
              high-performance cloud computing.
            </p>

            <p className="text-gray-400">
              Our in-house <strong className="text-white">cloud infrastructure engineers</strong> are experienced with 
              <strong className="text-white"> multi-cloud environments</strong>, enabling support across 
              <strong className="text-white"> Azure</strong>, <strong className="text-white">Google Cloud Platform (GCP)</strong>, 
              and <strong className="text-white">DigitalOcean</strong> depending on project needs. This flexibility ensures 
              clients in regulated industries or with unique infrastructure requirements are fully supported.
            </p>

            <ul className="list-disc pl-6 space-y-2 text-gray-400">
              <li><strong className="text-white">Supabase:</strong> Secure authentication and real-time updates for rapid feature delivery.</li>
              <li><strong className="text-white">PostgreSQL:</strong> Our primary structured database — robust, scalable, and reliable.</li>
              <li><strong className="text-white">Vector Databases:</strong> Tools like <strong>Pinecone</strong>, <strong>Weaviate</strong>, and <strong>Qdrant</strong> enable semantic search and contextual understanding in AI systems.</li>
              <li><strong className="text-white">API Key Provisioning:</strong> Dedicated, scoped keys per client project for secure access control.</li>
              <li><strong className="text-white">Internal Developer Tooling:</strong> Custom scripts, CLI tools, and integrations with <strong>ClickUp</strong> and <strong>GitHub</strong> to maintain operational efficiency.</li>
            </ul>

            <h2 className="text-3xl font-semibold mt-12 mb-4">Programming & Integrations</h2>
            <p className="text-gray-400">
              Our development process is shaped by tools that enable <strong className="text-white">rapid iteration</strong>, 
              <strong className="text-white"> intelligent automation</strong>, and <strong className="text-white">deep integration</strong> 
              with external systems.
            </p>

            <ul className="list-disc pl-6 space-y-2 text-gray-400">
              <li><strong className="text-white">Languages:</strong> <strong>Python</strong> for AI and backend systems, 
                <strong> JavaScript/TypeScript</strong> for front-end and lightweight logic.
              </li>
              <li><strong className="text-white">Developer Tools:</strong> Platforms like <strong>Replit</strong>, <strong>Cursor</strong>, 
                <strong>Lovable</strong>, and <strong>Bolt</strong> for real-time collaboration and rapid prototyping.
              </li>
              <li><strong className="text-white">Integration Layer:</strong> Via <strong>n8n</strong>, supporting 850+ integrations 
                with SaaS tools, databases, and webhook-based services for instant connectivity.
              </li>
              <li><strong className="text-white">Voice AI:</strong> Powered by <strong>ElevenLabs</strong> and retail AI tools 
                for natural, context-aware voice agents.
              </li>
            </ul>

            <h2 className="text-3xl font-semibold mt-12 mb-4">Artificial Intelligence</h2>
            <p className="text-gray-400">
              We take a <strong className="text-white">model-agnostic</strong> approach to AI — benchmarking across providers 
              to select the best-performing model based on your goals. Whether optimizing for 
              <strong className="text-white"> speed</strong>, <strong className="text-white">precision</strong>, 
              <strong className="text-white">cost-efficiency</strong>, or <strong className="text-white">multilingual output</strong>, 
              we tailor each deployment for maximum impact.
            </p>

            <ul className="list-disc pl-6 space-y-2 text-gray-400">
              <li><strong className="text-white">Retrieval-Augmented Generation (RAG):</strong> Grounding LLM responses with 
                relevant internal data for accuracy and reduced hallucination.
              </li>
              <li><strong className="text-white">Embedding Model Selection & Testing:</strong> Running controlled experiments 
                to find the most effective embedding strategy for your data.
              </li>
              <li><strong className="text-white">Agent Frameworks & Builders:</strong> Modular AI agents that can 
                <strong> search</strong>, <strong>summarize</strong>, <strong>trigger workflows</strong>, or 
                <strong> take actions</strong> in real-time.
              </li>
              <li><strong className="text-white">LLM Evaluation & Model Routing:</strong> Internal scoring systems 
                (LLM-as-a-judge) dynamically route tasks to the best-performing models.
              </li>
            </ul>
          </div>
        );

      case 'process':
        return (
          <div className="space-y-6 text-left">
            <h1 className="text-4xl font-bold mb-4">Our Process</h1>

            <div className="space-y-8 text-gray-400 leading-relaxed">
              <section>
                <h2 className="text-2xl text-white mb-2">Initial Discovery</h2>
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
                <h2 className="text-2xl text-white mb-2">Organizational Understanding</h2>
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
                <h2 className="text-2xl text-white mb-2">Strategic Roadmapping</h2>
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
                <h2 className="text-2xl text-white mb-2">Security & Compliance</h2>
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
                <h2 className="text-2xl text-white mb-2">Rapid Iteration & Continuous Delivery</h2>
                <p>
                  At True Horizon, we believe the real power of AI lies in its ability to evolve. That's
                  why our development methodology is built around agility, modularity, and frequent
                  iteration. Every system we build is custom, and we co-create it with your team in
                  fast-moving, feedback-driven cycles.
                </p>
              </section>

              <section>
                <h3 className="text-xl text-white mb-1">Agile Development Framework</h3>
                <ul className="list-disc list-inside space-y-1">
                  <li>Agile sprints (1–2 weeks) with demoable deliverables</li>
                  <li>Sprint planning and retro calls to align expectations</li>
                  <li>Kanban or Jira-based task management for transparency</li>
                  <li>Embedded client feedback built into every iteration</li>
                </ul>
              </section>

              <section>
                <h3 className="text-xl text-white mb-1">Modular Architecture</h3>
                <ul className="list-disc list-inside space-y-1">
                  <li>Independent microservices and agents</li>
                  <li>Swappable foundation models or RAG layers</li>
                  <li>API-first infrastructure for external integrations</li>
                  <li>Easily replaceable vector stores, LLMs, and pipelines</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl text-white mb-2">Quality Assurance & Deployment</h2>
                <p>
                  At True Horizon AI, the final stage of our three-step AI lifecycle focuses on rigorous
                  testing, secure deployment, and long-term reliability. We combine automated pipelines
                  with human evaluation to ensure your system performs consistently, safely, and scalably
                  in production.
                </p>
              </section>

              <section>
                <h3 className="text-xl text-white mb-1">Quality Assurance Process</h3>
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
                <h3 className="text-xl text-white mb-1">Deployment Workflows</h3>
                <ul className="list-disc list-inside space-y-1">
                  <li>Staging and production environment setup</li>
                  <li>Automated deployment pipelines</li>
                  <li>Monitoring and alerting configuration</li>
                  <li>Security and compliance validation</li>
                  <li>Performance optimization and scaling</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl text-white mb-2">Ongoing Support & Optimization</h2>
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

      case 'resources':
        return (
          <div className="space-y-12">
            <h1 className="text-4xl font-bold mb-6">Additional Resources</h1>
            <p className="text-xl text-gray-400 mb-10">
              Technical references and troubleshooting insights to support engineering teams, partners, and technical buyers working with TalkVera systems.
            </p>

            {/* Technical FAQ & Troubleshooting Guide */}
            <section>
              <h2 className="text-2xl font-semibold mb-3">Technical FAQ & Troubleshooting Guide</h2>
              <p className="text-gray-400 mb-4">
                This section addresses common technical, implementation, and product-related questions. Topics include system maintainability, LLM behavior, hosting options, multilingual support, and RAG implementations.
              </p>
              <ul className="list-disc list-inside text-gray-400 space-y-1">
                <li><strong>Maintainability:</strong> Modular architecture, versioned APIs, and documentation-first design.</li>
                <li><strong>Hallucination handling:</strong> RAGAS metrics, human-reviewed data audits, and retraining when needed.</li>
                <li><strong>Hosting:</strong> Supports client-hosted deployments (VPC/private cloud) with secure IAM onboarding.</li>
                <li><strong>Multilingual systems:</strong> Built-in localization and model adaptation for global deployments.</li>
                <li><strong>RAG support:</strong> Grounded retrieval with semantic filters and QA scoring (precision, recall, groundedness).</li>
              </ul>
            </section>

            {/* Infrastructure & DevOps */}
            <section>
              <h2 className="text-2xl font-semibold mb-3">Infrastructure & DevOps</h2>
              <p className="text-gray-400 mb-4">
                We use modern infrastructure practices to ensure reliability and security in every deployment. CI/CD, environment provisioning, and secure configuration are built into our DevOps workflows.
              </p>
              <ul className="list-disc list-inside text-gray-400 space-y-1">
                <li><strong>Deployment:</strong> GitHub Actions or n8n-based pipelines with isolated staging and production environments.</li>
                <li><strong>Provisioning:</strong> Managed via Docker, Terraform, Railway, or Kubernetes.</li>
                <li><strong>Security:</strong> Encryption, secrets management, and role-based access control (least privilege principle).</li>
              </ul>
            </section>

            {/* Troubleshooting & Edge Cases */}
            <section>
              <h2 className="text-2xl font-semibold mb-3">Troubleshooting & Edge Cases</h2>
              <p className="text-gray-400 mb-4">
                In cases of inconsistent responses or latency issues, we provide structured diagnostics and fallback mechanisms to maintain stability.
              </p>
              <ul className="list-disc list-inside text-gray-400 space-y-1">
                <li><strong>Inconsistent responses:</strong> Provide logs for automated retries and fallback model analysis.</li>
                <li><strong>Latency profiling:</strong> Async tracing, caching, and prompt optimization to improve performance.</li>
              </ul>
            </section>

            {/* Glossary */}
            <section>
              <h2 className="text-2xl font-semibold mb-3">Glossary: Key Terminology</h2>
              <p className="text-gray-400 mb-4">
                Quick reference for foundational AI and system design terminology.
              </p>
              <ul className="list-disc list-inside text-gray-400 space-y-1">
                <li><strong>LLM (Large Language Model):</strong> Neural network trained to generate human-like text.</li>
                <li><strong>RAG (Retrieval-Augmented Generation):</strong> Combines LLMs with vector databases for factual grounding.</li>
                <li><strong>Vector Database:</strong> Engine that stores and retrieves text embeddings for semantic search.</li>
                <li><strong>Embedding:</strong> Numeric vector capturing the meaning of text or data.</li>
                <li><strong>Prompt Engineering:</strong> Crafting prompts to shape model behavior.</li>
                <li><strong>Groundedness:</strong> Alignment of AI outputs with source documents or trusted context.</li>
                <li><strong>Token Limit:</strong> Maximum text length an AI model can process per request.</li>
                <li><strong>Agent:</strong> AI system that performs tasks autonomously or semi-autonomously.</li>
                <li><strong>Human-in-the-Loop (HITL):</strong> Workflow involving human validation or override of AI outputs.</li>
                <li><strong>CI/CD:</strong> Continuous integration and deployment pipelines ensuring reliable updates.</li>
              </ul>
            </section>
          </div>
        );

      case 'overview':
        return (
          <div className="space-y-16">
            {/* Header */}
            <div>
              <h1 className="text-4xl font-bold mb-4">TalkVera AI Agents</h1>
              <p className="text-gray-400 leading-relaxed">
                Our AI agents are designed with a focus on practical utility and seamless integration.
                Each agent is built with a common set of features and capabilities, ensuring consistency
                across our product line while allowing for specialized functionality where needed.
              </p>
            </div>

            {/* Philosophy */}
            <section>
              <h2 className="text-2xl font-semibold mb-4">Philosophy Behind Agent Design</h2>
              <p className="text-gray-400 mb-4 leading-relaxed">
                At TalkVera, we believe in creating AI agents that are:
              </p>
              <ul className="list-disc list-inside text-gray-400 space-y-1">
                <li><strong className="text-white">Autonomous yet Collaborative:</strong> Capable of independent operation while maintaining human oversight.</li>
                <li><strong className="text-white">Context-Aware:</strong> Understanding and adapting to specific business contexts and requirements.</li>
                <li><strong className="text-white">Secure & Compliant:</strong> Built with enterprise-grade security and compliance in mind.</li>
                <li><strong className="text-white">Scalable & Maintainable:</strong> Designed for easy scaling and ongoing optimization.</li>
              </ul>
            </section>

            {/* Common Features */}
            <section>
              <h2 className="text-2xl font-semibold mb-4">Common Features Across All Agents</h2>
              <ul className="list-disc list-inside text-gray-400 space-y-1">
                <li><strong className="text-white">Natural Language Understanding:</strong> Advanced comprehension of context and intent.</li>
                <li><strong className="text-white">Multi-Modal Communication:</strong> Support for text, voice, and structured data.</li>
                <li><strong className="text-white">Integration Capabilities:</strong> Seamless connection with existing systems and workflows.</li>
                <li><strong className="text-white">Analytics & Reporting:</strong> Detailed insights into performance and usage.</li>
                <li><strong className="text-white">Customization Framework:</strong> Flexible adaptation to specific business needs.</li>
              </ul>
            </section>

            {/* Available Templates */}
            <section>
              <h2 className="text-2xl font-semibold mb-6">Available Templates</h2>
              <p className="text-gray-400 mb-8 leading-relaxed">
                Our pre-built agent templates provide ready-to-use solutions for common business needs.
                Each template is designed to be easily customizable and deployed quickly for your use case.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {[
                  { title: "Ultimate Assistant", desc: "A comprehensive AI assistant capable of handling multiple tasks and workflows." },
                  { title: "Deep Research PDF Report", desc: "Specialized agent for conducting in-depth research and generating comprehensive PDF reports." },
                  { title: "Newsletter Creation", desc: "AI-powered newsletter creation and distribution system." },
                  { title: "RAG Pipeline", desc: "Retrieval-Augmented Generation pipeline for enhanced AI responses." },
                  { title: "Faceless Shorts", desc: "Automated short-form video content creation system." },
                ].map((item, i) => (
                  <div
                    key={i}
                    className="p-6 rounded-xl border border-gray-700 hover:border-blue-500/40 transition-all bg-gray-900/20"
                  >
                    <h3 className="text-xl font-semibold mb-2 text-white">{item.title}</h3>
                    <p className="text-gray-400 text-sm leading-relaxed">{item.desc}</p>
                  </div>
                ))}
              </div>
            </section>

            {/* Integration & Customization */}
            <section>
              <h2 className="text-2xl font-semibold mb-4">Integration & Customization</h2>
              <p className="text-gray-400 mb-6 leading-relaxed">
                All our agents can be customized to match your specific needs and integrated with your existing systems.
                We provide detailed documentation and support to ensure smooth implementation and ongoing optimization.
              </p>

              <ul className="list-disc list-inside text-gray-400 space-y-1">
                <li><strong className="text-white">API Integration:</strong> RESTful APIs for seamless system connectivity.</li>
                <li><strong className="text-white">Custom Training:</strong> Domain-specific knowledge and behavior training.</li>
                <li><strong className="text-white">Workflow Automation:</strong> Integration with existing business processes.</li>
                <li><strong className="text-white">Security & Compliance:</strong> Enterprise-grade security features.</li>
              </ul>
            </section>
          </div>
        );


      case 'ultimate-assistant':
        return (
          <div className="space-y-6">
            <h1 className="text-4xl font-bold mb-4">Ultimate Assistant</h1>
            <p className="text-xl text-gray-400">
              An intelligent multi-purpose AI agent that serves as a comprehensive virtual assistant for your business operations.
            </p>

            <div className="mt-8 p-6 bg-gradient-to-br from-blue-900/20 to-gray-900/50 rounded-xl border border-blue-500/30">
              <h3 className="text-2xl font-semibold mb-4">Overview</h3>
              <p className="text-gray-400 leading-relaxed">
                The Ultimate Assistant is TalkVera's flagship AI agent, designed to handle a wide range of business tasks with human-like understanding and efficiency. It combines advanced natural language processing, contextual reasoning, and seamless system integrations to provide comprehensive support across customer service, internal operations, and information management.
              </p>
            </div>

            <div className="space-y-8 mt-8">
              <div>
                <h3 className="text-2xl font-semibold mb-6">Key Features</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="p-6 bg-gradient-to-br from-gray-800/50 to-gray-900/50 rounded-xl border border-gray-700">
                    <h4 className="text-lg font-semibold mb-3 text-blue-400">1. Conversational Intelligence</h4>
                    <ul className="space-y-2 text-sm text-gray-400">
                      <li>• Natural multi-turn dialogue with context retention across sessions</li>
                      <li>• Intent recognition and entity extraction for accurate understanding</li>
                      <li>• Sentiment analysis to adapt tone and response strategy</li>
                      <li>• Multi-language support with real-time translation (25+ languages)</li>
                      <li>• Voice interaction capabilities via speech-to-text integration</li>
                    </ul>
                  </div>

                  <div className="p-6 bg-gradient-to-br from-gray-800/50 to-gray-900/50 rounded-xl border border-gray-700">
                    <h4 className="text-lg font-semibold mb-3 text-blue-400">2. Customer Support Automation</h4>
                    <ul className="space-y-2 text-sm text-gray-400">
                      <li>• Instant response to common inquiries (FAQs, policies, procedures)</li>
                      <li>• Ticket creation and routing to appropriate teams when needed</li>
                      <li>• Order status tracking and shipping updates</li>
                      <li>• Returns and refund processing within defined parameters</li>
                      <li>• Escalation protocols for complex or sensitive issues</li>
                    </ul>
                  </div>

                  <div className="p-6 bg-gradient-to-br from-gray-800/50 to-gray-900/50 rounded-xl border border-gray-700">
                    <h4 className="text-lg font-semibold mb-3 text-blue-400">3. Intelligent Scheduling & Task Management</h4>
                    <ul className="space-y-2 text-sm text-gray-400">
                      <li>• Automatic meeting scheduling with calendar integration</li>
                      <li>• Smart conflict resolution and time zone handling</li>
                      <li>• Task assignment and deadline tracking</li>
                      <li>• Automated reminders and follow-ups</li>
                      <li>• Resource availability checking and booking</li>
                    </ul>
                  </div>

                  <div className="p-6 bg-gradient-to-br from-gray-800/50 to-gray-900/50 rounded-xl border border-gray-700">
                    <h4 className="text-lg font-semibold mb-3 text-blue-400">4. Information Retrieval & Knowledge Management</h4>
                    <ul className="space-y-2 text-sm text-gray-400">
                      <li>• Instant access to company documentation and knowledge bases</li>
                      <li>• Semantic search across multiple data sources</li>
                      <li>• Document summarization and key insight extraction</li>
                      <li>• Policy and procedure guidance with version control</li>
                      <li>• Training and onboarding support for new employees</li>
                    </ul>
                  </div>

                  <div className="p-6 bg-gradient-to-br from-gray-800/50 to-gray-900/50 rounded-xl border border-gray-700">
                    <h4 className="text-lg font-semibold mb-3 text-blue-400">5. Data Analysis & Reporting</h4>
                    <ul className="space-y-2 text-sm text-gray-400">
                      <li>• Natural language queries for business intelligence data</li>
                      <li>• Automated report generation on demand</li>
                      <li>• Trend identification and anomaly detection</li>
                      <li>• Performance metrics tracking and visualization</li>
                      <li>• Predictive insights based on historical patterns</li>
                    </ul>
                  </div>

                  <div className="p-6 bg-gradient-to-br from-gray-800/50 to-gray-900/50 rounded-xl border border-gray-700">
                    <h4 className="text-lg font-semibold mb-3 text-blue-400">6. System Integration & Automation</h4>
                    <ul className="space-y-2 text-sm text-gray-400">
                      <li>• Pre-built connectors for CRM, ERP, and helpdesk systems</li>
                      <li>• Workflow automation across multiple platforms</li>
                      <li>• Data synchronization and validation</li>
                      <li>• API access for custom integrations</li>
                      <li>• Real-time notifications and alerts</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-2xl font-semibold mb-6">Technical Architecture</h3>
                <div className="p-6 bg-gradient-to-br from-gray-800/50 to-gray-900/50 rounded-xl border border-gray-700">
                  <div className="space-y-4 text-gray-400">
                    <p><strong className="text-white">Language Models:</strong> Built on GPT-4 and Claude-3 architecture with domain-specific fine-tuning for your industry</p>
                    <p><strong className="text-white">Context Management:</strong> Advanced memory systems maintain conversation state and user preferences across sessions</p>
                    <p><strong className="text-white">Security:</strong> End-to-end encryption, role-based access control, and audit logging for all interactions</p>
                    <p><strong className="text-white">Scalability:</strong> Cloud-native architecture handles millions of concurrent conversations</p>
                    <p><strong className="text-white">Deployment:</strong> Available as web widget, mobile SDK, Slack/Teams integration, or standalone application</p>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-2xl font-semibold mb-6">Use Cases & Success Stories</h3>
                <div className="space-y-6">
                  <div className="p-6 bg-gradient-to-br from-gray-800/50 to-gray-900/50 rounded-xl border border-gray-700">
                    <h4 className="text-lg font-semibold mb-3">E-Commerce Customer Support</h4>
                    <p className="text-gray-400 text-sm mb-3">
                      <strong className="text-white">Client:</strong> Leading online retailer with 2M+ monthly customers
                    </p>
                    <p className="text-gray-400 text-sm mb-3">
                      <strong className="text-white">Implementation:</strong> Ultimate Assistant deployed across website chat, email, and messaging platforms
                    </p>
                    <p className="text-gray-400 text-sm mb-3">
                      <strong className="text-white">Results:</strong>
                    </p>
                    <ul className="space-y-1 text-sm text-gray-400 ml-4">
                      <li>• 82% of customer inquiries resolved without human intervention</li>
                      <li>• Average response time reduced from 4 hours to under 1 minute</li>
                      <li>• Customer satisfaction (CSAT) increased from 3.8 to 4.6 out of 5</li>
                      <li>• Support team capacity increased by 200%, handling complex issues only</li>
                      <li>• Estimated annual savings of $1.8M in support costs</li>
                    </ul>
                  </div>

                  <div className="p-6 bg-gradient-to-br from-gray-800/50 to-gray-900/50 rounded-xl border border-gray-700">
                    <h4 className="text-lg font-semibold mb-3">Corporate IT Helpdesk</h4>
                    <p className="text-gray-400 text-sm mb-3">
                      <strong className="text-white">Client:</strong> Fortune 500 company with 15,000 employees
                    </p>
                    <p className="text-gray-400 text-sm mb-3">
                      <strong className="text-white">Implementation:</strong> Internal assistant for password resets, software requests, and IT troubleshooting
                    </p>
                    <p className="text-gray-400 text-sm mb-3">
                      <strong className="text-white">Results:</strong>
                    </p>
                    <ul className="space-y-1 text-sm text-gray-400 ml-4">
                      <li>• 75% reduction in helpdesk ticket volume</li>
                      <li>• Average resolution time decreased from 2 hours to 5 minutes</li>
                      <li>• Employee productivity increased with immediate issue resolution</li>
                      <li>• IT team able to focus on strategic projects instead of routine requests</li>
                      <li>• 24/7 availability improved employee satisfaction by 40%</li>
                    </ul>
                  </div>

                  <div className="p-6 bg-gradient-to-br from-gray-800/50 to-gray-900/50 rounded-xl border border-gray-700">
                    <h4 className="text-lg font-semibold mb-3">Financial Services Advisory</h4>
                    <p className="text-gray-400 text-sm mb-3">
                      <strong className="text-white">Client:</strong> Regional bank serving 500,000 account holders
                    </p>
                    <p className="text-gray-400 text-sm mb-3">
                      <strong className="text-white">Implementation:</strong> Ultimate Assistant for account inquiries, transaction disputes, and product recommendations
                    </p>
                    <p className="text-gray-400 text-sm mb-3">
                      <strong className="text-white">Results:</strong>
                    </p>
                    <ul className="space-y-1 text-sm text-gray-400 ml-4">
                      <li>• 90% of routine banking questions handled automatically</li>
                      <li>• Fraud detection and alert response time reduced by 85%</li>
                      <li>• Product cross-sell increased by 35% through intelligent recommendations</li>
                      <li>• Full compliance with financial regulations maintained</li>
                      <li>• Branch staff freed to focus on high-value relationship management</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-2xl font-semibold mb-6">Getting Started</h3>
                <div className="p-6 bg-gradient-to-br from-blue-900/20 to-gray-900/50 rounded-xl border border-blue-500/30">
                  <div className="space-y-4 text-gray-400">
                    <p><strong className="text-white">Step 1:</strong> Schedule a discovery call to discuss your specific use cases and requirements</p>
                    <p><strong className="text-white">Step 2:</strong> We'll design a custom configuration tailored to your business processes and brand voice</p>
                    <p><strong className="text-white">Step 3:</strong> Pilot deployment with a small user group to gather feedback and refine</p>
                    <p><strong className="text-white">Step 4:</strong> Full rollout with comprehensive training and ongoing optimization</p>
                  </div>
                  <button className="mt-6 px-6 py-3 bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600 text-white font-semibold rounded-lg transition-all">
                    Schedule Consultation
                  </button>
                </div>
              </div>
            </div>
          </div>
        );

      case 'rag-pipeline':
        return (
          <div className="space-y-6">
            <h1 className="text-4xl font-bold mb-4">RAG Pipeline</h1>
            <p className="text-xl text-gray-400">
              Retrieval-Augmented Generation system for accurate, knowledge-grounded AI responses.
            </p>

            <div className="mt-8 p-6 bg-gradient-to-br from-blue-900/20 to-gray-900/50 rounded-xl border border-blue-500/30">
              <h3 className="text-2xl font-semibold mb-4">What is RAG?</h3>
              <p className="text-gray-400 leading-relaxed mb-4">
                Retrieval-Augmented Generation (RAG) is an advanced AI architecture that combines the power of large language models with your organization's proprietary knowledge base. Instead of relying solely on pre-trained knowledge, RAG dynamically retrieves relevant information from your documents, databases, and systems to generate accurate, contextual, and up-to-date responses.
              </p>
              <p className="text-gray-400 leading-relaxed">
                This approach eliminates hallucinations, ensures factual accuracy, and keeps responses grounded in your actual business information, policies, and data.
              </p>
            </div>

            <div className="space-y-8 mt-8">
              <div>
                <h3 className="text-2xl font-semibold mb-6">Architecture Components</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="p-6 bg-gradient-to-br from-gray-800/50 to-gray-900/50 rounded-xl border border-gray-700">
                    <h4 className="text-lg font-semibold mb-3 text-blue-400">1. Document Ingestion & Processing</h4>
                    <ul className="space-y-2 text-sm text-gray-400">
                      <li>• Automated ingestion from multiple sources (files, databases, APIs, websites)</li>
                      <li>• Support for 50+ file formats (PDF, Word, Excel, HTML, JSON, etc.)</li>
                      <li>• Intelligent document parsing with table and image extraction</li>
                      <li>• Metadata tagging and categorization</li>
                      <li>• Version control and change tracking</li>
                      <li>• Incremental updates without full reindexing</li>
                    </ul>
                  </div>

                  <div className="p-6 bg-gradient-to-br from-gray-800/50 to-gray-900/50 rounded-xl border border-gray-700">
                    <h4 className="text-lg font-semibold mb-3 text-blue-400">2. Chunking & Embedding Strategy</h4>
                    <ul className="space-y-2 text-sm text-gray-400">
                      <li>• Smart text chunking that preserves semantic meaning</li>
                      <li>• Overlapping chunks to maintain context across boundaries</li>
                      <li>• Multiple embedding models for different content types</li>
                      <li>• Hierarchical embeddings for documents with complex structure</li>
                      <li>• Metadata-enriched embeddings for improved filtering</li>
                      <li>• Regular re-embedding as models improve</li>
                    </ul>
                  </div>

                  <div className="p-6 bg-gradient-to-br from-gray-800/50 to-gray-900/50 rounded-xl border border-gray-700">
                    <h4 className="text-lg font-semibold mb-3 text-blue-400">3. Vector Database & Search</h4>
                    <ul className="space-y-2 text-sm text-gray-400">
                      <li>• High-performance vector database (Pinecone, Weaviate, or custom)</li>
                      <li>• Semantic similarity search with configurable thresholds</li>
                      <li>• Hybrid search combining vector and keyword approaches</li>
                      <li>• Filtered retrieval based on permissions and metadata</li>
                      <li>• Multi-query retrieval strategies for comprehensive results</li>
                      <li>• Scalable to billions of vectors with sub-second latency</li>
                    </ul>
                  </div>

                  <div className="p-6 bg-gradient-to-br from-gray-800/50 to-gray-900/50 rounded-xl border border-gray-700">
                    <h4 className="text-lg font-semibold mb-3 text-blue-400">4. Context Assembly & Generation</h4>
                    <ul className="space-y-2 text-sm text-gray-400">
                      <li>• Intelligent ranking and reranking of retrieved documents</li>
                      <li>• Context compression to fit LLM token limits</li>
                      <li>• Source attribution and citation generation</li>
                      <li>• Confidence scoring for retrieval quality</li>
                      <li>• Fallback strategies when relevant information isn't found</li>
                      <li>• Response generation with configurable creativity levels</li>
                    </ul>
                  </div>

                  <div className="p-6 bg-gradient-to-br from-gray-800/50 to-gray-900/50 rounded-xl border border-gray-700">
                    <h4 className="text-lg font-semibold mb-3 text-blue-400">5. Quality Assurance & Monitoring</h4>
                    <ul className="space-y-2 text-sm text-gray-400">
                      <li>• Automated fact-checking against source documents</li>
                      <li>• Hallucination detection algorithms</li>
                      <li>• User feedback loops for continuous improvement</li>
                      <li>• Performance analytics (retrieval accuracy, response quality)</li>
                      <li>• A/B testing for retrieval and generation strategies</li>
                      <li>• Alert systems for anomalies or quality degradation</li>
                    </ul>
                  </div>

                  <div className="p-6 bg-gradient-to-br from-gray-800/50 to-gray-900/50 rounded-xl border border-gray-700">
                    <h4 className="text-lg font-semibold mb-3 text-blue-400">6. Security & Compliance</h4>
                    <ul className="space-y-2 text-sm text-gray-400">
                      <li>• Role-based access control (RBAC) at document level</li>
                      <li>• Data residency controls for regulated industries</li>
                      <li>• Audit logging for all queries and retrievals</li>
                      <li>• PII detection and redaction capabilities</li>
                      <li>• Encryption at rest and in transit</li>
                      <li>• Compliance with GDPR, HIPAA, SOC 2 requirements</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-2xl font-semibold mb-6">Technical Specifications</h3>
                <div className="p-6 bg-gradient-to-br from-gray-800/50 to-gray-900/50 rounded-xl border border-gray-700">
                  <div className="space-y-4 text-gray-400">
                    <p><strong className="text-white">Embedding Models:</strong> OpenAI Ada-002, Cohere Embed v3, custom fine-tuned models</p>
                    <p><strong className="text-white">Language Models:</strong> GPT-4, Claude-3 Opus, Llama-2 (for on-premise deployments)</p>
                    <p><strong className="text-white">Vector Databases:</strong> Pinecone, Weaviate, Qdrant, or self-hosted solutions</p>
                    <p><strong className="text-white">Processing Capacity:</strong> 10,000+ queries per second, 100M+ document chunks</p>
                    <p><strong className="text-white">Latency:</strong> Sub-2-second end-to-end response time (P95)</p>
                    <p><strong className="text-white">Accuracy:</strong> 95%+ retrieval precision, 92%+ answer accuracy</p>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-2xl font-semibold mb-6">Implementation Examples</h3>
                <div className="space-y-6">
                  <div className="p-6 bg-gradient-to-br from-gray-800/50 to-gray-900/50 rounded-xl border border-gray-700">
                    <h4 className="text-lg font-semibold mb-3">Enterprise Knowledge Management</h4>
                    <p className="text-gray-400 text-sm mb-3">
                      <strong className="text-white">Client:</strong> Multinational consulting firm with 20+ years of project documentation
                    </p>
                    <p className="text-gray-400 text-sm mb-3">
                      <strong className="text-white">Challenge:</strong> 50,000+ documents across SharePoint, Confluence, and file servers. Consultants spending hours searching for relevant past work and best practices.
                    </p>
                    <p className="text-gray-400 text-sm mb-3">
                      <strong className="text-white">Solution:</strong> RAG Pipeline indexing all historical documents with natural language search interface
                    </p>
                    <p className="text-gray-400 text-sm mb-3">
                      <strong className="text-white">Implementation Details:</strong>
                    </p>
                    <ul className="space-y-1 text-sm text-gray-400 ml-4 mb-3">
                      <li>• Automated daily ingestion from all document sources</li>
                      <li>• Custom metadata extraction for project type, client industry, and methodology</li>
                      <li>• Permission-aware retrieval matching Active Directory security groups</li>
                      <li>• Conversational interface allowing follow-up questions</li>
                      <li>• Citation of source documents with direct links for verification</li>
                    </ul>
                    <p className="text-gray-400 text-sm mb-3">
                      <strong className="text-white">Results:</strong>
                    </p>
                    <ul className="space-y-1 text-sm text-gray-400 ml-4">
                      <li>• Research time reduced from 4+ hours to under 15 minutes</li>
                      <li>• 93% of queries successfully answered with relevant information</li>
                      <li>• Consultants able to leverage institutional knowledge effectively</li>
                      <li>• Improved proposal quality with evidence-based best practices</li>
                      <li>• Estimated $3.5M annual value from time savings</li>
                    </ul>
                  </div>

                  <div className="p-6 bg-gradient-to-br from-gray-800/50 to-gray-900/50 rounded-xl border border-gray-700">
                    <h4 className="text-lg font-semibold mb-3">Technical Support Documentation</h4>
                    <p className="text-gray-400 text-sm mb-3">
                      <strong className="text-white">Client:</strong> SaaS company providing DevOps platform to 10,000+ customers
                    </p>
                    <p className="text-gray-400 text-sm mb-3">
                      <strong className="text-white">Challenge:</strong> Complex product with frequent updates. Support team overwhelmed with technical questions. Documentation scattered across multiple systems.
                    </p>
                    <p className="text-gray-400 text-sm mb-3">
                      <strong className="text-white">Solution:</strong> RAG Pipeline integrating product docs, API references, troubleshooting guides, and community discussions
                    </p>
                    <p className="text-gray-400 text-sm mb-3">
                      <strong className="text-white">Implementation Details:</strong>
                    </p>
                    <ul className="space-y-1 text-sm text-gray-400 ml-4 mb-3">
                      <li>• Real-time ingestion as documentation is updated</li>
                      <li>• Code-aware chunking preserving syntax and structure</li>
                      <li>• Version-specific retrieval matching customer's product version</li>
                      <li>• Integration with ticket system for context-aware suggestions</li>
                      <li>• Continuous learning from successful ticket resolutions</li>
                    </ul>
                    <p className="text-gray-400 text-sm mb-3">
                      <strong className="text-white">Results:</strong>
                    </p>
                    <ul className="space-y-1 text-sm text-gray-400 ml-4">
                      <li>• 70% of technical questions resolved without human intervention</li>
                      <li>• First-time resolution rate improved from 65% to 89%</li>
                      <li>• Support ticket volume reduced by 45%</li>
                      <li>• Customer satisfaction scores increased from 4.1 to 4.8</li>
                      <li>• Support team able to handle 3x volume with same headcount</li>
                    </ul>
                  </div>

                  <div className="p-6 bg-gradient-to-br from-gray-800/50 to-gray-900/50 rounded-xl border border-gray-700">
                    <h4 className="text-lg font-semibold mb-3">Legal Contract Analysis</h4>
                    <p className="text-gray-400 text-sm mb-3">
                      <strong className="text-white">Client:</strong> Corporate law department managing 10,000+ contracts
                    </p>
                    <p className="text-gray-400 text-sm mb-3">
                      <strong className="text-white">Challenge:</strong> Need to quickly find contract clauses, analyze obligations, and identify risks across thousands of documents. Manual review taking days per analysis.
                    </p>
                    <p className="text-gray-400 text-sm mb-3">
                      <strong className="text-white">Solution:</strong> Specialized RAG Pipeline for legal document understanding and analysis
                    </p>
                    <p className="text-gray-400 text-sm mb-3">
                      <strong className="text-white">Implementation Details:</strong>
                    </p>
                    <ul className="space-y-1 text-sm text-gray-400 ml-4 mb-3">
                      <li>• Legal-specific embeddings trained on contract language</li>
                      <li>• Clause-level chunking with hierarchical document structure</li>
                      <li>• Multi-document comparison and analysis capabilities</li>
                      <li>• Risk scoring based on precedent and company policies</li>
                      <li>• Audit trail for all analyses with explainable reasoning</li>
                    </ul>
                    <p className="text-gray-400 text-sm mb-3">
                      <strong className="text-white">Results:</strong>
                    </p>
                    <ul className="space-y-1 text-sm text-gray-400 ml-4">
                      <li>• Contract review time reduced from 3 days to 2 hours</li>
                      <li>• 97% accuracy in clause extraction and categorization</li>
                      <li>• Early identification of non-standard terms and risks</li>
                      <li>• Attorneys freed to focus on negotiation and strategy</li>
                      <li>• Estimated annual savings of $2.1M in legal costs</li>
                    </ul>
                  </div>

                  <div className="p-6 bg-gradient-to-br from-gray-800/50 to-gray-900/50 rounded-xl border border-gray-700">
                    <h4 className="text-lg font-semibold mb-3">Healthcare Clinical Decision Support</h4>
                    <p className="text-gray-400 text-sm mb-3">
                      <strong className="text-white">Client:</strong> Hospital system with 500 physicians across 12 specialties
                    </p>
                    <p className="text-gray-400 text-sm mb-3">
                      <strong className="text-white">Challenge:</strong> Physicians need quick access to latest clinical guidelines, research, and institutional protocols. Medical knowledge expanding faster than practitioners can keep up.
                    </p>
                    <p className="text-gray-400 text-sm mb-3">
                      <strong className="text-white">Solution:</strong> HIPAA-compliant RAG Pipeline integrating medical literature, hospital protocols, and patient records
                    </p>
                    <p className="text-gray-400 text-sm mb-3">
                      <strong className="text-white">Implementation Details:</strong>
                    </p>
                    <ul className="space-y-1 text-sm text-gray-400 ml-4 mb-3">
                      <li>• Integration with PubMed, UpToDate, and internal guidelines</li>
                      <li>• Real-time updates as new research is published</li>
                      <li>• Patient-context-aware recommendations (allergies, history, meds)</li>
                      <li>• Evidence grading and source credibility scoring</li>
                      <li>• Full HIPAA compliance with comprehensive audit logging</li>
                    </ul>
                    <p className="text-gray-400 text-sm mb-3">
                      <strong className="text-white">Results:</strong>
                    </p>
                    <ul className="space-y-1 text-sm text-gray-400 ml-4">
                      <li>• Physicians able to access relevant guidelines in under 30 seconds</li>
                      <li>• 15% improvement in adherence to evidence-based protocols</li>
                      <li>• Reduction in adverse drug interactions through better information</li>
                      <li>• Enhanced patient outcomes with up-to-date treatment approaches</li>
                      <li>• Positive feedback from 94% of physician users</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-2xl font-semibold mb-6">Configuration Options</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="p-6 bg-gradient-to-br from-gray-800/50 to-gray-900/50 rounded-xl border border-gray-700">
                    <h4 className="text-lg font-semibold mb-3 text-blue-400">Retrieval Strategy</h4>
                    <ul className="space-y-2 text-sm text-gray-400">
                      <li>• Top-K retrieval (configurable K value)</li>
                      <li>• Threshold-based filtering</li>
                      <li>• Maximum marginal relevance (MMR) for diversity</li>
                      <li>• Multi-query expansion</li>
                      <li>• Hybrid semantic + keyword search</li>
                    </ul>
                  </div>

                  <div className="p-6 bg-gradient-to-br from-gray-800/50 to-gray-900/50 rounded-xl border border-gray-700">
                    <h4 className="text-lg font-semibold mb-3 text-blue-400">Response Generation</h4>
                    <ul className="space-y-2 text-sm text-gray-400">
                      <li>• Temperature and creativity controls</li>
                      <li>• Response length preferences</li>
                      <li>• Citation style (inline, footnotes, none)</li>
                      <li>• Confidence thresholds for uncertainty handling</li>
                      <li>• Custom system prompts and personas</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-2xl font-semibold mb-6">Getting Started with RAG Pipeline</h3>
                <div className="p-6 bg-gradient-to-br from-blue-900/20 to-gray-900/50 rounded-xl border border-blue-500/30">
                  <div className="space-y-4 text-gray-400">
                    <p><strong className="text-white">Step 1:</strong> Audit your knowledge sources and document repositories</p>
                    <p><strong className="text-white">Step 2:</strong> Define use cases, access controls, and success metrics</p>
                    <p><strong className="text-white">Step 3:</strong> Pilot with a subset of documents and small user group</p>
                    <p><strong className="text-white">Step 4:</strong> Iterate based on feedback, accuracy measurements, and usage patterns</p>
                    <p><strong className="text-white">Step 5:</strong> Scale to full document corpus with ongoing monitoring and optimization</p>
                  </div>
                  <button className="mt-6 px-6 py-3 bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600 text-white font-semibold rounded-lg transition-all">
                    Schedule RAG Assessment
                  </button>
                </div>
              </div>
            </div>
          </div>
        );

      default:
        return <div>Section not found</div>;
    }
  };

  return (
    <div className="pt-16 min-h-screen bg-gradient-to-b from-transparent to-gray-900/30">
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Sidebar */}
          <aside className="lg:col-span-1">
            <div className="sticky top-24 bg-gradient-to-br from-gray-800/50 to-gray-900/50 rounded-xl border border-gray-700 p-6">
              <h2 className="text-xl font-bold mb-6">Documentation</h2>
              <nav className="space-y-1">
                {navigation.map((item) => (
                  <div key={item.id}>
                    <button
                      onClick={() =>
                        item.children
                          ? toggleDropdown(item.id)
                          : setActiveSection(item.id)
                      }
                      className={`w-full flex items-center justify-between px-4 py-2.5 rounded-lg transition-all ${
                        activeSection === item.id
                          ? 'bg-blue-500/20 text-blue-400'
                          : 'text-gray-400 hover:bg-gray-800/50 hover:text-white'
                      }`}
                    >
                      <div className="flex items-center space-x-3">
                        <item.icon size={18} />
                        <span className="text-sm font-medium">{item.label}</span>
                      </div>

                      {item.children && (
                        <svg
                          className={`w-4 h-4 transform transition-transform ${
                            openDropdown === item.id ? 'rotate-90' : ''
                          }`}
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M9 5l7 7-7 7"
                          />
                        </svg>
                      )}
                    </button>

                    {/* Dropdown */}
                    {item.children && openDropdown === item.id && (
                      <div className="ml-8 mt-1 space-y-1">
                        {item.children.map((child) => (
                          <button
                            key={child.id}
                            onClick={() => setActiveSection(child.id)}
                            className={`w-full text-left px-4 py-2 rounded-lg text-sm transition-all ${
                              activeSection === child.id
                                ? 'text-blue-400 bg-blue-500/10'
                                : 'text-gray-500 hover:text-white hover:bg-gray-800/30'
                            }`}
                          >
                            {child.label}
                          </button>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
              </nav>
            </div>
          </aside>

          {/* Main content */}
          <main className="lg:col-span-3">
            <div className="prose prose-invert max-w-none">
              {renderContent()}
            </div>
          </main>
        </div>
      </div>
    </div>
  );
}

export default DocsPage;
