public class accList {

    @AuraEnabled(cacheable = true)
    public static List<Account> getAccounts() {
        return [Select Id, Name, Industry, Phone from Account Limit 10];
    }
    
    @AuraEnabled
    public static Account getAccount(Id recId) {
        
        Account acc = [Select Id, Name, Industry, Phone from Account where Id =: recId];
        return acc;
    }
    
    @AuraEnabled
    public static Account updateAcc(Account acc) {
        
		update acc;
        return acc;
    }
}