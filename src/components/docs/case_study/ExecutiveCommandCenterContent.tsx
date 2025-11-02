const ExecutiveCommandCenterContent = () => {
    return (
        <div className="space-y-8">
            <h1 className="text-4xl font-bold mb-6">
                Barkbox | AI-Powered Executive Assistant in Slack
            </h1>

            <div>
                <h2 className="text-2xl font-semibold mb-3">Project Overview</h2>
                <p className="leading-relaxed">
                    We partnered with BarkBox to design and deploy a custom-built AI executive assistant that operates entirely within Slack. 
                    This assistant serves as a central hub for communication and productivity, seamlessly integrating with key business tools like 
                    Gmail, Google Calendar, monday.com, and Google Contacts—while adopting the client's unique writing style to ensure consistency 
                    across all messages.
                </p>
                <p className="leading-relaxed mt-3">
                    This solution replaces repetitive manual tasks with intelligent automation and provides BarkBox with a scalable foundation 
                    that can continue to grow as their needs evolve.
                </p>
            </div>

            <div>
                <h2 className="text-2xl font-semibold mb-3">Phase 1: Slack-Based Personal Assistant</h2>
                <p className="leading-relaxed">
                    <span className="font-medium text-white">Trigger:</span> Activated by a Slack @mention, the assistant engages directly in the thread with actionable responses or completed tasks.
                </p>
                <p className="leading-relaxed mt-3">
                    <span className="font-medium text-white">Key Capabilities:</span>
                </p>
                <ul className="list-disc list-inside space-y-2 mt-2 leading-relaxed">
                    <li><span className="font-medium text-white">Email Management:</span> Drafts and labels emails, summarizes inboxes, finds specific threads, and creates drafts—while writing in the client's voice.</li>
                    <li><span className="font-medium text-white">Calendar Integration:</span> Checks availability, schedules and updates meetings, creates events with or without attendees.</li>
                    <li><span className="font-medium text-white">monday.com Integration:</span> Retrieves boards, tasks, and columns; creates and updates project items.</li>
                    <li><span className="font-medium text-white">Contact Management:</span> Searches and updates Google Contacts dynamically for streamlined communication.</li>
                    <li><span className="font-medium text-white">Writing Style Personalization:</span> All messages, whether sent in Slack or email, are composed in the client's preferred tone and structure.</li>
                </ul>
            </div>

            <div>
                <h2 className="text-2xl font-semibold mb-3">Phase 2: Inbox Management Automation</h2>
                <p className="leading-relaxed">
                    <span className="font-medium text-white">Trigger:</span> Continuously monitors incoming emails in real time.
                </p>
                <p className="leading-relaxed mt-3">
                    <span className="font-medium text-white">Functionality:</span>
                </p>
                <ul className="list-disc list-inside space-y-2 mt-2 leading-relaxed">
                    <li><span className="font-medium text-white">Dynamic Contact Enrichment:</span> If an email sender is not already in Google Contacts, the system automatically extracts relevant info—such as name, email, company, and role—and updates the contact list.</li>
                    <li><span className="font-medium text-white">Email Categorization & Actions:</span></li>
                    <ul className="list-disc list-inside ml-6 space-y-1">
                        <li><span className="font-medium text-white">Billing Emails →</span> Summarized and sent to Slack</li>
                        <li><span className="font-medium text-white">VIP Emails →</span> Automatically labeled for priority</li>
                        <li><span className="font-medium text-white">Internal Emails →</span> Categorized for streamlined internal tracking</li>
                    </ul>
                </ul>
                <p className="leading-relaxed mt-3">
                    This allows the team to stay organized, respond faster, and eliminate manual inbox sorting.
                </p>
            </div>

            <div>
                <h2 className="text-2xl font-semibold mb-3">Phase 3: Daily Operational Summary</h2>
                <p className="leading-relaxed">
                    <span className="font-medium text-white">Trigger:</span> Automatically sends every weekday at 5:00 AM.
                </p>
                <p className="leading-relaxed mt-3">
                    <span className="font-medium text-white">Functionality:</span>
                </p>
                <ul className="list-disc list-inside space-y-2 mt-2 leading-relaxed">
                    <li>Gathers the day's meetings from Google Calendar</li>
                    <li>Pulls active and due tasks from monday.com</li>
                    <li>Delivers a concise daily summary directly to the client in Slack</li>
                </ul>
                <p className="leading-relaxed mt-3">
                    This provides daily visibility without the need to log into multiple platforms.
                </p>
            </div>

            <div>
                <h2 className="text-2xl font-semibold mb-3">Return on Investment</h2>
                <p className="leading-relaxed">
                    By implementing this AI assistant, BarkBox effectively onboarded a full-time executive assistant that:
                </p>
                <ul className="list-disc list-inside space-y-2 mt-2 leading-relaxed">
                    <li>Lives entirely within Slack, where the team already works</li>
                    <li>Has instant access to key tools and systems</li>
                    <li>Operates with perfect memory and consistency</li>
                    <li>Requires no training, no PTO, and no raise</li>
                    <li>Responds in real time, 24/7</li>
                    <li>Scales effortlessly as new needs arise</li>
                </ul>
                <p className="leading-relaxed mt-3">
                    Most importantly, this project established a modular and extensible framework that will allow BarkBox to expand functionality 
                    over time—adding new tools, workflows, and intelligence as the business grows.
                </p>
                <p className="leading-relaxed mt-3">
                    The result is a significant reduction in administrative overhead, faster decision-making, and a deeply integrated AI layer 
                    that enhances team productivity and executive focus.
                </p>
            </div>
        </div>
    );
};

export default ExecutiveCommandCenterContent;
