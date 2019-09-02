import { LightningElement } from 'lwc';
import KISHORE from '@salesforce/resourceUrl/kishore';

export default class Illustration extends LightningElement {
    get svgURL()  {
        return KISHORE;
    }
}