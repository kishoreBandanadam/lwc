// This file is generated as an Apex representation of the
//     corresponding sObject and its fields.
// This read-only file is used by the Apex Language Server to
//     provide code smartness, and is deleted each time you
//     refresh your sObject definitions.
// To edit your sObjects and their fields, edit the corresponding
//     .object-meta.xml and .field-meta.xml files.

global class AuthorizationFormText {
    global AuthorizationForm AuthorizationForm;
    global Id AuthorizationFormId;
    global List<AuthorizationFormConsent> AuthorizationFormText;
    global User CreatedBy;
    global Id CreatedById;
    global Datetime CreatedDate;
    global List<AuthorizationForm> DefaultAuthFormText;
    global String FullAuthorizationFormUrl;
    global List<AuthorizationFormTextHistory> Histories;
    global Id Id;
    global Boolean IsDeleted;
    global User LastModifiedBy;
    global Id LastModifiedById;
    global Datetime LastModifiedDate;
    global Datetime LastReferencedDate;
    global Datetime LastViewedDate;
    global String Locale;
    global String Name;
    global List<ProcessInstance> ProcessInstances;
    global List<ProcessInstanceHistory> ProcessSteps;
    global List<FlowRecordRelation> RelatedRecord;
    global String SummaryAuthFormText;
    global Datetime SystemModstamp;

    global AuthorizationFormText () 
    {
    }
}