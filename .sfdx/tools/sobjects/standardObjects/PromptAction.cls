// This file is generated as an Apex representation of the
//     corresponding sObject and its fields.
// This read-only file is used by the Apex Language Server to
//     provide code smartness, and is deleted each time you
//     refresh your sObject definitions.
// To edit your sObjects and their fields, edit the corresponding
//     .object-meta.xml and .field-meta.xml files.

global class PromptAction {
    global User CreatedBy;
    global Id CreatedById;
    global Datetime CreatedDate;
    global Id Id;
    global Boolean IsDeleted;
    global Datetime LastDisplayDate;
    global User LastModifiedBy;
    global Id LastModifiedById;
    global Datetime LastModifiedDate;
    global String LastResult;
    global Datetime LastResultDate;
    global String Name;
    global SObject Owner;
    global Id OwnerId;
    global List<ProcessInstance> ProcessInstances;
    global List<ProcessInstanceHistory> ProcessSteps;
    global PromptVersion PromptVersion;
    global Id PromptVersionId;
    global List<FlowRecordRelation> RelatedRecord;
    global Datetime SystemModstamp;
    global Integer TimesActionTaken;
    global Integer TimesDismissed;
    global Integer TimesDisplayed;
    global User User;
    global Id UserId;

    global PromptAction () 
    {
    }
}