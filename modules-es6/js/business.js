import {Client} from './client.js'


export class Business extends Client{
    constructor(name, amount, category){
        super(name, amount);
        this.category = category
    }

    displayInfo(){
        return `Client: ${this.name} - Amount: ${this.amount}
         - Category: ${this.category}`
    }
}