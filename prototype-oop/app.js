
function Client(n, b){
    this.name = n;
    this.balance = b;
    
}


Client.prototype.membership = function(){
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

Client.prototype.clientInfo = function(){
    return `Name: ${this.name}, Balance: ${this.balance}, Membership: ${this.membership()}`
}


Client.prototype.withdraw = function(amount){
    this.balance  -= amount;
}

Client.prototype.deposit = function(amount){
    this.balance  += amount;
}
Client.prototype.getBalance = function(){
    return this.balance;  
}










const person = new Client('Saalih', 700)


console.log(person.clientInfo());

person.withdraw(400);
console.log(person.clientInfo());
person.deposit(900);

console.log(person.clientInfo());
console.log(person.getBalance());
