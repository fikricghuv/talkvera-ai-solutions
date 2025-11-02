import { useEffect } from 'react';
import mermaid from 'mermaid';

const RAGDatabaseAgentFlowchart = () => {
  useEffect(() => {
    mermaid.initialize({ 
      startOnLoad: true,
      theme: 'dark',
      flowchart: {
        useMaxWidth: true,
        htmlLabels: true,
        curve: 'basis'
      }
    });
    mermaid.contentLoaded();
  }, []);

  return (
    <div className="mt-6">
      <div className="bg-gray-900 p-6 rounded-lg overflow-x-auto">
        <pre className="mermaid">
{`flowchart LR
    Start([User Asks<br/>Question]) --> Agent[AI Agent<br/>Receives Query]
    
    Agent --> AnalyzeQuestion{Question<br/>Type?}
    
    %% Unstructured Data Path (Vector Store)
    AnalyzeQuestion -->|General Info<br/>Definitions<br/>Unstructured| VectorSearch[Search<br/>Vector Store]
    VectorSearch --> Rerank[Rerank Results<br/>with Cohere]
    Rerank --> HasContext{Context<br/>Found?}
    
    HasContext -->|Yes| GenerateAnswer1[Generate<br/>Answer from<br/>Context]
    HasContext -->|No| NoAnswer[Response:<br/>Sorry, I don't<br/>know]
    
    %% Structured Data Path (SQL Database)
    AnalyzeQuestion -->|Tabular Data<br/>Calculations<br/>Transactions| GetSchema[Get Table<br/>Schemas &<br/>Foreign Keys]
    GetSchema --> AnalyzeSchema[Analyze<br/>Relevant<br/>Tables]
    
    AnalyzeSchema --> NeedDistinct{Need to<br/>Verify<br/>Values?}
    
    NeedDistinct -->|Yes| RunDistinct[Run SELECT<br/>DISTINCT<br/>Query]
    RunDistinct --> ValidValues[Get Valid<br/>Field Values]
    ValidValues --> ConstructSQL
    
    NeedDistinct -->|No| ConstructSQL[Construct<br/>SQL Query<br/>with JOINs]
    
    ConstructSQL --> ValidateQuery{Query<br/>Valid?}
    
    ValidateQuery -->|No| RefineQuery[Refine<br/>Query]
    RefineQuery --> ConstructSQL
    
    ValidateQuery -->|Yes| ExecuteSQL[Execute<br/>SQL Query]
    ExecuteSQL --> ProcessResults[Process<br/>Query Results]
    ProcessResults --> GenerateAnswer2[Generate<br/>Answer from<br/>Data]
    
    %% Answer Assembly
    GenerateAnswer1 --> FormatResponse[Format<br/>Response]
    GenerateAnswer2 --> FormatResponse
    NoAnswer --> FormatResponse
    
    FormatResponse --> SendResponse[Send JSON<br/>Response]
    SendResponse --> Done([Complete])
    
    style Start fill:#4ade80,stroke:#22c55e,color:#000
    style Agent fill:#fbbf24,stroke:#f59e0b,color:#000
    style VectorSearch fill:#c084fc,stroke:#a855f7,color:#000
    style Rerank fill:#c084fc,stroke:#a855f7,color:#000
    style GetSchema fill:#60a5fa,stroke:#3b82f6,color:#000
    style AnalyzeSchema fill:#60a5fa,stroke:#3b82f6,color:#000
    style RunDistinct fill:#60a5fa,stroke:#3b82f6,color:#000
    style ValidValues fill:#60a5fa,stroke:#3b82f6,color:#000
    style ConstructSQL fill:#60a5fa,stroke:#3b82f6,color:#000
    style RefineQuery fill:#60a5fa,stroke:#3b82f6,color:#000
    style ExecuteSQL fill:#60a5fa,stroke:#3b82f6,color:#000
    style ProcessResults fill:#60a5fa,stroke:#3b82f6,color:#000
    style GenerateAnswer1 fill:#f472b6,stroke:#ec4899,color:#000
    style GenerateAnswer2 fill:#f472b6,stroke:#ec4899,color:#000
    style FormatResponse fill:#fb923c,stroke:#f97316,color:#000
    style SendResponse fill:#fb923c,stroke:#f97316,color:#000
    style NoAnswer fill:#ef4444,stroke:#dc2626,color:#fff
    style Done fill:#4ade80,stroke:#22c55e,color:#000`}
        </pre>
      </div>
    </div>
  );
};

export default RAGDatabaseAgentFlowchart;