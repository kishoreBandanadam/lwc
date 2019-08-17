// This file is generated as an Apex representation of the
//     corresponding sObject and its fields.
// This read-only file is used by the Apex Language Server to
//     provide code smartness, and is deleted each time you
//     refresh your sObject definitions.
// To edit your sObjects and their fields, edit the corresponding
//     .object-meta.xml and .field-meta.xml files.

global class Recommendation {
    global String AcceptanceLabel;
    global String ActionReference;
    global String Category__c;
    global User CreatedBy;
    global Id CreatedById;
    global Datetime CreatedDate;
    global String Description;
    global String ExternalId;
    global Id Id;
    global ContentAsset Image;
    global Id ImageId;
    global Boolean IsActionActive;
    global Boolean IsDeleted;
    global User LastModifiedBy;
    global Id LastModifiedById;
    global Datetime LastModifiedDate;
    global Datetime LastReferencedDate;
    global Datetime LastViewedDate;
    global String Name;
    global Network Network;
    global Id NetworkId;
    global String RejectionLabel;
    global List<FlowRecordRelation> RelatedRecord;
    global Datetime SystemModstamp;

    global Recommendation () 
    {
    }
}