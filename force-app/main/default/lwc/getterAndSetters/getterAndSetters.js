/* eslint-disable no-console */
import { LightningElement, api, track, wire} from 'lwc';
import getAccount from '@salesforce/apex/accList.getAccount';
import { CurrentPageReference } from 'lightning/navigation';
import updateAcc from '@salesforce/apex/accList.updateAcc';

export default class GetterAndSetters extends LightningElement {
    @api recordId;
    @track Industr = '';
    @track account = {};

    @wire(CurrentPageReference) pageRef;


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

        @api 
        get Name() {
            return this.account.Name;
        }

        set Name(value) {
            this.account.Name = value;
        }

        @api 
        get Phone() {
            return this.account.Phone;
        }

        set Phone(value) {
            this.account.Phone = value;
        }

        @api 
        get Industry() {
            console.log("this.account.Industry", this.Industr);
            return this.Industr;
            
        }
        
        set Industry(value) {
            console.log("Industry value", value);
            this.Industr = value;
        }
        /*
        handleNameChange(event) {
            this.account.Name = event.target.value;
        }

        handleIndChange(event) {
            this.account.Industry = event.target.value;
        }

        handlePhnChange(event) {
            this.account.Phone = event.target.value;
        }
        */
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
                
                //console.log("rec in update", JSON.stringify(this.account));
                this.error = undefined;
            })
            .catch(error => {
                this.error = error;
                this.record = undefined;
            });

        }
        
}