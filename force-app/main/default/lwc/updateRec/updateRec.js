/* eslint-disable no-console */
import { LightningElement, api, track, wire } from 'lwc';
import getAccount from '@salesforce/apex/accList.getAccount';
import { CurrentPageReference } from 'lightning/navigation';
import updateAcc from '@salesforce/apex/accList.updateAcc';
import { fireEvent } from 'c/pubsub';
export default class UpdateRec extends LightningElement {
   @api recordId;
   @track account = {};

   @wire(CurrentPageReference) pageRef;

    /*@track name = '';
    @track industry = '';
    @track phone = '';*/
    connectedCallback(){
        console.log("In connected call back");
        console.log("In connected recordId:", this.recordId);
        getAccount({recId : this.recordId})
            .then(result => {
                this.record = result;
                this.account = this.record;
                console.log("record in update", this.record);
                console.log("rec in update", JSON.stringify(this.account));
                console.log("rec in update Name", JSON.stringify(this.account.Name));
                console.log("rec in update Name", JSON.stringify(this.Name));
                this.error = undefined;
            })
            .catch(error => {
                this.error = error;
                this.record = undefined;
                console.log("Error in connected call back:", this.error);
            });
    }       

    renderedCallback() {
        console.log("Account record before edit::", this.account);
    }

    handleNameChange(event) {
        this.account.Name = event.target.value;
    }

    handleIndChange(event) {
        this.account.Industry = event.target.value;
    }

    handlePhnChange(event) {
        this.account.Phone = event.target.value;
    }

    handlePicklistChange(event) {
        this.account.Controlling_Picklist__c = event.detail.selectedValue;
    }

    handleDependentPicklistChange(event) {
        this.account.Dependent_Picklist__c = event.detail.selectedValue;
    }



    handleClick() {
        console.log("Account record after edit::", this.account);
        updateAcc({acc : this.account})
        .then(result => {
            this.record = result;
            //this.account = this.record;
            console.log("record after update", JSON.stringify(this.record));
            //Fire Event so that parent can know
            this.dispatchEvent(new CustomEvent("create"));
            //Fire Pub/Sub Event, So that every other comp in the page knows the change
            fireEvent(this.pageRef, 'accountUpdated', this.record);
            //console.log("rec in update", JSON.stringify(this.account));
            this.error = undefined;
        })
        .catch(error => {
            this.error = error;
            this.record = undefined;
        });

    }
}