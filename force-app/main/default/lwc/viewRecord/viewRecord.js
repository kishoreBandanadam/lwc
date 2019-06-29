/* eslint-disable no-console */
import { LightningElement, api, wire } from 'lwc';
import viewRecord from '@salesforce/apex/createAcc.viewRecord';
import { CurrentPageReference } from 'lightning/navigation';
import { registerListener, unregisterAllListeners } from 'c/pubsub';
import { NavigationMixin } from 'lightning/navigation';

export default class ViewRecord extends NavigationMixin(LightningElement) {
    @api recordId;
    @api rec = {
        Id : '',
        Name : '',
        Industry : '',
        Phone :''
    };

    @wire(CurrentPageReference) pageRef;

    connectedCallback() {

        viewRecord({recordId : this.recordId}) 
            .then(result => {
                this.record = result;
                this.rec = this.record;
                console.log("record", this.record);
                console.log("rec", this.rec);
                this.error = undefined;
            })
            .catch(error => {
                this.error = error;
                this.record = undefined;
            });

        registerListener('accountUpdated', this.handleAccountUpdated, this);
        
    }

    disconnectedCallback() {
        unregisterAllListeners(this);
    }

    handleAccountUpdated(accountRecord) {
        if(this.rec.Id === accountRecord.Id){
            this.rec = accountRecord;
        }
    }

    openModal() {
        this[NavigationMixin.Navigate]({
            type: "standard__objectPage",
            attributes: {
                objectApiName: "Account",
                actionName: "new"
            }
        });

       
    }
    
}