// import {businessName,amount} from './client.js'
import * as Test from './client.js'
import {Business} from './business.js'

// console.log(Client)
// console.log(Client.clientName);
// console.log(Client.amount);

const info = Test.displayInfo('Silas', '450')
console.log(info);

let client = new Test.Client('Amazon', 23345000)
console.log(client);

let business = new Business('GTUC',5360000, 'Education')
console.log(business);
console.log(business.displayInfo());



