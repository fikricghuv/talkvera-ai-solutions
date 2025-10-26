const UltimateAssistantContent = () => {
    return (
        <div className="space-y-10 text-gray-300">
            
            {/* 1. HEADER & INTRO */}
            <header className="pb-4 border-b border-gray-700">
                <h1 className="text-5xl font-extrabold text-white">Ultimate Assistant: Enterprise AI Workflow</h1>
                <p className="text-xl mt-2 text-blue-400">
                    A comprehensive AI agent designed for executive support, operational management, and complex workflow automation.
                </p>
            </header>

            {/* 2. PROJECT OVERVIEW */}
            <section className="space-y-4">
              <h2 className="text-3xl font-bold text-white mb-4 border-b border-gray-800 pb-2">Project Overview</h2>
              <p className="leading-relaxed">
                The Ultimate Assistant is our flagship intelligent multi-purpose AI agent. This system is designed to handle a wide range of business tasks with human-like efficiency, focusing on combining advanced **conversational intelligence** with **seamless system integrations** across the entire enterprise stack.
              </p>
              <p className="leading-relaxed">
                The deployment follows a three-phase modular architecture: establishing a secure data foundation, enabling dynamic multi-step task planning through the Model Context Protocol (MCP), and ensuring personalized support via continuous learning and memory management.
              </p>
              
              {/* Metadata dalam format Definition List */}
              <div className="pt-4 grid grid-cols-2 md:grid-cols-3 gap-6 text-sm">
                  <div className="p-3 bg-gray-800/30 rounded-lg">
                      <dt className="text-blue-400 uppercase font-semibold mb-1">Role</dt>
                      <dd className="text-white font-medium">Executive & Operational Support</dd>
                  </div>
                  <div className="p-3 bg-gray-800/30 rounded-lg">
                      <dt className="text-blue-400 uppercase font-semibold mb-1">Key Integrations</dt>
                      <dd className="text-white font-medium">CRM, ERP, Calendar, Knowledge Base, Email API</dd>
                  </div>
                  <div className="p-3 bg-gray-800/30 rounded-lg">
                      <dt className="text-blue-400 uppercase font-semibold mb-1">Time to Value</dt>
                      <dd className="text-white font-medium">4 - 6 Weeks</dd>
                  </div>
              </div>
            </section>

            {/* 3. PHASE 1: ENTERPRISE INTEGRATION & KNOWLEDGE FOUNDATION */}
            <section className="space-y-4 pt-4">
              <h2 className="text-3xl font-bold text-white mb-6 border-b border-gray-800 pb-2">Phase 1: Enterprise Integration & Knowledge Foundation</h2>
              <p className="font-semibold text-blue-400">Trigger: Deployment and initial data configuration across secure APIs.</p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                
                {/* Capability 1: Secure API Gateway & Sync */}
                <div className="p-4 rounded-lg bg-gray-800/20 border border-gray-800/50">
                  <h4 className="text-xl font-bold mb-2 text-white">Secure API Gateway & Data Synchronization</h4>
                  <ul className="space-y-1 text-sm list-disc pl-5">
                    <li>Establishes authenticated connectors to core systems (CRM, ERP, HR platforms).</li>
                    <li>Synchronizes user permissions and roles for compliance and secure access control.</li>
                    <li>Provides real-time validation layers for all data read and write operations.</li>
                  </ul>
                </div>

                {/* Capability 2: Retrieval-Augmented Generation (RAG) Setup */}
                <div className="p-4 rounded-lg bg-gray-800/20 border border-gray-800/50">
                  <h4 className="text-xl font-bold mb-2 text-white">Retrieval-Augmented Generation (RAG) Setup</h4>
                  <ul className="space-y-1 text-sm list-disc pl-5">
                    <li>Ingestion and chunking of internal documentation (policies, reports, manuals).</li>
                    <li>Vector database creation for semantic search and grounded responses.</li>
                    <li>Ensures all knowledge-based answers are factual, current, and traceable to source documents.</li>
                  </ul>
                </div>
              </div>
            </section>
            
            {/* 4. PHASE 2: CONTEXTUAL REASONING & TOOL ORCHESTRATION */}
            <section className="space-y-4 pt-4">
              <h2 className="text-3xl font-bold text-white mb-6 border-b border-gray-800 pb-2">Phase 2: Contextual Reasoning & Tool Orchestration</h2>
              <p className="font-semibold text-blue-400">Trigger: User initiates a multi-step or complex task request (e.g., "Find Jim's availability and draft an email to him about Project Alpha.").</p>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                
                {/* Capability 1: Model Context Protocol (MCP) Integration */}
                <div className="p-4 rounded-lg bg-gray-800/20 border border-gray-800/50">
                  <h4 className="text-xl font-bold mb-2 text-white">MCP-Powered Task Planning</h4>
                  <ul className="space-y-1 text-sm list-disc pl-5">
                    <li>AI agent dynamically deconstructs complex requests into sequential, executable sub-tasks.</li>
                    <li>Autonomously selects the optimal sequence of API calls, database lookups, and generation steps.</li>
                  </ul>
                </div>

                {/* Capability 2: Real-Time Tool Execution */}
                <div className="p-4 rounded-lg bg-gray-800/20 border border-gray-800/50">
                  <h4 className="text-xl font-bold mb-2 text-white">Real-Time Tool Execution</h4>
                  <ul className="space-y-1 text-sm list-disc pl-5">
                    <li>Agents autonomously call integrated tools (e.g., 'schedule_meeting', 'fetch_sales_data', 'draft_document').</li>
                    <li>Dynamic parameter generation using context from the conversation flow and API responses.</li>
                  </ul>
                </div>

                {/* Capability 3: Multi-Step Automation & Error Handling */}
                <div className="p-4 rounded-lg bg-gray-800/20 border border-gray-800/50">
                  <h4 className="text-xl font-bold mb-2 text-white">Multi-Step Automation & Error Handling</h4>
                  <ul className="space-y-1 text-sm list-disc pl-5">
                    <li>Execution of workflows involving up to 10 sequential steps without user intervention.</li>
                    <li>Intelligent recovery and re-planning if an external API call fails or returns unexpected data.</li>
                  </ul>
                </div>
              </div>
            </section>

            {/* 5. PHASE 3: ADAPTIVE PERSONALIZATION & CONTINUOUS LEARNING */}
            <section className="space-y-4 pt-4">
              <h2 className="text-3xl font-bold text-white mb-6 border-b border-gray-800 pb-2">Phase 3: Adaptive Personalization & Continuous Learning</h2>
              <p className="font-semibold text-blue-400">Trigger: Continuous interaction to maintain user context and adapt service delivery.</p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                
                {/* Capability 1: Cross-Session User Profile Memory */}
                <div className="p-4 rounded-lg bg-gray-800/20 border border-gray-800/50">
                  <h4 className="text-xl font-bold mb-2 text-white">Cross-Session User Profile Memory</h4>
                  <ul className="space-y-1 text-sm list-disc pl-5">
                    <li>Stores user-specific preferences (e.g., preferred calendar duration, report formats, tone).</li>
                    <li>**Vector embeddings** used for long-term semantic memory, enabling recall of context from weeks or months prior.</li>
                  </ul>
                </div>

                {/* Capability 2: Proactive Support & Sentiment Adaptation */}
                <div className="p-4 rounded-lg bg-gray-800/20 border border-gray-800/50">
                  <h4 className="text-xl font-bold mb-2 text-white">Proactive Support & Sentiment Adaptation</h4>
                  <ul className="space-y-1 text-sm list-disc pl-5">
                    <li>Sentiment analysis adapts communication style (e.g., using a more urgent/concise tone when stress is detected).</li>
                    <li>Proactive task identification (e.g., suggesting a follow-up action based on a previous query).</li>
                  </ul>
                </div>
              </div>
            </section>


            {/* 6. RETURN ON INVESTMENT */}
            <section className="mt-10 pt-4 space-y-4">
              <h2 className="text-3xl font-bold text-white mb-4 border-b border-gray-800 pb-2">Return on Investment (ROI)</h2>
              <ul className="space-y-3 list-disc pl-5 text-gray-300">
                  <li>**Capacity Expansion:** Frees up executive and support staff by automating up to 80% of routine administrative tasks.</li>
                  <li>**Speed & Accuracy:** Instantaneous information retrieval and complex task resolution, reducing human error.</li>
                  <li>**Scalability:** The architecture scales horizontally, supporting unlimited user growth without adding administrative overhead.</li>
                  <li>**Personalization:** Delivers bespoke support, increasing user satisfaction and adoption across the organization.</li>
              </ul>
              
              <div className="pt-4 p-4 rounded-lg border border-blue-500/30 bg-blue-900/10">
                <p className="leading-relaxed text-cyan-300">
                  **The Conclusion:** The Ultimate Assistant delivers comprehensive support by mastering three areas: robust integration, dynamic task execution, and personalized memory. This scalable foundation ensures operational excellence and enables your team to focus on strategic, high-value work.
                </p>
              </div>
            </section>
        </div>
    );
};

export default UltimateAssistantContent;