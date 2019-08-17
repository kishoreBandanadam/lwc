// This file is generated as an Apex representation of the
//     corresponding sObject and its fields.
// This read-only file is used by the Apex Language Server to
//     provide code smartness, and is deleted each time you
//     refresh your sObject definitions.
// To edit your sObjects and their fields, edit the corresponding
//     .object-meta.xml and .field-meta.xml files.

global class LiveChatTranscriptChangeEvent {
    global Account Account;
    global Id AccountId;
    global Integer AverageResponseTimeOperator;
    global Integer AverageResponseTimeVisitor;
    global String Body;
    global String Browser;
    global String BrowserLanguage;
    global Case Case;
    global Id CaseId;
    global Object ChangeEventHeader;
    global String ChatKey;
    global Contact Contact;
    global Id ContactId;
    global User CreatedBy;
    global Id CreatedById;
    global Datetime CreatedDate;
    global Datetime EndTime;
    global String EndedBy;
    global Id Id;
    global String IpAddress;
    global Boolean IsChatbotSession;
    global User LastModifiedBy;
    global Id LastModifiedById;
    global Datetime LastModifiedDate;
    global Lead Lead;
    global Id LeadId;
    global LiveChatButton LiveChatButton;
    global Id LiveChatButtonId;
    global LiveChatDeployment LiveChatDeployment;
    global Id LiveChatDeploymentId;
    global LiveChatVisitor LiveChatVisitor;
    global Id LiveChatVisitorId;
    global String Location;
    global Integer MaxResponseTimeOperator;
    global Integer MaxResponseTimeVisitor;
    global String Name;
    global Integer OperatorMessageCount;
    global User Owner;
    global Id OwnerId;
    global String Platform;
    global String ReferrerUri;
    global String ReplayId;
    global Datetime RequestTime;
    global String ScreenResolution;
    global Skill Skill;
    global Id SkillId;
    global Datetime StartTime;
    global String Status;
    global String SupervisorTranscriptBody;
    global String UserAgent;
    global Integer VisitorMessageCount;
    global String VisitorNetwork;

    global LiveChatTranscriptChangeEvent () 
    {
    }
}