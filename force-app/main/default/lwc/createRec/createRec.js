/* eslint-disable no-console */
import { LightningElement, track} from 'lwc';
import ACCOUNT_OBJECT from '@salesforce/schema/Account';
import NAME_FIELD from '@salesforce/schema/Account.Name';
import INDUSTRY_FIELD from '@salesforce/schema/Account.Industry';
import PHONE_FIELD from '@salesforce/schema/Account.Phone';
import createAccount from '@salesforce/apex/createAcc.createAccount';
import { ShowToastEvent } from 'lightning/platformShowToastEvent';

export default class CreateRec extends LightningElement {



    accountObject = ACCOUNT_OBJECT;

    @track name = '';
    @track industry = '';
    @track phone = '';
    /*rec = {
        Name : this.name,
        Industry : this.industry,
        Phone : this.phone
    }*/

    handleNameChange(event) {
        this.name = event.target.value;
        console.log("name1", this.name);
    }
    
    handleIndChange(event) {
        this.industry = event.target.value;
        console.log("Industry", this.industry);
    }
    
    handlePhnChange(event) {
        this.phone = event.target.value;
        console.log("Phone", this.phone);
    }

    handleClick() {
        var fields = {};
        var recd = {fields};
        fields[NAME_FIELD.fieldApiName] = this.name;
        fields[INDUSTRY_FIELD.fieldApiName] = this.industry;
        fields[PHONE_FIELD.fieldApiName] = this.phone;
        console.log("records", recd);
        console.log("Phone", fields);
        console.log("Phone", recd.fields);
        createAccount({ acc : fields })
            .then(result => {
                this.message = result;
                this.error = undefined;
                if(this.message !== undefined) {
                    this.name = '';
                    this.industry = '';
                    this.phone = '';
                    this.dispatchEvent(
                        new ShowToastEvent({
                            title: 'Success',
                            message: 'Account created',
                            variant: 'success',
                        }),
                    );
                }
                
                console.log(JSON.stringify(result));
                console.log("result", this.message);
            })
            .catch(error => {
                this.message = undefined;
                this.error = error;
                this.dispatchEvent(
                    new ShowToastEvent({
                        title: 'Error creating record',
                        message: error.body.message,
                        variant: 'error',
                    }),
                );
                console.log("error", JSON.stringify(this.error));
            });
    }
}