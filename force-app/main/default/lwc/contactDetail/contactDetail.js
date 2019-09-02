/* eslint-disable no-console */
import { LightningElement, wire, api } from 'lwc';
import { getRecord } from 'lightning/uiRecordApi';
const FIELDS = ['Contact.Rich_Text__c'];
export default class ContactDetail extends LightningElement {

    @api recordId;
    @wire(getRecord, { recordId: '$recordId', fields: FIELDS})
    contact;

    @api
    get contactdata() {
        console.log("In contact detail", JSON.stringify(this.contact.data));
        return this.contact.data ? this.contact.data.fields.Rich_Text__c.value : null;
    }
}