public with sharing class objectOriented {

    private double amount;

    static {
        System.debug('In static block');
    }

    public objectOriented() {
        System.debug('This is default constructor - 10');
        amount = 10;
    }

    public objectOriented(Double amount) {
        System.debug('This is default constructor - 20');
        this.amount = amount;
    }

    public Double calculateAmount(Integer count) {
        System.debug('Calculated value - '+ amount * count);
        return amount * count;
    }
}
