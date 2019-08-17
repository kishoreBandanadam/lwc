/* eslint-disable no-console */
import { LightningElement, wire } from 'lwc';
import { ShowToastEvent } from 'lightning/platformShowToastEvent';
import { getRecordCreateDefaults } from 'lightning/uiRecordApi';
import KISHORE from '@salesforce/resourceUrl/kishore';

export default class UsingLwc extends LightningElement {

    @wire(getRecordCreateDefaults, { objectApiName: "Account" })
    getRec({data, error}) {
        if (error) {
            let message = 'Unknown error';
            if (Array.isArray(error.body)) {
                message = error.body.map(e => e.message).join(', ');
            } else if (typeof error.body.message === 'string') {
                message = error.body.message;
            }
            this.dispatchEvent(
                new ShowToastEvent({
                    title: 'Error loading contact',
                    message,
                    variant: 'error',
                }),
            );
        } else if (data) {
            this.account = data;
            console.log("data in kishore", JSON.stringify(this.account));
            this.name = this.account.fields.Name.value;
            this.phone = this.account.fields.Phone.value;
            console.log("this.name", this.name);
            console.log("this.phone", this.phone);
        }
    }

    get svgURL()  {
        return KISHORE;
    }
}