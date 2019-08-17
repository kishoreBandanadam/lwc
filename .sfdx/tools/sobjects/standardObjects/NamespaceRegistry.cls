// This file is generated as an Apex representation of the
//     corresponding sObject and its fields.
// This read-only file is used by the Apex Language Server to
//     provide code smartness, and is deleted each time you
//     refresh your sObject definitions.
// To edit your sObjects and their fields, edit the corresponding
//     .object-meta.xml and .field-meta.xml files.

global class NamespaceRegistry {
    global List<AttachedContentDocument> AttachedContentDocuments;
    global List<CombinedAttachment> CombinedAttachments;
    global List<ContentDocumentLink> ContentDocumentLinks;
    global User CreatedBy;
    global Id CreatedById;
    global Datetime CreatedDate;
    global List<EntitySubscription> FeedSubscriptionsForEntity;
    global List<NamespaceRegistryFeed> Feeds;
    global List<ContentVersion> FirstPublishLocation;
    global List<NamespaceRegistryHistory> Histories;
    global Id Id;
    global Boolean IsDeleted;
    global User LastModifiedBy;
    global Id LastModifiedById;
    global Datetime LastModifiedDate;
    global String Name;
    global String NamespaceOrg;
    global String NamespacePrefix;
    global List<FeedComment> Parent;
    global List<NetworkActivityAudit> ParentEntities;
    global Datetime SystemModstamp;

    global NamespaceRegistry () 
    {
    }
}