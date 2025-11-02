import { useEffect } from 'react';
import mermaid from 'mermaid';

const AppointmentAgentFlowchart = () => {
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
    Start([User Contacts<br/>via Chat]) --> Agent[Appointment Agent<br/>Receives Request]
    
    Agent --> RequestType{Request<br/>Type?}
    
    %% Appointment Management Path
    RequestType -->|Create<br/>Appointment| CollectDetails[Collect Details:<br/>Date, Time,<br/>Purpose]
    CollectDetails --> ValidateTime{Time Within<br/>8 AM - 5 PM?}
    
    ValidateTime -->|No| SuggestTime[Suggest<br/>Alternative<br/>Time]
    SuggestTime --> CollectDetails
    
    ValidateTime -->|Yes| ConfirmAppt[Confirm<br/>Details]
    ConfirmAppt --> CreateAppt[Create<br/>Appointment]
    CreateAppt --> NotifySuccess1[Send<br/>Confirmation]
    
    %% Update Appointment Path
    RequestType -->|Update<br/>Appointment| GetAppt1[Get Current<br/>Appointment<br/>Details]
    GetAppt1 --> ShowCurrent1[Show Current<br/>Information]
    ShowCurrent1 --> AskChanges[Ask What<br/>to Change]
    AskChanges --> ConfirmUpdate[Confirm<br/>New Details]
    ConfirmUpdate --> UpdateAppt[Update<br/>Appointment]
    UpdateAppt --> NotifySuccess2[Send<br/>Confirmation]
    
    %% Cancel Appointment Path
    RequestType -->|Cancel<br/>Appointment| GetAppt2[Get<br/>Appointment<br/>Details]
    GetAppt2 --> ShowCurrent2[Show<br/>Appointment<br/>Info]
    ShowCurrent2 --> ConfirmCancel{Confirm<br/>Cancellation?}
    
    ConfirmCancel -->|No| Done1
    ConfirmCancel -->|Yes| CancelAppt[Cancel<br/>Appointment]
    CancelAppt --> NotifySuccess3[Send<br/>Confirmation]
    
    %% Get Appointment Path
    RequestType -->|View<br/>Appointments| GetAppt3[Retrieve<br/>Appointments]
    GetAppt3 --> DisplayAppts[Display<br/>Schedule]
    
    %% User Information Management Path
    RequestType -->|Manage<br/>Profile| ProfileAction{Profile<br/>Action?}
    
    ProfileAction -->|Create<br/>Profile| CollectProfile[Collect:<br/>Name &<br/>Email]
    CollectProfile --> ValidateEmail{Email<br/>Valid?}
    
    ValidateEmail -->|No| AskCorrectEmail[Request<br/>Correct<br/>Email]
    AskCorrectEmail --> CollectProfile
    
    ValidateEmail -->|Yes| SaveUser[Save User<br/>Information]
    SaveUser --> NotifySuccess4[Send<br/>Confirmation]
    
    ProfileAction -->|Update<br/>Profile| GetUser[Get Current<br/>User Info]
    GetUser --> ShowProfile[Show Current<br/>Profile]
    ShowProfile --> AskProfileChanges[Ask What<br/>to Update]
    AskProfileChanges --> UpdateUser[Update User<br/>Information]
    UpdateUser --> NotifySuccess5[Send<br/>Confirmation]
    
    ProfileAction -->|View<br/>Profile| GetUser2[Retrieve<br/>User Info]
    GetUser2 --> DisplayProfile[Display<br/>Profile]
    
    %% End Points
    NotifySuccess1 --> Done1
    NotifySuccess2 --> Done1
    NotifySuccess3 --> Done1
    NotifySuccess4 --> Done1
    NotifySuccess5 --> Done1
    DisplayAppts --> Done1
    DisplayProfile --> Done1
    
    Done1([Complete])
    
    style Start fill:#4ade80,stroke:#22c55e,color:#000
    style Agent fill:#fbbf24,stroke:#f59e0b,color:#000
    style CollectDetails fill:#60a5fa,stroke:#3b82f6,color:#000
    style SuggestTime fill:#60a5fa,stroke:#3b82f6,color:#000
    style ConfirmAppt fill:#60a5fa,stroke:#3b82f6,color:#000
    style CreateAppt fill:#60a5fa,stroke:#3b82f6,color:#000
    style GetAppt1 fill:#60a5fa,stroke:#3b82f6,color:#000
    style ShowCurrent1 fill:#60a5fa,stroke:#3b82f6,color:#000
    style AskChanges fill:#60a5fa,stroke:#3b82f6,color:#000
    style ConfirmUpdate fill:#60a5fa,stroke:#3b82f6,color:#000
    style UpdateAppt fill:#60a5fa,stroke:#3b82f6,color:#000
    style GetAppt2 fill:#60a5fa,stroke:#3b82f6,color:#000
    style ShowCurrent2 fill:#60a5fa,stroke:#3b82f6,color:#000
    style CancelAppt fill:#ef4444,stroke:#dc2626,color:#fff
    style GetAppt3 fill:#60a5fa,stroke:#3b82f6,color:#000
    style DisplayAppts fill:#60a5fa,stroke:#3b82f6,color:#000
    style CollectProfile fill:#c084fc,stroke:#a855f7,color:#000
    style AskCorrectEmail fill:#c084fc,stroke:#a855f7,color:#000
    style SaveUser fill:#c084fc,stroke:#a855f7,color:#000
    style GetUser fill:#c084fc,stroke:#a855f7,color:#000
    style ShowProfile fill:#c084fc,stroke:#a855f7,color:#000
    style AskProfileChanges fill:#c084fc,stroke:#a855f7,color:#000
    style UpdateUser fill:#c084fc,stroke:#a855f7,color:#000
    style GetUser2 fill:#c084fc,stroke:#a855f7,color:#000
    style DisplayProfile fill:#c084fc,stroke:#a855f7,color:#000
    style NotifySuccess1 fill:#fb923c,stroke:#f97316,color:#000
    style NotifySuccess2 fill:#fb923c,stroke:#f97316,color:#000
    style NotifySuccess3 fill:#fb923c,stroke:#f97316,color:#000
    style NotifySuccess4 fill:#fb923c,stroke:#f97316,color:#000
    style NotifySuccess5 fill:#fb923c,stroke:#f97316,color:#000
    style Done1 fill:#4ade80,stroke:#22c55e,color:#000`}
        </pre>
      </div>
    </div>
  );
};

export default AppointmentAgentFlowchart;