// This file is generated as an Apex representation of the
//     corresponding sObject and its fields.
// This read-only file is used by the Apex Language Server to
//     provide code smartness, and is deleted each time you
//     refresh your sObject definitions.
// To edit your sObjects and their fields, edit the corresponding
//     .object-meta.xml and .field-meta.xml files.

global class LiveChatUserConfig {
    global String AutoGreeting;
    global Integer Capacity;
    global User CreatedBy;
    global Id CreatedById;
    global Datetime CreatedDate;
    global Integer CriticalWaitTime;
    global String CustomAgentName;
    global String DeveloperName;
    global Boolean HasLogoutSound;
    global Boolean HasNotifications;
    global Boolean HasRequestSound;
    global Boolean HasSneakPeek;
    global Id Id;
    global Boolean IsAutoAwayOnDecline;
    global Boolean IsDeleted;
    global String Language;
    global User LastModifiedBy;
    global Id LastModifiedById;
    global Datetime LastModifiedDate;
    global List<LiveChatUserConfigUser> LiveChatUserConfig;
    global String MasterLabel;
    global Boolean OptionsHasAgentFileTransfer;
    global Boolean OptionsHasAgentSneakPeek;
    global Boolean OptionsHasAssistanceFlag;
    global Boolean OptionsHasChatConferencing;
    global Boolean OptionsHasChatMonitoring;
    global Boolean OptionsHasChatTransferToAgent;
    global Boolean OptionsHasChatTransferToButton;
    global Boolean OptionsHasChatTransferToSkill;
    global Boolean OptionsHasVisitorBlocking;
    global Boolean OptionsHasWhisperMessage;
    global Boolean OptionsIsAutoAwayOnPushTimeout;
    global String SupervisorDefaultAgentStatus;
    global LiveChatButton SupervisorDefaultButton;
    global Id SupervisorDefaultButtonId;
    global Skill SupervisorDefaultSkill;
    global Id SupervisorDefaultSkillId;
    global Datetime SystemModstamp;

    global LiveChatUserConfig () 
    {
    }
}