/* eslint-disable no-console */
import { LightningElement, track, wire, api } from 'lwc';
import { getPicklistValuesByRecordType } from 'lightning/uiObjectInfoApi';
import { getObjectInfo } from 'lightning/uiObjectInfoApi';

export default class PickList extends LightningElement {
    
    @api objectApiName = undefined;
    @api recordTypeId = undefined;
    @api pickListfieldApiName = undefined;
    @api label = undefined;
    @api selectedValue = undefined;

    @track value = undefined;
    @track options = [
                      {label : 'Default 1', value : 'Default1'},
                      {label : 'Default 2', value : 'Default2'}
                     ];
    
            
    @wire(getObjectInfo, { objectApiName: '$objectApiName' })
    getRecordTypeId({ error, data }) {
        if (data) {
            this.record = data;
            this.error = undefined;
            if(this.recordTypeId === undefined){
                //this.recordTypeId = this.record.defaultRecordTypeId;
            }
            console.log("Default Record Type Id", this.record.defaultRecordTypeId);
        } else if (error) {
            this.error = error;
            this.record = undefined;
            console.log("this.error",this.error);
        }
    }
                     
    @wire(getPicklistValuesByRecordType, { recordTypeId: '$recordTypeId', objectApiName: '$objectApiName' })
    wiredOptions({ error, data }) {
        if (data) {
            this.record = data;
            this.error = undefined;
            /*
            console.log("this.record picklist raw data", JSON.stringify(this.record));
            console.log("this.record.picklistFieldValues", JSON.stringify(this.record.picklistFieldValues));
            */
            if(this.record.picklistFieldValues[this.pickListfieldApiName] !== undefined) {
                this.options = this.record.picklistFieldValues[this.pickListfieldApiName].values;
            }
            console.log("this.options", JSON.stringify(this.options));
            this.value= this.options.find(listItem  => listItem.value === this.selectedValue).value;
        } else if (error) {
            this.error = error;
            this.record = undefined;
            console.log("this.error",this.error);
        }
    }


    handleChange(event) {
        this.value = event.target.value;
        console.log("event.target.value",event.target.value);
        console.log("this.value",this.value);
        let selectedValue = this.value;

        //Firing change event for aura container to handle
        const pickValueChangeEvent = new CustomEvent('pickListchange', {
            detail: { selectedValue },
        });
        this.dispatchEvent(pickValueChangeEvent);
    }
}