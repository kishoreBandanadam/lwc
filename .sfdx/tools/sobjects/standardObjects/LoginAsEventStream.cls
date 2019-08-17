// This file is generated as an Apex representation of the
//     corresponding sObject and its fields.
// This read-only file is used by the Apex Language Server to
//     provide code smartness, and is deleted each time you
//     refresh your sObject definitions.
// To edit your sObjects and their fields, edit the corresponding
//     .object-meta.xml and .field-meta.xml files.

global class LoginAsEventStream {
    global String Application;
    global String Browser;
    global Datetime CreatedDate;
    global String DelegatedOrganizationId;
    global String DelegatedUsername;
    global Datetime EventDate;
    global String EventIdentifier;
    global String LoginAsCategory;
    global LoginHistory LoginHistory;
    global Id LoginHistoryId;
    global String LoginKey;
    global String LoginType;
    global String Platform;
    global String ReplayId;
    global String SessionKey;
    global String SessionLevel;
    global List<AsyncOperationEvent> SourceEvent;
    global String SourceIp;
    global String TargetUrl;
    global User User;
    global Id UserId;
    global String UserType;
    global String Username;

    global LoginAsEventStream () 
    {
    }
}