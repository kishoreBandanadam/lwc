// This file is generated as an Apex representation of the
//     corresponding sObject and its fields.
// This read-only file is used by the Apex Language Server to
//     provide code smartness, and is deleted each time you
//     refresh your sObject definitions.
// To edit your sObjects and their fields, edit the corresponding
//     .object-meta.xml and .field-meta.xml files.

global class ApiEvent {
    global String AdditionalInfo;
    global String ApiType;
    global Double ApiVersion;
    global String Application;
    global String Browser;
    global String Client;
    global ConnectedApplication ConnectedApp;
    global Id ConnectedAppId;
    global Datetime CreatedDate;
    global Integer ElapsedTime;
    global Double EvaluationTime;
    global Datetime EventDate;
    global String EventIdentifier;
    global Id Id;
    global LoginHistory LoginHistory;
    global Id LoginHistoryId;
    global String LoginKey;
    global String Operation;
    global String Platform;
    global TransactionSecurityPolicy Policy;
    global Id PolicyId;
    global String PolicyOutcome;
    global String QueriedEntities;
    global String Query;
    global Json RecordData;
    global String RelatedEventIdentifier;
    global Double RowsProcessed;
    global String SessionKey;
    global String SessionLevel;
    global String SourceIp;
    global User User;
    global String UserAgent;
    global Id UserId;
    global String Username;

    global ApiEvent () 
    {
    }
}