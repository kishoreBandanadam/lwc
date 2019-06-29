/* eslint-disable no-console */
import { LightningElement, track } from 'lwc';

export default class MultiSelectPickList extends LightningElement {

    @track open = '';

    onFocus() {
        //this.open = "slds-is-open";
        const div = this.template.querySelector('.slds-is-close');
        console.log('onFocus before', div.classList);
        div.classList.replace('slds-is-close', 'slds-is-open');
        console.log('onFocus After', div.classList);
    }

    onBlur() {
        //this.open = "slds-is-close";
        const div = this.template.querySelector('.slds-is-open');
        console.log('onBlur before', div.classList);
        div.classList.replace('slds-is-open', 'slds-is-close');
        console.log('onBlur After', div.classList);
    }
}