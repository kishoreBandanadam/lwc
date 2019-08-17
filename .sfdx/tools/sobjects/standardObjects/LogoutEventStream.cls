// This file is generated as an Apex representation of the
//     corresponding sObject and its fields.
// This read-only file is used by the Apex Language Server to
//     provide code smartness, and is deleted each time you
//     refresh your sObject definitions.
// To edit your sObjects and their fields, edit the corresponding
//     .object-meta.xml and .field-meta.xml files.

global class LogoutEventStream {
    global User CreatedBy;
    global Id CreatedById;
    global Datetime CreatedDate;
    global Datetime EventDate;
    global String EventIdentifier;
    global String LoginKey;
    global String RelatedEventIdentifier;
    global String ReplayId;
    global String SessionKey;
    global String SessionLevel;
    global List<AsyncOperationEvent> SourceEvent;
    global String SourceIp;
    global User User;
    global Id UserId;
    global String Username;

    global LogoutEventStream () 
    {
    }
}