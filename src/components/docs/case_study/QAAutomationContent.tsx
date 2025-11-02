import GenerateTestScenarioFlowchart from './flowchart/GenerateTestScenarioFlowchart';

const QAAutomationContent = () => {
    return (
        <div className="space-y-8">
            {/* TITLE: Changed to "Client | Project" format. 
              Assuming this is for an internal QA team.
            */}
            <h1 className="text-4xl font-bold mb-6">
                QA Team | AI-Powered Test Scenario Generator
            </h1>

            {/* OVERVIEW: Slight adjustment to focus on the "problem" and "solution." */}
            <div>
                <h2 className="text-2xl font-semibold mb-3">Project Overview</h2>
                <p className="leading-relaxed">
                    We designed and deployed an automated n8n workflow to transform the critical task of <strong>Quality Assurance (QA)</strong>. 
                    This solution automatically generates a structured <strong>Test Scenario document</strong> 
                    directly from an uploaded Business or Product Requirements Document (BRD/PRD) in PDF format.
                </p>
                <p className="leading-relaxed mt-3">
                    The system replaces a time-consuming manual process with intelligent extraction, 
                    AI analysis, and automated export to <strong>Google Sheets</strong>. The result is a 
                    <strong>fast, consistent, and structured</strong> QA documentation process.
                </p>
            </div>

            <GenerateTestScenarioFlowchart />

            {/* PHASE RESTRUCTURE:
              These phases now reflect the "business process" (Analysis -> Generation -> Export), 
              not the "technical steps" (Webhook -> Code -> Loop).
            */}

            <div>
                <h2 className="text-2xl font-semibold mb-3">Phase 1: Document Analysis & Preprocessing</h2>
                <p className="leading-relaxed">
                    <span className="font-medium text-white">Trigger:</span> Activates instantly when a QA engineer uploads a PDF file (BRD or PRD) to the webhook endpoint.
                </p>
                <p className="leading-relaxed mt-3">
                    <span className="font-medium text-white">Functionality:</span>
                </p>
                <ul className="list-disc space-y-2 mt-2 leading-relaxed pl-6">
                    <li><span className="font-medium text-white">Intelligent Text Extraction:</span> The system automatically extracts raw text from the uploaded PDF file.</li>
                    <li><span className="font-medium text-white">Structure Conversion (PDF to Markdown):</span> A custom <strong>JavaScript</strong> node converts the raw text into Markdown format. This is a critical step to preserve the document's structure (headings, lists) for the AI to understand.</li>
                    <li><span className="font-medium text-white">Text Normalization:</span> Cleans the Markdown text of unnecessary whitespace and newlines, preparing a clean, concise input for the AI model.</li>
                </ul>
            </div>

            <div>
                <h2 className="text-2xl font-semibold mb-3">Phase 2: AI-Powered Scenario Generation</h2>
                <p className="leading-relaxed">
                    <span className="font-medium text-white">Trigger:</span> Runs automatically after the document has been processed and cleaned.
                </p>
                <p className="leading-relaxed mt-3">
                    <span className="font-medium text-white">Functionality:</span>
                </p>
                <ul className="list-disc space-y-2 mt-2 leading-relaxed pl-6">
                    <li><span className="font-medium text-white">AI QA Expert Agent:</span> Utilizes an advanced AI model (<strong>OpenRouter: `google/gemini-2.5-flash`</strong>) role-played as a QA expert. The AI analyzes the Markdown document and generates 10 comprehensive test scenarios.</li>
                    <li><span className="font-medium text-white">Structured Output Validation:</span> Employs a <strong>Structured Output Parser</strong> to force the AI's response into a strict JSON format. This guarantees the data (project name, list of cases) is always clean, structured, and error-free.</li>
                </ul>
            </div>

            <div>
                <h2 className="text-2xl font-semibold mb-3">Phase 3: Automated Documentation & Export</h2>
                <p className="leading-relaxed">
                    <span className="font-medium text-white">Trigger:</span> Activates as soon as the AI has successfully generated and validated the test scenarios.
                </p>
                <p className="leading-relaxed mt-3">
                    <span className="font-medium text-white">Functionality:</span>
                </p>
                <ul className="list-disc space-y-2 mt-2 leading-relaxed pl-6">
                    <li><span className="font-medium text-white">Dynamic Spreadsheet Creation:</span> Automatically creates a new <strong>Google Sheet</strong> with a dynamic title based on the AI's output (e.g., "Test scenario : [Project Name]").</li>
                    <li><span className="font-medium text-white">Data Formatting & Looping:</span> Converts the JSON array from the AI into individual items, then loops through to process each test case one by one.</li>
                    <li><span className="font-medium text-white">Automated Row Population:</span> Writes each test case as a new row in the Google Sheet, automatically populating columns: <strong>ID, Case, Steps, Type,</strong> and <strong>Expected</strong>. The <strong>Actual</strong> and <strong>Status</strong> columns are intentionally left blank for the QA team to fill during manual testing.</li>
                </ul>
            </div>

            {/* ROI SECTION: 
              Changed from "Key Business Value" to "Return on Investment" to match the Barkbox example.
              The narrative is framed as "hiring a digital assistant."
            */}
            <div>
                <h2 className="text-2xl font-semibold mb-3">Return on Investment</h2>
                <p className="leading-relaxed">
                    By implementing this AI workflow, the QA team effectively "hired" a senior digital QA Analyst that:
                </p>
                <ul className="list-disc space-y-2 mt-2 leading-relaxed pl-6">
                    <li>Turns a 50-page BRD into a structured test plan in minutes, not days</li>
                    <li>Operates 24/7 with no training, PTO, or breaks required</li>
                    <li>Ensures 100% consistency in test documentation format and structure</li>
                    <li>Uses advanced AI to identify scenarios and edge cases that a human might miss</li>
                    <li>Integrates directly with <strong>Google Sheets</strong>, where the team already works</li>
                    <li>Frees up senior QA engineers from repetitive documentation to focus on complex, exploratory testing</li>
                </ul>
                <p className="leading-relaxed mt-3">
                    {/* Strong closing paragraph like the Barkbox example */}
                    The result is a drastic reduction in QA prep time, improved test quality and coverage, and a faster, more agile product development lifecycle.
                </p>
            </div>
        </div>
    );
};

export default QAAutomationContent;