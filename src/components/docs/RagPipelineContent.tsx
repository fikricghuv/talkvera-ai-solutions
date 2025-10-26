const RagPipelineContent = () => {
    return (
        <div className="space-y-6">
            <h1 className="text-4xl font-bold mb-4">RAG Pipeline</h1>
            <p className="text-xl">
              Retrieval-Augmented Generation system for accurate, knowledge-grounded AI responses.
            </p>

            <div className="mt-8 p-6 bg-gradient-to-br from-blue-900/20 to-gray-900/50 rounded-xl border border-blue-500/30">
              <h3 className="text-2xl font-semibold mb-4">What is RAG?</h3>
              <p className="leading-relaxed mb-4">
                Retrieval-Augmented Generation (RAG) is an advanced AI architecture that combines the power of large language models with your organization's proprietary knowledge base. Instead of relying solely on pre-trained knowledge, RAG dynamically retrieves relevant information from your documents, databases, and systems to generate accurate, contextual, and up-to-date responses.
              </p>
              <p className="leading-relaxed">
                This approach eliminates hallucinations, ensures factual accuracy, and keeps responses grounded in your actual business information, policies, and data.
              </p>
            </div>

            <div className="space-y-8 mt-8">
              <div>
                <h3 className="text-2xl font-semibold mb-6">Architecture Components</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="p-6 bg-gradient-to-br from-gray-800/50 to-gray-900/50 rounded-xl border border-gray-700">
                    <h4 className="text-lg font-semibold mb-3 text-blue-400">1. Document Ingestion & Processing</h4>
                    <ul className="space-y-2 text-sm">
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
                    <ul className="space-y-2 text-sm">
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
                    <ul className="space-y-2 text-sm">
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
                    <ul className="space-y-2 text-sm">
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
                    <ul className="space-y-2 text-sm">
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
                    <ul className="space-y-2 text-sm">
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
                  <div className="space-y-4">
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
                    <p className="text-sm mb-3">
                      <strong className="text-white">Client:</strong> Multinational consulting firm with 20+ years of project documentation
                    </p>
                    <p className="text-sm mb-3">
                      <strong className="text-white">Challenge:</strong> 50,000+ documents across SharePoint, Confluence, and file servers. Consultants spending hours searching for relevant past work and best practices.
                    </p>
                    <p className="text-sm mb-3">
                      <strong className="text-white">Solution:</strong> RAG Pipeline indexing all historical documents with natural language search interface
                    </p>
                    <p className="text-sm mb-3">
                      <strong className="text-white">Implementation Details:</strong>
                    </p>
                    <ul className="space-y-1 text-sm ml-4 mb-3">
                      <li>• Automated daily ingestion from all document sources</li>
                      <li>• Custom metadata extraction for project type, client industry, and methodology</li>
                      <li>• Permission-aware retrieval matching Active Directory security groups</li>
                      <li>• Conversational interface allowing follow-up questions</li>
                      <li>• Citation of source documents with direct links for verification</li>
                    </ul>
                    <p className="text-sm mb-3">
                      <strong className="text-white">Results:</strong>
                    </p>
                    <ul className="space-y-1 text-sm ml-4">
                      <li>• Research time reduced from 4+ hours to under 15 minutes</li>
                      <li>• 93% of queries successfully answered with relevant information</li>
                      <li>• Consultants able to leverage institutional knowledge effectively</li>
                      <li>• Improved proposal quality with evidence-based best practices</li>
                      <li>• Estimated $3.5M annual value from time savings</li>
                    </ul>
                  </div>

                  <div className="p-6 bg-gradient-to-br from-gray-800/50 to-gray-900/50 rounded-xl border border-gray-700">
                    <h4 className="text-lg font-semibold mb-3">Technical Support Documentation</h4>
                    <p className="text-sm mb-3">
                      <strong className="text-white">Client:</strong> SaaS company providing DevOps platform to 10,000+ customers
                    </p>
                    <p className="text-sm mb-3">
                      <strong className="text-white">Challenge:</strong> Complex product with frequent updates. Support team overwhelmed with technical questions. Documentation scattered across multiple systems.
                    </p>
                    <p className="text-sm mb-3">
                      <strong className="text-white">Solution:</strong> RAG Pipeline integrating product docs, API references, troubleshooting guides, and community discussions
                    </p>
                    <p className="text-sm mb-3">
                      <strong className="text-white">Implementation Details:</strong>
                    </p>
                    <ul className="space-y-1 text-sm ml-4 mb-3">
                      <li>• Real-time ingestion as documentation is updated</li>
                      <li>• Code-aware chunking preserving syntax and structure</li>
                      <li>• Version-specific retrieval matching customer's product version</li>
                      <li>• Integration with ticket system for context-aware suggestions</li>
                      <li>• Continuous learning from successful ticket resolutions</li>
                    </ul>
                    <p className="text-sm mb-3">
                      <strong className="text-white">Results:</strong>
                    </p>
                    <ul className="space-y-1 text-sm ml-4">
                      <li>• 70% of technical questions resolved without human intervention</li>
                      <li>• First-time resolution rate improved from 65% to 89%</li>
                      <li>• Support ticket volume reduced by 45%</li>
                      <li>• Customer satisfaction scores increased from 4.1 to 4.8</li>
                      <li>• Support team able to handle 3x volume with same headcount</li>
                    </ul>
                  </div>

                  <div className="p-6 bg-gradient-to-br from-gray-800/50 to-gray-900/50 rounded-xl border border-gray-700">
                    <h4 className="text-lg font-semibold mb-3">Legal Contract Analysis</h4>
                    <p className="text-sm mb-3">
                      <strong className="text-white">Client:</strong> Corporate law department managing 10,000+ contracts
                    </p>
                    <p className="text-sm mb-3">
                      <strong className="text-white">Challenge:</strong> Need to quickly find contract clauses, analyze obligations, and identify risks across thousands of documents. Manual review taking days per analysis.
                    </p>
                    <p className="text-sm mb-3">
                      <strong className="text-white">Solution:</strong> Specialized RAG Pipeline for legal document understanding and analysis
                    </p>
                    <p className="text-sm mb-3">
                      <strong className="text-white">Implementation Details:</strong>
                    </p>
                    <ul className="space-y-1 text-sm ml-4 mb-3">
                      <li>• Legal-specific embeddings trained on contract language</li>
                      <li>• Clause-level chunking with hierarchical document structure</li>
                      <li>• Multi-document comparison and analysis capabilities</li>
                      <li>• Risk scoring based on precedent and company policies</li>
                      <li>• Audit trail for all analyses with explainable reasoning</li>
                    </ul>
                    <p className="text-sm mb-3">
                      <strong className="text-white">Results:</strong>
                    </p>
                    <ul className="space-y-1 text-sm ml-4">
                      <li>• Contract review time reduced from 3 days to 2 hours</li>
                      <li>• 97% accuracy in clause extraction and categorization</li>
                      <li>• Early identification of non-standard terms and risks</li>
                      <li>• Attorneys freed to focus on negotiation and strategy</li>
                      <li>• Estimated annual savings of $2.1M in legal costs</li>
                    </ul>
                  </div>

                  <div className="p-6 bg-gradient-to-br from-gray-800/50 to-gray-900/50 rounded-xl border border-gray-700">
                    <h4 className="text-lg font-semibold mb-3">Healthcare Clinical Decision Support</h4>
                    <p className="text-sm mb-3">
                      <strong className="text-white">Client:</strong> Hospital system with 500 physicians across 12 specialties
                    </p>
                    <p className="text-sm mb-3">
                      <strong className="text-white">Challenge:</strong> Physicians need quick access to latest clinical guidelines, research, and institutional protocols. Medical knowledge expanding faster than practitioners can keep up.
                    </p>
                    <p className="text-sm mb-3">
                      <strong className="text-white">Solution:</strong> HIPAA-compliant RAG Pipeline integrating medical literature, hospital protocols, and patient records
                    </p>
                    <p className="text-sm mb-3">
                      <strong className="text-white">Implementation Details:</strong>
                    </p>
                    <ul className="space-y-1 text-sm ml-4 mb-3">
                      <li>• Integration with PubMed, UpToDate, and internal guidelines</li>
                      <li>• Real-time updates as new research is published</li>
                      <li>• Patient-context-aware recommendations (allergies, history, meds)</li>
                      <li>• Evidence grading and source credibility scoring</li>
                      <li>• Full HIPAA compliance with comprehensive audit logging</li>
                    </ul>
                    <p className="text-sm mb-3">
                      <strong className="text-white">Results:</strong>
                    </p>
                    <ul className="space-y-1 text-sm ml-4">
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
                    <ul className="space-y-2 text-sm">
                      <li>• Top-K retrieval (configurable K value)</li>
                      <li>• Threshold-based filtering</li>
                      <li>• Maximum marginal relevance (MMR) for diversity</li>
                      <li>• Multi-query expansion</li>
                      <li>• Hybrid semantic + keyword search</li>
                    </ul>
                  </div>

                  <div className="p-6 bg-gradient-to-br from-gray-800/50 to-gray-900/50 rounded-xl border border-gray-700">
                    <h4 className="text-lg font-semibold mb-3 text-blue-400">Response Generation</h4>
                    <ul className="space-y-2 text-sm">
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
                  <div className="space-y-4">
                    <p><strong className="text-white">Step 1:</strong> Audit your knowledge sources and document repositories</p>
                    <p><strong className="text-white">Step 2:</strong> Define use cases, access controls, and success metrics</p>
                    <p><strong className="text-white">Step 3:</strong> Pilot with a subset of documents and small user group</p>
                    <p><strong className="text-white">Step 4:</strong> Iterate based on feedback, accuracy measurements, and usage patterns</p>
                    <p><strong className="text-white">Step 5:</strong> Scale to full document corpus with ongoing monitoring and optimization</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
    );
};

export default RagPipelineContent;