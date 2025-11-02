import SendGreetingEmailFlowchart from './flowchart/SendGreetingsEmail';

const PersonalizeOutreachAutomationContent = () => {
    return (
        <div className="space-y-8">
            {/* TITLE: Matches the "Client | Project" format from the Barkbox example. */}
            <h1 className="text-4xl font-bold mb-6">
                AI-Powered Lead Capture & Personalized Outreach
            </h1>

            {/* OVERVIEW: Adjusted to focus on the "partnership" and "business problem." */}
            <div>
                <h2 className="text-2xl font-semibold mb-3">Project Overview</h2>
                <p className="leading-relaxed">
                    We designed and deployed an automated n8n workflow to handle new consultation requests from Talkvera's landing page. 
                    The objective was to instantly capture lead data, store it securely, and most importantly, 
                    generate a highly personalized, human-sounding introductory email using a specialized AI agent.
                </p>
                <p className="leading-relaxed mt-3">
                    This solution ensures an <strong>immediate and personalized first touchpoint</strong>, maximizing lead engagement 
                    and delivering exceptional efficiency for the sales team. The system leverages <strong>PostgreSQL</strong> for both lead storage 
                    and managing AI conversation memory for future interactions.
                </p>
            </div>

            {/* Your flowchart remains here for visualization */}
            <SendGreetingEmailFlowchart />

            {/* PHASE RESTRUCTURE:
              These phases now reflect the "business process" (Capture -> Personalize -> Deliver)
              to mirror the storytelling structure of the Barkbox example.
            */}

            <div>
                <h2 className="text-2xl font-semibold mb-3">Phase 1: Instant Lead Capture & Verification</h2>
                <p className="leading-relaxed">
                    <span className="font-medium text-white">Trigger:</span> Activates instantly when a prospect submits the form on the landing page.
                </p>
                <p className="leading-relaxed mt-3">
                    <span className="font-medium text-white">Key Capabilities:</span>
                </p>
                <ul className="list-disc space-y-2 mt-2 leading-relaxed pl-6">
                    <li><span className="font-medium text-white">Secure Webhook Ingestion:</span> Securely receives form data (name, email, project description) via an authenticated POST endpoint.</li>
                    <li><span className="font-medium text-white">Data Standardization:</span> Cleans and maps incoming data to structured internal variables, ensuring data consistency before storage.</li>
                    <li><span className="font-medium text-white">Reliable Lead Storage:</span> Instantly saves the standardized lead data into the <strong>customer_consultation</strong> table in <strong>PostgreSQL</strong> with an initial status of "New".</li>
                </ul>
            </div>

            <div>
                <h2 className="text-2xl font-semibold mb-3">Phase 2: AI-Powered Personalization</h2>
                <p className="leading-relaxed">
                    <span className="font-medium text-white">Trigger:</span> Runs automatically after the lead's data is successfully saved to the database.
                </p>
                <p className="leading-relaxed mt-3">
                    <span className="font-medium text-white">Functionality:</span>
                </p>
                <ul className="list-disc space-y-2 mt-2 leading-relaxed pl-6">
                    <li><span className="font-medium text-white">Context-Aware AI Agent:</span> Utilizes a custom "Greeting Email Agent" from Talkvera to analyze the prospect's inputs (especially `projectDesc`).</li>
                    <li><span className="font-medium text-white">Dynamic Content Generation:</span> The AI (using the <strong>OpenRouter Chat Model</strong>) drafts two formal and highly personalized opening paragraphs that directly reference the prospect's needs.</li>
                    <li><span className="font-medium text-white">Persistent AI Memory:</span> Connects to a <strong>PostgreSQL Chat Memory</strong> using the prospect's email as the session key. This allows the AI to recall context in future interactions.</li>
                </ul>
            </div>

            <div>
                <h2 className="text-2xl font-semibold mb-3">Phase 3: Automated Formatting & Delivery</h2>
                <p className="leading-relaxed">
                    <span className="font-medium text-white">Trigger:</span> Activates immediately after the AI finishes generating the personalized text.
                </p>
                <p className="leading-relaxed mt-3">
                    <span className="font-medium text-white">Functionality:</span>
                </p>
                <ul className="list-disc space-y-2 mt-2 leading-relaxed pl-6">
                    <li><span className="font-medium text-white">HTML Email Assembly:</span> A custom <strong>JavaScript</strong> node takes the raw text output from the AI and dynamically wraps it in a professional, pre-styled HTML email template.</li>
                    <li><span className="font-medium text-white">Automatic Email Dispatch:</span> Sends the fully formatted HTML email to the prospect using <strong>Gmail</strong>, with the subject "Welcome To Talkvera!".</li>
                    <li><span className="font-medium text-white">Real-time Status Tracking:</span> Updates the prospect's status in the <strong>PostgreSQL</strong> database to "Send" and saves a copy of the sent email content for audit and tracking purposes.</li>
                </ul>
            </div>

            {/* ROI SECTION: 
              Renamed from "Key Business Value" to match the example.
              The content is reframed to feel like "hiring a digital assistant."
            */}
            <div>
                <h2 className="text-2xl font-semibold mb-3">Return on Investment</h2>
                <p className="leading-relaxed">
                    By implementing this automated workflow, Talkvera effectively launched a digital sales assistant that:
                </p>
                <ul className="list-disc space-y-2 mt-2 leading-relaxed pl-6">
                    <li>Operates 24/7 to respond to leads in seconds</li>
                    <li>Delivers a level of personalization that is impossible to achieve manually at scale</li>
                    <li>Ensures no lead is ever missed and no data is lost</li>
                    <li>Operates with perfect consistency and accuracy</li>
                    <li>Eliminates manual data entry and copy-paste errors</li>
                    <li>Provides a complete audit trail for every prospect interaction</li>
                </ul>
                <p className="leading-relaxed mt-3">
                    We also removed the separate "Key Technologies" section, as (like in the Barkbox example) it is much more powerful 
                    to mention technologies (like <strong>PostgreSQL</strong>, <strong>Gmail</strong>, and <strong>OpenRouter</strong>) 
                    directly within their functional descriptions.
                </p>
                <p className="leading-relaxed mt-3">
                    The result is a dramatic increase in response speed and relevance, freeing the sales team from administrative tasks 
                    and allowing them to focus on closing deals.
                </p>
            </div>
        </div>
    );
};

export default PersonalizeOutreachAutomationContent;