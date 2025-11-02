import AppointmentAgentFlowchart from './flowchart/AppointmentAgentFlowchart';

const AppointmentAgentContent = () => {
    return (
        <div className="space-y-8">
            <h1 className="text-4xl font-bold mb-6">
                Appointment Agent | AI-Powered Scheduling & User Management System
            </h1>

            {/* --- 1. Project Overview --- */}
            <div>
                <h2 className="text-2xl font-semibold mb-3">Project Overview</h2>
                <p className="leading-relaxed">
                    The <strong>Appointment Agent</strong> is an intelligent scheduling system that combines <strong>Google Calendar integration</strong> with <strong>PostgreSQL user management</strong> to deliver seamless appointment booking experiences. Built on <strong>n8n automation platform</strong>, this AI-powered assistant enables users to schedule, update, and manage appointments through natural language conversations—eliminating the friction of traditional booking systems.
                </p>
                <p className="leading-relaxed mt-3">
                    The agent handles complete appointment lifecycle management while maintaining user profiles, enforcing business rules like working hours (8 AM - 5 PM), and ensuring data consistency through intelligent validation workflows. It remembers conversation context, confirms actions before execution, and provides clear, professional communication throughout every interaction.
                </p>
            </div>

            <AppointmentAgentFlowchart />

            {/* --- 2. Phase 1: Natural Language Input & Secure Webhook Interface --- */}
            <div className="mt-6">
                <h2 className="text-2xl font-semibold mb-3">Phase 1: Natural Language Input & Secure Webhook Interface</h2>
                
                <h3 className="text-xl font-semibold mt-4">Trigger</h3>
                <p className="leading-relaxed mt-2">
                    Activated when a user submits a <strong>scheduling request</strong> via <strong>POST request</strong> to the <code>/appointment-agent</code> webhook endpoint with <strong>header authentication</strong>.
                </p>

                <h3 className="text-xl font-semibold mt-4">Key Capabilities</h3>
                <ul className="list-disc space-y-2 mt-2 leading-relaxed pl-6">
                    <li>
                        <span className="font-medium text-white">Secure API Gateway:</span> Receives <strong>HTTP POST requests</strong> with <strong>header-based authentication</strong> to ensure only authorized applications can access the scheduling system, protecting sensitive calendar and user data.
                    </li>
                    <li>
                        <span className="font-medium text-white">Conversational Interface:</span> Accepts natural language requests like "Book me for next Monday at 2 PM" or "Update my appointment to Wednesday morning"—no structured forms or complex interfaces required.
                    </li>
                    <li>
                        <span className="font-medium text-white">Session Continuity:</span> Maintains conversation context across multiple interactions, allowing users to refine requests, ask follow-up questions, and complete complex scheduling scenarios naturally.
                    </li>
                </ul>

                <p className="leading-relaxed mt-3">
                    This phase establishes a <strong>secure, conversational interface</strong> that integrates with chat platforms, mobile apps, or custom frontends—making appointment scheduling as simple as sending a message.
                </p>
            </div>

            {/* --- 3. Phase 2: Intelligent Appointment Management --- */}
            <div className="mt-6">
                <h2 className="text-2xl font-semibold mb-3">Phase 2: Intelligent Appointment Management</h2>

                <h3 className="text-xl font-semibold mt-4">Trigger</h3>
                <p className="leading-relaxed mt-2">
                    Automatically engages when the AI agent processes scheduling requests and determines the appropriate action based on user intent.
                </p>

                <h3 className="text-xl font-semibold mt-4">Key Capabilities</h3>
                <ul className="list-disc space-y-2 mt-2 leading-relaxed pl-6">
                    <li>
                        <span className="font-medium text-white">Advanced Language Understanding:</span> Powered by <strong>OpenRouter Chat Model</strong> to interpret natural language requests, extract scheduling details (date, time, purpose), and understand intent even from casual, conversational phrasing.
                    </li>
                    <li>
                        <span className="font-medium text-white">Google Calendar Integration:</span>
                        <ul className="list-circle space-y-1 mt-1 pl-6">
                            <li><strong>Create Appointment:</strong> Books new appointments with user-specified date, time, and description—automatically formatting data for Google Calendar API.</li>
                            <li><strong>Get Appointment:</strong> Retrieves existing appointments to display schedules, verify bookings, or prepare for updates/cancellations.</li>
                            <li><strong>Update Appointment:</strong> Modifies existing appointments after retrieving current details and confirming changes with the user.</li>
                            <li><strong>Cancel Appointment:</strong> Removes appointments from calendar after confirmation, with clear success messaging.</li>
                        </ul>
                    </li>
                    <li>
                        <span className="font-medium text-white">Business Rules Enforcement:</span> Validates all appointments against <strong>working hours (8 AM - 5 PM)</strong> constraint, rejecting out-of-hours requests with helpful alternative time suggestions.
                    </li>
                    <li>
                        <span className="font-medium text-white">Smart Workflow Logic:</span> Always retrieves current appointment data using <strong>Get Appointment</strong> before executing updates or cancellations—ensuring users see what they're changing and preventing accidental modifications.
                    </li>
                    <li>
                        <span className="font-medium text-white">Confirmation Protocol:</span> Summarizes appointment details and requests explicit user confirmation before creating, updating, or canceling bookings—building trust and preventing errors.
                    </li>
                    <li>
                        <span className="font-medium text-white">PostgreSQL Conversation Memory:</span> Stores session-specific conversation history, enabling the agent to reference previous messages, understand context, and support natural multi-turn dialogues.
                    </li>
                </ul>
            </div>

            {/* --- 4. Phase 3: User Profile Management --- */}
            <div className="mt-6">
                <h2 className="text-2xl font-semibold mb-3">Phase 3: User Profile Management</h2>

                <h3 className="text-xl font-semibold mt-4">Trigger</h3>
                <p className="leading-relaxed mt-2">
                    Executed when users need to create, update, or retrieve their profile information stored in the PostgreSQL database.
                </p>

                <h3 className="text-xl font-semibold mt-4">Key Capabilities</h3>
                <ul className="list-disc space-y-2 mt-2 leading-relaxed pl-6">
                    <li>
                        <span className="font-medium text-white">Save User Information:</span> Creates new user profiles with required fields (<strong>name</strong> and <strong>email</strong>), validating email format and ensuring data integrity before database insertion.
                    </li>
                    <li>
                        <span className="font-medium text-white">Get User Information:</span> Retrieves existing user profiles by email address, displaying current name and email data for verification or pre-update review.
                    </li>
                    <li>
                        <span className="font-medium text-white">Update User Information:</span> Modifies user profiles following a <strong>mandatory "get-then-update" workflow</strong>:
                        <ul className="list-circle list-disc space-y-1 mt-1 pl-6">
                            <li>Always calls <strong>Get User Information</strong> first to retrieve current data and user ID</li>
                            <li>Shows user their existing information for transparency</li>
                            <li>Uses retrieved ID as the matching parameter for the update operation</li>
                            <li>Updates only specified fields (name and/or email)</li>
                            <li>Confirms successful update with new information</li>
                        </ul>
                    </li>
                    <li>
                        <span className="font-medium text-white">Data Validation:</span> Ensures email addresses contain proper formatting (@ symbol), preventing invalid data entry and maintaining database quality.
                    </li>
                    <li>
                        <span className="font-medium text-white">PostgreSQL Integration:</span> Connects to <strong>pgvector account</strong> for reliable, scalable user data storage with ACID compliance guarantees.
                    </li>
                </ul>

                <p className="leading-relaxed mt-3">
                    This phase ensures every user has a persistent profile that links their appointments to their identity, enabling personalized experiences and data retrieval across sessions.
                </p>
            </div>

            {/* --- 5. Phase 4: Response Processing & Delivery --- */}
            <div className="mt-6">
                <h2 className="text-2xl font-semibold mb-3">Phase 4: Response Processing & Delivery</h2>

                <h3 className="text-xl font-semibold mt-4">Trigger</h3>
                <p className="leading-relaxed mt-2">
                    Runs after the AI agent completes appointment operations or user profile management tasks.
                </p>

                <h3 className="text-xl font-semibold mt-4">Key Capabilities</h3>
                <ul className="list-disc space-y-2 mt-2 leading-relaxed pl-6">
                    <li>
                        <span className="font-medium text-white">Clear Communication:</span> Provides natural language responses that confirm actions, explain outcomes, and guide users through next steps—maintaining professional yet friendly tone throughout.
                    </li>
                    <li>
                        <span className="font-medium text-white">Action Summaries:</span> After creating, updating, or canceling appointments, delivers concise summaries with date, time, and purpose details for user records.
                    </li>
                    <li>
                        <span className="font-medium text-white">Webhook Response:</span> Returns structured responses to the requesting application via the <strong>Respond to Webhook</strong> node, supporting seamless integration with frontend interfaces.
                    </li>
                    <li>
                        <span className="font-medium text-white">Graceful Error Handling:</span> When operations fail due to invalid times, missing data, or system issues, provides clear explanations and actionable suggestions for resolution.
                    </li>
                    <li>
                        <span className="font-medium text-white">Confirmation Requests:</span> Before executing destructive actions (cancellations, major updates), explicitly asks for user confirmation to prevent accidental data loss.
                    </li>
                </ul>

                <p className="leading-relaxed mt-3">
                    This completes the interaction cycle with clear, actionable responses that users can trust and understand—building confidence in the automated scheduling system.
                </p>
            </div>

            {/* --- Return on Investment --- */}
            <div>
                <h2 className="text-2xl font-semibold mb-3">Return on Investment</h2>
                <p className="leading-relaxed">
                    Implementing this <strong>Appointment Agent</strong> delivers measurable operational value:
                </p>
                <ul className="list-disc space-y-2 mt-2 leading-relaxed pl-6">
                    <li><span className="font-medium text-white">24/7 Automated Scheduling:</span> Users book, update, and manage appointments anytime through natural conversation—no human intervention or business hours limitations required.</li>
                    <li><span className="font-medium text-white">Eliminates Scheduling Friction:</span> Replaces complex calendar interfaces with simple text-based requests like "Schedule me for tomorrow at 3 PM"—reducing booking abandonment and user frustration.</li>
                    <li><span className="font-medium text-white">Prevents Data Errors:</span> Mandatory "get-before-update" workflows ensure users see current information before making changes—dramatically reducing accidental modifications or deletions.</li>
                    <li><span className="font-medium text-white">Seamless User Experience:</span> Conversation memory and context awareness create natural dialogues that feel personal and intelligent, increasing user satisfaction and engagement.</li>
                    <li><span className="font-medium text-white">Reduces Administrative Burden:</span> Eliminates manual appointment booking, rescheduling, and calendar management tasks—freeing staff to focus on higher-value activities.</li>
                    <li><span className="font-medium text-white">Integrated User Profiles:</span> Links appointments to persistent user identities with validated contact information—enabling follow-up communication and personalized experiences.</li>
                </ul>
                <p className="leading-relaxed mt-3">
                    The modular n8n architecture enables future enhancements such as email/SMS confirmation notifications, calendar conflict detection, recurring appointment support, multiple calendar management, or integration with CRM systems—ensuring long-term adaptability to evolving business needs without architectural rewrites.
                </p>
            </div>
        </div>
    );
};

export default AppointmentAgentContent;