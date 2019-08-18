/* eslint-disable no-console */
import { LightningElement, track, wire, api } from 'lwc';
import { getPicklistValuesByRecordType } from 'lightning/uiObjectInfoApi';
import { getObjectInfo } from 'lightning/uiObjectInfoApi';

export default class PickList extends LightningElement {
    
    @api objectApiName;
    @api recordTypeId;
    @api pickListfieldApiName;
    @api label;
    @api variant;

    //only for lwc for mapping values in list
    @api uniqueKey;

    //@api selectedValue = undefined;
    @track value;

    @api 
    get selectedValue() {
        console.log("getter", this.value);
        return this.value;
    }
    set selectedValue(val) {
        console.log("setter", val);
        if (val === '' || val === undefined || val === null)
            this.value = { label: '--None--', value: "" }.value;
        else
            this.value = val;
    }


    @track options = [
                      {label : 'Default 1', value : 'Default1'},
                      {label : 'Default 2', value : 'Default2'},
                      {label: '--None--', value: "" }
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

                let tempOptions = [{ label: '--None--', value: "" }];
                let temp2Options = this.record.picklistFieldValues[this.pickListfieldApiName].values;
                temp2Options.forEach(opt => tempOptions.push(opt));

                this.options = tempOptions;
            }
            console.log("this.options pick", JSON.stringify(this.options));
            if(this.selectedValue === '' || this.selectedValue === undefined || this.selectedValue === null) {
                this.value = { label: '--None--', value: "" }.value;
            } else {
                this.value = this.options.find(listItem => listItem.value === this.selectedValue).value;
            }
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
        let key = this.uniqueKey;

        //Firing change event for aura container to handle
        const pickValueChangeEvent = new CustomEvent('picklistchange', {
            detail: { selectedValue, key },
        });
        this.dispatchEvent(pickValueChangeEvent);
    }

     /*connectedCallback() {
         if(this.selectedValue) {
            this.value = this.selectedValue;
         }
     }*/

    /*renderedCallback() {
        console.log("In picklist rendered out",this.selectedValue);
        if (this.selectedValue) {
            this.value = this.selectedValue;
            console.log("In picklist rendered out",this.value);
        }
    }*/
}