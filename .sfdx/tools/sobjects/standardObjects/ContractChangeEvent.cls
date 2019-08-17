// This file is generated as an Apex representation of the
//     corresponding sObject and its fields.
// This read-only file is used by the Apex Language Server to
//     provide code smartness, and is deleted each time you
//     refresh your sObject definitions.
// To edit your sObjects and their fields, edit the corresponding
//     .object-meta.xml and .field-meta.xml files.

global class ContractChangeEvent {
    global Account Account;
    global Id AccountId;
    global User ActivatedBy;
    global Id ActivatedById;
    global Datetime ActivatedDate;
    global Address BillingAddress;
    global String BillingCity;
    global String BillingCountry;
    global String BillingGeocodeAccuracy;
    global Double BillingLatitude;
    global Double BillingLongitude;
    global String BillingPostalCode;
    global String BillingState;
    global String BillingStreet;
    global Object ChangeEventHeader;
    global User CompanySigned;
    global Date CompanySignedDate;
    global Id CompanySignedId;
    global String ContractNumber;
    global Integer ContractTerm;
    global User CreatedBy;
    global Id CreatedById;
    global Datetime CreatedDate;
    global Contact CustomerSigned;
    global Date CustomerSignedDate;
    global Id CustomerSignedId;
    global String CustomerSignedTitle;
    global String Description;
    global Date EndDate;
    global Id Id;
    global Datetime LastApprovedDate;
    global User LastModifiedBy;
    global Id LastModifiedById;
    global Datetime LastModifiedDate;
    global String Name;
    global User Owner;
    global String OwnerExpirationNotice;
    global Id OwnerId;
    global Contract Parent_Contract__c;
    global Pricebook2 Pricebook2;
    global Id Pricebook2Id;
    global String ReplayId;
    global String SpecialTerms;
    global Date StartDate;
    global String Status;
    global String StatusCode;

    global ContractChangeEvent () 
    {
    }
}