const IntroductionContent = () => {
    return (
        <div className="space-y-8">
            <h1 className="text-4xl font-bold mb-6">Getting Started</h1>

            <p className=" leading-relaxed">
                Welcome to TalkVera's documentation! This section is your launchpad for getting oriented
                with our tools, services, and how we work. Our goal is to make working with TalkVera
                seamless and intuitive.
            </p>

            <div>
                <h2 className="text-2xl font-semibold mb-3">Navigating the Documentation</h2>
                <p className=" leading-relaxed">
                    Each major category in this documentation is presented as a dropdown menu, containing
                    detailed subpages for each topic. Use the sidebar or top navigation to explore areas like
                    <span className="text-white font-medium"> "Technology Stack", "Our Process", </span>and
                    <span className="text-white font-medium"> "AI Agents".</span> 
                </p>
            </div>

            <div>
                <h2 className="text-2xl font-semibold mb-3">Who This Is For</h2>
                <p className=" leading-relaxed">
                    This documentation is designed for developers, product leaders, operations teams, and
                    decision-makers who want to understand and implement AI capabilities into their workflows.
                    Whether you're launching a new project or integrating one of our agents into your systems,
                    this guide will help you understand what's possible and how to get there.
                </p>
            </div>

            <div>
                <h2 className="text-2xl font-semibold mb-3">How to Work With Us</h2>
                <p className=" leading-relaxed mb-3">
                    To start working with TalkVera, visit our
                    <span className="text-white font-medium"> Contact Page </span>and fill out the form with
                    as much detail as possible about your project. The more context you provide, the better we
                    can scope the engagement and align you with the right solutions.
                </p>
                <p className=" leading-relaxed">
                    We specialize in building tailored AI automation solutions for enterprises. Because every 
                    business's needs are unique, we don't offer fixed packages. Instead, we conduct a 
                    <span className="text-white font-medium"> comprehensive 
                    technical assessment </span>to provide a customized proposal and detailed investment outline.
                </p>
            </div>

            <div>
                <h2 className="text-2xl font-semibold mb-3">Documentation Tips</h2>
                <p className=" leading-relaxed">
                    Each page in the documentation is written with clarity and speed in mind. You'll find
                    headings, brief explanations, and where helpful, embedded videos, diagrams, and example
                    prompts. Use these as references or templates to better understand how our tools work in
                    practice.
                </p>
            </div>

            <div>
                <h2 className="text-2xl font-semibold mb-3">Feedback Welcome</h2>
                <p className=" leading-relaxed">
                    We strive to keep our documentation current and helpful. If something's missing or unclear,
                    don't hesitate to reach out. We're continuously iterating based on client feedback and
                    evolving AI capabilities.
                </p>
            </div>
        </div>
    );
};

export default IntroductionContent;