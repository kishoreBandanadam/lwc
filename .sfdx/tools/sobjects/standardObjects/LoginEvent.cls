// This file is generated as an Apex representation of the
//     corresponding sObject and its fields.
// This read-only file is used by the Apex Language Server to
//     provide code smartness, and is deleted each time you
//     refresh your sObject definitions.
// To edit your sObjects and their fields, edit the corresponding
//     .object-meta.xml and .field-meta.xml files.

global class LoginEvent {
    global String AdditionalInfo;
    global String ApiType;
    global String ApiVersion;
    global String Application;
    global Reference AuthServiceId;
    global String Browser;
    global String CipherSuite;
    global String ClientVersion;
    global String CountryIso;
    global Datetime CreatedDate;
    global Double EvaluationTime;
    global Datetime EventDate;
    global String EventIdentifier;
    global String HttpMethod;
    global Id Id;
    global Reference LoginGeoId;
    global Reference LoginHistoryId;
    global String LoginKey;
    global String LoginType;
    global String LoginUrl;
    global Network Network;
    global Id NetworkId;
    global String Platform;
    global TransactionSecurityPolicy Policy;
    global Id PolicyId;
    global String PolicyOutcome;
    global String RelatedEventIdentifier;
    global String SessionKey;
    global String SessionLevel;
    global String SourceIp;
    global String Status;
    global String TlsProtocol;
    global User User;
    global Id UserId;
    global String UserType;
    global String Username;

    global LoginEvent () 
    {
    }
}