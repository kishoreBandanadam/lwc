@isTest
public with sharing class createAccTest {


    @isTest
    static void test1() {
        Account b = new Account();
        b.Name = 'TestAccount';
        b.Industry = 'IT';
        b.Phone = '4687978465';
        insert b;

        Account a = new Account();
        a.Name = 'TestAccount';
        a.Industry = 'IT';
        a.Phone = '4687978465';

        createAcc.createAccount(a);
        createAcc.createRecord('Test');
        createAcc.viewRecord(b.Id);
    }
}
