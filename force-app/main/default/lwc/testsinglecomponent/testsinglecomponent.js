/* eslint-disable no-console */
import { LightningElement, track } from 'lwc';
import example2 from '@salesforce/apex/ContactController.example2';

export default class Testsinglecomponent extends LightningElement {

    @track account;

    connectedCallback() {
        example2().then(result => {
            this.record = result;
            console.log("Account connectedCallback", this.record);
            this.account = result
            this.error = undefined;
        })
        .catch(error => {
            this.error = error;
            this.record = undefined;
        });
    }
    renderedCallback() {
        example2().then(result => {
            this.record = result;
            console.log("Account connectedCallback", this.record);
            this.account = result
            this.error = undefined;
        })
        .catch(error => {
            this.error = error;
            this.record = undefined;
        });
    }
}