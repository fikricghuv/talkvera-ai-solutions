import RAGDatabaseAgentFlowchart from './flowchart/RAGDatabaseAgentFlowchart';

const DatabaseQueryAgentContent = () => {
    return (
        <div className="space-y-8">
            <h1 className="text-4xl font-bold mb-6">
                Database Personal Analysis | Intelligent Enterprise Data Access System
            </h1>

            {/* --- 1. Project Overview --- */}
            <div>
                <h2 className="text-2xl font-semibold mb-3">Project Overview</h2>
                <p className="leading-relaxed">
                    The <strong>RAG Database Agent</strong> combines <strong>Retrieval-Augmented Generation (RAG)</strong> with <strong>SQL database querying</strong> to provide intelligent, natural language access to enterprise data. Built on <strong>n8n automation platform</strong>, this system enables users to ask questions in plain English and receive accurate answers from both <strong>structured database tables</strong> and <strong>unstructured document repositories</strong>.
                </p>
                <p className="leading-relaxed mt-3">
                    The agent intelligently determines whether to query the <strong>pgvector-powered vector store</strong> for general information or execute <strong>SQL queries</strong> for tabular data analysis. It automatically discovers database schemas, validates inputs, constructs optimized JOINs, and maintains conversation context—delivering enterprise-grade data access without requiring technical expertise.
                </p>
            </div>

            <RAGDatabaseAgentFlowchart />

            {/* --- 2. Phase 1: Natural Language Input & Webhook Interface --- */}
            <div className="mt-6">
                <h2 className="text-2xl font-semibold mb-3">Phase 1: Natural Language Input & Webhook Interface</h2>

                <h3 className="text-xl font-semibold mt-4">Trigger</h3>
                <p className="leading-relaxed mt-2">
                    Activated when a user submits a <strong>natural language question</strong> via <strong>POST request</strong> to the <code>/rag-database-agent</code> webhook endpoint.
                </p>

                <h3 className="text-xl font-semibold mt-4">Key Capabilities</h3>
                <ul className="list-disc space-y-2 mt-2 leading-relaxed pl-6">
                    <li>
                        <span className="font-medium text-white">Webhook Entry Point:</span> Receives <strong>HTTP POST requests</strong> with JSON payloads containing user questions and session IDs, supports <strong>CORS (*)</strong> for cross-origin access, and accepts <strong>raw body data</strong> for flexible integration.
                    </li>
                    <li>
                        <span className="font-medium text-white">Session Management:</span> Captures <strong>unique session identifiers</strong> from <code>body.id</code> field, enables <strong>isolated conversation contexts</strong> for multiple concurrent users, and ensures query history separation across sessions.
                    </li>
                </ul>

                <p className="leading-relaxed mt-3">
                    This phase establishes a <strong>RESTful interface</strong> that allows applications, dashboards, or chat platforms to query enterprise data using natural language.
                </p>
            </div>

            {/* --- 3. Phase 2: Hybrid Intelligence - Vector Store & SQL Query Engine --- */}
            <div className="mt-6">
                <h2 className="text-2xl font-semibold mb-3">Phase 2: Hybrid Intelligence - Vector Store & SQL Query Engine</h2>

                <h3 className="text-xl font-semibold mt-4">Trigger</h3>
                <p className="leading-relaxed mt-2">
                    Automatically runs after the webhook receives and validates the incoming question from <code>$json.body.question</code>.
                </p>

                <h3 className="text-xl font-semibold mt-4">Key Capabilities</h3>
                <ul className="list-disc space-y-2 mt-2 leading-relaxed pl-6">
                    <li>
                        <span className="font-medium text-white">Advanced Language Model:</span> Powered by <strong>OpenAI GPT-5-mini</strong> via OpenRouter with temperature set to 1 for balanced creativity and accuracy in query interpretation.
                    </li>
                    <li>
                        <span className="font-medium text-white">Dual Data Source Strategy:</span>
                        <ul className="list-circle space-y-1 mt-1 pl-6">
                            <li><strong>Vector Store (RAG):</strong> Uses <strong>pgvector</strong> with <strong>OpenAI embeddings</strong> and <strong>Cohere reranking</strong> to retrieve relevant context from the <code>document_talkvera</code> table for general information, definitions, and unstructured content queries.</li>
                            <li><strong>SQL Database:</strong> Executes precise SQL queries against PostgreSQL for tabular data operations like calculations, aggregations, and transaction analysis.</li>
                        </ul>
                    </li>
                    <li>
                        <span className="font-medium text-white">Intelligent Schema Discovery:</span> The <strong>"Get table, schemas, columns, and foreign keys"</strong> tool automatically retrieves database structure including table names, column types (varchar, int, etc.), and foreign key relationships—enabling the agent to construct accurate JOIN statements.
                    </li>
                    <li>
                        <span className="font-medium text-white">Smart Data Validation:</span> Before applying WHERE clauses, the agent runs <strong>SELECT DISTINCT queries (LIMIT 100)</strong> on relevant fields to verify that user-provided values exist in the database. ID columns are automatically excluded from validation checks.
                    </li>
                    <li>
                        <span className="font-medium text-white">Optimized Query Construction:</span> Leverages foreign key information to build single, efficient SQL queries with proper JOINs—minimizing database calls while ensuring accurate data retrieval.
                    </li>
                    <li>
                        <span className="font-medium text-white">PostgreSQL Chat Memory:</span> Stores session-specific conversation history in PostgreSQL, enabling context-aware follow-up questions and natural multi-turn dialogues.
                    </li>
                </ul>
            </div>

            {/* --- 4. Phase 3: Schema Discovery Workflow --- */}
            <div className="mt-6">
                <h2 className="text-2xl font-semibold mb-3">Phase 3: Schema Discovery Workflow</h2>

                <h3 className="text-xl font-semibold mt-4">Trigger</h3>
                <p className="leading-relaxed mt-2">
                    Executed when the AI agent calls the <strong>"Get table, schemas, columns, and foreign keys"</strong> tool via workflow invocation.
                </p>

                <h3 className="text-xl font-semibold mt-4">Key Capabilities</h3>
                <ul className="list-disc space-y-2 mt-2 leading-relaxed pl-6">
                    <li>
                        <span className="font-medium text-white">Dynamic Schema Query:</span> Executes a specialized SQL query against <code>information_schema.columns</code> to retrieve all public schema tables with their columns and data types in a formatted structure: <code>table_name : column1(type), column2(type), ...</code>
                    </li>
                    <li>
                        <span className="font-medium text-white">Type Normalization:</span> Automatically converts PostgreSQL data types to simplified formats (e.g., <code>character varying</code> → <code>varchar</code>, <code>integer</code> → <code>int</code>) for better AI comprehension.
                    </li>
                    <li>
                        <span className="font-medium text-white">Ordered Results:</span> Returns schema information sorted by table name and column order for consistent, predictable outputs.
                    </li>
                </ul>

                <p className="leading-relaxed mt-3">
                    This sub-workflow provides the AI agent with complete database structure knowledge, enabling intelligent query construction without hardcoded schemas.
                </p>
            </div>

            {/* --- 5. Phase 4: Response Processing & Delivery --- */}
            <div className="mt-6">
                <h2 className="text-2xl font-semibold mb-3">Phase 4: Response Processing & Delivery</h2>

                <h3 className="text-xl font-semibold mt-4">Trigger</h3>
                <p className="leading-relaxed mt-2">
                    Runs after the AI agent completes query execution and answer generation.
                </p>

                <h3 className="text-xl font-semibold mt-4">Key Capabilities</h3>
                <ul className="list-disc space-y-2 mt-2 leading-relaxed pl-6">
                    <li>
                        <span className="font-medium text-white">Response Formatting:</span> Structures answers in clean JSON format with the AI-generated response in the <code>answer</code> field, derived from vector store retrievals or SQL query results.
                    </li>
                    <li>
                        <span className="font-medium text-white">Webhook Response:</span> Returns the formatted JSON payload to the requesting application via the <strong>Respond to Webhook</strong> node.
                    </li>
                    <li>
                        <span className="font-medium text-white">Graceful Error Handling:</span> Provides honest "I don't know" responses when data is unavailable, handles database connectivity issues transparently, and maintains professional communication even during failures.
                    </li>
                </ul>

                <p className="leading-relaxed mt-3">
                    This completes the request-response cycle with predictable, well-formed outputs for downstream integration.
                </p>
            </div>

            {/* --- Return on Investment --- */}
            <div>
                <h2 className="text-2xl font-semibold mb-3">Return on Investment</h2>
                <p className="leading-relaxed">
                    Implementing this <strong>RAG Database Agent</strong> delivers measurable enterprise value:
                </p>
                <ul className="list-disc space-y-2 mt-2 leading-relaxed pl-6">
                    <li><span className="font-medium text-white">Democratizes Data Access:</span> Non-technical users query complex databases and document repositories using natural language—no SQL or search expertise required.</li>
                    <li><span className="font-medium text-white">Hybrid Intelligence:</span> Automatically routes questions to the optimal data source (vector search for documents, SQL for structured data)—maximizing answer accuracy.</li>
                    <li><span className="font-medium text-white">Accelerates Decision-Making:</span> Instant answers to business questions reduce dependency on data analysts and technical teams.</li>
                    <li><span className="font-medium text-white">Ensures Query Accuracy:</span> Schema-aware query construction, foreign key validation, and data existence checks minimize errors.</li>
                    <li><span className="font-medium text-white">Contextual Conversations:</span> Session-based memory enables natural follow-up questions and maintains conversation flow.</li>
                    <li><span className="font-medium text-white">Enterprise Scalability:</span> Session isolation supports unlimited concurrent users without context mixing.</li>
                    <li><span className="font-medium text-white">Seamless Integration:</span> RESTful API interface connects with existing tools, chat platforms, and business applications.</li>
                    <li><span className="font-medium text-white">Reduces Technical Debt:</span> Dramatically lowers ad-hoc data request backlog for technical teams.</li>
                    <li><span className="font-medium text-white">Advanced Retrieval:</span> Cohere reranking and semantic search provide superior document retrieval compared to traditional keyword search.</li>
                </ul>
                <p className="leading-relaxed mt-3">
                    The modular n8n architecture enables future enhancements such as additional vector stores, multi-database connections, advanced validation rules, or integration with business intelligence platforms—ensuring long-term adaptability to evolving enterprise needs.
                </p>
            </div>
        </div>
    );
};

export default DatabaseQueryAgentContent;