/* eslint-disable @lwc/lwc/no-async-operation */
/* eslint-disable no-console */
import { LightningElement, track } from 'lwc';

export default class LeadForm extends LightningElement {

    @track flag = false;
    @track main = true;

    //stencil
    @track cols = [1,2];
    @track opacs = ['opacity: 0.6', 'opacity: 0.5', 'opacity: 0.4', 'opacity: 0.3'];
    @track double = true;

    //For Stencil
    @track stencilClass = '';
    @track stencilReplacement = 'slds-hide'; 
    
    @track myPadding = 'slds-modal__content';

    @track toast1 = 'slds-hide'; 
    @track toast2 = 'slds-hide'; 
    @track illustration2 = 'slds-hide';

    openModal() {
        this.stencilClass = '';
        this.stencilReplacement = 'slds-hide';
        this.myPadding = 'slds-modal__content';
        this.flag = true;
        this.main = true;
    }
    closeModal() {
        this.flag = false;
        this.stencilClass = '';
        this.stencilReplacement = 'slds-hide'; 
        this.myPadding = 'slds-modal__content'; 
    }

    connectedCallback() {
        if (this.flag === false) {
            setTimeout(() => {
                if (this.flag === false)
                    this.openModal();
            }, 30000);
        }
    }

    handleLoad(event) {
        let details = event.detail;
        
        if(details) {
            setTimeout(() => {
                this.stencilClass = 'slds-hide';
                this.stencilReplacement = '';
                this.myPadding = 'slds-p-around_medium slds-modal__content';
            }, 1000);
        }
    }

    handleSubmit() {
        this.template.querySelector('lightning-record-edit-form').submit();

    }

    handleSuccess() {
        this.myPadding = 'slds-modal__content';
        this.stencilReplacement = 'slds-hide';
        this.stencilClass = ''; 

        this.main = false;
        this.illustration2 = '';
        this.stencilClass = 'slds-hide';

        setTimeout(() => {
            this.flag = false;
            this.illustration2 = 'slds-hide';
        }, 3000);
        

        
    }

    handleError(event) {
        let error = event.detail.message;
        console.log("error", error);

        /*this.toast2 = '';

        setTimeout(() => {
            this.toast2 = 'slds-hide';
        }, 1000);*/

        setTimeout(() => {
            this.illustration2 = 'slds-hide';
        }, 5000);
    }

    handleReset(event) {
        console.log("Event", event);
        const inputFields = this.template.querySelectorAll(
            'lightning-input-field'
        );
        if (inputFields) {
            inputFields.forEach(field => {
                field.reset();
            });
        }
     }
}