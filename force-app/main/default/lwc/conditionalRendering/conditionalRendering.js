import { LightningElement, wire } from 'lwc';
import getAccounts from '@salesforce/apex/accList.getAccounts';

export default class ConditionalRendering extends LightningElement {
    @wire(getAccounts) records;
    
}