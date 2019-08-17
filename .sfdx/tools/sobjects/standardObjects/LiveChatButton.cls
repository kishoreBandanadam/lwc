// This file is generated as an Apex representation of the
//     corresponding sObject and its fields.
// This read-only file is used by the Apex Language Server to
//     provide code smartness, and is deleted each time you
//     refresh your sObject definitions.
// To edit your sObjects and their fields, edit the corresponding
//     .object-meta.xml and .field-meta.xml files.

global class LiveChatButton {
    global String Animation;
    global String AutoGreeting;
    global List<LiveChatButtonSkill> Button;
    global Integer ChasitorIdleTimeout;
    global Integer ChasitorIdleTimeoutWarning;
    global ApexPage ChatPage;
    global Id ChatPageId;
    global User CreatedBy;
    global Id CreatedById;
    global Datetime CreatedDate;
    global String CustomAgentName;
    global String DeveloperName;
    global Boolean HasQueue;
    global Id Id;
    global String InviteEndPosition;
    global StaticResource InviteImage;
    global Id InviteImageId;
    global String InviteStartPosition;
    global Boolean IsActive;
    global Boolean IsDeleted;
    global String Language;
    global User LastModifiedBy;
    global Id LastModifiedById;
    global Datetime LastModifiedDate;
    global List<LiveChatTranscriptChangeEvent> LiveChatButton;
    global List<LiveChatTranscript> LiveChatTranscripts;
    global String MasterLabel;
    global Integer NumberOfReroutingAttempts;
    global StaticResource OfflineImage;
    global Id OfflineImageId;
    global StaticResource OnlineImage;
    global Id OnlineImageId;
    global Boolean OptionsHasChasitorIdleTimeout;
    global Boolean OptionsHasInviteAfterAccept;
    global Boolean OptionsHasInviteAfterReject;
    global Boolean OptionsHasRerouteDeclinedRequest;
    global Boolean OptionsIsAutoAccept;
    global Boolean OptionsIsInviteAutoRemove;
    global Integer OverallQueueLength;
    global Integer PerAgentQueueLength;
    global ApexPage PostchatPage;
    global Id PostchatPageId;
    global String PostchatUrl;
    global ApexPage PrechatFormPage;
    global Id PrechatFormPageId;
    global String PrechatFormUrl;
    global Integer PushTimeout;
    global Group Queue;
    global Id QueueId;
    global String RoutingType;
    global Site Site;
    global Id SiteId;
    global Skill Skill;
    global Id SkillId;
    global List<LiveChatUserConfig> SupervisorDefaultButton;
    global Datetime SystemModstamp;
    global Integer TimeToRemoveInvite;
    global String Type;
    global String WindowLanguage;

    global LiveChatButton () 
    {
    }
}