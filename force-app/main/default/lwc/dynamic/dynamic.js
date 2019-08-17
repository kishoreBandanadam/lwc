/* eslint-disable no-console */
import { LightningElement, wire, api } from 'lwc';
import { getObjectInfo } from 'lightning/uiObjectInfoApi';

export default class Dynamic extends LightningElement {
    @api objectApiName = "Account";

    @wire(getObjectInfo, { objectApiName: '$objectApiName' })
    getRecordTypeId({ error, data }) {
        if (data) {
            this.record = data;
            this.error = undefined;
            if(this.recordTypeId === undefined){
                //this.recordTypeId = this.record.defaultRecordTypeId;
            }
            console.log("Default Record Type Id in dynamic", JSON.stringify(this.record));
        } else if (error) {
            this.error = error;
            this.record = undefined;
            console.log("this.error",this.error);
        }
    }
}