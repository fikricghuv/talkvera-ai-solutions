const QAAutomationContent = () => {
    return (
        <div className="space-y-8">
            <h1 className="text-4xl font-bold mb-6">
                AI-Powered Test Scenario Generation from PDF Document Automation
            </h1>

            <div>
                <h2 className="text-2xl font-semibold mb-3">Project Overview</h2>
                <p className="leading-relaxed">
                    This n8n workflow automates the crucial task of <strong>Quality Assurance (QA)</strong> by automatically generating a structured <strong>Test Scenario document</strong> from an uploaded Business Requirements Document (BRD) or Product Requirements Document (PRD) in PDF format.
                </p>
                <p className="leading-relaxed mt-3">
                    It uses a multi-step process: file extraction, PDF-to-Markdown conversion, AI analysis and generation, and final export to a clean Google Sheet, ensuring a <strong>fast, consistent, and structured</strong> QA documentation process.
                </p>
            </div>


            <div>
                <h2 className="text-2xl font-semibold mb-3">System Architecture (Workflow Breakdown)</h2>

                <div className="mt-4">
                    <h3 className="text-xl font-semibold">Phase 1: Document Ingestion and Preprocessing</h3>
                    <ul className="list-disc list-inside space-y-2 mt-2 leading-relaxed">
                        <li>
                            <span className="font-medium text-white">Webhook:</span> The workflow is initiated when a <strong>PDF file</strong> (e.g., BRD/PRD) is uploaded via a <strong>POST</strong> request to the specified endpoint.
                        </li>
                        <li>
                            <span className="font-medium text-white">Extract from File PDF:</span> This node takes the binary file from the webhook (`Upload_file_BRD_and_PRD`) and extracts the raw text content from the PDF.
                        </li>
                        <li>
                            <span className="font-medium text-white">Convert Pdf to Markdown (Code):</span> This custom JavaScript node takes the raw, unstructured PDF text and converts it into a more readable <strong>Markdown format</strong>. This helps the AI Agent interpret the document's structure (headings, lists, paragraphs) more accurately.
                        </li>
                        <li>
                            <span className="font-medium text-white">Strip out new lines and whitespace (Set):</span> This step cleans up the Markdown text further by standardizing whitespace and newline characters, preparing an optimal, compact text input for the AI model.
                        </li>
                    </ul>
                </div>

                <div className="mt-6">
                    <h3 className="text-xl font-semibold">Phase 2: AI Generation and Structured Parsing</h3>
                    <ul className="list-disc list-inside space-y-2 mt-2 leading-relaxed">
                        <li>
                            <span className="font-medium text-white">AI Agent:</span> This is the core intelligence node, configured as a <strong>Quality Assurance expert</strong>.
                            <ul className="list-circle list-inside ml-5">
                                <li><strong>Goal:</strong> Analyze the cleaned document and <strong>generate exactly 10 test scenarios</strong> (Test Cases).</li>
                                <li><strong>LLM:</strong> Uses the <strong>OpenRouter Chat Model</strong> (`google/gemini-2.5-flash`) for powerful analysis and generation.</li>
                                <li><strong>Prompt & Input:</strong> The system message enforces the QA role and strictly defines the required output structure.</li>
                            </ul>
                        </li>
                        <li>
                            <span className="font-medium text-white">Structured Output Parser:</span> This critical node validates the AI Agent's response against a predefined JSON schema, ensuring the output is a <strong>clean, structured JSON object</strong> containing the `project` name and the array of `cases`. This guarantees data integrity before exporting.
                        </li>
                    </ul>
                </div>

                <div className="mt-6">
                    <h3 className="text-xl font-semibold">Phase 3: Export to Google Sheets</h3>
                    <ul className="list-disc list-inside space-y-2 mt-2 leading-relaxed">
                        <li>
                            <span className="font-medium text-white">Create spreadsheet (Google Sheets):</span> A new Google Sheet is created with a dynamic title derived from the AI output (e.g., `Test scenario : [Project Name]`). This holds the final QA documentation.
                        </li>
                        <li>
                            <span className="font-medium text-white">Code in JavaScript:</span> This intermediary step takes the structured JSON array of test cases (`cases`) and converts each individual test case object (`id`, `case`, `steps`, etc.) into a <strong>separate item</strong> for subsequent looping.
                        </li>
                        <li>
                            <span className="font-medium text-white">Loop Over Items (Split In Batches):</span> This node ensures that each generated test case (now an individual item) is processed separately and written as a new row in the spreadsheet.
                        </li>
                        <li>
                            <span className="font-medium text-white">Append or update row in sheet (Google Sheets):</span> Within the loop, this node writes each test case item to the newly created Google Sheet, automatically populating columns like <strong>ID, Case, Steps, Type, Expected,</strong> and reserving space for manual <strong>Actual</strong> result and <strong>Status</strong> columns.
                        </li>
                    </ul>
                </div>
            </div>


            <div>
                <h2 className="text-2xl font-semibold mb-3">Key Technologies and Configuration</h2>
                <p className="leading-relaxed">
                    This workflow relies on a tight integration between several specialized tools:
                </p>
                <ul className="list-disc list-inside space-y-2 mt-2 leading-relaxed">
                    <li><span className="font-medium text-white">AI Language Model:</span> OpenRouter (Model: `google/gemini-2.5-flash`). Chosen for its high performance in analysis and complex structured generation tasks.</li>
                    <li><span className="font-medium text-white">Document Processing:</span> Native n8n <strong>Extract from File</strong> and custom <strong>Code</strong> nodes are used to prepare and structure the raw PDF content for AI consumption.</li>
                    <li><span className="font-medium text-white">Data Structure Enforcement:</span> The <strong>Structured Output Parser</strong> is critical for ensuring the AI's complex JSON output is error-free and aligns precisely with the required schema.</li>
                    <li><span className="font-medium text-white">Documentation Export:</span> Google Sheets. Used to create a collaborative, editable environment for the QA team.</li>
                </ul>
            </div>
            

            <div>
                <h2 className="text-2xl font-semibold mb-3">Key Business Value</h2>
                <ul className="list-disc list-inside space-y-2 mt-2 leading-relaxed">
                    <li><span className="font-medium text-white">Speed and Efficiency:</span> Instantly transforms requirements documents into actionable test scenarios, drastically reducing the manual effort and time spent by QA engineers.</li>
                    <li><span className="font-medium text-white">Consistency:</span> Guarantees every test case follows a uniform, predefined structure (ID, Case, Steps, Type, Expected).</li>
                    <li><span className="font-medium text-white">AI-Powered Coverage:</span> Leverages a powerful LLM to identify key features and edge cases within the document, potentially improving test coverage.</li>
                </ul>
            </div>
        </div>
    );
};

export default QAAutomationContent;