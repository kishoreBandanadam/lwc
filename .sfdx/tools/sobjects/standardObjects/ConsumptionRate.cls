// This file is generated as an Apex representation of the
//     corresponding sObject and its fields.
// This read-only file is used by the Apex Language Server to
//     provide code smartness, and is deleted each time you
//     refresh your sObject definitions.
// To edit your sObjects and their fields, edit the corresponding
//     .object-meta.xml and .field-meta.xml files.

global class ConsumptionRate {
    global ConsumptionSchedule ConsumptionSchedule;
    global Id ConsumptionScheduleId;
    global User CreatedBy;
    global Id CreatedById;
    global Datetime CreatedDate;
    global String Description;
    global List<ConsumptionRateHistory> Histories;
    global Id Id;
    global Boolean IsDeleted;
    global User LastModifiedBy;
    global Id LastModifiedById;
    global Datetime LastModifiedDate;
    global Integer LowerBound;
    global String Name;
    global Decimal Price;
    global String PricingMethod;
    global List<ProcessInstance> ProcessInstances;
    global List<ProcessInstanceHistory> ProcessSteps;
    global Integer ProcessingOrder;
    global List<FlowRecordRelation> RelatedRecord;
    global Datetime SystemModstamp;
    global Integer UpperBound;

    global ConsumptionRate () 
    {
    }
}