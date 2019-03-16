/* eslint-disable no-console */
import { LightningElement, track } from 'lwc';
import createAccount from '@salesforce/apex/createAcc.createAccount';

export default class CreateRecord extends LightningElement {

@track name = '';
@track Industry = '';
@track Phone = '';

handleNameChange(event) {
    this.name = event.target.value;
    console.log("name1", this.name);
}

handleIndChange(event) {
    this.Industry = event.target.value;
    console.log("Industry", this.Industry);
}

handlePhnChange(event) {
    this.Phone = event.target.value;
    console.log("Phone", this.Phone);
}

handleClick() {
var parameterObject = {
    Name: this.name,
    Industry : this.Industry,
    Phone : this.Phone   
};
console.log("name2", this.name);
console.log("parameterObject", JSON.stringify(parameterObject));

createAccount({ acc : parameterObject })
        .then(result => {
            this.message = result;
            this.error = undefined;
            if(this.message !== undefined) {
                this.name = '';
                this.Industry = '';
                this.Phone = '';
            }
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