/* eslint-disable no-console */
import { LightningElement, wire } from 'lwc';
import { getObjectInfo } from 'lightning/uiObjectInfoApi';

export default class ObjectInfo extends LightningElement {

@wire(getObjectInfo, { objectApiName: 'Contact' })
wiredOptions({ error, data }) {
    if (data) {
        this.record = data;
        this.error = undefined;
        console.log("ObjectInfo", this.record);
        console.log("ObjectInfo1", JSON.stringify(this.record));
        console.log("Default Record Type Id", this.record.defaultRecordTypeId);
    } else if (error) {
        this.error = error;
        this.record = undefined;
        console.log("this.error",this.error);
    }
}


}