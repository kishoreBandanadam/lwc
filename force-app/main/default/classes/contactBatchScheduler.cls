global class contactBatchScheduler implements Schedulable{
    global void execute(SchedulableContext ctx) {
        contactBatch cB = new contactBatch();
        Database.executeBatch(cB, 5);
    }
}
