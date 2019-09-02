import { LightningElement } from 'lwc';
import KISHORE from '@salesforce/resourceUrl/kishore';

export default class Illustration2 extends LightningElement {
    get svgURL()  {
        return KISHORE;
    }
}