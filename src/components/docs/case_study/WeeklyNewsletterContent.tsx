const NewsletterAutomationAgentContent = () => {
    return (
        <div className="space-y-8">
            <h1 className="text-4xl font-bold mb-6">
                AI Weekly Newsletter Automation Agent
            </h1>

            <div>
                <h2 className="text-2xl font-semibold mb-3">Project Overview</h2>
                <p className="leading-relaxed">
                    This n8n workflow fully automates the complex process of generating a professional, weekly business newsletter. The system intelligently handles research, content planning, multi-section writing, HTML editing, and final delivery to a Gmail.
                </p>
                <p className="leading-relaxed mt-3">
                    The automation leverages multiple specialized AI agents (Planning, Section Writing, Editing) and structured data parsers to ensure the content is timely, coherent, properly cited, and delivered in a consistent, email-ready format.
                </p>
            </div>

            <div>
                <h2 className="text-2xl font-semibold mb-3">System Architecture</h2>

                <div className="mt-4">
                    <h3 className="text-xl font-semibold">Phase 1: Scheduling and Initial Research</h3>
                    <p className="leading-relaxed mt-2">
                        <span className="font-medium text-white">Trigger:</span> Activated weekly via the **Schedule Trigger** node (configured for 5 AM, currently disabled).
                    </p>

                    <p className="leading-relaxed mt-3">
                        <span className="font-medium text-white">Functionality:</span>
                    </p>
                    <ul className="list-disc space-y-2 mt-2 leading-relaxed pl-6">
                        <li>
                            <span className="font-medium text-white">Initial Research (Tavily):</span> Executes a search for news related to "AI adoption for small business," limited to the last week, retrieving the top 3 relevant articles to inform the content.
                        </li>
                    </ul>

                    <p className="leading-relaxed mt-3">
                        This phase establishes the foundational, up-to-date information required for the newsletter's content.
                    </p>
                </div>

                <div className="mt-6">
                    <h3 className="text-xl font-semibold">Phase 2: Content Planning and Parallel Generation</h3>

                    <p className="leading-relaxed mt-2">
                        <span className="font-medium text-white">Trigger:</span> Automatically runs after the Initial Research is complete.
                    </p>

                    <p className="leading-relaxed mt-3">
                        <span className="font-medium text-white">Functionality:</span>
                    </p>

                    <ul className="list-disc pl-6 space-y-2 mt-2 leading-relaxed pl-6">
                        <li>
                            <span className="font-medium text-white">Planning Agent:</span> Uses an OpenAI language model (GPT-5-mini) to analyze the initial research and generate a creative title and exactly three main topics for the newsletter.
                        </li>
                        <li>
                            <span className="font-medium text-white">Structured Output Parser:</span> Strictly enforces the output to contain the `title` and a `topics` array with a minimum and maximum of 3 items, ensuring consistent workflow input.
                        </li>
                        <li>
                            <span className="font-medium text-white">Split Out:</span> Splits the three generated topics into three parallel execution branches to accelerate the writing process.
                        </li>
                        <li>
                            <span className="font-medium text-white">Research Topics (Tavily):</span> Each parallel branch performs a deep search specifically on its assigned topic.
                        </li>
                        <li>
                            <span className="font-medium text-white">Section Writer Agent:</span> Uses the deep research results to write one standalone, professional section, strictly following instructions to include clear section headings and real, verifiable source citations.
                        </li>
                    </ul>

                    <p className="leading-relaxed mt-3">
                        This phase leverages AI and parallelism to quickly draft the core content sections, ensuring each is well-researched and independently viable.
                    </p>
                </div>

                <div className="mt-6">
                    <h3 className="text-xl font-semibold">Phase 3: Final Editing and Delivery</h3>

                    <p className="leading-relaxed mt-2">
                        <span className="font-medium text-white">Trigger:</span> Runs when all three sections are written and aggregated.
                    </p>

                    <p className="leading-relaxed mt-3">
                        <span className="font-medium text-white">Functionality:</span>
                    </p>

                    <ul className="list-disc pl-6 space-y-2 mt-2 leading-relaxed">
                        <li>
                            <span className="font-medium text-white">Aggregate:</span> Combines the three written sections back into a single item for holistic processing.
                        </li>
                        <li>
                            <span className="font-medium text-white">Editor Agent:</span> Uses the OpenRouter language model (GPT-5-mini) to act as an "expert newsletter editor." It merges the title and the three sections into a cohesive HTML body, including a holistic introduction, conclusion, and a consolidated, alphabetized source list with full URLs.
                        </li>
                        <li>
                            <span className="font-medium text-white">Structured Output Parser1:</span> Ensures the final output is a clean JSON containing the email `subject` (string) and the final HTML `content` (string).
                        </li>
                        <li>
                            <span className="font-medium text-white">Create a draft (Gmail):</span> Connects to the user's Gmail account to create the final email draft using the AI-generated subject and HTML content, ready for manual review and sending.
                        </li>
                    </ul>

                    <p className="leading-relaxed mt-3">
                        This completes the process, guaranteeing a predictable, well-formed HTML output that is ready for deployment.
                    </p>
                </div>
            </div>

            <div>
                <h2 className="text-2xl font-semibold mb-3">Return on Investment</h2>
                <p className="leading-relaxed">
                    Implementing this AI-powered automation delivers measurable benefits:
                </p>
                <ul className="list-disc pl-6 space-y-2 mt-2 leading-relaxed">
                    <li><span className="font-medium text-white">Maximized Efficiency:</span> Reduces manual labor for research, writing, editing, and formatting by over 90%.</li>
                    <li><span className="font-medium text-white">Consistent Quality:</span> Specialized AI agents ensure professional tone, structured output, and adherence to citation rules.</li>
                    <li><span className="font-medium text-white">Timeliness:</span> Automated scheduling and real-time research (Tavily) ensure the content is always current.</li>
                    <li><span className="font-medium text-white">Scalability:</span> The modular n8n design allows for easy expansion to new topics, models, or delivery channels.</li>
                </ul>
                <p className="leading-relaxed mt-3">
                    The workflow eliminates repetitive tasks and enables the content team to focus on strategic oversight and final review, rather than content creation mechanics.
                </p>
            </div>
        </div>
    );
};

export default NewsletterAutomationAgentContent;