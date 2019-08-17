// This file is generated as an Apex representation of the
//     corresponding sObject and its fields.
// This read-only file is used by the Apex Language Server to
//     provide code smartness, and is deleted each time you
//     refresh your sObject definitions.
// To edit your sObjects and their fields, edit the corresponding
//     .object-meta.xml and .field-meta.xml files.

global class ActiveScratchOrg {
    global List<AttachedContentDocument> AttachedContentDocuments;
    global List<CombinedAttachment> CombinedAttachments;
    global List<ContentDocumentLink> ContentDocumentLinks;
    global User CreatedBy;
    global Id CreatedById;
    global Datetime CreatedDate;
    global String Description;
    global String Edition;
    global Date ExpirationDate;
    global String Features;
    global List<EntitySubscription> FeedSubscriptionsForEntity;
    global List<ActiveScratchOrgFeed> Feeds;
    global List<ContentVersion> FirstPublishLocation;
    global Boolean HasSampleData;
    global List<ActiveScratchOrgHistory> Histories;
    global Id Id;
    global Boolean IsDeleted;
    global Date LastLoginDate;
    global User LastModifiedBy;
    global Id LastModifiedById;
    global Datetime LastModifiedDate;
    global Datetime LastReferencedDate;
    global Datetime LastViewedDate;
    global String Name;
    global String Namespace;
    global String OrgName;
    global SObject Owner;
    global Id OwnerId;
    global List<FeedComment> Parent;
    global List<NetworkActivityAudit> ParentEntities;
    global List<ProcessInstance> ProcessInstances;
    global List<ProcessInstanceHistory> ProcessSteps;
    global String ScratchOrg;
    global ScratchOrgInfo ScratchOrgInfo;
    global Id ScratchOrgInfoId;
    global String SignupEmail;
    global String SignupInstance;
    global Integer SignupTrialDays;
    global String SignupUsername;
    global Datetime SystemModstamp;

    global ActiveScratchOrg () 
    {
    }
}