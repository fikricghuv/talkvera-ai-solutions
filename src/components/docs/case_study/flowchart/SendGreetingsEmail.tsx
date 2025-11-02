import { useEffect } from 'react';
import mermaid from 'mermaid';

const SendGreetingFlowchart = () => {
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
    Start([Customer Submits<br/>Consultation Form]) --> Receive[Receive<br/>Contact Info]
    
    Receive --> Validate{Valid<br/>Submission?}
    Validate -->|No| Error([Reject])
    
    Validate -->|Yes| Store[Store Customer<br/>Information]
    Store --> Generate[Generate Personalized<br/>Greeting Message]
    
    Generate --> Review[Review Customer<br/>Needs & Profile]
    Review --> Compose[Compose Welcome<br/>Email]
    
    Compose --> Send[Send Greeting<br/>Email]
    
    Send --> Confirm{Email<br/>Delivered?}
    Confirm -->|No| Failed([Delivery Failed])
    
    Confirm -->|Yes| Update[Update Customer<br/>Status]
    Update --> Done([Consultation<br/>Initiated])
    
    style Start fill:#4ade80,stroke:#22c55e,color:#000
    style Receive fill:#fbbf24,stroke:#f59e0b,color:#000
    style Store fill:#60a5fa,stroke:#3b82f6,color:#000
    style Generate fill:#c084fc,stroke:#a855f7,color:#000
    style Compose fill:#f472b6,stroke:#ec4899,color:#000
    style Send fill:#fb923c,stroke:#f97316,color:#000
    style Update fill:#60a5fa,stroke:#3b82f6,color:#000
    style Done fill:#4ade80,stroke:#22c55e,color:#000
    style Error fill:#ef4444,stroke:#dc2626,color:#fff
    style Failed fill:#ef4444,stroke:#dc2626,color:#fff`}
          </pre>
      </div>
    </div>
  );
};

export default SendGreetingFlowchart;