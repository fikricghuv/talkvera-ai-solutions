const TechStackContent = () => {
    return (
        <div className="space-y-8 max-w-5xl mx-auto">
            <h1 className="text-4xl font-bold mb-4">Technology Stack</h1>

            <p>
              At Talkvera, we adopt a forward-looking, modular tech stack built for speed, flexibility, and 
              long-term scalability. Our tooling reflects a blend of modern cloud infrastructure, 
              developer-centric platforms, and battle-tested AI frameworks. We select technologies based on 
              performance, integration depth, 
              open-source momentum, and alignment with client-specific use cases. 
              Whether you're a technical stakeholder or completely new to AI, our stack is designed to make 
              innovation accessible and reliable.
            </p>

            <h2 className="text-3xl font-semibold mt-12 mb-4">Infrastructure</h2>
            <p>
              We operate primarily as a <strong className="text-white">full AWS shop</strong>, meaning our systems are deployed, 
              managed, and scaled using <strong className="text-white">Amazon Web Services</strong> — a trusted platform for secure, 
              high-performance cloud computing.
            </p>

            <p>
              Our in-house <strong className="text-white">cloud infrastructure engineers</strong> are experienced with 
              <strong className="text-white"> multi-cloud environments</strong>, enabling support across 
              <strong className="text-white"> Azure</strong>, <strong className="text-white">Google Cloud Platform (GCP)</strong>, 
              and <strong className="text-white">DigitalOcean</strong> depending on project needs. This flexibility ensures 
              clients in regulated industries or with unique infrastructure requirements are fully supported.
            </p>

            <ul className="list-disc pl-6 space-y-2">
              <li><strong className="text-white">Supabase:</strong> Secure authentication and real-time updates for rapid feature delivery.</li>
              <li><strong className="text-white">PostgreSQL:</strong> Our primary structured database — robust, scalable, and reliable.</li>
              <li><strong className="text-white">Vector Databases:</strong> Tools like <strong>Pinecone</strong>, <strong>Weaviate</strong>, and <strong>Qdrant</strong> enable semantic search and contextual understanding in AI systems.</li>
              <li><strong className="text-white">API Key Provisioning:</strong> Dedicated, scoped keys per client project for secure access control.</li>
              <li><strong className="text-white">Internal Developer Tooling:</strong> Custom scripts, CLI tools, and integrations with <strong>GitHub</strong> to maintain operational efficiency.</li>
            </ul>

            <h2 className="text-3xl font-semibold mt-12 mb-4">Programming & Integrations</h2>
            <p>
              Our development process is shaped by tools that enable <strong className="text-white">rapid iteration</strong>, 
              <strong className="text-white"> intelligent automation</strong>, and <strong className="text-white">deep integration </strong> 
              with external systems.
            </p>

            <ul className="list-disc pl-6 space-y-2">
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
            <p>
              We take a <strong className="text-white">model-agnostic</strong> approach to AI — benchmarking across providers 
              to select the best-performing model based on your goals. Whether optimizing for 
              <strong className="text-white"> speed</strong>, <strong className="text-white"> precision</strong>, 
              <strong className="text-white"> cost-efficiency</strong>, or <strong className="text-white">multilingual output</strong>, 
              we tailor each deployment for maximum impact.
            </p>

            <ul className="list-disc pl-6 space-y-2">
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
};
  
export default TechStackContent;