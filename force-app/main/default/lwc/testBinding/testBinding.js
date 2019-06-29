/* eslint-disable @lwc/lwc/no-async-operation */
/* eslint-disable no-console */
import { LightningElement, track } from 'lwc';
import saveAccountsLwc from '@salesforce/apex/dynamicRowsController.saveAccountsLwc';

export default class TestBinding extends LightningElement {
    
    @track toggleSaveLabel = 'Save';
    @track myList = [{Name : "Kishore", Industry : "Birlasoft", key : Math.random().toString(36).substring(2, 15)},
                     {Name : "Suresh", Industry : "TCS",  key : Math.random().toString(36).substring(2, 15)}];

    handleNameChange(event) {
        let element = this.myList.find(ele  => ele.key === event.target.dataset.id);
        element.Name = event.target.value;
        this.myList = [...this.myList];
        console.log(JSON.stringify(this.myList));
    }

    handleIndustryChange(event) {
        let element = this.myList.find(ele  => ele.key === event.target.dataset.id);
        element.Industry = event.target.value;
        this.myList = [...this.myList];
        console.log(JSON.stringify(this.myList));
    }

    add() {
        let newList = this.myList;
        newList.push({Name : "", Industry : "",  key : Math.random().toString(36).substring(2, 15)});
        this.myList = newList;
        console.log('myList', JSON.stringify(this.myList));
        console.log('myList size::',this.myList.length);
    }

    remove(event) { 
        let indexPosition = event.currentTarget.name;
        console.log("indexPosition",indexPosition);
        if(this.myList.length > 1) 
        this.myList.splice(indexPosition, 1);
    }

    handleSave() {
        this.toggleSaveLabel = 'Saving...'
        let toSaveList = this.myList;
        toSaveList.forEach((element, index) => {
            if(element.Name === ''){
                toSaveList.splice(index, 1);
            }
        });

        this.myList = toSaveList;

        saveAccountsLwc({records : toSaveList})
        .then(() => {
            this.toggleSaveLabel = 'Saved';
            
            this.error = undefined;
        })
        .catch(error => {
            this.error = error;
            this.record = undefined;
            console.log("Error in Save call back:", this.error);
        })
        .finally(() => {
            setTimeout(() => {
                this.toggleSaveLabel = 'Save';
            }, 3000);
        });
    }
}