global class contactBatch Implements Database.Batchable<SObject>{

    global Database.QueryLocator start(Database.BatchableContext BC) {

        String query = 'Select Id, Description, Account.rating from contact where Account.rating != null';
        return Database.getQueryLocator(query);
    }

    global void execute(Database.BatchableContext BC, List<Contact> scope) {

        List<Contact> contactList = new List<Contact>();

        for(contact con : scope) {
            con.description = 'Related account has'+''+ con.Account.rating +''+'Asociated with it';
            contactList.add(con);
        }

        if(contactList.size() > 0 && contactList != null) {
            update contactList;
        }
    }

    global void finish(Database.BatchableContext BC) {
        
    }
}
