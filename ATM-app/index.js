
class Bank{

    constructor(accno, name, deposit, withdraw, balance){
        this.accno = accno;
        this.name = name;
        this.deposit = deposit;
        this.withdraw = withdraw;
        this.balance = 1000
    }

    static getBalance(){
        return this.balance;
    //    this.balance = 9

        
    }

    static depositAmount(amt){
        this.balance += Number(amt)

    }

    static withdrawAmount(amt){
        this.balance -= Number(amt)
        

    }


}



class UI {

    static displayClientInfo(){
        
    }

    static addClient(emp){
        const element = document.querySelector('.results')
        
        const row = document.createElement('tr');
        row.innerHTML = `
        <td> ${emp.id}</td>
        <td> ${emp.name}</td>
        <td> ${emp.prevBalance}</td>
        <td> ${emp.balance}</td>
        `;
        
        element.appendChild(row);
    }
    
}


class Store {

    static getSalary(){
        let employees;
        
        if(localStorage.getItem('employees') === null){
            employees = [];
        }else{
            employees = JSON.parse(localStorage.getItem('employees'))
        }
        
        return employees;
        
    }
    static addSalary(emp){
        let employees = Store.getSalary()
        
        employees.push(emp)
        
        localStorage.setItem('employees', JSON.stringify(employees))
        
    }
    static removeSalary(){}
}






const form = document.getElementById('form')
const depositBtn = document.getElementById('deposit-btn')
const withdrawBtn = document.getElementById('withdraw-btn')
const checkBtn = document.getElementById('check-btn')
//Adding a book via the FORM

depositBtn.addEventListener('click', e => {
    e.preventDefault()
    //reading form values
    const accno = document.getElementById('accno').value;
    const name = document.getElementById('name').value;
    const deposit = document.getElementById('deposit').value;
    
    Bank.depositAmount(deposit)
    const client = new Bank(accno, name, deposit)


    console.log(client);

    // UI.addClient()
    
})

withdrawBtn.addEventListener('click', e => {
    e.preventDefault()
    //reading form values
    const accno = document.getElementById('accno').value;
    const name = document.getElementById('name').value;
    const withdraw = document.getElementById('withdraw').value;
    
    Bank.withdrawAmount(withdraw)
    const client = new Bank(accno, name, withdraw)


    console.log(client);

    // UI.addClient()
    
})

checkBtn.addEventListener('click', e => {
    e.preventDefault()
    //reading form values
    const accno = document.getElementById('accno').value;
    const name = document.getElementById('name').value;
   
    const client = new Bank(accno, name)

    console.log(client);

    // UI.addClient()
    
})







// document.addEventListener('DOMContentLoaded', () => UI.displayClientInfo())
