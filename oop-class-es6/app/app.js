
class Client{

    constructor(n,b){
        this.name = n;
        this.balance = b;

    }

    membership() {
        let name;
    
        if(this.balance > 1000){
            name = 'Gold';
        }else if(this.balance > 500){
            name = 'Platinum';
        }
        else{
            name = 'Normal';
        }
    
        return name
    }
  
    clientInfo(){
        return `Name: ${this.name}, Balance: ${this.balance}
        ,Membership: ${this.membership()}`
    }

    withdraw(amount){
        // this.balance  -= amount;
        this.balance  = amount - this.balance;
    }

    deposit(amount){
        // this.balance  += amount;
        this.balance  = amount + this.balance;
    }

    getBalance(){
        return this.balance;  
    }

    // static method does not require instantiation 
    // it is called via the class itself 'Client.welcome()'
    static welcome(){
        return `Welcome ${this.name}, to your bank`
    }

}

const person = new Client('Saalih', 800)


console.log(person.clientInfo());
person.withdraw(200);
console.log(person.clientInfo());
person.deposit(1700);
console.log(person.clientInfo());

console.log(Client.welcome());


//extending the constructor of Client to Business

class Business extends Client{
    constructor(n, b, p, c){
        super(n,b);
        this.phone = p;
        this.category =c;
    }

    clientInfo(){
       return `Name:  ${this.name}, Balance: ${this.balance}, Phone: ${this.phone}, Category: ${this.category}`
    }

    clientInfo(){
        return 'Welcome to banking for business,' + this.name
    }


}

const business1 = new Business('TechGarage', 400000, 233555666888, 'Technology')

console.log(business1);
console.log(business1.clientInfo());