// This file is generated as an Apex representation of the
//     corresponding sObject and its fields.
// This read-only file is used by the Apex Language Server to
//     provide code smartness, and is deleted each time you
//     refresh your sObject definitions.
// To edit your sObjects and their fields, edit the corresponding
//     .object-meta.xml and .field-meta.xml files.

global class ConversationEntry {
    global SObject Actor;
    global Id ActorId;
    global String ActorName;
    global String ActorType;
    global List<AttachedContentDocument> AttachedContentDocuments;
    global List<CombinedAttachment> CombinedAttachments;
    global List<ContentDocumentLink> ContentDocumentLinks;
    global LiveChatTranscript Conversation;
    global Id ConversationId;
    global User CreatedBy;
    global Id CreatedById;
    global Datetime CreatedDate;
    global Datetime EntryTime;
    global String EntryType;
    global List<ContentVersion> FirstPublishLocation;
    global Boolean HasAttachments;
    global Id Id;
    global Boolean IsDeleted;
    global User LastModifiedBy;
    global Id LastModifiedById;
    global Datetime LastModifiedDate;
    global String Message;
    global Datetime MessageDeliverTime;
    global Datetime MessageReadTime;
    global Datetime MessageSendTime;
    global String MessageStatus;
    global String MessageStatusCode;
    global List<FlowRecordRelation> RelatedRecord;
    global Integer Seq;
    global Datetime SystemModstamp;

    global ConversationEntry () 
    {
    }
}