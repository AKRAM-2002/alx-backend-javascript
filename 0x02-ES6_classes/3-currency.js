export default class Currency{
    constructor(code, name){
        // Validate the input types
        if (typeof code !== 'string') throw new TypeError('Code must be a string');
        if (typeof name !== 'string') throw new TypeError('Name must be a string');
        this._code = code;
        this._name = name;
    }

    //getters & setters
    get code(){
        return this._code;
    }
    set code(value){
        if(typeof value ==='string' ){
            this._code = value;
        }
    }
    get name(){
        return this._name;
    }
    set name(value){
        if(typeof value ==='string'){
            this._name = value;
        }
    }
    //to string method
    displayFullCurrency(){
        return `${this._name} (${this._code})`;
    }

}