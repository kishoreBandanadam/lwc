/* eslint-disable no-console */
import { LightningElement, track, wire, api } from 'lwc';
import { getPicklistValuesByRecordType } from 'lightning/uiObjectInfoApi';
import { getObjectInfo } from 'lightning/uiObjectInfoApi';

export default class DependentPickList2 extends LightningElement {

    @api objectApiName = undefined;
    @api recordTypeId = undefined;
    @api pickListfieldApiName = undefined;
    controllingFieldVal;
    @api label = undefined;
    @api variant;
    previousValue;
    @track value = undefined;

    @api 
    get selectedValue() {
        console.log("getter dependent", this.value);
        return this.value;
    }
    set selectedValue(val) {
        console.log("setter dependent", val);
        this.previousValue = this.value;

        if (val === '' || val === undefined || val === null)
            this.value = { label: '--None--', value: "" }.value;
        else
            this.value = val;

        this.value = val;
    }

    @api
    get controllingFieldValue() {
        console.log("setter controllingFieldValue", this.controllingFieldVal);
        return this.controllingFieldVal;
    }
    set controllingFieldValue(value) {
        if ((this.controllingFieldVal !== value && this.previousValue === this.selectedValue) ) {
            console.log("etter null");
            let opt = [{ label: '--None--', value: "" }];
            this.value = opt[0].value;
            let selectedValue = this.value;
            const pickValueChangeEvent = new CustomEvent('picklistchange', {
                detail: { selectedValue },
            });
            this.dispatchEvent(pickValueChangeEvent);

        }
            this.controllingFieldVal = value;
            this.reinitiatemap();
            console.log("getter controllingFieldValue", this.controllingFieldVal);
    }
    
    @track options = [
                      {label : 'Default 1', value : 'Default1'},
                      {label : 'Default 2', value : 'Default2'},
                      {label : '--None--', value : ''}
                     ];
    //@track value = '';
    @track myMap = undefined;

    @wire(getObjectInfo, { objectApiName: '$objectApiName' })
    getRecordTypeId({ error, data }) {
        if (data) {
            this.record = data;
            this.error = undefined;
            if(this.recordTypeId === undefined){
                //this.recordTypeId = this.record.defaultRecordTypeId;
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
                                        //console.log("In inner if", pickMap.has(key));
                                        //console.log("In inner if temp", temp);
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

        //Firing change event for aura container to handle
        const pickValueChangeEvent = new CustomEvent('picklistchange', {
            detail: { selectedValue },
        });
        this.dispatchEvent(pickValueChangeEvent);
    }
    
    initiateMap(thisMap) {
        this.myMap = thisMap;

        if (thisMap !== null && thisMap !== undefined) {
            //this.options = this.myMap.get(this.controllingFieldValue);
            //this.options.push({ label: 'None', value: "" });
            let tempOptions = [{ label: '--None--', value: "" }];
            if (this.controllingFieldValue !== null && this.controllingFieldValue !== undefined && this.controllingFieldValue !== '') {
                console.log("this.controllingFieldValue", this.controllingFieldValue);
                this.myMap.get(this.controllingFieldValue).forEach(opt => tempOptions.push(opt));
            }
            this.options = tempOptions;
        }
        //console.log("this.myMap", this.myMap);
        console.log("***Final Options dependent Picklist*** ", JSON.stringify(this.options));
    }
    
    
    reinitiatemap() {
        if (this.myMap !== null && this.myMap !== undefined){
            this.initiateMap(this.myMap);
            console.log("this.myMap length", this.myMap.length);
        }
    }

    //call this method just to refresh fresh data like custom refresh
    @api
    refresh() {
        this. value = this.selectedValue;
    }

}