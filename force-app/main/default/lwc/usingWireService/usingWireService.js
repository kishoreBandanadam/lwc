/* eslint-disable no-console */
import { LightningElement, wire, api, track } from 'lwc';
import { ShowToastEvent } from 'lightning/platformShowToastEvent';
import { getRecord } from 'lightning/uiRecordApi';

const FIELDS = [
    'Account.Name',
    'Account.Industry',
    'Account.Phone',
];
export default class UsingWireService extends LightningElement {

    @api recordId;
    @track account;
    @track name;
    @track industry;
    @track phone;

    @wire(getRecord,  { recordId: '$recordId', fields: FIELDS}) 
    wiredRecord({ error, data }) {
        if (error) {
            let message = 'Unknown error';
            if (Array.isArray(error.body)) {
                message = error.body.map(e => e.message).join(', ');
            } else if (typeof error.body.message === 'string') {
                message = error.body.message;
            }
            this.dispatchEvent(
                new ShowToastEvent({
                    title: 'Error loading account',
                    message,
                    variant: 'error',
                }),
            );
        } else if (data) {
            this.account = data;
            this.name = this.account.fields.Name.value;
            this.industry = this.account.fields.Industry.value;
            this.phone = this.account.fields.Phone.value;
        }
    }    
}