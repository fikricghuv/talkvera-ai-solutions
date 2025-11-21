import { useEffect } from 'react';
import mermaid from 'mermaid';

const WhatsAppAgentFlowchart = () => {
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
    Start([User Sends<br/>Message]) --> Trigger[WAHA Trigger<br/>Receives]
    
    Trigger --> Validate[Input Validation<br/>Security Check]
    
    Validate --> ValidationResult{Input<br/>Valid?}
    
    ValidationResult -->|Invalid| SendError1[Send Error<br/>Message]
    SendError1 --> Done1([Complete])
    
    ValidationResult -->|Valid| CreateTyping[Start Typing<br/>Status]
    
    CreateTyping --> SaveUserMsg[Insert User<br/>Message]
    
    SaveUserMsg --> ProcessChat{Process<br/>Chat?}
    
    ProcessChat -->|No| SendError2[Send Error<br/>Message]
    SendError2 --> Done2([Complete])
    
    ProcessChat -->|Yes| Categorize[Categorize<br/>Chat Type]
    
    Categorize --> CategorizeResult{Category<br/>Extracted?}
    
    CategorizeResult -->|Error| SendError3[Send Error<br/>Message]
    SendError3 --> Done3([Complete])
    
    CategorizeResult -->|Success| GetPatient[Get Patient<br/>by Number]
    
    GetPatient --> PatientExists{Patient<br/>Exists?}
    
    PatientExists -->|No| InsertPatient[Insert New<br/>Patient]
    InsertPatient --> CreateSession[Create Chat<br/>Session]
    
    PatientExists -->|Yes| CheckSession[Get Latest<br/>Session]
    CheckSession --> SessionExists{Active<br/>Session?}
    
    SessionExists -->|No| CreateSession
    SessionExists -->|Yes| UseSession[Use Existing<br/>Session]
    
    CreateSession --> AIAgent[AI Agent<br/>Processes Query]
    UseSession --> AIAgent
    
    AIAgent --> AIThink{Need<br/>Tools?}
    
    AIThink -->|Query Vector| VectorSearch[Query Vector<br/>Store]
    VectorSearch --> VectorResult[Get Context]
    
    AIThink -->|Send Email| PrepareEmail[Prepare<br/>Email]
    PrepareEmail --> SendEmail[Send Email<br/>via Gmail]
    
    AIThink -->|Create Appt| PrepareAppointment[Prepare<br/>Appointment]
    PrepareAppointment --> CreateAppt[Create Google<br/>Calendar Event]
    CreateAppt --> SaveApptDB[Save Appointment]
    
    AIThink -->|Think| Think[Deep Analysis]
    Think --> ThinkResult[Analysis Result]
    
    AIThink -->|Direct| GenerateResponse[Generate<br/>Response]
    
    VectorResult --> GenerateResponse
    SendEmail --> GenerateResponse
    SaveApptDB --> GenerateResponse
    ThinkResult --> GenerateResponse
    
    GenerateResponse --> SaveBotMsg[Insert Bot<br/>Message]
    
    SaveBotMsg --> UpdateSession[Update Chat<br/>Session]
    
    UpdateSession --> UpdatePatient[Update Patient<br/>Last Session]
    
    UpdatePatient --> StopTyping[Stop Typing<br/>Status]
    
    StopTyping --> SendResponse[Send Response<br/>to WhatsApp]
    
    SendResponse --> Done4([Complete])
    
    style Start fill:#4ade80,stroke:#22c55e,color:#000
    style Trigger fill:#fbbf24,stroke:#f59e0b,color:#000
    style Validate fill:#f472b6,stroke:#ec4899,color:#000
    style ValidationResult fill:#f472b6,stroke:#ec4899,color:#000
    
    style CreateTyping fill:#60a5fa,stroke:#3b82f6,color:#000
    style SaveUserMsg fill:#60a5fa,stroke:#3b82f6,color:#000
    style ProcessChat fill:#60a5fa,stroke:#3b82f6,color:#000
    style Categorize fill:#c084fc,stroke:#a855f7,color:#000
    style CategorizeResult fill:#c084fc,stroke:#a855f7,color:#000
    
    style GetPatient fill:#fb923c,stroke:#f97316,color:#000
    style InsertPatient fill:#fb923c,stroke:#f97316,color:#000
    style CreateSession fill:#fb923c,stroke:#f97316,color:#000
    style CheckSession fill:#fb923c,stroke:#f97316,color:#000
    style SessionExists fill:#fb923c,stroke:#f97316,color:#000
    style UseSession fill:#fb923c,stroke:#f97316,color:#000
    style PatientExists fill:#fb923c,stroke:#f97316,color:#000
    
    style AIAgent fill:#4ade80,stroke:#22c55e,color:#000
    style AIThink fill:#4ade80,stroke:#22c55e,color:#000
    
    style VectorSearch fill:#c084fc,stroke:#a855f7,color:#000
    style VectorResult fill:#c084fc,stroke:#a855f7,color:#000
    style PrepareEmail fill:#c084fc,stroke:#a855f7,color:#000
    style SendEmail fill:#c084fc,stroke:#a855f7,color:#000
    style PrepareAppointment fill:#c084fc,stroke:#a855f7,color:#000
    style CreateAppt fill:#c084fc,stroke:#a855f7,color:#000
    style SaveApptDB fill:#c084fc,stroke:#a855f7,color:#000
    style Think fill:#c084fc,stroke:#a855f7,color:#000
    style ThinkResult fill:#c084fc,stroke:#a855f7,color:#000
    
    style GenerateResponse fill:#f472b6,stroke:#ec4899,color:#000
    style SaveBotMsg fill:#60a5fa,stroke:#3b82f6,color:#000
    style UpdateSession fill:#60a5fa,stroke:#3b82f6,color:#000
    style UpdatePatient fill:#60a5fa,stroke:#3b82f6,color:#000
    style StopTyping fill:#60a5fa,stroke:#3b82f6,color:#000
    style SendResponse fill:#fb923c,stroke:#f97316,color:#000
    
    style SendError1 fill:#ef4444,stroke:#dc2626,color:#fff
    style SendError2 fill:#ef4444,stroke:#dc2626,color:#fff
    style SendError3 fill:#ef4444,stroke:#dc2626,color:#fff
    
    style Done1 fill:#4ade80,stroke:#22c55e,color:#000
    style Done2 fill:#4ade80,stroke:#22c55e,color:#000
    style Done3 fill:#4ade80,stroke:#22c55e,color:#000
    style Done4 fill:#4ade80,stroke:#22c55e,color:#000`}
        </pre>
      </div>
    </div>
  );
};

export default WhatsAppAgentFlowchart;