import { useEffect } from 'react';
import mermaid from 'mermaid';

const TalkveraFlowchart = () => {
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
    Start([User Sends<br/>Telegram<br/>Message]) --> LogExec[Log Execution<br/>to Supabase]
    
    LogExec --> Agent[Talkvera AI Agent<br/>Receives Request]
    
    Agent --> RequestType{Request<br/>Type?}
    
    %% Transaction Management Path
    RequestType -->|Transaction<br/>Management| TransType{Transaction<br/>Action?}
    
    TransType -->|Get<br/>Transactions| GetTrans[Get Data<br/>Transactions]
    GetTrans --> FilterTrans{Apply<br/>Filters?}
    FilterTrans -->|Yes| FilterData[Filter by:<br/>Type, Category,<br/>Date]
    FilterTrans -->|No| ShowTrans[Display<br/>Transaction<br/>Data]
    FilterData --> ShowTrans
    
    TransType -->|Create<br/>Transaction| ParseInput[Parse Amount,<br/>Type, Category]
    ParseInput --> ValidateTrans{Valid<br/>Transaction?}
    ValidateTrans -->|No| AskCorrectTrans[Request<br/>Correct Info]
    AskCorrectTrans --> ParseInput
    ValidateTrans -->|Yes| GenID[Generate<br/>Transaction ID]
    GenID --> CreateTrans[Create Data<br/>Transaction]
    CreateTrans --> NotifyTrans1[Send<br/>Confirmation]
    
    TransType -->|Update<br/>Transaction| GetTransUpdate[Get Current<br/>Transaction]
    GetTransUpdate --> ShowCurrent1[Show Current<br/>Info]
    ShowCurrent1 --> AskTransChanges[Ask What<br/>to Update]
    AskTransChanges --> UpdateTrans[Update Data<br/>Transaction]
    UpdateTrans --> NotifyTrans2[Send<br/>Confirmation]
    
    TransType -->|Delete<br/>Transaction| GetTransDelete[Get<br/>Transaction]
    GetTransDelete --> ConfirmDelete1{Confirm<br/>Deletion?}
    ConfirmDelete1 -->|No| Done1
    ConfirmDelete1 -->|Yes| DeleteTrans[Delete Data<br/>Transaction]
    DeleteTrans --> NotifyTrans3[Send<br/>Confirmation]
    
    %% Content Management Path
    RequestType -->|Content<br/>Management| DelegateContent[Delegate to<br/>Content Planner<br/>Agent]
    
    DelegateContent --> ContentType{Content<br/>Action?}
    
    ContentType -->|Generate<br/>Content| GenContentID[Generate<br/>Content ID<br/>TKTK-YYYYMMDD-XXX]
    GenContentID --> CreateScript[Create:<br/>Title, Hook,<br/>Script, Caption]
    CreateScript --> CreateContent[Create Data<br/>Konten]
    CreateContent --> NotifyContent1[Send<br/>Content<br/>Details]
    
    ContentType -->|Get<br/>Content| GetContent[Get Data<br/>Contents]
    GetContent --> ShowContent[Display<br/>Content List]
    
    ContentType -->|Update<br/>Content| GetContentUpdate[Get Content<br/>by ID]
    GetContentUpdate --> ShowCurrentContent[Show Current<br/>Content]
    ShowCurrentContent --> AskContentChanges[Ask What<br/>to Update]
    AskContentChanges --> UpdateContent[Update Data<br/>Konten]
    UpdateContent --> NotifyContent2[Send<br/>Confirmation]
    
    ContentType -->|Delete<br/>Content| GetContentDelete[Get Content<br/>by ID]
    GetContentDelete --> ConfirmDelete2{Confirm<br/>Deletion?}
    ConfirmDelete2 -->|No| Done1
    ConfirmDelete2 -->|Yes| DeleteContent[Delete Data<br/>Konten]
    DeleteContent --> NotifyContent3[Send<br/>Confirmation]
    
    ContentType -->|Analyze<br/>Performance| GetContentPerf[Get Content<br/>Data]
    GetContentPerf --> AnalyzeMetrics[Analyze:<br/>Views, Likes,<br/>Engagement]
    AnalyzeMetrics --> ShowInsights[Display<br/>Performance<br/>Insights]
    
    %% CRM Management Path
    RequestType -->|CRM<br/>Management| CRMType{CRM<br/>Action?}
    
    CRMType -->|Get<br/>Leads| GetCRM[Get Data<br/>CRM]
    GetCRM --> ShowLeads[Display<br/>Lead Data]
    
    CRMType -->|Create<br/>Lead| ParseLead[Parse:<br/>Name, Email,<br/>Company, Goal]
    ParseLead --> ValidateEmail{Valid<br/>Email?}
    ValidateEmail -->|No| AskCorrectEmail[Request<br/>Correct Email]
    AskCorrectEmail --> ParseLead
    ValidateEmail -->|Yes| GenLeadID[Generate<br/>UUID]
    GenLeadID --> CreateCRM[Create Data<br/>CRM]
    CreateCRM --> NotifyCRM1[Send<br/>Confirmation]
    
    CRMType -->|Update<br/>Lead| GetCRMUpdate[Get Current<br/>Lead Data]
    GetCRMUpdate --> ShowCurrentLead[Show Current<br/>Info]
    ShowCurrentLead --> AskCRMChanges[Ask What<br/>to Update]
    AskCRMChanges --> UpdateCRM[Update Data<br/>CRM]
    UpdateCRM --> NotifyCRM2[Send<br/>Confirmation]
    
    CRMType -->|Delete<br/>Lead| GetCRMDelete[Get Lead<br/>Data]
    GetCRMDelete --> ConfirmDelete3{Confirm<br/>Deletion?}
    ConfirmDelete3 -->|No| Done1
    ConfirmDelete3 -->|Yes| DeleteCRM[Delete Data<br/>CRM]
    DeleteCRM --> NotifyCRM3[Send<br/>Confirmation]
    
    %% End Points
    NotifyTrans1 --> SendTelegram[Send Response<br/>via Telegram]
    NotifyTrans2 --> SendTelegram
    NotifyTrans3 --> SendTelegram
    ShowTrans --> SendTelegram
    NotifyContent1 --> SendTelegram
    NotifyContent2 --> SendTelegram
    NotifyContent3 --> SendTelegram
    ShowContent --> SendTelegram
    ShowInsights --> SendTelegram
    NotifyCRM1 --> SendTelegram
    NotifyCRM2 --> SendTelegram
    NotifyCRM3 --> SendTelegram
    ShowLeads --> SendTelegram
    
    SendTelegram --> Done1([Complete])
    
    style Start fill:#4ade80,stroke:#22c55e,color:#000
    style LogExec fill:#fbbf24,stroke:#f59e0b,color:#000
    style Agent fill:#fbbf24,stroke:#f59e0b,color:#000
    style DelegateContent fill:#fbbf24,stroke:#f59e0b,color:#000
    
    style GetTrans fill:#60a5fa,stroke:#3b82f6,color:#000
    style FilterData fill:#60a5fa,stroke:#3b82f6,color:#000
    style ShowTrans fill:#60a5fa,stroke:#3b82f6,color:#000
    style ParseInput fill:#60a5fa,stroke:#3b82f6,color:#000
    style GenID fill:#60a5fa,stroke:#3b82f6,color:#000
    style CreateTrans fill:#60a5fa,stroke:#3b82f6,color:#000
    style GetTransUpdate fill:#60a5fa,stroke:#3b82f6,color:#000
    style ShowCurrent1 fill:#60a5fa,stroke:#3b82f6,color:#000
    style AskTransChanges fill:#60a5fa,stroke:#3b82f6,color:#000
    style UpdateTrans fill:#60a5fa,stroke:#3b82f6,color:#000
    style GetTransDelete fill:#60a5fa,stroke:#3b82f6,color:#000
    
    style GenContentID fill:#c084fc,stroke:#a855f7,color:#000
    style CreateScript fill:#c084fc,stroke:#a855f7,color:#000
    style CreateContent fill:#c084fc,stroke:#a855f7,color:#000
    style GetContent fill:#c084fc,stroke:#a855f7,color:#000
    style ShowContent fill:#c084fc,stroke:#a855f7,color:#000
    style GetContentUpdate fill:#c084fc,stroke:#a855f7,color:#000
    style ShowCurrentContent fill:#c084fc,stroke:#a855f7,color:#000
    style AskContentChanges fill:#c084fc,stroke:#a855f7,color:#000
    style UpdateContent fill:#c084fc,stroke:#a855f7,color:#000
    style GetContentDelete fill:#c084fc,stroke:#a855f7,color:#000
    style GetContentPerf fill:#c084fc,stroke:#a855f7,color:#000
    style AnalyzeMetrics fill:#c084fc,stroke:#a855f7,color:#000
    style ShowInsights fill:#c084fc,stroke:#a855f7,color:#000
    
    style ParseLead fill:#34d399,stroke:#10b981,color:#000
    style GenLeadID fill:#34d399,stroke:#10b981,color:#000
    style CreateCRM fill:#34d399,stroke:#10b981,color:#000
    style GetCRM fill:#34d399,stroke:#10b981,color:#000
    style ShowLeads fill:#34d399,stroke:#10b981,color:#000
    style GetCRMUpdate fill:#34d399,stroke:#10b981,color:#000
    style ShowCurrentLead fill:#34d399,stroke:#10b981,color:#000
    style AskCRMChanges fill:#34d399,stroke:#10b981,color:#000
    style UpdateCRM fill:#34d399,stroke:#10b981,color:#000
    style GetCRMDelete fill:#34d399,stroke:#10b981,color:#000
    
    style DeleteTrans fill:#ef4444,stroke:#dc2626,color:#fff
    style DeleteContent fill:#ef4444,stroke:#dc2626,color:#fff
    style DeleteCRM fill:#ef4444,stroke:#dc2626,color:#fff
    
    style NotifyTrans1 fill:#fb923c,stroke:#f97316,color:#000
    style NotifyTrans2 fill:#fb923c,stroke:#f97316,color:#000
    style NotifyTrans3 fill:#fb923c,stroke:#f97316,color:#000
    style NotifyContent1 fill:#fb923c,stroke:#f97316,color:#000
    style NotifyContent2 fill:#fb923c,stroke:#f97316,color:#000
    style NotifyContent3 fill:#fb923c,stroke:#f97316,color:#000
    style NotifyCRM1 fill:#fb923c,stroke:#f97316,color:#000
    style NotifyCRM2 fill:#fb923c,stroke:#f97316,color:#000
    style NotifyCRM3 fill:#fb923c,stroke:#f97316,color:#000
    
    style SendTelegram fill:#fb923c,stroke:#f97316,color:#000
    style Done1 fill:#4ade80,stroke:#22c55e,color:#000`}
        </pre>
      </div>
    </div>
  );
};

export default TalkveraFlowchart;