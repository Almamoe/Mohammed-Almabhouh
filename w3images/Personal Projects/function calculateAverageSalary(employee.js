function calculateAverageSalary(employees, department){
    const filteredEmployees = employees.filter(employee => 
        employee.department === department && employee.yearsOfExperience > 5
    );

    let totalSalary = filteredEmployees.reduce((sum, employee) => sum + employee.salary, 0);

    if (filteredEmployees.length == 0)
        return 0;
    else
        return totalSalary / filteredEmployees.length
}

const employees = [
    { name: 'Alice', department: 'Engineering', salary: 90000, yearsOfExperience: 6 },
    { name: 'Bob', department: 'Marketing', salary: 60000, yearsOfExperience: 4 },
    { name: 'Charlie', department: 'Engineering', salary: 120000, yearsOfExperience: 10 },
    { name: 'Diana', department: 'Engineering', salary: 80000, yearsOfExperience: 3 },
];

console.log(calculateAverageSalary(employees, 'Engineering'));