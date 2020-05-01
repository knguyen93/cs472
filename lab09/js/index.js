"use strict";

// Question 1:
let person = {
    name: "",
    dateOfBirth: "",
    getName: function () {
        return this.name;
    },
    setName: function (n) {
        this.name = n;
    }
};

function createAndPrintJohn() {
    let john = Object.create(person);
    john.setName("John");
    john.dateOfBirth = "1998-12-10";
    console.log("The person's name is " + john.getName());
    console.log("John was born on " + john.dateOfBirth);
};

// Question 2:
function createEmployee() {
    let employee = Object.create(person);
    employee.salary = 0;
    employee.hireDate = new Date();
    employee.doJob = function(jobTitle) {
        console.log(this.getName() + " is a " + jobTitle + " who earn $" + this.salary);
    };

    let Anna = Object.create(employee);
    Anna.setName("Anna");
    Anna.salary = 249,995.50;
    Anna.doJob("Programmer");
};

// Question 3:
function Person(name, dateOfBirth) {
    this.name = name;
    this.dateOfBirth = dateOfBirth;
    this.toString = function() {
        console.log(`{Name ${this.name}, DateOfBirth: ${this.dateOfBirth}}`);
    }
}

// Question 4:
/**
 * Refer to Lab04 with following URLs:
 * 
 * a. Login Form: https://knguyen93.github.io/cs472/lab04
 * b. New Product Form: https://knguyen93.github.io/cs472/lab04/new-product
 */

// Test
(function test() {
    createAndPrintJohn();
    createEmployee();
    new Person("Peter", "1985-11-10").toString();
})();