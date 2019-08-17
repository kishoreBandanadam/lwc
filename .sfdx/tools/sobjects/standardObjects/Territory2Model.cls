// This file is generated as an Apex representation of the
//     corresponding sObject and its fields.
// This read-only file is used by the Apex Language Server to
//     provide code smartness, and is deleted each time you
//     refresh your sObject definitions.
// To edit your sObjects and their fields, edit the corresponding
//     .object-meta.xml and .field-meta.xml files.

global class Territory2Model {
    global Datetime ActivatedDate;
    global List<AttachedContentDocument> AttachedContentDocuments;
    global List<CombinedAttachment> CombinedAttachments;
    global List<ContentDocumentLink> ContentDocumentLinks;
    global User CreatedBy;
    global Id CreatedById;
    global Datetime CreatedDate;
    global Datetime DeactivatedDate;
    global String Description;
    global String DeveloperName;
    global List<EntitySubscription> FeedSubscriptionsForEntity;
    global List<Territory2ModelFeed> Feeds;
    global List<ContentVersion> FirstPublishLocation;
    global List<Territory2ModelHistory> Histories;
    global Id Id;
    global Boolean IsCloneSource;
    global Boolean IsDeleted;
    global User LastModifiedBy;
    global Id LastModifiedById;
    global Datetime LastModifiedDate;
    global Datetime LastOppTerrAssignEndDate;
    global Datetime LastRunRulesEndDate;
    global String Name;
    global List<ObjectTerritory2AssignmentRule> ObjectTerritory2AssignmentRules;
    global List<FeedComment> Parent;
    global List<NetworkActivityAudit> ParentEntities;
    global List<FlowRecordRelation> RelatedRecord;
    global String State;
    global Datetime SystemModstamp;
    global List<Territory2> Territory2s;

    global Territory2Model () 
    {
    }
}