/* eslint-disable no-console */
import { LightningElement } from 'lwc';

export default class DataTable extends LightningElement {

    label = '';

    record = {
        "label" : this.label,
    };

    records = [
        {"label" : "item1"},
        {"label" : "item2"},
        {"label" : "item3"},
    ];

    connectedCallback() {
        console.log("connectedCallback");
        console.log("record", this.record);
        console.log("records", this.records);
    }

    handleLabelChange(event) {
        console.log("In handleLabelChange");
        this.label = event.target.value;
        console.log("this.label", this.label);
    }
    
    set fullRecord(items) {
        console.log("items", items);
        this.records = items.map(item => {
            return {
                label : item.label ,
            }
        })
    }
}