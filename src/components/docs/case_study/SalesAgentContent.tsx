const SalesAgentContent = () => {
    return (
        <div className="space-y-8">
            <h1 className="text-4xl font-bold mb-6">
                Sales Agent | AI-Powered CRM & Quote Management System
            </h1>

            {/* --- 1. Project Overview --- */}
            <div>
                <h2 className="text-2xl font-semibold mb-3">Project Overview</h2>
                <p className="leading-relaxed">
                    The <strong>Sales Agent</strong> is an intelligent customer interaction system that automates the entire sales workflow—from initial inquiry to quote generation and CRM data management. Built on <strong>n8n automation platform</strong>, this AI-powered assistant handles customer conversations, captures essential information, generates accurate quotes, and ensures seamless handoff to the orders team through automated notifications.
                </p>
                <p className="leading-relaxed mt-3">
                    The agent eliminates manual data entry by automatically saving customer details (name, email, phone, notes) to PostgreSQL CRM, maintains conversation context for personalized interactions, and notifies the orders team via Telegram when quotes are generated or follow-ups are needed. It validates information before storage, tracks every interaction through CRM notes, and provides professional, friendly customer service 24/7.
                </p>
            </div>

            {/* --- 2. Phase 1: Natural Language Input & Secure Webhook Interface --- */}
            <div className="mt-6">
                <h2 className="text-2xl font-semibold mb-3">Phase 1: Natural Language Input & Secure Webhook Interface</h2>
                
                <h3 className="text-xl font-semibold mt-4">Trigger</h3>
                <p className="leading-relaxed mt-2">
                    Activated when a customer sends an inquiry via <strong>POST request</strong> to the <code>/sales-agent</code> webhook endpoint with <strong>header authentication</strong>.
                </p>

                <h3 className="text-xl font-semibold mt-4">Key Capabilities</h3>
                <ul className="list-disc space-y-2 mt-2 leading-relaxed pl-6">
                    <li>
                        <span className="font-medium text-white">Secure API Gateway:</span> Receives <strong>HTTP POST requests</strong> with <strong>header-based authentication</strong> to protect sensitive customer and business data from unauthorized access.
                    </li>
                    <li>
                        <span className="font-medium text-white">Conversational Interface:</span> Accepts natural language messages like "I need a quote for 100 units of Product X" or "What's your pricing for enterprise plans?"—no structured forms required.
                    </li>
                    <li>
                        <span className="font-medium text-white">Session Management:</span> Maintains unique conversation threads using <code>session_id</code> to enable context-aware multi-turn dialogues where customers can refine requirements naturally.
                    </li>
                    <li>
                        <span className="font-medium text-white">Raw Body Processing:</span> Handles flexible JSON payload formats for seamless integration with chat platforms, web forms, or custom applications.
                    </li>
                </ul>

                <p className="leading-relaxed mt-3">
                    This phase establishes a <strong>secure, conversational API</strong> that integrates with any frontend interface—web chat widgets, mobile apps, or messaging platforms—making customer engagement as simple as sending a text message.
                </p>
            </div>

            {/* --- 3. Phase 2: Intelligent Customer Information Management --- */}
            <div className="mt-6">
                <h2 className="text-2xl font-semibold mb-3">Phase 2: Intelligent Customer Information Management</h2>

                <h3 className="text-xl font-semibold mt-4">Trigger</h3>
                <p className="leading-relaxed mt-2">
                    Automatically engages when the AI agent needs to verify customer identity or collect contact information for CRM storage.
                </p>

                <h3 className="text-xl font-semibold mt-4">Key Capabilities</h3>
                <ul className="list-disc space-y-2 mt-2 leading-relaxed pl-6">
                    <li>
                        <span className="font-medium text-white">Advanced Language Understanding:</span> Powered by <strong>OpenAI GPT-4o-mini</strong> via OpenRouter with temperature 0.7 for balanced, professional responses that understand customer intent even from casual phrasing.
                    </li>
                    <li>
                        <span className="font-medium text-white">Smart Customer Recognition:</span> Always checks CRM database first using <strong>Get Customer from CRM</strong> tool to identify returning customers by email—enabling personalized greetings and reference to past interactions.
                    </li>
                    <li>
                        <span className="font-medium text-white">Automated Data Collection:</span> For new customers, naturally collects required information during conversation:
                        <ul className="list-circle space-y-1 mt-1 pl-6">
                            <li><strong>Name:</strong> Full customer name for personalization</li>
                            <li><strong>Email:</strong> Primary contact with format validation (@ symbol required)</li>
                            <li><strong>Phone:</strong> Optional contact number for urgent communications</li>
                            <li><strong>Notes:</strong> Contextual information from initial inquiry</li>
                        </ul>
                    </li>
                    <li>
                        <span className="font-medium text-white">Save Customer to CRM:</span> Inserts new customer records into PostgreSQL <code>customers</code> table with validated data, automatic timestamp, and initial notes—creating persistent profiles for future interactions.
                    </li>
                    <li>
                        <span className="font-medium text-white">Data Validation Protocol:</span> Ensures email addresses contain proper formatting before database insertion, preventing invalid data entry and maintaining CRM data quality.
                    </li>
                    <li>
                        <span className="font-medium text-white">PostgreSQL Conversation Memory:</span> Stores complete interaction histories tied to session IDs, enabling the agent to reference previous messages, understand context, and provide coherent multi-turn conversations.
                    </li>
                </ul>
            </div>

            {/* --- 4. Phase 3: Automated Quote Generation & CRM Recording --- */}
            <div className="mt-6">
                <h2 className="text-2xl font-semibold mb-3">Phase 3: Automated Quote Generation & CRM Recording</h2>

                <h3 className="text-xl font-semibold mt-4">Trigger</h3>
                <p className="leading-relaxed mt-2">
                    Executed when customer requirements are clear and the agent has sufficient information to generate an accurate quote.
                </p>

                <h3 className="text-xl font-semibold mt-4">Key Capabilities</h3>
                <ul className="list-disc space-y-2 mt-2 leading-relaxed pl-6">
                    <li>
                        <span className="font-medium text-white">Intelligent Quote Construction:</span> Agent analyzes customer requirements (product/service, quantity, specifications) and asks clarifying questions to ensure accuracy before generating quotes.
                    </li>
                    <li>
                        <span className="font-medium text-white">Save Quote to CRM:</span> Stores comprehensive quote information in PostgreSQL <code>quotes</code> table:
                        <ul className="list-circle space-y-1 mt-1 pl-6">
                            <li><strong>Customer Email:</strong> Links quote to customer profile</li>
                            <li><strong>Items:</strong> Detailed list of products/services requested</li>
                            <li><strong>Total Amount:</strong> Calculated pricing with proper decimal handling</li>
                            <li><strong>Valid Until:</strong> Quote expiration date (typically 30 days)</li>
                            <li><strong>Quote Details:</strong> Terms, conditions, and special requirements</li>
                        </ul>
                    </li>
                    <li>
                        <span className="font-medium text-white">Add CRM Note:</span> Records every significant interaction in <code>crm_notes</code> table with:
                        <ul className="list-circle space-y-1 mt-1 pl-6">
                            <li><strong>Customer Email:</strong> Links note to customer profile</li>
                            <li><strong>Note Content:</strong> Detailed summary of inquiry, quote, or feedback</li>
                            <li><strong>Interaction Type:</strong> Categorization (quote_generated, inquiry, follow_up, etc.)</li>
                            <li><strong>Timestamp:</strong> Automatic creation time for audit trail</li>
                        </ul>
                    </li>
                    <li>
                        <span className="font-medium text-white">Quote Confirmation Protocol:</span> Always confirms understanding of customer requirements before generating quotes, setting clear expectations on pricing, delivery times, and next steps.
                    </li>
                    <li>
                        <span className="font-medium text-white">Complete Audit Trail:</span> Every quote generation, customer interaction, and data modification is permanently recorded in CRM for compliance, quality assurance, and future reference.
                    </li>
                </ul>

                <p className="leading-relaxed mt-3">
                    This phase ensures zero data loss through automated CRM recording while maintaining the speed and convenience of conversational interactions—eliminating manual data entry errors and administrative overhead.
                </p>
            </div>

            {/* --- 5. Phase 4: Order Team Notification & Response Delivery --- */}
            <div className="mt-6">
                <h2 className="text-2xl font-semibold mb-3">Phase 4: Order Team Notification & Response Delivery</h2>

                <h3 className="text-xl font-semibold mt-4">Trigger</h3>
                <p className="leading-relaxed mt-2">
                    Runs after quote generation or when customer requires escalation to the orders team for specialized assistance.
                </p>

                <h3 className="text-xl font-semibold mt-4">Key Capabilities</h3>
                <ul className="list-disc space-y-2 mt-2 leading-relaxed pl-6">
                    <li>
                        <span className="font-medium text-white">Notify Orders Team via Telegram:</span> Sends real-time alerts to the orders team Telegram channel with:
                        <ul className="list-circle space-y-1 mt-1 pl-6">
                            <li><strong>Customer Details:</strong> Name, email, phone for immediate context</li>
                            <li><strong>Quote Summary:</strong> Items requested, pricing, and special requirements</li>
                            <li><strong>Urgency Flags:</strong> Priority indicators for time-sensitive requests</li>
                            <li><strong>Next Steps:</strong> Clear action items for team follow-up</li>
                        </ul>
                    </li>
                    <li>
                        <span className="font-medium text-white">Seamless Team Handoff:</span> Ensures orders team receives complete context without needing to access CRM database—enabling immediate response to customer needs.
                    </li>
                    <li>
                        <span className="font-medium text-white">Customer Response Delivery:</span> Returns professional, structured JSON responses via <strong>Respond to Webhook</strong> node containing:
                        <ul className="list-circle space-y-1 mt-1 pl-6">
                            <li><strong>Response:</strong> AI-generated message with quote summary or inquiry answer</li>
                            <li><strong>Session ID:</strong> Continuation token for follow-up conversations</li>
                        </ul>
                    </li>
                    <li>
                        <span className="font-medium text-white">Clear Communication:</span> Provides natural language responses that confirm actions, explain next steps, and set expectations—maintaining professional yet friendly tone throughout.
                    </li>
                    <li>
                        <span className="font-medium text-white">Error Handling:</span> Gracefully manages missing information, validation failures, or system issues with clear explanations and actionable guidance for resolution.
                    </li>
                </ul>

                <p className="leading-relaxed mt-3">
                    This completes the sales workflow loop—from customer inquiry to quote generation to team notification—ensuring no opportunity falls through the cracks while maintaining excellent customer experience.
                </p>
            </div>

            {/* --- Return on Investment --- */}
            <div>
                <h2 className="text-2xl font-semibold mb-3">Return on Investment</h2>
                <p className="leading-relaxed">
                    Implementing this <strong>Sales Agent</strong> delivers measurable business value:
                </p>
                <ul className="list-disc space-y-2 mt-2 leading-relaxed pl-6">
                    <li><span className="font-medium text-white">Eliminates Manual Data Entry:</span> Automatically captures customer information (name, email, phone, notes) and saves to CRM—reducing data entry time by 90% and eliminating transcription errors.</li>
                    <li><span className="font-medium text-white">Automated Quote Generation:</span> Creates accurate, professional quotes based on natural language requirements—cutting quote turnaround time from hours to seconds.</li>
                    <li><span className="font-medium text-white">24/7 Customer Engagement:</span> Handles inquiries, collects information, and generates quotes around the clock without human intervention—capturing opportunities outside business hours.</li>
                    <li><span className="font-medium text-white">Reduces Response Time:</span> Instant quote generation and information capture accelerate sales cycles—improving customer satisfaction and conversion rates.</li>
                    <li><span className="font-medium text-white">Scales Without Headcount:</span> Handles unlimited concurrent customer conversations without additional staff—enabling business growth without proportional hiring costs.</li>
                    <li><span className="font-medium text-white">Consistent Quality:</span> Validates all data before storage and follows standardized quote format—ensuring professional communication and accurate CRM records.</li>
                    <li><span className="font-medium text-white">Customer Recognition:</span> Remembers returning customers and references past interactions—creating personalized experiences that build loyalty.</li>
                </ul>
                <p className="leading-relaxed mt-3">
                    The modular n8n architecture enables future enhancements such as email quote delivery, CRM integration with existing systems, product catalog lookups, pricing rule engines, or payment link generation—ensuring long-term adaptability as business needs evolve without architectural rewrites.
                </p>
            </div>
        </div>
    );
};

export default SalesAgentContent;