public class createAcc {
	
    @AuraEnabled
    public static Account createAccount(Account acc) {
        /*Account a = new Account();
        a.Name = acc.Name;*/
        system.debug('acc'+acc);
        insert acc;
        return acc;
    }
    
    @AuraEnabled
    public static Account viewRecord(Id recordId) {
        Account acc = [Select Id, Name, Industry, Phone from Account where Id=: recordId];
        return acc;
    }
}