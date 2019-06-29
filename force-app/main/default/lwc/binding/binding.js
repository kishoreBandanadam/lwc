import { LightningElement, track } from 'lwc';

export default class Binding extends LightningElement {

    @track property = '';

    handleChange(event) {
        this.property = event.target.value;
    }

    get upperClass() {
        return this.property.toUpperCase();
    }
}
