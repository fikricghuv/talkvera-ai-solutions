const ResourcesContent = () => {
    return (
        <div className="space-y-6 text-left">
            <h1 className="text-4xl font-bold mb-2">Additional Resources</h1>
            <p className="mb-2 mt-1">
              Technical references and troubleshooting insights to support engineering teams, partners, and technical buyers working with Talkvera systems.
            </p>

            <section>
              <h2 className="text-2xl font-semibold mb-4">Technical FAQ & Troubleshooting Guide</h2>
              <p className="mb-4">
                This section addresses common technical, implementation, and product-related questions. Topics include system maintainability, LLM behavior, hosting options, multilingual support, and RAG implementations.
              </p>
              <ul className="list-disc space-y-2 mt-2 leading-relaxed pl-6">
                <li><strong className="text-white">Maintainability:</strong> Modular architecture, versioned APIs, and documentation-first design.</li>
                <li><strong className="text-white">Hallucination handling:</strong> RAGAS metrics, human-reviewed data audits, and retraining when needed.</li>
                <li><strong className="text-white">Hosting:</strong> Supports client-hosted deployments (VPC/private cloud) with secure IAM onboarding.</li>
                <li><strong className="text-white">Multilingual systems:</strong> Built-in localization and model adaptation for global deployments.</li>
                <li><strong className="text-white">RAG support:</strong> Grounded retrieval with semantic filters and QA scoring (precision, recall, groundedness).</li>
              </ul>
            </section>

            {/* Infrastructure & DevOps */}
            <section>
              <h2 className="text-2xl font-semibold mb-4">Infrastructure & DevOps</h2>
              <p className="mb-4">
                We use modern infrastructure practices to ensure reliability and security in every deployment. CI/CD, environment provisioning, and secure configuration are built into our DevOps workflows.
              </p>
              <ul className="list-disc space-y-2 mt-2 leading-relaxed pl-6">
                <li><strong className="text-white">Deployment:</strong> GitHub Actions or n8n-based pipelines with isolated staging and production environments.</li>
                <li><strong className="text-white">Provisioning:</strong> Managed via Docker, Terraform, Railway, or Kubernetes.</li>
                <li><strong className="text-white">Security:</strong> Encryption, secrets management, and role-based access control (least privilege principle).</li>
              </ul>
            </section>

            {/* Troubleshooting & Edge Cases */}
            <section>
              <h2 className="text-2xl font-semibold mb-4">Troubleshooting & Edge Cases</h2>
              <p className="mb-4">
                In cases of inconsistent responses or latency issues, we provide structured diagnostics and fallback mechanisms to maintain stability.
              </p>
              <ul className="list-disc space-y-2 mt-2 leading-relaxed pl-6">
                <li><strong className="text-white">Inconsistent responses:</strong> Provide logs for automated retries and fallback model analysis.</li>
                <li><strong className="text-white">Latency profiling:</strong> Async tracing, caching, and prompt optimization to improve performance.</li>
              </ul>
            </section>

            {/* Glossary */}
            <section>
              <h2 className="text-2xl font-semibold mb-4">Glossary: Key Terminology</h2>
              <p className="mb-4">
                Quick reference for foundational AI and system design terminology.
              </p>
              <ul className="list-disc space-y-2 mt-2 leading-relaxed pl-6">
                <li><strong className="text-white">LLM (Large Language Model):</strong> Neural network trained to generate human-like text.</li>
                <li><strong className="text-white">RAG (Retrieval-Augmented Generation):</strong> Combines LLMs with vector databases for factual grounding.</li>
                <li><strong className="text-white">Vector Database:</strong> Engine that stores and retrieves text embeddings for semantic search.</li>
                <li><strong className="text-white">Embedding:</strong> Numeric vector capturing the meaning of text or data.</li>
                <li><strong className="text-white">Prompt Engineering:</strong> Crafting prompts to shape model behavior.</li>
                <li><strong className="text-white">Groundedness:</strong> Alignment of AI outputs with source documents or trusted context.</li>
                <li><strong className="text-white">Token Limit:</strong> Maximum text length an AI model can process per request.</li>
                <li><strong className="text-white">Agent:</strong> AI system that performs tasks autonomously or semi-autonomously.</li>
                <li><strong className="text-white">Human-in-the-Loop (HITL):</strong> Workflow involving human validation or override of AI outputs.</li>
                <li><strong className="text-white">CI/CD:</strong> Continuous integration and deployment pipelines ensuring reliable updates.</li>
              </ul>
            </section>
          </div>
    );
};

export default ResourcesContent;