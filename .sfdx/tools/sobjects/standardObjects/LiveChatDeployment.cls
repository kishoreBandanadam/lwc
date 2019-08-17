// This file is generated as an Apex representation of the
//     corresponding sObject and its fields.
// This read-only file is used by the Apex Language Server to
//     provide code smartness, and is deleted each time you
//     refresh your sObject definitions.
// To edit your sObjects and their fields, edit the corresponding
//     .object-meta.xml and .field-meta.xml files.

global class LiveChatDeployment {
    global StaticResource Branding;
    global Id BrandingId;
    global Integer ConnectionTimeoutDuration;
    global Integer ConnectionWarningDuration;
    global User CreatedBy;
    global Id CreatedById;
    global Datetime CreatedDate;
    global List<LiveChatButtonDeployment> Deployment;
    global String DeveloperName;
    global String Domains;
    global Boolean HasTranscriptSave;
    global Id Id;
    global Boolean IsDeleted;
    global String Language;
    global User LastModifiedBy;
    global Id LastModifiedById;
    global Datetime LastModifiedDate;
    global List<LiveChatTranscriptChangeEvent> LiveChatDeployment;
    global List<LiveChatTranscript> LiveChatTranscripts;
    global String MasterLabel;
    global StaticResource MobileBranding;
    global Id MobileBrandingId;
    global Boolean OptionsHasPrechatApi;
    global Site Site;
    global Id SiteId;
    global Datetime SystemModstamp;
    global String WindowTitle;

    global LiveChatDeployment () 
    {
    }
}