import { useEffect } from 'react';
import mermaid from 'mermaid';

const GenerateTestScenarioFlowchart = () => {
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
    Start([Upload BRD/PRD<br/>Document]) --> Extract[Extract Text<br/>from PDF]
    
    Extract --> Convert[Convert to<br/>Readable Format]
    
    Convert --> Analyze[Analyze Document<br/>Requirements]
    
    Analyze --> Generate[Generate 10<br/>Test Scenarios]
    
    Generate --> Structure[Structure Test Cases<br/>with Details]
    
    Structure --> Create[Create Google<br/>Spreadsheet]
    
    Create --> Format[Format Test<br/>Case Data]
    
    Format --> Write[Write Test Cases<br/>to Sheet]
    
    Write --> Complete{All Cases<br/>Written?}
    
    Complete -->|No| Write
    Complete -->|Yes| Done([Test Scenarios<br/>Ready])
    
    style Start fill:#4ade80,stroke:#22c55e,color:#000
    style Extract fill:#fbbf24,stroke:#f59e0b,color:#000
    style Analyze fill:#60a5fa,stroke:#3b82f6,color:#000
    style Generate fill:#c084fc,stroke:#a855f7,color:#000
    style Structure fill:#f472b6,stroke:#ec4899,color:#000
    style Create fill:#fb923c,stroke:#f97316,color:#000
    style Write fill:#60a5fa,stroke:#3b82f6,color:#000
    style Done fill:#4ade80,stroke:#22c55e,color:#000`}
          </pre>
      </div>
    </div>
  );
};

export default GenerateTestScenarioFlowchart;