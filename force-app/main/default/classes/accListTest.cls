@isTest
public class accListTest {
    
    @testSetup static void setup() {
        List<Account> accList1 = new List<Account>();
        for(integer i = 0; i < 200; i++) {
            Account account1 = new Account();
            account1.Name = 'TestAccount'+i;
            account1.Industry = 'TestIndustry'+i;
            account1.Phone = '12345678'+i;
            accList1.add(account1);
        }
        insert accList1;
    }
    
    @isTest static void testMethod1() {
        
        accList.getAccounts();
        List<account> aList = [Select Id, Name, Industry, Phone from account limit 1];
        accList.getAccount(aList[0].Id);
	    accList.updateAcc(aList[0]);
        
        
    }
}