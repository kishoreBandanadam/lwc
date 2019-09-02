/* eslint-disable no-console */
import { LightningElement, track, wire, api } from 'lwc';
import { getPicklistValuesByRecordType } from 'lightning/uiObjectInfoApi';
import { getObjectInfo } from 'lightning/uiObjectInfoApi';
import { CurrentPageReference } from 'lightning/navigation';
import { registerListener, unregisterAllListeners } from 'c/pubsub';
import { NavigationMixin } from 'lightning/navigation';
import { fireEvent } from 'c/pubsub';

export default class DependentPickList4 extends NavigationMixin(LightningElement) {

    @wire(CurrentPageReference) pageRef;

    @api objectApiName; 
    @api pickListfieldApiName; //this field api name
    @api controllingFieldApi; //parent field api name that is controlling field api name
    //@api controllingFieldValue; //parent field value
    @api label;
    @api variant;

    recordTypeIdValue;
    controllingFieldVal;
    previousValue;
    prevControllingFieldVal;
    @track value;

    /*only for lwc for mapping values in list and 
    also for mapping this dependent picklist with another dependent picklist(give unique = record Id while using in dependent picklist)*/
    @api uniqueKey;

    connectedCallback() {
        console.log("In connected callback depndent");
        registerListener('controllingValue', this.handelControllingValue, this);
    }

    @api
    get controllingFieldValue() {
        return this.controllingFieldVal;
    }
    set controllingFieldValue(value) {
        this.controllingFieldVal = value;
        this.reinitiatemap();
    }


    disconnectedCallback() {
        console.log("In disconnected callback depndent");
        unregisterAllListeners(this);
    }


    @api 
    get recordTypeId() {
        console.log("getter defaultRectype", this.recordTypeIdValue);
        return this.recordTypeIdValue;
    }
    set recordTypeId(value) {
        this.recordTypeIdValue = value;
        console.log("setter defaultRectype", this.recordTypeIdValue);
    }

    @api 
    get selectedValue() {
        console.log("getter dependent", this.value);
        return this.value;
    }
    set selectedValue(val) {
        console.log("setter dependent", val);
        this.previousValue = this.value;

        if (val === '' || val === undefined || val === null){
            this.value = { label: '--None--', value: "" }.value;
        }
        else
            this.value = val;
    }

    handelControllingValue(valuesObj) {
        console.log("In handelControllingValue", JSON.stringify(valuesObj));
        if (`${this.controllingFieldApi}${this.uniqueKey}` === valuesObj.uniqueFieldKey) {
            if (valuesObj.selValue === '' || valuesObj.selValue === null || valuesObj.selValue === undefined) {
                this.selectedValue = '';
                this.options = [{ label: '--None--', value: "" }];
            } else {
                this.selectedValue = '';
                if (this.myMap !== null && this.myMap !== undefined) {

                    let tempOptions = [{ label: '--None--', value: "" }];
                        console.log("valuesObj.selValue", valuesObj.selValue);
                        if(this.myMap.get(valuesObj.selValue)) {
                            this.myMap.get(valuesObj.selValue).forEach(opt => tempOptions.push(opt));
                        }

                    this.options = tempOptions;
                }
            }

            let selectedValue = '';
            let key = this.uniqueKey;
            //Firing change event for aura container to handle
            //For Self
            const pickValueChangeEvent = new CustomEvent('picklistchange', {
                detail: { selectedValue, key },
            });
            this.dispatchEvent(pickValueChangeEvent);
            
            //For dependent picklist
            let eventValues = { selValue: '', uniqueFieldKey: `${this.pickListfieldApiName}${this.uniqueKey}` };
            //Fire Pub/Sub Event, So that every other comp in the page knows the change
            fireEvent(this.pageRef, 'controllingValue', eventValues);
        }
    }

    
    @track options = [
                      {label : 'Default 1', value : 'Default1'},
                      {label : 'Default 2', value : 'Default2'},
                      {label : '--None--', value : ''}
                     ];

    @track myMap = undefined;

    @wire(getObjectInfo, { objectApiName: '$objectApiName' })
    getRecordTypeId({ error, data }) {
        if (data) {
            this.record = data;
            this.error = undefined;
            if(this.recordTypeId === undefined){
                this.recordTypeId = this.record.defaultRecordTypeId;
            }
            console.log("Default Record Type Id", this.record.defaultRecordTypeId);
        } else if (error) {
            this.error = error;
            this.record = undefined;
            console.log("this.error",this.error);
        }
    }

