// This file is generated as an Apex representation of the
//     corresponding sObject and its fields.
// This read-only file is used by the Apex Language Server to
//     provide code smartness, and is deleted each time you
//     refresh your sObject definitions.
// To edit your sObjects and their fields, edit the corresponding
//     .object-meta.xml and .field-meta.xml files.

global class NetworkActivityAudit {
    global String Action;
    global User CreatedBy;
    global Id CreatedById;
    global Datetime CreatedDate;
    global String Description;
    global SObject Entity;
    global User EntityCreatedBy;
    global Id EntityCreatedById;
    global Id EntityId;
    global String EntityType;
    global Id Id;
    global Boolean IsDeleted;
    global User LastModifiedBy;
    global Id LastModifiedById;
    global Datetime LastModifiedDate;
    global String Name;
    global Network Network;
    global Id NetworkId;
    global SObject ParentEntity;
    global Id ParentEntityId;
    global String ParentEntityType;
    global List<FlowRecordRelation> RelatedRecord;
    global Datetime SystemModstamp;

    global NetworkActivityAudit () 
    {
    }
}