// This file is generated as an Apex representation of the
//     corresponding sObject and its fields.
// This read-only file is used by the Apex Language Server to
//     provide code smartness, and is deleted each time you
//     refresh your sObject definitions.
// To edit your sObjects and their fields, edit the corresponding
//     .object-meta.xml and .field-meta.xml files.

global class ContactPointTypeConsent {
    global String CaptureContactPointType;
    global Datetime CaptureDate;
    global String CaptureSource;
    global String ContactPointType;
    global User CreatedBy;
    global Id CreatedById;
    global Datetime CreatedDate;
    global DataUsePurpose DataUsePurpose;
    global Id DataUsePurposeId;
    global Datetime DoubleConsentCaptureDate;
    global Datetime EffectiveFrom;
    global Datetime EffectiveTo;
    global List<ContactPointTypeConsentHistory> Histories;
    global Id Id;
    global Boolean IsDeleted;
    global User LastModifiedBy;
    global Id LastModifiedById;
    global Datetime LastModifiedDate;
    global Datetime LastReferencedDate;
    global Datetime LastViewedDate;
    global String Name;
    global Individual Party;
    global Id PartyId;
    global String PrivacyConsentStatus;
    global List<ProcessInstance> ProcessInstances;
    global List<ProcessInstanceHistory> ProcessSteps;
    global List<FlowRecordRelation> RelatedRecord;
    global Datetime SystemModstamp;

    global ContactPointTypeConsent () 
    {
    }
}