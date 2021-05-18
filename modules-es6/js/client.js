
export const clientName = 'Saalu';

export const amount = 300;


// export function displayInfo(name, amount){
//     return `Client: ${name} - Amount: ${amount}`
// }

export const displayInfo = (name, amount) => {
    return `Client: ${name} - Amount: ${amount}`
}


export class Client {
    constructor(name, amount){
        this.name = name;
        this.amount =amount;
    }
}