    @wire(getPicklistValuesByRecordType, { recordTypeId: '$recordTypeId', objectApiName: '$objectApiName' })
    wiredOptions({ error, data }) {
        if (data) {
            this.record = data;
            this.error = undefined;

           let pickMap = new Map();

                if(this.record.picklistFieldValues[this.pickListfieldApiName] !== undefined) {
                    if(this.record.picklistFieldValues[this.pickListfieldApiName].controllerValues !== undefined) {

                        const controllerValues = this.record.picklistFieldValues[this.pickListfieldApiName].controllerValues;

                        Object.entries(controllerValues).forEach(([key, value]) =>  {
                            const picValues = this.record.picklistFieldValues[this.pickListfieldApiName].values;
                            picValues.forEach(pickValue => {
                                if(pickValue.validFor.includes(value)) {
                                    if(pickMap.has(key)){
                                        let temp = pickMap.get(key);
                                        temp.push(pickValue);
                                        pickMap.set(key, temp);
                                    }else {
                                        let temp2 = [];
                                        temp2.push(pickValue);
                                        pickMap.set(key, temp2);
                                        console.log("In inner else", temp2);
                                    }
                                }
                                    
                            });
                        });
                        console.log("MAP",pickMap);
                        this.myMap = pickMap;
                        console.log("In Wire", this.myMap);
                        console.log("etter controllingFieldValue",this.controllingFieldValue);
                        //Checking if selected and controlling values exist, and populating values accordingly
                        if (this.selectedValue) {
                            this.value = this.selectedValue;
                            if (!this.controllingFieldValue) {
                                this.options = [{ label: this.selectedValue, value: this.selectedValue }];
                                return;
                            }
                        }
                        else if (!this.controllingFieldValue) {
                            this.options = [{ label: '--None--', value: '' }];
                            this.value = this.options[0].value;
                            return;
                        }
                        else if(!this.selectedValue) {
                            
                            this.value = { label: '--None--', value: '' }.value;
                        }

                        this.initiateMap(pickMap);
                        console.log("Initial selectedValue ", this.selectedValue);

                    }else {
                        console.log("Error: This field is not a dependent picklist!");
                    }
                }else {
                    console.log("Error in fetching picklist values! Invalid picklist field");
                }
            console.log("***Initial Options*** ", JSON.stringify(this.options));
        } else if (error) {
            this.error = error;
            this.record = undefined;
            console.log("this.error",this.error);
        }
    }

    handleChange(event) {
        console.log("etter selected val in handle change", this.selectedValue);
        this.value = event.target.value;
        console.log("event.target.value",event.target.value);
        console.log("this.value",this.value);
        let selectedValue = this.value;
        let key = this.uniqueKey;
        //Firing change event for aura container to handle
        //For Self
        const pickValueChangeEvent = new CustomEvent('picklistchange', {
            detail: { selectedValue, key },
        });
        this.dispatchEvent(pickValueChangeEvent);

        //For dependent picklist
        let eventValues = {selValue : selectedValue, uniqueFieldKey: `${this.pickListfieldApiName}${this.uniqueKey}`};
        //Fire Pub/Sub Event, So that every other comp in the page knows the change
        fireEvent(this.pageRef, 'controllingValue', eventValues);
    }
    
    initiateMap(thisMap) {
        this.myMap = thisMap;

        if (thisMap !== null && thisMap !== undefined) {
            let tempOptions = [{ label: '--None--', value: "" }];
            if (this.controllingFieldValue !== null && this.controllingFieldValue !== undefined && this.controllingFieldValue !== '') {
                console.log("this.controllingFieldValue", this.controllingFieldValue);
                if(this.myMap.get(this.controllingFieldValue)) {
                    this.myMap.get(this.controllingFieldValue).forEach(opt => tempOptions.push(opt));
                }
            }
            this.options = tempOptions;
        }
        console.log("***Final Options dependent Picklist*** ", JSON.stringify(this.options));
    }
    
    
    reinitiatemap() {
        if (this.myMap !== null && this.myMap !== undefined){
            this.initiateMap(this.myMap);
            console.log("this.myMap length", this.myMap.length);
        }
    }

}