
const readlineSync = require('readline-sync');


class BankAccount {
    constructor(owner, balance) {
        this.owner = owner
        this.balance = balance
    }

    deposit(amount) {
        this.balance += amount

    }

    withdraw(amount) {
        if (amount <= this.balance) {
            this.balance -= amount
        }
    }
}

class Bank {
    constructor(list = []) {
        this.list = list
    }

    addAccount(account) {
        this.list.push(account)
    }

    transfer(fromName, toName, amount) {
        const from = this.list.find(account => account.owner === fromName)
        const to = this.list.find(account => account.owner === toName)
        if (from && to && amount > 0 && from.balance >= amount) {
            from.withdraw(amount)
            to.deposit(amount)
        }
    }

    showBalances() {
        this.list.forEach(function (account) {
            console.log(`${account.owner}: ${account.balance}`)
        })
    }
}




console.log("Bank started!");
const bank = new Bank();

let choice = readlineSync.question("What do you want to do? choose the number \n1. Create account \n2. Transfer \n3. Show balance\n\n");


while (choice>=0 && choice<4) {

    if (choice === "1") {
        const name = readlineSync.question("Name: ");
        const balance = Number(readlineSync.question("Initial balance: "));
        bank.addAccount(new BankAccount(name, balance));
        console.log(`Account created successfully. ${name}'s balance: ${balance} \n\n`);
    }
    else if (choice === "2") {
        const fromName = readlineSync.question("From: ");
        const toName = readlineSync.question("To: ");
        const amount = Number(readlineSync.question("Amount: "));

        bank.transfer(fromName, toName, amount);
        console.log(`Transferred: ${amount}`);
        bank.showBalances();
        console.log(`\n\n`)
    }
    if (choice === "3") {
        bank.showBalances();
        console.log(`\n\n`)
    }
    choice = readlineSync.question("Choose the next step: \n1. Create account \n2. Transfer \n3. Show balance \n to exit type any other buttom\n\n");
}