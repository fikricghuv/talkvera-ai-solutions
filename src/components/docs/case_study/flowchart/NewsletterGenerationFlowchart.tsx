import { useEffect } from 'react';
import mermaid from 'mermaid';

const NewsletterGenerationFlowchart = () => {
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
    Start([Weekly<br/>Schedule Trigger]) --> Research[Research Recent<br/>AI News]
    
    Research --> Plan[Plan Newsletter<br/>Structure]
    
    Plan --> Topics[Identify 3 Main<br/>Topics]
    
    Topics --> Split{Split<br/>Topics}
    
    Split --> Topic1[Research<br/>Topic 1]
    Split --> Topic2[Research<br/>Topic 2]
    Split --> Topic3[Research<br/>Topic 3]
    
    Topic1 --> Write1[Write Section<br/>for Topic 1]
    Topic2 --> Write2[Write Section<br/>for Topic 2]
    Topic3 --> Write3[Write Section<br/>for Topic 3]
    
    Write1 --> Combine[Combine All<br/>Sections]
    Write2 --> Combine
    Write3 --> Combine
    
    Combine --> Edit[Edit & Polish<br/>Newsletter]
    
    Edit --> Format[Format with<br/>Introduction & Sources]
    
    Format --> Draft[Create Gmail<br/>Draft]
    
    Draft --> Done([Newsletter<br/>Ready to Send])
    
    style Start fill:#4ade80,stroke:#22c55e,color:#000
    style Research fill:#fbbf24,stroke:#f59e0b,color:#000
    style Plan fill:#60a5fa,stroke:#3b82f6,color:#000
    style Topics fill:#c084fc,stroke:#a855f7,color:#000
    style Topic1 fill:#f472b6,stroke:#ec4899,color:#000
    style Topic2 fill:#f472b6,stroke:#ec4899,color:#000
    style Topic3 fill:#f472b6,stroke:#ec4899,color:#000
    style Write1 fill:#fb923c,stroke:#f97316,color:#000
    style Write2 fill:#fb923c,stroke:#f97316,color:#000
    style Write3 fill:#fb923c,stroke:#f97316,color:#000
    style Edit fill:#60a5fa,stroke:#3b82f6,color:#000
    style Draft fill:#c084fc,stroke:#a855f7,color:#000
    style Done fill:#4ade80,stroke:#22c55e,color:#000`}
          </pre>
      </div>
    </div>
  );
};

export default NewsletterGenerationFlowchart;