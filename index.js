// Write your solution in this file!
const employee = {name: "Jordan", streetAddress: "4000 montegie st"};

function updateEmployeeWithKeyAndValue(employee, key, value){
    const nEmployee = Object.assign({}, employee, {[key]:value});
    return nEmployee;
}

function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value){
    employee[key] = value;
    return employee;
}

function deleteFromEmployeeByKey(employee, key){
    const nEmployee = {...employee};
    delete nEmployee[key];
    return nEmployee;
}

function destructivelyDeleteFromEmployeeByKey(employee, key){
    delete employee[key];
    return employee;
}