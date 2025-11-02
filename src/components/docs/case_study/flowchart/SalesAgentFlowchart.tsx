import { useEffect } from 'react';
import mermaid from 'mermaid';

const SalesAgentFlowchart = () => {
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
    Start([Customer<br/>Contacts<br/>via Chat]) --> Agent[Sales AI Agent<br/>Receives Message]
    
    Agent --> CheckCustomer{Customer<br/>Registered?}
    
    CheckCustomer -->|No| CollectInfo[Collect Data:<br/>Name, Email,<br/>Phone Number]
    CollectInfo --> SaveCustomer[Save to<br/>CRM]
    
    CheckCustomer -->|Yes| Greet[Greet<br/>Customer]
    
    SaveCustomer --> Inquiry
    Greet --> Inquiry[Understand<br/>Needs]
    
    Inquiry --> QuestionType{Question<br/>Type?}
    
    QuestionType -->|General<br/>Question| SearchKB[Search in<br/>Knowledge<br/>Base]
    SearchKB --> Answer[Provide<br/>Answer]
    Answer --> RecordNote2[Record<br/>in CRM]
    
    QuestionType -->|Request<br/>Quote| CollectReq[Collect<br/>Product<br/>Details]
    CollectReq --> Clarify{Info<br/>Complete?}
    
    Clarify -->|No| AskMore[Ask for<br/>Additional<br/>Details]
    AskMore --> CollectReq
    
    Clarify -->|Yes| GenerateQuote[Generate<br/>Quote]
    
    GenerateQuote --> SaveQuote[Save<br/>Quote]
    SaveQuote --> SendQuote[Send to<br/>Customer]
    SendQuote --> NotifyTeam[Notify<br/>Orders Team]
    NotifyTeam --> RecordNote3[Record<br/>in CRM]
    
    RecordNote2 --> Done
    RecordNote3 --> Done
    
    Done([Complete])
    
    style Start fill:#4ade80,stroke:#22c55e,color:#000
    style Agent fill:#fbbf24,stroke:#f59e0b,color:#000
    style CollectInfo fill:#60a5fa,stroke:#3b82f6,color:#000
    style SaveCustomer fill:#60a5fa,stroke:#3b82f6,color:#000
    style Greet fill:#fbbf24,stroke:#f59e0b,color:#000
    style Inquiry fill:#c084fc,stroke:#a855f7,color:#000
    style SearchKB fill:#c084fc,stroke:#a855f7,color:#000
    style Answer fill:#f472b6,stroke:#ec4899,color:#000
    style CollectReq fill:#60a5fa,stroke:#3b82f6,color:#000
    style AskMore fill:#60a5fa,stroke:#3b82f6,color:#000
    style GenerateQuote fill:#f472b6,stroke:#ec4899,color:#000
    style SaveQuote fill:#60a5fa,stroke:#3b82f6,color:#000
    style SendQuote fill:#fb923c,stroke:#f97316,color:#000
    style NotifyTeam fill:#fb923c,stroke:#f97316,color:#000
    style RecordNote2 fill:#60a5fa,stroke:#3b82f6,color:#000
    style RecordNote3 fill:#60a5fa,stroke:#3b82f6,color:#000
    style Done fill:#4ade80,stroke:#22c55e,color:#000`}
        </pre>
      </div>
    </div>
  );
};

export default SalesAgentFlowchart;