/* eslint-disable no-console */
import { LightningElement, wire } from 'lwc';
import { getObjectInfo } from 'lightning/uiObjectInfoApi';

export default class ObjectInfo extends LightningElement {

    recordTypeName = 'Test';
    recordTypeId;

@wire(getObjectInfo, { objectApiName: 'Account' })
wiredOptions({ error, data }) {
    if (data) {
        this.record = data;
        this.error = undefined;
        console.log("ObjectInfo", this.record);
        console.log("ObjectInfo1", JSON.stringify(this.record));
        console.log("Default Record Type Id", this.record.defaultRecordTypeId);
        console.log("Is Array:", JSON.stringify(this.record.recordTypeInfos));

        let recordTypeInfos = Object.entries(this.record.recordTypeInfos);
        console.log("ObjectInfo length", recordTypeInfos.length);
        if(recordTypeInfos.length > 1) {
            recordTypeInfos.forEach(([key, value]) => {
                console.log(`ObjectInfo onlyyyy${key}: ${JSON.stringify(value)}`);
                console.log("ObjectInfo value outer", value);
                if(value.available === true && value.master !== true) {
                    console.log("ObjectInfo value", value);
                    if(this.recordTypeName === value.name){
                        console.log("ObjectInfo value inner", this.recordTypeName+''+value);
                        this.recordTypeId = value.recordTypeId;
                    }

                        console.log("ObjectInfo Record Type", this.recordTypeName+'||'+this.recordTypeId)
                }
            });
        }else {
            this.recordTypeId = this.record.defaultRecordTypeId;
        }
        
        console.log("Is Array:", Array.isArray(this.record.recordTypeInfos));
    } else if (error) {
        this.error = error;
        this.record = undefined;
        console.log("this.error",this.error);
    }
}


}