// This file is generated as an Apex representation of the
//     corresponding sObject and its fields.
// This read-only file is used by the Apex Language Server to
//     provide code smartness, and is deleted each time you
//     refresh your sObject definitions.
// To edit your sObjects and their fields, edit the corresponding
//     .object-meta.xml and .field-meta.xml files.

global class AuthorizationForm {
    global List<AuthorizationFormDataUse> AuthorizationForm;
    global List<AuthorizationFormText> AuthorizationForms;
    global User CreatedBy;
    global Id CreatedById;
    global Datetime CreatedDate;
    global AuthorizationFormText DefaultAuthFormText;
    global Id DefaultAuthFormTextId;
    global Date EffectiveFromDate;
    global Date EffectiveToDate;
    global List<AuthorizationFormHistory> Histories;
    global Id Id;
    global Boolean IsDeleted;
    global User LastModifiedBy;
    global Id LastModifiedById;
    global Datetime LastModifiedDate;
    global Datetime LastReferencedDate;
    global Datetime LastViewedDate;
    global String Name;
    global SObject Owner;
    global Id OwnerId;
    global List<ProcessInstance> ProcessInstances;
    global List<ProcessInstanceHistory> ProcessSteps;
    global List<FlowRecordRelation> RelatedRecord;
    global String RevisionNumber;
    global Datetime SystemModstamp;

    global AuthorizationForm () 
    {
    }
}