// This file is generated as an Apex representation of the
//     corresponding sObject and its fields.
// This read-only file is used by the Apex Language Server to
//     provide code smartness, and is deleted each time you
//     refresh your sObject definitions.
// To edit your sObjects and their fields, edit the corresponding
//     .object-meta.xml and .field-meta.xml files.

global class Network {
    global String AllowedExtensions;
    global List<UserAppMenuCustomization> Application;
    global List<AttachedContentDocument> AttachedContentDocuments;
    global EmailTemplate CaseCommentEmailTemplate;
    global Id CaseCommentEmailTemplateId;
    global EmailTemplate ChangePasswordEmailTemplate;
    global Id ChangePasswordEmailTemplateId;
    global List<CombinedAttachment> CombinedAttachments;
    global List<Audience> Container;
    global List<ContentDocumentLink> ContentDocumentLinks;
    global User CreatedBy;
    global Id CreatedById;
    global Datetime CreatedDate;
    global List<CustomBrand> CustomBrands;
    global String Description;
    global Document EmailFooterLogo;
    global Id EmailFooterLogoId;
    global String EmailFooterText;
    global String EmailSenderAddress;
    global String EmailSenderName;
    global Date FirstActivationDate;
    global List<ContentVersion> FirstPublishLocation;
    global EmailTemplate ForgotPasswordEmailTemplate;
    global Id ForgotPasswordEmailTemplateId;
    global Id Id;
    global User LastModifiedBy;
    global Id LastModifiedById;
    global Datetime LastModifiedDate;
    global EmailTemplate LockoutEmailTemplate;
    global Id LockoutEmailTemplateId;
    global Integer MaxFileSizeKb;
    global String Name;
    global List<NetworkDiscoverableLogin> Network;
    global List<NetworkActivityAudit> NetworkActivityAudits;
    global List<CollaborationGroup> NetworkCollaborationGroups;
    global List<EntitySubscription> NetworkEntitySubscriptions;
    global List<NetworkMember> NetworkMembers;
    global List<NetworkModeration> NetworkModerations;
    global List<Recommendation> NetworkRecommendations;
    global List<Vehicle__Feed> NetworkScope;
    global List<NetworkUserHistoryRecent> NetworkUserHistoryRecentToNetwork;
    global String NewSenderAddress;
    global Boolean OptionsAllowInternalUserLogin;
    global Boolean OptionsAllowMembersToFlag;
    global Boolean OptionsCWBannerState;
    global Boolean OptionsDirectMessagesEnabled;
    global Boolean OptionsDisableWorkspaceInfo;
    global Boolean OptionsEinsteinAnswersEnabled;
    global Boolean OptionsEinsteinAnswersKAEnabled;
    global Boolean OptionsEinsteinAnswersQAEnabled;
    global Boolean OptionsEinsteinAnswersSnippetEnabled;
    global Boolean OptionsEnableTalkingAboutStats;
    global Boolean OptionsEnableTopicAssignmentRules;
    global Boolean OptionsGatherCustomerSentimentData;
    global Boolean OptionsGuestChatterEnabled;
    global Boolean OptionsGuestFileAccessEnabled;
    global Boolean OptionsInvitationsEnabled;
    global Boolean OptionsKnowledgeableEnabled;
    global Boolean OptionsMemberVisibility;
    global Boolean OptionsMobileImageOptimizationEnabled;
    global Boolean OptionsNetworkSentimentAnalysis;
    global Boolean OptionsNicknameDisplayEnabled;
    global Boolean OptionsPrivateMessagesEnabled;
    global Boolean OptionsRecognitionBadgingEnabled;
    global Boolean OptionsReputationEnabled;
    global Boolean OptionsReputationRecordConversationsDisabled;
    global Boolean OptionsSelfRegistrationEnabled;
    global Boolean OptionsSendWelcomeEmail;
    global Boolean OptionsShowAllNetworkSettings;
    global Boolean OptionsSiteAsContainerEnabled;
    global Boolean OptionsThreadedDiscussionsEnabled;
    global Boolean OptionsTopicSuggestionsEnabled;
    global Boolean OptionsUpDownVoteEnabled;
    global List<FeedRevision> OriginNetwork;
    global List<ReputationPointsRule> Parent;
    global Profile SelfRegProfile;
    global Id SelfRegProfileId;
    global String Status;
    global Datetime SystemModstamp;
    global String UrlPathPrefix;
    global EmailTemplate VerificationEmailTemplate;
    global Id VerificationEmailTemplateId;
    global EmailTemplate WelcomeEmailTemplate;
    global Id WelcomeEmailTemplateId;

    global Network () 
    {
    }
}