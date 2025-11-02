import NewsletterGenerationFlowchart from './flowchart/NewsletterGenerationFlowchart';

const NewsletterAutomationAgentContent = () => {
    return (
        <div className="space-y-8">
            {/* TITLE: Following the "Client | Project" format */}
            <h1 className="text-4xl font-bold mb-6">
                Content Team | AI-Powered Weekly Newsletter Automation
            </h1>

            {/* OVERVIEW: Focused on the business problem solved */}
            <div>
                <h2 className="text-2xl font-semibold mb-3">Project Overview</h2>
                <p className="leading-relaxed">
                    We designed and deployed a comprehensive n8n workflow that fully automates the creation and formatting of a professional, weekly business newsletter. 
                    The system acts as a digital content team, intelligently handling initial research, content planning, multi-section drafting, HTML editing, and final delivery to <strong>Gmail</strong>.
                </p>
                <p className="leading-relaxed mt-3">
                    This automation replaces hours of manual effort by leveraging <strong>multiple specialized AI agents</strong> (Planner, Writer, Editor) and <strong>structured data parsers</strong>. This ensures the content is always timely, perfectly coherent, properly cited, and delivered in a consistent, email-ready format every single week.
                </p>
            </div>

            <NewsletterGenerationFlowchart />

            {/* PHASE 1: Focused on getting the initial concept and research done */}
            <div>
                <h2 className="text-2xl font-semibold mb-3">Phase 1: Scheduled Research & Content Planning</h2>
                <p className="leading-relaxed">
                    <span className="font-medium text-white">Trigger:</span> Automatically runs on a <strong>weekly schedule</strong> (e.g., every Monday at 5:00 AM) to ensure timely delivery.
                </p>
                <p className="leading-relaxed mt-3">
                    <span className="font-medium text-white">Functionality:</span>
                </p>
                <ul className="list-disc space-y-2 mt-2 leading-relaxed pl-6">
                    <li><span className="font-medium text-white">Foundational Research (Tavily):</span> Executes a targeted search for the latest news in the domain ("AI adoption for small business"), focusing only on the last seven days to retrieve the top 3 most relevant articles.</li>
                    <li><span className="font-medium text-white">Planning Agent (OpenAI):</span> An AI agent analyzes the research findings and generates the strategic roadmap for the newsletter, including a creative <strong>main title</strong> and exactly <strong>three main topics</strong> for the body sections.</li>
                    <li><span className="font-medium text-white">Structured Data Enforcement:</span> A parser strictly validates the AI's output against a predefined JSON schema, guaranteeing that the required title and three-topic array are present before proceeding.</li>
                </ul>
            </div>

            {/* PHASE 2: Focused on leveraging parallelism and specialized writing */}
            <div>
                <h2 className="text-2xl font-semibold mb-3">Phase 2: Parallel Content Drafting & Research Deep Dive</h2>
                <p className="leading-relaxed">
                    <span className="font-medium text-white">Trigger:</span> Automatically runs after the Planner Agent delivers the three structured topics.
                </p>
                <p className="leading-relaxed mt-3">
                    <span className="font-medium text-white">Functionality:</span>
                </p>
                <ul className="list-disc space-y-2 mt-2 leading-relaxed pl-6">
                    <li><span className="font-medium text-white">Execution Parallelism:</span> The workflow immediately <strong>splits</strong> the three topics into three simultaneous execution paths, drastically accelerating the writing process.</li>
                    <li><span className="font-medium text-white">Deep Topic Research (Tavily):</span> Each parallel path performs a specialized, deep-dive search on its assigned topic to gather specific details and supportive data.</li>
                    <li><span className="font-medium text-white">Section Writer Agent:</span> A separate AI agent in each path uses the deep research to write <strong>one standalone, professional newsletter section</strong>. The agent is strictly instructed to include clear section headings and verifiable source citations directly within the text.</li>
                </ul>
                <p className="leading-relaxed mt-3">
                    This step ensures all core content is drafted quickly and independently, maximizing efficiency while maintaining research integrity.
                </p>
            </div>

            {/* PHASE 3: Focused on final assembly, quality control, and delivery */}
            <div>
                <h2 className="text-2xl font-semibold mb-3">Phase 3: HTML Finalization and Delivery Draft</h2>
                <p className="leading-relaxed">
                    <span className="font-medium text-white">Trigger:</span> Runs when all three parallel-written sections are completed and aggregated.
                </p>
                <p className="leading-relaxed mt-3">
                    <span className="font-medium text-white">Functionality:</span>
                </p>
                <ul className="list-disc space-y-2 mt-2 leading-relaxed pl-6">
                    <li><span className="font-medium text-white">Content Aggregation:</span> The system combines the title, introduction, and the three body sections back into a single item for final holistic review.</li>
                    <li><span className="font-medium text-white">Editor Agent (OpenRouter):</span> The final, highly specialized AI agent acts as the "expert newsletter editor." Its task is to merge the text into a cohesive HTML body, add a proper introduction and conclusion, and generate a <strong>consolidated, alphabetized source list</strong> with full URLs.</li>
                    <li><span className="font-medium text-white">Final Output Validation:</span> The resulting email content is checked one last time to ensure it is clean JSON, containing the final `subject` and the fully rendered HTML `content`.</li>
                    <li><span className="font-medium text-white">Draft Delivery (Gmail):</span> The final, ready-to-send email is delivered as a <strong>draft</strong> in the user's Gmail account, awaiting a quick, final human review before deployment.</li>
                </ul>
            </div>

            {/* ROI SECTION: Consistent with previous case studies */}
            <div>
                <h2 className="text-2xl font-semibold mb-3">Return on Investment</h2>
                <p className="leading-relaxed">
                    By implementing this sophisticated AI automation, the content team effectively onboarded an entire digital publishing unit that:
                </p>
                <ul className="list-disc space-y-2 mt-2 leading-relaxed pl-6">
                    <li><strong>Reduces Content Creation Time by over 90%</strong>, from hours of manual work to a 5-minute review.</li>
                    <li><strong>Guarantees Weekly Consistency</strong> and adherence to a professional editorial standard, eliminating human fatigue and variation.</li>
                    <li><strong>Leverages Real-Time Research</strong> (Tavily) to ensure the content is always current and relevant.</li>
                    <li><strong>Operates 24/7</strong> on a set schedule, providing perfect reliability with no PTO or sick days.</li>
                    <li><strong>Ensures Deliverability</strong> by automatically formatting content into a clean, email-ready HTML structure.</li>
                </ul>
                <p className="leading-relaxed mt-3">
                    This workflow eliminates the repetitive mechanics of content generation, allowing the team to shift their focus from writing to strategic oversight, channel optimization, and higher-value tasks.
                </p>
            </div>
        </div>
    );
};

export default NewsletterAutomationAgentContent;