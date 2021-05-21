

class Employee{

    constructor(id, name){
        this.id = id;
        this.name = name;
        this.workingDays;
        this.salary;
    }

        getSalaryAmount(totalLeave,totalDays){
        const work = this.workingDays = totalDays - totalLeave;
        const salary = this.salary = work *8 *15;

        return salary

    }


}


class UI {

    static displayEmployeeInfo(){
        const emps = Store.getSalary()

        emps.forEach(emp => UI.addEmployee(emp) )
    }

    static addEmployee(emp){
        const element = document.querySelector('.results')
        
        const row = document.createElement('tr');
        row.innerHTML = `
        <td> ${emp.id}</td>
        <td> ${emp.name}</td>
        <td> ${emp.workingDays}</td>
        <td> ${emp.salary}</td>
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
//Adding a book via the FORM
form.addEventListener('submit', e => {
    e.preventDefault()
    //reading form values
    const id = document.getElementById('id').value;
    const name = document.getElementById('name').value;
    const leave = document.getElementById('off').value;
    const workdays = document.getElementById('wday').value;
    
    const emp = new Employee(id, name)
    emp.getSalaryAmount(leave, workdays)
    
    //  employee.getSalaryAmount(workdays, leave)
    Store.addSalary(emp)
    
    UI.addEmployee(emp)
    
    //    Store.addSalary()
    //Clear Form fields
    form.reset()
})


// const emp = new Employee(101, 'Saalu', 4);

// console.log(emp);

document.addEventListener('DOMContentLoaded', () => UI.displayEmployeeInfo())



