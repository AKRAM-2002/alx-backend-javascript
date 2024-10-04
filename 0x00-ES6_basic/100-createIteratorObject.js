export default function createIteratorObject(report) {
  const departments = Object.values(report.allEmployees);
  const employees = [];

  // Flatten the employee lists from all departments into one array
  departments.forEach((department) => {
    employees.push(...department);
  });

  // Return an iterator over the flattened employees array
  return {
    * [Symbol.iterator]() {
      for (const employee of employees) {
        yield employee;
      }
    },
  };
}
