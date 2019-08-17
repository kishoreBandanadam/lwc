// This file is generated as an Apex representation of the
//     corresponding sObject and its fields.
// This read-only file is used by the Apex Language Server to
//     provide code smartness, and is deleted each time you
//     refresh your sObject definitions.
// To edit your sObjects and their fields, edit the corresponding
//     .object-meta.xml and .field-meta.xml files.

global class ScratchOrgInfo {
    global String AdminEmail;
    global List<AttachedContentDocument> AttachedContentDocuments;
    global String AuthCode;
    global List<CombinedAttachment> CombinedAttachments;
    global String ConnectedAppCallbackUrl;
    global String ConnectedAppConsumerKey;
    global List<ContentDocumentLink> ContentDocumentLinks;
    global String Country;
    global User CreatedBy;
    global Id CreatedById;
    global Datetime CreatedDate;
    global String DeletedBy;
    global Date DeletedDate;
    global String Description;
    global Integer DurationDays;
    global String Edition;
    global String ErrorCode;
    global Date ExpirationDate;
    global String Features;
    global List<EntitySubscription> FeedSubscriptionsForEntity;
    global List<ScratchOrgInfoFeed> Feeds;
    global List<ContentVersion> FirstPublishLocation;
    global Boolean HasSampleData;
    global List<ScratchOrgInfoHistory> Histories;
    global Id Id;
    global String Instance;
    global Boolean IsDeleted;
    global String Language;
    global Date LastLoginDate;
    global User LastModifiedBy;
    global Id LastModifiedById;
    global Datetime LastModifiedDate;
    global Datetime LastReferencedDate;
    global Datetime LastViewedDate;
    global String LoginUrl;
    global String Name;
    global String Namespace;
    global String OrgName;
    global SObject Owner;
    global Id OwnerId;
    global String Package2AncestorIds;
    global List<FeedComment> Parent;
    global List<NetworkActivityAudit> ParentEntities;
    global List<ProcessInstance> ProcessInstances;
    global List<ProcessInstanceHistory> ProcessSteps;
    global String Release;
    global String ScratchOrg;
    global List<ActiveScratchOrg> ScratchOrgInfo;
    global String SignupCountry;
    global String SignupEmail;
    global String SignupInstance;
    global String SignupLanguage;
    global Integer SignupTrialDays;
    global String SignupUsername;
    global String Status;
    global Datetime SystemModstamp;
    global String Username;

    global ScratchOrgInfo () 
    {
    }
}