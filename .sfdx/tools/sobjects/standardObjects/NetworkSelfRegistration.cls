// This file is generated as an Apex representation of the
//     corresponding sObject and its fields.
// This read-only file is used by the Apex Language Server to
//     provide code smartness, and is deleted each time you
//     refresh your sObject definitions.
// To edit your sObjects and their fields, edit the corresponding
//     .object-meta.xml and .field-meta.xml files.

global class NetworkSelfRegistration {
    global Account Account;
    global Id AccountId;
    global ApexClass ApexHandler;
    global Id ApexHandlerId;
    global User CreatedBy;
    global Id CreatedById;
    global Datetime CreatedDate;
    global User ExecuteApexHandlerAs;
    global Id ExecuteApexHandlerAsId;
    global Id Id;
    global Boolean IsDeleted;
    global User LastModifiedBy;
    global Id LastModifiedById;
    global Datetime LastModifiedDate;
    global Network Network;
    global Id NetworkId;
    global Boolean OptionsIncludePassword;
    global Boolean OptionsShowEmail;
    global Boolean OptionsShowFirstName;
    global Boolean OptionsShowLastName;
    global Boolean OptionsShowMobilePhone;
    global Boolean OptionsShowNickname;
    global Boolean OptionsShowUsername;
    global List<FlowRecordRelation> RelatedRecord;
    global Datetime SystemModstamp;
    global String VerificationMethod;

    global NetworkSelfRegistration () 
    {
    }
}