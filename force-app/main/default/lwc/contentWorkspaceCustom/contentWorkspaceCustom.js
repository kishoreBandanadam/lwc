/* eslint-disable no-console */
import { LightningElement, wire, track } from 'lwc';
//import { refreshApex } from '@salesforce/apex';
import contentWorkspaces from '@salesforce/apex/contentWorkspaceCustom.contentWorkspaces';
import getFiles from '@salesforce/apex/contentWorkspaceCustom.getFiles';
import { NavigationMixin } from 'lightning/navigation';

export default class ContentWorkspaceCustom extends NavigationMixin(LightningElement) {

    @track files;
    @track isopen = false;

    @wire(contentWorkspaces) contentWorkspaces;

    callGetFiles(event) {

        //let contentWSId = event.target.value;
        let contentWSId = event.target.getAttribute('data-id');
        console.log("contentWSId", contentWSId);

        getFiles({CntWorkspaceId : contentWSId})
        .then(result => {
            this.message = result;
            this.error = undefined;
            this.files = this.message
            console.log("this.files", this.files);
            this.isopen = true;
        })
        .catch(error => {
            this.message = undefined;
            this.error = error;  
        });
    }

    closeModal() {
        this.isopen = false;
    }

    openFile(event) {
        let filesList = [];
        let fileId = event.target.getAttribute('data-id');
        console.log("fileId", fileId);
        filesList.push(fileId);
        console.log("filesList", filesList);

        this[NavigationMixin.Navigate]({
          type: "standard__namedPage",
          attributes: {
            pageName: "filePreview"
          },
          state: {
            recordIds: fileId,
          }
        });
    }
}