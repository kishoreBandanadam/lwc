/* eslint-disable no-console */
import { LightningElement, api, track, wire } from 'lwc';
import lookUp2 from '@salesforce/apex/ContactController.lookUp2';
import { getRecord } from 'lightning/uiRecordApi';


let FIELDS = ['Account.Name'];

export default class LookupLwc extends LightningElement {

    @api valueId;
    @api objName;
    @api iconName;
    @api labelName;
    @api readOnly = false;
    @api filter = '';
    @api showLabel = false;
    @api uniqueKey;

    searchTerm;
    @track valueObj;
    href;
    @track options; //lookup values
    @track isValue;
    @track blurTimeout;

    blurTimeout;

    //css
    @track boxClass = 'slds-combobox slds-dropdown-trigger slds-dropdown-trigger_click slds-has-focus';
    @track inputClass = '';

    connectedCallback() {
        
        console.log("objName", this.objName);
       // FIELDS.push(this.objName+'.Name');
        console.log("FIELDS", FIELDS);
    }
    renderedCallback() {


        console.log("In rendered", this.objName);
    }
    

    @wire(lookUp2, {searchTerm : '$searchTerm', myObject : '$objName', filter : '$filter'})
    wiredRecords({ error, data }) {
        if (data) {
            this.record = data;
            this.error = undefined;
            this.options = this.record;
            console.log("this.options", JSON.stringify(this.options));
        } else if (error) {
            this.error = error;
            this.record = undefined;
            console.log("wire.error",this.error);
        }
    }

    //To get preselected or selected record
    @wire(getRecord, { recordId: '$valueId', fields: FIELDS })
    wiredOptions({ error, data }) {
        if (data) {
            this.record = data;
            this.error = undefined;
            this.valueObj = this.record.fields.Name.value;
            this.href = '/'+this.record.fields.id;
            this.isValue = true;
            console.log("this.record", JSON.stringify(this.record));
        } else if (error) {
            this.error = error;
            this.record = undefined;
            console.log("this.error", this.error);
        }
    }

    //when valueId changes
    valueChange() {
        console.log("In valueChange");
    }

    handleClick() {
        console.log("In handleClick");

        this.searchTerm = '';
        this.inputClass = 'slds-has-focus';
        this.boxClass = 'slds-combobox slds-dropdown-trigger slds-dropdown-trigger_click slds-has-focus slds-is-open';
        //let combobox = this.template.querySelector('#box');
        //combobox.classList.add("slds-is-open"); 
    }

    inblur() {
        console.log("In inblur");
        // eslint-disable-next-line @lwc/lwc/no-async-operation
        this.blurTimeout = setTimeout(() =>  {this.boxClass = 'slds-combobox slds-dropdown-trigger slds-dropdown-trigger_click slds-has-focus'}, 300);
    }

    onSelect(event) {
        console.log("In onSelect");
        let ele = event.currentTarget;
        let selectedId = ele.dataset.id;
        console.log("selectedId", selectedId);
        //As a best practise sending selected value to parent and inreturn parent sends the value to @api valueId
        let key = this.uniqueKey;
        const valueSelectedEvent = new CustomEvent('valueselect', {
            detail: { selectedId, key },
        });
        this.dispatchEvent(valueSelectedEvent);

        if(this.blurTimeout) {
            clearTimeout(this.blurTimeout);
        }
        this.boxClass = 'slds-combobox slds-dropdown-trigger slds-dropdown-trigger_click slds-has-focus';
    }

    onChange(event) {
        console.log("In onChange");
        this.searchTerm = event.target.value;
        console.log("searchTerm",this.searchTerm);
    }

    handleRemovePill() {
        console.log("In handleRemovePill");
        this.isValue = false;
        let selectedId = '';
        let key = this.uniqueKey;
        const valueSelectedEvent = new CustomEvent('valueselect', {
            detail: { selectedId, key },
        });
        this.dispatchEvent(valueSelectedEvent);
    }
}