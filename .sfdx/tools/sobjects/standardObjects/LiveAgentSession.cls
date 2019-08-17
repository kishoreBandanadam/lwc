// This file is generated as an Apex representation of the
//     corresponding sObject and its fields.
// This read-only file is used by the Apex Language Server to
//     provide code smartness, and is deleted each time you
//     refresh your sObject definitions.
// To edit your sObjects and their fields, edit the corresponding
//     .object-meta.xml and .field-meta.xml files.

global class LiveAgentSession {
    global List<ActivityHistory> ActivityHistories;
    global User Agent;
    global Id AgentId;
    global Integer ChatReqAssigned;
    global Integer ChatReqDeclined;
    global Integer ChatReqEngaged;
    global Integer ChatReqTimedOut;
    global User CreatedBy;
    global Id CreatedById;
    global Datetime CreatedDate;
    global List<EmailMessage> Emails;
    global List<Event> Events;
    global List<LiveAgentSessionHistory> Histories;
    global Id Id;
    global Boolean IsDeleted;
    global User LastModifiedBy;
    global Id LastModifiedById;
    global Datetime LastModifiedDate;
    global Datetime LastReferencedDate;
    global Datetime LastViewedDate;
    global Datetime LoginTime;
    global Datetime LogoutTime;
    global String Name;
    global Integer NumFlagLoweredAgent;
    global Integer NumFlagLoweredSupervisor;
    global Integer NumFlagRaised;
    global List<OpenActivity> OpenActivities;
    global SObject Owner;
    global Id OwnerId;
    global List<FlowRecordRelation> RelatedRecord;
    global List<OutgoingEmail> RelatedTo;
    global List<EventRelationChangeEvent> Relation;
    global Datetime SystemModstamp;
    global List<Task> Tasks;
    global Integer TimeAtCapacity;
    global Integer TimeIdle;
    global Integer TimeInAwayStatus;
    global Integer TimeInChats;
    global Integer TimeInOnlineStatus;
    global List<EventChangeEvent> What;

    global LiveAgentSession () 
    {
    }
}