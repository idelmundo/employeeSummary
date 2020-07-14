// TODO: Write code to define and export the Employee class
const inquirer = require("inquirer");
const { getDiffieHellman } = require("crypto");

class Employee {
    constructor(Name, ID, Email) {
        this.Name = Name;
        this.ID = ID;
        this.Email = Email;
    }
    getName() {
        return this.name;
    }

    getID() {
        return this.ID
    }

    getEmail() {
        return this.Email;
    }
}
module.exports = Employee

//https://javascript.info/class-inheritance#super-internals-homeobject