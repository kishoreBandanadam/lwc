/* eslint-disable no-console */
import { LightningElement, track } from 'lwc';

export default class TestBinding extends LightningElement {
    @track myList = [{Name : "Kishore", Industry : "Birlasoft", Id : Math.random()*10000000000000000+"001"},
                     {Name : "Suresh", Industry : "TCS",  Id : Math.random()*10000000000000000+"001"}];

    handleNameChange(event) {
        let element = this.myList.find(ele  => ele.Id === event.target.dataset.id);
        element.Name = event.target.value;
        this.myList = [...this.myList];
        console.log(JSON.stringify(this.myList));
    }

    handleIndustryChange(event) {
        let element = this.myList.find(ele  => ele.Id === event.target.dataset.id);
        element.Industry = event.target.value;
        this.myList = [...this.myList];
        console.log(JSON.stringify(this.myList));
    }

    add() {
        let newList = this.myList;
        newList.push({Name : "", Industry : "",  Id : Math.random()*10000000000000000+"001"});
        this.myList = newList;
        console.log('myList', JSON.stringify(this.myList));
        console.log('myList size::',this.myList.length);
    }

    remove(event) { 
        let indexPosition = event.currentTarget.name;
        console.log("indexPosition",indexPosition);
        if(this.myList.length > 1) 
        this.myList.splice(indexPosition, 1);
    }
}