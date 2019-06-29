/* eslint-disable no-console */
import { LightningElement, track, api} from 'lwc';

export default class DynamicRowsChildLwc extends LightningElement {

    @track Name = '';
    @track Industry = '';
    Id = '';

    @api indexVariable = '';


    @api record = {
        Name : '',
        Industry : '',
        Id : ''
    };

    connectedCallback() {
        this.Name = this.record.Name;
        this.Industry = this.record.Industry;
        this.Id = this.record.Id;
    }
    
    handleNameChange(event) {
        this.Name = event.target.value;
        console.log("this.Name child", this.Name);
        let newRecord = {...this.record};
        newRecord.Name = this.Name;
        console.log("this.Name Record", JSON.stringify(newRecord));
        const onRecordChange = new CustomEvent('recordchange', { detail: newRecord });
        // Dispatches the event.
        this.dispatchEvent(onRecordChange);
    }

    handleIndustryChange(event) {
        this.Industry = event.target.value;
        console.log("this.Industry child", this.Industry);
        let newRecord = {...this.record};
        newRecord.Industry = this.Industry;
        console.log("this.Industry Record", JSON.stringify(newRecord));
        const onRecordChange = new CustomEvent('recordchange', { detail: newRecord });
        // Dispatches the event.
        this.dispatchEvent(onRecordChange);
    }

    remove() {
        const sendIndexVariable = new CustomEvent('sendindex', { detail: this.indexVariable });
        // Dispatches the event.
        this.dispatchEvent(sendIndexVariable);
    }
}