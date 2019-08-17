// This file is generated as an Apex representation of the
//     corresponding sObject and its fields.
// This read-only file is used by the Apex Language Server to
//     provide code smartness, and is deleted each time you
//     refresh your sObject definitions.
// To edit your sObjects and their fields, edit the corresponding
//     .object-meta.xml and .field-meta.xml files.

global class LoginEventStream {
    global String AdditionalInfo;
    global String ApiType;
    global String ApiVersion;
    global String Application;
    global String AuthServiceId;
    global String Browser;
    global String CipherSuite;
    global String ClientVersion;
    global String CountryIso;
    global Datetime CreatedDate;
    global Double EvaluationTime;
    global Datetime EventDate;
    global String EventIdentifier;
    global String HttpMethod;
    global String LoginGeoId;
    global LoginHistory LoginHistory;
    global Id LoginHistoryId;
    global String LoginKey;
    global String LoginType;
    global String LoginUrl;
    global String NetworkId;
    global String Platform;
    global TransactionSecurityPolicy Policy;
    global Id PolicyId;
    global String PolicyOutcome;
    global String RelatedEventIdentifier;
    global String ReplayId;
    global String SessionKey;
    global String SessionLevel;
    global List<AsyncOperationEvent> SourceEvent;
    global String SourceIp;
    global String Status;
    global String TlsProtocol;
    global User User;
    global Id UserId;
    global String UserType;
    global String Username;

    global LoginEventStream () 
    {
    }
}