import Currency from "./3-currency";

export default class Pricing{
    constructor(amount, currency){
        // Validate the input types
        if (typeof amount !== 'number') throw new TypeError('Amount must be a number');
        if (!(currency instanceof Currency)) throw new TypeError('Currency must be a Currency instance');
        this._amount = amount;
        this._currency = currency;
    }

    //getters
    get amount(){
        return this._amount;
    }
    
    get currency(){
        return this._currency;
    }
    
    //setters
    set amount(newAmount) {
        if (typeof newAmount !== 'number') {
          throw new TypeError('Amount must be a number');
        }
        this._amount = newAmount;
      }

    
    set currency(newCurrency) {
    if (!(newCurrency instanceof Currency)) {
        throw new TypeError('Currency must be a Currency instance');
    }
    this._currency = newCurrency;
    }
    
    // methods
    displayFullPrice(){
        return `${this._amount} ${this._currency.name} ${this._currency.code}`;
    }
    
    static convertPrice(amount, conversionRate) {
        if (typeof amount !== 'number' || typeof conversionRate !== 'number') {
          throw new TypeError('Both amount and conversionRate must be numbers');
        }
        return amount * conversionRate;
    }

}