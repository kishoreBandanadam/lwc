/* eslint-disable no-alert */
/* eslint-disable no-console */
import { LightningElement, track } from 'lwc';

export default class DynamicRowsParentLwc extends LightningElement {
    
    @track myList = [{Name : "Kishore", Industry : "Birlasoft", Id : Math.random().toString(36).substring(2, 15)},
                     {Name : "Suresh", Industry : "TCS",  Id : Math.random().toString(36).substring(2, 15)}];

    
    handleChange(event) {
        let element = this.myList.find(ele  => ele.Id === event.detail.Id);
        element.Name = event.detail.Name;
        element.Industry = event.detail.Industry;
        element.Id = event.detail.Id;
        this.myList = [...this.myList];
        console.log('New Record in Parent',JSON.stringify(this.myList));
    }

    add() {
        let newList = this.myList;
        newList.push({Name : "", Industry : "",  Id : Math.random().toString(36).substring(2, 15)});
        this.myList = newList;
    }
    
    remove(indexVar) { 
        console.log("indexPosition",indexVar);
        if(this.myList.length > 1) 
        this.myList.splice(indexVar, 1);
    }

    getIndex(event) {
        let index = event.detail;
        this.remove(index);
    }
}