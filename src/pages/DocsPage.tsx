import { useState } from 'react';
import { Book, ChevronRight, Bot, Network, Workflow, FileText, Zap } from 'lucide-react';

function DocsPage() {
  const [activeSection, setActiveSection] = useState('introduction');

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
  ];

  const renderContent = () => {
    switch (activeSection) {
      case 'introduction':
        return (
          <div className="space-y-6">
            <h1 className="text-4xl font-bold mb-4">Welcome to TalkVera Documentation</h1>
            <p className="text-xl text-gray-400">
              Comprehensive guides and resources to help you understand and leverage our AI solutions.
            </p>

            <div className="mt-8 p-6 bg-blue-500/10 border border-blue-500/30 rounded-xl">
              <h3 className="text-xl font-semibold mb-3 flex items-center space-x-2">
                <Zap className="w-5 h-5 text-blue-400" />
                <span>Getting Started</span>
              </h3>
              <p className="text-gray-400 mb-4">
                TalkVera provides enterprise-grade AI solutions designed to transform your business operations. Our platform combines cutting-edge machine learning, natural language processing, and automation technologies to deliver measurable results.
              </p>
              <ul className="space-y-2 text-gray-400">
                <li className="flex items-start space-x-2">
                  <ChevronRight className="w-5 h-5 text-blue-400 flex-shrink-0 mt-0.5" />
                  <span>Explore our technology stack to understand our technical capabilities</span>
                </li>
                <li className="flex items-start space-x-2">
                  <ChevronRight className="w-5 h-5 text-blue-400 flex-shrink-0 mt-0.5" />
                  <span>Learn about our three-phase implementation process</span>
                </li>
                <li className="flex items-start space-x-2">
                  <ChevronRight className="w-5 h-5 text-blue-400 flex-shrink-0 mt-0.5" />
                  <span>Discover our pre-built AI agent solutions and capabilities</span>
                </li>
              </ul>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
              <div className="p-6 bg-gradient-to-br from-gray-800/50 to-gray-900/50 rounded-xl border border-gray-700">
                <h3 className="text-lg font-semibold mb-2">Core Capabilities</h3>
                <p className="text-gray-400 text-sm">
                  Natural language processing, computer vision, predictive analytics, and intelligent automation.
                </p>
              </div>
              <div className="p-6 bg-gradient-to-br from-gray-800/50 to-gray-900/50 rounded-xl border border-gray-700">
                <h3 className="text-lg font-semibold mb-2">Industry Solutions</h3>
                <p className="text-gray-400 text-sm">
                  Tailored AI implementations for finance, healthcare, retail, manufacturing, and professional services.
                </p>
              </div>
            </div>
          </div>
        );

      case 'tech-stack':
        return (
          <div className="space-y-6">
            <h1 className="text-4xl font-bold mb-4">Technology Stack</h1>
            <p className="text-xl text-gray-400">
              Built on industry-leading technologies to ensure performance, scalability, and reliability.
            </p>

            <div className="space-y-6 mt-8">
              <div className="p-6 bg-gradient-to-br from-gray-800/50 to-gray-900/50 rounded-xl border border-gray-700">
                <h3 className="text-2xl font-semibold mb-4">Machine Learning Frameworks</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="p-4 bg-gray-900/50 rounded-lg">
                    <h4 className="font-semibold text-blue-400 mb-2">PyTorch & TensorFlow</h4>
                    <p className="text-sm text-gray-400">Deep learning model development and training for custom AI solutions.</p>
                  </div>
                  <div className="p-4 bg-gray-900/50 rounded-lg">
                    <h4 className="font-semibold text-blue-400 mb-2">Scikit-learn</h4>
                    <p className="text-sm text-gray-400">Classical machine learning algorithms for prediction and classification tasks.</p>
                  </div>
                  <div className="p-4 bg-gray-900/50 rounded-lg">
                    <h4 className="font-semibold text-blue-400 mb-2">Hugging Face Transformers</h4>
                    <p className="text-sm text-gray-400">State-of-the-art NLP models for language understanding and generation.</p>
                  </div>
                  <div className="p-4 bg-gray-900/50 rounded-lg">
                    <h4 className="font-semibold text-blue-400 mb-2">OpenAI GPT & Claude</h4>
                    <p className="text-sm text-gray-400">Large language models for advanced conversational AI and reasoning.</p>
                  </div>
                </div>
              </div>

              <div className="p-6 bg-gradient-to-br from-gray-800/50 to-gray-900/50 rounded-xl border border-gray-700">
                <h3 className="text-2xl font-semibold mb-4">Cloud Infrastructure</h3>
                <div className="space-y-3 text-gray-400">
                  <p><strong className="text-white">AWS:</strong> EC2, Lambda, SageMaker, S3 for scalable compute and storage</p>
                  <p><strong className="text-white">Kubernetes:</strong> Container orchestration for microservices architecture</p>
                  <p><strong className="text-white">Docker:</strong> Containerization for consistent deployment environments</p>
                  <p><strong className="text-white">Redis:</strong> In-memory caching for high-performance data access</p>
                </div>
              </div>

              <div className="p-6 bg-gradient-to-br from-gray-800/50 to-gray-900/50 rounded-xl border border-gray-700">
                <h3 className="text-2xl font-semibold mb-4">Data & Analytics</h3>
                <div className="space-y-3 text-gray-400">
                  <p><strong className="text-white">PostgreSQL & MongoDB:</strong> Robust data storage for structured and unstructured data</p>
                  <p><strong className="text-white">Apache Kafka:</strong> Real-time data streaming and event processing</p>
                  <p><strong className="text-white">Elasticsearch:</strong> Full-text search and analytics engine</p>
                  <p><strong className="text-white">Grafana & Prometheus:</strong> Monitoring, visualization, and alerting</p>
                </div>
              </div>

              <div className="p-6 bg-gradient-to-br from-gray-800/50 to-gray-900/50 rounded-xl border border-gray-700">
                <h3 className="text-2xl font-semibold mb-4">Security & Compliance</h3>
                <div className="space-y-3 text-gray-400">
                  <p><strong className="text-white">Encryption:</strong> AES-256 encryption at rest, TLS 1.3 in transit</p>
                  <p><strong className="text-white">Authentication:</strong> OAuth 2.0, SSO, multi-factor authentication</p>
                  <p><strong className="text-white">Compliance:</strong> SOC 2 Type II, GDPR, HIPAA, ISO 27001 certified</p>
                  <p><strong className="text-white">Audit Logging:</strong> Comprehensive activity tracking and compliance reporting</p>
                </div>
              </div>
            </div>
          </div>
        );

      case 'process':
        return (
          <div className="space-y-6">
            <h1 className="text-4xl font-bold mb-4">Our Process</h1>
            <p className="text-xl text-gray-400">
              A proven methodology for delivering successful AI implementations.
            </p>

            <div className="space-y-8 mt-8">
              <div className="p-8 bg-gradient-to-br from-blue-900/20 to-gray-900/50 rounded-xl border border-blue-500/30">
                <div className="flex items-center space-x-4 mb-6">
                  <div className="w-16 h-16 rounded-xl bg-blue-500/20 flex items-center justify-center border border-blue-500/50">
                    <span className="text-3xl font-bold text-blue-400">01</span>
                  </div>
                  <h3 className="text-3xl font-bold">Discovery Phase</h3>
                </div>
                <div className="space-y-4 text-gray-400 pl-20">
                  <p className="font-semibold text-white text-lg">Duration: 2-4 weeks</p>
                  <div className="space-y-3">
                    <p><strong className="text-white">Business Analysis:</strong> Deep dive into your current operations, pain points, and strategic objectives. We conduct stakeholder interviews and workflow analysis to understand your unique needs.</p>
                    <p><strong className="text-white">Technical Assessment:</strong> Comprehensive review of your existing infrastructure, data assets, and integration requirements. We identify opportunities and constraints.</p>
                    <p><strong className="text-white">Solution Design:</strong> Development of a detailed AI strategy roadmap including architecture design, technology selection, and success metrics definition.</p>
                    <p><strong className="text-white">Deliverables:</strong> Technical proposal, project timeline, resource allocation plan, and ROI projections.</p>
                  </div>
                </div>
              </div>

              <div className="p-8 bg-gradient-to-br from-cyan-900/20 to-gray-900/50 rounded-xl border border-cyan-500/30">
                <div className="flex items-center space-x-4 mb-6">
                  <div className="w-16 h-16 rounded-xl bg-cyan-500/20 flex items-center justify-center border border-cyan-500/50">
                    <span className="text-3xl font-bold text-cyan-400">02</span>
                  </div>
                  <h3 className="text-3xl font-bold">Development Phase</h3>
                </div>
                <div className="space-y-4 text-gray-400 pl-20">
                  <p className="font-semibold text-white text-lg">Duration: 6-12 weeks</p>
                  <div className="space-y-3">
                    <p><strong className="text-white">Data Preparation:</strong> Collection, cleaning, and structuring of training data. Implementation of data pipelines and quality assurance protocols.</p>
                    <p><strong className="text-white">Model Development:</strong> Custom AI model training and optimization using state-of-the-art algorithms. Iterative testing and validation against success criteria.</p>
                    <p><strong className="text-white">System Integration:</strong> Development of APIs and connectors to seamlessly integrate with your existing systems. Implementation of security and access controls.</p>
                    <p><strong className="text-white">User Interface:</strong> Design and development of intuitive dashboards and control panels for monitoring and management.</p>
                    <p><strong className="text-white">Testing & QA:</strong> Rigorous testing including unit tests, integration tests, and user acceptance testing. Performance optimization and bug fixes.</p>
                  </div>
                </div>
              </div>

              <div className="p-8 bg-gradient-to-br from-green-900/20 to-gray-900/50 rounded-xl border border-green-500/30">
                <div className="flex items-center space-x-4 mb-6">
                  <div className="w-16 h-16 rounded-xl bg-green-500/20 flex items-center justify-center border border-green-500/50">
                    <span className="text-3xl font-bold text-green-400">03</span>
                  </div>
                  <h3 className="text-3xl font-bold">Deployment Phase</h3>
                </div>
                <div className="space-y-4 text-gray-400 pl-20">
                  <p className="font-semibold text-white text-lg">Duration: 2-4 weeks + Ongoing</p>
                  <div className="space-y-3">
                    <p><strong className="text-white">Staged Rollout:</strong> Careful phased deployment starting with pilot groups, gathering feedback, and making adjustments before full-scale launch.</p>
                    <p><strong className="text-white">Team Training:</strong> Comprehensive training programs for administrators and end-users. Documentation and knowledge transfer sessions.</p>
                    <p><strong className="text-white">Monitoring Setup:</strong> Implementation of real-time monitoring, alerting systems, and analytics dashboards to track performance and usage.</p>
                    <p><strong className="text-white">Ongoing Support:</strong> Dedicated support team for troubleshooting, maintenance, and optimization. Regular performance reviews and strategy sessions.</p>
                    <p><strong className="text-white">Continuous Improvement:</strong> Model retraining with new data, feature enhancements based on user feedback, and proactive optimization.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );

      case 'resources':
        return (
          <div className="space-y-6">
            <h1 className="text-4xl font-bold mb-4">Resources</h1>
            <p className="text-xl text-gray-400">
              Additional materials and guides to maximize your TalkVera experience.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
              <div className="p-6 bg-gradient-to-br from-gray-800/50 to-gray-900/50 rounded-xl border border-gray-700 hover:border-blue-500/50 transition-all">
                <h3 className="text-xl font-semibold mb-3">API Documentation</h3>
                <p className="text-gray-400 mb-4">
                  Complete reference for integrating with TalkVera's APIs, including authentication, endpoints, and code examples.
                </p>
                <a href="#" className="text-blue-400 hover:text-blue-300 font-semibold">
                  View API Docs →
                </a>
              </div>

              <div className="p-6 bg-gradient-to-br from-gray-800/50 to-gray-900/50 rounded-xl border border-gray-700 hover:border-blue-500/50 transition-all">
                <h3 className="text-xl font-semibold mb-3">Video Tutorials</h3>
                <p className="text-gray-400 mb-4">
                  Step-by-step video guides covering setup, configuration, and best practices for common use cases.
                </p>
                <a href="#" className="text-blue-400 hover:text-blue-300 font-semibold">
                  Watch Tutorials →
                </a>
              </div>

              <div className="p-6 bg-gradient-to-br from-gray-800/50 to-gray-900/50 rounded-xl border border-gray-700 hover:border-blue-500/50 transition-all">
                <h3 className="text-xl font-semibold mb-3">Best Practices Guide</h3>
                <p className="text-gray-400 mb-4">
                  Learn industry best practices for AI implementation, data management, and system optimization.
                </p>
                <a href="#" className="text-blue-400 hover:text-blue-300 font-semibold">
                  Read Guide →
                </a>
              </div>

              <div className="p-6 bg-gradient-to-br from-gray-800/50 to-gray-900/50 rounded-xl border border-gray-700 hover:border-blue-500/50 transition-all">
                <h3 className="text-xl font-semibold mb-3">Community Forum</h3>
                <p className="text-gray-400 mb-4">
                  Connect with other TalkVera users, share experiences, and get help from our community experts.
                </p>
                <a href="#" className="text-blue-400 hover:text-blue-300 font-semibold">
                  Join Forum →
                </a>
              </div>

              <div className="p-6 bg-gradient-to-br from-gray-800/50 to-gray-900/50 rounded-xl border border-gray-700 hover:border-blue-500/50 transition-all">
                <h3 className="text-xl font-semibold mb-3">Webinar Series</h3>
                <p className="text-gray-400 mb-4">
                  Live and recorded webinars featuring AI experts, product updates, and real-world implementations.
                </p>
                <a href="#" className="text-blue-400 hover:text-blue-300 font-semibold">
                  View Schedule →
                </a>
              </div>

              <div className="p-6 bg-gradient-to-br from-gray-800/50 to-gray-900/50 rounded-xl border border-gray-700 hover:border-blue-500/50 transition-all">
                <h3 className="text-xl font-semibold mb-3">Technical Blog</h3>
                <p className="text-gray-400 mb-4">
                  In-depth articles on AI trends, technical deep-dives, and insights from our engineering team.
                </p>
                <a href="#" className="text-blue-400 hover:text-blue-300 font-semibold">
                  Read Blog →
                </a>
              </div>
            </div>
          </div>
        );

      case 'overview':
        return (
          <div className="space-y-6">
            <h1 className="text-4xl font-bold mb-4">AI Agents Overview</h1>
            <p className="text-xl text-gray-400">
              Intelligent autonomous agents that execute complex tasks and make decisions.
            </p>

            <div className="mt-8 p-6 bg-gradient-to-br from-blue-900/20 to-gray-900/50 rounded-xl border border-blue-500/30">
              <h3 className="text-2xl font-semibold mb-4">What are AI Agents?</h3>
              <p className="text-gray-400 mb-4 leading-relaxed">
                AI agents are autonomous software entities that perceive their environment, make decisions, and take actions to achieve specific goals. Unlike traditional automation, AI agents can adapt to changing conditions, learn from experience, and handle complex scenarios that require reasoning and judgment.
              </p>
              <p className="text-gray-400 leading-relaxed">
                TalkVera's AI agents combine natural language understanding, machine learning, and domain expertise to deliver intelligent automation across various business functions.
              </p>
            </div>

            <div className="space-y-6 mt-8">
              <h3 className="text-2xl font-semibold">Core Capabilities</h3>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="p-6 bg-gradient-to-br from-gray-800/50 to-gray-900/50 rounded-xl border border-gray-700">
                  <h4 className="text-lg font-semibold mb-3 text-blue-400">Natural Language Processing</h4>
                  <p className="text-gray-400 text-sm">
                    Understand and generate human language with context awareness, sentiment analysis, and multi-language support.
                  </p>
                </div>

                <div className="p-6 bg-gradient-to-br from-gray-800/50 to-gray-900/50 rounded-xl border border-gray-700">
                  <h4 className="text-lg font-semibold mb-3 text-blue-400">Decision Making</h4>
                  <p className="text-gray-400 text-sm">
                    Make intelligent decisions based on business rules, learned patterns, and real-time data analysis.
                  </p>
                </div>

                <div className="p-6 bg-gradient-to-br from-gray-800/50 to-gray-900/50 rounded-xl border border-gray-700">
                  <h4 className="text-lg font-semibold mb-3 text-blue-400">Task Orchestration</h4>
                  <p className="text-gray-400 text-sm">
                    Coordinate multiple sub-tasks, manage workflows, and integrate with various systems seamlessly.
                  </p>
                </div>

                <div className="p-6 bg-gradient-to-br from-gray-800/50 to-gray-900/50 rounded-xl border border-gray-700">
                  <h4 className="text-lg font-semibold mb-3 text-blue-400">Continuous Learning</h4>
                  <p className="text-gray-400 text-sm">
                    Improve performance over time through feedback loops, pattern recognition, and model updates.
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-8 p-6 bg-gradient-to-br from-gray-800/50 to-gray-900/50 rounded-xl border border-gray-700">
              <h3 className="text-2xl font-semibold mb-4">Pre-Built Agent Solutions</h3>
              <ul className="space-y-3 text-gray-400">
                <li className="flex items-start space-x-3">
                  <ChevronRight className="w-5 h-5 text-blue-400 flex-shrink-0 mt-0.5" />
                  <span><strong className="text-white">Ultimate Assistant:</strong> Multi-functional agent for customer support, scheduling, and information retrieval</span>
                </li>
                <li className="flex items-start space-x-3">
                  <ChevronRight className="w-5 h-5 text-blue-400 flex-shrink-0 mt-0.5" />
                  <span><strong className="text-white">RAG Pipeline:</strong> Retrieval-Augmented Generation for knowledge-based question answering</span>
                </li>
                <li className="flex items-start space-x-3">
                  <ChevronRight className="w-5 h-5 text-blue-400 flex-shrink-0 mt-0.5" />
                  <span><strong className="text-white">Custom Agents:</strong> Tailored solutions designed for your specific business requirements</span>
                </li>
              </ul>
            </div>
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
                    <h4 className="text-lg font-semibold mb-3 text-cyan-400">Retrieval Strategy</h4>
                    <ul className="space-y-2 text-sm text-gray-400">
                      <li>• Top-K retrieval (configurable K value)</li>
                      <li>• Threshold-based filtering</li>
                      <li>• Maximum marginal relevance (MMR) for diversity</li>
                      <li>• Multi-query expansion</li>
                      <li>• Hybrid semantic + keyword search</li>
                    </ul>
                  </div>

                  <div className="p-6 bg-gradient-to-br from-gray-800/50 to-gray-900/50 rounded-xl border border-gray-700">
                    <h4 className="text-lg font-semibold mb-3 text-cyan-400">Response Generation</h4>
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
          <aside className="lg:col-span-1">
            <div className="sticky top-24 bg-gradient-to-br from-gray-800/50 to-gray-900/50 rounded-xl border border-gray-700 p-6">
              <h2 className="text-xl font-bold mb-6">Documentation</h2>
              <nav className="space-y-1">
                {navigation.map((item) => (
                  <div key={item.id}>
                    <button
                      onClick={() => setActiveSection(item.id)}
                      className={`w-full flex items-center space-x-3 px-4 py-2.5 rounded-lg transition-all ${
                        activeSection === item.id
                          ? 'bg-blue-500/20 text-blue-400'
                          : 'text-gray-400 hover:bg-gray-800/50 hover:text-white'
                      }`}
                    >
                      <item.icon size={18} />
                      <span className="text-sm font-medium">{item.label}</span>
                    </button>
                    {item.children && (
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
