/* eslint-disable @lwc/lwc/no-async-operation */
/* eslint-disable no-console */
import { LightningElement, track } from 'lwc';
import saveAccountsLwc from '@salesforce/apex/dynamicRowsController.saveAccountsLwc';
import getAccounts from '@salesforce/apex/dynamicRowsController.getAccounts';
import { ShowToastEvent } from 'lightning/platformShowToastEvent';

export default class TestBinding extends LightningElement {
    
    @track toggleSaveLabel = 'Save';
    @track myList = [{Name : "Kishore", JobType__c : "Birlasoft", key : Math.random().toString(36).substring(2, 15)},
                     {Name : "Suresh", JobType__c : "TCS",  key : Math.random().toString(36).substring(2, 15)}];

    //For Stencil
    @track stencilClass = '';
    @track stencilReplacement = 'slds-hide';  
    
    @track cols = [1,2,3,4];
    @track opacs = ['opacity: 1', 'opacity: 0.9', 'opacity: 0.8', 'opacity: 0.7', 'opacity: 0.6', 'opacity: 0.5', 'opacity: 0.4', 'opacity: 0.3', 'opacity: 0.2', 'opacity: 0.1'];


    /*--------------------Mapping field values to the list onchange START --------------------*/                
    handleNameChange(event) {
        let element = this.myList.find(ele  => ele.Id === event.target.dataset.id);
        element.Name = event.target.value;
        this.myList = [...this.myList];
        console.log(JSON.stringify(this.myList));
    }

    handlePicklistChange(event) {
        let eventData = event.detail;
        let pickValue = event.detail.selectedValue;
        let uniqueKey = event.detail.key;
        console.log("Id detail", pickValue);
        console.log("uniqueKey detail", uniqueKey);
        console.log("eventData", eventData);

        let element = this.myList.find(ele  => ele.Id === uniqueKey);
        element.Controlling_Picklist__c = pickValue;
        this.myList = [...this.myList];
        console.log("myList after select", JSON.stringify(this.myList));
    }

    handleDependentPicklistChange(event) {
        let eventData = event.detail;
        let pickValue = event.detail.selectedValue;
        let uniqueKey = event.detail.key;
        console.log("Id detail", pickValue);
        console.log("uniqueKey detail", uniqueKey);
        console.log("eventData", eventData);

        let element = this.myList.find(ele  => ele.Id === uniqueKey);
        element.Dependent_Picklist__c = pickValue;
        this.myList = [...this.myList];
        console.log("myList after select", JSON.stringify(this.myList));
    }

    handleSelection(event) {
        let eventData = event.detail;
        let id = event.detail.selectedId;
        let uniqueKey = event.detail.key;
        console.log("Id detail", id);
        console.log("uniqueKey detail", uniqueKey);
        console.log("eventData", eventData);

        let element = this.myList.find(ele  => ele.Id === uniqueKey);
        element.JobType__c = id;
        this.myList = [...this.myList];
        console.log("myList after select", JSON.stringify(this.myList));
    }
    /*--------------------Mapping field values to the list onchange END --------------------*/    

    add() {
        let newList = this.myList;
        newList.push({Name : "", JobType__c : "",  key : Math.random().toString(36).substring(2, 15)});
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
        console.log("Final record list to save testBinding", this.myList);
        saveAccountsLwc({records : toSaveList})
        .then(() => {
            this.toggleSaveLabel = 'Saved';
            //this.myList = [{Name : "", Industry : "",  key : Math.random().toString(36).substring(2, 15)}];
            this.dispatchEvent(
                new ShowToastEvent({
                    title : 'Success',
                    message : `Records saved succesfully!`,
                    variant : 'success',
                }),
            )
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

    connectedCallback() {
        getAccounts()
            .then(result => {
                this.record = result;
                console.log("lwc getAccounts", this.record);
                this.myList = result
                this.error = undefined;

                //Removing stencil on getting data
                this.stencilClass = 'slds-hide';
                this.stencilReplacement = '';
            })
            .catch(error => {
                this.error = error;
                this.record = undefined;
            });
    }
}