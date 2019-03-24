declare module "@salesforce/apex/accList.getAccounts" {
  export default function getAccounts(): Promise<any>;
}
declare module "@salesforce/apex/accList.getAccount" {
  export default function getAccount(param: {recId: any}): Promise<any>;
}
declare module "@salesforce/apex/accList.updateAcc" {
  export default function updateAcc(param: {acc: any}): Promise<any>;
}
