class Employee {
    constructor(name, surname, baseSalary, exp) {
        this.name = name;
        this.surname = surname;
        this.baseSalary = baseSalary;
        this.expr = expr;
    }
    countedSalary() {
        if (this.expr > 2 && this.expr < 5) {
            return this.baseSalary+200;
        }
        if (this.expr >= 5) {
            return this.baseSalary * 1.2 + 500;
        }
        return this.baseSalary;
       
    };
}

class Developer extends Employee {
    constructor(name, surname, baseSalary, expr) {
        super(name, surname, baseSalary, expr);
    }
}

class Designer extends Employee {
    constructor(name, surname, baseSalary, expr, effCoeff) {
        super(name, surname, baseSalary, expr);
        this.effCoeff = effCoeff;
    }
    countedSalary() {
        return (super.countedSalary() * this.effCoeff).toFixed();
    }
}

class Manager extends Employee {
    constructor(name, surname, baseSalary, expr, team) {
        super(name, surname, baseSalary, expr);
        this.team = team;
    }
    countedSalary() {
        let developersAmount = 0;
        let salary = super.countedSalary();
        for (let item of this.team) {
            if (item.constructor.name == "Developer")  developersAmount++;
        }
        if (this.team.length > 5 && this.team.length < 10) salary += 200;
        if (this.team.length >= 10 ) salary += 300;
        if (developersAmount > this.team.length / 2 ) salary *= 1.1;
        return salary.toFixed();
        
    }
}

class Departament {
    constructor(managers) {
        this.managers = managers;
    }
    giveSalary() {
        this.managers.forEach(manager => {
            console.log(`${manager.name} ${manager.surname} receives ${manager.countedSalary()} money`);
            manager.team.forEach(employee => {
                console.log(`${employee.name} ${employee.surname} receives ${employee.countedSalary()} money`);
            });
        });
    }
}