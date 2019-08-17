// This file is generated as an Apex representation of the
//     corresponding sObject and its fields.
// This read-only file is used by the Apex Language Server to
//     provide code smartness, and is deleted each time you
//     refresh your sObject definitions.
// To edit your sObjects and their fields, edit the corresponding
//     .object-meta.xml and .field-meta.xml files.

global class Territory2 {
    global String AccountAccessLevel;
    global List<AccountUserTerritory2View> AccountUserTerritory2Views;
    global String CaseAccessLevel;
    global String ContactAccessLevel;
    global String Description;
    global String DeveloperName;
    global User ForecastUser;
    global Id ForecastUserId;
    global Id Id;
    global User LastModifiedBy;
    global Id LastModifiedById;
    global Datetime LastModifiedDate;
    global String Name;
    global List<ObjectTerritory2Association> ObjectTerritory2Associations;
    global String OpportunityAccessLevel;
    global List<Territory2> ParentTerritory2;
    global Id ParentTerritory2Id;
    global List<Group> Related;
    global List<RuleTerritory2Association> RuleTerritory2Associations;
    global List<ForecastingShare> SharedForecastManagerRole;
    global Datetime SystemModstamp;
    global List<Opportunity> Territory2;
    global Territory2Model Territory2Model;
    global Id Territory2ModelId;
    global Territory2Type Territory2Type;
    global Id Territory2TypeId;
    global List<UserTerritory2Association> UserTerritory2Associations;

    global Territory2 () 
    {
    }
}