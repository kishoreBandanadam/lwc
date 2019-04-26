/* eslint-disable no-console */
import { LightningElement, wire, track, api } from 'lwc';
import getAccounts from '@salesforce/apex/accList.getAccounts';
import { refreshApex } from '@salesforce/apex';

export default class AccountListEdit extends LightningElement {
    @wire(getAccounts) Accounts;
    @track open = false;
    @api rec2Id;

    renderedCallback() {
        console.log("Accounts:::", this.Accounts);
        //console.log("Accounts:::", JSON.stringify(this.Accounts));
    }

    handleClick(event) {
        console.log("In HandleClick");
        const recId = event.target.name;
        this.rec2Id = event.currentTarget.name;
        console.log("Selected Account Id:::", recId);
        console.log("Selected Account Id rec2Id :::", this.rec2Id);
        this.open = true;
    }

    closeModal() {
        console.log("In closeModal");
        this.open = false;
    }

    reloadList() {
        this.closeModal();
        return refreshApex(this.Accounts);
    }
}