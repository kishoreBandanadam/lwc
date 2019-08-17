// This file is generated as an Apex representation of the
//     corresponding sObject and its fields.
// This read-only file is used by the Apex Language Server to
//     provide code smartness, and is deleted each time you
//     refresh your sObject definitions.
// To edit your sObjects and their fields, edit the corresponding
//     .object-meta.xml and .field-meta.xml files.

global class ConsumptionSchedule {
    global List<AttachedContentDocument> AttachedContentDocuments;
    global Integer BillingTerm;
    global String BillingTermUnit;
    global List<CombinedAttachment> CombinedAttachments;
    global List<ConsumptionRate> ConsumptionRates;
    global List<ContentDocumentLink> ContentDocumentLinks;
    global User CreatedBy;
    global Id CreatedById;
    global Datetime CreatedDate;
    global String Description;
    global List<EntitySubscription> FeedSubscriptionsForEntity;
    global List<ConsumptionScheduleFeed> Feeds;
    global List<ContentVersion> FirstPublishLocation;
    global List<ConsumptionScheduleHistory> Histories;
    global Id Id;
    global Boolean IsActive;
    global Boolean IsDeleted;
    global User LastModifiedBy;
    global Id LastModifiedById;
    global Datetime LastModifiedDate;
    global Datetime LastReferencedDate;
    global Datetime LastViewedDate;
    global String MatchingAttribute;
    global String Name;
    global Integer NumberOfRates;
    global SObject Owner;
    global Id OwnerId;
    global List<FeedItem> Parent;
    global List<NetworkActivityAudit> ParentEntities;
    global List<ProcessInstance> ProcessInstances;
    global List<ProcessInstanceHistory> ProcessSteps;
    global List<ProductConsumptionSchedule> ProductConsumptionSchedules;
    global String RatingMethod;
    global List<FlowRecordRelation> RelatedRecord;
    global Datetime SystemModstamp;
    global String Type;
    global String UnitOfMeasure;

    global ConsumptionSchedule () 
    {
    }
}