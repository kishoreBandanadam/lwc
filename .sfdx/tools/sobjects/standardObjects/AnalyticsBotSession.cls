// This file is generated as an Apex representation of the
//     corresponding sObject and its fields.
// This read-only file is used by the Apex Language Server to
//     provide code smartness, and is deleted each time you
//     refresh your sObject definitions.
// To edit your sObjects and their fields, edit the corresponding
//     .object-meta.xml and .field-meta.xml files.

global class AnalyticsBotSession {
    global Integer AbandonedDialogCount;
    global String BotName;
    global Integer BotVersionNumber;
    global String ChannelType;
    global Integer ChoiceSelectionCount;
    global String ConversationSessionKey;
    global Datetime ConversationSessionStartTime;
    global User CreatedBy;
    global Id CreatedById;
    global Datetime CreatedDate;
    global Integer FromBotMessageCount;
    global Integer GlobalChoiceSelectionCount;
    global Id Id;
    global String LastDialogName;
    global User LastModifiedBy;
    global Id LastModifiedById;
    global Datetime LastModifiedDate;
    global Integer NlpIntentRequestCount;
    global Integer NlpIntentRequestHitCount;
    global Integer SessionDuration;
    global Datetime SessionEndTime;
    global String SessionEndType;
    global Datetime SessionStartTime;
    global LiveChatTranscript Source;
    global Id SourceId;
    global Integer StartedDialogCount;
    global Datetime SystemModstamp;
    global Integer ToBotMessageCount;
    global String TransferType;
    global Boolean WasSessionDropped;
    global Boolean WasTransferSuccessful;

    global AnalyticsBotSession () 
    {
    }
}