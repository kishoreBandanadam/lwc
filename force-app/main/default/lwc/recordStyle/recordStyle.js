/* eslint-disable no-console */
import { LightningElement } from 'lwc';
import createAccount from '@salesforce/apex/createAcc.createRecord';

export default class RecordStyle extends LightningElement {

    record = {
        "apiName" : "Account",
        "fields" : {
            "Name" : "",
            "Phone" : "",
            "Industry" : ""
        }
    }

    handleNameChange(event) {
        let name = event.target.value;
        this.record.fields.Name = name;
        console.log("handleNameChange");
        console.log("this.record", this.record);
        console.log("this.record.fields.Name", this.record.fields.Name);
        console.log("name", name);
    }

    connectedCallback() {
        console.log("connectedCallback");
        console.log("this.record", this.record);
    }

    renderedCallback() {
        console.log("renderedCallback");
        console.log("record in recordStyle::", this.record);
    }

    handleClick() {
        createAccount({ acc : this.record })
            .then(result => {
                this.message = result;
                this.error = undefined;
                console.log(JSON.stringify(result));
                console.log("result", this.message);
            })
            .catch(error => {
                this.message = undefined;
                this.error = error;
                console.log("error", JSON.stringify(this.error));
            });
    }
}