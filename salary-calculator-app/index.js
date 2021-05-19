
class Employee{

    constructor(id, name){
        this.id = id;
        this.name = name;
        this.workingHoursPerDay = 8;
        this.hourlyRate = 15;
        this.workingDays;
    }

    static getSalaryAmount(totalDays, totalLeave){
        // const work = this.workingDays = Number(totalDays) - Number(totalLeave);
        const work = this.workingDays = totalDays - totalLeave;
        let salary = work *8 *15;

        return salary

    }


}


class UI {

    static displayEmployee(id,name, salary){
    const element = document.querySelector('.results')

    const row = document.createElement('tr');
    row.innerHTML = `
        <td> ${id}</td>
        <td> ${name}</td>
        <td> ${salary}</td>
    `;

    element.appendChild(row);
}

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

    console.log(leave, workdays);

   const salary = Employee.getSalaryAmount(workdays, leave)
    
   UI.displayEmployee(id, name, salary)
    //Clear Form fields
    form.reset()
})


// const emp = new Employee(101, 'Saalu', 4);

// console.log(emp);




    
    