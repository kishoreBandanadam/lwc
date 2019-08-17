// This file is generated as an Apex representation of the
//     corresponding sObject and its fields.
// This read-only file is used by the Apex Language Server to
//     provide code smartness, and is deleted each time you
//     refresh your sObject definitions.
// To edit your sObjects and their fields, edit the corresponding
//     .object-meta.xml and .field-meta.xml files.

global class ContactRequest {
    global List<ActivityHistory> ActivityHistories;
    global User CreatedBy;
    global Id CreatedById;
    global Datetime CreatedDate;
    global List<EmailMessage> Emails;
    global List<Event> Events;
    global Id Id;
    global Boolean IsDeleted;
    global User LastModifiedBy;
    global Id LastModifiedById;
    global Datetime LastModifiedDate;
    global Datetime LastReferencedDate;
    global Datetime LastViewedDate;
    global String Name;
    global List<OpenActivity> OpenActivities;
    global SObject Owner;
    global Id OwnerId;
    global String PreferredChannel;
    global String PreferredPhone;
    global List<RecordActionHistory> RecordActionHistories;
    global List<RecordAction> RecordActions;
    global List<FlowRecordRelation> RelatedRecord;
    global List<OutgoingEmail> RelatedTo;
    global List<EventRelationChangeEvent> Relation;
    global String RequestDescription;
    global String RequestReason;
    global String Status;
    global Datetime SystemModstamp;
    global List<Task> Tasks;
    global SObject What;
    global Id WhatId;
    global SObject Who;
    global Id WhoId;

    global ContactRequest () 
    {
    }
}