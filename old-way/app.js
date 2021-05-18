
function Client(n, b){
    this.name = n;
    this.balance = b;

    this.membership = function(){
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

    this.clientInfo = function(){
        return `Name: ${this.name}, Balance: ${this.balance}, Membership: ${this.membership()}`
    }

    
    this.withdraw = function(amount){
        this.balance  -= amount;
    }

    this.deposit = function(amount){
        this.balance  += amount;
    }
    this.getBalance = function(){
        return this.balance;  
    }

    
}


const person = new Client('Saalih', 700)


console.log(person.clientInfo());

person.withdraw(400);
console.log(person.clientInfo());
person.deposit(900);

console.log(person.clientInfo());
