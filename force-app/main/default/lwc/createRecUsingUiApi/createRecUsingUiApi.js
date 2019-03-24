/* eslint-disable no-console */
import { LightningElement, track } from 'lwc';
import { createRecord } from 'lightning/uiRecordApi';
import ACCOUNT_OBJECT from '@salesforce/schema/Account';
import NAME_FIELD from '@salesforce/schema/Account.Name';
import INDUSTRY_FIELD from '@salesforce/schema/Account.Industry';
import PHONE_FIELD from '@salesforce/schema/Account.Phone';
import { ShowToastEvent } from 'lightning/platformShowToastEvent';

export default class CreateRecUsingUiApi extends LightningElement {

    @track record;
    @track error;
    @track accountId;
    name = '';
    industry = '';
    phone = '';

    handleNameChange(event) {
        this.name = event.target.value;
    }

    handleIndChange(event) {
        this.industry = event.target.value;
    }

    handlePhnChange(event) {
        this.phone = event.target.value;
    }

    handleClick() {
        console.log("In createRecUsingUiApi handle click::");
        const fields = {};
        fields[NAME_FIELD.fieldApiName] = this.name;
        fields[INDUSTRY_FIELD.fieldApiName] = this.industry;
        fields[PHONE_FIELD.fieldApiName] = this.phone;
        const recordInput = {apiName : ACCOUNT_OBJECT.objectApiName, fields};
        console.log("fields", fields);
        console.log("recordInput", recordInput);
        createRecord(recordInput)
            .then(account => {
                this.record = account;
                this.error = undefined;
                console.log("account", this.record);
                console.log("record", this.record.fields);
                this.accountId = account.id;
                this.dispatchEvent(
                    new ShowToastEvent({
                        title : 'Success',
                        message : 'Account saved successfully',
                        variant : 'success',
                    }),
                )
            })
            .catch(error => {
                this.error = error;
                this.record = undefined;
                console.log("error", error);
                this.dispatchEvent(
                    new ShowToastEvent({
                        title : 'Error',
                        message : 'Error saving the account',
                        variant : 'error',
                    }),
                )
            })
    }

}